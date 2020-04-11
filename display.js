const previewer = document.querySelector('.preview')

const ranges = document.querySelectorAll('[range]')

const borderRad = (range) => range.getAttribute('borderrad')

const str = (str, range) => str +=  borderRad(range) ? ` ${borderRad(range)}%` : ' 0'
const mountedStr = () => Array.from(ranges).reduce(str, '')

function updateDisplay() {
    previewer.style.borderRadius = mountedStr()
    
    const output = `border-radius ${previewer.style.borderRadius};`
    document.querySelector('.output span p').innerHTML = output
}

updateDisplay()