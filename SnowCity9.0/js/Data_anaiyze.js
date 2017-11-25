$(function(){

var data={
	"img":[
	   "img/ChanChun/index.jpg",
	   "img/ChangBai/index.jpg",
	   "img/HaErBin/index.jpg",
	   "img/HuLu/index.jpg",
	   "img/JiLin/index.jpg",
	   "img/MuDan/index.jpg",
	   "img/ShenYang/index.jpg",
	   "img/Tibet/index.jpg",
	   "img/WuLu/index.jpg",
	   "img/YanQing/index.jpg",
	   "img/YiChun/index.jpg",
	   "img/Zhangjia/index.jpg",	   
	],
	"title":["长春","长白山","哈尔滨","呼伦贝尔","吉林","牡丹江","沈阳","西藏","乌鲁木齐","延庆","伊春","张家口"],
	"description":[
	   "2017年长春冰雪旅游数据统计分析",
	   "2017年长白山冰雪旅游数据统计分析",
	   "2017年哈尔滨冰雪旅游数据统计分析",
	   "2017年呼伦贝尔冰雪旅游数据统计分析",
	   "2017年吉林冰雪旅游数据统计分析",
	   "2017年牡丹江冰雪旅游数据统计分析",
	   "2017年沈阳冰雪旅游数据统计分析",
	   "2017年西藏冰雪旅游数据统计分析",
	   "2017年乌鲁木齐冰雪旅游数据统计分析",
	   "2017年延庆冰雪旅游数据统计分析",
	   "2017年伊春冰雪旅游数据统计分析",
	   "2017年张家口冰雪旅游数据统计分析"
	]
}




function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
};
var query=GetQueryString("id");
    $(".page-title").text(data.description[query]);
    $(".total").attr("src",data.img[query]);
    $(".admin_title").text(data.title[query]);
})