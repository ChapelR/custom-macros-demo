(function (module, exports, define) {
    /*! gist-async - v2.0.2 - 2016-08-04 - https://github.com/razor-x/gist-async */(function(){"use strict";this.gistAsync=function(){var a;return(a=jQuery)(function(){var b,c,d,e,f,g;return b="https://gist.github.com",d=a("div[data-gist]"),e={},c=[],g=[],f=function(a){var b;b=document.createElement("link"),b.type="text/css",b.rel="stylesheet",b.href=a,document.getElementsByTagName("head")[0].appendChild(b)},d.addClass("loading"),d.each(function(b,c){var d;return c=a(c),d=c.data("gist"),null==e[d]&&(e[d]={targets:[]}),e[d].targets.push(c)}),a.each(e,function(c,d){return a.getJSON(b+"/"+c+".json?callback=?",function(b){var d,h,i;return h=e[c],h.data=b,i=h.data.stylesheet,g.indexOf(i)<0&&(g.push(i),f(i)),d=h.data.div,h.files=a(d).find(".gist-file"),h.outer=a(d).first().html(""),a(h.targets).each(function(b,c){var e,f,g;return e=c.data("gist-file"),e?(g=h.outer.clone(),f='<div class="gist-file">'+a(h.files.get(h.data.files.indexOf(e))).html()+"</div>",g.html(f)):g=a(d),g.hide(),c.fadeOut("fast",function(){return a(this).replaceWith(g),g.fadeIn()})})})})})}}).call(this);
}).call(window);

postdisplay['gists'] = function () {
    gistAsync();
};