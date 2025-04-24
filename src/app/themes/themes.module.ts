import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {LayoutComponent} from './layout/layout.component';
import {RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class ThemesModule {
}
