import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './user.component';
import { UsersService } from './user.service';
const routes: Routes = [
    { path: '', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[UsersService]

})
export class UsersRoutingModule { }
