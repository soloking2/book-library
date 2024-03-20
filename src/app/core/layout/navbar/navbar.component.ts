import { Component } from '@angular/core';
import { Assets } from '../../shared/assets';
import { NavigationList } from '../../shared/navigation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bl-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  BOOK_LIBRARY_LOGO = Assets.LOGOS.BOOK_LIBRARY;
  links = NavigationList;
}
