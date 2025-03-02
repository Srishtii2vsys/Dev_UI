import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  imports : [CommonModule],
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent {
  @Input() menuItems: MenuItem[] = [];
  @Output() itemClicked = new EventEmitter<MenuItem>();
  
  isVisible = false;
  
  constructor(private elementRef: ElementRef) {}
  
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
    }
  }

  toggle(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.isVisible = !this.isVisible;
  }

  onItemClick(item: MenuItem, event: Event): void {
    event.stopPropagation();
    this.itemClicked.emit(item);
    this.isVisible = false;
  }
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
}