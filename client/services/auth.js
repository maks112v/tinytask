import firebase, { Unsubscribe } from "firebase";
import { createContext, useEffect, useState, useContext } from "react";
import Router from "next/router";
import Loading from "../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "../components/Login";
import { useDocumentData } from "react-firebase-hooks/firestore";

const GOOGLE_AUTH_PROVIDER = new firebase.auth.GoogleAuthProvider();

const authContext = createContext({});

export const useSession = () => useContext(authContext);

export const AuthWrapper = ({ children }) => {
  const [auth, fetchingAuth, error] = useAuthState(firebase.auth());
  const [profile, fetchingProfile, profileError] = useDocumentData(
    auth && firebase.firestore().collection(`users`).doc(auth.uid)
  );

  const isLoading = fetchingAuth;

  return (
    <authContext.Provider value={{ isLoading, auth, profile }}>
      {children}
    </authContext.Provider>
  );
};

const updateProfile = (res) => {
  console.log(res?.user);
  return Promise.all([
    firebase.firestore().collection(`users`).doc(res.user.uid).set(
      {
        email: res.user.email,
        name: res.user.displayName,
        image: res.user.photoURL,
      },
      { merge: true }
    ),
    firebase.firestore().collection(`profiles`).doc(res.user.uid).set(
      {
        name: res.user.displayName,
        image: res.user.photoURL,
      },
      { merge: true }
    ),
  ]);
};

export const withLoader = (Component) => (props) => {
  const { isLoading } = useSession();
  if (isLoading) {
    return <Loading />;
  }

  return <Component {...props} />;
};

export const withAuth = (Component) => (props) => {
  const { isLoading, auth } = useSession();
  if (isLoading) {
    return <Loading />;
  }

  if (!auth) {
    return <LoginPage />;
  }

  return <Component {...props} />;
};

export const googleLoginHandler = () => {
  return firebase
    .auth()
    .signInWithPopup(GOOGLE_AUTH_PROVIDER)
    .then(updateProfile);
};

export const logoutHandler = () => {
  return firebase.auth().signOut();
};
