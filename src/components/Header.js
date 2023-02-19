import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export function Header() {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.boxIcon}>
        <Ionicons name="cut" color="#7C3AED" size={40} />
      </View>
      <Text style={headerStyles.text}>Agendai</Text>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: "row",
    marginLeft: 20,
    alignItems: 'center',
    marginBottom: "10%"
  },
  boxIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#DDD6FE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  text: {
    fontFamily: 'Rajdhani_600SemiBold',
    fontSize: 32,
    marginLeft: 10
  }
})