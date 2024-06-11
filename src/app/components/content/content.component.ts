import { Component } from '@angular/core';
import { DescriptionComponent } from '../description/description.component';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [DescriptionComponent, ItemsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
