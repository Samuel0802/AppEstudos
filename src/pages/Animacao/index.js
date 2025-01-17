import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Animacao() {
    return(
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Olá Animacao</Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});