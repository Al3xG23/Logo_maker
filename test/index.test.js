const Triangle = require('../index.js');

describe('Triangle', () => {
    describe('Triangle', () => {
        it('should take new shape and color and render svg', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        });
    });
});

