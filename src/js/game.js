import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Tree } from './tree'
import { Chicken } from './chicken'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const bg = new Actor()
        bg.graphics.use(Resources.BG.toSprite())
        bg.pos = new Vector(400, 300)
        this.add(bg)

        Resources.ThemeSong.play(0.4)
    }
}

new Game()
