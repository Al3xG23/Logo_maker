const fs = require('fs');

class Triangle {
    constructor(text, color, color2) {
        this.text = text;
        this.color = color;
        this.color2 = color2;
    };
    render() {
        const logo =
            `<!DOCTYPE html>
<html>
<body>                             
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="149,10 298,199 10,199" fill="${this.color2}"/>
<text font-size="60" x="50%" y="50%" dominant-baseline="hanging" text-anchor="middle" fill="${this.color}">${this.text}</text>
</svg>                             
</body>
</html>`;

        fs.writeFile('logo.svg', logo, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
        return logo;
    };    
}

class Square {
    constructor(text, color, color2) {
        this.text = text;
        this.color = color;
        this.color2 = color2;
    };
    render() {
        const logo =
            `<!DOCTYPE html>
<html>
<body>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">                           
<rect width="200" height="200" x="10" y="10" fill="${this.color2}"/>
<text font-size="50" x="50%" y="50%" dominant-baseline="central" text-anchor="end" fill="${this.color}">${this.text}</text>
</svg>
</body>
</html>`;

        fs.writeFile('logo.svg', logo, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
        return logo;
    };
}

class Circle {
    constructor(text, color, color2) {
        this.text = text;
        this.color = color;
        this.color2 = color2;
    };
    render() {
        const logo =
            `<!DOCTYPE html>
<html>
<body>                                    
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle r="100" cx="150" cy="100" fill="${this.color2}"/>
<text font-size="50" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
</svg>                                    
</body>
</html>`;

        fs.writeFile('logo.svg', logo, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
        return logo;
    };
}


module.exports = { Triangle, Square, Circle };