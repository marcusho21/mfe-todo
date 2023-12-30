import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-utils',
  standalone: true,
  imports: [],
  template: ` <p>utils works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilsComponent {}
