import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Bird: new ImageSource('images/bird.png'),
    Tree: new ImageSource('images/tree.png'),
    Hat: new ImageSource('images/hat.png'),
    Cap: new ImageSource('images/cap.png'),
    Bullet: new ImageSource('images/bullet.png'),
    Gun: new ImageSource('images/gun.png'),
    BG: new ImageSource('images/bg.png'),
    ChickenOne: new Sound('sounds/chicken1.mp3'),
    ChickenTwo: new Sound('sounds/chicken2.mp3'),
    ChickenThree: new Sound('sounds/chicken3.mp3'),
    ThemeSong: new Sound('sounds/watertheme.mp3'),
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }