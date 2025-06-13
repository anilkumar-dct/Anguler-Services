import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from '../task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = signal<Task[]>([]);
  allTask = this.tasks.asReadonly();
  addTask(taskData: { title: string; description: string }) {
    this.tasks.update((oldTasks) => {
      var newTasks: Task[] = [
        ...oldTasks,
        {
          ...taskData,
          id: Math.random().toString(),
          status: 'OPEN',
        },
      ];
      return newTasks;
    });
  }
  updateTask(taskId: string, taskStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: taskStatus } //this syntax is here overwritting the status and and other are same
          : task
      )
    );
  }
}
