import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ElementPageRoutingModule } from './element-routing.module';
import { ElementPageComponent } from './element.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    ElementPageRoutingModule
  ],
  declarations: [ElementPageComponent]
})
export class ElementPageModule { }
