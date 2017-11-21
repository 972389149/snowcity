            var mes=window.location.href.split('?');
            var mess=mes[1].split('&');
            var nums=0;
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
                var html='<div class="box"><div class="boximg"><img src="img/'+mess[0]+'/'+(i+1)+'.jpg"><p>'+id[j]+'</p><p style="font-size:14px;color:#797979">'+strs+'</p></div></div>'; 
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
                $(".box").eq(i).css({"position":"absolute","top":minImgHeight+"px","left":($(".box").eq(index).offset().left-135)+"px"}); //瀑布流布局  
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
                 {"src":"img/"+mess[0]+"/1.jpg"},{"src":"img/"+mess[0]+"/2.jpg"},{"src":"img/"+mess[0]+"/3.jpg"},{"src":"img/"+mess[0]+"/4.jpg"},{"src":"img/"+mess[0]+"/5.jpg"},  
                 {"src":"img/"+mess[0]+"/6.jpg"},{"src":"img/"+mess[0]+"/7.jpg"},{"src":"img/"+mess[0]+"/8.jpg"},{"src":"img/"+mess[0]+"/9.jpg"},{"src":"img/"+mess[0]+"/10.jpg"},  
                 {"src":"img/"+mess[0]+"/11.jpg"},{"src":"img/"+mess[0]+"/12.jpg"},{"src":"img/"+mess[0]+"/13.jpg"},{"src":"img/"+mess[0]+"/14.jpg"},{"src":"img/"+mess[0]+"/15.jpg"},{"src":"img/"+mess[0]+"/16.jpg"},{"src":"img/"+mess[0]+"/17.jpg"},  
                 {"src":"img/"+mess[0]+"/18.jpg"},{"src":"img/"+mess[0]+"/19.jpg"},{"src":"img/"+mess[0]+"/20.jpg"},{"src":"img/"+mess[0]+"/21.jpg"},{"src":"img/"+mess[0]+"/22.jpg"},  
                 {"src":"img/"+mess[0]+"/23.jpg"},{"src":"img/"+mess[0]+"/24.jpg"},{"src":"img/"+mess[0]+"/25.jpg"},{"src":"img/"+mess[0]+"/26.jpg"},{"src":"img/"+mess[0]+"/27.jpg"},{"src":"img/"+mess[0]+"/28.jpg"},{"src":"img/"+mess[0]+"/29.jpg"},  
                 {"src":"img/"+mess[0]+"/30.jpg"},{"src":"img/"+mess[0]+"/31.jpg"},{"src":"img/"+mess[0]+"/32.jpg"},{"src":"img/"+mess[0]+"/33.jpg"},{"src":"img/"+mess[0]+"/34.jpg"},  
                 {"src":"img/"+mess[0]+"/35.jpg"},{"src":"img/"+mess[0]+"/36.jpg"}]};
            window.onscroll=function(){           //滚动条滚动执行
                if(checkScrollDirector()){
                    for(var i=0;i<36;i++){
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
                    }  
                    waterFlow();
                }   
            }
       }     