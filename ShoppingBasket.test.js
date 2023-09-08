const ShoppingBasket = require('./shoppingBasket'); // use PascalCase when importing class
const Candy = require('./candy');

describe('Unit/Mock test to create a basket', () => {
    it('It initiates with an empty list', () => {
        const shoppingBasket = new ShoppingBasket();
        expect(shoppingBasket.basket).toEqual([]);
    })

    // no mocking as we are using the actual Candy and ShoppingBasket class
    // but not using any methods from Candy class
    it('Adds candy to the basket', () => {
        const shoppingBasket = new ShoppingBasket();
        const candy = new Candy('snicker', 1.99);
        shoppingBasket.addItem(candy);
        expect(shoppingBasket.basket).toEqual([candy]);
    })

    // full mock, fully independent from Candy class.
    // Only using a mock value here: mockCandy
    it('It calculates the total price of items in the basket', () => {
        const shoppingBasket = new ShoppingBasket();
        // const candy = new Candy('snicker', 1.99);
        // jest.spyOn(candy, 'getPrice').mockReturnValue(1.99);
        const mockCandy = {getPrice: () => 1.99}
        shoppingBasket.addItem(mockCandy);
        expect(shoppingBasket.getTotalPrice()).toEqual(1.99);
    });
})
