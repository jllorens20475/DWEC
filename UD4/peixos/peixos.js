function comptarPeixos(cadena) {
    //DEFINIM EL INDEX DE LA NOSTRA CADENA, AQUESTA FUNCIÓ MIRA SI EN LA CADENA HI HA ELS CARACTERS ESPECIFICATS
    let index = cadena.indexOf("><>")   

        // SI ES -1 NO HI HA PEIXOS
        if(index === -1){
            
            //RETORNAM 0 PERQUE NO HI HA MES PEIXOS
            return 0;  
        
        }else{
           
            //GUARDAM 1 PEIX I TORNAM A ENTRAR A LA FUNCIÓ, RESTANT EL PEIX JA GUARDAT
            return 1 + comptarPeixos(cadena.slice(index + 3))  
        }
    }

//CRIDA A LA FUNCIÖ
console.log(comptarPeixos("~~><>~~><>~><>~~~~"));