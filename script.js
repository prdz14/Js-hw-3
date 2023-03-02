function getInfo(getName, getAge, getCurrentYear) {
    getName = prompt('Введите свое Имя')
    getAge = +prompt('Введите свой год рождения')
    getCurrentYear = +prompt('Введите нынешний год')
    let age = getCurrentYear - getAge
    alert(getName + ', Ваш возраст ' + age + ' лет ' + ' (либо только исполниться) ')
}
getInfo()
// 2 задача
// 2 задачка
num1 = +prompt('Введите min число')
num2 = +prompt('Введите max число')
function rand(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

for (let i = 0; i < 3; i++) {
    function rand2(min2 = 1, max2 = 4){
        return Math.floor(Math.random() * (max2 + 1 - min2) + min2)
    }
    let random = rand2()
    numb1 = rand(num1,num2)
    numb2 = rand(num1,num2)

    switch (random) {
        case 1:
            pr = +prompt(numb1 + ' + ' + numb2 + ' = ?')
            answer = (numb1 + numb2) == pr ? 'Молодец' : 'Ошибка'
            alert(numb1 + ' + ' + numb2 + ' = ' + (numb1 + numb2) + ' Ваш ответ: '+ pr + '. ' + answer)
            break;
        
            case 2:
                pr = +prompt(numb1 + ' - ' + numb2 + ' = ?')
                answer = (numb1 - numb2) == pr ? 'Молодец' : 'Ошибка'
                alert(numb1 + ' - ' + numb2 + ' = ' + (numb1 - numb2) + ' Ваш ответ: '+ pr + '. ' + answer)
            case 3:
                pr = +prompt(numb1 + ' * ' + numb2 + ' = ?')
                answer = (numb1 * numb2) == pr ? 'Молодец' : 'Ошибка'
                alert(numb1 + ' * ' + numb2 + ' = ' + (numb1 * numb2) + ' Ваш ответ: '+ pr + '. ' + answer)
            case 4:
                pr = +prompt(numb1 + ' / ' + numb2 + ' = ?')
                answer = (numb1 / numb2) == pr ? 'Молодец' : 'Ошибка'
                alert(numb1 + ' / ' + numb2 + ' = ' + (numb1 / numb2) + ' Ваш ответ: '+ pr + '. ' + answer)

        default:
            break;
    }
}
