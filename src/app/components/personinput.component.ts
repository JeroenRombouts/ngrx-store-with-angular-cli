import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personinput',
  template: `
      <input #personName type="text" />
      <button (click)="add(personName)">Add Person</button>
  `,
  styles: []
})
export class PersoninputComponent implements OnInit {
  @Output() addPerson = new EventEmitter();

  add(personInput) {
    this.addPerson.emit(personInput.value);
    personInput.value = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
