import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-file-upload-download',
  standalone: true,
  imports: [RouterModule, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './file-upload-download.component.html',
  styleUrl: './file-upload-download.component.scss',
})
export class FileUploadDownloadComponent {
  title = 'file-upload-download';
  inputFile = '';
  uplaodFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    if (file.size > 2000000) {
      alert('File size must be less than 2MB');
    } else {
    }
    this.inputFile = '';
  }
}
