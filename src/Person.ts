interface Fly {
    fly(): void;
}

class Person implements Fly {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    fly(): void {
        console.log(this.name + " fly");
    }
}


export {Person};