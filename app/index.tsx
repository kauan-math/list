import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const visit = () => {
    router.push("/voltar");
  };
  const visit2 = () => {
    router.push("/voltar2");
  };
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>
          <Text style={s.title}>Nike</Text>
          <Text style={s.paragraph2}>Phil Knights company</Text>
        </View>
        <View style={s.body2}></View>
        <View>
          <TouchableOpacity style={s.button} onPress={visit}>
            <Text style={s.img}>
              <Image source={require("../assets/images/nike2.png")} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.button} onPress={visit2}>
            <Text style={s.img}>
              <Image source={require("../assets/images/nike3.png")} />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  button: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  img: {
    margin: 50,
  },
  body: {
    backgroundColor: "#000000",
    gap: 25,
  },
  body2: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
    padding: 15,
    paddingBottom: 0,
  },
  paragraph2: {
    color: "#ffffff",
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 14,
  },
  btn: {},

  btnText: {
    color: "#ffffff",
    fontSize: 22,
  },
});
