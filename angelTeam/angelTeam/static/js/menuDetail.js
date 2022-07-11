//menuDetail.js


$(document).ready(function () {
  $("button[id='mylike_N']").click(function () {
    if($(this).text() == '좋아요') {
        $('#mylike_N').text('MY FAVORITE').css('font-size','12px');
        $('#mylike_N').css('background','#FE889D');
        alert('MY FAVORITE에 추가 되었습니다.');
    } else {
        $('#mylike_N').text('좋아요').css('font-size','13px');
        $('#mylike_N').css('background','pink');
        alert('MY FAVORITE에서 제외되었습니다.');
    }
  });
});