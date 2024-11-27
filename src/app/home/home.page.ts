import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ProfileImageService } from '../services/profile-image.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  email: string = '';
  password: string = '';
  bienvenidos: string = 'Bienvenid@';
  profileImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private menu: MenuController,
    private profileImageService: ProfileImageService,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    this.menu.close("mainMenu");
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe((params: any) => {
      this.email = params['email'];
      this.password = params['password'];
    });
    this.profileImage = this.profileImageService.getProfileImage() || '../../assets/img/user.png';
  }

  openWhatsApp() {
    const url = 'https://wa.me/1234567890'; // Reemplaza con el número de WhatsApp deseado
    this.iab.create(url, '_system');
  }
}