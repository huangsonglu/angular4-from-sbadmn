import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from '../group/group.component';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    GroupRoutingModule,
    TranslateModule
  ],
  declarations: [GroupComponent]
})
export class GroupModule { }
