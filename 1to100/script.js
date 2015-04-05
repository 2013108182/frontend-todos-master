/* console.log('hello');

for(var i=1;i<=100;i++){
	alert(i);
	console.log(i);
} */

var num, total=0;

for (var isEnd=false;isEnd===false;) {

	num=prompt("숫자를 입력하세요");

	if (num===null) {
		alert("합은"+total+"입니다");
		isEnd=true;
	};
	else{
		total+=num;
	}
	
};


