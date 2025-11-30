"use client";
import { setupStore } from "@/toolkit/store";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
const store = setupStore();
interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
