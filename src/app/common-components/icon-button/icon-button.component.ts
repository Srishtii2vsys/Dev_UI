import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-icon-button',
  imports: [CommonModule, MatMenuModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() iconSrc: string = ''; // Path to the icon SVG
  @Input() badge?: number; // Optional badge count
  @Input() showBadge: boolean = false; // Whether to show the badge
  @Input() ariaLabel: string = ''; // Accessibility label
  @Input() disabled: boolean = false; // Disabled state
  @Input() active: boolean = false; // Active/selected state
  @Input() badgeColor: string = '#FF4A4A'; // Color for notification badge
  
  // For MatMenu integration
  @Input() matMenuTriggerFor: any;
  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger | undefined;
  
  @Output() clicked = new EventEmitter<MouseEvent>();
  
  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }
}