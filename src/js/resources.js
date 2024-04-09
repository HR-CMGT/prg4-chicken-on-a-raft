import { ImageSource, Sound, Resource, Loader } from 'excalibur'

const Resources = {
    Bird: new ImageSource('images/bird.png'),
    Tree: new ImageSource('images/tree.png'),
    BG: new ImageSource('images/bg.png'),
    ThemeSong: new Sound('sounds/watertheme.mp3')
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }