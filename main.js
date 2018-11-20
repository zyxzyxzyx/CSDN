//判断“阅读更多”按钮是否存在并模拟点击
if(exist('#btn-readmore')){
    exist('#btn-readmore').click()
}
//登录叉号的模拟点击
document.querySelector('body > div.pulllog-box > div > div > button.btn-close').click()

//广告的隐藏
var ads1_css='#mainBox > aside > div.csdn-tracking-statistics.mb8.box-shadow'
var ads1=document.querySelector(ads1_css);
var ads2=document.querySelector('#asideFooter > div:nth-child(1)');
// var ads2=document.querySelector('#mainBox > aside');

if(exist(ads1_css)){
    exist(ads1_css).style.display="none";
}
// ads1.style.display="none";
ads2.style.display="none";

document.body.onclick=moveRight;

// 判断元素是否存在
function exist(css) {
    if(document.querySelector(css)){
        return document.querySelector(css)
    }
    else{
        return false
    }
}
// 把底部滚动条挪到合适的位置
function moveRight() {
    document.documentElement.scrollLeft=390;
}

