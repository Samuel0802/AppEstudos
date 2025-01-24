import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {

const [contador, setContador] = useState(0);
const [limite, setLimite] = useState(10);


 function AddContar(contador) {
    if(contador <= 0 ) return;

    //valor de contador é maior ou igual ao valor de uma variável chamada limite.
    if(contador >= limite){
     setContador(10)
      return;
    }

    setContador(contador);
}


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Pessoas no Restaurantes</Text>

      <TouchableOpacity style={styles.btnValor}>
        <Text style={styles.txtValor}>{contador}</Text>
      </TouchableOpacity>


  { //se contator bater o limite 10 - mostrar o texto da tela
    contador >= limite && (
      <Text style={styles.txtLimite}>Restaurante está no seu limite de pessoas.</Text>
    )
  }
     
      <View style={styles.btnArea}>

        <TouchableOpacity 
         //desabilitar um componente ou botão
          disabled={contador >= limite}

        //se contador bater o limite 10 - mudar a cor do btn
        style={[styles.btnAdd, contador >= limite && { backgroundColor: "#DDD"} ]}
         onPress={() => AddContar(contador + 1)}>

          <Text style={styles.txtAdd}>Adicionar</Text>

        </TouchableOpacity>

        <TouchableOpacity 
        
        style={[styles.btnRemove, contador === 0 && { backgroundColor: "#DDD"}]}
        onPress={ () => AddContar(contador - 1)}
        >
          <Text style={styles.txtRemove}>Remover</Text>
        </TouchableOpacity>

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

  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  btnArea: {
    flexDirection: 'row',
    gap: 15,//Espaço entre 2 btn na mesma row
    marginTop: 14,

  },

  txtValor: {
    fontSize: 30,
    marginBottom: 20,
    backgroundColor: "#121212",
    color: "#FFF",
    padding: 14,
    borderRadius: 8,
    marginTop: 10
  },

  btnAdd: {
    backgroundColor: '#00B94a',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  txtAdd:{
    color: '#fff',
    fontSize: 16,
  },

  txtRemove:{
    color: '#fff',
    fontSize: 16,
  },

  btnRemove: {
    backgroundColor: '#ef463a',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },

  txtLimite:{
    backgroundColor: "#F8B135",
    padding: 4,
    borderRadius:4,
    fontSize: 18,
    fontWeight: 'bold'
  
  }

});