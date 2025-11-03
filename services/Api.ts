
const URL_BASE = 'https://fakestoreapi.com/products';

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const getProductos = async (): Promise<Producto[]> => {
  const respuesta = await fetch(URL_BASE);
  if (!respuesta.ok) throw new Error('Error al obtener productos');
  return await respuesta.json();
};


export const getProductoPorId = async (id: number): Promise<Producto> => {
  const respuesta = await fetch(`${URL_BASE}/${id}`);
  if (!respuesta.ok) throw new Error('Error al obtener el producto');
  return await respuesta.json();
};


export const crearProducto = async (producto: Producto): Promise<Producto> => {
  const respuesta = await fetch(URL_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  if (!respuesta.ok) throw new Error('Error al crear el producto');
  return await respuesta.json();
};

export const actualizarProducto = async (id: number, producto: Partial<Producto>): Promise<Producto> => {
  const respuesta = await fetch(`${URL_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  if (!respuesta.ok) throw new Error('Error al actualizar el producto');
  return await respuesta.json();
};

export const eliminarProducto = async (id: number): Promise<Producto> => {
  const respuesta = await fetch(`${URL_BASE}/${id}`, {
    method: 'DELETE',
  });
  if (!respuesta.ok) throw new Error('Error al eliminar el producto');
  return await respuesta.json();
};