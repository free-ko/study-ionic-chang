import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'first',
        loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
      },
      {
        path: 'third',
        loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
      },
      {
        path: '',
        redirectTo: 'home/first',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home/first',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
