import * as React from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Dimensions,FlatList,TextInput } from 'react-native';
import {Firebase} from './../../Firebase/Config.js';
import Pdf from 'react-native-pdf';


const {height,width} =Dimensions.get('window');




export default function ReadPdf({navigation,route}) {

const [data,setData] =React.useState([]) ;
const { name } = route.params;
const {url} =route.params
const [urlPdf,setUrlPdf]=React.useState({uri:""});
React.useEffect(() => {
            var link='allDocuments/'+url+'/'+name;
            console.log(link)
           Firebase.storage().ref().child(link).getDownloadURL().then((u)=>setUrlPdf({uri: u}))
           console.log(urlPdf)
}, [1]);

React.useLayoutEffect(() => {
    navigation.setOptions({
             headerTintColor: '#fff',
            headerStyle: {
            backgroundColor: '#178e2f',height:70 },
          })});
const [page,setpage]=React.useState()
const [numberOfPages,setNum]=React.useState()
  return (
   <View style={styles.container}>
    	<Pdf
                    source={urlPdf}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        setNum(numberOfPages)
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        setpage(page)
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
             <Text style={styles.text}> {page}/{numberOfPages}</Text>      
   </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    width:width,
    height:30,
    backgroundColor:'#ebf7ed',
    fontSize: 15,
    textAlign: "center"
  },
  pdf: {
        flex:1,
        width:width,
        height:height-100,
    }
});