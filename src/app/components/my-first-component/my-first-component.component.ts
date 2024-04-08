import { Component } from '@angular/core';
import { ModuleProviderService } from '../../services/module-provider.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss'
})
export class MyFirstComponentComponent {
  messageFromService: string[];
  constructor(private myLocalService: ModuleProviderService) {
    this.messageFromService = this.myLocalService.NUMBERS;
  }
}
