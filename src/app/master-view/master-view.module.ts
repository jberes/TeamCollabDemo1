import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterViewRoutingModule } from './master-view-routing.module';
import { MasterViewComponent } from './master-view.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { IgxBadgeModule, IgxListModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxAvatarModule, IgxDialogModule, IgxInputGroupModule, IgxChipsModule, IgxCardModule, IgxTabsModule, IgxGridModule, IgxDropDownModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { BacklogComponent } from './backlog/backlog.component';
import { Demo1Component } from './demo1/demo1.component';
import { ChildViewComponent } from './child-view/child-view.component';

@NgModule({
  declarations: [
    MasterViewComponent,
    MyTasksComponent,
    DashboardsComponent,
    BacklogComponent,
    Demo1Component,
    ChildViewComponent
  ],
  imports: [
    CommonModule,
    MasterViewRoutingModule,
    IgxBadgeModule,
    IgxListModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxAvatarModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxChipsModule,
    FormsModule,
    IgxCardModule,
    IgxTabsModule,
    IgxGridModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MasterViewModule {
}
