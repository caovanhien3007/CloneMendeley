import * as React from 'react';
import { Text ,View,TextInput,TouchableOpacity,Alert} from 'react-native';
import {Firebase} from './../Firebase/Config.js';

export default function Dangnhap({navigation}) {

 const [email,setEmail] = React.useState('');
 const [password,setPass] = React.useState('');
 
 function DangKy({navigation}) {

 	Firebase.auth().signInWithEmailAndPassword(email, password)
 	.then(
 		navigation.push('main')
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
    	onPress={()=>{DangKy({navigation})}}
    	>
    	<Text>dangky</Text>
    </TouchableOpacity>
  </View>
  )
}
