import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UsersService } from './user.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

    public dataSource: any;
    public title: any;
    public collectionSize:any;
    public page:any;
    public defaultPagination:any;
    constructor(protected service: UsersService) {

        this.service.getData().then((data) => {
            console.log(data);
            this.title = "Users List"
            this.dataSource = data;
        });
    }


    ngOnInit() {

    }
}
