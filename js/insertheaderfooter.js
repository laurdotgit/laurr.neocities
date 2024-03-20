class navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<center>
  <p>
    --{<a href="https://laurr.neocities.org/index.html">Home</a>}--{<a href="https://laurr.neocities.org/blog.html">Blog</a>}--{<a href="https://laurr.neocities.org/writingchallenge2024/">WritChal24</a>}--{<a href="https://laurr.neocities.org/friends.html">Cool People</a>}--{<a href="https://laurr.neocities.org/template.html">Cat</a>}--
  </p>
</center>

        `
    }
}

class webringcontent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

  <center>
    <p>
      <img alt="SILLY" src="https://laurr.neocities.org/gifs/blinkie-silly.gif" width="120" height="20">
      <img alt="this user is trains" src="https://laurr.neocities.org/gifs/blinkie-trans-pride.gif" width="120" height="20">
      <img alt="I love you guys :)" src="https://laurr.neocities.org/gifs/blinkie-smileyshug.gif" width="120" height="20">
    <br>
    This website is in a webring!<br>
    <a href="https://reverie.zone/"><<-&nbsp;blair&nbsp;&nbsp;</a> | <a href="https://behind.neocities.org">&nbsp;&nbsp;&nbsp;lou&nbsp;&nbsp;->></a>
    <br>
      <a href="https://laurr.neocities.org/feed.xml" target="_blank"><img alt="Link to my RSS feed" src="https://laurr.neocities.org/gifs/rss_pic.gif" width="60" height="20"></a>
      <a href="http://lu.tiny-universes.net/index2.html" target="_blank"><img alt="maybe you should make your own website - cool" src="https://laurr.neocities.org/images/stamp-yrownwebsite.png"></a>
    </p>
  </center>

        `
    }
}
window.customElements.define('webring-', webringcontent)
window.customElements.define('nav-bar', navbar)