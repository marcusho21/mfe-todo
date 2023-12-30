import type { Todo } from '@mfe-todo/types-todo';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Input({ required: true }) todo: Todo | null = null;
}
