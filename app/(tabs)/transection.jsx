import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from '../../components/HeaderComp.jsx'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function more() {
  return (
    <View style={styles.main}>
      <HeaderComp title={"MY TRANSACTIONS"} side={""} />

      <View style={styles.Boxes}>
        <View style={styles.box}>
          <Ionicons name='albums-outline' size={30} color={"gray"} />
          <Text style={{ fontSize: 13, fontWeight: '400' }}>My Bookings</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
        </View>
      </View>

      <View style={styles.Boxes}>
        <View style={styles.box}>
          <Ionicons name='pizza-outline' size={30} color={"gray"} />
          <Text style={{ fontSize: 13, fontWeight: '400' }}>Booked Food History -E-Pantry</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
        </View>
      </View>

      <View style={styles.Boxes}>
        <View style={styles.box}>
          <Ionicons name= 'close-circle-outline' size={30} color={"gray"} />
          <Text style={{ fontSize: 13, fontWeight: '400' }}>Failed Transactions</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
        </View>
      </View>

      <View style={styles.Boxes}>
        <View style={styles.box}>
          <Ionicons name='trash-bin-outline' size={30} color={"gray"} />
          <Text style={{ fontSize: 13, fontWeight: '400' }}>Canclled Tickets</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
        </View>
      </View>

      <View style={styles.Boxes}>
        <View style={styles.box}>
          <Ionicons name='newspaper-outline' size={30} color={"gray"} />
          <Text style={{ fontSize: 13, fontWeight: '400' }}>TDR History</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
        </View>
      </View>

      <View style={styles.Boxes}>
        <View style={styles.box}>
          <Ionicons name='card-outline' size={30} color={"gray"} />
          <Text style={{ fontSize: 13, fontWeight: '400' }}>Ticket Refund History</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={25} color={"gray"} />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column'
  },
  Boxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  }
})