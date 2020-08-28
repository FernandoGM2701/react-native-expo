import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // El sistema de navegación
//tiene que estar envuelto por el Contenedor para que funcione, cualquier screen que no 
//este dentro del contenedor no va a funcionar en el sistema de navegación
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  //Para crear nuestro menú tab, función
//no componente porque empieza con minúscula

//import Restaurants from "../screens/Restaurants";
import RestauransStack from "./RestaurantsStack";   
import Favorites from "../screens/Favorites";
import Account from "../screens/Account";
import TopRestaurants from "../screens/TopRestaurants";
import Search from "../screens/Search";


//Vamos hacer que con la función "createBottomTabNavigator" cree un componente
const Tab = createBottomTabNavigator();


export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="restaurants" 
                    component={RestauransStack} 
                    options={{title: "Restaurantes"}} 
                />
                <Tab.Screen 
                    name="favorites"   
                    component={Favorites}
                    options={{title: "Favoritos"}}    
                />
                <Tab.Screen 
                    name="top-restaurants"   
                    component={TopRestaurants}
                    options={{title: "Top 5"}}    
                />
                <Tab.Screen 
                    name="search"   
                    component={Search}
                    options={{title: "Buscar"}}    
                />
                <Tab.Screen 
                    name="account"   
                    component={Account}
                    options={{title: "Cuenta"}}    
                />
               
            </Tab.Navigator>
        </NavigationContainer>
    )
}