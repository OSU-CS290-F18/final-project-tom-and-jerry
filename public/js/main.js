var optionsContainer=[
	"<div class='inputdata' valid='true' style='background:rgba(54, 162, 235, 0.2)'><label>Opt2</label><input class='inputname'></div>",
	"<div class='inputdata' valid='true' style='background:rgba(255, 206, 86, 0.2)'><label>Opt3</label><input class='inputname'></div>",
	"<div class='inputdata' valid='true' style='background:rgba(75, 192, 192, 0.2)'><label>Opt4</label><input class='inputname'></div>",
	"<div class='inputdata' valid='true' style='background:rgba(153, 102, 255, 0.2)'><label>Opt5</label><input class='inputname'></div>",
	"<div class='inputdata' valid='true' style='background:rgba(255, 159, 64, 0.2)'><label>Opt6</label><input class='inputname'></div>"
];
/*nav*/
var addbutton=document.getElementById("btadd")
var searchbutton=document.getElementById("btsearch");
var aboutbutton=document.getElementById("about-button");
var aboutwindow=document.getElementById("aboutus");
/*createbox*/
var closebutton=document.getElementById("btclose");
var canclebutton=document.getElementById("btcancle");
var createbutton=document.getElementById("btcreate");
var createbox=document.getElementById("createbox");
var layer=document.getElementById("layer");
var photoButton=document.getElementById("photobutton");
var urlInput = document.getElementById("input-photourl");
var addOptionButton = document.getElementById("addoptionbutton");
var removeOptionButton = document.getElementById("removeoptionbutton");
/*datas*/
var inputtitle=document.getElementById("titleinput");
var inputdesc=document.getElementById("descinput");
var inputpub=document.getElementById("pubinput");
var inputtype=document.getElementById("typeinput");
var inputoptions=document.getElementById("optionsinput");
var photourlinput=document.getElementById("photoinput");
var inputnames=document.getElementsByClassName("inputname");
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
aboutbutton.onclick=function(){showandhide(aboutwindow)};
/*create*/
var dataJson=function(_publisher,title,_type,_description,_options,_url,_labels,_datasets,){
	this.publisher=_publisher,
	this.chartid=title,
	this.type=_type,
	this.size=0,
	this.description=_description,
	this.options=_options,
	this.photoURL=_url||"",
	this.chartData={
	   "type":_type,
	   "data":{
			"labels":_labels,
			"datasets":[_datasets]
	   },
	   "options": {"scales": {"yAxes": [{"ticks":{"beginAtZero":true}}]}}
   }
}
var getInput=function(){
	var index = inputtype.selectedIndex; // chart type

	var chartoptions = [];
	for (var i=0;i<inputnames.length;i++){
		chartoptions.push(inputnames[i].value);
	}

	var namearray = function(){
		var arr=[];
		for(var i=0;i<chartoptions.length;i++){
			arr.push({"option":chartoptions[i],"name":inputtitle.value})
		}
		return arr;
	}
	var labelarr =  function(){
		var container = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
		var temp = container.slice();
		var arr = [];
		 for(var i=0;i<chartoptions.length;i++){
			 arr.push(temp[0]);
			 temp.splice(0,1)
		 }
		 return arr;
	}
	var data = function(){
		var arr = [];
		for(var i=0;i<chartoptions.length;i++){
			arr.push(0);
		}
		return arr;
	}
	var backgroundColor = function(){
		var container = [
			"rgba(255, 99, 132, 0.2)",
			"rgba(54, 162, 235, 0.2)",
			"rgba(255, 206, 86, 0.2)",
			"rgba(75, 192, 192, 0.2)",
			"rgba(153, 102, 255, 0.2)",
			"rgba(255, 159, 64, 0.2)"
		];
		var temp = container.slice();
		var arr = [];
			for(var i=0;i<chartoptions.length;i++){
				arr.push(temp[0]);
			 temp.splice(0,1)
			}
			return arr;
		}
		var borderColor = function(){
			var container = [
				"rgba(255,99,132,1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)"
			];
			var temp = container.slice();
			var arr = [];
				for(var i=0;i<chartoptions.length;i++){
					arr.push(temp[0]);
				temp.splice(0,1)
				}
				return arr;
		   }
	return new dataJson(inputpub.value,inputtitle.value,inputtype.options[index].value,inputdesc.value,namearray(),photourlinput.value,chartoptions,
			{
			"label":inputtitle.value,
			"data":data(),
			"backgroundColor":backgroundColor(),
			"borderColor":borderColor(),
		    "borderWidth": 1
			}
	);
}
var clearInput=function(){
	inputtitle.value="";
	inputdesc.value="";
	inputpub.value="";
	inputtype.selectedIndex=0;
	//inputoptions.selectedIndex=0;
	photourlinput.value="";
	var index=0;
	for(index=0;index<(6-optionsContainer.length);index++){
		inputnames[index].value="";
	}
}

