/*nav*/

var addbutton=document.getElementById("btadd")
var searchbutton=document.getElementById("btsearch");
/*createbox*/
var closebutton=document.getElementById("btclose");
var canclebutton=document.getElementById("btcancle");
var createbutton=document.getElementById("btcreate");
var createbox=document.getElementById("createbox");
var layer=document.getElementById("layer");

/*datas*/
var inputtitle=document.getElementById("titleinput");
var inputdesc=document.getElementById("descinput");
var inputpub=document.getElementById("pubinput");
var inputtype=document.getElementById("typeinput");
var inputoptions=document.getElementById("optionsinput");
var photourlinput=document.getElementById("photoinput");
var inputnames=document.getElementsByClassName("inputname");
var inputvalues=document.getElementsByClassName("inputvalue");
/*show hide*/
function showandhide(box){
	var hide=box.className;
	if(hide==="hidden"){
		box.classList.remove("hidden");
	}
	else{
		box.classList.add("hidden");
	}
}
/*create*/
function builddataset(){
	
}
closebutton.onclick=function(){
	closecreatebox();
};
canclebutton.onclick=function(){
	closecreatebox();
};
addbutton.onclick=function(){
	showandhide(createbox);
	showandhide(layer);
}
function closecreatebox(){
	showandhide(createbox);
	showandhide(layer);
	inputtitle.value="";
	inputdesc.value="";
	inputpub.value="";
	inputtype.selectedIndex=0;
	inputoptions.selectedIndex=0;
	photourlinput.value="";
	var index=0;
	for(index=0;index<6;index++){
		inputnames[index].value="";
		inputvalues[index].value=0;
	}

}
searchbutton.onclick=function(){
	var searchbox=document.getElementById("filterbox");
	showandhide(searchbox);
};

var btsubmit=document.getElementsByClassName("submitbutton")[0];
btsubmit.onclick=function(){
	var mediabox=document.getElementsByClassName("mediabox")[0];
	showandhide(mediabox);
};