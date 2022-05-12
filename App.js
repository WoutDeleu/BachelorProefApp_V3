import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/routes/AuthStack';
import {AuthProvider} from "./app/Authentication/AuthProvider";


class App extends React.Component{
  render() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AuthStack/>
            </NavigationContainer>
        </AuthProvider>
    );
  }
}

export default App;