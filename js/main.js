var test =document.getElementsByClassName("post");
var testbutton=document.getElementsByTagName("button")[0];
testbutton.onclick=function(){
	
	var media=test[0].getElementsByClassName("mediabox")[0];
	var info=test[0].getElementsByClassName("infobox")[0];
	var chart=test[0].getElementsByTagName("canvas")[0];
	test[0].classList.add("post-big")
	media.classList.add("mediabox-big");
	info.classList.add("infobox-big");
	myChart.resize();
};

/*nav*/
var btsearch=document.getElementById("search-button");
btsearch.onclick=function(){
	var searchbox=document.getElementById("filterbox");
	var hide=searchbox.className;
	if(hide==="hidden"){
		searchbox.classList.remove("hidden");
	}
	else{
		searchbox.classList.add("hidden");
	}
};

