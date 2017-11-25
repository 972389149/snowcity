$(function(){
    var nums=0;
    $("a").click(function (e) {   
        e.preventDefault(); 
    });
    //导航栏样式的改变
	$('.nav-tabs li').click(function(){
		for(var i=0; i<$('.nav-tabs li').length; i++){
            if($('.nav-tabs li')[i].className=='active'){
                $('.nav-tabs li')[i].className=' ';
            };
		}
		$('.nav-tabs li')[$(this).index()].className='active';
	});
})

//改变主显内容
$(function(){
    var CityName=Province;
    var mes=window.location.href.split('?');
    var mess=mes[1].split('&');
    $('.about h3').text('关于'+CityName.City[mess[1]]);
    $('.about p').text(CityName.Introduction[mess[1]]);
    $('.first-img').html('<img src="img/'+mess[0]+'/index3.jpg">');
    $('.sec-img').html('<img src="img/'+mess[0]+'/index4.jpg">');
    $('.third-img').html('<img src="img/'+mess[0]+'/index5.jpg">');
    $('.scroll').attr("style",'background:url(img/'+mess[0]+'/index2.jpg) no-repeat;background-size: 100% 100%');

                var Citys;
                switch(mess[1]){
                    case '0':
                    Citys=HaErBin;
                    break;
                    case '1':
                    Citys=YiChun;
                    break;
                    case '2':
                    Citys=JiLin;
                    break;
                    case '3':
                    Citys=ChanChun;
                    break;
                    case '4':
                    Citys=HuLun;
                    break;
                    case '5':
                    Citys=ZhangJia;
                    break;
                    case '6':
                    Citys=YanQing;
                    break;
                    case '7':
                    Citys=MuDan;
                    break;
                    case '8':
                    Citys=ShenYang;
                    break;
                    case '9':
                    Citys=WuLu;
                    break;
                    case '10':
                    Citys=ChangBai;
                    break;
                    case '11':
                    Citys=Tibet;
                    break;
                }

    $('.content ul li').click(function(){
        $('#water').empty();
        trip($(this).index(),Citys);
    })
})

//回到顶部
$('.to-top').toTop();
    //获取传过来的参数，匹配相对应的
    function trip(num,mess){    

        Citys=mess;
        if(num==0){
            window.location.reload();
        }else if(num==1){
            intro=Citys.View.intro;
            id=Citys.View.id;
            waterfall(intro,id,num);
        }else if(num==2){
            intro=Citys.Culture.intro;
            id=Citys.Culture.id;
            waterfall(intro,id,num);
        }else if(num==3){
            intro=Citys.Build.intro;
            id=Citys.Build.id;
            waterfall(intro,id,num);
        }
    }
    //实现非全部 的瀑布流布局(不循环)
    function waterfall(intro,id,num){
            htmls="<div class='containers'></div>";
            $('#water').append(htmls);
            html1="<div class='waterfalls'></div>";
            $('.containers').append(html1);
            $('#water').css('margin-left','10%');
            // 已弃用
            // var count=1;  用于解决c3瀑布流问题
            //完美解决css3瀑布流相同元素并排
            // window.onscroll=function(){
            //     if($(document).scrollTop() >= $(document).height() - $(window).height()){
            //         if(count%4!=0){
            //            gethtml(1,num);
            //            count=count+1;
            //         }else{
            //             gethtml(2,num);
            //             count=count+2;
            //         }
            //     }
            // }
            function gethtml(num){
                if(num==1){
                    num=1;
                }else if(num==2){
                    num=13;
                }else if(num==3){
                    num=25;
                }
                    for(var j=0;j<12;j++,num++){
                        if(intro[j].length>=17 && intro[j].length<=34){
                            var str1=intro[j].substring(0,17);
                            var str2=intro[j].substring(34,intro[j].length-1);
                            var strs=str1+'<br>'+str2; 
                        }else{
                            var str1=intro[j].substring(0,17);
                            var str2=intro[j].substring(17,50);
                            var strs=str1+'<br>'+str2+'...'; 
                        }
                        var html2='<div class="item"><img src="img/'+mess[0]+'/'+num+'.jpg"><p>'+id[j]+'<br><span style="font-size:14px;color:#797979">'+strs+'</span></p></div>'; 
                        $('.waterfalls').append(html2);
                    }
            }
            gethtml(num);
    }
