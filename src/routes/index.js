import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import Home from "../pages/Home";
import Cep from "../pages/Cep";
import Animacao from "../pages/Animacao";
import Api from "../pages/Api";

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: 'black', // Cor quando o ícone está selecionado
            tabBarInactiveTintColor: '#fff',// Cor quando o ícone não está selecionado

            tabBarStyle:{
                backgroundColor: '#5353ec', //Cor da barra do menu
                borderTopWidth: 0
            }
         }}
        >
            <Tab.Screen
             name="home"
             component={Home}
             options={{
                headerShown: false,
                tabBarLabel: 'HOME',
                tabBarIcon: ({color, size}) => {
                    return <Feather name="home" color={color} size={size}/>
                  }
             }}
             />

            <Tab.Screen
             name="Cep"
              component={Cep}
              options={{
                headerShown: false,
                tabBarLabel: 'CEP',
                tabBarIcon: ({color, size}) => {
                    return <Feather name= 'search' color={color} size={size}/>
                }
             }}
              />

            <Tab.Screen 
            name="Animacao" 
            component={Animacao} 
            options={{
                headerShown: false,
                tabBarLabel:'ANIMAÇÃO',
                tabBarIcon: ({color, size}) =>{
                    return <Feather name='meh' color={color} size={size}/>
                }
             }}
             />

            <Tab.Screen 
            name="Api" 
            component={Api}
            options={{
                headerShown: false,
                tabBarLabel: 'FILMES',
                tabBarIcon: ({color, size}) => {
                    return <Feather name='film' color={color} size={size}/>
                }
             }}
            />

        </Tab.Navigator>
    );
}
