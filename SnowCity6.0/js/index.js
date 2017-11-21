
// 数据写入部分
$(function(){
    // 景点推荐前三个数据写入
    $('.intro-block li').click(function(){
        window.location.href="../SnowCity6.0/City.html"+'?'+checkindexinfo($(this).index()+4)+'&'+($(this).index()+4);
    })

    // 景点推荐后四个数据写入
    $('#ul1 li').click(function(){
        window.location.href="../SnowCity6.0/City.html"+'?'+checkindexinfo($(this).index()+8)+'&'+($(this).index()+8);
    })
})

//计算出index所对应的城市名称 
function checkindexinfo(index){
    var CityName;
    switch(index){
        case 0:
        CityName='HaErBin';
        break;
        case 1:
        CityName='YiChun';
        break;
        case 2:
        CityName='JiLin';
        break;
        case 3:
        CityName='ChanChun';
        break;
        case 4:
        CityName='HuLun';
        break;
        case 5:
        CityName='ZhangJia';
        break;
        case 6:
        CityName='YanQing';
        break;
        case 7:
        CityName='MuDan';
        break;
        case 8:
        CityName='ShenYang';
        break;
        case 9:
        CityName='WuLu';
        break;
        case 10:
        CityName='ChangBai';
        break;
        case 11:
        CityName='Tibet';
        break;
    }
    return CityName;
}
/*
 * 模糊效果鼠标悬停清晰
 */
$(function(){
    var aUl= document.getElementById("ul1");
    var aLi = aUl.getElementsByTagName('li');
    var timer = null;
    var i = 0;
    for (i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
            clearTimeout(timer);
            for (i = 0; i < aLi.length; i++) {
                aLi[i].className = 'back';
            }
            this.className = 'active';
        };
        aLi[i].onmouseout = function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
                for (i = 0; i < aLi.length; i++) {
                    aLi[i].className = 'Bli';
                }
            }, 200);
        };
    }
})