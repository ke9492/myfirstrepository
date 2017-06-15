window.onload = function(){


var Tname = document.getElementById('exit').innerHTML;
		// var Tname="今天终于放假啦";
		//字体长度
var len=Tname.length;
document.write("<div id='a' style='font-size:40px;'>"+Tname+"</div>");
		//文字的颜色
var col=new Array("#FFCC00","#3333FF","#FFCC00","#FF0000","#FFCC00","#CC33FF");
var t=0;
function ziti(){
	var Strname="";
			//遍历字体
	for (i=0;i<len;i++){
				var Strname=Strname+"<font color="+col[t]+">"+Tname.substring(i,i+1)+"</font>";
		t++;
	    if (t==col.length){
			t=0;
		} 
    }
			
			//页面打印
	a.innerHTML=Strname;
			
			//定时器的启动
	setTimeout("ziti()",200);
}
        
		//调用函数
ziti();
}
