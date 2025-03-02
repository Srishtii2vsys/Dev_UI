import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { reimbursementData } from '../../static-data/reimbursement-data';
import { Reimbursement } from '../../models/Reimbursement.model';
import { personsData } from '../../static-data/person-details';
import { ContextMenuComponent, MenuItem } from "../../common-components/context-menu/context-menu.component";

@Component({
  selector: 'app-reimbursement',
  imports: [CommonModule, FormsModule, ContextMenuComponent],
  templateUrl: './reimbursement.component.html',
  styleUrl: './reimbursement.component.scss'
})
export class ReimbursementComponent {
  allReimbursementData = reimbursementData;
  reimbursementData = [...reimbursementData];
  searchDate: string = '';

  displayedColumns: string[] = ['title', 'date', 'category', 'username', 'department', 'lastUpdate', 'status', 'amount', 'actions'];
  moreMenuItems: MenuItem[] = [
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'reimburse', label: 'Reimburse', icon: 'reimbursement' },
    { id: 'archive', label: 'Archieve', icon: 'archive-add' },
    { id: 'export', label: 'Export', icon: 'export' },
  ];
  
  @ViewChild('contextMenu') contextMenu!: ContextMenuComponent;
  
  statusColors: { [key: string]: string } = {
    'Screening': '#FFF8E1', // Light yellow
    'Approved': '#E8F5E9', // Light green
    'Rejected': '#FFEBEE', // Light red
    'Paid': '#E3F2FD', // Light blue
    'Archived': '#F5F5F5'  // Light gray
  };

  statusTextColors: { [key: string]: string } = {
    'Screening': '#F57F17', // Darker yellow
    'Approved': '#2E7D32', // Darker green
    'Rejected': '#C62828', // Darker red
    'Paid': '#1565C0', // Darker blue
    'Archived': '#616161'  // Darker gray
  };

  constructor() { }

  ngOnInit(): void {
    // Initialize the component
    this.setupDatePicker();
  }

  setupDatePicker(): void {
    const datePicker = document.getElementById('date-picker') as HTMLInputElement;
    if (datePicker) {
      datePicker.addEventListener('change', (event) => {
        const selectedDate = (event.target as HTMLInputElement).value;
        this.searchByDate(selectedDate);
      });
    }
  }

  /**
   * Converts a date string from 'DD/MM/YYYY' format to a Date object
   */
  parseDateString(dateString: string): Date | null {
    if (!dateString) return null;
    
    // Check if the date is in DD/MM/YYYY format
    const parts = dateString.split('/');
    if (parts.length !== 3) return null;
    
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed in JavaScript Date
    const year = parseInt(parts[2], 10);
    
    return new Date(year, month, day);
  }

  /**
   * Formats a Date object to 'DD/MM/YYYY' string
   */
  formatDateToString(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  }

  searchByDate(date: string): void {
    this.searchDate = date;
    
    if (!date) {
      // If no date is selected, show all data
      this.reimbursementData = [...this.allReimbursementData];
      return;
    }

    // Convert the HTML date picker value (YYYY-MM-DD) to DD/MM/YYYY for comparison
    const searchDateObj = new Date(date);
    const formattedSearchDate = this.formatDateToString(searchDateObj);
    
    // Filter the data where the date matches the selected date
    this.reimbursementData = this.allReimbursementData.filter(item => {
      return item.date === formattedSearchDate;
    });
  }

  // Add a method to clear the date filter
  clearDateFilter(): void {
    const datePicker = document.getElementById('date-picker') as HTMLInputElement;
    if (datePicker) {
      datePicker.value = '';
    }
    this.searchDate = '';
    this.reimbursementData = [...this.allReimbursementData];
  }

  getPersonName(personId: string): string {
    const person = personsData.find(p => p.id === personId);
    return person ? person.name : personId;
  }

  getPersonInitials(personId: string): string {
    const name = this.getPersonName(personId);
    if (!name) return '';
    
    // Get first letter of first name and first letter of last name if available
    const nameParts = name.split(' ');
    if (nameParts.length > 1) {
      return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
    }
    // If only one name, return first letter
    return name.charAt(0).toUpperCase();
  }

  getStatusStyle(status: string): any {
    return {
      'background-color': this.statusColors[status] || '#F5F5F5',
      'color': this.statusTextColors[status] || '#616161',
      'padding': '4px 8px',
      'border-radius': '4px',
      'font-size': '12px',
      'font-weight': '500',
      'display': 'inline-block',
      'width': 'fit-content'
    };
  }

  getFormattedAmount(amount: number): string {
    return '₹ ' + amount.toLocaleString('en-IN');
  }
  
  onApprove(reimbursement: Reimbursement): void {
    // Implement approval logic
    console.log('Approved:', reimbursement);
  }

  onReject(reimbursement: Reimbursement): void {
    // Implement rejection logic
    console.log('Rejected:', reimbursement);
  }

  handleMenuItemClick(item: MenuItem): void {
    console.log('Menu item clicked:', item);
  }
  
  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.contextMenu.toggle(event);
  }
}