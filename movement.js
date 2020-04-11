const generator = document.querySelector('.generator')

const verticalRanges = document.querySelectorAll('[range][v]')
const horizontalRanges = document.querySelectorAll('[range][h]')

verticalRanges.forEach(range => range.onmousemove = moveRangeY)
horizontalRanges.forEach(range => range.onmousemove = moveRangeX)

const setBorderRad = (elem, value) => { elem.setAttribute('borderrad', value) }
const calcPercentual = (current, total) => ((current / total) * 100).toFixed(0)

function moveRangeY(e) {
    const parentHeight = generator.clientHeight
    const parentOffsetTop = generator.offsetTop

    moveRange(e, 'clientY', parentOffsetTop, parentHeight, 'top', 'clientHeight', this, updateDisplay)
}

function moveRangeX(e) {
    const parentOffsetLeft = generator.offsetLeft
    const parentWidth = generator.clientWidth

    moveRange(e, 'clientX', parentOffsetLeft, parentWidth, 'left', 'clientWidth', this, updateDisplay)
}

function moveRange(e, axios, parentOffset, parentSize, styleName, clientAxios, elem, next) {
    if (e.buttons) {
        let mouse = e[axios] - parentOffset
        mouse = mouse <= 0 ? 0 : (mouse >= parentSize ? parentSize : mouse)

        // 8 is a value to fix the difference on margin caused by transform in css
        mouse += 8

        const offset = mouse - (elem[clientAxios] / 2)

        elem.style[styleName] = `${offset}px`

        const percentual = calcPercentual(offset, parentSize)
        setBorderRad(elem, percentual)

        if (next) next()
    }
}