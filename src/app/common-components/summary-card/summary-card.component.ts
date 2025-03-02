import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
interface ListItem {
  id: string;
  name: string;
  title?: string;
  amount: number;
  subtitle?: string;
  icon?: string;
}

@Component({
  selector: 'app-summary-card',
  imports: [CommonModule, RouterModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.scss'
})
export class SummaryCardComponent {
  @Input() title = '';
  @Input() listItems: ListItem[] = [];
  @Input() showViewAll = false;
  @Input() viewAllLink = '';
  @Input() showViewAnalytics = false;
  @Input() period = 'This Year';
  @Input() viewAnalyticsLink = '';
  @Input() type: 'violators' | 'summary' = 'violators';
  @Input() showColumnHeaders = false;
@Input() usernameLabel = 'USERNAME';
@Input() amountLabel = 'AMOUNT (INR)';
}
