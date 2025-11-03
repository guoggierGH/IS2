
import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Producto } from '../services/Api';

interface Props {
  productos: Producto[];
  onSeleccionar: (id: number) => void;
}


export default function ListaProductos({ productos, onSeleccionar }: Props) {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id!.toString()}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSeleccionar(item.id!)}>
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    padding: 16,
    backgroundColor: 'grey',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'beige',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
    
    
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
    
    
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    
  },
  price: {
    fontSize: 15,
    color: 'green',
    fontWeight: 'bold',
  },
});