import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { announcements, notifications } from '../../static-data/notifications-data';

export interface NotificationItem {
  id: string;
  type: 'report' | 'like' | 'dislike' | 'receipt';
  message: string;
  date:  string;
  status?: 'pending' | 'approved' | 'rejected';
  isRead?: boolean;
}

@Component({
  selector: 'app-notification-panel',
  imports: [CommonModule],
  templateUrl: './notification-panel.component.html',
  styleUrl: './notification-panel.component.scss'
})
export class NotificationPanelComponent {
 notifications: NotificationItem[] = notifications;
 announcements: NotificationItem[] = announcements;

  activeTab: 'notifications' | 'announcements' = 'notifications';

  constructor() { }

  ngOnInit(): void { }

  get filteredNotifications(): NotificationItem[] {
    return this.activeTab === 'notifications' ? this.notifications : this.announcements;
  }

  setActiveTab(tab: 'notifications' | 'announcements'): void {
    this.activeTab = tab;
  }

  markAsRead(item: NotificationItem): void {
    item.isRead = true;
    // You can emit an event here to notify the parent component
  }

  markAllAsRead(): void {
    const items = this.activeTab === 'notifications' ? this.notifications : this.announcements;
    items.forEach(item => item.isRead = true);
    // You can emit an event here to notify the parent component
  }

  getIconClass(type: string): string {
    return `icon-${type}`;
  }

  formatDate(date: Date | string): string {
    if (!date) return '';

    const dateObj = typeof date === 'string' ? new Date(date) : date;

    // Format: DD/MM/YYYY HH:MM PM
    return dateObj.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }) + ' ' + dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

}
