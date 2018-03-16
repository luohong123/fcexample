import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Routers } from './index.route';
import {
  FcbasicModule,
  FclayoutModule,
  FcadModule,
  FcnavModule,
  FctlbModule,
  FctabModule,
  FclistModule
} from 'fccomponent';
import { Hellofc1Component } from './components/hellofc1.component';
import { Hellofc2Component } from './components/hellofc2.component';
import { Hellofc3Component } from './components/hellofc3.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    FclistModule,
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FctlbModule,
    FctlbModule,
    FctabModule
  ],
  exports: [

  ],
  declarations: [
    Hellofc1Component,
    Hellofc2Component,
    Hellofc3Component
  ],
  providers: [
    
  ]
})
export class Hellomodule1Module { }