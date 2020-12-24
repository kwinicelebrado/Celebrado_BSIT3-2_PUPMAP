function showModal(title,img,descr)
{
	function elementView(){
	document.getElementById("myModal").style.display="block";
	document.getElementById("names").textContent=title;
	document.getElementById("pics").src=img;
	document.getElementById("desc").innerHTML=descr;
	}


	
	if(modal=document.querySelector("#chapel")){
		elementView();
		}
	
	else if(modal=document.querySelector("#oval")){
		elementView();
		}
		
	else if(modal=document.querySelector("#grandstand")){
		elementView();
		}
	
	else if(modal=document.querySelector("#obelisk")){
		elementView();
		}
		
	else if(modal=document.querySelector("#north")){
		elementView();
		}
}

	
function hideModal()
{
	function elementHide(){
	document.getElementById("myModal").style.display="none";
	}
		if(modal.target.id!=document.getElementById("pupoval")){
			elementHide();
		}
		
		else if(modal.target.id!=document.getElementById("amphi")){
			elementHide();
		}
		
		else if(modal.target.id!=document.getElementById("lab")){
			elementHide();
		}
		
		else if(modal.target.id!=document.getElementById("chapel")){
			elementHide();
		}
		
		else if(modal.target.id!=document.getElementById("north")){
			elementHide();
		}
}
