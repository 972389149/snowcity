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
    $('.about h3').text('关于'+CityName.City[mes[mes.length-1]]);
    $('.about p').text(CityName.Introduction[mes[mes.length-1]]);   
})

//回到顶部
$('.to-top').toTop();

$(function(){
    $('.content ul li').click(function(){
        $('#water').empty();
        trip($(this).index());
    })
    //获取传过来的参数，匹配相对应的
    function trip(num){       
        var mes=window.location.href.split('?');
                switch(mes[mes.length-1]){
                    case "0":
                    var Citys=HaErBin;
                    break;
                    case "1":
                    var Citys=YiChun;
                    break;
                    case "2":
                    var Citys=JiLin;
                    break;
                    case "3":
                    var Citys=ChanChun;
                    break;
                    case "4":
                    var Citys=HuLun;
                    break;
                    case "5":
                    var Citys=ZhangJia;
                    break;
                    case '6':
                    var Citys=YanQing;
                    break;
                    case '7':
                    var Citys=MuDan;
                    break;
                    case '8':
                    var Citys=ShenYang;
                    break;
                    case '9':
                    var Citys=WuLu;
                    break;
                    case '10':
                    var Citys=HaErBin;
                    break;
                    case 11:
                    var Citys=HaErBin;
                    break;
                    case 12:
                    var Citys=HaErBin;
                    break;
                    case 13:
                    var Citys=HaErBin;
                    break;
                    case 14:
                    var Citys=HaErBin;
                    break;
                    case 15:
                    var Citys=HaErBin;
                    break;
                    case 16:
                    var Citys=HaErBin;
                    break;
                    case 17:
                    var Citys=HaErBin;
                    break;
                    case 18:
                    var Citys=HaErBin;
                    break;
                    case 19:
                    var Citys=HaErBin;
                    break;
                }
        if(num==0){
            window.location.reload();
        }else if(num==1){
            intro=Citys.View.intro;
            id=Citys.View.id;
            waterfall(intro,id,num);
            nums=1;
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
            $('#water').css('margin-left','0px');
            var count=1;  //用于解决c3瀑布流问题
            //完美解决css3瀑布流相同元素并排
            window.onscroll=function(){
                if($(document).scrollTop() >= $(document).height() - $(window).height()){
                    if(count%4!=0){
                       gethtml(1);
                       count=count+1;
                    }else{
                        gethtml(2);
                        count=count+2;
                    }
                }
            }
            function gethtml(numcount){
                for(var i=0;i<numcount;i++){
                    for(var j=0;j<12;j++){
                        if(intro[j].length>=17 && intro[j].length<=34){
                            var str1=intro[j].substring(0,17);
                            var str2=intro[j].substring(34,intro[j].length-1);
                            var strs=str1+'<br>'+str2; 
                        }else{
                            var str1=intro[j].substring(0,17);
                            var str2=intro[j].substring(17,50);
                            var strs=str1+'<br>'+str2+'...'; 
                        }
                        var html2='<div class="item"><img src="../img/'+(j+1)+'.jpg"><p>'+id[j]+'<br><span style="font-size:14px;color:#797979">'+strs+'</span></p></div>'; 
                        $('.waterfalls').append(html2);
                    }
                }
            }
            gethtml();
    }
});
