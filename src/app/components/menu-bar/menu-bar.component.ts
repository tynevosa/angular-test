import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  select(event: Event, param: string) {
    const tablinks: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("menu-tab") as HTMLCollectionOf<HTMLElement>;

    // Converting HTMLCollection to an array for easier manipulation
    const tablinksArray: HTMLElement[] = Array.from(tablinks);
    for (let i = 0; i < tablinksArray.length; i++) {
      tablinksArray[i].className = tablinksArray[i].className.replace(" active", "");
    }
    // document.getElementById(cityName).style.display = "block";
    // event.currentTarget.className += " active";
    const targetElement = event.currentTarget as HTMLElement;
    targetElement.className += " active";
    if(param === "option2") {
      tablinksArray[0].style.border = "0";
      tablinksArray[2].style.border = "0";
    } else {
      tablinksArray[0].style.borderRight = "1px solid #505054";
      tablinksArray[2].style.borderLeft = "1px solid #505054";
    }
  }
}
