import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Item = ({ name, image }: { name: string; image: string }) => {
  return (
    <>
      <View style={s.itemList}>
        <Image style={s.imageStyle} source={image} />
        <Text style={s.name}>{name}</Text>
      </View>
    </>
  );
};

export const Item2 = ({ nome, imagem }: { nome: string; imagem: string }) => {
  return (
    <>
      <View style={s.itemList2}>
        <Image style={s.imageStyle} source={imagem} />
        <Text style={s.nome}>{nome}</Text>
      </View>
    </>
  );
};

const s = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#4186a1d4",
    margin: 10,
    borderRadius: 5,
    shadowColor: "#4186a1d4",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  itemList2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#ff0000d4",
    margin: 10,
    borderRadius: 5,
    shadowColor: "#ff0000d4",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  imageStyle: {
    width: 150,
    height: 150,
  },

  name: {
    fontSize: 20,
    padding: 10,
  },

  nome: {
    fontSize: 20,
    padding: 10,
  },
});
