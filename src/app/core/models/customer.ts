export type CustomerCategory = 'Standard' | 'Premium' | 'Elite';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  category: CustomerCategory;
  age: number;
  address: string;
  phoneNumber: string;
  email: string;
}

export const CUSTOMERS_MOCK: Customer[] = [
  {
    id: 1,
    firstName: 'Allan',
    lastName: 'K',
    avatar: 'black',
    age: 32,
    category: 'Standard',
    address: 'Address Placeholder XYZ',
    phoneNumber: '+555 555 999',
    email: 'example@example.com',
  },
  {
    id: 2,
    firstName: 'Ada',
    lastName: 'Smith',
    avatar: 'pink',
    age: 19,
    category: 'Standard',
    address: 'Address Placeholder XYZ',
    phoneNumber: '+555 555 999',
    email: 'example@example.com',
  },
  {
    id: 3,
    firstName: 'Jenny',
    lastName: 'Doe',
    avatar: 'pink',
    age: 30,
    category: 'Premium',
    address: 'Address Placeholder XYZ',
    phoneNumber: '+555 555 999',
    email: 'example@example.com',
  },
  {
    id: 4,
    firstName: 'John',
    lastName: 'Bohn',
    avatar: 'royalblue',
    age: 45,
    category: 'Elite',
    address: 'Address Placeholder XYZ',
    phoneNumber: '+555 555 999',
    email: 'example@example.com',
  },
  {
    id: 5,
    firstName: 'Peter',
    lastName: 'M',
    avatar: 'lightgray',
    age: 22,
    category: 'Standard',
    address: 'Address Placeholder XYZ',
    phoneNumber: '+555 555 999',
    email: 'example@example.com',
  },
  {
    id: 6,
    firstName: 'Rob',
    lastName: 'D',
    avatar: 'royalblue',
    age: 40,
    category: 'Premium',
    address: 'Address Placeholder XYZ',
    phoneNumber: '+555 555 999',
    email: 'example@example.com',
  },
];
