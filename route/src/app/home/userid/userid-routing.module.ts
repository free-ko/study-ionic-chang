import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseridPage } from './userid.page';

const routes: Routes = [
  {
    path: '',
    component: UseridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseridPageRoutingModule {}
