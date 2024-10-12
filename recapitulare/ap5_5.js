class SpaceObject {
    constructor(name, size, color){
        this.name = name;
        this.size = size;
        this.color = color;
    }
    fly() {
        console.log(`${this.name} is flying through space!`);
    }
}
class Star extends SpaceObject{
    constructor(name, size, color, temprature){
        super(name, size, color);
        this.temprature = temprature;
    }
    shine(){
        console.log(`${this.name} is shining brightly at a temparature of ${this.temprature} Kelvin!`);
    }
}
class Planet extends SpaceObject{
    constructor( name, size, color, distanceFromSun){
        super(name, size, color);
        this.distanceFromSun = distanceFromSun;
    }
    orbit(){
        console.log(`${this.name} is orbiting the sun at distance of ${this.distanceFromSun}`)
    }
}
class SpaceObjectFactory{
    createObject(type, name, color, extraParams){
        switch(type){
            case 'star':
                return new Star(name, size, color, extraParams.temprature);
                case 'planet':
                    return new Planet(name, size, color, extraParams.distanceFromSun);
                    default:
                        throw new Error(`Invalid space object type: ${type}`);
        }
    }
}
const factory = new SpaceObjectFactory();
const sun = factory.createObject('star', 'Sun', '109 times larger than Earth', 'yellow',{temprature});
const Earth = factory.createObject('planet', 'Earth','12,742 km diameter', 'blue', {distanceFromSun});
sun.shine();
Earth.orbit();