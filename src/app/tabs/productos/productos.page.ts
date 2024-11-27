import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss']
})

export class ProductosPage implements OnInit {
  constructor(private menu: MenuController) { }

  ngOnInit() {
    // Initialize any necessary data or perform any setup tasks here
  }

  abrirMenu() {
    this.menu.open();
  }

  cerrarMenu() {
    this.menu.close();
  }

  productos = [
    {
      nombre: 'polera',
      precio: 2.5,
      imagen: '/assets/img/productos/polera.jpg',
      cantidad: 1
    },
    {
      nombre: 'cortaviento',
      precio: 1.2,
      imagen: '/assets/img/productos/cortaviento.jpeg',
      cantidad: 1
    },
    {
      nombre: 'pantalon',
      precio: 3.0,
      imagen: '/assets/img/productos/pantalon.jpg',
      cantidad: 1
    },
    {
      nombre: 'zapatos',
      precio: 4.5,
      imagen: '/assets/img/productos/zapatos.jpg',
      cantidad: 1
    },
    {
      nombre: 'Oficina',
      precio: 5.0,
      imagen: '/assets/img/productos/oficina.jpg',
      cantidad: 1
    },
    {
      nombre: 'Poleron',
      precio: 5.0,
      imagen: '/assets/img/productos/poleron.jpg',
      cantidad: 1
    },
    {
      nombre: 'verano',
      precio: 5.0,
      imagen: '/assets/img/productos/verano.jpg',
      cantidad: 1
    }
  ];

  carrito: Producto[] = [];

  incrementarCantidad(producto: Producto) {
    producto.cantidad++;
  }

  decrementarCantidad(producto: Producto) {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
  }

  agregarAlCarrito(producto: Producto) {
    const productoEnCarrito = this.carrito.find(item => item.nombre === producto.nombre);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += producto.cantidad;
    } else {
      this.carrito.push({ ...producto });
    }
    producto.cantidad = 1; // Resetear la cantidad después de agregar al carrito
  }
}
