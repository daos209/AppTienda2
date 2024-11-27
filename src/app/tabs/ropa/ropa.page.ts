import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.page.html',
  styleUrls: ['./ropa.page.scss'],
})
export class RopaPage implements OnInit {

  constructor() { }

  ropa = [
    {
      nombre: 'Camiseta',
      descripcion: 'Camiseta de algodón 100% con diseño estampado.',
      imagen: '/assets/img/ropa/ropa1.jpg',
    },
    {
      nombre: 'Pantalones',
      descripcion: 'Pantalones de mezclilla con corte ajustado.',
      imagen: '/assets/img/ropa/ropa2.jpg',
    }, 
    {
      nombre: 'Vestido',
      descripcion: 'Vestido de verano con estampado floral.',
      imagen: '/assets/img/ropa/ropa3.jpg',
    }, 
    {
      nombre: 'Chaqueta',
      descripcion: 'Chaqueta de cuero sintético con cierre frontal.',
      imagen: '/assets/img/ropa/ropa4.jpg',
    }, 
    {
      nombre: 'Zapatos',
      descripcion: 'Zapatos deportivos con suela antideslizante.',
      imagen: '/assets/img/ropa/ropa5.jpg',
    }, 
    {
      nombre: 'Sombrero',
      descripcion: 'Sombrero de paja ideal para el verano.',
      imagen: '/assets/img/ropa/ropa6.jpg',
    },
    {
      nombre: 'Bufanda',
      descripcion: 'Bufanda de lana para el invierno.',
      imagen: '/assets/img/ropa/ropa7.jpg',
    }, 
    {
      nombre: 'Guantes',
      descripcion: 'Guantes de cuero para motociclista.',
      imagen: '/assets/img/ropa/ropa8.jpg',
    },
    {
      nombre: 'Calcetines',
      descripcion: 'Calcetines de algodón con diseño divertido.',
      imagen: '/assets/img/ropa/ropa9.jpg',
    },
    {
      nombre: 'Gorra',
      descripcion: 'Gorra deportiva con visera ajustable.',
      imagen: '/assets/img/ropa/ropa10.jpg',
    }
  ];

  prendas = [
    {
      nombre: 'Camisa',
      descripcion: 'Camisa de algodón 100%',
      imagen: '../../assets/img/camisa.jpg'
    },
    {
      nombre: 'Pantalón',
      descripcion: 'Pantalón de mezclilla',
      imagen: '../../assets/img/pantalon.jpg'
    },
    {
      nombre: 'Chaqueta',
      descripcion: 'Chaqueta de cuero',
      imagen: '../../assets/img/chaqueta.jpg'
    }
  ];

  ngOnInit() {}
}