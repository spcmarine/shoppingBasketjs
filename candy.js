
class Candy {
    constructor(candy, price) {
        this.name = candy;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

module.exports = Candy;