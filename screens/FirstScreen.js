import React from 'react';
import{Text, View, Button, StyleSheet, ImageBackground} from 'react-native';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
 // const util = require('util');


export default class FirstScreen extends React.Component {
static navigationOptions = {
   header: null,
  };
 	render(){
 		return(
		
		 		<ImageBackground source={require('../images/dashboard.jpg')} style={styles.backgroundImage}>
					<View style={styles.buttonStyle}>
						<Button 
						style={{padding: 0}}
						title="go to Home Scren"
						onPress={() => this.props.navigation.navigate('Home')}/>
					</View>
				</ImageBackground>

 	  );
 	}
 }
 const styles = StyleSheet.create({
  	backgroundImage: {
  	height: '100%',
	alignItems:'center',
    resizeMode: 'cover',
  },
  buttonStyle:{
  	width: '80%',
  	marginHorizontal:50,
  	marginTop:500,
  }
});

