import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Person } from '../../models/Person.model';
export interface ProfileMenuItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-profile-dropdown',
  imports: [CommonModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.scss'
})
export class ProfileDropdownComponent {
  @Input() user!: Person ;
  @Input() menuItems: ProfileMenuItem[] = [];
  
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

  onItemClick(item: ProfileMenuItem, event: Event): void {
    event.stopPropagation();
    this.isVisible = false;
    
    // Handle special actions like logout
    if (item.id === 'logout') {
      // Implement logout logic
      console.log('Logging out...');
    }
  }
}