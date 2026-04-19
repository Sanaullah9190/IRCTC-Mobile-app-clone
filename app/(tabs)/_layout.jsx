import { View, Text} from 'react-native'
import { router, Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';


export default function _layout() {

  return <Tabs screenOptions={{
    tabBarActiveTintColor:"red",
    headerShown:false
  }}>
    <Tabs.Screen name="index" options={{
      title:"Home",
      tabBarIcon:({size ,color , focused})=>(
        <Ionicons name='home-sharp' size={18}  color={focused ?"red":"gray"} />
      ),
    }}/>
    <Tabs.Screen name="accounts" options={{
      title:"Accounts",
      tabBarIcon:({size ,color ,focused})=>(
        <Ionicons name='person-sharp' size={18} color={focused ?"red":"gray"}  />
      ),
    }}/>
    <Tabs.Screen  name="shop" options={{
      title:"Shop",
      tabBarIcon:({size ,color, focused})=>(
        <Ionicons name='cart-sharp' size={18} color={focused ?"red":"gray"}  />
      ),
    }}/>
    <Tabs.Screen name="transection" options={{
      title:"Transection",
      tabBarIcon:({size ,color ,focused})=>(
        <Ionicons name='reorder-three-sharp' size={18} color={focused ?"red":"gray"}  />
      ),
    }}/>
    <Tabs.Screen name="more" options={{
      title:"More",
      tabBarIcon:({size ,color , focused})=>(
        <Ionicons name='ellipsis-horizontal-sharp' size={18} color={focused ?"red":"gray"} />
      ),
    }}/>

  </Tabs>
}