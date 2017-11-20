//数据写入的部分
$(function(){
      $(".scene-name").eq(0).text(Province.City[0]);
      $(".scene-decription").eq(0).text(Province.Introduction[0]);
      $(".scene-name").eq(1).text(Province.City[1]);
      $(".scene-decription").eq(1).text(Province.Introduction[1]);
      $(".scene-name").eq(2).text(Province.City[2]);
      $(".scene-decription").eq(2).text(Province.Introduction[2]);

});
//数据写入的部分
$(function(){
            var CityName=Province;
            for(var i=0;i<12;i++){
                $('.bc_chgTitle')[i].innerHTML=CityName.City[i];
            }

            // for(var i=0;i<12;i++){
            //     if(CityName.Introduction[i].length>50){
            //         var  Str=CityName.Introduction[i].substring(0,50)+'...';
            //         $('.bd_long ul li p a')[i].innerHTML=Str;
            //     }else{
            //         $('.bd_long ul li p a')[i].innerHTML=CityName.Introduction[i]+'...';
            //     }
            // }

            for(var i=12;i<16;i++){
                $('#ul1 li h2')[i-12].innerHTML=CityName.City[i];
            }

            // for(var i=12;i<16;i++){
            //     if(CityName.Introduction[i].length>50){
            //         var  Str=CityName.Introduction[i].substring(0,50)+'...';
            //         $('#ul1 li p')[i-12].innerHTML=Str;
            //     }else{
            //         $('#ul1 li p')[i-12].innerHTML=CityName.Introduction[i]+'...';
            //     }
            // }

            for(var i=16;i<22;i++){
                $('#box li a span')[i-16].innerHTML=CityName.City[i];
            }
             
            //点击进去城市介绍详情
            $('.bd_c4l ul li').click(function(){
                window.location.href="./City.html"+'?'+$(this).index();
                alert('123')
            });

            $('.intro-block li').click(function(){
                window.location.href="./City.html"+'?'+($(this).index()-1);
            });

            $('#ul1 li').click(function(){
                window.location.href="./City.html"+'?'+($(this).index()+12);
            });

            $('#box li').click(function(){
                window.location.href="./City.html"+'?'+($(this).index()+16);
            })
});

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