const Layout = [
    [
        ['Backquote', 'ё', 'Ё', '`', '~'],
        ['Digit1', '1', '!', '1', '!'],
        ['Digit2', '2', '\'', '2', '@'],
        ['Digit3', '3', '№', '3', '#'],
        ['Digit4', '4', ';', '4', '$'],
        ['Digit5', '5', '%', '5', '%'],
        ['Digit6', '6', ':', '6', '^'],
        ['Digit7', '7', '?', '7', '&'],
        ['Digit8', '8', '*', '8', '*'],
        ['Digit9', '9', '(', '9', '('],
        ['Digit0', '0', ')', '0', ')'],
        ['Minus', '-', '_', '-', '_'],
        ['Equal', '=', '+', '=', '+'],
        ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
        ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ['KeyQ', 'й', 'Й', 'q', 'Q'],
        ['KeyW', 'ц', 'Ц', 'w', 'W'],
        ['KeyE', 'у', 'У', 'e', 'E'],
        ['KeyR', 'к', 'К', 'r', 'R'],
        ['KeyT', 'е', 'Е', 't', 'T'],
        ['KeyY', 'н', 'Н', 'y', 'Y'],
        ['KeyU', 'г', 'Г', 'u', 'U'],
        ['KeyI', 'ш', 'Ш', 'i', 'I'],
        ['KeyO', 'щ', 'Щ', 'o', 'O'],
        ['KeyP', 'з', 'З', 'p', 'P'],
        ['BracketLeft', 'х', 'Х', '[', '{'],
        ['BracketRight', 'ъ', 'Ъ', ']', '}'],
        ['Backslash', '\\', '/', '\\', '|'],
        ['Delete', 'Del', 'Del', 'Del', 'Del'],
    ],
    [
        ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
        ['KeyA', 'ф', 'Ф', 'a', 'A'],
        ['KeyS', 'ы', 'Ы', 's', 'S'],
        ['KeyD', 'в', 'В', 'd', 'D'],
        ['KeyF', 'а', 'А', 'f', 'F'],
        ['KeyG', 'п', 'П', 'g', 'G'],
        ['KeyH', 'р', 'Р', 'h', 'H'],
        ['KeyJ', 'о', 'О', 'j', 'J'],
        ['KeyK', 'л', 'Л', 'k', 'K'],
        ['KeyL', 'д', 'Д', 'l', 'L'],
        ['Semicolon', 'ж', 'Ж', ';', ':'],
        ['Quote', 'э', 'Э', '\'', '\''],
        ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ],
    [
        ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
        ['KeyZ', 'я', 'Я', 'z', 'Z'],
        ['KeyX', 'ч', 'Ч', 'x', 'X'],
        ['KeyC', 'с', 'С', 'c', 'C'],
        ['KeyV', 'м', 'М', 'v', 'V'],
        ['KeyB', 'и', 'И', 'b', 'B'],
        ['KeyN', 'т', 'Т', 'n', 'N'],
        ['KeyM', 'ь', 'Ь', 'm', 'M'],
        ['Comma', 'б', 'Б', '.', '<'],
        ['Period', 'ю', 'Ю', ',', '>'],
        ['Slash', '.', ',', '/', '?'],
        ['ArrowUp', '▲', '▲', '▲', '▲'],
        ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
    ],
    [
        ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
        ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['Space', ' ', ' ', ' ', ' '],
        ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['ArrowLeft', '◄', '◄', '◄', '◄'],
        ['ArrowDown', '▼', '▼', '▼', '▼'],
        ['ArrowRight', '►', '►', '►', '►'],
        ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ],
];

const keyboard = document.createElement('div');
let lang = 'rus';

const createLayout = () => {

    const wrapper = document.createElement('div');
    const textarea = document.createElement('textarea');
    
   
    let capslock = false;

    wrapper.append(textarea);
    wrapper.append(keyboard);
    document.body.append(wrapper);

    for (let i = 0; i < Layout.length; i += 1) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < Layout[i].length; j += 1) {
            const key = document.createElement('div');
            key.classList.add('key');
            key.classList.add(Layout[i][j][0]);
            key.insertAdjacentHTML('afterBegin',
                `<div class='rus'>
          <span class='caseDown '>${Layout[i][j][1]}</span>
          <span class='caseUp hidden'>${Layout[i][j][2]}</span>
        </div>
        <div class='eng hidden'>
          <span class='caseDown hidden'>${Layout[i][j][3]}</span>
          <span class='caseUp hidden'>${Layout[i][j][4]}</span>
        </div>`);
            row.appendChild(key);

        }
        keyboard.appendChild(row);

    }
};
createLayout()

const addActive = (elem) => {
    elem.classList.add('active');
};

const removeActive = (elem) => {
    elem.classList.remove('active');
};

const changeCase = () => {
    const langElem = keyboard.querySelectorAll(`div > .${lang}`);
    console.log(langElem)
    for (let i = 0; i < langElem.length; i += 1) {
        langElem[i].querySelectorAll('span')[0].classList.toggle('hidden');
        langElem[i].querySelectorAll('span')[1].classList.toggle('hidden');
    }
};
changeCase();

const changeLang = () => {
    const prevLang = keyboard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < prevLang.length; i += 1) {
      prevLang[i].classList.toggle('hidden');
      prevLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
    if (lang === 'rus') {
      lang = 'eng';
      localStorage.setItem('lang', lang);
    } else {
      lang = 'rus';
      localStorage.setItem('lang', lang);
    }
    const nextLang = keyboard.querySelectorAll(`div > .${lang}`);
    for (let i = 0; i < nextLang.length; i += 1) {
      nextLang[i].classList.toggle('hidden');
      nextLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
    }
  };




