class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
    }

    getDetails = () => {return `Make: ${this.make}. Model: ${this.model}`}
}

export{
    Car
}

