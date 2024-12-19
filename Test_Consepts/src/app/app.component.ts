import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Test_Consepts';
}
