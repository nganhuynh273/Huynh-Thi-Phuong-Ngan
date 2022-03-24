class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getSay(name, weight) {
        document.getElementById("say" + name + weight).innerHTML = name + " say: " + weight;
    }
}
let objAnimal1 = new Animal;
objAnimal1.setName("Elephant");
objAnimal1.setWeight(45.6);
console.log(objAnimal1);
console.log(objAnimal1.toString());
let objAnimal2 = new Animal("Rabbit", 22);
objAnimal2.setName("Mouse");
console.log(objAnimal2);

