import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReimbursementComponent } from './reimbursement/reimbursement.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, LeftPanelComponent, HeaderComponent, DashboardComponent, ReimbursementComponent]
})
export class HomeComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'svgs/dashboard.svg', activeIcon: 'svgs/dashboard-active.svg' },
    { name: 'Users', icon: 'svgs/users.svg', activeIcon: 'svgs/users.svg' },
    { name: 'Reimbursement', icon: 'svgs/reimbursement.svg', activeIcon: 'svgs/reimbursement.svg' },
    { name: 'Advances', icon: 'svgs/advances.svg', activeIcon: 'svgs/advances.svg' },
    { name: 'Reports', icon: 'svgs/reports.svg', activeIcon: 'svgs/reports.svg' },
    { name: 'Analytics', icon: 'svgs/analytics.svg', activeIcon: 'svgs/analytics.svg' },
    { name: 'Settings', icon: 'svgs/settings.svg', activeIcon: 'svgs/settings.svg' }
  ];
  activePage : string = "Dashboard";

}
