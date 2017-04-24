import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-party-stats',
  template: `
      <strong>Invited:</strong> {{invited}}
      <strong>Attending:</strong> {{attending}}
      <strong>Guests:</strong> {{guests}}
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class PartyStatsComponent implements OnInit {
  @Input() invited;
  @Input() attending;
  @Input() guests;
  constructor() { }

  ngOnInit() {
  }

}
