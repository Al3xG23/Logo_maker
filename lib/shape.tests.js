const {Triangle} = require('./shape.js');

describe('Shape', () => {
    describe('Triangle', () => {
        it('should take new shape and color and render svg', () => {
            const shape = new Triangle('TRY','white', 'red');
            // shape.setColor("blue");
            const logo =
    `<!DOCTYPE html>
    <html>
    <body>                             
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="149,10 298,199 10,199" fill="red"/>
    <text font-size="60" x="50%" y="50%" dominant-baseline="hanging" text-anchor="middle" fill="white">TRY</text>
    </svg>                             
    </body>
    </html>`;
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
        });
    });
});


