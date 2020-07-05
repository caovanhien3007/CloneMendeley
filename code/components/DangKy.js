import * as React from 'react';
import { Text ,View,TextInput,TouchableOpacity,Alert} from 'react-native';
import {Firebase} from './../Firebase/Config.js';

function Test() {

 const [email,setEmail] = React.useState('');
 const [password,setPass] = React.useState('');
 
 function DangKy() {

 	Firebase.auth().createUserWithEmailAndPassword(email, password)
 	.then(
 		()=>{
 			Alert.alert(
      "Alert Title",
      "Dang ky thanh cong",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

 		}
 		)
 	.catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
});
	
 }
return(
  <View>
  	<Text
  		style={{fontSize:20,paddingBottom:20,textAlign:'center'}} 
  	>Dang ky</Text>
    <TextInput
    	autoCorrect={true}
    	autoFocus={true}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
    />

    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,}}
      onChangeText={text => setPass(text)}
      value={password}
    />

    <TouchableOpacity
    	onPress={()=>{DangKy()}}
    	>
    	<Text>dangky</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Test;