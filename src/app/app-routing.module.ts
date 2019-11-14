import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {DeleteEmployeeComponent} from './delete-employee/delete-employee.component';

const routes: Routes = [
  {path: 'add', component: AddEmployeeComponent},
  {path: 'view', component: ViewEmployeeComponent},
  {path: 'update', component: UpdateEmployeeComponent},
  {path: 'delete', component: DeleteEmployeeComponent},
  {path: '', component: AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
