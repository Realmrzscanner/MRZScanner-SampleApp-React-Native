 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Platform,AppState, StyleSheet, View, Text, Modal,ScrollView, Button, TouchableOpacity, Alert, NativeModules, NativeEventEmitter, Image, TextInput, ImageBackground} from 'react-native';
import {StackNavigator } from 'react-navigation';
import FirstScreen from './FirstScreen'
// const util = require('util');
const MrzApp= NativeModules.RNMrzscannerlib;
const EventEmitter = new NativeEventEmitter(MrzApp);
var subscription;

export default class HomeScreen extends React.Component<Props> {

static navigationOptions = {
header: null,
  };

  constructor() {
    super()
    this.state = {
      value : '',
      surnameResult: '',
      givennameResult: '',
      documentNumberResult: '',
      issuingCountryResult: '',
      nationalityResult: '',
      dateOfBirthResult: '',
      sexResult: '',
      estimatedIssuingDateResult:'',
      expirationDateResult: '',
      optionalValuesResult: '',
   
    }
  }


    componentDidMount(){   
    //   subscription=EventEmitter.addListener
    //   ('successfulScanEmittedEvent',
    //     (body) => 
    //      console.log("Results" + body.surname,
    //                              body.document_type_readable,
    //                              body.issuing_country,
    //                              body.surname,
    //                              body.document_number,
    //                              body.nationality,
    //                              body.dob_raw,
    //                              body.dob_readable,
    //                              body.sex )
    // );
      subscription=EventEmitter.addListener
      ('successfulScanEmittedEvent',
        (body) => {
          this.setState({surnameResult : body.surname});
          this.setState({givennameResult : body.given_names_readable});
          this.setState({documentNumberResult : body.document_number});
          this.setState({issuingCountryResult : body.issuing_country});
          this.setState({nationalityResult : body.nationality});
          this.setState({dateOfBirthResult : body.dob_readable});
          this.setState({sexResult : body.sex});
          this.setState({estimatedIssuingDateResult : body.est_issuing_date_readable});
          this.setState({expirationDateResult : body.expiration_date_readable});
          this.setState({optionalValuesResult : body.optionals});

        }
      );
      subscription=EventEmitter.addListener
      ('successfulDocumentScanEmittedEvent',
       (body) => { 
        this.setState({value : body});
       }
      );
    }

     componentWillDismount(){
        subscription.remove();
    }

  render(){   
    // util.inspect(this.props.navigation,false,null);
    const { navigate } = this.props.navigation;
    // MrzApp.registerWithLicenseKey("")

    return(
    <ScrollView >
      <View style={styles.container}>

        <View style={styles.scanButton}> 
          <Button style={{fontSize:16}}
            title="Scan MRZ"
            onPress={() => {
            MrzApp.setMaxThreads(2)
            MrzApp.setScannerType(0)
            MrzApp.startScanner()
          }}/>
      </View>
  
      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>SURNAME</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.surnameResult}
        onChangeText={(surnameResult) => this.setState({surnameResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>GIVEN NAME</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.givennameResult}
        onChangeText={(givennameResult) => this.setState({givennameResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>DOCUMENT NUMBER</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.documentNumberResult}
        onChangeText={(documentNumberResult) => this.setState({documentNumberResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>ISSUING COUNTRY</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.issuingCountryResult}
        onChangeText={(issuingCountryResult) => this.setState({issuingCountryResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>NATIONALITY</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.nationalityResult}
        onChangeText={(nationalityResult) => this.setState({nationalityResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>DATE OF BIRTH</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.dateOfBirthResult}
        onChangeText={(dateOfBirthResult) => this.setState({dateOfBirthResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>SEX</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.sexResult}
        onChangeText={(sexResult) => this.setState({sexResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>ESTIMATED ISSUING DATE</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.estimatedIssuingDateResult}
        onChangeText={(estimatedIssuingDateResult) => this.setState({estimatedIssuingDateResult})}        
        />
      </View>

      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>EXPIRATION DATE</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.expirationDateResult}
        onChangeText={(expirationDateResult) => this.setState({expirationDateResult})}        
        />

      </View>
      <View style={{marginTop:50}}>
        <Text style={styles.textArea}>OPTIONAL VALUES</Text>
        <TextInput
        style={styles.textInputArea}
        value={this.state.optionalValuesResult}
        onChangeText={(optionalValuesResult) => this.setState({optionalValuesResult})}        
        />
      </View>
    </View>

      </ScrollView>
         );
   }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#026cac',
    height: '100%',
    paddingBottom:10,
  },
  scanButton: {
    marginTop: 20,
    margin: 15,
  },
  textArea: {
    fontSize:16,
    marginLeft:5,
    color: "white",
  },
  textInputArea:{
    margin:5,
    height: 40,
    borderColor: 'white',
    borderBottomWidth:1,
    borderLeftWidth:null,
    borderRightWidth:null,
    borderTopWidth:null
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    paddingTop: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

