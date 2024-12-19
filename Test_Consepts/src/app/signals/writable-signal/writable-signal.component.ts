import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-writable-signal',
  standalone: true,
  imports: [],
  templateUrl: './writable-signal.component.html',
  styleUrl: './writable-signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WritableSignalComponent implements OnInit {
  users: any[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
