(function(){
	/*--------------------------在小屏下显示导航-----------------------------------*/
	$('.my-down-list').click(function(){
		$('.my-link').slideToggle("normal");
	});
	/*--------------------------点击向下按钮(或IT技能)跳到“IT技能处”-------------------------------*/
	var aimHeight=parseInt($('#my_skills')[0].offsetTop);
	var h3Height=parseInt($('#my_skills').height());
	var scroll=aimHeight-3*h3Height;
	$('.my_down').click(function(){
		$('html,body').animate({scrollTop:scroll},800);
	});
	$('.to_my_skills').click(function(){
		$('html,body').animate({scrollTop:scroll},800);
	});
	/*-----------------------点击“作品集”跳到作品展示处------------------------*/
	var workHeight=parseInt($('#my_workers')[0].offsetTop);
	var reScroll=workHeight+3*h3Height;
	$('.to_my_works').click(function(){
		$('html,body').animate({scrollTop:reScroll},800);
	});
	/*---------------------------用js向html中写数据-------------------------------------*/
	var lang=['Javascript','HTML','CSS','JQuery','Bootstrap','Java'];
	var langRate=['78%','85%','80%','70%','60%','40%'];
	var parent=document.querySelector('.add_my_skills');
	var frag=document.createDocumentFragment();//创建文档片断
	for(var i=1;i<7;i++){
		var div_1=document.createElement('div');
		div_1.className='col-lg-2 col-md-4 col-sm-6 col-xs-12';
		var div_2=document.createElement('div');
		div_2.className='circle_out cr_0'+i;
		var div_3=document.createElement('div');
		div_3.className='circle_in';
		var p_1=document.createElement('p');
		p_1.innerHTML=lang[i-1];
		var p_2=document.createElement('p');
		p_2.innerHTML=langRate[i-1];
		div_1.appendChild(div_2);
		div_2.appendChild(div_3);
		div_3.appendChild(p_1);
		div_3.appendChild(p_2);
		frag.appendChild(div_1);
		parent.appendChild(frag);
	}
	/*-----------------------------用JQuery向html写数据--------------------------------------*/
	var worksTitle=['“私募股权”网站(PC端)','“私募股权”移动端','“爱心鱼”游戏','仿“天猫”商城首页','移动端web相册','学校官网','仿京东商城首页','待展示','待展示'];
	var worksIntro=['这是一个基于HTML、CSS、JavaScript的PC端页面，主要实现了首页、用户登录、注册这三个页面，其中首页轮播显示该网站的相关信息，用户登录页面采用了Ajax和Php来确定用户是否注册过，注册页面采用正则表达式对用户输入信息的合法性进行验证。','采用Media Query技术实现了对不同终端设备的良好适配，利用bootstrap中的栅格系统对页面进行整体布局，结合JQuery技术实现了当用户点击“发送验证码时”的倒计时效果，当用户输入信息全部合法时，会渐显出“忘记密码验证”页面。','这是一款基于HTML5开发的游戏，游戏中的背景、鱼、特效、海藻、得分都采用了Canvas的绘图API,利用了localStorage来存储用户每次游戏得分，从而显示历史最高分。海藻的绘制，不仅用到了绘图API还用到了二次贝塞尔曲线和正弦函数。',' 对于这个页面我主要实现了商品信息的轮播展示和二级菜单的显示，且这个页面是完全用原生JavaScript实现的交互。',' 这是一个纯移动端页面，采用Zepto.js实现了交互，页面中的小图片没有采用img标签，而是采用Canvas的drawImage()将图片画到相应的位置上，用来触发物理设备本身的GPU来做渲染，以达到页面优化的目的。',' 这是仿写的一个学校官网的部分页面，其中“学生入口”页面和“企业入口”页面功能相仿，但一个是用原生JavaScript实现的交互，另一个是用JQuery实现的交互，涉及到的交互有：隐藏、显示、轮播等。','利用HTML+CSS对页面经行了整体布局，采用javascript实现了用户交互，如：根据用户的选择实现图片切换，“配送至”区域采用javascript实现多标签页效果，结合HTML、CSS、javascript、数学知识实现当鼠标悬浮在商品展示图片上时的“放大镜”效果。','目前还该网站还在持续更新中，新的项目也正在进行中，一旦完成会立即更新此站点并在此处做相应的展示，敬请期待！','目前还该网站还在持续更新中，新的项目也正在进行中，一旦完成会立即更新此站点并在此处做相应的展示，敬请期待！'];
	var worksLink=['https://mujin2013.github.io/simu/login/login.html','https://mujin2013.github.io/forgetPwd/forgetPwd.html','https://mujin2013.github.io/tinyHeart/tinyHeart.html','https://mujin2013.github.io/tianmao/index.html','https://mujin2013.github.io/photo/photo.html','https://mujin2013.github.io/school/index/index.html','https://mujin2013.github.io/jd/jd.html','javascript:;','javascript:;'];
	var $workParent=$('.my_workers_imgs');
	for(var i=1;i<10;i++){
		var $h3=$('<h3>'+worksTitle[i-1]+'</h3>');
		var $p=$('<p>'+worksIntro[i-1]+'</p>');
		var $div_3=$('<div class="rel_produce"></div>');
		$div_3.append($h3);
		$div_3.append($p);
		var $div_2=$('<div class="my_txt_mask"></div>');
		var $div_1=$('<div class="my_txt_par"></div>');
		$div_1.append($div_2);
		$div_1.append($div_3);
		var $a=$('<a class="my_work_img work_img_0'+i+'" href="'+worksLink[i-1]+'"></a>');
		$a.append($div_1);
		var $li=$('<li class="col-md-4 col-sm-6 col-xs-12"></li>');
		$li.append($a);
		$workParent.append($li);
	}
})();