import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.scss',
})
export class ComputedComponent {
  value: string = '';
  users: any[] = [];
  constructor(
    private usersService: UsersService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    this.usersService.getUsers().subscribe((users: any) => {
      this.spinner.hide();
      this.users = users;
    });
  }
}
