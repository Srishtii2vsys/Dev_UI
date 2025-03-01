import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss'
})
export class MetricCardComponent {
  @Input() title: string = '';
  @Input() iconName: string = '';
  @Input() iconColor: string = '#FFFFFF';
  @Input() iconBgColor: string = '#1ac6b8';
  @Input() value: number = 0;
  @Input() actionText: string = 'View All';
  @Input() actionLink: string = '';
  @Input() trendValue: number = 0;
  @Input() trendDirection: 'up' | 'down' = 'up';

  constructor() { }

  ngOnInit(): void { }

  getIconBgColor(): string {
    return this.iconBgColor;
  }
}
