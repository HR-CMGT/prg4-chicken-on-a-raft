import { Actor, Engine, Vector, Sprite } from "excalibur"
import { Resources } from './resources'

export class Chicken extends Actor {
    sprite
    constructor() {
        super({width: Resources.Bird.width, height: Resources.Bird.height })
        this.pos = new Vector(0,0)
    }
    onInitialize(engine) {
        this.sprite = Resources.Bird.toSprite()
        this.graphics.use(this.sprite)
        this.sprite.flipHorizontal = true
    }

    // random bokbok sound
    onPostUpdate() {
        if(Math.random() < 0.001) {
            Resources.ChickenOne.play() // kan ook chickenTwo en chickenThree zijn
        }
    }

}
