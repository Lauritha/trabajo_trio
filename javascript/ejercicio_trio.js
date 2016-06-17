//ejercicio de DNI

var dni = parseInt(prompt("ingrese los numeros de su DNI", " "));
var letra_dni = prompt ("Ingrese la letra de su DNI", " ");
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var resto = dni % 23;

if (resto > 0 || resto < 999999){
	console.log(letras[resto]);
	alert("Su DNI es válido");
}else {
	alert("Su numero es inválido");
};

//ejercicio de numeros impares

for(var i=10; i>=1; i--){
	if(i%2==1){
		document.write(i);
		document.write("<br>");
	}
};