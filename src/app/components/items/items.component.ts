import { Component, NgModule } from '@angular/core';
import { items } from '../../items';
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
  totalprice = 0 as number;
  ngOnInit(): void {
    for(let i = 0; i < this.items.length; i++){
      this.totalprice += this.items[i].price;
    }
  }
}
