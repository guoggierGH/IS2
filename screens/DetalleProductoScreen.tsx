
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Modal,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
  getProductoPorId,
  eliminarProducto,
  Producto,
} from '../services/Api';
import DetalleProducto from '../components/DetalleProducto';



export default function DetalleProductoScreen({ route, navigation }: any) {
  const { id } = route.params;
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setCargando(true);
      getProductoPorId(id)
        .then((data) => {
          setProducto(data);
          setError(null);
        })
        .catch(() => {
          setError('No se pudo cargar el producto.');
          setProducto(null);
        })
        .finally(() => setCargando(false));
    }, [id])
  );

  const manejarEliminar = () => {
    eliminarProducto(id)
      .then(() => {
        setMostrarPopup(true);
        setTimeout(() => {
          setMostrarPopup(false);
          navigation.goBack();
        }, 1500);
      })
      .catch(() => {
        setError('No se pudo eliminar el producto.');
      });
  };

  if (cargando) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loading}>Cargando producto...</Text>
      </View>
    );
  }

  if (error || !producto) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>{error || 'Producto no encontrado.'}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DetalleProducto
        producto={producto}
        onEditar={() =>
          navigation.navigate('EditarProductoScreen', { producto })
        }
        onEliminar={manejarEliminar}
      />

      <Modal visible={mostrarPopup} transparent animationType="fade">
        <View style={styles.popupContainer}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>Producto eliminado exitosamente</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16,
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
  error: {
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  popupContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    elevation: 5,
  },
  popupText: {
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'center',
    fontWeight: '600',
  },
});