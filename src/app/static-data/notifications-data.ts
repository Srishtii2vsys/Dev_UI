import { NotificationItem } from "../common-components/notification-panel/notification-panel.component";

export const notifications: NotificationItem[] = [
    {
      id: '1',
      type: 'report',
      message: 'An expense report <b>Job</b> has been submitted by Karan deeper for approval.',
      date: '16/09/2022 02:54 PM',
      isRead: false
    },
    {
      id: '2',
      type: 'like',
      message: 'Your claim for reimbursement for the expense report <b>June by July</b> has been approved.',
      date: '14/09/2022 03:14 PM',
      isRead: true
    },
    {
      id: '3',
      type: 'like',
      message: 'Your claim for reimbursement for the expense report <b>June by July</b> has been approved.',
      date: '14/09/2022 03:14 PM',
      isRead: true
    },
    {
      id: '4',
      type: 'dislike',
      message: 'Your claim for reimbursement for the expense report <b>June by July</b> has been rejected.',
      date: '14/09/2022 03:14 PM',
      isRead: false
    },
    {
      id: '5',
      type: 'report',
      message: 'An expense report <b>Job</b> has been submitted by Karan deeper for approval.',
      date: '16/09/2022 02:54 PM',
      isRead: true
    },
    {
      id: '6',
      type: 'like',
      message: 'Trip <b>TRIP-00001</b> has been approved.',
      date: '16/09/2022 02:54 PM',
      isRead: false
    },
    {
      id: '7',
      type: 'like',
      message: 'Your claim for reimbursement for the expense report <b>June by July</b> has been approved.',
      date: '14/09/2022 03:14 PM',
      isRead: true
    },
    {
      id: '8',
      type: 'like',
      message: 'Your claim for reimbursement for the expense report <b>June by July</b> has been approved.',
      date: '14/09/2022 03:14 PM',
      isRead: true
    },
    {
      id: '9',
      type: 'dislike',
      message: 'Advance payment of Rs.75,000.00 has been rejected.',
      date: '16/09/2022 03:54 PM',
      isRead: false
    },
    {
      id: '10',
      type: 'like',
      message: 'Expense report 2022 has been reimbursed.',
      date: '16/09/2022 11:44 AM',
      isRead: true
    }
  ];
  
 export const  announcements: NotificationItem[] = [
    {
      id: 'a1',
      type: 'report',
      message: 'New reimbursement policy will take effect from Oct 1, 2022',
      date: '16/09/2022 02:54 PM',
      isRead: false
    },
    {
      id: 'a2',
      type: 'report',
      message: 'Finance department will be processing all pending claims this weekend',
      date: '14/09/2022 03:14 PM',
      isRead: true
    }
  ];