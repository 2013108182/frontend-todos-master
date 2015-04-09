//박스 오피스 데이터 가져오기

(function(){

var boxOfficeAPI;

searchButton.onclick = function(){
	var searchText = searchBar.value;
	searchBar.value = '';
	boxOfficeAPI = 'http://apis.daum.net/search/web?apikey=8cd181d1334b0f9917aea2f24f2c2979&q='+searchText+'&output=json';
	jsonp();
};


function jsonp(){

var listTemplate = $('listTemplate').innerHTML;
var searchBar = $('searchBar');
var searchButton = $('searchButton');


console.log(listTemplate);
getJSON(boxOfficeAPI, function(boxOfficeData){
  console.log(boxOfficeData);

  // 템플릿 가져와서 parse
  var html = tmpl(listTemplate, {list:boxOfficeData.channel.item});

  //parse한 html을 $wrap 넣어주기
  $('wrap').innerHTML = html;

});

};

})();
