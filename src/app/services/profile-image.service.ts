import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {
  private profileImage: string = '';

  setProfileImage(image: string) {
    this.profileImage = image;
  }

  getProfileImage(): string {
    return this.profileImage;
  }
}