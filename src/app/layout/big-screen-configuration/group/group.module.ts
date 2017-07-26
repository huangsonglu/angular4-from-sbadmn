import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// relative import
import { GroupComponentRoutingModule } from './group-component-routing.module';
import { GroupConfigurationComponent } from './group.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        GroupComponentRoutingModule,
    ],
    declarations: [
        GroupConfigurationComponent
    ]
})
export class ConfigGroupComponentModule { }
