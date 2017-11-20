
    nums=0;
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
            var intro=Citys.View.intro.concat(Citys.Culture.intro,Citys.Build.intro);
            var id=Citys.View.id.concat(Citys.Culture.id,Citys.Build.id); 
            for(var i=0,j=0;j<36;i++,j++){
                if(intro[j].length>=12 && intro[j].length<=24){
                            var str1=intro[j].substring(0,15);
                            var str2=intro[j].substring(15,intro[j].length-1);
                            var strs=str1+'<br>'+str2; 
                        }else{
                            var str1=intro[j].substring(0,15);
                            var str2=intro[j].substring(15,28);
                            var strs=str1+'<br>'+str2+'...'; 
                        }
                if(i<=11){
                }
                else if(i>11 && i<23){
                    i=i-11;
                }else if(i>=23){
                    i=i-23;                   
                }
                var html='<div class="box"><div class="boximg"><img src="img/'+(i+1)+'.jpg"><p>'+id[j]+'</p><p style="font-size:14px;color:#797979">'+strs+'</p></div></div>'; 
                $('.container').eq(nums).append(html);
            }



       var imgWidth=$(".box").innerWidth(); //获得每个div的宽度，包括内边距  
       var screenWidth=$(window).width();  //获得浏览器可视区域的宽度  
       var num=Math.floor(screenWidth/imgWidth);  //计算一行可以放几个div  
       $(".container").eq(nums).css({"width":num*imgWidth+"px","margin":"0 auto"}); //根据每行放的div的总长来给容器一个宽度，然后居中显示  
       function waterFlow(){  
          var arr=[]; //定义一个数组  
          for(var i=0;i<$(".box").length;i++){  
            if(i<num){             //一行显示num个div,将第一行的每个div高度写入数组  
                arr[i]=$(".box").eq(i).innerHeight();  
            }else{  
                var minImgHeight=Math.min.apply(null,arr);  //取得数组中最小高度的div  
                var index=getMinIndex(arr,minImgHeight);    //取得数组中最小高度的div的索引  
                $(".box").eq(i).css({"position":"absolute","top":minImgHeight+"px","left":($(".box").eq(index).offset().left-130)+"px"}); //瀑布流布局  
                arr[index]+=$(".box").eq(i).innerHeight();  //将布局好的该div的高度和该div上面的div高度相加，重新放入数组  
            }  
          }  
       }  
       function getMinIndex(arr,min){       //取得数组中最小高度的div的索引  
           for(var i in arr){  
            if(arr[i]==min){  
                return i;  
            }  
           }  
       }  
        function checkScrollDirector(){      //判断滚动条是否滑到底部  
            var flag=0;  
            if($(document).scrollTop()+$(window).height()>=$(document).height()){  
                flag=1;  
            }     
            return flag;           
        }  
        console.log($(document).height())  
        console.log($(window).height())  
       window.onload=function(){  
        waterFlow();     //图片加载完毕执行  
        var json={"data":[  
                 {"src":"img/1.jpg"},{"src":"img/2.jpg"},{"src":"img/3.jpg"},{"src":"img/4.jpg"},{"src":"img/5.jpg"},  
                 {"src":"img/6.jpg"},{"src":"img/7.jpg"},{"src":"img/8.jpg"},{"src":"img/9.jpg"},{"src":"img/10.jpg"},  
                 {"src":"img/11.jpg"},{"src":"img/12.jpg"},{"src":"img/1.jpg"},{"src":"img/2.jpg"},{"src":"img/3.jpg"},{"src":"img/4.jpg"},{"src":"img/5.jpg"},  
                 {"src":"img/6.jpg"},{"src":"img/7.jpg"},{"src":"img/8.jpg"},{"src":"img/9.jpg"},{"src":"img/10.jpg"},  
                 {"src":"img/11.jpg"},{"src":"img/12.jpg"},{"src":"img/1.jpg"},{"src":"img/2.jpg"},{"src":"img/3.jpg"},{"src":"img/4.jpg"},{"src":"img/5.jpg"},  
                 {"src":"img/6.jpg"},{"src":"img/7.jpg"},{"src":"img/8.jpg"},{"src":"img/9.jpg"},{"src":"img/10.jpg"},  
                 {"src":"img/11.jpg"},{"src":"img/12.jpg"}]};
            window.onscroll=function(){           //滚动条滚动执行
                if(checkScrollDirector()){
                    for(var i=0;i<12;i++){
                        if(intro[i].length>=17 && intro[i].length<=34){
                            var str1=intro[i].substring(0,17);
                            var str2=intro[i].substring(17,intro[i].length-1);
                            var strs=str1+'<br>'+str2; 
                        }else{
                            var str1=intro[i].substring(0,17);
                            var str2=intro[i].substring(17,34);
                            var strs=str1+'<br>'+str2+'...'; 
                        }  
                        var html="<div class='box'><div class='boximg'><img src="+json.data[i].src+"><p>"+id[i]+"</p><p style='font-size:14px;color:#797979'>"+strs+"</p></div></div>";  
                        $(".container").eq(nums).append(html);                       //向容器内一次性添加12个图片  
                        console.log(1);  
                    }  
                    waterFlow();
                }   
            }
       }     