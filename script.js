// JavaScript Document
/*
$(document).ready(function(){
    $('#EGB').mouseenter(function(){
        $(this).fadeOut('fast');
    });
    $('#EGB').mouseleave(function(){
        $(this).fadeIn('fast');
    });
});*/

/*
$(document).ready(function(){
    $('#EGB').hover(
    	function(){
        	$(this).fadeOut('fast');
    },
    	function(){
        $(this).fadeIn('fast');
    }
    );
});
*/
/*
$(document).ready(function(){
    $('#EGB').hover(
        function(){
            $(this).hide();
    },
        function(){
            $(this).show();
    }
    );
});*/
/*

$(document).ready(function(){
    $('#EGB').hover(
        function(){
            $(this).fadeOut('fast');
    },
        function(){
        $(this).fadeIn('fast');
    }
    );
});
*/
var ultElem ="";
$(document).ready(function(){
            
            // se ejecuta el evento hover al pasar el mouse por encima
            $(".selector").hover(function(){
                // cogemos el id del li por el que estamos pasando por encima
                var id=$(this).attr("id");           
            
                //guardamos referencia
                ultElem=id;
                //alert(id);              
                 // mostramos el imagen doble que tiene una clase selector que se llama como el id
                $("#"+ultElem+"x2").show();
         
            },function(){
                // esta función se ejecuta cuando pierde el foco
                //si el foco que se pierde y es de una imagen doble

                 if (ultElem.substr(ultElem.length -2,2)=="x2"){
                    //esta es la segunda vez que entra y ultElem es ..x2 lo que sea
                    //alert( "es caso doble"+ ultElem.substr(ultElem.length -2,2))
                    $("#"+ultElem).hide();
                    //ocultamos el elemento x2
               }
           
            });
       
    /*
$('#linkEGB').mouseenter(function(){
        $('#EGB').hide();

    },mouseleave(function(){
      $('#EGB').show();
    });
*/
/*$('#EGB').bind("mouseenter mouseleave",function(){
    
  
         alert("operando #EGB");
   



});
*/
/*
//-----------------------------------
    $('#FILYLET').mouseenter(function(){
        alert("metiendome en FILYlet");
      /*  if $(this).is( ":visible" ){
        
            alert("visible");
            $(this).hide();
        };
        
        
        return false;*/
    /*});
    $('#FILYLET').mouseleave(function(){
        alert("dejando FILYlet");
      /*  if $(this).is( ":hidden" ){
        
             $(this).show();
        };
       
        return false;
    });
//-----------------------------------
    $('#CAP').mouseenter(function(){
        $(this).hide();
    });
    $('#CAP').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#MILI').mouseenter(function(){
        $(this).hide();
    });
    $('#MILI').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------

    $('#POSGRADO').mouseenter(function(){
        $(this).hide();
    });
    $('#POSGRADO').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#EULEN').mouseenter(function(){
        $(this).hide();
    });
    $('#EULEN').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#BSHG').mouseenter(function(){
        $(this).hide();
    });
    $('#BSHG').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#MEGASOFT').mouseenter(function(){
        $(this).hide();
    });
    $('#MEGASOFT').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#SYSTEM1').mouseenter(function(){
        $(this).hide();
    });
    $('#SYSTEM1').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#SAAT').mouseenter(function(){
        $(this).hide();
    });
    $('#SAAT').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#BRITANICO').mouseenter(function(){
        $(this).hide();
    });
    $('#BRITANICO').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#FP').mouseenter(function(){
        $(this).hide();
    });
    $('#FP').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#BIRMINGHAM').mouseenter(function(){
        $(this).hide();
    });
    $('#BIRMINGHAM').mouseleave(function(){
        $(this).show();
    });
//-----------------------------------
    $('#SYSTEM2').mouseenter(function(){
        $(this).hide();
    });
    $('#SYSTEM2').mouseleave(function(){
        $(this).show();
    });*/
});
