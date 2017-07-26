import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupConfigurationComponent } from './group.component';

const routes: Routes = [
    { path: '', component: GroupConfigurationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupComponentRoutingModule { }
