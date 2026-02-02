import dados from "@/assets/constants/mock";
import { Item } from "@/components/item";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function list() {
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.tenis}></View>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Item name={item.nome} image={item.imagem}></Item>
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
