
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getProductos, Producto } from '../services/Api';
import ListarProductos from '../components/ListarProductos';


export default function ListaProductosScreen({ navigation }: any) {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      cargarProductos();
    }
  }, [isFocused]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.botonCrear} onPress={() => navigation.navigate('CrearProductoScreen')}>
          Crear producto
        </Text>
      ),
    });
  }, [navigation]);

  const cargarProductos = () => {
    setCargando(true);
    getProductos()
      .then(setProductos)
      .catch((error) => console.error('Error al cargar productos:', error))
      .finally(() => setCargando(false));
  };

  const manejarSeleccion = (id: number) => {
    navigation.navigate('DetalleProductoScreen', { id });
  };

  return (
    <View style={styles.container}>
      {cargando ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loading}>Cargando productos...</Text>
        </View>
      ) : (
        <ListarProductos productos={productos} onSeleccionar={manejarSeleccion} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  botonCrear: {
    marginRight: 16,
    fontSize: 15,
    color: 'black',
    fontWeight: '600',
  },
});