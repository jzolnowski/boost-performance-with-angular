import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  signal,
  input, WritableSignal, viewChild,
} from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { getColors, getUniqueId, getUniqueIndex } from '../utils';
import { startAnimations, stopAnimations } from '../animations';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CounterComponent],
})
export class ChildComponent {
  zone = inject(NgZone);
  depth = input.required<number>();
  color = input.required<string | null>();
  readonly contentNode = viewChild.required<ElementRef>('contentNode');
  componentId = getUniqueId();
  componentIndex = getUniqueIndex();
  timeoutTime: number = 0;
  intervalId: NodeJS.Timeout | undefined;
  signalCount: WritableSignal<number> = signal(0);
  cdCount: number = 0;

  getDefaultColor(index= 0): string {
    return this.color() ?? getColors()[index];
  }

  triggerChangeDetection(): void {
    this.timeoutTime = this.componentIndex * 200;
    this.zone.runOutsideAngular(() => {
      startAnimations(this.contentNode(), this.timeoutTime);
    });
    this.cdCount++;
    this.reset();
  }

  reset(): void {
    this.zone.runOutsideAngular(() => {
      stopAnimations(this.contentNode(), this.timeoutTime, this.getDefaultColor());
    });
  }

  incrementSignalCount(): void {
    this.signalCount.update(value => value + 1);
  }

  startInterval(): void {
    this.intervalId = setInterval(() => {
      this.incrementSignalCount();
    }, 2200);
  }

  stopInterval(): void {
    clearInterval(Number(this.intervalId));
    this.intervalId = undefined;
  }
}
