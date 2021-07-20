function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiplication(num1, num2){
    return num1 * num2
}

function division(num1, num2){
    return num1 / num2
}
/*module.exports.add = add;
module.exports.subtract = subtract;*/  /* Methode 1 */

/*exports.add = add;
exports.subtract = subtract;*/         /* Methode 2 */

/*module.exports = {
    add: add,
    subtract: subtract,
}*/                                     /* Methode 3 */

module.exports = {
    add,
    subtract,
    multiplication,
    division,
}                                        /* Methode 4 */