import { Actor, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Hat extends Actor {
    constructor() {
        super()
        this.graphics.use(Resources.Hat.toSprite())
    }
}