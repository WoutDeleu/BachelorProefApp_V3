import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/routes/AuthStack';
import {Text, View} from "react-native";


class App extends React.Component{
  render() {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>

    );
  }
}

export default App;