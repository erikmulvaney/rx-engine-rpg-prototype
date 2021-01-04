import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { EngineService } from 'src/app/services/engine.service';

import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-world-player',
  templateUrl: './world-player.component.html',
  styleUrls: ['./world-player.component.scss'],
})
export class WorldPlayerComponent {
  @Input() player: Player = new Player();

  constructor(private engineService: EngineService) {}

  onPlayerMouseDown(): void {
    this.engineService.mouseDown(Player.die);
  }

  onPlayerMouseUp(): void {
    this.engineService.mouseUp(Player.die);
  }
}
