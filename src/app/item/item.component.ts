import { Component, Input } from '@angular/core';
import { NgbAccordionModule, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ElementComponent } from '../element/element.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgbAccordionModule, CommonModule, ElementComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
  providers: [NgbAccordionConfig]
})
export class ItemComponent {
  @Input() item: any;
  total = 0 as number;
  constructor(config: NgbAccordionConfig) {
		// customize default values of accordions used by this component tree
		config.closeOthers = true;
	}
  ngOnInit(): void {
    if(this.item.attachments) {
      for(let i = 0; i < this.item.attachments.length; i++){
        this.total += this.item.attachments[i].price;
      }
    }
  }
}
