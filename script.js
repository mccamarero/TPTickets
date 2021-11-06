   const valores = 200 
  
   function hacerClick() {

        let entradas = document.getElementById("cantidadEntradas").value 
        let categoria = document.getElementById("categorias").value
            const valorOriginal = entradas * valores
        
            
                
                if (categoria == 1){
                        var calcularEntradas = ((valorOriginal) * 0.2 )
                }
                else if (categoria == 2){
                    var calcularEntradas = ((valorOriginal) * 0.5 )
                }
                            
                else if (categoria == 3){
                    var calcularEntradas = ((valorOriginal) * 0.85 )
                }
               
       
        document.getElementById("totalaPagar").innerHTML= "Total a Pagar: $" + calcularEntradas 
     }

     function validar() {

        var validarCantidad = document.getElementById("cantidadEntradas").value

     }
    

    
      
    
   