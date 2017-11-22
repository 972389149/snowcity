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
