import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from '../../../module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-note-files',
  templateUrl: './note-files.component.html',
  styleUrls: ['./note-files.component.scss']
})
export class NoteFilesComponent implements OnInit {

  constructor(private notesApi: NotesApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  fileNames: any;
  filesToUpload: File[] = [];

  deleteIndex = 0;
  deleteId = "";

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getNoteFiles();
  }

  getNoteFiles(){
    this.notesApi.getFiles()
      .subscribe(
        res => {
          console.log(res);
          this.fileNames = res;
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sendFile(file: any){
    let formData = new FormData();
    formData.append("note", String(sessionStorage.getItem('personal_note_id')));
    formData.append("file", file);

    this.notesApi.postFile(formData)
      .subscribe(
        res => {
          console.log(res);
          // TODO: pushes null into array
          this.fileNames.push(res?.data?.file);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onFileSelected(e: any){
    this.filesToUpload = [];
    this.filesToUpload = e.target.files;

    for(var i = 0; i < this.filesToUpload.length; i++){
      this.sendFile(this.filesToUpload[i]);
    }

    console.log(this.filesToUpload);
  }

  deleteFile(){
    this.notesApi.deleteFile(this.deleteId)
      .subscribe(
        res => {
          console.log(res);
          this.fileNames.splice(this.deleteIndex, 1);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  downloadFile(fileId: any, index: any){

  }

  formatFileName(name: any){
    return name.replace('/notes/', '');
  }

  confirmDelete(id: any, index: any){
    this.deleteId = id;
    this.deleteIndex = index;

    this.deleteModal.openModal();
  }

}
