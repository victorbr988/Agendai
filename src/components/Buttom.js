import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function ButtonPrimary({ nameButton }) {
  return (
    <TouchableOpacity style={buttonStyles.container} activeOpacity={0.8}>
      <Text style={buttonStyles.text}>{nameButton}</Text>
    </TouchableOpacity>
  )
}

export function ButtonSecondary({ nameButton }) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Text style={buttonStyles.textSecondary}>{nameButton}</Text>
    </TouchableOpacity>
  )
}

const buttonStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 8,
    backgroundColor: "#DDD6FE",
  },
  text: {
    color: "#7C3AED",
    fontSize: 24,
    fontFamily: "Rajdhani_600SemiBold"
  },
  textSecondary: {
    color: '#111827',
    fontSize: 24,
    fontFamily: "Rajdhani_500Medium"
  }
})