import { Component } from '@angular/core';
import { InfoCardComponent } from "../common-components/info-card/info-card.component";
import { SummaryCardComponent } from '../common-components/summary-card/summary-card.component';
import { MetricCardComponent } from '../common-components/metric-card/metric-card.component';
import { contactDetails } from '../static-data/contact-details';
import { resourceDetails } from '../static-data/resource-details';
import { personsData } from '../static-data/person-details';
import { advancesData } from '../static-data/advances-data';
import { reimbursementData } from '../static-data/reimbursement-data';

@Component({
  selector: 'app-dashboard',
  imports: [MetricCardComponent, SummaryCardComponent, InfoCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  contactItems = contactDetails;
  resourceItems  = resourceDetails;
  allUsers = personsData;
  topSpendingUsersData = this.getTopSpendingUsers(10);
  violatorsData = this.getTopViolators(4);
  summaryData = this.getSummaryData();

  private getTopSpendingUsers(noOfUsers: number){
    return this.allUsers
    .sort((a, b) => b.amount - a.amount) // Sort by highest amount
    .slice(0, noOfUsers) // Get the top N users
    .map(({ id, name, profession, amount }) => ({
      id,
      name,
      title : profession, // Rename profession to title
      amount,
      icon: `users/${id}.jpg` // Assign icon dynamically
    }));
  }

  private getTopViolators(noOfUsers: number) {
    return this.allUsers
      .sort((a, b) => b.noOfExpenses - a.noOfExpenses) // Sort by most expenses
      .slice(0, noOfUsers) // Get the top N users
      .map(({ id, name, profession, amount, noOfExpenses }) => ({
        id,
        name,
        title: profession, // Rename profession to title
        amount,
        subtitle: `${noOfExpenses} Expenses`, // Rename noOfExpenses to subtitle with formatted text
        icon: `assets/icons/${id}.jpg` // Assign icon dynamically
      }));
  }

  private getSummaryData(): { id: string; name: string; amount: number }[] {
    const totalExpenses = this.allUsers.reduce((sum, person) => sum + person.amount, 0);
    const totalAdvances = advancesData.reduce((sum, advance) => sum + advance.advanceAmount, 0);
    const totalReimbursements = reimbursementData.reduce((sum, reimbursement) => sum + reimbursement.reimbursementAmount, 0);
  
    return [
      {
        id: 'expenses',
        name: 'Total Expenses',
        amount: totalExpenses
      },
      {
        id: 'advances',
        name: 'Total Advances',
        amount: totalAdvances
      },
      {
        id: 'reimbursements',
        name: 'Total Reimbursements',
        amount: totalReimbursements
      }
    ];
  }
  
  
}
