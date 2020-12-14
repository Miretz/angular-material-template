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
