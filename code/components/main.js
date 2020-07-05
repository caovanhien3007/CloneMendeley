import * as React from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Dimensions,Image } from 'react-native';

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
    			<TouchableOpacity
    				onPress={()=>navigation.push('Thêm tài liệu')}
    			>
    				<Ionicons name={'add-circle-outline'} size={46} color={'white'} />
    			</TouchableOpacity>
    	</View>
    	<View style={styles.container}>
    	<Text style={styles.text0}>Thư viện của bạn</Text>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.push('Tất cả tài liệu')}
    			>
    				<Ionicons name={'library'} size={40} color={'#178e2f'} />
    				<Text style={styles.text}>Tất cả tài liệu</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.push('Tài liệu mới')}
    			>
    				<Ionicons name={'file-tray-full-sharp'} size={40} color={'#178e2f'} />
    				<Text style={styles.text}>Tài liệu mới</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.push('Tài liệu đã đọc')}
    			>
    				<Ionicons name={'hourglass'} size={40} color={'#178e2f'} />
    				<Text style={styles.text}>Tài liệu Đã đọc</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.push('Yêu thích')}
    			>
    				<Ionicons name={'star-half-outline'} size={40} color={'#178e2f'} />
    				<Text style={styles.text}>Yêu thích</Text>
    	</TouchableOpacity>

    	<TouchableOpacity
    				style={styles.lable}
    				onPress={()=>navigation.openDrawer()}
    			>
    				<Ionicons name={'trash-sharp'} size={40} color={'#178e2f'} />
			        <Text style={styles.text}>Thùng giác</Text>
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
  	paddingTop:10,paddingLeft:10
  }, Logo:{height:50,width:50,marginTop:3},
   text:{fontSize:14,marginLeft:15,textAlign:'center',marginTop:17},
});