
import React from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { crearProducto, Producto } from '../services/Api';
import FormularioProducto from '../components/FormularioProducto';


export default function CrearProductoScreen({ navigation }: any) {
  const productoInicial: Producto = {
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      id: 0
  };

  const manejarCrear = (producto: Producto) => {
    crearProducto(producto)
      .then(() => {
        Alert.alert('Éxito', 'El producto se creó exitosamente.');
        navigation.goBack();
      })
      .catch((error) => {
        console.error('Error al crear producto:', error);
        Alert.alert('Error', 'No se pudo crear el producto.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nuevo producto</Text>
      <FormularioProducto
        inicial={productoInicial}
        onEnviar={manejarCrear}
        textoBoton="Crear producto"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
});