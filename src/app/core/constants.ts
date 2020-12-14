export const SIDENAV_LINKS: SidenavLink[] = [
  {
    title: 'Dashboard',
    subtitle: 'Go back to the Dashboard',
    link: '',
    icon: 'dashboard',
  },
  {
    title: 'Customers',
    subtitle: 'Manage Customers',
    link: '/customers',
    icon: 'people',
  },
  {
    title: 'Products',
    subtitle: 'Browse Products',
    link: '/products',
    icon: 'shopping_cart',
  },
];

export interface SidenavLink {
  title: string;
  subtitle: string;
  link: string;
  icon: string;
}
