import React from "react";
import { Image } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Loading from "../../components/Loading";

const UserGuest = () => {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../assets/restaurant-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil en restaurants</Text>
      <Text style={styles.description}>
        ¿Como describirias tu mejor resturante? Busca y visualiza los mejores
        restaurantes de una forma snecilla, vota cual te ha gustado mas y
        comenta como ha sido tu experiencia
      </Text>
      <Button
        title="Ver tu perfil"
        buttonStyle={styles.button}
        onPress={() => console.log("hizimos click")}
      />
    </ScrollView>
  );
};

export default UserGuest;

const styles = StyleSheet.create({
  viewBody: {
    marginHorizontal: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    marginBottom: 20,
    color: "#A65273",
  },
  button: {
    backgroundColor: "#6cbc94",
  },
});
