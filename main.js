//阅读更多的模拟点击

if(exist('#btn-readmore')){
    exist('#btn-readmore').click()
}
//登录叉号的模拟点击
document.querySelector('body > div.pulllog-box > div > div > button.btn-close').click()

//广告的隐藏
var ads1=document.querySelector('#mainBox > aside > div.csdn-tracking-statistics.mb8.box-shadow');
var ads2=document.querySelector('#asideFooter > div:nth-child(1)');

ads1.style.display='none'
ads2.style.display='none'


function exist(css) {
    if(document.querySelector(css)){
        return document.querySelector(css)
    }
    else{
        return false
    }
}

document.body.onclick=moveRight

function moveRight() {
    document.documentElement.scrollLeft=370;
}