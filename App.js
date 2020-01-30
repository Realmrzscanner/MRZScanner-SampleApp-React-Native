import React from 'react';
import{Text, View} from 'react-native';


import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FirstScreen from './screens/FirstScreen'
import HomeScreen from './screens/HomeScreen'

class App extends React.Component {
	static navigationOptions = {
		title : "Home"
	}
}
const Navigation=createStackNavigator({
		First: {screen:FirstScreen},
		Home: {screen:HomeScreen}
});
export default createAppContainer(Navigation);
