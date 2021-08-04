const routes = [
  { 
    path: '/', 
    component: '@/layouts', 
    routes: [
      { path: '/', component: '@/pages' },
      { path: '/hello', component: '@/pages/hello' },
    ]
  },
  
];
export default routes