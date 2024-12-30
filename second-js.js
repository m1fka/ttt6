let goLoading = 0;
let OpenheaderOnOff = true;

const body = document.querySelector('body');

const headerOnOff = document.querySelector('.on-off');
const On = document.querySelector('.on-off .on');
const Off = document.querySelector('.on-off .off');
const headerRunner = document.querySelector('.on-off .runner');


headerOnOff.addEventListener('click', () => {
    if (OpenheaderOnOff) {
        OpenheaderOnOff = false;

        body.classList.toggle('change');

        On.classList.toggle('open_on-off');
        Off.classList.toggle('open_on-off');
        headerRunner.classList.toggle('open_on-off');

        if (goLoading == 0) {

            goLoading = 1;
        }
        else {

            goLoading = 0;
        }
        setTimeout(() => {
            if (goLoading == 1) {
                setTimeout(() => {
                    if (goLoading == 1) {
                        setTimeout(() => {
                            if (goLoading == 1) {
                                changePage()
                            }
                        }, 700)
                    }
                }, 700)
            }
        }, 700)

        setTimeout(() => {
            OpenheaderOnOff = true;
        }, 1000)
    }
})

// headerRunner.addEventListener('touchmove', (e) => {
//     e.preventDefault();
//     toushcStart = { x: e.changedTouches[0].clientX }
//     touchPosition = { x: toushcStart.x }
//     let RunnerC1move = toushcStart.x = touchPosition.x - RunnerC1rect;

//     if (points[0] - distansePoints <= RunnerC1move && RunnerC1move < points[1] - distansePoints) {
//         RunnerC1.style.left = `${points[0]}px`;
//         RunnerDot = points[0];
//     }
//     else if (points[1] - distansePoints <= RunnerC1move && RunnerC1move < points[2] - distansePoints) {
//         RunnerC1.style.left = `${points[1]}px`;
//         RunnerDot = points[1];
//     }
// });


function changePage() {
    window.location.href = 'index.html'
}


//меню
const randomizer = document.querySelector('.menu-randomizer1');
const fortuneWheel = document.querySelector('.menu-fortuneWheel2');
const diceCube = document.querySelector('.menu-diceCube3');
const truthOrDare = document.querySelector('.menu-truthOrDare4');
const myProfile = document.querySelector('.menu-myProfile5');
randomizer.classList.add('focus');

const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const container5 = document.querySelector('.container5');

