import { Component, OnDestroy } from '@angular/core';
import { InputState } from 'rx-game-engine';
import { Observable, of } from 'rxjs';

import { Player } from './models/player.model';
import { initialMap, Map } from './models/map.model';
import { EngineService } from './services/engine.service';
import { checkBounds } from './utils';

interface OverworldState {
  player: Player,
  map: Map,
}

const initialState: OverworldState = {
  player: new Player(),
  map: initialMap
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'angular-game';
  state$: Observable<OverworldState> = of(initialState);

  constructor(private engine: EngineService) {
    this.engine.keyboard.addBinding('Player', Player.bindings);
    this.state$ = this.engine.updateState(initialState, (inputState, state) => this.updateGameState(inputState, state));
    this.engine.start();
  }

  ngOnDestroy(): void {
    this.engine.keyboard.removeAllBindings();
    this.engine.stop();
  }

  private updateGameState(inputState: InputState, state: OverworldState) {
    state.player.update(inputState);
    checkBounds(state.player, state.map);
    return state;
  }
}
