import dados2 from "@/assets/constants/mock2";
import { Item } from "@/components/item";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function voltar2() {
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.tenis}></View>
        <FlatList
          data={dados2}
          renderItem={({ item }) => (
            <Item name={item.name} image={item.imagem}></Item>
          )}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  tenis: {
    width: 200,
    height: 10,
    gap: 20,
  },
  wrap: {
    flex: 1,
  },
});
