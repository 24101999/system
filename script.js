let input = document.querySelectorAll(".input");
let bt = document.querySelector(".button");
let valor = document.querySelector(".valor");
let un = document.getElementById("inp");
let two = document.getElementById('two')

const dados = [{ class: 'Peso baixo', }, { class: 'Peso normal ou adequado' }, { class: 'sobrepeso' }, { class: 'obesidade grau 1' }, { class: 'obesidade grau 2' }, { class: 'obesidade grau 3 ou morbida' }]
input.forEach((a, b, c) => {
    bt.addEventListener('click', () => {
        let quad = c[1].value * c[1].value
        let int = c[0].value
        let imc = int / quad
        valor.innerHTML = imc.toFixed(1)
        if (a.value == '') {
            valor.innerHTML = 'digite no campo vazio'
            input.forEach((a) => {
                a.classList.add('active')
            })

        } else {
            input.forEach((a) => {
                a.classList.remove('active')
            })
        }
        if (imc >= 18.5 & imc < 24.9) {
            valor.innerHTML = imc.toFixed(1) + ' ' + dados[1].class
        } else if (imc < 18.5) {
            valor.innerHTML = imc.toFixed(1) + ' ' + dados[0].class
        } else if (imc >= 25.0 & imc < 29.9) {
            valor.innerHTML = imc.toFixed(1) + ' ' + dados[2].class
        } else if (imc >= 30.0 & imc < 34.9) {
            valor.innerHTML = imc.toFixed(1) + ' ' + dados[3].class
        } else if (imc >= 35 & imc < 39.9) {
            valor.innerHTML = imc.toFixed(1) + ' ' + dados[4].class
        } else if (imc >= 40) {
            valor.innerHTML = imc.toFixed(1) + ' ' + dados[5].class
        }
    })
})