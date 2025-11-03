
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListaProductosScreen from './screens/ListaProductosScreen';
import DetalleProductoScreen from './screens/DetalleProductoScreen';
import CrearProductoScreen from './screens/CrearProductoScreen';
import EditarProductoScreen from './screens/EditarProductoScreen';


const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaProductosScreen">
        <Stack.Screen
          name="ListaProductosScreen"
          component={ListaProductosScreen}
          options={{ title: 'Lista de productos' }}
        />
        <Stack.Screen
          name="DetalleProductoScreen"
          component={DetalleProductoScreen}
          options={{ title: 'Detalle del producto' }}
        />
        <Stack.Screen
          name="CrearProductoScreen"
          component={CrearProductoScreen}
          options={{ title: 'Crear producto' }}
        />
        <Stack.Screen
          name="EditarProductoScreen"
          component={EditarProductoScreen}
          options={{ title: 'Editar producto' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}