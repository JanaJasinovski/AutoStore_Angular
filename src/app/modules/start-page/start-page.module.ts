import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartPageRoutingModule } from './start-page-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { HeaderModule } from '../../shared/components/header/header.module';

@NgModule({
  declarations: [
    StartPageComponent,
  ],
    imports: [
        CommonModule,
        StartPageRoutingModule,
        HeaderModule,
    ]
})
export class StartPageModule { }
