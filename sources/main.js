document.querySelector('.btn_theme').addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
        console.log('current class name' + className);
    }else{
        this.textContent = "Light";
        console.log('current class name' + className);
    }
});


window.alert("Olá Mundo")
var nome = window.prompt('Qual seu nome ?')
window.confirm('Tudo Ok '+ nome + ' ?')



// eventos de interação 
var area = document.querySelector(".img_align_Left")
//querySelector('button#btn_theme') para caso q seja um id em vez de class


area.addEventListener('click', click_img_left)
area.addEventListener('mouseenter', enter_img_left)
area.addEventListener('mouseout', out_img_left)


function click_img_left(){
    area.innerText = "Essa imagem esta alinhada a esquerda com a tag float: left;"
    area.style.color = "red"
}
function enter_img_left(){
    area.innerText = "click para ter mais informação"
    area.style.color = "blue"
}
function out_img_left(){
    area.innerText = "Click nas outras images!"
    area.style.color = "green"
}

// calculadora

function calc_soma(){
    var tn1 = document.querySelector("input#txtn1")
    var tn2 = document.querySelector("input#txtn2")
    var res = document.querySelector("h2#res")

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var result = n1 + n2

    res.innerHTML = result

    if (result % 2 == 0){
        res.innerHTML = `Resultado: ${result.toString()} Seu resultado é Par`
    
    }else{
        res.innerHTML = `Resultado: ${result.toString()} Seu resultado é Impar`
    
    }
}

var date = new Date()
var dayOfWeek = date.getDay()
var navData = document.querySelector("h2#navData");

switch(dayOfWeek){
    case 0:
        navData.innerText = `Tenha um otimo Domingo ${nome}`
        break    
    case 1:
        navData.innerText = `Tenha uma otima Segunda-feira ${nome}`
        break               
    case 2:
        navData.innerText = `Tenha uma otima Terça-feira ${nome}`
        break
    case 3:
        navData.innerText = `Tenha uma otima Quarta-feira ${nome}`
        break 
    case 4:
        navData.innerText = `Tenha uma otima Quinta-feira ${nome}`
        break 
    case 5:
        navData.innerText = `Tenha uma otima Sexta-feira ${nome}`
        break
    case 6:
        navData.innerText = `Tenha um otimo Sábado ${nome}`
        break
    default:
        navData.innerText = `Data inválida`
        break                
}

/* repetiçoes...........
    var i = 1
    while (i <= 5) {
        console.log(c)
        C++
    }
*/
//declaração; teste logico; incremento;
console.log("for init")
for (var i = 1 ;i <= 10 ;i ++){
    console.log(i)
}
console.log("for end")

// vetores

let num = [1,2,5,7,8]
num.push(32)
num.length

console.log(`index ${num}`)

/* 
conversão de strings em numeros...............

var n1 = Number(window.prompt('Digite um numero ?')) 
var n2 = Number(window.prompt('Digite um numero ?'))

window.alert("A soma dos Numeros é: " + n1 + n2)

conversao de numeros em string.................

var n1 = String(window.prompt('Digite um numero ?')) 
var n2 = String(window.prompt('Digite um numero ?'))

length.........................................

var nome = window.prompt('Qual seu nome ?')
document.write('ola' + nome+ '! seu nome tem ' +nome.length+' letras.')  representa a quantidade de caracteres

window.alert("A soma dos Numeros é: " + n1 + n2)

Replace........................................

var n1 = Number(window.prompt('Digite um numero ?')) 
var n2 = Number(window.prompt('Digite um numero ?'))

window.alert("A soma dos Numeros é: " + n1.toLocaleString('pt-BR', (style: 'currency', currency: 'BRL') + n2.toLocaleString('pt-BR', (style: 'currency', currency: 'BRL'))

........................................
*/


