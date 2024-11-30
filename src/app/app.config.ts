import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // Include FormsModule for ngModel
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'TaskingApplication';
  tasks: string[] = [];
  newTask: string = '';

  /**
   * Add a new task to the list.
   * Prevents empty or whitespace-only entries.
   */
  addTask(): void {
    const trimmedTask = this.newTask.trim();
    if (trimmedTask) {
      this.tasks.push(trimmedTask);
      this.newTask = '';
    }
  }

  /**
   * Remove a task from the list by index.
   * @param index - Index of the task to be removed
   */
  removeTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}
