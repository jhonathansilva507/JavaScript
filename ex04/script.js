function tabuada() {
    n = document.querySelector('input#numero')
    tabu = document.querySelector('select#tabu')

    if (n.value.length == 0) {
        window.alert('[ERRO] por favor digite um número!')
    }
    else {
        num = Number(n.value)
        c = 1
        tabu.innerHTML = 0
        while (c <= 10) {
            item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tabu.appendChild(item)
            c++
        }
    }
}
