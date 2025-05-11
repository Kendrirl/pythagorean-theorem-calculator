



function calculate() {

    console.log('function ran')

    let value1 = document.querySelector('#display1')
    let value2 = document.querySelector('#display2')
    let value3 = document.querySelector('#display3')

    value3.value = Math.sqrt(value1.value * value1.value + value2.value * value2.value)
    value3.style.color = 'green'

    if (isNaN(value3.value)) {
    value3.style.color = 'red'
}

}
function erase() {

    let value1 = document.querySelector('#display1')
    let value2 = document.querySelector('#display2')
    let value3 = document.querySelector('#display3')






    value1.value = ''
    value2.value = ''
    value3.value = ''
}
