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

;// bundle: page___8ec112533eb4589a55e7524c04e56761_m
;// files: GPTAdScript.js, GenericConfirmation.js, jquery.simplemodal-1.3.5.js, GenericModal.js

;// GPTAdScript.js
var googletag=googletag||{};googletag.cmd=googletag.cmd||[],function(){var n=document.createElement("script"),i,t;n.async=!0,n.type="text/javascript",i="https:"==document.location.protocol,n.src=(i?"https:":"http:")+"//web.archive.org/web/20140218124453/http://www.googletagservices.com/tag/js/gpt.js",t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)}();

;// GenericConfirmation.js
typeof Roblox=="undefined"&&(Roblox={}),typeof Roblox.GenericConfirmation=="undefined"&&(Roblox.GenericConfirmation=function(){function s(n){var c={titleText:"",bodyContent:"",footerText:"",acceptText:Roblox.GenericConfirmation.Resources.yes,declineText:Roblox.GenericConfirmation.Resources.No,acceptColor:u,declineColor:r,xToCancel:!1,onAccept:function(){return!1},onDecline:function(){return!1},onCancel:function(){return!1},imageUrl:null,allowHtmlContentInBody:!1,allowHtmlContentInFooter:!1,dismissable:!0,fieldValidationRequired:!1,onOpenCallback:function(){}},o,e,h,s;n=$.extend({},c,n),i.overlayClose=n.dismissable,i.escClose=n.dismissable,o=$("[roblox-confirm-btn]"),o.html(n.acceptText+"<span class='btn-text'>"+n.acceptText+"</span>"),o.attr("class","btn-large "+n.acceptColor),o.unbind(),o.bind("click",function(){return n.fieldValidationRequired?f(n.onAccept):t(n.onAccept),!1}),e=$("[roblox-decline-btn]"),e.html(n.declineText+"<span class='btn-text'>"+n.declineText+"</span>"),e.attr("class","btn-large "+n.declineColor),e.unbind(),e.bind("click",function(){return t(n.onDecline),!1}),$('[data-modal-handle="confirmation"] div.Title').text(n.titleText),h=$("[data-modal-handle='confirmation']"),n.imageUrl==null?h.addClass("noImage"):(h.find("img.GenericModalImage").attr("src",n.imageUrl),h.removeClass("noImage")),n.allowHtmlContentInBody?$("[data-modal-handle='confirmation'] div.Message").html(n.bodyContent):$("[data-modal-handle='confirmation'] div.Message").text(n.bodyContent),$.trim(n.footerText)==""?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').hide():$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').show(),n.allowHtmlContentInFooter?$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').html(n.footerText):$('[data-modal-handle="confirmation"] div.ConfirmationModalFooter').text(n.footerText),$("[data-modal-handle='confirmation']").modal(i),s=$("a.genericmodal-close"),s.unbind(),s.bind("click",function(){return t(n.onCancel),!1}),n.xToCancel||s.hide(),n.onOpenCallback()}function n(n){typeof n!="undefined"?$.modal.close(n):$.modal.close()}function t(t){n(),typeof t=="function"&&t()}function f(t){if(typeof t=="function"){var i=t();if(i!=="undefined"&&i==!1)return!1}n()}var o="btn-primary",u="btn-neutral",r="btn-negative",e="btn-none",i={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"}};return{open:s,close:n,green:o,blue:u,gray:r,none:e}}());

;// jquery.simplemodal-1.3.5.js
(function(n){var i=n.browser.msie&&parseInt(n.browser.version)==6&&typeof window.XMLHttpRequest!="object",r=!1,t=[];n.modal=function(t,i){return n.modal.impl.init(t,i)},n.modal.close=function(){n.modal.impl.close()},n.fn.modal=function(t){return n.modal.impl.init(this,t)},n.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1e5,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null},n.modal.impl={o:null,d:{},init:function(t,i){var r=this;if(r.d.data)return!1;if(r.o=n.extend({},n.modal.defaults,i),r.zIndex=r.o.zIndex,r.occb=!1,typeof t=="object")t=t instanceof jQuery?t:n(t),r.d.placeholder=!1,t.parent().parent().size()>0&&(t.before(n("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),r.d.placeholder=!0,r.display=t.css("display"),r.o.persist||(r.d.orig=t.clone(!0)));else if(typeof t=="string"||typeof t=="number")t=n("<div></div>").html(t);else return alert("SimpleModal Error: Unsupported data type: "+typeof t),r;return r.create(t),t=null,r.open(),n.isFunction(r.o.onShow)&&r.o.onShow.apply(r,[r.d]),r},create:function(r){var u=this;t=u.getDimensions(),u.o.modal&&i&&(u.d.iframe=n('<iframe src="javascript:false;"></iframe>').css(n.extend(u.o.iframeCss,{display:"none",opacity:0,position:"fixed",height:t[0],width:t[1],zIndex:u.o.zIndex,top:0,left:0})).appendTo(u.o.appendTo)),u.d.overlay=n("<div></div>").attr("id",u.o.overlayId).addClass("simplemodal-overlay").css(n.extend(u.o.overlayCss,{display:"none",opacity:u.o.opacity/100,height:u.o.modal?t[0]:0,width:u.o.modal?t[1]:0,position:"fixed",left:0,top:0,zIndex:u.o.zIndex+1})).appendTo(u.o.appendTo),u.d.container=n("<div></div>").attr("id",u.o.containerId).addClass("simplemodal-container").css(n.extend(u.o.containerCss,{display:"none",position:"fixed",zIndex:u.o.zIndex+2})).append(u.o.close&&u.o.closeHTML?n(u.o.closeHTML).addClass(u.o.closeClass):"").appendTo(u.o.appendTo),u.d.wrap=n("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%",overflow:"visible"}).appendTo(u.d.container),u.d.data=r.attr("id",r.attr("id")||u.o.dataId).addClass("simplemodal-data").css(n.extend(u.o.dataCss,{display:"none"})).appendTo("body"),r=null,u.setContainerDimensions(),u.d.data.appendTo(u.d.wrap),i&&u.fixIE()},bindEvents:function(){var r=this;n("."+r.o.closeClass).bind("click.simplemodal",function(n){n.preventDefault(),r.close()}),r.o.modal&&r.o.close&&r.o.overlayClose&&r.d.overlay.bind("click.simplemodal",function(n){n.preventDefault(),r.close()}),n(document).bind("keydown.simplemodal",function(n){r.o.modal&&r.o.focus&&n.keyCode==9?r.watchTab(n):r.o.close&&r.o.escClose&&n.keyCode==27&&(n.preventDefault(),r.close())}),n(window).bind("resize.simplemodal",function(){t=r.getDimensions(),r.setContainerDimensions(!0),i?r.fixIE():r.o.modal&&(r.d.iframe&&r.d.iframe.css({height:t[0],width:t[1]}),r.d.overlay.css({height:t[0],width:t[1]}))})},unbindEvents:function(){n("."+this.o.closeClass).unbind("click.simplemodal"),n(document).unbind("keydown.simplemodal"),n(window).unbind("resize.simplemodal"),this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var i=this,t=i.o.position;n.each([i.d.iframe||null,i.o.modal?i.d.overlay:null,i.d.container],function(n,i){var l,c,o,e;if(i){var s="document.body.clientHeight",h="document.body.clientWidth",b="document.body.scrollHeight",a="document.body.scrollLeft",v="document.body.scrollTop",p="document.body.scrollWidth",y="document.documentElement.clientHeight",w="document.documentElement.clientWidth",u="document.documentElement.scrollLeft",f="document.documentElement.scrollTop",r=i[0].style;r.position="absolute",n<2?(r.removeExpression("height"),r.removeExpression("width"),r.setExpression("height",""+b+" > "+s+" ? "+b+" : "+s+' + "px"'),r.setExpression("width",""+p+" > "+h+" ? "+p+" : "+h+' + "px"')):(t&&t.constructor==Array?(o=t[0]?typeof t[0]=="number"?t[0].toString():t[0].replace(/px/,""):i.css("top").replace(/px/,""),l=o.indexOf("%")==-1?o+" + (t = "+f+" ? "+f+" : "+v+') + "px"':parseInt(o.replace(/%/,""))+" * (("+y+" || "+s+") / 100) + (t = "+f+" ? "+f+" : "+v+') + "px"',t[1]&&(e=typeof t[1]=="number"?t[1].toString():t[1].replace(/px/,""),c=e.indexOf("%")==-1?e+" + (t = "+u+" ? "+u+" : "+a+') + "px"':parseInt(e.replace(/%/,""))+" * (("+w+" || "+h+") / 100) + (t = "+u+" ? "+u+" : "+a+') + "px"')):(l="("+y+" || "+s+") / 2 - (this.offsetHeight / 2) + (t = "+f+" ? "+f+" : "+v+') + "px"',c="("+w+" || "+h+") / 2 - (this.offsetWidth / 2) + (t = "+u+" ? "+u+" : "+a+') + "px"'),r.removeExpression("top"),r.removeExpression("left"),r.setExpression("top",l),r.setExpression("left",c))}})},focus:function(t){var r=this,u=t||"first",i=n(":input:enabled:visible:"+u,r.d.wrap);i.length>0?i.focus():r.d.wrap.focus()},getDimensions:function(){var t=n(window),i=n.browser.opera&&n.browser.version>"9.5"&&n.fn.jquery<="1.2.6"?document.documentElement.clientHeight:n.browser.opera&&n.browser.version<"9.5"&&n.fn.jquery>"1.2.6"?window.innerHeight:t.height();return[i,t.width()]},getVal:function(n){return n=="auto"?0:n.indexOf("%")>0?n:parseInt(n.replace(/px/,""))},setContainerDimensions:function(i){var r=this;if(!i||i&&r.o.autoResize){var f=n.browser.opera?r.d.container.height():r.getVal(r.d.container.css("height")),u=n.browser.opera?r.d.container.width():r.getVal(r.d.container.css("width")),s=r.d.data.outerHeight(!0),h=r.d.data.outerWidth(!0),e=r.o.maxHeight&&r.o.maxHeight<t[0]?r.o.maxHeight:t[0],o=r.o.maxWidth&&r.o.maxWidth<t[1]?r.o.maxWidth:t[1];f=f?f>e?e:f:s?s>e?e:s<r.o.minHeight?r.o.minHeight:s:r.o.minHeight,u=u?u>o?o:u:h?h>o?o:h<r.o.minWidth?r.o.minWidth:h:r.o.minWidth,r.d.container.css({height:f,width:u})}r.o.autoPosition&&r.setPosition()},setPosition:function(){var n=this,r,i,f=t[0]/2-n.d.container.outerHeight(!0)/2,u=t[1]/2-n.d.container.outerWidth(!0)/2;n.o.position&&Object.prototype.toString.call(n.o.position)==="[object Array]"?(r=n.o.position[0]||f,i=n.o.position[1]||u):(r=f,i=u),n.d.container.css({left:i,top:r})},watchTab:function(t){var i=this,r;n(t.target).parents(".simplemodal-container").length>0?(i.inputs=n(":input:enabled:visible:first, :input:enabled:visible:last",i.d.data[0]),(!t.shiftKey&&t.target==i.inputs[i.inputs.length-1]||t.shiftKey&&t.target==i.inputs[0]||i.inputs.length==0)&&(t.preventDefault(),r=t.shiftKey?"last":"first",setTimeout(function(){i.focus(r)},10))):(t.preventDefault(),setTimeout(function(){i.focus()},10))},open:function(){var t=this;t.d.iframe&&t.d.iframe.show(),n.isFunction(t.o.onOpen)?t.o.onOpen.apply(t,[t.d]):(t.d.overlay.show(),t.d.container.show(),t.d.data.show()),t.focus(),t.bindEvents()},close:function(){var t=this,i;if(!t.d.data)return!1;t.unbindEvents(),n.isFunction(t.o.onClose)&&!t.occb?(t.occb=!0,t.o.onClose.apply(t,[t.d])):(t.d.placeholder?(i=n("#simplemodal-placeholder"),t.o.persist?i.replaceWith(t.d.data.removeClass("simplemodal-data").css("display",t.display)):(t.d.data.hide().remove(),i.replaceWith(t.d.orig))):t.d.data.hide().remove(),t.d.container.hide().remove(),t.d.overlay.hide().remove(),t.d.iframe&&t.d.iframe.hide().remove(),t.d={})}}})(jQuery);

;// GenericModal.js
typeof Roblox.GenericModal=="undefined"&&(Roblox.GenericModal=function(){function i(t,i,u,f,e){n=f;var o=$("div.GenericModal").filter(":first");o.find("div.Title").text(t),i===null?o.addClass("noImage"):(o.find("img.GenericModalImage").attr("src",i),o.removeClass("noImage")),o.find("div.Message").html(u),e&&(o.removeClass("smallModal"),o.addClass("largeModal")),o.modal(r)}function t(){$.modal.close(),typeof n=="function"&&n()}var r={overlayClose:!0,escClose:!0,opacity:80,overlayCss:{backgroundColor:"#000"}},n;return $(function(){$(document).on("click",".GenericModal .roblox-ok",function(){t()})}),{open:i}}());


}
/*
     FILE ARCHIVED ON 12:44:53 Feb 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:10:26 Aug 22, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 36.194 (3)
  PetaboxLoader3.resolve: 95.039 (2)
  exclusion.robots.policy: 0.304
  LoadShardBlock: 240.207 (3)
  esindex: 0.029
  exclusion.robots: 0.325
  RedisCDXSource: 16.742
  load_resource: 387.09
  captures_list: 301.849
  PetaboxLoader3.datanode: 418.998 (5)
*/