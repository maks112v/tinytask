import firebase, { Unsubscribe } from "firebase";
import { createContext, useEffect, useState, useContext } from "react";
import Router from "next/router";
import Loading from "../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "../components/Login";
import { useDocumentData } from "react-firebase-hooks/firestore";

const storeContext = createContext({});

export const useStore = () => useContext(storeContext);

export const StoreWrapper = ({ children }) => {
  return <storeContext.Provider value={{}}>{children}</storeContext.Provider>;
};
