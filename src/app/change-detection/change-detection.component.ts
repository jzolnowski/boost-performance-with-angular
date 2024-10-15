import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { isPlatformServer } from '@angular/common';

@Component({
  standalone: true,
  selector: 'change-detection',
  templateUrl: './change-detection.component.html',
  imports: [ChildComponent]
})
export class ChangeDetectionComponent {
  depth: WritableSignal<number> = signal(4);
  color: WritableSignal<string | null> = signal(null);
  private readonly platform = inject(PLATFORM_ID);
  readonly isServerPlatform = signal(false);

  constructor() {
    this.isServerPlatform.set(isPlatformServer(this.platform))
  }
}
