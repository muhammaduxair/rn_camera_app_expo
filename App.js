import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./components/config/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" backgroundColor="#fff" />
      <Navigation />
    </>
  );
}
