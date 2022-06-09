function mostrarFormularioNuevoCliente(){
    fetch('http://localhost:3000/nuevocliente')
    .then( (response)=>response.text() )
    .then( (html)=>{
        document.getElementById('modal-body').innerHTML=html;

        const modal = new bootstrap.Modal(document.getElementById('modal'));

        modal.show();
    } );

    

    
}