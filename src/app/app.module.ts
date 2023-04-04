import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {UIModule} from "./modules/ui/ui.module";
import {ServerSideModule} from "./modules/server-side/server-side.module";
import {CommonModule} from '@angular/common';
import {ComponentsModule} from "./modules/components/components.module";
import { DeleteUserComponent } from './auth/user/delete-user/delete-user.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    UIModule,
    ServerSideModule,
    ComponentsModule
  ],
  providers: [UIModule,ServerSideModule],
  exports: [
    DeleteUserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
