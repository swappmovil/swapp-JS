// Funciones del GPS

	function GET_SWAPP_GPS() {
		
		if( SWAPP.GPS() ){ 
			
			setTimeout(function(){ 
				SWAPP_GPS_INTERNA(); 
			}, 100);
			
		}else{
			
			alert("El GPS esta desactivado.");
			
		}
		
	}
	
	function SWAPP_GPS_INTERNA() {
		
		var result = SWAPP.getJSON_GPS();
		
		if( result != null ){
			
			SWAPP_GPS(result);
				
		}else{
			
			setTimeout(function(){ 
				SWAPP_GPS_INTERNA(); 
			}, 100);
			
		}
		
	}


// Funciones HTTP
	
	function GET_SWAPP_HTTP(url) {
		
		SWAPP.HTTP(url);
		
		setTimeout(function(){ 
			SWAPP_HTTP_INTERNA(); 
		}, 100);
		
	}
	
	function SWAPP_HTTP_INTERNA() {
		
		var result = SWAPP.getJSON_HTTP();
		
		if( result != null ){
			
			if ( result != "Sin Internet" ){ 
				
				SWAPP_HTTP(result, true);
				
			}else{
				
				SWAPP_HTTP(result, false);
				
				alert("El Internet esta desactivado.");
			}
		}else{
			
			setTimeout(function(){ 
				SWAPP_HTTP_INTERNA(); 
			}, 100);
			
		}
		
	}
