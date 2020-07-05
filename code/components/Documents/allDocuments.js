import * as React from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Dimensions,FlatList,Alert } from 'react-native';
import {Firebase} from './../../Firebase/Config.js';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Icon from 'react-native-vector-icons/Ionicons';

const {height,width} =Dimensions.get('window');

function Item(props) {
  const urlDel='allDocuments/'+props.id
  const Del = () =>
    Alert.alert(
      "Nhắc nhở",
      "Bạn có chắc muốn xóa tài liệu",
      [
        {
          text: "Thoát",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Đồng ý", onPress: () => {
          console.log(urlDel)
           Firebase.storage().ref().child(urlDel).listAll()
                .then(function(res) {
                          res.items.forEach(function(itemRef) {
                             
                               Firebase.storage().ref().child(itemRef.location.path_).delete()
                          });
                        }).catch(function(error) {
                        }); 
                   props.navigation.push('Drawer'),
                    alert('Xóa thành công')

        } }
      ],
      { cancelable: false }
    );
  return (
    <View style={styles.a}>
      <TouchableOpacity style={styles.item}
       onPress={()=>{props.navigation.navigate('Document',
            {
             name:props.id
            }
          )
      }}
       >
        <Icon name='folder' size={30} color='#178e2f'/>     
          <Text style={styles.title}>{props.id}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item2}
               onPress={Del} 
        >
            <Icon name='trash-outline' size={30} color='#178e2f'/> 
        </TouchableOpacity>
    </View>
  );
}



export default function main({navigation,route}) {

const [data,setData] =React.useState([]) 

React.useEffect(() => {
               var  list=[]
                Firebase.storage().ref().child('allDocuments').listAll()
                .then(function(res) {
                          res.prefixes.forEach(function(folderRef) {
                             
                              a=folderRef.location.path_.substring(13),

                              list.push({id:a}),setData(list)
                          });

                        }).catch(function(error) {

                        }); 
                
}, [1]);

React.useLayoutEffect(() => {
    navigation.setOptions({
             headerTintColor: '#fff',
            headerStyle: {
            backgroundColor: '#178e2f',height:70 },
          })});
  return (
   
    	<View style={styles.container}>
    	<Text style={styles.text0}>Tài liệu</Text>
     <FlatList
        data={data}
        renderItem={({ item }) => <Item id={item.id} navigation={navigation} />}
       
      />

    	
    	</View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    height:height-70,
    backgroundColor:'#ebf7ed',
  },
 
  text0:{
  	margin:10,
  	fontSize: 15,
    fontWeight: "bold",
   color:"gray",
  },
   item: {
    backgroundColor:'white',
    flexDirection:'row' ,
    height:70,
    width:width-70,
    borderWidth:0.5,
    borderColor:'white',
    borderBottomColor:'#178e2f',
    paddingLeft:10,
    paddingTop:18,
   
  }, item2: {
    backgroundColor:'white',
    flexDirection:'row' ,
    height:70,
    width:width-70,
    borderWidth:0.5,
    borderColor:'white',
    borderBottomColor:'#178e2f',
    paddingLeft:10,
    paddingTop:18,
   
  },
  a:{
    backgroundColor:'white',
    flexDirection:'row' ,
    height:70,width:width,
  },
  title: {
    marginTop:0,
    marginLeft:12,
   fontSize: 16,
    
  },
});