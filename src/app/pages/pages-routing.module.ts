import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: 'avaliations',
    loadChildren: () => import('./avaliations/avaliations.module').then(m => m.AvaliationsModule)
  },
  {
    path: 'establishments',
    loadChildren: () => import('./establishments/establishments.module').then(m => m.EstablishmentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
