ini = document.querySelector('input#ini')
fim = document.querySelector('input#fim')
pas = document.querySelector('input#pas')
res = document.querySelector('div#res')

function contar() {
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert(`Preencha os dados para poder contar`)
    }
    else {
        res.innerHTML = `Contando:`
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)

        if (p == 0) {
            window.alert(`[ERRO] considerando passo igual a 1`)
            p = 1
        }
        if (i < f) {
            for(c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        if (i > f) {
            for(c = i; c >= f; c-= p)
                res.innerHTML += ` ${c} \u{1F449}`
        }
    }
}