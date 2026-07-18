function mostrar(id){

    const pantallas=document.querySelectorAll(".pantalla");

    pantallas.forEach(p=>{

        p.classList.remove("activa");

    });

    document.getElementById(id).classList.add("activa");

}


