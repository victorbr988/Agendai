import { View } from "react-native";
import { useForm } from "../../components/Form";
import { Header } from "../../components/Header";

export function Home({ navigation }) {
  const Form = useForm("Select_user")

  return (
    <View>
      <Header />
      <View style={{marginLeft: 20, marginRight: 20}}>
        <Form navigation={navigation} />
      </View>
    </View>
  )
}
