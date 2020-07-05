import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionicons from 'react-native-vector-icons/Ionicons';


import Main from'./../components/main'
import NewFeeds from './../components/newFeeds'
import Suggest  from './../components/suggest'

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function TabbarBottom() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({  color, size }) => {
            let iconName;
              size=100;
            if (route.name == 'Thư viện') {
              iconName = 'library-outline';
            } else if (route.name == 'Tin tức') {
              iconName = 'ios-newspaper-outline';
            }else if(route.name=='Đề xuất')
            {
              iconName='bulb-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#178e2f',
          inactiveTintColor: 'gray',
          boderColor:'black',
          keyboardHidesTabBar:true,
        }}
    >
      <Tab.Screen name="Thư viện" component={Main} />
      <Tab.Screen name="Tin tức" component={NewFeeds} />
      <Tab.Screen name="Đề xuất" component={Suggest} />
    </Tab.Navigator>
  );
}

