import { Component } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-my-second-component',
  templateUrl: './my-second-component.component.html',
  styleUrl: './my-second-component.component.scss'
})
export class MySecondComponentComponent {
  messageFromService: string;
  constructor(private rootService: RootInjectableService) {
    this.messageFromService = this.rootService.string;
  }
}
