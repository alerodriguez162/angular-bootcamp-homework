import { Component } from '@angular/core';
import { RootInjectableService } from '../../services/root-injectable.service';

@Component({
  selector: 'app-my-third-component',
  templateUrl: './my-third-component.component.html',
  styleUrl: './my-third-component.component.scss'
})
export class MyThirdComponentComponent {
  messageFromService: string;
  constructor(private rootService: RootInjectableService) {
    this.messageFromService = this.rootService.string;
  }
}
