//박스 오피스 데이터 가져오기

(function(){

var API;


searchButton.addEventListener('click', function(){
	var searchValue = searchWindow.value;
	searchWindow.value = '';
	API = 'http://apis.daum.net/search/board?apikey=3dcee193ff3447ade308264b8f36fc07&q='+searchValue+'&output=json';
	jsonp();

});


function jsonp(){

var listTemplate = $('listTemplate').innerHTML;
var searchWindow = $('searchWindow');
var searchButton = $('searchButton');


console.log(listTemplate);
getJSON(API, function(Data){
  console.log(Data);

  // 템플릿 가져와서 parse
  var html = tmpl(listTemplate, {list:boxOfficeData.channel.item});

  //parse한 html을 $wrap 넣어주기
  $('wrap').innerHTML = html;

});

};

})();
