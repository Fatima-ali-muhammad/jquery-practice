/*$(document).ready(function(){
    $("p").click(function(){
     $(this).hide();
    });

});*/



$(function(){
$('#error').hide()
  var list = 0;

 $('#add').on('click',function(){

  if($('#input-feild').val()==''){
    // $('#input-feild').addClass("error");
    $('#error').css('color','red').show()
  }else {
      list=list+1;
      var text= $('#input-feild').val();
      $('#toDocontainer').append("<li id='" +list+"'> "+text+" <button  onclick='removeFun("+list+") '>Delete</button></li>");
      $('#input-feild').val("");
      $('#error').hide();

    }

    });

   


    $('#reset').on('click',function(){
        $('#toDocontainer').empty();
    });




 $('#input-feild').keypress(function(event){

    if(event.keyCode === 13){
        $("#add").click();

    }


  })

  $("p.intro").on('hover',function(){

    alert("visit");


   },

   function(){
     
    alert("leave");
   });
 
 


 $('p').on('click',function(){
    $("p").hide();
  });

 $("button").on('click',function(){
   $('p').hide();
  });

  $("p#intro").on('mouseenter',function(){
    
    $("p#intro").css('background-color','gray');
    alert("You entered p1!");

  });


  $("tr:even").css('background-color','gray');

  $("tr:odd").css('background-color','white');

  $("p").on('mouseenter',function(){
   $(this).css('background-color','yellow');
  });

  $("p").on('mouseleave',function(){
    $(this).css('background-color','red');
   });

   $("p").on('mousedown',function(){
    $(this).css('background-color','green');
   });

   $("p").on('mouseup',function(){
    $(this).css('background-color','gray');

   });

  /* $("#but").on('click',function(){
   $(".box").animate({height:'toggle'});

   });*/

   $("#but").on('click',function(){
    $(".box").animate({left:'250px', opacity:'0.5',height:'150px',width:'150px'});
 
    });



    $("#flip").on('click',function(){
      $("#panel").slideDown("slow");
    });

   
 

 /* $('p#intro').on('dblclick',function(){

    $(this).hide();

  });*/


 /* $("p").on('mouseenter',function(){
    $("p#intro").css('background-color','gray');
  });*/

/*  $("button").on('click',function(){
    $("p [href]").hide();
   });

   $("button").on('click',function(){
    $(" [href]").hide();
   });*/


 /* $('button').on('click',function(){
    $("p:last").hide();
  });*/

 /* $('button').on('click',function(){
    $('ul li:last-child').hide();
  });

  $('button').on('click',function(){
    $('ul li:first-child').hide();
  });*/

  /*$("button").on('click',function(){
   
    $('p.intro').hide();

  });*/

  /*$("button").on('click',function(){
   $('#intro').hide();
  });*/

 /* $('button').on('click',function(){
   $(this).hide();


  });*/


  /*$("button").on('click',function(){
    $("*").hide();
  });*/


/*$("button").on('click',function(){
  $("#delt").hide();



});*/


/*$("button").on('click',function(){
  $(".delete").hide();

});*/
  

});





var removeFun = function(id){
  $('#'+id).fadeOut('slow');

 }

















































































