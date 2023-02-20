import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { ButtonPrimary, ButtonSecondary } from "./Buttom";
import { RadioForm } from "./RadioButton";

export function useForm(typeForm) {
  const formsGroups = {
    "Select_user": ChoiceUser,
    "Login_user_client": UserClientForm,
    "Login_user_barber": UserBarberForm,
    "Signup_user_barber": UserBarberFormSignup,
    "Signup_user_client": UserClientFormSignup
  }

  return formsGroups[typeForm];
}

function ChoiceUser({ navigation }) {
  return (
    <View>
      <Text style={formStyle.text}>Acessar como</Text>
      <View>
        <RadioForm />
      </View>
      
      <View style={formStyle.buttonGroup}>
        <ButtonSecondary navigation={navigation} nameButton="Cadastrar" />
        <ButtonPrimary navigation={navigation} nameButton="Entrar" />
      </View>
    </View>
  )
}

function UserClientForm({ navigation }) {
  const [cpfValue, setCpfValue] = useState("")
  const [nameValue, setNameValue] = useState("")

  return (
    <View>
      <Text style={formStyle.text}>Acessar como cliente</Text>
      
      <View style={formStyle.inputGroup}>
        <TextInput
          value={cpfValue}
          onChange={setCpfValue}
          style={formStyle.input} 
          placeholderTextColor="#111827"
          placeholder="CPF sem pontos ou traços" 
        />
        <TextInput
          value={nameValue}
          onChange={setNameValue}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Nome e sobrenome"
        />
      </View>

      <ButtonPrimary navigation={navigation} nameButton="Entrar" />
    </View>
  )
}

function UserBarberForm({ navigation }) {
  const [cnpjValue, setCnpjValue] = useState("")
  const [nameValue, setNameValue] = useState("")

  return (
    <View>
      <Text style={formStyle.text}>Acessar como Barbearia</Text>
      
      <View style={formStyle.inputGroup}>
        <TextInput
          value={cnpjValue}
          onChange={setCnpjValue}
          style={formStyle.input} 
          placeholderTextColor="#111827"
          placeholder="CPF/CNPJ sem pontos ou traços" 
        />
        <TextInput
          value={nameValue}
          onChange={setNameValue}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Nome da barbearia"
        />
      </View>

      <ButtonPrimary navigation={navigation} nameButton="Entrar" />
    </View>
  )
}

function UserBarberFormSignup({ navigation }) {
  const [cnpjValue, setCnpjValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View>
      <Text style={formStyle.text}>Cadastro como Barbearia</Text>
      
      <View style={formStyle.inputGroup}>
        <TextInput
          value={cnpjValue}
          onChange={setCnpjValue}
          style={formStyle.input} 
          placeholderTextColor="#111827"
          placeholder="CPF/CNPJ sem pontos ou traços" 
        />
        <TextInput
          value={nameValue}
          onChange={setNameValue}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Nome da barbearia"
        />
        <TextInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Telefone com DDD"
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          onChange={setPassword}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Senha"
        />
      </View>

      <ButtonPrimary navigation={navigation} nameButton="Entrar" />
    </View>
  )
}

function UserClientFormSignup({ navigation }) {
  const [cnpjValue, setCnpjValue] = useState("")
  const [nameValue, setNameValue] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View>
      <Text style={formStyle.text}>Cadastro como Cliente</Text>
      
      <View style={formStyle.inputGroup}>
        <TextInput
          value={cnpjValue}
          onChange={setCnpjValue}
          style={formStyle.input} 
          placeholderTextColor="#111827"
          placeholder="CPF sem pontos ou traços" 
        />
        <TextInput
          value={nameValue}
          onChange={setNameValue}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Nome e sobrenome"
        />
        <TextInput
          value={phoneNumber}
          onChange={setPhoneNumber}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Telefone com DDD"
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          onChange={setPassword}
          style={formStyle.input}
          placeholderTextColor="#111827"
          placeholder="Senha"
        />
      </View>

      <ButtonPrimary navigation={navigation} nameButton="Entrar" />
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
  },
  inputGroup: {
    marginTop: "8%",
  },
  input: {
    borderColor: "#7C3AED",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    fontFamily: "Rajdhani_500Medium",
    fontSize: 20,
    marginBottom: "8%"
  },
})