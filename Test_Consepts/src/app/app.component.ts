import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import library module
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, CommonModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
