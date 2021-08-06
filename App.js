import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native'; 
//import { NavigationContainer } from "@react-navigation/native";  
import { NativeRouter, Switch, Route } from 'react-router-native';
import LogIn from "./LogIn"
import Profile from "./Profile" 
import GymMap from "./GymMap"



export default function App() {
  return ( 
    <NativeRouter>
      <Switch>
        <Route exact path = "/" component={LogIn}></Route> 
        <Route exact path = "/Profile" component={Profile}></Route> 
        <Route exact path = "/GymMap" component = {GymMap}></Route>
      </Switch>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});