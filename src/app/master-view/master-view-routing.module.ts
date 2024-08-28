import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { BacklogComponent } from './backlog/backlog.component';
import { Demo1Component } from './demo1/demo1.component';
import { ChildViewComponent } from './child-view/child-view.component';

const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'my-tasks', pathMatch: 'full' }, { path: 'my-tasks', component: MyTasksComponent, data: { text: 'My Tasks' } }, { path: 'dashboards', component: DashboardsComponent, data: { text: 'Dashboards' } }, { path: 'backlog', component: BacklogComponent, data: { text: 'Backlog' } }, { path: 'demo1', component: Demo1Component, data: { text: 'Demo1' } }, { path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterViewRoutingModule {
}
