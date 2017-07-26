import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// relative import
import { PlantComponentRoutingModule } from './plant-component-routing.module';
import { PlantConfigurationComponent } from './plant.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        PlantComponentRoutingModule,
    ],
    declarations: [
        PlantConfigurationComponent
    ]
})
export class ConfigPlantComponentModule { }
