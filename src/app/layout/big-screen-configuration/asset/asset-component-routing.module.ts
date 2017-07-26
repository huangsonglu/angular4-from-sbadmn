import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssetConfigurationComponent } from './asset.component';

const routes: Routes = [
    { path: '', component: AssetConfigurationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssetComponentRoutingModule { }
