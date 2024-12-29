import { Component, computed, signal, Signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
  ],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.scss',
})
export class ComputedComponent {
  searchText = signal<string>('');
  users = signal<any[]>([]);
  computedUsers = computed(() => {
    if (this.searchText()) {
      return this.users().filter((user) =>
        user.username.toLowerCase().includes(this.searchText().toLowerCase())
      );
    } else {
      return this.users();
    }
  });
  constructor(
    private usersService: UsersService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    this.usersService.getUsers().subscribe((users: any) => {
      this.users.set(users);
      this.spinner.hide();
    });
  }
  Search(searchText: string) {
    this.searchText.set(searchText);
  }
}
