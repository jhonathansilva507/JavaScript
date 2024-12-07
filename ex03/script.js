function contar() {
    ini = document.querySelector('input#inicio')
    fim = document.querySelector('input#fim')
    passo = document.querySelector('input#passo')
    res = document.querySelector('div#res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Verifique os dados novamente!')
    }
    else {
        res.innerHTML = 'Contando: '
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(passo.value)

        if(p <=0) {
            window.alert(`Passo invalido! Considerando passo 1`)
            p = 1
        }
        if(i < f) {
            //ordem crescente
            for (c = i; c <= f; c += p) {
              res.innerHTML += `${c} \u{1F449}`
            }
        }
        else {
            //ordem decrescente
            for(c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`;
            }
        }
    }
}
