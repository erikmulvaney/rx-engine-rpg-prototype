import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EngineService } from './services/engine.service';
import { BackgroundMapComponent } from './components/background-map/background-map.component';
import { SpriteComponent } from './components/sprite/sprite.component';
import { WorldPlayerComponent } from './components/world-player/world-player.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundMapComponent,
    SpriteComponent,
    WorldPlayerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    EngineService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
