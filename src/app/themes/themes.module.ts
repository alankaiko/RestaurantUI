import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemesModule {
}
