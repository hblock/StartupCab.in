/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
(function(j,f){function s(a,b){var c=a.createElement("p"),m=a.getElementsByTagName("head")[0]||a.documentElement;c.innerHTML="x<style>"+b+"</style>";return m.insertBefore(c.lastChild,m.firstChild)}function o(){var a=d.elements;return"string"==typeof a?a.split(" "):a}function n(a){var b=t[a[u]];b||(b={},p++,a[u]=p,t[p]=b);return b}function v(a,b,c){b||(b=f);if(e)return b.createElement(a);c||(c=n(b));b=c.cache[a]?c.cache[a].cloneNode():y.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);
return b.canHaveChildren&&!z.test(a)?c.frag.appendChild(b):b}function A(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();a.createElement=function(c){return!d.shivMethods?b.createElem(c):v(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(d,b.frag)}
function w(a){a||(a=f);var b=n(a);if(d.shivCSS&&!q&&!b.hasCSS)b.hasCSS=!!s(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}");e||A(a,b);return a}function B(a){for(var b,c=a.attributes,m=c.length,f=a.ownerDocument.createElement(l+":"+a.nodeName);m--;)b=c[m],b.specified&&f.setAttribute(b.nodeName,b.nodeValue);f.style.cssText=a.style.cssText;return f}function x(a){function b(){clearTimeout(d._removeSheetTimer);c&&c.removeNode(!0);c=null}
var c,f,d=n(a),e=a.namespaces,j=a.parentWindow;if(!C||a.printShived)return a;"undefined"==typeof e[l]&&e.add(l);j.attachEvent("onbeforeprint",function(){b();var g,i,d;d=a.styleSheets;for(var e=[],h=d.length,k=Array(h);h--;)k[h]=d[h];for(;d=k.pop();)if(!d.disabled&&D.test(d.media)){try{g=d.imports,i=g.length}catch(j){i=0}for(h=0;h<i;h++)k.push(g[h]);try{e.push(d.cssText)}catch(n){}}g=e.reverse().join("").split("{");i=g.length;h=RegExp("(^|[\\s,>+~])("+o().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");for(k=
"$1"+l+"\\:$2";i--;)e=g[i]=g[i].split("}"),e[e.length-1]=e[e.length-1].replace(h,k),g[i]=e.join("}");e=g.join("{");i=a.getElementsByTagName("*");h=i.length;k=RegExp("^(?:"+o().join("|")+")$","i");for(d=[];h--;)g=i[h],k.test(g.nodeName)&&d.push(g.applyElement(B(g)));f=d;c=s(a,e)});j.attachEvent("onafterprint",function(){for(var a=f,c=a.length;c--;)a[c].removeNode();clearTimeout(d._removeSheetTimer);d._removeSheetTimer=setTimeout(b,500)});a.printShived=!0;return a}var r=j.html5||{},z=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q,u="_html5shiv",p=0,t={},e;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";q="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}e=b}catch(d){e=q=!0}})();var d={elements:r.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
version:"3.6.2pre",shivCSS:!1!==r.shivCSS,supportsUnknownElements:e,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:w,createElement:v,createDocumentFragment:function(a,b){a||(a=f);if(e)return a.createDocumentFragment();for(var b=b||n(a),c=b.frag.cloneNode(),d=0,j=o(),l=j.length;d<l;d++)c.createElement(j[d]);return c}};j.html5=d;w(f);var D=/^$|\b(?:all|print)\b/,l="html5shiv",C=!e&&function(){var a=f.documentElement;return!("undefined"==typeof f.namespaces||"undefined"==typeof f.parentWindow||
"undefined"==typeof a.applyElement||"undefined"==typeof a.removeNode||"undefined"==typeof j.attachEvent)}();d.type+=" print";d.shivPrint=x;x(f)})(this,document);


