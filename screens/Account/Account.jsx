import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getCurrentUser } from "../../utils/actions";
import UserLogged from "./UserLogged";
import UserGuest from "./UserGuest";
import Loading from "../../components/Loading";

export default function Account() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    getCurrentUser() ? setLogin(true) : setLogin(false);
  }, []);

  // if (login === null) {
  return <Loading isVisible={true} text="cargando..." />;
  // }
  return login ? <UserLogged /> : <UserGuest />;
}
const styles = StyleSheet.create({});
