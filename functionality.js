$(document).ready(function() {
						  
   var current_page = 1;
   
   $("#btn_about_roll").fadeOut("fast");
   $("#btn_services_roll").fadeOut("fast");
   $("#btn_new_roll").fadeOut("fast");
   $("#btn_directions_roll").fadeOut("fast");
   $("#btn_contact_roll").fadeOut("fast");
   
   $("#photo_services").fadeOut("fast");
   $("#photo_new").fadeOut("fast");
   $("#photo_contact").fadeOut("fast");
   $("#photo_directions").fadeOut("fast");
   
   $("#nav_arrow_01").animate({ top: "32px"}, 250);
   
   $("#body_content").html(content_about);
   
   $("#btn_about").hover(
   function() {
     $("#btn_about_roll").fadeIn("fast");
   },
   function(){
     $("#btn_about_roll").fadeOut("fast");
   });
   
   $("#btn_services").hover(
   function() {
     $("#btn_services_roll").fadeIn("fast");
   },
   function(){
     $("#btn_services_roll").fadeOut("fast");
   });
   
   $("#btn_new").hover(
   function() {
     $("#btn_new_roll").fadeIn("fast");
   },
   function(){
     $("#btn_new_roll").fadeOut("fast");
   });
   
   $("#btn_directions").hover(
   function() {
     $("#btn_directions_roll").fadeIn("fast");
   },
   function(){
     $("#btn_directions_roll").fadeOut("fast");
   });
   
   $("#btn_contact").hover(
   function() {
     $("#btn_contact_roll").fadeIn("fast");
   },
   function(){
     $("#btn_contact_roll").fadeOut("fast");
   });
   
   $("#btn_about").click(function() {
     $("#nav_arrow_01").animate({ top: "32px"}, 250);
	 $("#nav_arrow_02").animate({ top: "20px"}, 250);
	 $("#nav_arrow_03").animate({ top: "20px"}, 250);
	 $("#nav_arrow_04").animate({ top: "20px"}, 250);
	 $("#nav_arrow_05").animate({ top: "20px"}, 250);
	 $("#photo_about").fadeIn("slow");
	 $("#photo_services").fadeOut("slow");
     $("#photo_new").fadeOut("slow");
     $("#photo_contact").fadeOut("slow");
     $("#photo_directions").fadeOut("slow");
	 
	 $("#body_content").fadeOut(250, function(){$("#body_content").html(content_about);$("#body_content").fadeIn("fast");});
   });
   
   $("#btn_services").click(function() {
	 $("#nav_arrow_01").animate({ top: "20px"}, 250);
	 $("#nav_arrow_02").animate({ top: "32px"}, 250);
	 $("#nav_arrow_03").animate({ top: "20px"}, 250);
	 $("#nav_arrow_04").animate({ top: "20px"}, 250);
	 $("#nav_arrow_05").animate({ top: "20px"}, 250);
	 $("#photo_about").fadeOut("slow");
	 $("#photo_services").fadeIn("slow");
     $("#photo_new").fadeOut("slow");
     $("#photo_contact").fadeOut("slow");
     $("#photo_directions").fadeOut("slow");
	 
	 $("#body_content").fadeOut(250, function(){$("#body_content").html(content_services);$("#body_content").fadeIn("fast");});
   });
   
   $("#btn_new").click(function() {
	 $("#nav_arrow_01").animate({ top: "20px"}, 250);
	 $("#nav_arrow_02").animate({ top: "20px"}, 250);
	 $("#nav_arrow_03").animate({ top: "32px"}, 250);
	 $("#nav_arrow_04").animate({ top: "20px"}, 250);
	 $("#nav_arrow_05").animate({ top: "20px"}, 250);
	 $("#photo_about").fadeOut("slow");
	 $("#photo_services").fadeOut("slow");
     $("#photo_new").fadeIn("slow");
     $("#photo_contact").fadeOut("slow");
     $("#photo_directions").fadeOut("slow");
	 
	 $("#body_content").fadeOut(250, function(){$("#body_content").html(content_new); $("#body_content").fadeIn("fast");});
   });
   
   $("#btn_directions").click(function() {
	$("#nav_arrow_01").animate({ top: "20px"}, 250);
	 $("#nav_arrow_02").animate({ top: "20px"}, 250);
	 $("#nav_arrow_03").animate({ top: "20px"}, 250);
	 $("#nav_arrow_04").animate({ top: "32px"}, 250);
	 $("#nav_arrow_05").animate({ top: "20px"}, 250);
	 $("#photo_about").fadeOut("slow");
	 $("#photo_services").fadeOut("slow");
     $("#photo_new").fadeOut("slow");
     $("#photo_contact").fadeIn("slow");
     $("#photo_directions").fadeOut("slow");
	 
	 $("#body_content").fadeOut(250, function(){$("#body_content").html(content_directions); $("#body_content").fadeIn("fast");});
   });
   
   $("#btn_contact").click(function() {
	  $("#nav_arrow_01").animate({ top: "20px"}, 250);
	 $("#nav_arrow_02").animate({ top: "20px"}, 250);
	 $("#nav_arrow_03").animate({ top: "20px"}, 250);
	 $("#nav_arrow_04").animate({ top: "20px"}, 250);
	 $("#nav_arrow_05").animate({ top: "32px"}, 250);
	 $("#photo_about").fadeOut("slow");
	 $("#photo_services").fadeOut("slow");
     $("#photo_new").fadeOut("slow");
     $("#photo_contact").fadeOut("slow");
     $("#photo_directions").fadeIn("slow");
	 
	 $("#body_content").fadeOut(250, function(){$("#body_content").html(content_contact); $("#body_content").fadeIn("fast");});
   });
});
