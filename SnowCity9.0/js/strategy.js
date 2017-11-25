

//点击切换

$(function(){
    $(".p2").click(function(){                                 //点击p2时，改变p1，p2的样式
    	$(this).css("color","#ff8a00");                        //article_a消失，article_b显示
    	$(".p1").css("color","black");
        $(".article_a").css("display","none"); 
        $(".article_b").css("display","block");

    })
    $(".p1").click(function(){                                 //点击p1时，改变p1,p2的样式
    	$(this).css("color","#ff8a00");
    	$(".p2").css("color","black");                         //article_b消失，article_b消失
        $(".article_a").css("display","block");
        $(".article_b").css("display","none");

    })
})



//点击加载更多的原理

$(function(){
	var Height=$(".article_a").height();
	var i=1;
	$(".jia").click(function(){                           //鼠标第一次点击时，显示两部分内容，article_a的高度增加500px;
		if (i==1) {
		  $(".main_e").css("display","block");
		  $(".main_f").css("display","block");
		  $(".article_a").height(Height+500);
	   }
	  if (i==2) {
		  $(".main_g").css("display","block");          //鼠标第二次点击时，显示两部分内容，article_a的高度增加1000px;
		  $(".main_h").css("display","block")
		  $(".article_a").height(Height+1000);
	   	}
	  if (i==3) {
		  $(".main_i").css("display","block");              //鼠标第三次点击时，显示两部分内容，article_a的高度增加1500px;
		  $(".main_j").css("display","block")
		  $(".article_a").height(Height+1500);
	  }
	  if (i==4) {                                      //第四次点击时，弹出
	  	  alert("没有更多了！");
	  	  $(".jia").css("display","none")               //“点击加载”的元素消失，article_a高度减小80；
          $(".article_a").height(Height-80);
	  }
	  i++
    });
})




//点赞的实现方法
$(function(){
	$(".part img").click(function(){                            //点击时，改变“点赞”这个图标的图片路径
		$(this).attr("src","img/j1.png");
	})
})




//红色字体加一特效
$(function(){                                          //与article1中实现"红色数字加一"的点赞特效相同
	var _click_count = 0;
    $(".part").bind("click", function(e) { 
    var $i = $("<b>").text("+" + "1"); 
    var x = e.pageX,
        y = e.pageY;
    $i.css({
        "z-index":2,
        "top": y - 15,
        "left": x,
        "position": "absolute",
        "color": "red"
    });
    $("body").append($i);
    $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        }
    );
});
})
