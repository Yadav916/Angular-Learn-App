import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  isAddingTask: boolean = false;
  
  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  get selectedUsersTask() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTasks(id: string) {
    // this.tasks = this.tasks.filter((task => task.id !== id))
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
  // onAddTask(taskData: NewTaskData) {

  //   this.isAddingTask = false;
  // }
}
