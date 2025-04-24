import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EstablishmentListComponent} from './establishment-list/establishment-list.component';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentListComponent,
    data: {
      title: 'Restaurantes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentsRoutingModule {
}
