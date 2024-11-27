import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: { nombre: string; cantidad: number }[] = [];

  constructor() {}

  obtenerCarrito() {
    return this.carrito;
  }

  agregarProducto(producto: { nombre: string; cantidad: number }) {
    const productoEnCarrito = this.carrito.find(item => item.nombre === producto.nombre);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += producto.cantidad;
    } else {
      this.carrito.push({ ...producto });
    }
  }

  vaciarCarrito() {
    this.carrito = [];
  }
}