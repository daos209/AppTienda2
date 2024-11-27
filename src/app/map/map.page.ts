import { Component, OnInit } from '@angular/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(private menu: MenuController) { }

  // Coordenadas personalizadas
  //latitude: number = -34.708642 // Latitud de la ubicación
  //longitude: number = -71.040326; // Longitud de la ubicación
   
  ngOnInit() {
    this.menu.close("mainMenu");
    this.getLocationAndShowOnMap();
  }

  async getLocationAndShowOnMap() {
    try {
      // Verificar permisos
      const permissions: PermissionStatus = await Geolocation.checkPermissions();

      if (permissions.location !== 'granted') {
        const requestPermissions = await Geolocation.requestPermissions();
        if (requestPermissions.location !== 'granted') {
          alert('Permiso de ubicación denegado');
          return;
        }
      }

      // Obtener la ubicación
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

   

      // Mostrar la ubicación en el mapa
      const mapFrame: HTMLIFrameElement | null = document.getElementById(
        'mapFrame'
      ) as HTMLIFrameElement;

      if (mapFrame) {
        mapFrame.src = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`;
      }
    } catch (error) {
      alert('Error al obtener la ubicación: '+error);
    }
  }

}
