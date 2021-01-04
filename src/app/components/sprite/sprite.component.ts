import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sprite',
  templateUrl: './sprite.component.html',
  styleUrls: ['./sprite.component.scss']
})
export class SpriteComponent {
  @Input() src: string = '';
  @Input() height: number = 0;
  @Input() width: number = 0;
  @Input() xOffset: number = 0;
  @Input() yOffset: number = 0;
}
