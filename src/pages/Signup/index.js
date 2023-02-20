import { View } from "react-native";
import { useForm } from "../../components/Form";
import { Header } from "../../components/Header";
import { useLoginStore } from "../../zustand";

export function Signup({ navigation }) {
  const FormClient = useForm('Signup_user_client')
  const FormBarber = useForm('Signup_user_barber')
  const typeUser = useLoginStore(state => state.typeUser)

  const TypeForms = {
    "Cliente": FormClient,
    "Barbearia": FormBarber
  }

  const FormByUser = TypeForms[typeUser]
  return (
    <View>
      <Header />
      <View style={{marginLeft: 20, marginRight: 20}}>
        <FormByUser navigation={navigation} />
      </View>
    </View>
  )
}