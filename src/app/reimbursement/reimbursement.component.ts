import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { reimbursementData } from '../static-data/reimbursement-data';
import { Reimbursement } from '../models/Reimbursement.model';
import { personsData } from '../static-data/person-details';

@Component({
  selector: 'app-reimbursement',
  imports: [CommonModule],
  templateUrl: './reimbursement.component.html',
  styleUrl: './reimbursement.component.scss'
})
export class ReimbursementComponent {
  reimbursementData = reimbursementData;

  displayedColumns: string[] = ['title', 'date', 'category', 'username', 'department', 'lastUpdate', 'status', 'amount', 'actions'];
  
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
    // You can perform any initialization here
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

  onMoreOptions(reimbursement: Reimbursement): void {
    // Implement more options logic
    console.log('More options for:', reimbursement);
  }
}
