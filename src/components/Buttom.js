import { TouchableOpacity, StyleSheet, Text } from "react-native";

export function ButtonPrimary({ nameButton, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={buttonStyles.container} activeOpacity={0.8}>
      <Text style={buttonStyles.text}>{nameButton}</Text>
    </TouchableOpacity>
  )
}

export function ButtonSecondary({ nameButton, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} activeOpacity={0.8}>
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
    alignItems: 'center'
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