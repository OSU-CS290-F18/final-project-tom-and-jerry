var main = function(){
var postRequest = new XMLHttpRequest();
var requestURL = '/votes/data';
postRequest.open('GET', requestURL);
postRequest.send();
let voteData = null;
postRequest.addEventListener('load', function (event) {
    if (event.target.status === 200) {
        var postResponse = event.target.responseText;
        voteData = JSON.parse(postResponse);
        //console.log('voteData: ',voteData);
    } else {
      alert('Error get vote date: ' + event.target.response);
    }


for(var i=0;i<voteData.length;i++){
    var ctx = document.getElementById(voteData[i].chartid);
    var chartData=voteData[i].chartData;
    myChart = new Chart(ctx, chartData);
}

});
}
main();
setInterval('main()',10000);