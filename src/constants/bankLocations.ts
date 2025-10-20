import { BankLocation } from '@/types';

export const BANK_LOCATIONS: BankLocation[] = [
  {
    id: 1,
    name: 'Bank 1656 Union Street',
    lat: 37.7749,
    lng: -122.4194,
    distance: '50 m',
  },
  {
    id: 2,
    name: 'Bank Secaucus',
    lat: 37.7849,
    lng: -122.4094,
    distance: '1.2 km',
  },
  {
    id: 3,
    name: 'Bank 1657 Riverside Drive',
    lat: 37.7649,
    lng: -122.4294,
    distance: '5.3 km',
  },
  {
    id: 4,
    name: 'Bank Market Street',
    lat: 37.775,
    lng: -122.418,
    distance: '7.8 km',
  },
  {
    id: 5,
    name: 'Bank Golden Gate',
    lat: 37.808,
    lng: -122.475,
    distance: '10.5 km',
  },
];
export const BANK_OPTIONS = [
  'Fifth Third',
  'Bank of the West',
  'Wells Fago',
  'JP Morgan Chae',
  'US Bank',
  'HSBS Bank',
  'Citibank',
  'Ame Express',
];
export const BRANCH_OPTIONS = ['Main Branch', 'City Branch', 'Sub Branch'];
