window.onload=function(){
		
	//轮播图
	var firstImg = $('#myplay #ul li').first().clone();
	$('#myplay #ul').append(firstImg).width($('#ul li').length*$('#ul img').width());

	var i = 0;
	var imgW = $('#ul img').width();
	var timer;
	$('#next').click(function(){

		moveImg(++i);

	});
	$('#prev').click(function(){
		moveImg(--i);
	});
	function moveImg(){
		console.log(i);
		if(i==-1){
			i = $('#myplay #ul li').length-2;
			$('#myplay #ul').css({left:($('#myplay #ul li').length-1)*-imgW});
			console.log(($('#myplay #ul')).left);
		}
		if(i==$('#myplay #ul li').length){
			
			$('#myplay #ul').css({left:0});
			i = 1;
			console.log(($('#myplay #ul')).left);
		}
		console.log(i);
		// $('#myplay #ul').css({left:i*-imgW},1000);
		$('#myplay #ul').animate({left:i*-imgW},2000);
		console.log(($('#myplay #ul')).offset().left);

		if(i==($('#ul li').length-1)){
			$('#ol li').eq(0).addClass('bg').siblings().removeClass('bg');
		}else{
			$('#ol li').eq(i).addClass('bg').siblings().removeClass('bg');
		}


	}

	function autoPlay(){
		timer = setInterval(function(){
			i++;
			moveImg();
		
		},3000);
	}
	autoPlay();
	$('#myplay #ol li').click(function(){
		i = $(this).index();
		moveImg();
	});

	$('#myplay').mouseover(function(){
		$('#myplay button').show();
		clearInterval(timer);
	}).mouseout(function(){
		autoPlay();
		$('#myplay button').hide();
	})
	

	// 滚动文字
var speed=30;
var colee2=document.getElementById("colee2");
var colee1=document.getElementById("colee1");
var colee=document.getElementById("colee");
colee2.innerHTML=colee1.innerHTML; //克隆colee1为colee2
// colee.innerHTML+=colee2.innerHTML;
 //克隆colee1为colee2
function Marquee1(){
//当滚动至colee1与colee2交界时
// colee1.innerHTML+=colee1.innerHTML;
if(colee2.offsetTop-colee.scrollTop<=0){
 colee.scrollTop-=colee1.offsetHeight; //colee跳到最顶端
 // colee.scrollTop=0;
 }else{
 colee.scrollTop++
}
}
var MyMar1=setInterval(Marquee1,speed)//设置定时器
// setInterval(Marquee1,500);
//鼠标移上时清除定时器达到滚动停止的目的

colee.onmouseover=function() {clearInterval(MyMar1)}
//鼠标移开时重设定时器
colee.onmouseout=function(){MyMar1=setInterval(Marquee1,speed)} 

	}
