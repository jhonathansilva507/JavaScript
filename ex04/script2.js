num = document.querySelector('input#num')
tab = document.getElementById('tab')

function gerar() {
    n = Number(num.value)
    c = 1
    tab.innerHTML = 0;
    while(c <= 10) {
        item = document.createElement(`option`)
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
}