import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  message: string = 'Hello World';
  messageTwoDataBinding: string = '';


  showAlert() {
    alert('I was triggered by an event');
  }
}
