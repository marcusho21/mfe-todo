import { TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';

describe('TodoItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoItemComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TodoItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
