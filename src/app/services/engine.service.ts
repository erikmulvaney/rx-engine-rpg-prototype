import { Injectable } from '@angular/core';
import { Engine, InputState, Keyboard, Mouse } from 'rx-game-engine';
import { Observable } from 'rxjs';

@Injectable()
export class EngineService {
    private engine: Engine;
    public keyboard: Keyboard;
    public mouse: Mouse;

    constructor() {
        this.keyboard = new Keyboard();
        this.mouse = new Mouse();
        this.engine = new Engine(this.keyboard, this.mouse);
    }

    start(): void {
        this.engine.start();
    }

    stop(): void {
        this.engine.stop();
    }

    updateState<T>(initialState: T, updateState: (inputState: InputState, state: T) => T): Observable<T> {
        return this.engine.updateState<T>(initialState, updateState);
    }

    mouseDown(name: string): void {
        this.mouse.mouseDown(name);
    }

    mouseUp(name: string): void {
        this.mouse.mouseUp(name);
    }
}