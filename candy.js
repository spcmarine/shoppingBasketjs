
class Candy {
    contructor(candy, price) {
        this.candy = candy;
        this.price = price;
    }

    getName() {
        return this.candy;
    }

    getPrice() {
        return this.price;
    }
}

module.exports = Candy;