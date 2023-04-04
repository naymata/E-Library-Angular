import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from '@angular/material/sidenav';


const modules_array:any=[
  CommonModule,
  FormsModule,
  NoopAnimationsModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule,
  ReactiveFormsModule,
  MatSidenavModule
];

@NgModule({
  imports: [
    modules_array
  ],
  exports:[modules_array]
})
export class UIModule { }
