import { Component } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-group-configuration-component',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    animations: [routerTransition()]
})
export class GroupConfigurationComponent {
}
