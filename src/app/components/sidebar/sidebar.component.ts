import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  userName!: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = this.authService.user ? this.authService.user.name : '';
  }
}
