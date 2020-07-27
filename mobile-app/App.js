import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { decode, encode } from "base-64";
import { registerRootComponent } from "expo";
import React from "react";
import { View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { AuthWrapper, useSession } from "./services/auth";
import "./services/firebase";
import { ThemeWrapper } from "./services/theme";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const RootStack = createStackNavigator();

function RootStackRouter() {
  const { auth, profile } = useSession();
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Login" component={LoginScreen} />
      {/* {auth && profile && profile?.onboard ? (
        <RootStack.Screen name="Home" component={HomeScreen} />
      ) : auth ? (
        <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <RootStack.Screen name="Login" component={LoginScreen} />
      )} */}
    </RootStack.Navigator>
  );
}

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Poppins_100Thin,
  //   Poppins_100Thin_Italic,
  //   Poppins_200ExtraLight,
  //   Poppins_200ExtraLight_Italic,
  //   Poppins_300Light,
  //   Poppins_300Light_Italic,
  //   Poppins_400Regular,
  //   Poppins_400Regular_Italic,
  //   Poppins_500Medium,
  //   Poppins_500Medium_Italic,
  //   Poppins_600SemiBold,
  //   Poppins_600SemiBold_Italic,
  //   Poppins_700Bold,
  //   Poppins_700Bold_Italic,
  //   Poppins_800ExtraBold,
  //   Poppins_800ExtraBold_Italic,
  //   Poppins_900Black,
  //   Poppins_900Black_Italic,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return <View></View>;

  return (
    <NavigationContainer>
      <ThemeWrapper>
        <AuthWrapper>
          <RootStackRouter />
        </AuthWrapper>
      </ThemeWrapper>
    </NavigationContainer>
  );
}

registerRootComponent(App);
