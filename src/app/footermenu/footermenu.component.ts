import { Component } from '@angular/core';

@Component({
  selector: 'app-footermenu',
  standalone: true,
  imports: [],
  templateUrl: './footermenu.component.html',
  styleUrl: './footermenu.component.scss'
})
export class FootermenuComponent {
  select(event: Event, str: string) {
    const tablinks: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("footer-icon") as HTMLCollectionOf<HTMLElement>;
    // Converting HTMLCollection to an array for easier manipulation
    const tablinksArray: HTMLElement[] = Array.from(tablinks);
    for (let i = 0; i < tablinksArray.length; i++) {
      tablinksArray[i].className = tablinksArray[i].className.replace(" active", "");
    }
    const targetElement = event.currentTarget as HTMLElement;
    targetElement.className += " active";
  }
}
