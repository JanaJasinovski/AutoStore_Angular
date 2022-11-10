import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StartPageRoutingModule} from './start-page-routing.module';
import {StartPageComponent} from './components/start-page/start-page.component';
import {HeaderModule} from '../../shared/components/header/header.module';
import {SideNavModule} from "../../shared/components/side-nav/side-nav.module";
import {CarListComponent} from './components/car-list/car-list.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    StartPageComponent,
    CarListComponent,
  ],
    imports: [
        CommonModule,
        StartPageRoutingModule,
        HeaderModule,
        SideNavModule,
        NgxPaginationModule,
    ]
})
export class StartPageModule {
}
