console.log('Hello World');

var n1 = 2;
var n2 = 3;

var soma = n1 + n2;
console.log('Soma :', soma);

function mult(v1, v2){
    return v1 * v2;
}
console.log('Multiplicacao_v6', mult(3,9));

const div = (v1, v2) => {
    return v1/v2
}
console.log("Divisão_v8 :", div(18,2));

const fs = require('fs')

const ler = async() => {
    return new Promise((resolve, reject) => {
        fs.writeFile("Texto.txt", 'oi', (err) => {
            if(err) {
                reject ("Arquivo nao criado")
            }
            else{
                resolve('Arquivo criado')
            }
        })
    })
}
ler()


console.log('---------------------------')

const calc = require('./calc')

console.log('Soma: ', calc.soma(2, 48))
console.log('Mult: ', calc.mult(2, 4))
console.log('Divi: ', calc.div(8, 4))
console.log('Subt: ', calc.sub(3, 3))





