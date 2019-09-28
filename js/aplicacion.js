$(document).ready(function(){
	$('#continuar').click(function(){
		$('#description1').remove();
	});
	$("#tipomaterial").hover(
		function(){
			$("#definicion_materiales").show();
		},
		function(){
			$("#definicion_materiales").hide();			
		}); 

	var $mapa = $(".comuna");
	$mapa.mouseenter(function(){
		var id_vec = $(this).attr("id");
		$("#"+id_vec+"_vec").show();
		$(this).fadeTo("fast",0.5);
	});
	$mapa.mouseleave(function(){
		var id_vec = $(this).attr("id");
		$("#"+id_vec+"_vec").hide();
		$(this).fadeTo("fast",1);
	});
})







/*$(document).ready(function(){
	$('#continuar').click(function(){
		$('#description1').remove();
	});
	$("#tipomaterial").hover(
		function(){
			$("#definicion_materiales").show();
		},
		function(){
			$("#definicion_materiales").hide();			
		}); 

	var $mapa = $(".comuna");
	$mapa.mouseenter(function(){
		var id_vec = $(this).attr("id");
		$("#"+id_vec+"_vec").show();
		$(this).fadeTo("fast",0.5);
	});
	$mapa.mouseleave(function(){
		var id_vec = $(this).attr("id");
		$("#"+id_vec+"_vec").hide();
		$(this).fadeTo("fast",1);
	});
})

$(document).ready(function(){
	var $mapa = $(".comuna");
	$mapa.hover(
		function(){
			$(this).fadeTo("fast",0.5);
			var id_vec = $(this).attr("id");
			$("#"+id_vec+"_vec").show();
	},
		function(){			
			$(this).fadeTo("fast",1);
			var id_vec = $(this).attr("id");
			$("#"+id_vec+"_vec").hide();
	});
});

//var oID = $(this).attr("id");
*/