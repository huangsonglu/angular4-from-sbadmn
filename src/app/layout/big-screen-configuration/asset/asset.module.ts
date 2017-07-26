import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// relative import
import { AssetComponentRoutingModule } from './asset-component-routing.module';
import { AssetConfigurationComponent } from './asset.component';
import { PageHeaderModule } from '../../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        PageHeaderModule,
        AssetComponentRoutingModule,
    ],
    declarations: [
        AssetConfigurationComponent
    ]
})
export class ConfigAssetComponentModule { }
