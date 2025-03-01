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
    { name: 'Dashboard', icon: '../assets/svgs/dashboard.svg', activeIcon: '../assets/svgs/dashboard-active.svg' },
    { name: 'Users', icon: '../assets/svgs/users.png', activeIcon: '../assets/svgs/users-active.svg' },
    { name: 'Reimbursement', icon: '../assets/svgs/reimbursement.svg', activeIcon: '../assets/svgs/reimbursement-active.svg' },
    { name: 'Advances', icon: '../assets/svgs/advances.svg', activeIcon: '../assets/svgs/advances-active.svg' },
    { name: 'Reports', icon: '../assets/svgs/reports.svg', activeIcon: '../assets/svgs/reports-active.svg' },
    { name: 'Analytics', icon: '../assets/svgs/analytics.svg', activeIcon: '../assets/svgs/analytics-active.svg' },
    { name: 'Settings', icon: '../assets/svgs/settings.svg', activeIcon: '../assets/svgs/settings-active.svg' }
  ];
  activePage : string = "Dashboard";

}
