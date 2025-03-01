import { Enum_Category } from "../enums/Enum_Category";
import { Enum_Department } from "../enums/Enum_Department";
import { Enum_Status } from "../enums/Enum_Status";
import { Advances } from "../models/Advances.model";

export const advancesData: Advances[] = [
  {
    id: '1',
    title: 'Advance for Office Setup',
    date: '10/01/2024',
    lastUpdate: '12/01/2024',
    category: Enum_Category.Retail,
    department: Enum_Department.Administration,
    status: Enum_Status.Approved,
    advanceAmount: 50000,
    personId: '1'
  },
  {
    id: '2',
    title: 'Team Outing Advance',
    date: '05/02/2024',
    lastUpdate: '07/02/2024',
    category: Enum_Category.Entertainment,
    department: Enum_Department.Management,
    status: Enum_Status.Screening,
    advanceAmount: 25000,
    personId: '2'
  },
  {
    id: '3',
    title: 'Travel Advance for Conference',
    date: '15/03/2024',
    lastUpdate: '18/03/2024',
    category: Enum_Category.Travel,
    department: Enum_Department.Engineering,
    status: Enum_Status.Rejected,
    advanceAmount: 15000,
    personId: '3'
  },
  {
    id: '4',
    title: 'Client Meeting Advance',
    date: '22/03/2024',
    lastUpdate: '25/03/2024',
    category: Enum_Category.Hotel,
    department: Enum_Department.Sales,
    status: Enum_Status.Approved,
    advanceAmount: 12000,
    personId: '4'
  },
  {
    id: '5',
    title: 'Marketing Campaign Advance',
    date: '05/04/2024',
    lastUpdate: '07/04/2024',
    category: Enum_Category.CurrentEvents,
    department: Enum_Department.Marketing,
    status: Enum_Status.Screening,
    advanceAmount: 30000,
    personId: '5'
  },
  {
    id: '6',
    title: 'IT Equipment Purchase Advance',
    date: '12/04/2024',
    lastUpdate: '15/04/2024',
    category: Enum_Category.CurrentEvents,
    department: Enum_Department.Product,
    status: Enum_Status.Approved,
    advanceAmount: 45000,
    personId: '6'
  }
];
