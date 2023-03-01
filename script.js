function getInfo(getName, getAge, getCurrentYear) {
    getName = prompt('Введите свое Имя')
    getAge = +prompt('Введите свой год рождения')
    getCurrentYear = +prompt('Введите нынешний год')
    let age = getCurrentYear - getAge
    alert(getName + ', Ваш возраст ' + age + ' лет ' + ' (либо только исполниться) ')
}
getInfo()
