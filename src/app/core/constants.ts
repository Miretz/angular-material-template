export const MAIN_TITLE = 'Minimal App';

export const SIDENAV_LINKS: SidenavLink[] = [
  {
    title: 'Dashboard',
    tooltip: 'View Dashboard',
    link: '',
    icon: 'dashboard',
  },
  {
    title: 'Customers',
    tooltip: 'Manage Customers',
    link: '/customers',
    icon: 'people',
  },
  {
    title: 'Products',
    tooltip: 'Browse Products',
    link: '/products',
    icon: 'shopping_cart',
  },
];

export interface SidenavLink {
  title: string;
  tooltip: string;
  link: string;
  icon: string;
}

export const DASHBOARD_COLORS: string[] = [
  '#647c8a',
  '#3f51b5',
  '#2196f3',
  '#00b862',
  '#afdf0a',
  '#a7b61a',
  '#f3e562',
  '#ff9800',
  '#ff5722',
  '#ff4514',
];
