function verificar() {
            pais = document.querySelector('input#pais')
            res = document.querySelector('div#res')
            if (pais == 'Brasil') {
                res.innerHTML = 'Você é brasileiro'
            }
            else {
                res.innerHTML = 'Você é estrangeiro. Bem vindo!'
            }
        }
