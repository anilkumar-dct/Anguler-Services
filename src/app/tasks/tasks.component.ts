import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TmplAstBlockNode } from '@angular/compiler';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  providers: [TmplAstBlockNode], //This is 2nd way of provide the services to other component but the restriction is the services only available in this component and it's child component
})
export class TasksComponent {}
