import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {ThemesModule} from './themes/themes.module';
import {RouterOutlet} from '@angular/router';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ThemesModule,
    PagesModule
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
