import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { id } from '../utils/id';
import { people } from '../reducers/people';
import { ADD_PERSON, REMOVE_PERSON, ADD_GUEST, REMOVE_GUEST, TOGGLE_ATTENDING } from '../actions/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public people$;

  constructor(private _store: Store<any>) {
      /*
        Observable of people, utilzing the async pipe
        in our templates this will be subscribed to, with
        new values being dispayed in our template.
        Unsubscribe wil be called automatically when component
        is disposed.
      */
      this.people$ = _store.select('people');
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
  // ngOnDestroy to unsubscribe is no longer necessary

}
