import React from "react";
import { StyleSheet, Text, View, PermissionsAndroid, Button ,Image,Dimensions} from "react-native";
import DocumentPicker from 'react-native-document-picker';
import PDFView from 'react-native-view-pdf';
import Pdf from 'react-native-pdf';

export default function App  (){

const[urlimg,seturl] = React.useState({ uri:"file:///storage/emulated/0/Download/CV%20%C4%90i%E1%BB%81u%20ch%E1%BB%89nh%20l%E1%BB%8Bch%20thi_lan%205.pdf",cache:true});
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
            seturl({uri: res.uri})
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