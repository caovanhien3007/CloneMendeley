import * as React from 'react';
import { Text, View,StyleSheet,TouchableOpacity,PermissionsAndroid,Dimensions,FlatList,TextInput } from 'react-native';
import {Firebase} from './../../Firebase/Config.js';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Icon from 'react-native-vector-icons/Ionicons';
import Dialog from "react-native-dialog";
import DocumentPicker from 'react-native-document-picker';


const {height,width} =Dimensions.get('window');

function Item(props) {
  return (
      <TouchableOpacity style={styles.item}
      onPress={()=>{props.navigation.navigate('ReadPdf',
            {
             name:props.id,url:props.name
            }
          )
      }}
       >
        <Icon name='folder' size={30} color='#178e2f'/>     
          <Text style={styles.title}>{props.id}</Text>
        </TouchableOpacity>
  );
}



export default function Documents({navigation,route}) {
  const [value, onChangeText] = React.useState();
const [data,setData] =React.useState([]) ;
const [dialog,setDialog]=React.useState(false);
const { name } = route.params;
const [text,setText]=React.useState();
const [url,setUrl]=React.useState();
const link='allDocuments/'+name;
const [r,setR]=React.useState(1);
React.useEffect(() => {
               var  list=[];
               var sln = name.length+1+13;
                Firebase.storage().ref().child(link).listAll()
                .then(function(res) {
                          res.items.forEach(function(itemRef) {
                             
                              a=itemRef.location.path_.substring(sln),

                              list.push({id:a}),setData(list)
                          });

                        }).catch(function(error) {

                        }); 
                
}, [r]);

React.useLayoutEffect(() => {
    navigation.setOptions({
             headerTintColor: '#fff',
            headerStyle: {
            backgroundColor: '#178e2f',height:70 },
          })});
//mã hóa uri sang blob
uriToBlob = (uri) => {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };
      
      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);

    });

  }
  //hàm để up lên fire base

 uploadToFirebase = (blob,name) => {

    return new Promise((resolve, reject)=>{

      var storageRef = Firebase.storage().ref();
      storageRef.child(name).put(blob, {
        contentType: 'application/pdf'
      }).then((snapshot)=>{

        blob.close();

        resolve(snapshot);

      }).catch((error)=>{

        reject(error);

      });

    });


  }   
// thêm file vào fire base
function addFile(){

        var u =link+'/'+value+'.pdf';
      uriToBlob(url).then((blob)=>{

      return uploadToFirebase(blob,u);

    }).then((snapshot)=>{
        setUrl(''),setDialog(false),setR(r+1),onChangeText('')
      console.log("File uploaded");
   
    }).catch((error)=>{

      throw error;

    }); 
}


//tạo quyền và lấy url file
  const getUrl = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf],
            });
            setDialog(true),setUrl(res.uri)
         
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
              throw err;
            }
          }
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};


  return (
   
    	<View style={styles.container}>
    	<Text style={styles.text0}>Thông tin chi tiết</Text>
      <Text style={styles.name}>{name}</Text>
      <Text>Ghi nhớ</Text>
      <TextInput
          multiline={true}
          numberOfLines={100}
          placeholder="Thêm ghi nhớ..."
          style={styles.textinput}
          defaultValue={text}
          onChangeText={(tex)=>setText(tex)}
    />
    <Text>file</Text>
    <TouchableOpacity style={styles.item}
      onPress={getUrl}
       >
        <Icon name='add-circle-outline' size={30} color='#178e2f'/>     
          <Text style={styles.title}>Thêm file...</Text>
        </TouchableOpacity>
      
     <FlatList
        data={data}
        renderItem={({ item }) => <Item id={item.id} navigation={navigation} name={name} />}
       
      />
        <Dialog.Container visible={dialog}>
          <Dialog.Title>Tên file</Dialog.Title>
          <Dialog.Description>
           nhập tên file
          </Dialog.Description>
          <Dialog.Input
              autoFocus={true}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} 
              onChangeText={text => onChangeText(text)}
              value={value}
           />
          <Dialog.Button label="Thoát" onPress={()=>{setUrl(''),setDialog(false),setR(r+1),onChangeText('')}} />
          <Dialog.Button label="Thêm" onPress={()=>addFile()} />
        </Dialog.Container>
    	</View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    height:height-70,
    backgroundColor:'#ebf7ed',
  },
 
  name:{
  	padding:10,
  	fontSize: 20,
    fontWeight: "bold",
   color:"gray",
   height:50,
   width:width,
   backgroundColor:'white',
  },
   item: {
    backgroundColor:'white',
    flexDirection:'row' ,
    height:50,
   
    borderWidth:0.5,
    borderColor:'white',
    borderBottomColor:'#178e2f',
    paddingLeft:10,
    paddingTop:15,
   
  },
  title: {
    marginTop:0,
    marginLeft:12,
   fontSize: 16,
    
  },
  textinput:{
    height:150,padding:10,borderWidth: 0.5,borderColor: '#178e2f',fontSize:16,backgroundColor:"white"
  }
});