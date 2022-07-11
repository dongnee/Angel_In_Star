/* answer.js */
/* 질문 입력창 누르면 답변이 나오는 형태로 구현 */


var bDisplay = true;
function doDisplay(){
	var con = document.getElementById("answer");
	if(con.style.display=='none'){
		con.style.display = 'block';
	}else{
		con.style.display = 'none';
	}
};