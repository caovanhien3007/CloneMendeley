import * as React from 'react';
import { Text ,View,TextInput,TouchableOpacity,Alert} from 'react-native';
import {Firebase} from './../Firebase/Config.js';

export default function Dangnhap({navigation}) {

 const [email,setEmail] = React.useState('');
 const [password,setPass] = React.useState('');
 
 function Dangnhap({navigation}) {

 	Firebase.auth().signInWithEmailAndPassword(email, password)
 	.then(function(result) {
     console.log(result),
    navigation.push('Drawer')
    
  }
   )

 		
 	.catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error)
   alert('Tên tài khoản mật khẩu không chính xác')

});
	
 }
return(
  <View style={{flex:1,justifyContent: 'center',}} >
  	<Text
  		style={{fontSize:20,paddingBottom:20,textAlign:'center'}} 
  	>Đăng nhập</Text>

    <TextInput
    	autoCorrect={true}
      placeholder="Email"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
    />

    <TextInput
      placeholder="Password"
      secureTextEntry={true}
      style={{ height: 40, borderColor: 'gray', borderWidth: 1,}}
      onChangeText={text => setPass(text)}
      value={password}
    />

    <TouchableOpacity
    	onPress={()=>{Dangnhap({navigation})}}
    	>
    	<Text>Đăng nhập</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>navigation.push('DangKy')}
      >
      <Text>Đăng ký</Text>
    </TouchableOpacity>
  </View>
  )
}
