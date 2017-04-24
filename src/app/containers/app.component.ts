import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { id } from '../utils/id';
import { people } from '../reducers/people';
import { ADD_PERSON, REMOVE_PERSON, ADD_GUEST, REMOVE_GUEST, TOGGLE_ATTENDING } from '../actions/actions';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public model$;

  constructor(private _store: Store<any>) {
      /*
        Every time people or partyFilter emits, pass the latest
        value from each into supplied function. We can then calculate
        and output statistics.
      */
      this.model$ = Observable.combineLatest(
          _store.select('people'),
          _store.select('partyFilter'),
          (people: Array<any>, filter: any) => {
          return {
            total: people.length,
            people:_.filter(people, filter),
            attending: _.filter(people, person => person.attending).length,
            guests: people.reduce((acc, curr) => acc + curr.guests, 0)
          }
        });
  }
  // all state-changing actions get dispatched to and handled by reducers
  addPerson(name) {
    this._store.dispatch({ type: ADD_PERSON, payload: { id: id(), name: name } });
  }

  addGuest(id) {
    this._store.dispatch({ type: ADD_GUEST, payload: id });
  }

  removeGuest(id) {
    this._store.dispatch({ type: REMOVE_GUEST, payload: id });
  }

  removePerson(id) {
    this._store.dispatch({ type: REMOVE_PERSON, payload: id });
  }

  toggleAttending(id) {
    this._store.dispatch({ type: TOGGLE_ATTENDING, payload: id });
  }

  updateFilter(filter) {
    this._store.dispatch({ type: filter })
  }
  // ngOnDestroy to unsubscribe is no longer necessary

}
