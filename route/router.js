export default [
  {
    path: '/',
    meta: { title: 'Dashboard', icon: 'dashboard' }
  },
  // {
  //   path: '/1040',
  //   meta: {
  //     title: 'Form 1040',
  //     icon: 'form'
  //   }
  // },
  {
    path: '/library',
    meta: {
      title: 'Form library',
      icon: 'tree'
    }
  },
  {
    path: '/users',
    name: 'Home',
    meta: { title: 'Users', icon: 'user' },
    children: [
      {
        path: 'clients',
        name: 'Clients',
        meta: { title: 'Clients', icon: '' }
      },
      {
        path: 'permissions',
        name: 'Permissions',
        meta: { title: 'Permissions', icon: '' }
      }
    ]
  },
  {
    path: '/purchase',
    meta: {
      title: 'Purchase',
      icon: 'shopping'
    }
  },
  {
    path: '/',
    meta: {
      title: 'Settings',
      icon: 'settings'
    }
  }
]
