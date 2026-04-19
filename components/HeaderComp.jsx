import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HeaderComp({title, side}) {
  return (
    <View style={styles.container}>
      <Ionicons name='arrow-back-sharp' size={20} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{side}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    backgroundColor: "#FCA440",
    alignItems: "center",
    padding: 10,

  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    color:"white"
  }
})