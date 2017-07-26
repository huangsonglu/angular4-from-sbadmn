import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-plant-configuration-component',
    templateUrl: './plant.component.html',
    styleUrls: ['./plant.component.scss'],
    animations: [routerTransition()]
})
export class PlantConfigurationComponent {
}
