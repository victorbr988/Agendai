import { View, Text, StyleSheet } from "react-native";
import { ButtonPrimary, ButtonSecondary } from "./Buttom";
import { RadioForm } from "./RadioButton";

export function useForm(typeForm) {
  const formsGroups = {
    "Select_user": ChoiceUser
  }

  return formsGroups[typeForm];
}

function ChoiceUser() {
  return (
    <View>
      <Text style={formStyle.text}>Acessar como</Text>
      <View>
        <RadioForm />
      </View>
      
      <View style={formStyle.buttonGroup}>
        <ButtonSecondary nameButton="Cadastrar" />
        <ButtonPrimary nameButton="Entrar" />
      </View>
    </View>
  )
}

const formStyle = StyleSheet.create({
  text: {
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Rajdhani_600SemiBold",
    fontSize: 32
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "8%"
  }
})