function copyToClipboard() {
    const output =  document.getElementById('text')
    const selection = window.getSelection()
    const range = document.createRange()

    range.selectNodeContents(output)
    selection.removeAllRanges()
    selection.addRange(range)
    
    document.execCommand('copy')
    selection.removeAllRanges()
}

document.querySelector('.output button')
    .addEventListener('click', copyToClipboard)