/*
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,c,b){$.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "),function(d){a(d)});a("focusin","focus"+b);a("focusout","blur"+b);$.addOutsideEvent=a;function a(g,e){e=e||g+b;var d=$(),h=g+"."+e+"-special-event";$.event.special[e]={setup:function(){d=d.add(this);if(d.length===1){$(c).bind(h,f)}},teardown:function(){d=d.not(this);if(d.length===0){$(c).unbind(h)}},add:function(i){var j=i.handler;i.handler=function(l,k){l.target=k;j.apply(this,arguments)}}};function f(i){$(d).each(function(){var j=$(this);if(this!==i.target&&!j.has(i.target).length){j.triggerHandler(e,[i.target])}})}}})(jQuery,document,"outside");

// FancySelect
$.fn.fancySelect=function(opts){var isMobile,settings;settings=$.extend({width:180},opts);isMobile=!!navigator.userAgent.match(/Mobile|webOS/i);return this.each(function(){var copyOptionsToList,disabled,options,sel,trigger,updateTriggerText,wrapper;sel=$(this);sel.wrap('<div class="fancy-select">');wrapper=sel.parent();wrapper.append('<div class="trigger">');wrapper.append('<ul class="options">');trigger=wrapper.find(".trigger");options=wrapper.find(".options");disabled=sel.prop("disabled");if(disabled){wrapper.addClass("disabled")}updateTriggerText=function(){return trigger.text(sel.find(":selected").text())};wrapper.bind("clickoutside",function(){if(trigger.hasClass("open")){return trigger.trigger("click")}});trigger.on("click",function(){var offParent,parent;if(!disabled){trigger.toggleClass("open");if(isMobile){if(trigger.hasClass("open")){return sel.focus()}}else{options.fadeToggle(120);sel.focus();if(trigger.hasClass("open")){parent=trigger.parent();offParent=parent.offsetParent();if(parent.position().top+parent.outerHeight()+5>offParent.height()-options.outerHeight()){return options.addClass("overflowing")}else{return options.removeClass("overflowing")}}}}});sel.on("enable",function(){sel.prop("disabled",false);wrapper.removeClass("disabled");disabled=false;return copyOptionsToList()});sel.on("disable",function(){sel.prop("disabled",true);wrapper.addClass("disabled");return disabled=true});sel.on("change",updateTriggerText);sel.on("keydown",function(e){var hovered,newHovered,w;w=e.which;hovered=options.find(".hover");hovered.removeClass("hover");if(w!==9){e.preventDefault()}if(w===9){if(trigger.hasClass("open")){trigger.trigger("click")}}if(w===13||w===32){if(hovered.length){return hovered.trigger("click")}else{return trigger.trigger("click")}}else if(trigger.hasClass("open")){if(w===38){if(hovered.length&&hovered.index()>0){hovered.prev().addClass("hover")}else{options.find("li:last-child").addClass("hover")}}else if(w===40){if(hovered.length&&hovered.index()<options.find("li").length-1){hovered.next().addClass("hover")}else{options.find("li:first-child").addClass("hover")}}newHovered=options.find(".hover");if(newHovered.length){options.scrollTop(0);return options.scrollTop(newHovered.position().top-12)}}});options.on("click","li",function(){sel.val($(this).data("value"));sel.trigger("change");return setTimeout(function(){return trigger.trigger("click")},45)});copyOptionsToList=function(){var optWidth,optWidthFinder,option_width,selOpts,widthFinder;selOpts=sel.find("option");sel.find("option").each(function(i,opt){opt=$(opt);if(opt.val()){return wrapper.find(".options").append('<li data-value="'+opt.val()+'">'+opt.text()+"</li>")}});widthFinder=wrapper.clone();$("body").append(widthFinder);optWidthFinder=widthFinder.find(".options");optWidthFinder.css("width","auto");option_width=widthFinder.find(".options").width();optWidthFinder.css({display:"block",padding:"0 12px"});optWidth=optWidthFinder.outerWidth();options.css("width",optWidth);widthFinder.remove();if(sel.attr("data-width")){if(sel.attr("data-width")>option_width){options.css("width",sel.attr("data-width"))}}wrapper.css("width",sel.data("width")||settings.width);return updateTriggerText()};sel.on("replace",function(){wrapper.find(".options").empty();return copyOptionsToList()});return copyOptionsToList()})};

$(document).ready(function() {
	// picture slider
	var sc = $('#slider-container'),
		scInner = sc.find('ul'),
		nav = $('#billboard-nav'),
		slideWidth = 0;

	function initSlider() {
		slideWidth = scInner.find('li:first').outerWidth();

		scInner.find('.current').removeClass('current');
		scInner.css({
			width: slideWidth * scInner.find('li').length,
			marginLeft: 0
		}).find('li:first').addClass('current');
	}

	initSlider();
	$(window).on('resize', initSlider);

	nav.on('click', '.prev', function() {
		var current = sc.find('.current');

		// move last to first if at first
		if (current.index() == 0) {
			current.removeClass('current');
			scInner.find('li:last').addClass('current')
			scInner.css('marginLeft', - (slideWidth * scInner.find('li').length - slideWidth));
		} else {
			current.removeClass('current').prev().addClass('current');
			scInner.css('marginLeft', parseInt(scInner.css('margin-left'), 10) + slideWidth);
		}
	});

	nav.on('click', '.next', function() {
		var current = sc.find('.current');

		// move first to last if at last
		if (current.index() == sc.find('li').length - 1) {
			current.removeClass('current');
			scInner.find('li:first').addClass('current')
			scInner.css('marginLeft', 0);
		} else {
			current.removeClass('current').next().addClass('current');
			scInner.css('marginLeft', parseInt(scInner.css('margin-left'), 10) - slideWidth);
		}
	});


	// contact form
	$('select').fancySelect();

	if (!$('html').is('.old-ie')) {
		var form = $('#contact'),
			nameField = form.find('input[name="full-name"]'),
			companyField = form.find('input[name="company-name"]'),
			groupSizeField = form.find('input[name="group-size"]'),
			emailField = form.find('input[name="email-address"]'),
			phoneField = form.find('input[name="phone-number"]'),
			additionalDetailsField = form.find('textarea');

		form.on('submit', function(e) {
			e.preventDefault();

			$.ajax({
				url: 'http://utility.octopuscreative.com:9999/startupmailer.php',
				type: 'post',
				dataType: 'text',
				data: {
					'full-name': nameField.val(),
					'company-name': companyField.val(),
					'group-size': groupSizeField.val(),
					'email-address': emailField.val(),
					'phone-number': phoneField.val(),
					'additional-details': additionalDetailsField.val()
				},
				complete: function(response) {
					if (response.responseText == "Thanks, we'll be in touch.") {
						nameField.val('');
						companyField.val('');
						groupSizeField.val('');
						emailField.val('');
						phoneField.val('');
						additionalDetailsField.val('');
						form.find('input[type="submit"]').attr('disabled', 'disabled').val('Thanks!');
					} else {
						alert(response.responseText);
					}
				}
			});
		});
	}
});