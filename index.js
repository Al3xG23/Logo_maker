const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('./lib/shape.js');

function run() {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'Choose a shape:',
                name: 'shape',
                choices: ['triangle', 'circle', 'square'],
            },
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
            let shape = answers.shape;
            if (shape === "triangle") {
                let triangleGen = new Triangle(answers.text, answers.color, answers.color2);
                triangleGen.render();
            }

            if (shape === "square") {
                let squareGen = new Square(answers.text, answers.color, answers.color2);
                squareGen.render();
            }

            if (shape === "circle") {
                let circleGen = new Circle(answers.text, answers.color, answers.color2);
                circleGen.render();
            }
        });
};

run();