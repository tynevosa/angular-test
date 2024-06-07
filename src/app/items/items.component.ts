import { Component, NgModule } from '@angular/core';
import { items } from '../items';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  items = [...items];
}
