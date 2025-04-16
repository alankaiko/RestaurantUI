import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class ThemesModule {
}
