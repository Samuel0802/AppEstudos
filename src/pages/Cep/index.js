import React, {useState, useRef} from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Keyboard } from "react-native";
import api from '../../services/api';

export default function Cep() {
  const [cep, setCep] = useState('');
   const [cepUser, setCepUser] = useState(null);


  const inputRef = useRef(null);

  function LimparCep(){
    setCep('');
    inputRef.current.focus();
  }

   async function BuscarCep(){
     if(cep == ''){
      Alert.alert('Digite um CEP');
      setCep('');
    return;
     }

      try{
       const response = await api.get(`/${cep}/json`);
        console.log(response.data);
        setCepUser(response.data); //recuperar os dados da api para View
        Keyboard.dismiss(); //Garantir que teclado seja fechado

      } catch(err){
         console.log('Error:' + err );
      }
    
  }

    return(
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titulo}>Digite o CEP:</Text>

          <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          value={cep}
          ref={inputRef}
          onChangeText={(text) => setCep(text)}
          keyboardType="numeric"
          />

</View>

          <View style={styles.areaBtn}>

            <TouchableOpacity
             onPress={ BuscarCep }
             style={[styles.btn, { backgroundColor: '#1d75cd'}]}>
              <Text style={styles.btnTexto}>Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={ LimparCep }
             style={[styles.btn, { backgroundColor: '#cd3e1d'}]}>
              <Text style={styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dadosCep}>
             <Text style={styles.itemCep}>CEP: {cepUser?.cep === '' ? 'Erro ao carregar cep' : cepUser?.cep}</Text>
             <Text style={styles.itemCep}>Logradouro: {cepUser?.logradouro === '' ? 'Erro ao carregar logradouro' : cepUser?.logradouro }</Text>
             <Text style={styles.itemCep}>Bairro: {cepUser?.barro === '' ? 'Erro ao carregar bairro' : cepUser?.bairro}</Text>
             <Text style={styles.itemCep}>Cidade: {cepUser?.localidade === '' ? 'Erro ao carregar cidade' : cepUser?.localidade}</Text>
             <Text style={styles.itemCep}>Estado: {cepUser?.uf === '' ? 'Erro ao carregar estado' : cepUser?.uf}</Text>
          </View>


    
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
  },

  titulo:{
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input:{
    backgroundColor: '#ffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    width: '90%',
    padding: 10,
    fontSize: 18,
  },

  areaBtn:{
   alignItems: 'center',
   flexDirection: 'row',
   marginTop: 15,
   justifyContent: 'space-around',

  },

  btn:{
    height: 50,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'red'

  },

  btnTexto:{
    color: 'white',
  },

  dadosCep:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  itemCep: {
    fontSize: 22,
  }

});

