class Person{
    say(name){
        if(name){
            this.#sayWithName(name);
        }
        else{
            this.#sayWithoutName();
        }
    }
        #sayWithoutName(){
            console.info("Hello");
        }
        #sayWithName(name){
            console.info(`Hello ${name}`);
        }
    }
    const pers =new Person();
    pers.say("Dan");
    pers.say();