var checkIput = function(){
	if(inputtitle.value===""){
		swal ( "Oops" ,  "You need a title",  "warning" );
		return 0;
	}
	if(inputpub.value===""){
		swal ( "Oops" ,  "You need a publisher",  "warning" );
		return 0;
	}
	if(inputdesc.value===""){
		swal ( "Oops" ,  "Please simply describe your vote",  "warning" );
		return 0;
	}
	if(inputdesc.value===""){
		swal ( "Oops" ,  "Please simply describe your vote",  "warning" );
		return 0;
	}
	for(index=0;index<(6-optionsContainer.length);index++){
		if(inputnames[index].value===""){
			swal ( "Oops" ,  "Option "+(index+1)+" wants a name",  "warning" );
			return 0;
		}
	}
	return 1;

}

function closecreatebox(){
	showandhide(createbox);
	showandhide(layer);
	clearInput();
}

var addAOption=function(){
	if(optionsContainer.length>0){
		var container = document.getElementById("datainput");
		var newOption = optionsContainer.splice(0,1);
		container.insertAdjacentHTML('beforeend', newOption);
	}
	else alert('Max to 6 options!');
}

var removeAOption=function(){
	if(optionsContainer.length<5){
		var container = document.getElementById("datainput");
		var option = container.lastChild;
		optionsContainer.unshift(option.outerHTML);
		option.remove();
	}else alert('At least one option!');
}

var removeAlloption = function(){
	for(; optionsContainer.length!=5;){
		removeAOption();
	}
}


var sendData = function(data){
	var postRequest = new XMLHttpRequest();
	var requestURL = '/votes/userdata';
	postRequest.open('POST', requestURL);

	var requestBody = JSON.stringify(data);
	postRequest.addEventListener('load', function (event) {
		if (event.target.status === 200)  {
			Handlebars.partials = Handlebars.templates;
			var voteCardTemplate = Handlebars.templates.voteCard;
			console.log("== ",data);
			var newVoteCardHTML = voteCardTemplate(data);
			var voteCardContainer = document.querySelector('#results');
			voteCardContainer.insertAdjacentHTML('beforeend', newVoteCardHTML);
			swal({
				title: "Success",
				text: "We have received your request!",
				icon: "success",
				button: "OK!",
			  });
		} else {
			swal ( "Oops" ,  "somethings Wrong \n"+event.target.response ,  "error" );
		  //alert('Error storing photo: ' + event.target.response);
		}
	  });
  
	  postRequest.setRequestHeader('Content-Type', 'application/json');
	  postRequest.send(requestBody);
}
var voteForIt = function(url){
	var postRequest = new XMLHttpRequest();
	var requestURL = "/votes"+url;
	console.log('request: ',requestURL);
	postRequest.open('POST', requestURL);

	//var requestBody = JSON.stringify(data);
	postRequest.addEventListener('load', function (event) {
		if (event.target.status === 200) {
			swal({
				title: "Success",
				text: "Thanks for your voting",
				icon: "success",
				button: "OK!",
			  });
		} else {
			swal ( "Oops" ,  "somethings Wrong \n"+event.target.response ,  "error" );
		  //alert('Error storing photo: ' + event.target.response);
		}
	  });
  
	  postRequest.setRequestHeader('Content-Type', 'application/json');
	  postRequest.send();
}
var btsubmit=document.getElementsByClassName("submitbutton");
var showButton=document.getElementsByClassName("showbutton");
var hideButton=document.getElementsByClassName("hidebutton");

