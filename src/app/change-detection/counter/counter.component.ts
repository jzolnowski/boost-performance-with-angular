import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './counter.component.scss',
  template: `
  <div class="default-btn">
    <span class="text-green-label">{{title()}}</span>
    <span class="white-bold-text">{{count()}}</span>
  </div>
  `,
})
export class CounterComponent {
  readonly title = input.required<string>();
  readonly count = input.required<number>();
}
