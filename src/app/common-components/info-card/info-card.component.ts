import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface InfoItem {
  icon: string;
  title?: string;
  content: string;
  link?: string;
}

@Component({
  selector: 'app-info-card',
  imports: [CommonModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() heading: string = '';
  @Input() items: InfoItem[] = [];
  
  onItemClick(item: InfoItem): void {
    if (item.link) {
      console.log('Clicked item with link:', item.link);
      // You can use Router or window.location here
    }
  }
}

