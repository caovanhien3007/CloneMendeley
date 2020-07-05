import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import  Ionicons from 'react-native-vector-icons/Ionicons';


import TabbarBottom from './TabbarBottom';



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={ ({ color, size }) => {
            let iconName;
            return <Ionicons name={'person-circle-outline'} size={size} color={color} />;
          }}
        label="Thông tin cá nhân"
        onPress={() => props.navigation.push('Thông tin cá nhân')}
      />
      <DrawerItem
        icon={ ({ color, size }) => {
            let iconName;
            return <Ionicons name={'construct-outline'} size={size} color={color} />;
          }}
        label="Cài đặt"
        onPress={() => props.navigation.push('Cài đặt')}
      />
      <DrawerItem
        icon={ ({ color, size }) => {
            let iconName;
            return <Ionicons name={'log-out-outline'} size={size} color={color} />;
          }}
        label="Đăng xuất"
        onPress={() => props.navigation.push('DangNhap')}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function main() {
  return (
    <Drawer.Navigator
    openByDefault={false}
    style={{marginTop:30}} 
     screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;
             
            if (route.name == 't') {
              iconName = 'library';
            } 
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
    drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="mendeley" component={TabbarBottom} />
    
    </Drawer.Navigator>
  );
}


