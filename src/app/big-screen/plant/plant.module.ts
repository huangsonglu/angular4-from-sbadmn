import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { PlantRoutingModule } from './plant-routing.module';

import { PlantComponent } from './plant.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    PlantRoutingModule,
    TranslateModule
  ],
  declarations: [PlantComponent]
})
export class PlantModule { }
