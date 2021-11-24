import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {getAuth} from 'firebase/auth'

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../models/file-upload';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
  

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const auth = getAuth();
    const user = auth.currentUser;
    const Uid = user?.uid;
    const basePath = `/${Uid}`;
    
    const filePath = `${basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    const auth = getAuth();
    const user = auth.currentUser;
    const Uid = user?.uid;
    const basePath = `/${Uid}`;
    this.db.list(basePath).push(fileUpload);
  }

  getFiles(numberItems: number): AngularFireList<FileUpload> {
    const auth = getAuth();
    const user = auth.currentUser;
    const Uid = user?.uid;
    const basePath = `/${Uid}`;
    return this.db.list(basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    const auth = getAuth();
    const user = auth.currentUser;
    const Uid = user?.uid;
    const basePath = `/${Uid}`;
    return this.db.list(basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const auth = getAuth();
    const user = auth.currentUser;
    const Uid = user?.uid;
    const basePath = `/${Uid}`;
    const storageRef = this.storage.ref(basePath);
    storageRef.child(name).delete();
  }
}
