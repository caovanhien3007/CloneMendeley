import * as React from 'react';
import { Button, View,TextInput,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DangKy from './../components/DangKy';
import DangNhap from './../components/DangNhap';
import ReadPdf from './../components/Documents/ReadPdf';
import main from './../components/main';
import Profile from './../components/Profile';
import Setting from './../components/Setting';
import AllDocuments from './../components/Documents/allDocuments';
import Drawer from './Drawer';
import Documents from './../components/Documents/Document';
import addDocument from './../components/Documents/addDocument'

  const {height,width} =Dimensions.get('window');

const Stack = createStackNavigator();
  
export default function Navigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
      <Stack.Screen name="DangNhap" component={DangNhap}  options={{headerShown:false  }}       />
        <Stack.Screen name="Drawer" component={Drawer} options={{headerShown:false  }}   />
        <Stack.Screen name="Tất cả tài liệu" component={AllDocuments}    />
         <Stack.Screen name="Tài liệu mới" component={AllDocuments}    />
                 <Stack.Screen name="Tài liệu đã đọc" component={AllDocuments}    />

          <Stack.Screen name="Lịch sử" component={AllDocuments}    />
           <Stack.Screen name="Yêu thích" component={AllDocuments}    />

        <Stack.Screen name="Document" component={Documents}  options={({ route }) => ({ title: route.params.name })}    />
        <Stack.Screen name="ReadPdf" component={ReadPdf}  options={({ route }) => ({ title: route.params.name })}    />
        <Stack.Screen name="Thêm tài liệu" component={addDocument}   />
         <Stack.Screen name="main" component={main} options={{headerShown:false  }}   />
       
        <Stack.Screen name="DangKy" component={DangKy}        />
         <Stack.Screen name="Thông tin cá nhân" component={Profile}   />
          <Stack.Screen name="Cài đặt" component={Setting}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}