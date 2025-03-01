import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})


export class CardComponent {
  @Input() heading : string = "";
  @Input() value : number = 0;
  @Input() buttonHeading : string = "";
  @Input() changePercentage : number = 0;
}
