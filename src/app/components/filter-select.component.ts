import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { SHOW_ATTENDING, SHOW_ALL, SHOW_WITH_GUESTS } from '../actions/actions';

@Component({
  selector: 'app-filter-select',
  template: `
      <div class="margin-bottom-10">
        <select #selectList (change)="updateFilter.emit(selectList.value)">
            <option *ngFor="#filter of filters" value="{{filter.action}}">
                {{filter.friendly}}
            </option>
        </select>
      </div>
  `,
  styles: []
})
export class FilterSelectComponent implements OnInit {
  public filters = [
    { friendly: "All", action: SHOW_ALL },
    { friendly: "Attending", action: SHOW_ATTENDING },
    { friendly: "Attending w/ Guests", action: SHOW_WITH_GUESTS }
  ];
  @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
