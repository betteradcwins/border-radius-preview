const generator = document.querySelector('.generator')
const parentOffsetTop = generator.offsetTop
const parentOffsetLeft = generator.offsetLeft
const parentWidth = generator.clientWidth
const parentHeight = generator.clientHeight

const verticalRanges = document.querySelectorAll('[range][v]')
const horizontalRanges = document.querySelectorAll('[range][h]')

verticalRanges.forEach(range => range.onmousemove = moveRangeY)
horizontalRanges.forEach(range => range.onmousemove = moveRangeX)

function moveRangeY(e) {
    moveRange(e, 'clientY', parentOffsetTop, parentHeight, 'top', 'clientHeight', this)
}

function moveRangeX(e) {
    moveRange(e, 'clientX', parentOffsetLeft, parentWidth, 'left', 'clientWidth', this)
}

function moveRange(e, axios, parentOffset, parentAxios, styleName, clientAxios, elem) {
    if (e.buttons) {
        let mouse = e[axios] - parentOffset
        mouse = mouse <= 0 ? 0 : (mouse >= parentAxios ? parentAxios : mouse)

        // 8 is a value to fix the difference on margin caused by transform in css
        mouse += 8

        const offset = mouse - (elem[clientAxios] / 2)

        elem.style[styleName] = `${offset}px`
    }
}