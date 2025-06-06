import { Actor, Engine, Vector } from "excalibur"
import { Resources } from './resources'
import { Chicken } from './chicken'

export class Tree extends Actor {
    constructor() {
        super({width:Resources.Tree.width, height:Resources.Tree.height})
    }
    onInitialize(engine) {
        this.graphics.use(Resources.Tree.toSprite())
        this.vel = new Vector(Math.random()*80-120, 0)
        this.pos = new Vector(0,0)
        this.on('exitviewport', () => this.resetPosition())
    }

    resetPosition() {
        this.pos.x = 1020
    }
}
