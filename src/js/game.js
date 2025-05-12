import '../css/style.css'
import { Actor, Engine, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Tree } from './tree'
import { Chicken } from './chicken'
import { Background } from './background.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600, maxFps: 60, displayMode: DisplayMode.FitScreen })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const bg = new Background()
        this.add(bg)

        Resources.ThemeSong.play(0.4)
    }
}

new Game()