var newpostbuttonevent= function(){
	for(let i=0;i<btsubmit.length;i++){
		btsubmit[i].addEventListener("click",function(){
			var votebox=document.getElementsByClassName("votebox")[i];
			var id = votebox.name;
			var target = 'input[name="'+id+'"]:checked';
			var choice = votebox.querySelector(target);
			if(choice){
			var choiceValue = choice.value;
			var options = votebox.querySelectorAll('input[name="'+id+'"]');
			var j;
			for (j=0;j<options.length;j++){
				if(options[j].checked===true) break;
			}
			var url = '/'+id+"/"+choiceValue+'/'+j;
			voteForIt(url)
		}else
			swal({title: "Ooops",
			text: "You should choose an Option",
			icon: "warning",
			button: "OK!"});
		})
	}
	for(let i=0;i<showButton.length;i++){
		showButton[i].addEventListener("click",function(){
			var mediabox=document.getElementsByClassName("mediabox")[i];
			//var resultbox=document.getElementsByClassName("resultbox")[i];
			mediabox.classList.add("hidden");
			//resultbox.classList.remove("hidden");
		})
	}
	for(let i=0;i<hideButton.length;i++){
		hideButton[i].addEventListener("click",function(){
			var mediabox=document.getElementsByClassName("mediabox")[i];
			mediabox.classList.remove("hidden");
			//var resultbox=document.getElementsByClassName("resultbox")[i];
			//resultbox.classList.add("hidden");
		})
	}
}
function recaptchaCallback() {
	createbutton.disabled = false;
	createbutton.classList.remove('disabled');
};
window.addEventListener('DOMContentLoaded', function () {
	//console.log("DOM fully loaded and parsed");
	newpostbuttonevent();
	addOptionButton.addEventListener("click",function(){
		addAOption();
	});
	removeOptionButton.addEventListener("click",function(){
		removeAOption();
	});
	closebutton.addEventListener("click",function(){
		closecreatebox();
		photoButton.classList.remove("hidden");
		urlInput.classList.add("hidden");
		removeAlloption();
	});
	canclebutton.addEventListener("click",function(){
		closecreatebox();
		photoButton.classList.remove("hidden");
		urlInput.classList.add("hidden");
		removeAlloption();
	});

	addbutton.addEventListener("click",function(){
		createbutton.disabled = true;
		createbutton.classList.add('disabled');
		grecaptcha.reset();
		showandhide(createbox);
		showandhide(layer);
	});
	searchbutton.addEventListener("click",function(){
		var searchbox=document.getElementById("filterbox");
		showandhide(searchbox);
	});
	
	createbutton.addEventListener("click",function(){
		if(checkIput()){
		sendData(getInput());
		//console.log("Output: ",getInput());
		setTimeout(function(){
		newpostbuttonevent();
		closecreatebox()
		photoButton.classList.remove("hidden");
		urlInput.classList.add("hidden");
		removeAlloption();
	},400);
}
	});

	photoButton.addEventListener("click",function(){
		photoButton.classList.add("hidden");
		urlInput.classList.remove("hidden");
	});

	
	
});
var outDiv = document.getElementById('results');  
        outDiv.onwheel = function(event){    
            event.preventDefault();  
            var step = 50;  
            if(event.deltaY < 0){  
                this.scrollLeft -= step;  
            } else {   
                this.scrollLeft += step;  
            }  
		}

var results=document.getElementById("results");

function refreshAll(){
	var postRequest = new XMLHttpRequest();
	var requestURL = '/votes/data';
	postRequest.open('GET', requestURL);
	postRequest.send();
	let voteData = null;
	postRequest.addEventListener('load', function (event) {
		if (event.target.status === 200) {
			var postResponse = event.target.responseText;
			voteData = JSON.parse(postResponse);
		} else {
		  alert('Error get vote date: ' + event.target.response);
		}
	for(var i =0; i<voteData.length;i++){
		Handlebars.partials = Handlebars.templates;
		var voteCardTemplate = Handlebars.templates.voteCard;
		var div=voteCardTemplate(voteData[i]);
		results.insertAdjacentHTML('beforeend',div);
		
	}
	newpostbuttonevent();})
}
function searchByText(value){
	var postRequest = new XMLHttpRequest();
	var requestURL = '/votes/data';
	postRequest.open('GET', requestURL);
	postRequest.send();
	let voteData = null;
	postRequest.addEventListener('load', function (event) {
		if (event.target.status === 200) {
			var postResponse = event.target.responseText;
			voteData = JSON.parse(postResponse);
		} else {
		  alert('Error get vote date: ' + event.target.response);
		}
	for(var i =0; i<voteData.length;i++){
		Handlebars.partials = Handlebars.templates;
		var voteCardTemplate = Handlebars.templates.voteCard;
		var description=voteData[i].description;
	   if(description.toLowerCase().indexOf(value.toLowerCase())>=0){
		var div=voteCardTemplate(voteData[i]);
		results.insertAdjacentHTML('beforeend',div);}
		
	}
	newpostbuttonevent();})
}

var searchText=document.getElementById("searchText");
searchText.onkeyup=function(){
	searchType.value="Any";
	if(searchText.value===""){
		while(results.firstChild) {
			results.removeChild(results.firstChild);
	}
		refreshAll();
	}
 else{
	while(results.firstChild) {
        results.removeChild(results.firstChild);
}
	var text=searchText.value;
	searchByText(text);}
};

function searchByType(value){
	var postRequest = new XMLHttpRequest();
	var requestURL = '/votes/data';
	postRequest.open('GET', requestURL);
	postRequest.send();
	let voteData = null;
	postRequest.addEventListener('load', function (event) {
		if (event.target.status === 200) {
			var postResponse = event.target.responseText;
			voteData = JSON.parse(postResponse);
		} else {
		  alert('Error get vote date: ' + event.target.response);
		}
	for(var i =0; i<voteData.length;i++){
		Handlebars.partials = Handlebars.templates;
		var voteCardTemplate = Handlebars.templates.voteCard;
		var type=voteData[i].type;
	   if(type===value){
		var div=voteCardTemplate(voteData[i]);
		results.insertAdjacentHTML('beforeend',div);
		
	}	
	}
	newpostbuttonevent();})
}

var searchType=document.getElementById("selectBox");
searchType.onchange=function(){
	if(searchType.value==="Any"){
		while(results.firstChild) {
			results.removeChild(results.firstChild);
	}
		refreshAll();
	}
 else{
	while(results.firstChild) {
        results.removeChild(results.firstChild);
}
	var text=searchType.value;
	searchByType(text);}
	newpostbuttonevent();
};
