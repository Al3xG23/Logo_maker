const inquirer = require('inquirer');
const Sequelize = require("sequelize");
const fs = require('fs');


const userColorsText = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What do you want your logo to say?',
                name: 'text',
            },
            {
                type: 'input',
                message: 'What color do you want for your text?',
                name: 'color',
            },
            {
                type: 'input',
                message: 'What color do you want for your shape?',
                name: 'color2',
            },
        ])
        .then((answers) => {
            let text = answers.text;
            let color = answers.color;
            let color2 = answers.color2;
            
            const userShape = () => {
                
                inquirer
                .prompt([
                    {
                        type: 'list',
                        message: 'Choose a shape:',
                        name: 'shape',
                        choices: ['triangle', 'circle', 'square'],
                    },
                ])
                .then((choices) => {
                    let shape = choices.shape;
                    if (shape === "triangle") {
                        const Triangle = () => {                            
                            const logo = 
                            `<!DOCTYPE html>
                            <html>
                            <body>                             
                            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="149,10 298,199 10,199" fill="${color2}"/>
                            <text font-size="60" x="50%" y="50%" dominant-baseline="hanging" text-anchor="middle" fill="${color}">${text}</text>
                            </svg>                             
                            </body>
                            </html>`;
                              
                             fs.writeFile('logo.svg', logo, (err) =>
                             err ? console.log(err) : console.log('Generated logo.svg')
                             );
                        };
                         Triangle();
                    }

                    if (shape === "square") {
                        const Square = () => {
                            const logo =
                            `<!DOCTYPE html>
                            <html>
                            <body>
                            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">                           
                            <rect width="200" height="200" x="10" y="10" fill="${color2}"/>
                            <text font-size="50" x="50%" y="50%" dominant-baseline="central" text-anchor="end" fill="${color}">${text}</text>
                            </svg>
                            /body>
                            </html>`;
    
                            fs.writeFile('logo.svg', logo, (err) =>
                            err ? console.log(err) : console.log('Generated logo.svg')
                            );
                        };
                        Square();
                    }

                    if (shape === "circle") {
                        const Circle = () => {
                            const logo =
                                `<!DOCTYPE html>
                                <html>
                                <body>                                    
                                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                                <circle r="100" cx="150" cy="100" fill="${color2}"/>
                                <text font-size="50" x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}">${text}</text>
                                </svg>                                    
                                </body>
                                </html>`;
                             
                            fs.writeFile('logo.svg', logo, (err) =>
                                err ? console.log(err) : console.log('Generated logo.svg')
                            );
                        };
                        Circle();
                    }
                });
            }
            userShape();           
        });
}
userColorsText();




