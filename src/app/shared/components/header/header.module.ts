import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class HeaderModule { }
