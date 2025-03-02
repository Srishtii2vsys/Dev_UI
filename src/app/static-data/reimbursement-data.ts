import { Enum_Category } from "../enums/Enum_Category";
import { Enum_Department } from "../enums/Enum_Department";
import { Enum_Status } from "../enums/Enum_Status";
import { Reimbursement } from "../models/Reimbursement.model";

export const reimbursementData: Reimbursement[] = [
  {
    id: 1,
    title: 'Indoor game with internal team',
    date: '30/01/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.Games,
    department: Enum_Department.Administration,
    status: Enum_Status.Screening,
    reimbursementAmount: 1299,
    personId: '1'
  },
  {
    id: 2,
    title: 'Client meeting at Abhilasha HOTEL',
    date: '19/07/2020',
    lastUpdate: '29/02/2020',
    category: Enum_Category.Hotel,
    department: Enum_Department.Product,
    status: Enum_Status.Rejected,
    reimbursementAmount: 9092,
    personId: '2'
  },
  {
    id: 3,
    title: 'Office activity for the team',
    date: '15/03/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.Entertainment,
    department: Enum_Department.Management,
    status: Enum_Status.Screening,
    reimbursementAmount: 4995,
    personId: '3'
  },
  {
    id: 4,
    title: 'Business meeting at the office',
    date: '08/06/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.CarRent,
    department: Enum_Department.Marketing,
    status: Enum_Status.Approved,
    reimbursementAmount: 2343,
    personId: '4'
  },
  {
    id: 5,
    title: 'Business lunch with a client',
    date: '29/06/2020',
    lastUpdate: '08/06/2020',
    category: Enum_Category.Food,
    department: Enum_Department.Sales,
    status: Enum_Status.Archived,
    reimbursementAmount: 3495,
    personId: '5'
  },
  {
    id: 6,
    title: 'Conference seminar',
    date: '25/06/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.CurrentEvents,
    department: Enum_Department.Product,
    status: Enum_Status.Screening,
    reimbursementAmount: 4999,
    personId: '6'
  },
  {
    id: 7,
    title: 'Trip to Mumbai for business conference',
    date: '16/01/2020',
    lastUpdate: '29/06/2020',
    category: Enum_Category.Travel,
    department: Enum_Department.Finances,
    status: Enum_Status.Paid,
    reimbursementAmount: 9470,
    personId: '7'
  },
  {
    id: 8,
    title: 'Clothing purchases for upcoming event',
    date: '20/03/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.Retail,
    department: Enum_Department.CustomerSuccess,
    status: Enum_Status.Approved,
    reimbursementAmount: 2050,
    personId: '8'
  },
  {
    id: 9,
    title: 'Purchase of sports equipment for team members',
    date: '10/03/2020',
    lastUpdate: '25/03/2020',
    category: Enum_Category.Sports,
    department: Enum_Department.Support,
    status: Enum_Status.Approved,
    reimbursementAmount: 3700,
    personId: '9'
  },
  {
    id: 10,
    title: 'Business lunch with a client',
    date: '10/04/2020',
    lastUpdate: '25/03/2020',
    category: Enum_Category.Food,
    department: Enum_Department.Management,
    status: Enum_Status.Archived,
    reimbursementAmount: 2063,
    personId: '10'
  },
  {
    id: 11,
    title: 'GYM Subscription',
    date: '25/03/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.Fitness,
    department: Enum_Department.Administration,
    status: Enum_Status.Approved,
    reimbursementAmount: 3700,
    personId: '11'
  },
  {
    id: 12,
    title: 'Electricity Bill for July month',
    date: '24/03/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.Electricity,
    department: Enum_Department.HumanResources,
    status: Enum_Status.Rejected,
    reimbursementAmount: 1799,
    personId: '12'
  },
  {
    id: 13,
    title: 'Business lunch with a client',
    date: '20/05/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.Food,
    department: Enum_Department.CustomerSuccess,
    status: Enum_Status.Rejected,
    reimbursementAmount: 7837,
    personId: '13'
  },
  {
    id: 14,
    title: 'WordPress subscription',
    date: '18/03/2020',
    lastUpdate: '23/02/2020',
    category: Enum_Category.WordPress,
    department: Enum_Department.Administration,
    status: Enum_Status.Approved,
    reimbursementAmount: 4725,
    personId: '14'
  },
  {
    id: 15,
    title: 'Trip to Chennai for Business conference',
    date: '03/03/2020',
    lastUpdate: '08/06/2020',
    category: Enum_Category.Trip,
    department: Enum_Department.Engineering,
    status: Enum_Status.Archived,
    reimbursementAmount: 3470,
    personId: '15'
  }
];

