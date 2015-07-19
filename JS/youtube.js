var videos = document.getElementsByClassName("youtube");

for (var i=0; i<videos.length; i++) {

    var youtube = videos[i];

    var img = document.createElement("img");
    img.setAttribute("src", "http://i.ytimg.com/vi/"
        + youtube.id + "/hqdefault.jpg");
    img.setAttribute("class", "thumb");

    var play = document.createElement("div");
    play.setAttribute("class","play");

    youtube.appendChild(img);
    youtube.appendChild(play);

    youtube.onclick = function() {

        var iframe = document.createElement("iframe");
        iframe.setAttribute("src",
            "https://www.youtube.com/embed/" + this.id
                + "?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute('class','exampleInfo');
        iframe.style.width  = this.style.width;
        iframe.style.height = this.style.height;

        this.parentNode.replaceChild(iframe, this);
        exampleHoverFunctionality();
    };
}