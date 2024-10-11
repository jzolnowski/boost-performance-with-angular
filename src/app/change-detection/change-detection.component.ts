import { Component, signal, WritableSignal } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  standalone: true,
  selector: 'change-detection',
  templateUrl: './change-detection.component.html',
  imports: [ChildComponent]
})
export class ChangeDetectionComponent {
  depth: WritableSignal<number> = signal(4);
  color: WritableSignal<string | null> = signal(null);
}
