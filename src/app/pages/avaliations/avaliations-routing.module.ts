import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AvaliationListComponent} from './avaliation-list/avaliation-list.component';

const routes: Routes = [
  {
    path: '',
    component: AvaliationListComponent,
    data: {
      title: 'Avaliações de Restaurantes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvaliationsRoutingModule {
}
