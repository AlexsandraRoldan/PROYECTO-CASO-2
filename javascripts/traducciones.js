var check=document.querySelector(".check"); 
check.addEventListener('click', idioma); 
function idioma(){ 
let id=check.checked; 
if (id==true) { 
location.href="../pagina_1_ingles.html"; 
}else{ 
location.href="../pagina_1_es.html"; 
}}