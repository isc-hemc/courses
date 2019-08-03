class Plant {
    protected _specie: string;

    constructor(specie: string) {
        this._specie = specie;
    }

    set specie(value: string) { this._specie = value; }
    get specie() { return this._specie; }
}

let plant: Plant = new Plant('Orchid');
console.log(plant.specie);

// Setting a new specie.
plant.specie = 'Dionaea muscipula';
console.log(plant.specie);
