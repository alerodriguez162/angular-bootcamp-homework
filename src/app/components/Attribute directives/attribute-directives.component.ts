import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  active = false;
  activeStyle = false;

  toggleActive() {
    this.active = !this.active;
  }

  toggleStyleActive() {
    this.activeStyle = !this.activeStyle;
  }
}
