import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-asset-configuration-component',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
    animations: [routerTransition()]
})
export class AssetConfigurationComponent {
}
