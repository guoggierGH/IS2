import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { Producto } from '../services/Api';

interface Props {
  producto: Producto;
  onEditar: () => void;
  onEliminar: () => void;
}


export default function DetalleProducto({ producto, onEditar, onEliminar }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: producto.image }} style={styles.image} />
      <Text style={styles.title}>{producto.title}</Text>
      <Text style={styles.description}>{producto.description}</Text>
      <Text style={styles.price}>${producto.price}</Text>
      <View style={styles.button}>
        <Button title="Editar" onPress={onEditar} color= "green"/>
      </View>
      <View style={styles.button}>
        <Button title="Eliminar" onPress={onEliminar} color="grey" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'beige',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  button: {
    marginVertical: 8,
    width: '80%',
  },
});