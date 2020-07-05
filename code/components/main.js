import * as React from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Dimensions } from 'react-native';

import  Ionicons from 'react-native-vector-icons/Ionicons';

const {height,width} =Dimensions.get('window');

export default function main({navigation}) {



  return (
    <View >
    	<View style={styles.header}>
    			<TouchableOpacity
    				onPress={()=>navigation.openDrawer()}
    			>
    				<Ionicons name={'menu'} size={46} color={'white'} />
    			</TouchableOpacity>
    			<Text style={styles.textHeader} >Mendeley</Text>
    			<TouchableOpacity>
    				<Ionicons name={'ellipsis-vertical'} size={46} color={'white'} />
    			</TouchableOpacity>
    	</View>
    	<View style={styles.container}>
    	<Text style={styles.text0}>Thư viện của bạn</Text>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.push('Tất cả tài liệu')}
    			>
    				<Ionicons name={'menu'} size={46} color={'white'} />
    				<Text >test</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.openDrawer()}
    			>
    				<Ionicons name={'menu'} size={46} color={'white'} />
    				<Text>test</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.openDrawer()}
    			>
    				<Ionicons name={'menu'} size={46} color={'white'} />
    				<Text>test</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.openDrawer()}
    			>
    				<Ionicons name={'menu'} size={46} color={'white'} />
    				<Text>test</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.openDrawer()}
    			>
    				<Ionicons name={'menu'} size={46} color={'white'} />
    				<Text>test</Text>
    	</TouchableOpacity>

    	
    	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:height-70,
    backgroundColor:'#ebf7ed',
  },
  header:{
  	height:70,
  	backgroundColor:'#178e2f',
  	flexDirection:'row',
  	padding:7,
  	justifyContent: 'space-between',
  },
  textHeader:{
  		margin: 15,
    fontSize: 18,
    fontWeight: "bold",
   color:"white",
  },
  text0:{
  	margin:10,
  	fontSize: 15,
    fontWeight: "bold",
   color:"gray",
  },
  lable:{
  	height:70,width:width,
  	flexDirection:'row',
  	backgroundColor:'white',
  	borderWidth:0.3,
  	borderBottomColor:'#178e2f',
  	borderTopColor:'white',
  }
});