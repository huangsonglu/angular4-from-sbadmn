import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-map-conf-page',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
    animations: [routerTransition()]
})
export class MapComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
