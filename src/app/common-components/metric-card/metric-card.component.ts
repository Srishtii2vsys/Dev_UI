import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
export interface MetricCardListItems {
  id?: string;
  title: string;
  value: number;
  actionText?: string ;
  actionLink? : string ;
  trendValue: number ;
  trendDirection: string;
  icon?: string;
}

@Component({
  selector: 'app-metric-card',
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss'
})
export class MetricCardComponent {
  @Input() listItems! : MetricCardListItems ;

  constructor() { }

  ngOnInit(): void { }
}
