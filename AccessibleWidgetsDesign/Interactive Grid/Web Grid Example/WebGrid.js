function gridNavigation()
{
	$(document).ready(function()
	{
		var tr,td,cell;
			td=$(".gc").length;
			tr=$(".item").length;
			cell=td/(tr-1);//one tr have that much of td
		$(".gc").keydown(function(e)
		{
			//alert(cell);
			switch(e.keyCode)
			{
				//case 37: $(this).parent().prev().children("a.link").focus();break;
				//case 39: $(this).parent().next().children("a.link").focus();break;
				//case 40:$(this).parent().parent().next().children("td").children("a.link[name="+$(this).attr("name")+"]").focus();break;
				//case 38:$(this).parent().parent().prev().children("td").children("a.link[name="+$(this).attr("name")+"]").focus();break;
				case 37 : var first_cell = $(this).index();
						if(first_cell==0)
						{
							$(this).parent().prev().children("span").focus();
						}
						else
							$(this).prev("span").focus();break;//left arrow
								
				case 39 : var last_cell = $(this).index();
							if(last_cell == 1)
							{
								$(this).parent().next().children("span").eq(0).focus();
							}
							$(this).next("span").focus();break;//right arrow
							  
				case 40 : var last_cell = $(this).index();
						if(last_cell == 1)
						{
							$(this).parent().next().children("span").eq(0).focus();
						}
						$(this).next("span").focus();break;
							/*var child_cell = $(this).index();	
							  $(this).parent().next().children("span").eq(child_cell).focus();break;//down arrow
							  */
				case 38 : var first_cell = $(this).index();
						if(first_cell==0)
						{
							$(this).parent().prev().children("span").focus();
						}
						else
							$(this).prev("span").focus();break;
								/*var parent_cell = $(this).index();
							  $(this).parent().prev().children("span").eq(parent_cell).focus();break;//up arrow		*/   
			}	
			/*if(e.keyCode == 113)
			{
				$(this).children().focus();
			}*/
		});
	
		$(".gc").focusin(function()
		{
			$(this).css("outline","dotted steelblue 3px");
		});
		$(".gc").focusout(function()
		{
			$(this).css("outline","none");
		});		
		
		$(".item").each(function(i)
		{
			$(this).attr("data-row-index",i);
		});
	});
}

function removeReceipients()
{
	$(".rmvgc, .rmv").on("click", function()
	{
		//var index = $(this).parent(".item").index();
		//alert(index);
		$(this).parent(".item").remove();
		$(".itemlist").children(".item").eq(0).children().eq(1).focus();
		var uname = $(this).parent(".item").find("a").text();
					 $("#changeRemove").text(uname+" Removed from list");
		appendItem();
		makeFirstFocusable();
	});
	
}
function removeReceipientsOnKey()
{
	$(".rmvgc").on("keydown", function(evt)
	{
		//var index = $(this).parent(".item").index();
		//alert(index);
		switch(evt.keyCode)
		{
			case 13 :$(this).parent(".item").remove();
					 $(".itemlist").children(".item").eq(0).children().eq(1).focus();
					 var uname = $(this).parent(".item").find("a").text();
					 $("#changeRemove").text(uname+" Removed from list");
					 if( $(".itemlist").children(".item").length === 0 )
					 {
					 	$("#changeRemove").text("No receipient available to remove now!");
					 }
					 else
					 {
					 	var uname = $(this).parent(".item").find("a").text();
						 $("#changeRemove").text(uname+" Removed from list");
					 }
					 break;
		}
		appendItem();
		makeFirstFocusable();
	});
}

$(document).ready(function()
{
	appendItem();
	gridNavigation();
	removeReceipientsOnKey();
	//selects the item from nux list
	$(".user_name").click(function()
	{
		var linkText = $(this).text();
		$(".txt").val(linkText);
	});
	//closing nux list

	$(".btn_close").click(function()
	{
		$(".hidden").css("display","none");
	});
});



