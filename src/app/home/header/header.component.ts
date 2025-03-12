import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { notifications } from '../../static-data/notifications-data';
import { NotificationPanelComponent } from '../../common-components/notification-panel/notification-panel.component';
import { ContextMenuComponent, MenuItem } from '../../common-components/context-menu/context-menu.component';
import { ProfileDropdownComponent } from '../../common-components/profile-dropdown/profile-dropdown.component';
import { personsData } from '../../static-data/person-details';
import { IconButtonComponent } from '../../common-components/icon-button/icon-button.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NotificationPanelComponent, MatMenuModule, MatButtonModule, ContextMenuComponent, ProfileDropdownComponent, IconButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentUser = personsData[0];
  notifications = notifications;
  notificationCount = this.notifications.length;

  addButtonMenuItems: MenuItem[] = [
    { id: 'user', label: 'User', icon: 'user-circle' },
    { id: 'department', label: 'Department', icon: 'briefcase' },
    { id: 'advance', label: 'Advance', icon: 'wallet-add' },
    { id: 'document', label: 'Document', icon: 'report' },
    { id: 'project', label: 'Project', icon: 'project' }

  ];

  profileMenuItems: MenuItem[] = [
    {id: 'profile', label: 'My profile', icon: 'user-circle'},
    {id: 'setting' ,label: 'Account settings', icon : 'setting'},
    {id: 'help' ,label: 'Help & support', icon : 'help'},
    {id: 'logout' ,label: 'Logout', icon : 'logout'},

  ]

  @ViewChild('contextMenu') contextMenu!: ContextMenuComponent;
  @ViewChild('profileDropdown') profileDropdown!: ProfileDropdownComponent;

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.contextMenu.toggle(event);
  }

  handleMenuItemClick(item: MenuItem): void {
    console.log('Menu item clicked:', item);
  }
  toggleProfileMenu(event: Event): void {
    event.stopPropagation();
    this.profileDropdown.toggle(event);
  }
}
