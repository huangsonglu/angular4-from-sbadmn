import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from './user.component';
import { UsersRoutingModule } from './user-routing.module';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot()
    ],
    declarations: [UsersComponent]
})
export class UsersModule { }
