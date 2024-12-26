import React from "react";
import Home from "./src/screens/Home";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
};

export default App;
