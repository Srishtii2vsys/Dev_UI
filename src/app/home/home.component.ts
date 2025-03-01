import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ReimbursementComponent } from '../reimbursement/reimbursement.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, LeftPanelComponent, HeaderComponent, DashboardComponent, ReimbursementComponent]
})
export class HomeComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'svgs/dashboard.svg', activeIcon: 'svgs/dashboard-active.svg' },
    { name: 'Users', icon: 'svgs/users.svg', activeIcon: 'svgs/users-active.svg' },
    { name: 'Reimbursement', icon: 'svgs/reimbursement.svg', activeIcon: 'svgs/reimbursement-active.svg' },
    { name: 'Advances', icon: 'svgs/advances.svg', activeIcon: 'svgs/advances-active.svg' },
    { name: 'Reports', icon: 'svgs/reports.svg', activeIcon: 'svgs/reports-active.svg' },
    { name: 'Analytics', icon: 'svgs/analytics.svg', activeIcon: 'svgs/analytics-active.svg' },
    { name: 'Settings', icon: 'svgs/settings.svg', activeIcon: 'svgs/settings-active.svg' }
  ];
  activePage : string = "Dashboard";

}
