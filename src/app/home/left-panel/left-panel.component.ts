import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface menuItemInterface {
  name: string;
  path?: string;
  icon: string;
  activeIcon?: string;
}

@Component({
  selector: 'app-left-panel',
  standalone: true,  // Explicitly mark as standalone
  imports: [CommonModule],  // Required for standalone components
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent {
  @Input() activeItem: string = '';
  @Input() menuItems: menuItemInterface[] = [];
  @Output() activeItemChange = new EventEmitter<string>();  // Output for two-way binding

  setActive(item: string) {
    this.activeItem = item;
    this.activeItemChange.emit(this.activeItem);  // Emit updated value
  }
}
