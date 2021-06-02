import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'cil-center-focus',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW',
    // },
  },
  {
    name: 'Mobility Devices',
    url: '/mobility-devices',
    icon: 'cil-bolt-circle',
    children: [
      {
        name: 'Bots',
        url: '/mobility-devices/bots'
      },
      {
        name: 'Maintenance Info',
        url: '/mobility-devices/maintenance-info'
      },
      {
        name: 'Charging Stations',
        url: '/mobility-devices/charging-stations'
      }
    ]
  },
  {
    name: 'Apps',
    url: '/apps',
    icon: 'cil-life-ring',
    children: [
      {
        name: 'Apps',
        url: '/apps/apps'
      },
      {
        name: 'Products',
        url: '/apps/products'
      },
    ]
  },
  {
    name: 'Service Providers',
    url: '/service-providers',
    icon: 'cil-control',
    children: [
      {
        name: 'Service Provider',
        url: '/service-providers/service-provider'
      },
      {
        name: 'Inventory',
        url: '/service-providers/inventory'
      },
    ]
  },
  {
    name: 'Remote Operators',
    url: '/remote-operators/operators',
    icon: 'cil-airplane-mode',
  },
  {
    name: 'Reports',
    url: '/reports',
    icon: 'cil-list-rich',
    children: [
      {
        name: 'Service Provider',
        url: '/reports/service-provider'
      },
      {
        name: 'Mobility Device',
        url: '/reports/mobility-device'
      },
    ]
  },
  {
    name: 'Maps',
    url: '/maps',
    icon: 'cil-location-pin'
  },
  {
    name: 'Users',
    url: '/user',
    icon: 'cil-people'
  }
];
