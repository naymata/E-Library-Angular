import {NgModule} from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {NgxWebstorageModule} from "ngx-webstorage";
import {RouterLink, RouterModule} from "@angular/router";
import {CartFilter} from "../../shared/cart-filter";

const modules_array =
  [HttpClientModule, HttpClientModule, NgxWebstorageModule.forRoot(), RouterModule,RouterLink];


@NgModule({
  declarations: [CartFilter],
  imports: [
    modules_array,

  ],
  exports: [modules_array]
})
export class ServerSideModule {
}
