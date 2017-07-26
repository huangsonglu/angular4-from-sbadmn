import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-element-page',
    templateUrl: './element.component.html',
    styleUrls: ['./element.component.scss'],
    animations: [routerTransition()]
})
export class ElementPageComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
