import React, {Component} from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from'@react-navigation/stack';
import SplashScreen from './SplashScreen';

const Stack = createStackNavigator();

export default class AppNavigation extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                screenOption = {{headerShown: false}}
                inittialouteName = {'SplashScreen'}>
                    <Stack.Screen name = "SplashScreen" component = {SplashScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}