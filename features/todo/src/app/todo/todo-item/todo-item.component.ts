import type { Todo } from '@mfe-todo/types-todo';
import {
  ChangeDetectionStrategy,
  Component,
  ɵinput as input,
} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  todoItem = input.required<Todo>();
}
