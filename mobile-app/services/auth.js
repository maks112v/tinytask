import { AppLoading } from "expo";
import * as AppleAuthentication from "expo-apple-authentication";
import * as Crypto from "expo-crypto";
import firebase from "firebase";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";

const authContext = createContext({});

export const useSession = () => useContext(authContext);

export const AuthWrapper = ({ children }) => {
  const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);
  const [auth, fetchingAuth, error] = useAuthState(firebase.auth());
  const [profile, fetchingProfile, profileError] = useDocumentData(
    auth?.uid && firebase.firestore().collection(`users`).doc(auth?.uid)
  );

  async function checkApple() {
    const loginAvailable = await AppleAuthentication.isAvailableAsync();
    setAppleAuthAvailable(loginAvailable);
  }

  useEffect(() => {
    checkApple();
  }, []);

  if (fetchingAuth) {
    return <AppLoading />;
  }

  return (
    <authContext.Provider value={{ appleAuthAvailable, auth, profile }}>
      {children}
    </authContext.Provider>
  );
};

const APPLE_AUTH_PROVIDER = new firebase.auth.OAuthProvider("apple.com");

export async function appleAuthHandler() {
  const csrf = Math.random().toString(36).substring(2, 15);
  const nonce = Math.random().toString(36).substring(2, 10);
  const hashedNonce = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    nonce
  );
  const appleCredential = await AppleAuthentication.signInAsync({
    requestedScopes: [
      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
      AppleAuthentication.AppleAuthenticationScope.EMAIL,
    ],
    state: csrf,
    nonce: hashedNonce,
  });
  const { identityToken, email, state } = appleCredential;
  if (!identityToken) {
    return null;
  }
  return firebase
    .auth()
    .signInWithCredential(
      APPLE_AUTH_PROVIDER.credential({
        idToken: identityToken,
        rawNonce: nonce,
      })
    )
    .then((res) => {
      const ref = firebase.firestore().collection("users").doc(res.user.uid);
      if (res.additionalUserInfo.isNewUser) {
        return Promise.all([
          ref.set({
            email: res.user.email,
          }),
          ref
            .collection("following")
            .doc("announcement")
            .set({ createAt: moment().valueOf() }),
          ref
            .collection("following")
            .doc("live")
            .set({ createAt: moment().valueOf() }),
        ]);
      }
    })
    .catch(console.log);
}
