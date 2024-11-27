import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ProfileImageService } from '../services/profile-image.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage {
  capturedImage: string = '';

  constructor(private profileImageService: ProfileImageService) {}

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.capturedImage = image.dataUrl || '';
    this.profileImageService.setProfileImage(this.capturedImage);
  }

  deleteImage() {
    this.capturedImage = '';
    this.profileImageService.setProfileImage('');
  }
}