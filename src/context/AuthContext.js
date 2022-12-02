import React, { createContext, ReactNode } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const signup = (name, email, password) => {
    axios
      .post(`${BASE_URL}/signup`, {
        name,
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.savedUser;
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`register error ${e}`);
      });
  };

  return (
    <AuthContext.Provider value={{ signup }}>{children}</AuthContext.Provider>
  );
};
