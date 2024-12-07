num = document.querySelector('input#number')
lista = document.querySelector('select#lista')
res = document.querySelector('div#res')
valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function ad() {
    if (isNum(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    }
    else {
        window.alert('[ERRO] número invalido ou ja incluso')  
    }
    num.value = "";
    num.focus();
}
    
function fin() {
    if (valores.length == 0) {
        alert("Adcione um número antes de finalizar");
    } 
    else {
        total = valores.length;
        maior = valores[0]
        menor = valores[0]
    for(pos in valores) {
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números adicionados.</p>`
    res.innerHTML += `<p>O maior número inserido é ${maior}</p>`
    res.innerHTML += `<p>O menor número inserido é ${menor}</p>`
    }
}