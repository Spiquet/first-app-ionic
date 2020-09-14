import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';


const { Camera, Filesystem, Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})


export class PhotoService {
  constructor() {}

  public photos: Photo[] = [];

  private async savePicture(cameraPhoto: CameraPhoto) { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // file-based data; provides best performance
      source: CameraSource.Camera, // automatically take a new photo with the camera
      quality: 100 // highest quality (0 to 100)
    });


  // Save the picture and add it to photo collection

    const savedImageFile: any =  await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);



    this.photos.unshift({
      filepath: 'soon...',
      webviewPath: capturedPhoto.webPath
    });
  }


}


export interface Photo {
  filepath: string;
  webviewPath: string;
}
