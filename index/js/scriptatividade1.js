function idadeatual(){
    var nasc = prompt ("Informe o seu ano de nascimento:", "")
    if(nasc){ 
        const date = new Date();
        const currentYear = date.getFullYear();
        parseInt(currentYear)
        var id1 = currentYear - nasc
        var id2 = 2050 - nasc
        console.log("Data de nascimento informada: "+nasc+"\nIdade no ano atual: " +id1+ "\nIdade em 2050: " + id2)
        alert("Data de nascimento informada: "+nasc+"\nSua idade no ano atual é: "+ id1+ "\nIdade em 2050: " + id2)
    }else{
        alert("Até outro dia!")
    }
}
function salario(){
    var salario1 = parseFloat(prompt("Informe o seu salário: ", ""))
    if(salario1){
    var salario25 = parseFloat(salario1+(salario1*0.25))
    console.log("Salario Informado: "+salario1+"\nSeu salário com aumento de 25% é: " +salario25)
    alert("Salario Informado: "+salario1+"\nSeu salário com aumento de 25% é: " +salario25)
    }else{
        alert("Até outro dia!")
    }
}
function celsius(){
    var celsius = parseFloat(prompt("Informe a temperatura em Celsius: ", ""))
    if(celsius){
    var fahrenheit = parseFloat((celsius*1.8)+32)
    var kelvin = parseFloat(celsius+273.15)
    console.log("A temperatura informada em celsius: "+celsius+"\nA temperatura em Fahrenheit é: " +fahrenheit+ "\nA temperatura em Kelvin é: "+kelvin)
    alert("A temperatura informada em celsius: "+celsius+"\nA temperatura em Fahrenheit é: " +fahrenheit+ "\nA temperatura em Kelvin é: "+kelvin)
    }else{
        alert("Até outro dia!")
    }
}
function mediaarit(){
    var nota1 = parseFloat(prompt("Informe a primeira nota:", ""))
    if(nota1){
    var nota2 = parseFloat(prompt("Informe a segunda nota:", ""))
    if(nota2){
    var nota3 = parseFloat(prompt("Informe a terceira nota:", ""))
    if(nota3){
        var media = parseFloat((nota1+nota2+nota3)/3)
        console.log("Notas informadas: "+nota1+", "+nota2+" e "+nota3+"\nA média das 3 notas é: " +media)
        alert("Notas informadas: "+nota1+", "+nota2+" e "+nota3+"\nA média das 3 notas é: " +media)
    }else{
        alert("Até outro dia!")
    }
    }else{
        alert("Até outro dia!")        
    }
    }else{
        alert("Até outro dia!")
    }
}
function Hip(){
    var resp = parseFloat(prompt("Informe o primeiro cateto", ""))
    if(resp){
    var resp1 = parseFloat(prompt("Informe o segundo cateto", ""))
    if(resp1){
    var hipotenusa= parseFloat(Math.sqrt((resp1*resp1)+(resp*resp)))
    console.log("Catetos Informados: "+resp+" e "+resp1+"\nO Resultado da Hipotenusa é: "+hipotenusa)
    alert("Catetos Informados: "+resp+" e "+resp1+"\nA Hipotenusa é: " +hipotenusa);
        }else{
        alert("Até outro dia!")
        }
        }else{
        alert("Até outro dia!")
        }
}
function ultimo(){
    var raio = parseFloat(prompt("Informe o raio da esfera: ", ""))
    if(raio){
        var comprimento = parseFloat(2*Math.PI*raio)
        var area= parseFloat(Math.PI*Math.pow(raio,2))
        var volume= parseFloat(4*Math.PI*Math.pow(raio,3)/3)
        console.log("Raio Informado: "+raio+"\nO comprimento da esfera de raio "+raio+" é: "+comprimento+"\nA área de uma esfera de raio "+raio+" é: "+area+"\nO volume de uma esfera de raio "+raio+" é: "+volume)
        alert("Raio Informado: "+raio+"\nO comprimento da esfera de raio "+raio+" é: "+comprimento+"\nA área de uma esfera de raio "+raio+" é: "+area+"\nO volume de uma esfera de raio "+raio+" é: "+volume)
    }else{
        alert("Até outro dia!")
    }
}