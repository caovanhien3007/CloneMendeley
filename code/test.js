import React from "react";
import { StyleSheet, Text, View, PermissionsAndroid, Button ,Image,Dimensions} from "react-native";
import DocumentPicker from 'react-native-document-picker';
import PDFView from 'react-native-view-pdf';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob'
import {Firebase} from './Firebase/Config.js';


export default function App  (){



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

  const lisUrl=[];
const lisst=()=>{
 
  console.log(lisUrl)
  listRef = Firebase.storage().ref().child('FilePdf');

listRef.listAll().then(function(res) {
  res.prefixes.forEach(function(folderRef) {
      console.log(folderRef.location.path_)

  });
  res.items.forEach(function(itemRef) {
  console.log(itemRef.location.path_)
  
 
  });

}).catch(function(error) {

});

}

  uploadToFirebase = (blob) => {

    return new Promise((resolve, reject)=>{

      var storageRef = Firebase.storage().ref();

      storageRef.child('a/Fire.pdf').put(blob, {
        contentType: 'application/pdf'
      }).then((snapshot)=>{

        blob.close();

        resolve(snapshot);

      }).catch((error)=>{

        reject(error);

      });

    });


  }      


const[urlimg,seturl] = React.useState({});
const requestCameraPermission = async () => {
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
          
            uriToBlob(res.uri).then((blob)=>{

      return uploadToFirebase(blob);

    }).then((snapshot)=>{

      console.log("File uploaded");
   
    }).catch((error)=>{

      throw error;

    }); 

      Firebase.storage().ref().child('Fire.pdf').getDownloadURL().then((url)=>seturl({uri: url}))

           
            console.log(urlimg)
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
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
return(
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button title="request permissions" onPress={requestCameraPermission} />
  <Pdf
                    source={urlimg}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});