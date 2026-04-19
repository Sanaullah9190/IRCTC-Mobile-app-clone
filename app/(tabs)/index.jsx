import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from '../../components/HeaderComp.jsx'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function index() {
  return (
    <View style={styles.container}>
      <HeaderComp title={"IRCTC Rail Connect"} side={"login"} />
      <View style={styles.main}>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='train-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Train</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='airplane-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Flights</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='bus-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Bus</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='business-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Hotel</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='earth-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Tourism</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='woman-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Ask Disha</Text>
        </View >

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='logo-youtube' size={30} color={'gray'} />
          <Text style={styles.text}>IRCTC Youtube</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='bed-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Retiring Room</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='fast-food-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Order Food</Text>
        </View>

        <View style={styles.box}>
          <Ionicons style={styles.icon} name='diamond-sharp' size={30} color={'gray'} />
          <Text style={styles.text}>Daily Deals</Text>
        </View>

      </View>
      <View style={styles.busnessBox}>
        <Text style={{fontSize:15, fontWeight:"600" ,textAlign:"center"}}>BILLS & SHOP</Text>
        <View style={styles.main}>

          <View style={styles.box}>
            <Ionicons style={styles.icon} name='phone-landscape-sharp' size={30} color={'gray'} />
            <Text style={styles.text}>Recharge</Text>
          </View>
          <View style={styles.box}>
            <Ionicons style={styles.icon} name='wine-sharp' size={30} color={'gray'} />
            <Text style={styles.text}>Grocery</Text>
          </View>
          <View style={styles.box}>
            <Ionicons style={styles.icon} name='restaurant-sharp' size={30} color={'gray'} />
            <Text style={styles.text}>Kitchen</Text>
          </View >
          <View style={styles.box}>
            <Ionicons style={styles.icon} name='walk-sharp' size={30} color={'gray'} />
            <Text style={styles.text}>Apparel</Text>
          </View>
          <View style={styles.box}>
            <Ionicons style={styles.icon} name='train-sharp' size={30} color={'gray'} />
            <Text style={styles.text}>Yatri Mail</Text>
          </View>

        </View>
      </View>
      <StatusBar barStyle={"default"} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: "#E8E8E8",
  },
  main: {
    padding: 5,
    // flex:1,
    flexDirection: 'row',
    flexWrap: "wrap",
    // gap:6,
    justifyContent: 'space-between',
    backgroundColor: "white"
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    width: 60,
    backgroundColor: "",
  },
  icon: {
    backgroundColor: "white",
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    textAlign: "center"
  },
  busnessBox:{
    marginTop:15,
    backgroundColor:"white",
    flexDirection:"column",
    padding:8,
  }
})