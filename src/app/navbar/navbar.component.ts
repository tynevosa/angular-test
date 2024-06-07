import { Component } from '@angular/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenuBarComponent, TopBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
