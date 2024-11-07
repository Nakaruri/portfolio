//監視対象が範囲内に現れたら実行する動作
const showimg1 = (entries) =>{
    const keyframes ={
        translate:['0 50px', 0],
    };
    entries[0].target.animate(keyframes,1200);
};
//監視ロボットの設定
const img1Observser = new IntersectionObserver(showimg1);

//#img1を監視するよう指示
img1Observser.observe(document.querySelector('#img1'));
/*img2
=======================================================---*/
//監視対象が範囲内に現れたら実行する動作
const showimg2 = (entries) =>{
    const keyframes ={
        translate:['0 50px', 0],
    };
    entries[0].target.animate(keyframes,1200);
};
//監視ロボットの設定
const img2Observser = new IntersectionObserver(showimg2);

//#img1を監視するよう指示
img2Observser.observe(document.querySelector('#img2'));