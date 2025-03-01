import { Component } from '@angular/core';
import { InfoCardComponent } from "../common-components/info-card/info-card.component";
import { SummaryCardComponent } from '../common-components/summary-card/summary-card.component';
import { MetricCardComponent } from '../common-components/metric-card/metric-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [MetricCardComponent, SummaryCardComponent, InfoCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  contactItems= [
    {
      icon: 'svgs/email.svg',
      title: 'Email',
      content: 'help@domain.in'
    },
    {
      icon: 'svgs/call.svg',
      title: 'Call',
      content: '+91 9999-555-777'
    }
  ];

  resourceItems = [
    {
      icon: 'svgs/help.svg',
      content: 'Help Documentation',
      link: '/help'
    },
    {
      icon: 'svgs/faq.svg',
      content: 'FAQ',
      link: '/faq'
    },
    {
      icon: 'svgs/guide.svg',
      content: 'Essential Business Guides',
      link: '/guides'
    }
  ];

  summaryData = [
    {
      id: 'expenses',
      name: 'Total Expenses',
      amount: 452328
    },
    {
      id: 'advances',
      name: 'Total Advances',
      amount: 129698
    },
    {
      id: 'reimbursements',
      name: 'Total Reimbursements',
      amount: 232510
    }
  ];
  violatorsData = [
    {
      id: '1',
      name: 'Rohit Sharma',
      title: 'Nursing Assistant',
      amount: 27637,
      subtitle: '8 Expenses',
      icon: 'assets/icons/rohit.jpg'
    },
    {
      id: '2',
      name: 'Bhargavi Mehta',
      title: 'President of Sales',
      amount: 4956,
      subtitle: '6 Expenses',
      icon: 'assets/icons/bhargavi.jpg'
    },
    {
      id: '3',
      name: 'Divya Shah',
      title: 'Medical Assistant',
      amount: 3470,
      subtitle: '3 Expenses',
      icon: 'assets/icons/divya.jpg'
    },
    {
      id: '4',
      name: 'Kirubasankar Rajveer',
      title: 'Project Manager',
      amount: 2063,
      subtitle: '2 Expenses',
      icon: 'assets/icons/kirubasankar.jpg'
    }
  ];

  spendingUsersData = [
    {
      id: '1',
      name: 'Karan Kapoor',
      title: 'Medical Assistant',
      amount: 99122,
      icon: 'assets/icons/karan.jpg'
    },
    {
      id: '2',
      name: 'Rupa Chandrasekar',
      title: 'Medical Assistant',
      amount: 89922,
      icon: 'assets/icons/rupa.jpg'
    },
    {
      id: '3',
      name: 'Aarush Mishra',
      title: 'Marketing Coordinator',
      amount: 72873,
      icon: 'assets/icons/aarush.jpg'
    },
    {
      id: '4',
      name: 'Aarav Saxena',
      title: 'Web Designer',
      amount: 62970,
      icon: 'assets/icons/aarav.jpg'
    },
    {
      id: '5',
      name: 'Somesh Nanda',
      title: 'Medical Assistant',
      amount: 54812,
      icon: 'assets/icons/somesh.jpg'
    },
    {
      id: '6',
      name: 'Rohit Sharma',
      title: 'Nursing Assistant',
      amount: 27637,
      icon: 'assets/icons/rohit.jpg'
    },
    {
      id: '7',
      name: 'Bhargavi Mehta',
      title: 'President of Sales',
      amount: 4956,
      icon: 'assets/icons/bhargavi.jpg'
    },
    {
      id: '8',
      name: 'Divya Shah',
      title: 'Medical Assistant',
      amount: 3470,
      icon: 'assets/icons/divya.jpg'
    }
  ];
}
