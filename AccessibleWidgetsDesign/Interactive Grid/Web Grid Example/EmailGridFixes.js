function appendItem()
{
    $('#btn_add').click(function()	
	{
        if( $(".itemlist").children(".item").length === 0 )
        {
           console.log("Found Item list zero with button clicked");
		   addToFirstPos();
		   removeReceipients();
		   
        }
        else if( $(".itemlist").children(".item").length > 0 )
        {
            console.log("Found More than zero item with button click");
			addToLastPos();
			removeReceipients();
         }
    });
    $(".txt").keydown(function(e)
	{
        if( $(".itemlist").children(".item").length === 0 && e.keyCode == 13 )
        {
            console.log("Found zero item with enter");
			addToFirstPos();
			removeReceipients();
        }
        else if( $(".itemlist").children(".item").length > 0 && e.keyCode == 13 )
        {
            console.log("Found more than one item with enter");
			addToLastPos();
			removeReceipients();
        }
    });
        
}
function addToFirstPos()
{
    var txt_recp= $(".txt").val();
    var id=0;
		if(txt_recp=="")
		{
					
		}			
		else
		{
			++id;
			var idBtn=txt_recp+""+id;
			$(".itemlist").append("<div role='row' class='item'>"+
									"<span role='gridcell' class='gc' tabindex='0'>"+
										"<a id='"+txt_recp+"' class='item_name' aria-label='"+txt_recp+"' tabindex='-1' href='#'>"+txt_recp+"</a>"+
									"</span>"+
									"<span role='gridcell' class='gc rmvgc' tabindex='-1' onkeydown='removeReceipientsOnKey();'>"+
										"<span id='"+idBtn+"' class='rmv' tabindex='-1' role='button' aria-label='Remove' aria-labelledby='"+idBtn+"  "+txt_recp+"' onclick='removeReceipients();' >x</span>"+
									"</span>"+ 
								"</div>");
			$("#form-action-text").text(txt_recp);
			gridNavigation();
			$(".txt").val("").focus();
        }
		$(".hidden").css("display","block");
}

function addToLastPos()
{
    var txt_recp= $(".txt").val();
    var id=0;
		if(txt_recp=="")
		{
					
		}			
		else
		{
			++id;
			var idBtn = txt_recp+""+id;
			$(".itemlist").append("<div role='row' class='item'>"+
									"<span role='gridcell' class='gc' tabindex='-1'>"+
										"<a id='"+txt_recp+"' class='item_name' aria-label='"+txt_recp+"' tabindex='-1' href='#'>"+txt_recp+"</a>"+
									"</span>"+
									"<span role='gridcell' class='gc rmvgc' tabindex='-1' onkeydown='removeReceipientsOnKey();'>"+
										"<span id='"+idBtn+"' class='rmv' tabindex='-1' role='button' aria-label='Remove' aria-labelledby='"+idBtn+"  "+txt_recp+"' onclick='removeReceipients();' >x</span>"+
									"</span>"+ 
								"</div>");
			$("#form-action-text").text(txt_recp);
			gridNavigation();
			$(".txt").val("").focus();
        }
		$(".hidden").css("display","block");
}

function makeFirstFocusable()
{
    var attr = $(".itemlist").children(".item").eq(0).children(".gc").eq(0).attr("tabindex");
    if(attr == -1)
    {
		$(".itemlist").children(".item").eq(0).children(".gc").eq(0).attr("tabindex","0");
		
    }
}
