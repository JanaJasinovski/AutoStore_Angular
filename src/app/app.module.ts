import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './shared/components/header/header.module';
import {SideNavModule} from "./shared/components/side-nav/side-nav.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {StartPageModule} from "./modules/start-page/start-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SideNavModule,
    HttpClientModule,
    StartPageModule,
    FormsModule,
    NgxPaginationModule,
    FontAwesomeModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
