import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-writable-signal',
  standalone: true,
  imports: [],
  templateUrl: './writable-signal.component.html',
  styleUrl: './writable-signal.component.scss',
})
export class WritableSignalComponent implements OnInit {
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
