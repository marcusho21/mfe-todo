import { Component } from '@angular/core';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
