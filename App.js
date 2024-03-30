
import React from 'react';
import store from "./store";
import AppStack from './src/navigation/appStack';
import { Provider } from "react-redux";
export default function App() {
 
  return (
    <Provider store={store}>
    <AppStack/>
    </Provider>
  );
}
