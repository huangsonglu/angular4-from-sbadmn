import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    AssetRoutingModule,
    TranslateModule
  ],
  declarations: [AssetComponent]
})
export class AssetModule { }
