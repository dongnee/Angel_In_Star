/**
 * by MonsterDuang
 */
;(function($) {
    /**
     * 1, 썸네일 크기는 상위 컨테이너 크기와 동일합니다.
     * 2, 상위 컨테이너의 href 속성은 고화질 이미지 경로입니다.
     */
    $.fn.zoomImage = function(paras) {
        /**
         * 기본 매개변수
         */
        var defaultParas = {
            layerW: 300, // 마스크 너비
            layerH: 100, // 마스크 높이
            layerOpacity: 0.2, // 불투명도 마스크
            layerBgc: 'white', // 배경색 마스크
            showPanelW: 650, // 확대된 영역의 너비를 표시
            showPanelH: 420, // 확대/축소 영역 높이 표시
            marginL: 50, // 확대된 영역과 썸네일 오른쪽 사이의 거리
            marginT: 70 // 확대된 영역과 썸네일 위쪽 사이의 거리
        };

        paras = $.extend({}, defaultParas, paras);

        $(this).each(function() {
            var self = $(this).css({position: 'relative'});
            var selfOffset = self.offset();
            var imageW = self.width(); // 이미지 높이
            var imageH = self.height();

            self.find('img').css({
                width: '100%',
                height: '100%'
            });

            // 넓은 배율
            var wTimes = paras.showPanelW / paras.layerW;
            // 고배율
            var hTimes = paras.showPanelH / paras.layerH;

            // 사진 확대
            var img = $('<img>').attr('src', self.attr("href")).css({
                position: 'absolute',
                left: '0',
                top: '0',
                width: imageW * wTimes,
                height: imageH * hTimes
            }).attr('id', 'big-img');

            // 마스크
            var layer = $('<div>').css({
                display: 'none',
                position: 'absolute',
                left: '0',
                top: '0',
                backgroundColor: paras.layerBgc,
                width: paras.layerW,
                height: paras.layerH,
                opacity: paras.layerOpacity,
                border: '1px solid #ccc',
                cursor: 'crosshair'
            });

            // 영역 확대
            var showPanel = $('<div>').css({
                display: 'none',
                position: 'absolute',
                overflow: 'hidden',
                left: imageW + paras.marginL,
                top: paras.marginT,
                width: paras.showPanelW,
                height: paras.showPanelH
            }).append(img);

            self.append(layer).append(showPanel);

            self.on('mousemove', function(e) {
                // 축소판 컨테이너를 기준으로 한 마우스 좌표
                var x = e.pageX - selfOffset.left;
                var y = e.pageY - selfOffset.top;

                if(x <= paras.layerW / 2) {
                    x = 0;
                }else if(x >= imageW - paras.layerW / 2) {
                    x = imageW - paras.layerW;
                }else {
                    x = x - paras.layerW / 2;
                }

                if(y < paras.layerH / 2) {
                    y = 0;
                } else if(y >= imageH - paras.layerH / 2) {
                    y = imageH - paras.layerH;
                } else {
                    y = y - paras.layerH / 2;
                }

                layer.css({
                    left: x,
                    top: y
                });

                img.css({
                    left: -x * wTimes,
                    top: -y * hTimes
                });
            }).on('mouseenter', function() {
                layer.show();
                showPanel.show();
            }).on('mouseleave', function() {
                layer.hide();
                showPanel.hide();
            });
        });
    }
})(jQuery);
