import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementPageComponent } from './element.component';

const routes: Routes = [
    { path: '', component: ElementPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElementPageRoutingModule { }
