const Candy = require('./candy')

    describe('Unit tests of the Candy class', () => {
        it('test of Candy constructs', () => {
            const newCandy = new Candy('Flake', 1.99);
            expect(newCandy.name).toEqual('Flake')
            expect(newCandy.price).toBe(1.99)
    })
        it('test of Candy get name method', () => {
            const newCandy = new Candy('Flake', 1.99);
            expect(newCandy.getName()).toEqual('Flake')
    })
        it('test of the Candy get price method', () => {
            const newCandy = new Candy('Freddo', 0.20)
            expect(newCandy.getPrice()).toBe(0.2)
        })
    })