/**
 * Created by rogue on 2018/1/15.
 */

window.onload = function () {

    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    // 当音乐播放停止时候,自动停止光转动效果
    audio.addEventListener("ended", function (event) {
        music.setAttribute("class", "");
    }, false);


    // 点击音乐图标控制音乐播放和暂停
    // music.onclick = function () {
    //     if(audio.paused) {
    //         audio.play()
    //         this.setAttribute("class", "play")
    //         // this.style.animationPlayState = "running";
    //         // this.style.webkitanimationPlayState = "running";
    //         return;
    //     }
    //
    //     audio.pause()
    //     this.setAttribute("class", "")
    //     // this.style.animationPlayState = "paused";
    //     // this.style.webkitanimationPlayState = "paused";
    // }
    music.addEventListener("touchstart", function (event) {
        if(audio.paused) {
            audio.play();
            this.setAttribute("class", "play");
            return;
        }
        audio.pause();
        this.setAttribute("class", "");
    }, false);

    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";

        setTimeout(function () {
            page2.setAttribute("class", "page fadeout");
            page3.setAttribute("class", "page fadein");
        }, 5500);
    }, false);
};

