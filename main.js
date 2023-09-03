//Promedio de notas
let mat1;
let mat2;
let mat3;
let nombreIngresado = prompt("Bienvenido! Ingresá tu nombre:");
alert("Hola "+ nombreIngresado +"! A continuación deberás ingresar tus notas");
let entrada = "";
function promedio(mat1, mat2, mat3){
    return (mat1+mat2+mat3)/3;
} 
while(entrada!="ESC"){
    entrada = prompt("Si deseas salir escribe ESC, si no S.");
    if(entrada="S"){
    mat1= Number(prompt("Ingresa la nota de matemática:"));
    mat2= Number(prompt("Ingresa la nota de geografía:"));
    mat3= Number(prompt("Ingresa la nota de inglés:"));
    let final = promedio(mat1, mat2, mat3);
    alert(`Tu promedio es: ${final}`);
    }

}