randomizer.addEventListener('click', () => {
    container1.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.add('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.remove('focus');
})
fortuneWheel.addEventListener('click', () => {
    container2.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.add('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.remove('focus');
})
diceCube.addEventListener('click', () => {
    container3.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.add('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.remove('focus');
})
truthOrDare.addEventListener('click', () => {
    container4.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.add('focus');
    myProfile.classList.remove('focus');
})
myProfile.addEventListener('click', () => {
    container5.scrollIntoView({ behavior: 'smooth' })

    randomizer.classList.remove('focus');
    fortuneWheel.classList.remove('focus');
    diceCube.classList.remove('focus');
    truthOrDare.classList.remove('focus');
    myProfile.classList.add('focus');
})


const main = document.querySelector('main');
const containers = document.querySelectorAll('.container');
const menu = document.querySelectorAll('.menu div');

main.addEventListener('scroll', () => {
    const scrollTop = main.scrollTop;
    const containerHeight = 844; // Высота контейнера
    const currentIndex = Math.round(scrollTop / containerHeight);

    if (currentIndex >= 0 && currentIndex < containers.length) {
        // Здесь вы можете запустить определенную программу или функцию
        // console.log(`Открыт контейнер ${currentIndex + 1}`);
        // containers[currentIndex].classList.add('focus')


        switch (currentIndex + 1) {
            case 1:
                randomizer.classList.add('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.remove('focus');
                break;
            case 2:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.add('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.remove('focus');
                break;

            case 3:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.add('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.remove('focus');
                break;

            case 4:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.add('focus');
                myProfile.classList.remove('focus');
                break;

            case 5:
                randomizer.classList.remove('focus');
                fortuneWheel.classList.remove('focus');
                diceCube.classList.remove('focus');
                truthOrDare.classList.remove('focus');
                myProfile.classList.add('focus');
                break;
        }
    }
});




//container

// при 2 касании не приближается
// const documentDiv = document.querySelectorAll('body div');
// documentDiv.forEach(element => {
//     element.addEventListener('touchstart', function (event) {
//         if (event.touches.length > 1) {
//             event.preventDefault();
//         }
//     });

//     element.addEventListener('touchend', function (event) {
//         if (event.touches.length > 1) {
//             event.preventDefault();
//         }
//     });
// });

document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});
document.addEventListener('touchend', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});




//container1

//скролл старницы после ввода данных
const container1Input = document.querySelectorAll('.container1 input');
container1Input.forEach(element => {
    element.addEventListener('blur', () => {
        container1.scrollIntoView({ behavior: 'smooth' })
    })
});

const container1Textarea = document.querySelectorAll('.container1 textarea');
container1Textarea.forEach(element => {
    element.addEventListener('blur', () => {
        container1.scrollIntoView({ behavior: 'smooth' })
    })
});




const randomNumber = document.querySelector('.container1 .random-number');
const generateButton = document.querySelector('.container1 .generate-button');
const minRange = document.querySelector('.container1 .min-range input');
const maxRange = document.querySelector('.container1 .max-range input');

generateButton.addEventListener('click', () => {
    generateButton.classList.add('tap');
    setTimeout(() => {
        generateButton.classList.remove('tap');
    }, 100)

    const inputValue = removeNumbers.value.trim();

    // Валидация
    const removeNumbersArray = extractNumbers(inputValue);
    // Преобразуем числа в массив и исключаем дубликаты
    const removeExcludedNumbers = [...new Set(removeNumbersArray.map(Number))];


    if (minRange.value == '') {
        minRange.value = '0';
    }
    if (maxRange.value == '') {
        maxRange.value = '0';
    }

    let min = Number(minRange.value);
    let max = Number(maxRange.value);
    if (min > maxRange.value) {
        let sup = max;
        max = min;
        min = sup;
    }


    let error = false;
    let counter = 0;
    if (removeExcludedNumbers.length >= (max - min + 1)) {

        for (let index = min; index <= max; index++) {

            if (removeExcludedNumbers.includes(index)) {
                counter++;
                console.log(1);
            }
        }
        if (counter == max - min + 1) {
            error = true;
            randomNumber.innerHTML = 'NaN';
        }
    }
    if (!error) {
        let randomNumberDo;

        if (removeExcludedNumbers == '') {
            randomNumberDo = Math.floor(Math.random() * (max - min + 1) + min);
            randomNumber.innerHTML = randomNumberDo;
        }
        else {
            let flag;

            do {
                flag = true;
                randomNumberDo = Math.floor(Math.random() * (max - min + 1) + min);
                removeExcludedNumbers.forEach(element => {
                    if (randomNumberDo == element) {
                        flag = false;
                        // continue;
                    }
                })

            } while (!flag);
            randomNumber.innerHTML = randomNumberDo
        }
    }
});


function extractNumbers(inputString) {
    // Используем регулярное выражение для поиска всех чисел в строке
    const numbers = inputString.match(/-?\d+(\.\d+)?/g);

    // Преобразуем найденные строки в числа и возвращаем массив
    return numbers ? numbers.map(Number) : [];
}
// // Пример использования
// const input = "Здесь 12 кошек, 3 собаки и 45.5 птиц.";
// const result = extractNumbers(input);
// console.log(result); // [12, 3, 45.5]






function validateInput(input) {
    // Удаляем все символы, кроме цифр и знака минус
    let value = input.value.replace(/[^0-9-]/g, '');

    // Проверка на наличие более одного знака минус
    if ((value.match(/-/g) || []).length > 1) {
        value = value.replace(/-/, ''); // Убираем первый знак минус, если их несколько
    }

    // Если есть знак минус, он должен быть только в начале
    if (value.indexOf('-') > 0) {
        value = value.replace(/-/, ''); // Убираем минус, если он не в начале
    }

    // Ограничение длины для чисел
    const maxLength = 9;
    if (value.startsWith('-')) {
        value = '-' + value.replace(/-/g, ''); // Сохраняем минус
        value = value.slice(0, maxLength + 1); // +1 для знака минус
    } else {
        value = value.slice(0, maxLength);
    }

    input.value = value;
}



//движение ползунка для доп свойств рандомазера
let RunnerDot;
const dot = document.querySelectorAll('.container1 .additional-settings .dot');
const RunnerC1 = document.querySelector('.container1 .additional-settings .runner');
dot.forEach(element => {

    element.addEventListener('click', () => {
        const elementRect = element.getBoundingClientRect().x;
        RunnerC1.style.left = elementRect - 75 + 'px';
        RunnerDot = elementRect - 75;
        runnerFind()
    })
});

const points = [5, 72, 139, 206];
const distansePoints = 67 / 2;
const RunnerC1rect = RunnerC1.getBoundingClientRect().x;

RunnerC1.addEventListener('touchmove', (e) => {
    e.preventDefault();
    toushcStart = { x: e.changedTouches[0].clientX }
    touchPosition = { x: toushcStart.x }
    let RunnerC1move = toushcStart.x = touchPosition.x - RunnerC1rect;

    if (points[0] - distansePoints <= RunnerC1move && RunnerC1move < points[1] - distansePoints) {
        RunnerC1.style.left = `${points[0]}px`;
        RunnerDot = points[0];
    }
    else if (points[1] - distansePoints <= RunnerC1move && RunnerC1move < points[2] - distansePoints) {
        RunnerC1.style.left = `${points[1]}px`;
        RunnerDot = points[1];
    }
    else if (points[2] - distansePoints <= RunnerC1move && RunnerC1move < points[3] - distansePoints) {
        RunnerC1.style.left = `${points[2]}px`;
        RunnerDot = points[2];
    }
    else if (points[3] - distansePoints <= RunnerC1move) {
        RunnerC1.style.left = `${points[3]}px`;
        RunnerDot = points[3];
    }
    runnerFind()
});

const removeNumbers = document.querySelector('.container1 .additional-settings .remove-numbers textarea');
const outputList = document.querySelector('.container1 .additional-settings .output-list textarea');
const inputList = document.querySelector('.container1 .additional-settings .input-list textarea');
let lastPoint = 0;

function runnerFind() {

    if (Math.round(RunnerDot) == points[0]) {
        removeNumbers.classList.remove('ShowTextareaC1')
        outputList.classList.remove('ShowTextareaC1')
        inputList.classList.remove('ShowTextareaC1')
    }
    else if (Math.round(RunnerDot) == points[1]) {
        removeNumbers.classList.add('ShowTextareaC1')
        outputList.classList.remove('ShowTextareaC1')
        inputList.classList.remove('ShowTextareaC1')
    }
    else if (Math.round(RunnerDot) == points[2]) {
        removeNumbers.classList.remove('ShowTextareaC1')
        outputList.classList.add('ShowTextareaC1')
        inputList.classList.remove('ShowTextareaC1')
    }
    else if (Math.round(RunnerDot) == points[3]) {
        removeNumbers.classList.remove('ShowTextareaC1')
        outputList.classList.remove('ShowTextareaC1')
        inputList.classList.add('ShowTextareaC1')
    }

    if (Math.round(RunnerDot) > lastPoint) {
        removeNumbers.classList.remove('lAnimTextarea')
        outputList.classList.remove('lAnimTextarea')
        inputList.classList.remove('lAnimTextarea')

        removeNumbers.classList.add('rAnimTextarea')
        outputList.classList.add('rAnimTextarea')
        inputList.classList.add('rAnimTextarea')
    }
    if(Math.round(RunnerDot) < lastPoint) {
        removeNumbers.classList.remove('rAnimTextarea')
        outputList.classList.remove('rAnimTextarea')
        inputList.classList.remove('rAnimTextarea')

        removeNumbers.classList.add('lAnimTextarea')
        outputList.classList.add('lAnimTextarea')
        inputList.classList.add('lAnimTextarea')
    }
    // else{
    //     if (Math.round(RunnerDot) == points[0]) {
    //         removeNumbers.classList.remove('lShowTextareaC1')
    //         outputList.classList.remove('lShowTextareaC1')
    //         inputList.classList.remove('lShowTextareaC1')
    //     }
    //     else if (Math.round(RunnerDot) == points[1]) {
    //         removeNumbers.classList.add('lShowTextareaC1')
    //         outputList.classList.remove('lShowTextareaC1')
    //         inputList.classList.remove('lShowTextareaC1')
    //     }
    //     else if (Math.round(RunnerDot) == points[2]) {
    //         removeNumbers.classList.remove('lShowTextareaC1')
    //         outputList.classList.add('lShowTextareaC1')
    //         inputList.classList.remove('lShowTextareaC1')
    //     }
    //     else if (Math.round(RunnerDot) == points[3]) {
    //         removeNumbers.classList.remove('lShowTextareaC1')
    //         outputList.classList.remove('lShowTextareaC1')
    //         inputList.classList.add('lShowTextareaC1')
    //     }
    // }
    lastPoint = Math.round(RunnerDot)
}


generateButton.addEventListener('click', () => {
    // const inputValue = removeNumbers.value.trim();
    // // Валидация: проверка на пустоту и правильность ввода
    // const numbersArray = inputValue.split(',').map(num => num.trim()).filter(num => num !== '');
    // const invalidInputs = numbersArray.filter(num => isNaN(num) || num === '');
    // // Преобразуем числа в массив и исключаем дубликаты
    // const excludedNumbers = [...new Set(numbersArray.map(Number))];
    // // Генерация случайного числа от 1 до 100 (или другого диапазона)
    // let randomNumber;

    // do {
    //     randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // } while (excludedNumbers.includes(randomNumber));
});







// const menu = document.querySelector('.menu');
// const burger = document.querySelector('.burger');

// burger.addEventListener('click', () => {
//     burger.classList.toggle('active');
//     // menu.classList.toggle('active');
// });



// аватар телеграма
const avatarTelegram = document.querySelector('.avatarTelegram img');
// window.onload = () => {
avatarTelegram.src = localStorage.getItem('avatarTelegram');
// }

if (localStorage.length = 0) {
    getUserProfilePhoto();
    avatarTelegram.src = localStorage.getItem('avatarTelegram');
}