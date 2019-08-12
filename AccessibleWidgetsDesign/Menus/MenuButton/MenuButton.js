$(document).ready(function()
{
	$("[class='nav-menu-button'], a").keydown(function(e)
	{
		var tagName = $(this).prop("tagName");
		var subMenuChildrenCount = $(".nav-sub-menu").children().length;
		switch(e.keyCode)
		{
			case 38 : 
				var last_menu_index = $(this).index();
				if( (tagName == "BUTTON" ) && ($(".nav-sub-menu").css("display") == "none") )
				{
					$(".nav-sub-menu").css("display","block");
					$("a").attr("tabindex","-1");
					$(".nav-menu-button").attr("aria-expanded","true");
					$(".nav-sub-menu").children().last().children().focus().attr("tabindex","0");
				}
				else if( last_menu_index == 0 && tagName == "A")
				{
					$("a").attr("tabindex","-1");
					$(this).parent().parent().children().last().children("a").focus().attr("tabindex","0");
				}
				else if(tagName == "A")	
					$("a").attr("tabindex","-1");
					$(this).parent().prev("li").children("a").focus().attr("tabindex","0");
				break;
					  
			case 40 : 
				var last_menu_index = $(this).index();
				if(tagName == "BUTTON")
				{
					$(".nav-sub-menu").css("display","block");
					$("a").attr("tabindex","-1");
					$(".nav-menu-button").attr("aria-expanded","true");
					$(".nav-sub-menu li").first().children().focus().attr("tabindex","0");
				}
			    else if(last_menu_index == $(this).length-1)
			    {
					$("a").attr("tabindex","-1");
					$(this).parent().parent().children().first().children("a").focus().attr("tabindex","0");
				}
				else
					$("a").attr("tabindex","-1");
					$(this).parent().next("li").children("a").focus().attr("tabindex","0");break;
			case 13: 
				if(tagName == "BUTTON")
				{	
					$(".nav-sub-menu").css("display","block");
					$("a").attr("tabindex","-1");
					$(".nav-menu-button").attr("aria-expanded","true");
					$(".nav-sub-menu li").first().children().focus().attr("tabindex","0");		
				}
				else	
					$(this).click();
					break;
			case 27 :
				if(tagName == "A")
				{
					$(".nav-menu-button").focus();
					$(".nav-menu-button").attr("aria-expanded","false");
					$(".nav-sub-menu").css("display","none");
					break;
				}
		}
		$("a").focusin(function()
		{
			$(this).parent().css("background","mediumseagreen");
		});
		$("a").focusout(function()
		{
			$(this).parent().css("background","transparent");
		});
	});
	
	$(".nav-menu-button, a").hover(
	function()
	{
		if($(this).prop("tagName") == "BUTTON")
		{
			$(".nav-sub-menu").css("display","block");
			$(".nav-menu-button").attr("aria-expanded","true");
		}
		else
			$(this).parent().css("background","mediumseagreen");
	},
	function()
	{
		$(".nav-sub-menu li").css("background","transparent");
		$(".nav-menu-button").attr("aria-expanded","false");
	});
});