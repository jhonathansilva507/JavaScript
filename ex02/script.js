function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.querySelector('input#ano')
    res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados novamente')
    }
    else {
        sex = document.getElementsByName(rsex)
        idade = ano - (fano.value)
        genero = ''
        img = document.createElement('img')
        img = setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade <=10) {
                img.setAttribute('src', 'H-cirança.png')
            }
            else if (idade < 20) {
                img.setAttribute('src', 'H-jovem.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'H-adulto.png')
            }
            else if (idade > 50) {
                img.setAttribute('src', 'H-idoso.png')
            }
        }
        else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'M-criança.png')
            } 
            else if (idade < 20) {
                img.setAttribute('M-jovem.png')
            } 
            else if (idade < 50) {
                Img.setAttribute('src', 'M-adulta.png')
            } 
            else if (idade > 50) {
                img.setAttribute('src', 'M-idosa')
            }
        }
        res.innerHTML = `Detectamos ${genero}com ${idade}anos`;
        res.appenChild(img)
    }
    
}