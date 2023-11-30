var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

GoSlideshow=function(b,a){var c=this;this.dragging=false;this.track_index=0;this.track_x=0;this.last_drag_x=0;this.slide_param=a;this.$container=$(b);this.$track=$("<div />").addClass("slideshow-track");this.$container.html(this.$track);this.initImage();setInterval(function(){c.autoPlay()},1000/this.slide_param.slide_speed_framerate);this.$track.on("mousedown",function(d){d.preventDefault();c.dragging=true;c.last_drag_x=d.pageX});this.$track.on("mouseup",function(d){d.preventDefault();c.dragging=false});this.$container.on("mousemove",function(d){c.dragTrack(d.pageX)});this.$container.on("mouseleave",function(d){c.dragging=false})};GoSlideshow.prototype={initImage:function(){this.$track.empty();var c=0;for(var b=0,a=this.slide_param.slide_images.length;b<a;++b){if(b+1==a){this.$track.prepend(this.slide_param.slide_images[b]["el"]);this.track_index=b}else{this.$track.append(this.slide_param.slide_images[b]["el"])}c+=this.slide_param.slide_images[b]["width"]}this.track_x=-1*this.slide_param.slide_images[this.track_index]["width"];this.$track.css("width",c).css("left",this.track_x)},autoPlay:function(){if(!this.dragging){var a=-1*this.slide_param.slide_speed/this.slide_param.slide_speed_framerate;this._moveTrack(a)}},dragTrack:function(b){if(this.dragging&&(b!=this.last_drag_x)){var a=b-this.last_drag_x;this.last_drag_x=b;this._moveTrack(a)}},_moveTrack:function(a){this.track_x+=a;this.$track.css("left",this.track_x);if(0>=a){if(this.slide_param.slide_images[this.track_index]["width"]+this.track_x<0){this.$track.append(this.slide_param.slide_images[this.track_index]["el"]);this.track_x+=this.slide_param.slide_images[this.track_index]["width"];this.$track.css("left",this.track_x);++this.track_index;if(this.track_index>=this.slide_param.slide_images.length){this.track_index=0}}}else{if(this.slide_param.slide_images[this.track_index]["width"]+this.track_x>0){--this.track_index;if(this.track_index<0){this.track_index=this.slide_param.slide_images.length-1}this.$track.prepend(this.slide_param.slide_images[this.track_index]["el"]);this.track_x-=this.slide_param.slide_images[this.track_index]["width"];this.$track.css("left",this.track_x)}}}};

}
/*
     FILE ARCHIVED ON 00:58:04 Jan 04, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:37:11 Nov 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 98.774
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.085
  cdx.remote: 0.062
  esindex: 0.01
  LoadShardBlock: 56.629 (3)
  PetaboxLoader3.datanode: 65.891 (4)
  load_resource: 69.104
  PetaboxLoader3.resolve: 42.413
*/