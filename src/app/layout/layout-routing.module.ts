import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'group-conf', loadChildren: './big-screen-configuration/group/group.module#ConfigGroupComponentModule' },
            { path: 'plant-conf', loadChildren: './big-screen-configuration/plant/plant.module#ConfigPlantComponentModule' },
            { path: 'asset-conf', loadChildren: './big-screen-configuration/asset/asset.module#ConfigAssetComponentModule' },
            { path: 'map-conf', loadChildren: './map-configuration/map.module#MapModule' },
            { path: 'element-conf', loadChildren: './element-configuration/element.module#ElementPageModule' },
            { path: 'user-conf', loadChildren: './user-configuration/user.module#UsersModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
