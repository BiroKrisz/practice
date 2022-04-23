import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-test',
  template: `
    <form class="form">
      <div class="form-group">
        <label for="firstName"> First Name </label>
        <input
          [(ngModel)]="person.firstName"
          class="form-control"
          name="firstName"
          id="firstName"
          type="text"
          pattern="^[A-Z][a-z0-9 ]{1,14}$"
          required
        />
      </div>

      <div class="form-group">
        <label for="lastName"> Last Name </label>
        <input
          [(ngModel)]="person.lastName"
          class="form-control"
          name="lastName"
          id="lastName"
          type="text"
          required
          pattern="^[A-Z][a-zA-Z]{2,19}$"
        />
      </div>

      <div class="form-group">
        <label for="year"> Number </label>
        <input
          [value]="person.number"
          class="form-control"
          name="number"
          id="number"
          type="number"
          required
          pattern="^d{4}$"
        />
      </div>
      <button (click)="onUpdate(person)" class="btn btn-info btn-block">
        <i class="fa fa-save"> </i>
      </button>
    </form>
    <div class="row p-5">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let entity of list">
            <td>{{ entity.firstName }}</td>
            <td>{{ entity.lastName }}</td>
            <td>{{ entity.number }}</td>
          </tr>
        </tbody>
</table>
    </div>
  `,
  styles: [],
})
export class TestComponent implements OnInit {

  list: Person[] = [];
  @Input() person = new Person();

  constructor() {}

  ngOnInit(): void {}

  onUpdate(person: Person): void {
    this.list.push(person);
    this.sorter(this.list);
    this.person = new Person();
  }

  sorter(list: Person[]): void {
    list.sort((a, b) => {
      return a.lastName.localeCompare(b.lastName);
    });
  }
}
