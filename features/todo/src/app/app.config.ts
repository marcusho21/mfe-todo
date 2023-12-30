import { CustomElementRef } from '@mfe-todo/mfe-utils';
import { ApplicationConfig, Type } from '@angular/core';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

export const appConfig: ApplicationConfig = {
  providers: [],
};

export const appCustomElements: ReadonlyArray<CustomElementRef> = [
  {
    name: 'todo-item',
    component: TodoItemComponent,
  },
] as const;
