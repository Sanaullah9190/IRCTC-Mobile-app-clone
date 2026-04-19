import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HeaderComp from '../../components/HeaderComp.jsx'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export default function accounts() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = async () => {
    const hardware = await LocalAuthentication.hasHardwareAsync()

    if (!hardware) {
      Alert.alert("No support your device")
      return;
    }

    const enroled = await LocalAuthentication.isEnrolledAsync()
    if (!enroled) {
      Alert.alert("Not set any biomtreic ")
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login",
      fallbackLabel: "use passcode"
    })

    if (result.success) {
      setIsAuthenticated(true)
    } else {
      Alert.alert("Authentic Failed")
    }

  }

  useEffect(() => {
    handleAuth()

  }, [])






  return (
    <View style={{ backgroundColor: "" }}>
      <HeaderComp title={"MY ACCOUNTS"} side={""} />
      {isAuthenticated ? (
        <View style={styles.main}>
          <View style={styles.detail}>
            <View>
              <Ionicons name='person-circle-outline' size={90} color={"white"} />
            </View>

            <View>
              <Text>Md Sanaullah </Text>
              <Text>sanaullaht9190@gmail.com</Text>
              <Text>blance :Rs.00</Text>
            </View>

            <View style={styles.addMoney}>
              <Text >Add money</Text>
            </View>

          </View>

          <View style={styles.Boxes}>
            <View style={styles.box}>
              <Ionicons name="person-circle-outline" size={30} color={"gray"} />
              <Text style={{ fontSize: 13, fontWeight: '400' }}>My Profile</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
            </View>
          </View>

          <View style={styles.Boxes}>
            <View style={styles.box}>
              <Ionicons name='wallet-outline' size={30} color={"gray"} />
              <Text style={{ fontSize: 13, fontWeight: '400' }}>IRCTC eWallet</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
            </View>
          </View>

          <View style={styles.Boxes}>
            <View style={styles.box}>
              <Ionicons name='people-outline' size={30} color={"gray"} />
              <Text style={{ fontSize: 13, fontWeight: '400' }}>My Master List</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
            </View>
          </View>

          <View style={[styles.Boxes, { borderBottomWidth: 1.5 }]}>
            <View style={styles.box}>
              <Ionicons name='medal-outline' size={30} color={"gray"} />
              <Text style={{ fontSize: 13, fontWeight: '400' }}>Loyalty</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
            </View>
          </View>

          <View style={styles.Boxes}>
            <View style={styles.box}>
              <Ionicons name='finger-print-outline' size={30} color={"gray"} />
              <Text style={{ fontSize: 13, fontWeight: '400' }}>Authentic User</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
            </View>
          </View>

          <View style={styles.Boxes}>
            <View style={styles.box}>
              <Ionicons name='lock-open-outline' size={30} color={"gray"} />
              <Text style={{ fontSize: 13, fontWeight: '400' }}>Change Password</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
            </View>
          </View>

          <View style={styles.Boxes}>
            <View style={styles.box}>
              <Ionicons name='log-out-outline' size={30} color={"gray"} />
              <Text style={{ fontSize: 13, fontWeight: '400' }}>Logout</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
            </View>
          </View>

        </View>
      ) : (<Text>Plse Login</Text>)}

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
  },
  detail: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: "#FCA440",
    position: "relative"
  },
  addMoney: {
    borderRadius: 4,
    borderColor: "white",
    borderWidth: 2,
    padding: 2,
    margin: 4,
    bottom: -20
  },
  Boxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  }
})