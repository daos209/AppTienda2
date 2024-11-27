import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'productos',
        loadChildren: () => import('../tabs/productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: 'ropa',
        loadChildren: () => import('../tabs/ropa/ropa.module').then( m => m.RopaPageModule)
      },
      {
        path: 'galeria',
        loadChildren: () => import('../tabs/galeria/galeria.module').then( m => m.GaleriaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/productos',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
