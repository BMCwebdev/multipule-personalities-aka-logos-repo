
// USAGE:
// ========================
// window.cgTranslations.getTranslations().done(function() {
//   var featuredEventText = window.CyberGrants.l10n.constants.L_FEATURED_EVENT;
//   // etc...
// });
//

function CyberGrantsTranslations() {
  this.promise = null;
}

CyberGrantsTranslations.prototype.getTranslations = function() {
  if (this.promise === null) {
    this.promise = jQuery.get(
        '/includes/translations/' + jQuery('body').data('langVersion') + '.json',
        function(l10nData) {
          window.CyberGrants.l10n.constants = jQuery.parseJSON(l10nData);
        });
  }
  return this.promise;
};

window.cgTranslations = new CyberGrantsTranslations();
﻿var CyberGrants  = CyberGrants || {};
CyberGrants.l10n = (function (self) {
// var self = {};
var _language = null;
self.language = function () {
_language = _language || document.body.getAttribute("lang");
return _language;
};
self.characterMaximum =  function (languageCode, limit) {
var output = "";
switch (languageCode)
{
case 'it': output = "(massimo " + limit + " caratteri)"; break;
case 'nl': output = "(maximaal " + limit + " tekens)"; break;
case 'de': output = "(max. " + limit + " Zeichen)"; break;
case 'fr': output = "(" + limit + " caractères maximum)"; break;
case 'ja': output = "（" + limit + "文字まで）"; break;
case 'pl': output = "(" + limit + " haractercay aximummay)"; break;
case 'es': output = "(máximo de caracteres " + limit + ")"; break;
case 'pt': output = "(" + limit + " máximo de caracteres)"; break;
case 'ru': output = "(не более " + limit + " символов)"; break;
case 'ko': output = "(최대 " + limit + " 글자)"; break;
case 'tr': output = "(maksimum " + limit + " karakter)"; break;
case 'zh': output = "（最多 " + limit + " 个字符）"; break;
default: output = "(" + limit + " character maximum)"; break;
}
return output;
},
self.charactersRemaining = function (languageCode, remaining) {
var output = "";
switch (languageCode)
{
case 'de': output = "noch " + remaining + " Zeichen"; break;
case 'es': output = "" + remaining + " caracteres que quedan"; break;
case 'pl': output = "" + remaining + " haracter(scay) emainingray"; break;
case 'fr': output = "" + remaining + " caractères restants"; break;
case 'nl': output = "" + remaining + " tekens resterend."; break;
case 'es': output = "caracteres que quedan " + remaining + ""; break;
case 'it': output = "" + remaining + " caratteri restanti"; break;
case 'ja': output = "あと" + remaining + "文字"; break;
case 'pt': output = "" + remaining + " caracteres restantes"; break;
case 'ru': output = "Осталось символов: " + remaining + ""; break;
case 'ko': output = "" + remaining + " 글자 남았음"; break;
case 'tr': output = "" + remaining + " karakter kaldı"; break;
case 'zh': output = "还剩 " + remaining + " 个字符"; break;
default: output = "" + remaining + " character(s) remaining"; break;
}
return output;
},
self.charactersOver = function (languageCode, overage) {
var output = "";
switch (languageCode)
{
case 'fr': output = "" + overage + " caractères en trop"; break;
case 'it': output = "" + overage + " caratteri in più"; break;
case 'pl': output = "" + overage + " haracter(scay) overay"; break;
case 'de': output = "" + overage + " Zeichen über dem Limit"; break;
case 'es': output = "caracteres de más " + overage + ""; break;
case 'es': output = "" + overage + " caracteres de más"; break;
case 'ru': output = "Превышение лимита символов: " + overage + ""; break;
case 'nl': output = "" + overage + " resterend(e) teken(s)"; break;
case 'ja': output = "" + overage + "文字超えました"; break;
case 'pt': output = "" + overage + " caracteres a mais"; break;
case 'ko': output = "" + overage + " 글자 초과"; break;
case 'tr': output = "" + overage + " karakter fazla"; break;
case 'zh': output = "超出 " + overage + " 个字符"; break;
default: output = "" + overage + " character(s) over"; break;
}
return output;
},
self.invalidNumber = function (languageCode, input) {
var output = "";
switch (languageCode)
{
case 'pt': output = "\"" + input + "\" não é um número válido."; break;
case 'de': output = "„" + input + "“ ist keine gültige Nummer."; break;
case 'it': output = "\"" + input + "\" non è un numero valido."; break;
case 'pl': output = "\"" + input + "\" isay otnay aay alidvay umbernay"; break;
case 'ja': output = "\"" + input + "\"は有効な数値ではありません。"; break;
case 'es': output = "\"(" + input + ")\" no es una cifra válida."; break;
case 'nl': output = "\"" + input + "\" is geen geldig getal."; break;
case 'ru': output = "\"" + input + "\" не является действительным числом."; break;
case 'es': output = "“" + input + "” no es una cifra válida."; break;
case 'fr': output = "« " + input + " » n'est pas un nombre valide."; break;
case 'ko': output = "\"" + input + "\" 은(는) 유효한 숫자가 아닙니다."; break;
case 'tr': output = "\"" + input + "\" geçerli bir numara değil."; break;
case 'zh': output = "\"" + input + "\" 不是有效的数字。"; break;
default: output = "\"" + input + "\" is not a valid number. "; break;
}
return output;
},
self.textOverLimit = function (languageCode, used, limit) {	
var output = "";
switch (languageCode)
{
case 'pl': output = "Youray exttay isay " + used + " haracterscay! Leasepay imitlay youray inputay otay " + limit + " haracterscay!"; break;
case 'it': output = "Il testo ha " + used + " caratteri! Limitare il testo a " + limit + " caratteri!"; break;
case 'ja': output = "このテキストは" + used + "文字です。 入力文字数を" + limit + "文字に制限してください。"; break;
case 'es': output = "¡Su texto tiene una longitud de " + used + " caracteres! ¡Limite la entrada a " + limit + " caracteres!"; break;
case 'nl': output = "Uw tekst is " + used + " tekens lang! Beperk uw invoer tot " + limit + " tekens!"; break;
case 'de': output = "Ihr Text umfasst " + used + " Zeichen. Beschränken Sie die Eingabe bitte auf " + limit + " Zeichen."; break;
case 'fr': output = "Votre texte comprend " + used + " caractères! Veuillez limiter votre texte à " + limit + " caractères."; break;
case 'ru': output = "Длина введенного вами текста составляет " + used + " символов. Сократите текст до " + limit + "символов."; break;
case 'fr': output = "Votre texte comprend " + used + " caractères ! Veuillez limiter votre texte à " + limit + " caractères !"; break;
case 'pt': output = "Seu texto contém " + used + " caracteres! Limite sua entrada a " + limit + " caracteres!"; break;
case 'ko': output = "텍스트 글자수가 " + used + " 글자입니다! 입력을 " + limit + " 글자로 제한하십시오!"; break;
case 'tr': output = "Metniniz " + used + " karakterden oluşuyor! Lütfen girdinizi " + limit + " karakter ile sınırlayın!"; break;
case 'zh': output = "您的文本有 " + used + " 个字符！请将您的输入限制为 " + limit + " 个字符！"; break;
default: output = "Your text is " + used + " characters! Please limit your input to " + limit + " characters!"; break;
}
return output;
};
return self;
})(CyberGrants.l10n || {});/*
http://www.alistapart.com

http://v2studio.com/k/code/lib/
*/

function envStgOrDev() {
	if (window.location.host === 'dev.cybergrants.com' ||
			window.location.host === 'stg-sandbox.cybergrants.com') {
		return true;
	} else {
		return false;
	}
}

function warnLibjsUsage() {
	// Removing this for now since we are not actively tracking lib.js usage.
	// if (envStgOrDev()) {
	// 	var err = new Error();
	// 	console.warn('The lib.js library is out-dated and should not be used.', err.stack);
	// }
}

// ARRAY EXTENSIONS

if (!Array.prototype.push) Array.prototype.push = function() {
    for (var i=0; i<arguments.length; i++) this[this.length] = arguments[i];
    return this.length;
}

/* *************************************************************
 * Directly prototyping the Array causes IE crashes in Prototype
 ***************************************************************
 * Array.prototype.find = function(value, start) {
 *   start = start || 0;
 *   for (var i=start; i<this.length; i++)
 *       if (this[i]==value)
 *           return i;
 *   return -1;
 * }
 */

/* *************************************************************
 * Directly prototyping the Array causes IE crashes in Prototype
 ***************************************************************
 * Array.prototype.has = function(value) {
 *    return this.find(value)!==-1;
 * }
 */

// FUNCTIONAL

function map(list, func) {
    warnLibjsUsage();
    var result = [];
    func = func || function(v) {return v};
    for (var i=0; i < list.length; i++) result.push(func(list[i], i, list));
    return result;
}

function filter(list, func) {
		warnLibjsUsage();
    var result = [];
    func = func || function(v) {return v};
    map(list, function(v) { if (func(v)) result.push(v) } );
    return result;
}


// DOM

function getElem(elem) {
		warnLibjsUsage();
    if (document.getElementById) {
        if (typeof elem == "string") {
            elem = document.getElementById(elem);
            if (elem===null) throw 'cannot get element: element does not exist';
        } else if (typeof elem != "object") {
            throw 'cannot get element: invalid datatype';
        }
    } else throw 'cannot get element: unsupported DOM';
    return elem;
}

function hasClass(elem, className) {
	warnLibjsUsage();
	// use the builtin Prototype method
	if ((typeof Prototype=='undefined') ||
		(typeof Element == 'undefined') ||
		(typeof Element.Methods=='undefined')) {
		throw 'Prototype must be loaded';
	}
	return $(elem).hasClassName(className);
}

function getAll(tagName, parent) {
		warnLibjsUsage();
    parent = isdef(parent)? getElem(parent) : document;
    if (undef(tagName)) tagName = '*';
    var r = parent.getElementsByTagName(tagName);
    
    return r.length || tagName != '*'?  map(r) :
        reduce(filterElementNodes(parent.childNodes), [], function(l,c){
            return l.merge([c], getAll(tagName, c))
        })
}

function getElementsByClass(searchClass,tag,node) {
	warnLibjsUsage();
	// The node list returned in IE has not been prototyped yet RT#59171
	var results = null,
		selector = null;

	if (node === undefined) node = document;
	if (tag === undefined) {
		results = node.getElementsByClassName(searchClass);
	} else {
		// Prototypejs's selector does not work on classes with pipes SS-32648
		// escape pipe (except where valid) for jQuery's selector
		selector = tag + '.' + searchClass.replace(/\|(?!=)/, '\\|');
		results = jQuery(selector);
	}

	return results;
}

// get parent of the element with the indicated tagName
function getParent(elem, tagName) {
	warnLibjsUsage();
	elem = getElem(elem);

	if (elem) {
		while(elem.parentNode) {
			elem = elem.parentNode;
			if (elem.nodeName && elem.nodeName.toUpperCase() == tagName.toUpperCase()) {
				return elem;
			}
		}
	}
	return null;
}

// WL: utility function to avoid browser inconsistencies
function getElementsByName(name, tagName, parentNode) {
	warnLibjsUsage();
	parentNode = !isUndefined(parentNode)? getElem(parentNode) : document;
	if (isUndefined(tagName)) tagName = '*';

	var elem = parentNode.getElementsByTagName(tagName);
	var arr = new Array();
	var nextIndex = 0
	for(var i = 0; i < elem.length; i++) {
		att = elem[i].getAttribute("name");
		if(att == name) {
			arr[nextIndex] = elem[i];
			nextIndex++;
		}
     }
     return arr;
}

// Revision of Scott Andrew's original addEvent
// http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
function addEvent( obj, type, fn )
{
	warnLibjsUsage();
	if (obj.addEventListener)
		obj.addEventListener( type, fn, false );
	else if (obj.attachEvent)
	{
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn](new W3CDOM_Event(obj)); }
//		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
	}
}

function addEvents( obj, type, fn ) {
	warnLibjsUsage();
	for (var i = 0; i < obj.length; i++) {
		addEvent(obj[i], type, fn);
	}
}

function removeEvent( obj, type, fn )
{
	warnLibjsUsage();
	if (obj.removeEventListener)
		obj.removeEventListener( type, fn, false );
	else if (obj.detachEvent)
	{
		obj.detachEvent( "on"+type, obj[type+fn] );
		obj[type+fn] = null;
		obj["e"+type+fn] = null;
	}
}

// WL: add classes together
function addClass(element,value) {
	warnLibjsUsage();
	if (!element.className) {
		element.className = value;
	} else {
		var newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function removeClass(element,value) {
	warnLibjsUsage();
	if (element.className) {
		var newClassName = " " + element.className + " ";	// WL: work this out later
		newClassName = newClassName.replace(value, "");
		// trim off spaces
		while (newClassName.charAt(0) == ' ')
			newClassName = newClassName.substring(1);
		while (newClassName.charAt(newClassName.length - 1) == ' ')
			newClassName = newClassName.substring(0, newClassName.length - 1);

		element.className = newClassName;
	}
}

function insertAfter(parent, node, referenceNode) {
	warnLibjsUsage();
	parent.insertBefore(node, referenceNode.nextSibling);
}


// DOM EVENTS

function listen(event, elem, func) {
		warnLibjsUsage();
    elem = getElem(elem);
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(event,func,false);
    else if (elem.attachEvent)  // IE DOM
        elem.attachEvent('on'+event, function(){ func(new W3CDOM_Event(elem)) } );		// WL: know that I changed this to window.event, but not sure what didn't work originally
//        elem.attachEvent('on'+event, function(){ func(window.event)});	
        // for IE we use a wrapper function that passes in a simplified faux Event object.
    else throw 'cannot add event listener';
}


// code to find the source of the event
function getEventSource(e) {
	warnLibjsUsage();
	if (typeof e == 'undefined') {
		var e = window.event;
	}
	var source;
	if (typeof e.target != 'undefined') {
		source = e.target;
	} else if (typeof e.srcElement != 'undefined') {
		source = e.srcElement;
	} else {
		return;
	}

	return source;
}

function mlisten(event, elem_list, func) {
		warnLibjsUsage();
//    map(elem_list, function(elem) { listen(event, elem, func) } );
    map(elem_list, function(elem) { addEvent(elem, event, func) } );
}

function W3CDOM_Event(currentTarget) {
		warnLibjsUsage();
    this.currentTarget   = currentTarget;
    this.preventDefault  = function() { window.event.returnValue  = false }
// WL: added these to better support IE
    this.stopPropagation = function() { window.event.cancelBubble = true }
    this.target  = window.event.srcElement;
    var self = this;

    return this;
}


// handle browser inconsistences with XML HTTP object
function getHttpObject()
{ 
	warnLibjsUsage();
	var objXMLHttp = null;
	if (window.XMLHttpRequest) {
		objXMLHttp = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		// use latest version available
		try {
			objXMLHttp=new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return objXMLHttp;
}


// MISC CLEANING-AFTER-MICROSOFT STUFF

function isUndefined(v) {
		warnLibjsUsage();
    var undef;
    return v===undef;
}

// format numbers with group separators
function formatNumber(n, groupSeparator, isCurrency, currencySymbol, decimalSeparator) {
	warnLibjsUsage();
	var isNegative = false;

	if (decimalSeparator == null) {
		decimalSeparator = '.';
	}

	// check for negative
	if (n < 0) {
		isNegative = true;
		n = n * -1;
	}

	var formattedNumber;
	var numberString = n.toString();
	var decimalPortion = '';
	if (numberString.indexOf(decimalSeparator) >= 0)
		decimalPortion = numberString.substring(numberString.indexOf(decimalSeparator));

	var numOctets = ((Math.floor(n)).toString().length - 1)/3;
	numOctets = Math.floor(numOctets);

	for (i = numOctets; i >= 0; i--) {
		if (i == numOctets) {
			formattedNumber = Math.floor(n/Math.pow(1000,i));
		} else {
			var octet = Math.floor(n/Math.pow(1000,i)).toString();
			if (octet.length == 1) {
				octet = "00" + octet;
			} else if (octet.length == 2) {
				octet = "0" + octet;
			}
			formattedNumber += groupSeparator + octet;
		}
		n = n%(Math.pow(1000,i));
	}

	if (isCurrency) {
		formattedNumber = currencySymbol + formattedNumber;
	}

	// add in decimals
	if (decimalPortion != '' || isCurrency) {
		numberString = decimalPortion.toString();
		formattedNumber = formattedNumber + decimalPortion;
	}

	// restore negativeness
	if (isNegative) {
		formattedNumber = "-" + formattedNumber;
	}

	return formattedNumber;
}

// from quirksmode.org
// using this only to detect Safari for purposes of working around lack of event.preventDefault() support
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{	// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 	// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

// https://github.com/kangax/protolicious/blob/5b56fdafcd7d7662c9d648534225039b2e78e371/event.simulate.js
/**
 * Event.simulate(@element, eventName[, options]) -> Element
 * 
 * - @element: element to fire event on
 * - eventName: name of event to fire (only MouseEvents and HTMLEvents interfaces are supported)
 * - options: optional object to fine-tune event properties - pointerX, pointerY, ctrlKey, etc.
 *
 *    $('foo').simulate('click'); // => fires "click" event on an element with id=foo
 *
 **/
 try {
	(function(){
	  
	  var eventMatchers = {
	    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
	    'MouseEvents': /^(?:click|mouse(?:down|up|over|move|out))$/
	  }
	  var defaultOptions = {
	    pointerX: 0,
	    pointerY: 0,
	    button: 0,
	    ctrlKey: false,
	    altKey: false,
	    shiftKey: false,
	    metaKey: false,
	    bubbles: true,
	    cancelable: true
	  }
	  
	  Event.simulate = function(element, eventName) {
			warnLibjsUsage();
	    var options = Object.extend(defaultOptions, arguments[2] || { });
	    var oEvent, eventType = null;
	    
	    element = $(element);
	    
	    for (var name in eventMatchers) {
	      if (eventMatchers[name].test(eventName)) { eventType = name; break; }
	    }

	    if (!eventType)
	      throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

	    if (document.createEvent) {
	      oEvent = document.createEvent(eventType);
	      if (eventType == 'HTMLEvents') {
	        oEvent.initEvent(eventName, options.bubbles, options.cancelable);
	      }
	      else {
	        oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView, 
	          options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
	          options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
	      }
	      element.dispatchEvent(oEvent);
	    }
	    else {
	      options.clientX = options.pointerX;
	      options.clientY = options.pointerY;
	      oEvent = Object.extend(document.createEventObject(), options);
	      element.fireEvent('on' + eventName, oEvent);
	    }
	    return element;
	  }
	  
	  Element.addMethods({ simulate: Event.simulate });
	})()
} catch (e) {
	// Assume prototype not available
}

/*
Returns the byte count for JS strings.
http://stackoverflow.com/a/12205668
QA-2507
*/
function byteCount(s) {
	warnLibjsUsage();
	return encodeURI(s).split(/%(?:u[0-9A-F]{2})?[0-9A-F]{2}|./).length - 1;
}


/*
Used in procedures with flexible parameter parsing to support input of name/value pairs where the value is longer than 32K.
formName/field are IDs corresponding to the form and the input to splice
Function will chunk the field into pieces and add them to the form as hidden input fields

Used in mail template saving and template application.
 */
var spliceIt = function(formName, field) {
	warnLibjsUsage();
	var fieldVal = jQuery("#" + field).val();
	var byteSize = byteCount(fieldVal);
	var length = fieldVal.length;
	var chunkLengthSize = 7500; // (32000/4) - 500; (MaxByteSize/WorstCaseScenario) - Overhead 
	var buf;

	if (byteSize > 30000) {
		// create hidden parameters to hold the chunks.
		// when the bytes size exceedes the chunk size we
		// assume the worst case scenario that each char is
		// 4 bytes. This reduces the risk and complication
		// of accidently cutting of the character early.
		for (var i = 0; i <= (length/chunkLengthSize); i++) {
		    buf = fieldVal.substring((i*chunkLengthSize), ((i*chunkLengthSize) + chunkLengthSize));

			var input = document.createElement("input");
			input.setAttribute("type", "hidden");
			input.setAttribute("name", field);
			input.setAttribute("value", buf);
			document.getElementById(formName).appendChild(input);
		}

		// and blank out the original field
		jQuery("#" + field).val("");
	}
}
/*
*
* Copyright (c) 2007 Andrew Tetlaw & Millstream Web Software
* http://www.millstream.com.au/view/code/tablekit/
* Version: 1.3b 2008-03-23
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
* BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* * 
*/

// Use the TableKit class constructure if you'd prefer to init your tables as JS objects
try {
	var TableKit = Class.create();

	TableKit.prototype = {
		initialize : function(elm, options) {
			var table = $(elm);
			if(table.tagName !== "TABLE") {
				return;
			}
			TableKit.register(table,Object.extend(TableKit.options,options || {}));
			this.id = table.id;
			var op = TableKit.option('sortable resizable editable', this.id);
			if(op.sortable) {
				TableKit.Sortable.init(table);
			} 
			if(op.resizable) {
				TableKit.Resizable.init(table);
			}
			if(op.editable) {
				TableKit.Editable.init(table);
			}
		},
		sort : function(column, order) {
			TableKit.Sortable.sort(this.id, column, order);
		},
		resizeColumn : function(column, w) {
			TableKit.Resizable.resize(this.id, column, w);
		},
		editCell : function(row, column) {
			TableKit.Editable.editCell(this.id, row, column);
		}
	};

	Object.extend(TableKit, {
		getBodyRows : function(table) {
			table = $(table);
			var id = table.id;
			if(!TableKit.tables[id].dom.rows) {
				TableKit.tables[id].dom.rows = (table.tHead && table.tHead.rows.length > 0) ? $A(table.tBodies[0].rows) : $A(table.rows).without(table.rows[0]);
			}
			return TableKit.tables[id].dom.rows;
		},
		getHeaderCells : function(table, cell) {
			if(!table) { table = $(cell).up('table'); }
			var id = table.id;
			if(!TableKit.tables[id].dom.head) {
				TableKit.tables[id].dom.head = $A((table.tHead && table.tHead.rows.length > 0) ? table.tHead.rows[table.tHead.rows.length-1].cells : table.rows[0].cells);
			}
			return TableKit.tables[id].dom.head;
		},
		getCellIndex : function(cell) {
			return $A(cell.parentNode.cells).indexOf(cell);
		},
		getRowIndex : function(row) {
			return $A(row.parentNode.rows).indexOf(row);
		},
		getCellText : function(cell, refresh) {
			if(!cell) { return ""; }
			var data = TableKit.getCellData(cell);
			if(refresh || data.refresh || !data.textContent) {
				data.textContent = cell.textContent ? cell.textContent : cell.innerText;
				data.refresh = false;
			}
			return data.textContent;
		},
		getCellData : function(cell) {
		  var t = null;
			if(!cell.id) {
				t = $(cell).up('table');
				cell.id = t.id + "-cell-" + TableKit._getc();
			}
			var tblid = t ? t.id : cell.id.match(/(.*)-cell.*/)[1];
			if(!TableKit.tables[tblid].dom.cells[cell.id]) {
				TableKit.tables[tblid].dom.cells[cell.id] = {textContent : '', htmlContent : '', active : false};
			}
			return TableKit.tables[tblid].dom.cells[cell.id];
		},
		register : function(table, options) {
			if(!table.id) {
				table.id = "tablekit-table-" + TableKit._getc();
			}
			var id = table.id;
			TableKit.tables[id] = TableKit.tables[id] ? 
			                        Object.extend(TableKit.tables[id], options || {}) : 
			                        Object.extend(
			                          {dom : {head:null,rows:null,cells:{}},sortable:false,resizable:false,editable:false},
			                          options || {}
			                        );
		},
		notify : function(eventName, table, event) {
			if(TableKit.tables[table.id] &&  TableKit.tables[table.id].observers && TableKit.tables[table.id].observers[eventName]) {
				TableKit.tables[table.id].observers[eventName](table, event);
			}
			TableKit.options.observers[eventName](table, event)();
		},
		isSortable : function(table) {
			return TableKit.tables[table.id] ? TableKit.tables[table.id].sortable : false;
		},
		isResizable : function(table) {
			return TableKit.tables[table.id] ? TableKit.tables[table.id].resizable : false;
		},
		isEditable : function(table) {
			return TableKit.tables[table.id] ? TableKit.tables[table.id].editable : false;
		},
		setup : function(o) {
			Object.extend(TableKit.options, o || {} );
		},
		option : function(s, id, o1, o2) {
			o1 = o1 || TableKit.options;
			o2 = o2 || (id ? (TableKit.tables[id] ? TableKit.tables[id] : {}) : {});
			var key = id + s;
			if(!TableKit._opcache[key]){
				TableKit._opcache[key] = $A($w(s)).inject([],function(a,v){
					a.push(a[v] = o2[v] || o1[v]);
					return a;
				});
			}
			return TableKit._opcache[key];
		},
		e : function(event) {
			return event || window.event;
		},
		tables : {},
		_opcache : {},
		options : {
			autoLoad : true,
			stripe : true,
			sortable : true,
			resizable : true,
			editable : true,
			rowEvenClass : 'roweven',
			rowOddClass : 'rowodd',
			sortableSelector : ['table.sortable'],
			columnClass : 'sortcol',
			descendingClass : 'sortdesc',
			ascendingClass : 'sortasc',
			defaultSortDirection : 1,
			noSortClass : 'nosort',
			sortFirstAscendingClass : 'sortfirstasc',
			sortFirstDecendingClass : 'sortfirstdesc',
			resizableSelector : ['table.resizable'],
			minWidth : 10,
			showHandle : true,
			resizeOnHandleClass : 'resize-handle-active',
			editableSelector : ['table.editable'],
			formClassName : 'editable-cell-form',
			noEditClass : 'noedit',
			editAjaxURI : '/',
			editAjaxOptions : {},
			observers : {
				'onSortStart' 	: function(){},
				'onSort' 		: function(){},
				'onSortEnd' 	: function(){},
				'onResizeStart' : function(){},
				'onResize' 		: function(){},
				'onResizeEnd' 	: function(){},
				'onEditStart' 	: function(){},
				'onEdit' 		: function(){},
				'onEditEnd' 	: function(){}
			}
		},
		_c : 0,
		_getc : function() {return TableKit._c += 1;},
		unloadTable : function(table){
		  table = $(table);
		  if(!TableKit.tables[table.id]) {return;} //if not an existing registered table return
			var cells = TableKit.getHeaderCells(table);
			var op = TableKit.option('sortable resizable editable noSortClass descendingClass ascendingClass columnClass sortFirstAscendingClass sortFirstDecendingClass', table.id);
			 //unregister all the sorting and resizing events
			cells.each(function(c){
				c = $(c);
				if(op.sortable) {
	  			if(!c.hasClassName(op.noSortClass)) {
	  				Event.stopObserving(c, 'mousedown', TableKit.Sortable._sort);
	  				c.removeClassName(op.columnClass);
	  				c.removeClassName(op.sortFirstAscendingClass);
	  				c.removeClassName(op.sortFirstDecendingClass);
	  				//ensure that if table reloaded current sort is remembered via sort first class name
	  				if(c.hasClassName(op.ascendingClass)) {
	  				  c.removeClassName(op.ascendingClass);
	  				  c.addClassName(op.sortFirstAscendingClass)
	  				} else if (c.hasClassName(op.descendingClass)) {
	  				  c.removeClassName(op.descendingClass);
	  				  c.addClassName(op.sortFirstDecendingClass)
	  				}  				
	  			}
			  }
			  if(op.resizable) {
	  			Event.stopObserving(c, 'mouseover', TableKit.Resizable.initDetect);
	  			Event.stopObserving(c, 'mouseout', TableKit.Resizable.killDetect);
			  }
			});
			//unregister the editing events and cancel any open editors
			if(op.editable) {
			  Event.stopObserving(table.tBodies[0], 'click', TableKit.Editable._editCell);
			  for(var c in TableKit.tables[table.id].dom.cells) {
			    if(TableKit.tables[table.id].dom.cells[c].active) {
			      var cell = $(c);
	  	      var editor = TableKit.Editable.getCellEditor(cell);
	  	      editor.cancel(cell);
			    }
	  	  }
			}
			//delete the cache
			TableKit.tables[table.id].dom = {head:null,rows:null,cells:{}}; // TODO: watch this for mem leaks
		},
		reloadTable : function(table){
		  table = $(table);
		  TableKit.unloadTable(table);
		  var op = TableKit.option('sortable resizable editable', table.id);
		  if(op.sortable) {TableKit.Sortable.init(table);}
		  if(op.resizable) {TableKit.Resizable.init(table);}
		  if(op.editable) {TableKit.Editable.init(table);}
		},
		reload : function() {
		  for(var k in TableKit.tables) {
		    TableKit.reloadTable(k);
		  }
		},
		load : function() {
			if(TableKit.options.autoLoad) {
				if(TableKit.options.sortable) {
					$A(TableKit.options.sortableSelector).each(function(s){
						$$(s).each(function(t) {
							TableKit.Sortable.init(t);
						});
					});
				}
				if(TableKit.options.resizable) {
					$A(TableKit.options.resizableSelector).each(function(s){
						$$(s).each(function(t) {
							TableKit.Resizable.init(t);
						});
					});
				}
				if(TableKit.options.editable) {
					$A(TableKit.options.editableSelector).each(function(s){
						$$(s).each(function(t) {
							TableKit.Editable.init(t);
						});
					});
				}
			}
		}
	});

	TableKit.Rows = {
		stripe : function(table) {
			var rows = TableKit.getBodyRows(table);
			rows.each(function(r,i) {
				TableKit.Rows.addStripeClass(table,r,i);
			});
		},
		addStripeClass : function(t,r,i) {
			t = t || r.up('table');
			var op = TableKit.option('rowEvenClass rowOddClass', t.id);
			var css = ((i+1)%2 === 0 ? op[0] : op[1]);
			// using prototype's assClassName/RemoveClassName was not efficient for large tables, hence:
			var cn = r.className.split(/\s+/);
			var newCn = [];
			for(var x = 0, l = cn.length; x < l; x += 1) {
				if(cn[x] !== op[0] && cn[x] !== op[1]) { newCn.push(cn[x]); }
			}
			newCn.push(css);
			r.className = newCn.join(" ");
		}
	};

	TableKit.Sortable = {
		init : function(elm, options){
			var table = $(elm);
			if(table.tagName !== "TABLE") {
				return;
			}
			TableKit.register(table,Object.extend(options || {},{sortable:true}));
			var sortFirst;
			var cells = TableKit.getHeaderCells(table);
			var op = TableKit.option('noSortClass columnClass sortFirstAscendingClass sortFirstDecendingClass', table.id);
			cells.each(function(c){
				c = $(c);
				if(!c.hasClassName(op.noSortClass)) {
					Event.observe(c, 'mousedown', TableKit.Sortable._sort);
					c.addClassName(op.columnClass);
					if(c.hasClassName(op.sortFirstAscendingClass) || c.hasClassName(op.sortFirstDecendingClass)) {
						sortFirst = c;
					}
				}
			});

			if(sortFirst) {
				if(sortFirst.hasClassName(op.sortFirstAscendingClass)) {
					TableKit.Sortable.sort(table, sortFirst, 1);
				} else {
					TableKit.Sortable.sort(table, sortFirst, -1);
				}
			} else { // just add row stripe classes
				TableKit.Rows.stripe(table);
			}
		},
		reload : function(table) {
			table = $(table);
			var cells = TableKit.getHeaderCells(table);
			var op = TableKit.option('noSortClass columnClass', table.id);
			cells.each(function(c){
				c = $(c);
				if(!c.hasClassName(op.noSortClass)) {
					Event.stopObserving(c, 'mousedown', TableKit.Sortable._sort);
					c.removeClassName(op.columnClass);
				}
			});
			TableKit.Sortable.init(table);
		},
		_sort : function(e) {
			if(TableKit.Resizable._onHandle) {return;}
			e = TableKit.e(e);
			Event.stop(e);
			var cell = Event.element(e);
			while(!(cell.tagName && cell.tagName.match(/td|th/gi))) {
				cell = cell.parentNode;
			}
			TableKit.Sortable.sort(null, cell);
		},
		sort : function(table, index, order) {
			var cell;
			if(typeof index === 'number') {
				if(!table || (table.tagName && table.tagName !== "TABLE")) {
					return;
				}
				table = $(table);
				index = Math.min(table.rows[0].cells.length, index);
				index = Math.max(1, index);
				index -= 1;
				cell = (table.tHead && table.tHead.rows.length > 0) ? $(table.tHead.rows[table.tHead.rows.length-1].cells[index]) : $(table.rows[0].cells[index]);
			} else {
				cell = $(index);
				table = table ? $(table) : cell.up('table');
				index = TableKit.getCellIndex(cell);
			}
			var op = TableKit.option('noSortClass descendingClass ascendingClass defaultSortDirection', table.id);
			
			if(cell.hasClassName(op.noSortClass)) {return;}	
			//TableKit.notify('onSortStart', table);
			order = order ? order : op.defaultSortDirection;
			var rows = TableKit.getBodyRows(table);

			if(cell.hasClassName(op.ascendingClass) || cell.hasClassName(op.descendingClass)) {
				rows.reverse(); // if it was already sorted we just need to reverse it.
				order = cell.hasClassName(op.descendingClass) ? 1 : -1;
			} else {
				var datatype = TableKit.Sortable.getDataType(cell,index,table);
				var tkst = TableKit.Sortable.types;
				rows.sort(function(a,b) {
					return order * tkst[datatype].compare(TableKit.getCellText(a.cells[index]),TableKit.getCellText(b.cells[index]));
				});
			}
			var tb = table.tBodies[0];
			var tkr = TableKit.Rows;
			rows.each(function(r,i) {
				tb.appendChild(r);
				tkr.addStripeClass(table,r,i);
			});
			var hcells = TableKit.getHeaderCells(null, cell);
			$A(hcells).each(function(c,i){
				c = $(c);
				c.removeClassName(op.ascendingClass);
				c.removeClassName(op.descendingClass);
				if(index === i) {
					if(order === 1) {
						c.addClassName(op.ascendingClass);
					} else {
						c.addClassName(op.descendingClass);
					}
				}
			});
		},
		types : {},
		detectors : [],
		addSortType : function() {
			$A(arguments).each(function(o){
				TableKit.Sortable.types[o.name] = o;
			});
		},
		getDataType : function(cell,index,table) {
			cell = $(cell);
			index = (index || index === 0) ? index : TableKit.getCellIndex(cell);
			
			var colcache = TableKit.Sortable._coltypecache;
			var cache = colcache[table.id] ? colcache[table.id] : (colcache[table.id] = {});
			
			if(!cache[index]) {
				var t = false;
				// first look for a data type id on the heading row cell
				if(cell.id && TableKit.Sortable.types[cell.id]) {
					t = cell.id
				}
				if(!t) {
	  			t = $w(cell.className).detect(function(n){ // then look for a data type classname on the heading row cell
	  				return (TableKit.Sortable.types[n]) ? true : false;
	  			});
				}
				if(!t) {
					var rows = TableKit.getBodyRows(table);
					cell = rows[0].cells[index]; // grab same index cell from body row to try and match data type
					t = TableKit.Sortable.detectors.detect(
							function(d){
								return TableKit.Sortable.types[d].detect(TableKit.getCellText(cell));
							});
				}
				cache[index] = t;
			}
			return cache[index];
		},
		_coltypecache : {}
	};

	TableKit.Sortable.detectors = $A($w('date-iso date date-eu date-au time currency datasize number casesensitivetext text')); // setting it here because Safari complained when I did it above...

	TableKit.Sortable.Type = Class.create();
	TableKit.Sortable.Type.prototype = {
		initialize : function(name, options){
			this.name = name;
			options = Object.extend({
				normal : function(v){
					return v;
				},
				pattern : /.*/
			}, options || {});
			this.normal = options.normal;
			this.pattern = options.pattern;
			if(options.compare) {
				this.compare = options.compare;
			}
			if(options.detect) {
				this.detect = options.detect;
			}
		},
		compare : function(a,b){
			return TableKit.Sortable.Type.compare(this.normal(a), this.normal(b));
		},
		detect : function(v){
			return this.pattern.test(v);
		}
	};

	TableKit.Sortable.Type.compare = function(a,b) {
		return a < b ? -1 : a === b ? 0 : 1;
	};

	TableKit.Sortable.addSortType(
		new TableKit.Sortable.Type('number', {
			pattern : /^[-+]?[\d]*\.?[\d]+(?:[eE][-+]?[\d]+)?/,
			normal : function(v) {
				// This will grab the first thing that looks like a number from a string, so you can use it to order a column of various srings containing numbers.
				v = parseFloat(v.replace(/^.*?([-+]?[\d]*\.?[\d]+(?:[eE][-+]?[\d]+)?).*$/,"$1"));
				return isNaN(v) ? 0 : v;
			}}),
		new TableKit.Sortable.Type('text',{
			normal : function(v) {
				return v ? v.toLowerCase() : '';
			}}),
		new TableKit.Sortable.Type('casesensitivetext',{pattern : /^[A-Z]+$/}),
		new TableKit.Sortable.Type('datasize',{
			pattern : /^[-+]?[\d]*\.?[\d]+(?:[eE][-+]?[\d]+)?\s?[k|m|g|t]b$/i,
			normal : function(v) {
				var r = v.match(/^([-+]?[\d]*\.?[\d]+([eE][-+]?[\d]+)?)\s?([k|m|g|t]?b)?/i);
				var b = r[1] ? Number(r[1]).valueOf() : 0;
				var m = r[3] ? r[3].substr(0,1).toLowerCase() : '';
				var result = b;
				switch(m) {
					case  'k':
						result = b * 1024;
						break;
					case  'm':				
						result = b * 1024 * 1024;
						break;
					case  'g':
						result = b * 1024 * 1024 * 1024;
						break;
					case  't':
						result = b * 1024 * 1024 * 1024 * 1024;
						break;
				}
				return result;
			}}),
		new TableKit.Sortable.Type('date-au',{
			pattern : /^\d{2}\/\d{2}\/\d{4}\s?(?:\d{1,2}\:\d{2}(?:\:\d{2})?\s?[a|p]?m?)?/i,
			normal : function(v) {
				if(!this.pattern.test(v)) {return 0;}
				var r = v.match(/^(\d{2})\/(\d{2})\/(\d{4})\s?(?:(\d{1,2})\:(\d{2})(?:\:(\d{2}))?\s?([a|p]?m?))?/i);
				var yr_num = r[3];
				var mo_num = parseInt(r[2],10)-1;
				var day_num = r[1];
				var hr_num = r[4] ? r[4] : 0;
				if(r[7]) {
					var chr = parseInt(r[4],10);
					if(r[7].toLowerCase().indexOf('p') !== -1) {
						hr_num = chr < 12 ? chr + 12 : chr;
					} else if(r[7].toLowerCase().indexOf('a') !== -1) {
						hr_num = chr < 12 ? chr : 0;
					}
				} 
				var min_num = r[5] ? r[5] : 0;
				var sec_num = r[6] ? r[6] : 0;
				return new Date(yr_num, mo_num, day_num, hr_num, min_num, sec_num, 0).valueOf();
			}}),
		new TableKit.Sortable.Type('date-us',{
			pattern : /^\d{2}\/\d{2}\/\d{4}\s?(?:\d{1,2}\:\d{2}(?:\:\d{2})?\s?[a|p]?m?)?/i,
			normal : function(v) {
				if(!this.pattern.test(v)) {return 0;}
				var r = v.match(/^(\d{2})\/(\d{2})\/(\d{4})\s?(?:(\d{1,2})\:(\d{2})(?:\:(\d{2}))?\s?([a|p]?m?))?/i);
				var yr_num = r[3];
				var mo_num = parseInt(r[1],10)-1;
				var day_num = r[2];
				var hr_num = r[4] ? r[4] : 0;
				if(r[7]) {
					var chr = parseInt(r[4],10);
					if(r[7].toLowerCase().indexOf('p') !== -1) {
						hr_num = chr < 12 ? chr + 12 : chr;
					} else if(r[7].toLowerCase().indexOf('a') !== -1) {
						hr_num = chr < 12 ? chr : 0;
					}
				} 
				var min_num = r[5] ? r[5] : 0;
				var sec_num = r[6] ? r[6] : 0;
				return new Date(yr_num, mo_num, day_num, hr_num, min_num, sec_num, 0).valueOf();
			}}),
		new TableKit.Sortable.Type('date-eu',{
			pattern : /^\d{2}-\d{2}-\d{4}/i,
			normal : function(v) {
				if(!this.pattern.test(v)) {return 0;}
				var r = v.match(/^(\d{2})-(\d{2})-(\d{4})/);
				var yr_num = r[3];
				var mo_num = parseInt(r[2],10)-1;
				var day_num = r[1];
				return new Date(yr_num, mo_num, day_num).valueOf();
			}}),
		new TableKit.Sortable.Type('date-iso',{
			pattern : /[\d]{4}-[\d]{2}-[\d]{2}(?:T[\d]{2}\:[\d]{2}(?:\:[\d]{2}(?:\.[\d]+)?)?(Z|([-+][\d]{2}:[\d]{2})?)?)?/, // 2005-03-26T19:51:34Z
			normal : function(v) {
				if(!this.pattern.test(v)) {return 0;}
			    var d = v.match(/([\d]{4})(-([\d]{2})(-([\d]{2})(T([\d]{2}):([\d]{2})(:([\d]{2})(\.([\d]+))?)?(Z|(([-+])([\d]{2}):([\d]{2})))?)?)?)?/);		
			    var offset = 0;
			    var date = new Date(d[1], 0, 1);
			    if (d[3]) { date.setMonth(d[3] - 1) ;}
			    if (d[5]) { date.setDate(d[5]); }
			    if (d[7]) { date.setHours(d[7]); }
			    if (d[8]) { date.setMinutes(d[8]); }
			    if (d[10]) { date.setSeconds(d[10]); }
			    if (d[12]) { date.setMilliseconds(Number("0." + d[12]) * 1000); }
			    if (d[14]) {
			        offset = (Number(d[16]) * 60) + Number(d[17]);
			        offset *= ((d[15] === '-') ? 1 : -1);
			    }
			    offset -= date.getTimezoneOffset();
			    if(offset !== 0) {
			    	var time = (Number(date) + (offset * 60 * 1000));
			    	date.setTime(Number(time));
			    }
				return date.valueOf();
			}}),
		new TableKit.Sortable.Type('date',{
			pattern: /^(?:sun|mon|tue|wed|thu|fri|sat)\,\s\d{1,2}\s(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s\d{4}(?:\s\d{2}\:\d{2}(?:\:\d{2})?(?:\sGMT(?:[+-]\d{4})?)?)?/i, //Mon, 18 Dec 1995 17:28:35 GMT
			compare : function(a,b) { // must be standard javascript date format
				if(a && b) {
					return TableKit.Sortable.Type.compare(new Date(a),new Date(b));
				} else {
					return TableKit.Sortable.Type.compare(a ? 1 : 0, b ? 1 : 0);
				}
			}}),
		new TableKit.Sortable.Type('time',{
			pattern : /^\d{1,2}\:\d{2}(?:\:\d{2})?(?:\s[a|p]m)?$/i,
			compare : function(a,b) {
				var d = new Date();
				var ds = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear() + " ";
				return TableKit.Sortable.Type.compare(new Date(ds + a),new Date(ds + b));
			}}),
		new TableKit.Sortable.Type('currency',{
			pattern : /^[$]/, // dollar,pound,yen,euro,generic currency symbol
			normal : function(v) {
				return v ? parseFloat(v.replace(/[^-\d\.]/g,'')) : 0;
			}})
	);

	TableKit.Resizable = {
		init : function(elm, options){
			var table = $(elm);
			if(table.tagName !== "TABLE") {return;}
			TableKit.register(table,Object.extend(options || {},{resizable:true}));		 
			var cells = TableKit.getHeaderCells(table);
			cells.each(function(c){
				c = $(c);
				Event.observe(c, 'mouseover', TableKit.Resizable.initDetect);
				Event.observe(c, 'mouseout', TableKit.Resizable.killDetect);
			});
		},
		resize : function(table, index, w) {
			var cell;
			if(typeof index === 'number') {
				if(!table || (table.tagName && table.tagName !== "TABLE")) {return;}
				table = $(table);
				index = Math.min(table.rows[0].cells.length, index);
				index = Math.max(1, index);
				index -= 1;
				cell = (table.tHead && table.tHead.rows.length > 0) ? $(table.tHead.rows[table.tHead.rows.length-1].cells[index]) : $(table.rows[0].cells[index]);
			} else {
				cell = $(index);
				table = table ? $(table) : cell.up('table');
				index = TableKit.getCellIndex(cell);
			}
			var pad = parseInt(cell.getStyle('paddingLeft'),10) + parseInt(cell.getStyle('paddingRight'),10);
			w = Math.max(w-pad, TableKit.option('minWidth', table.id)[0]);
			
			cell.setStyle({'width' : w + 'px'});
		},
		initDetect : function(e) {
			e = TableKit.e(e);
			var cell = Event.element(e);
			Event.observe(cell, 'mousemove', TableKit.Resizable.detectHandle);
			Event.observe(cell, 'mousedown', TableKit.Resizable.startResize);
		},
		detectHandle : function(e) {
			e = TableKit.e(e);
			var cell = Event.element(e);
	  		if(TableKit.Resizable.pointerPos(cell,Event.pointerX(e),Event.pointerY(e))){
	  			cell.addClassName(TableKit.option('resizeOnHandleClass', cell.up('table').id)[0]);
	  			TableKit.Resizable._onHandle = true;
	  		} else {
	  			cell.removeClassName(TableKit.option('resizeOnHandleClass', cell.up('table').id)[0]);
	  			TableKit.Resizable._onHandle = false;
	  		}
		},
		killDetect : function(e) {
			e = TableKit.e(e);
			TableKit.Resizable._onHandle = false;
			var cell = Event.element(e);
			Event.stopObserving(cell, 'mousemove', TableKit.Resizable.detectHandle);
			Event.stopObserving(cell, 'mousedown', TableKit.Resizable.startResize);
			cell.removeClassName(TableKit.option('resizeOnHandleClass', cell.up('table').id)[0]);
		},
		startResize : function(e) {
			e = TableKit.e(e);
			if(!TableKit.Resizable._onHandle) {return;}
			var cell = Event.element(e);
			Event.stopObserving(cell, 'mousemove', TableKit.Resizable.detectHandle);
			Event.stopObserving(cell, 'mousedown', TableKit.Resizable.startResize);
			Event.stopObserving(cell, 'mouseout', TableKit.Resizable.killDetect);
			TableKit.Resizable._cell = cell;
			var table = cell.up('table');
			TableKit.Resizable._tbl = table;
			if(TableKit.option('showHandle', table.id)[0]) {
				TableKit.Resizable._handle = $(document.createElement('div')).addClassName('resize-handle').setStyle({
					'top' : cell.cumulativeOffset()[1] + 'px',
					'left' : Event.pointerX(e) + 'px',
					'height' : table.getDimensions().height + 'px'
				});
				document.body.appendChild(TableKit.Resizable._handle);
			}
			Event.observe(document, 'mousemove', TableKit.Resizable.drag);
			Event.observe(document, 'mouseup', TableKit.Resizable.endResize);
			Event.stop(e);
		},
		endResize : function(e) {
			e = TableKit.e(e);
			var cell = TableKit.Resizable._cell;
			TableKit.Resizable.resize(null, cell, (Event.pointerX(e) - cell.cumulativeOffset()[0]));
			Event.stopObserving(document, 'mousemove', TableKit.Resizable.drag);
			Event.stopObserving(document, 'mouseup', TableKit.Resizable.endResize);
			if(TableKit.option('showHandle', TableKit.Resizable._tbl.id)[0]) {
				$$('div.resize-handle').each(function(elm){
					document.body.removeChild(elm);
				});
			}
			Event.observe(cell, 'mouseout', TableKit.Resizable.killDetect);
			TableKit.Resizable._tbl = TableKit.Resizable._handle = TableKit.Resizable._cell = null;
			Event.stop(e);
		},
		drag : function(e) {
			e = TableKit.e(e);
			if(TableKit.Resizable._handle === null) {
				try {
					TableKit.Resizable.resize(TableKit.Resizable._tbl, TableKit.Resizable._cell, (Event.pointerX(e) - TableKit.Resizable._cell.cumulativeOffset()[0]));
				} catch(e) {}
			} else {
				TableKit.Resizable._handle.setStyle({'left' : Event.pointerX(e) + 'px'});
			}
			return false;
		},
		pointerPos : function(element, x, y) {
	    	var offset = $(element).cumulativeOffset();
		    return (y >= offset[1] &&
		            y <  offset[1] + element.offsetHeight &&
		            x >= offset[0] + element.offsetWidth - 5 &&
		            x <  offset[0] + element.offsetWidth);
	  	},
		_onHandle : false,
		_cell : null,
		_tbl : null,
		_handle : null
	};


	TableKit.Editable = {
		init : function(elm, options){
			var table = $(elm);
			if(table.tagName !== "TABLE") {return;}
			TableKit.register(table,Object.extend(options || {},{editable:true}));
			Event.observe(table.tBodies[0], 'click', TableKit.Editable._editCell);
		},
		_editCell : function(e) {
			e = TableKit.e(e);
			var cell = Event.findElement(e,'td');
			if(cell) {
				TableKit.Editable.editCell(null, cell, null, e);
			} else {
				return false;
			}
		},
		editCell : function(table, index, cindex, event) {
			var cell, row;
			if(typeof index === 'number') {
				if(!table || (table.tagName && table.tagName !== "TABLE")) {return;}
				table = $(table);
				index = Math.min(table.tBodies[0].rows.length, index);
				index = Math.max(1, index);
				index -= 1;
				cindex = Math.min(table.rows[0].cells.length, cindex);
				cindex = Math.max(1, cindex);
				cindex -= 1;
				row = $(table.tBodies[0].rows[index]);
				cell = $(row.cells[cindex]);
			} else {
				cell = $(event ? Event.findElement(event, 'td') : index);
				table = (table && table.tagName && table.tagName !== "TABLE") ? $(table) : cell.up('table');
				row = cell.up('tr');
			}
			var op = TableKit.option('noEditClass', table.id);
			if(cell.hasClassName(op.noEditClass)) {return;}
			
			var head = $(TableKit.getHeaderCells(table, cell)[TableKit.getCellIndex(cell)]);
			if(head.hasClassName(op.noEditClass)) {return;}
			
			var data = TableKit.getCellData(cell);
			if(data.active) {return;}
			data.htmlContent = cell.innerHTML;
			var ftype = TableKit.Editable.getCellEditor(null,null,head);
			ftype.edit(cell, event);
			data.active = true;
		},
		getCellEditor : function(cell, table, head) {
		  var head = head ? head : $(TableKit.getHeaderCells(table, cell)[TableKit.getCellIndex(cell)]);
		  var ftype = TableKit.Editable.types['text-input'];
			if(head.id && TableKit.Editable.types[head.id]) {
				ftype = TableKit.Editable.types[head.id];
			} else {
				var n = $w(head.className).detect(function(n){
						return (TableKit.Editable.types[n]) ? true : false;
				});
				ftype = n ? TableKit.Editable.types[n] : ftype;
			}
			return ftype;
		},
		types : {},
		addCellEditor : function(o) {
			if(o && o.name) { TableKit.Editable.types[o.name] = o; }
		}
	};

	TableKit.Editable.CellEditor = Class.create();
	TableKit.Editable.CellEditor.prototype = {
		initialize : function(name, options){
			this.name = name;
			this.options = Object.extend({
				element : 'input',
				attributes : {name : 'value', type : 'text'},
				selectOptions : [],
				showSubmit : true,
				submitText : 'OK',
				showCancel : true,
				cancelText : 'Cancel',
				ajaxURI : null,
				ajaxOptions : null
			}, options || {});
		},
		edit : function(cell) {
			cell = $(cell);
			var op = this.options;
			var table = cell.up('table');
			
			var form = $(document.createElement("form"));
			form.id = cell.id + '-form';
			form.addClassName(TableKit.option('formClassName', table.id)[0]);
			form.onsubmit = this._submit.bindAsEventListener(this);
			
			var field = document.createElement(op.element);
				$H(op.attributes).each(function(v){
					field[v.key] = v.value;
				});
				switch(op.element) {
					case 'input':
					case 'textarea':
					field.value = TableKit.getCellText(cell);
					break;
					
					case 'select':
					var txt = TableKit.getCellText(cell);
					$A(op.selectOptions).each(function(v){
						field.options[field.options.length] = new Option(v[0], v[1]);
						if(txt === v[1]) {
							field.options[field.options.length-1].selected = 'selected';
						}
					});
					break;
				}
				form.appendChild(field);
				if(op.element === 'textarea') {
					form.appendChild(document.createElement("br"));
				}
				if(op.showSubmit) {
					var okButton = document.createElement("input");
					okButton.type = "submit";
					okButton.value = op.submitText;
					okButton.className = 'editor_ok_button';
					form.appendChild(okButton);
				}
				if(op.showCancel) {
					var cancelLink = document.createElement("a");
					cancelLink.href = "#";
					cancelLink.appendChild(document.createTextNode(op.cancelText));
					cancelLink.onclick = this._cancel.bindAsEventListener(this);
					cancelLink.className = 'editor_cancel';      
					form.appendChild(cancelLink);
				}
				cell.innerHTML = '';
				cell.appendChild(form);
		},
		_submit : function(e) {
			var cell = Event.findElement(e,'td');
			var form = Event.findElement(e,'form');
			Event.stop(e);
			this.submit(cell,form);
		},
		submit : function(cell, form) {
			var op = this.options;
			form = form ? form : cell.down('form');
			var head = $(TableKit.getHeaderCells(null, cell)[TableKit.getCellIndex(cell)]);
			var row = cell.up('tr');
			var table = cell.up('table');
			var s = '&row=' + (TableKit.getRowIndex(row)+1) + '&cell=' + (TableKit.getCellIndex(cell)+1) + '&id=' + row.id + '&field=' + head.id + '&' + Form.serialize(form);
			this.ajax = new Ajax.Updater(cell, op.ajaxURI || TableKit.option('editAjaxURI', table.id)[0], Object.extend(op.ajaxOptions || TableKit.option('editAjaxOptions', table.id)[0], {
				postBody : s,
				onComplete : function() {
					var data = TableKit.getCellData(cell);
					data.active = false;
					data.refresh = true; // mark cell cache for refreshing, in case cell contents has changed and sorting is applied
				}
			}));
		},
		_cancel : function(e) {
			var cell = Event.findElement(e,'td');
			Event.stop(e);
			this.cancel(cell);
		},
		cancel : function(cell) {
			this.ajax = null;
			var data = TableKit.getCellData(cell);
			cell.innerHTML = data.htmlContent;
			data.htmlContent = '';
			data.active = false;
		},
		ajax : null
	};

	TableKit.Editable.textInput = function(n,attributes) {
		TableKit.Editable.addCellEditor(new TableKit.Editable.CellEditor(n, {
			element : 'input',
			attributes : Object.extend({name : 'value', type : 'text'}, attributes||{})
		}));
	};
	TableKit.Editable.textInput('text-input');

	TableKit.Editable.multiLineInput = function(n,attributes) {
		TableKit.Editable.addCellEditor(new TableKit.Editable.CellEditor(n, {
			element : 'textarea',
			attributes : Object.extend({name : 'value', rows : '5', cols : '20'}, attributes||{})
		}));	
	};	
	TableKit.Editable.multiLineInput('multi-line-input');

	TableKit.Editable.selectInput = function(n,attributes,selectOptions) {
		TableKit.Editable.addCellEditor(new TableKit.Editable.CellEditor(n, {
			element : 'select',
			attributes : Object.extend({name : 'value'}, attributes||{}),
			'selectOptions' : selectOptions
		}));	
	};

	/*
	TableKit.Bench = {
		bench : [],
		start : function(){
			TableKit.Bench.bench[0] = new Date().getTime();
		},
		end : function(s){
			TableKit.Bench.bench[1] = new Date().getTime();
			alert(s + ' ' + ((TableKit.Bench.bench[1]-TableKit.Bench.bench[0])/1000)+' seconds.') //console.log(s + ' ' + ((TableKit.Bench.bench[1]-TableKit.Bench.bench[0])/1000)+' seconds.')
			TableKit.Bench.bench = [];
		}
	} */

	document.observe("dom:loaded", TableKit.load);
} catch (e) {
	// Assume this means prototype.js not included on the page
}// Get environment path
function cgEnvGetApiPath() {
  var apiPath = '';
  switch (window.location.host) {
    case 'www.cybergrants.com':
      apiPath = '/pls/cybergrants/';
      break;
    case 'sandbox.cybergrants.com':
      apiPath = '/pls/cybergrants-sb/';
      break;
    case 'stg.cybergrants.com':
      apiPath = '/pls/cybergrants-stg/';
      break;
    case 'stg-sandbox.cybergrants.com':
      apiPath = '/pls/cybergrants-stgsb/';
      break;
    case 'dev.cybergrants.com':
      apiPath = '/pls/cybergrants/';
  };
  return apiPath;
}

function suppressErrors() {
	return true;
}

window.onError= suppressErrors();

var windowHandle = -1;

function openWindow(url) {
  popupWin = window.open(url, 'remote', 'toolbar,scrollbars,resizable,width=400,height=300');
  popupWin.focus();
}

function openSecondWindow(address,w,h) {
    if (w==null)
        w=650;
    if (h==null)
        h=400;

	windowHandle = window.open(address, 'secondWindow', 'toolbar=yes,scrollbars=yes,resizable=yes,status=yes,width='+w+',height='+h);
	if (windowHandle.opener == null) {
		windowHandle.opener = self;
	}
	windowHandle.focus();

	// tool bar = yes?
}

function openNewWindow(address,w,h) {
    if (w==null)
        w=650;
    if (h==null)
        h=400;

	windowHandle = window.open(address, '', 'toolbar=yes,scrollbars=yes,resizable=yes,status=yes,width='+w+',height='+h);
	if (windowHandle.opener == null) {
		windowHandle.opener = self;
	}
	windowHandle.focus();

	// tool bar = yes?
}

function selectValue(s, v) {
	for (var i = 0; i < (s.length); i++) {
		if (s.options[i].value == v) 
			s.options[i].selected = true;
	}
}

function selectAll(checkboxArray) {
	if (checkboxArray) {
		if (checkboxArray.length) {
			for (var i=0; i<checkboxArray.length; i++)
				checkboxArray[i].checked = true;
		} else if (checkboxArray) {
			checkboxArray.checked = true;
		}
	}
}

function selectAllOptions(selections) {
for (var i = 0; i < (selections.length); i++) {
	selections.options[i].selected = true;
}
}

function selectNone(checkboxArray) {
	if (checkboxArray) {
		if (checkboxArray.length) {
			for (var i=0; i<checkboxArray.length; i++)
				checkboxArray[i].checked = false;
		} else if (checkboxArray) {
			checkboxArray.checked = false;
		}
	}
}

function selectNoOptions(selections) {
for (var i = 0; i < (selections.length); i++) {
	selections.options[i].selected = false;
}
}

function validate(checkboxArray, message){
	if (checkboxArray[0]) {		
		var selected = 0;
		var i = 0;
		while (selected == 0 && i < checkboxArray.length) {
			if (checkboxArray[i].checked)
				selected = 1;
			i++;
		}
		if (selected != 1) {
			if (message.length > 0)
				alert(message);
			return false;
		} else
			return true;
	} else if (checkboxArray) {
		if (!checkboxArray.checked) {
			if (message.length > 0)
				alert(message);
			return false;
		}
		return true;
	}
}

function validate2(checkboxArray1, checkboxArray2, message){
	// check first array, if empty, then check the other
	if (!validate(checkboxArray1, '')) {
		return validate(checkboxArray2, message);
	} else {
		return true;
	}
}

// This function check if any value is selected on a selectArray
function validate3(selectArray, message) {
	if (selectArray[0].options) {
		for (var i=0; i < selectArray.length; i++) {
			if (selectArray[i].options[selectArray[i].selectedIndex].value != "") {
				return true;
			}
		}
	} else if (selectArray) {
		if (selectArray.options[selectArray.selectedIndex].value != "") {
			return true;
		}
	}
	alert(message);
	return false;
}

function changeList(fromList, toList, sort) {
var text = ""
var value = ""
var counter = 0
var bottom = 0
var top = 0
var insertLocation = -1
var temp = ""
var sorted = true

if (arguments.length < 3 || sort == false) { sorted = false }

while (counter < fromList.length) {
	if (fromList.options[counter].selected) {
		text = fromList.options[counter].text
		value = fromList.options[counter].value

		// if the option has no value, don't bother to move it
		if (value.length > 0) {
			insertOption = new Option(text, value)

			if (sorted) {
				top = toList.length - 1
				insertLocation = -1
				while (bottom <= top && insertLocation == -1) {
					if (toList.options[bottom].text < text) {
						bottom++
						continue
					} else {
						insertLocation = bottom
					}
				}
				if (insertLocation == -1) { insertLocation = toList.length }

				for (var i = toList.length; i > insertLocation ; i--) {
					temp =  new Option(toList.options[i - 1].text, toList.options[i - 1].value)
					toList.options[i] = temp
				}
				toList.options[insertLocation] = insertOption
			} else {
				for (var i = toList.length; i > 0 ; i--) {
					temp =  new Option(toList.options[i - 1].text, toList.options[i - 1].value)
					toList.options[i] = temp
				}
				toList.options[0] = insertOption
			}
			fromList.options[counter]=null
			formChanged=true;
		} else {
			counter++
		}
	} else {
		counter++
	}
}
}


function removeNullOption(selectBox) {
	if (selectBox)
		if (selectBox.options[0])
			if (selectBox.options[0].value == "None")
				selectBox.options[0] = null
}

function moveUp(selections) {
var t = ""
var v = ""
for (var i = 1; i < (selections.length); i++) {
	if (selections.options[i].selected) {
		t = selections.options[i].text
		v = selections.options[i].value

		selections.options[i].text = selections.options[i - 1].text;
		selections.options[i].value = selections.options[i - 1].value;
		selections.options[i].selected = selections.options[i - 1].selected;
		selections.options[i - 1].text = t;
		selections.options[i - 1].value = v;
		selections.options[i - 1].selected = true;
		formChanged=true;
	}
}
}

function moveDown(selections) {
var t = ""
var v = ""
for (var i = (selections.length - 2); i >= 0; i--) {
	if (selections.options[i].selected) {
		t = selections.options[i].text
		v = selections.options[i].value

		selections.options[i].text = selections.options[i + 1].text;
		selections.options[i].value = selections.options[i + 1].value;
		selections.options[i].selected = selections.options[i + 1].selected;
		selections.options[i + 1].text = t;
		selections.options[i + 1].value = v;
		selections.options[i + 1].selected = true;
		formChanged=true;
	}
}

}

// make sure that all of the values contain the characters listed as valid
function checkChar(item, msg, okChar) {
	var l = 0;

	// if the object is an array, loop through all values of the array
	if (item[0]) {
		for (var i = 0; i < (item.length); i++) {
			l = item[i].value.length;
			for (var j = 0; j < l; j++) {
			  if (okChar.indexOf(item[i].value.charAt(j)) < 0) {
			      alert(msg);
			      return false;
			  }
			}
		}
	} else {
		l = item.value.length;

		for (var j = 0; j < l; j++) {
		  if (okChar.indexOf(item.value.charAt(j)) < 0) {
		      alert(msg);
		      return false;
		  }
		}
	}

	return true;
}
  
// These two functions verify that the length of the text in a textarea is less than maxLength.
// example usage: 
// <TEXTAREA NAME="x_description" ROWS=5 COLS=51 WRAP="virtual" onChange="checkLength(this, 255)"></TEXTAREA>
var global_textArray = null;
function checkLength(textArray, maxLength) {
		if (textArray.value.length > maxLength) {
			alert(CyberGrants.l10n.textOverLimit(CyberGrants.l10n.language(), textArray.value.length, maxLength));
			global_textArray = textArray;
			window.setTimeout("global_textArray.focus()",1);
			return false;
		} 
		return true;
}

// example usage:
// <FORM ACTION="admin.change_customized_app" METHOD="POST" NAME="customAppForm" onSubmit="return checkAllLengths(document.customAppForm.x_description, 255)">
function checkAllLengths(textArray, maxLength) {
	var i = 0;
	var done = false;
	var badIndex = -1;
	var l = 0;

	// if the object is an array, loop through all values of the array
	if (textArray[0]) {
		while (i<textArray.length && !done && textArray[i].value) {
			l = textArray[i].value.length;
			if (l > maxLength) {
				done = true;
				badIndex = i;
			}
			i++;
		}

		if (badIndex > -1) {
			alert(CyberGrants.l10n.textOverLimit(CyberGrants.l10n.language(), l, maxLength));
			textArray[badIndex].focus();
			return false;
		} 
	} else {
		l = textArray.value.length;
		if (l > maxLength) {
			alert(CyberGrants.l10n.textOverLimit(CyberGrants.l10n.language(), l, maxLength));
			textArray.focus();
			return false;
		}
	}

	return true;
}

// This function allows checkboxes to function like radio buttons
// Used in the batch gift review screen for employee programs administration
function mimicRadio (checkboxGroup,checkbox,value) {
	var cRequestId = value.substring(0,value.indexOf("|"));
	var v;
	for (var i = 0; i < checkboxGroup.length; i++) {
		v = checkboxGroup[i].value.substring(0,checkboxGroup[i].value.indexOf("|"));
		if ((checkboxGroup[i] != checkbox) && (v == cRequestId)){
			checkboxGroup[i].checked = false;
		}
	}  
}

// This function allows to check all approval action checkboxes,
// All Submitted, All Approved, All Rejected,.. etc
function checkAllApprovalAction(checkboxGroup,value) {
	var v;
	if (checkboxGroup.length) {
		for (var i = 0; i < checkboxGroup.length; i++) {
			v = checkboxGroup[i].value.substring(checkboxGroup[i].value.lastIndexOf("|")+1);
			if (v == value){
				checkboxGroup[i].checked = true;
			} else {
				checkboxGroup[i].checked = false;
			}
		}  
	} else {
		v = checkboxGroup.value.substring(checkboxGroup.value.lastIndexOf("|")+1);
		if (v == value){
			checkboxGroup.checked = true;
		} else {
			checkboxGroup.checked = false;
		}
	}
}


// This function selects the option which value equals to the value of "action", for checkboxes in the checkboxGroup array
// Used in the batch gift review screen for employee programs administration
function selectActionAll(checkboxGroup, action) {
    if (checkboxGroup) {
            if (checkboxGroup[0]) {
                    for (var i=0; i < checkboxGroup.length; i++) {
                    	var v = checkboxGroup[i].value.substring(checkboxGroup[i].value.lastIndexOf("|") + 1)
                   		if (v == action) {
                   			checkboxGroup[i].checked = true;
                   			mimicRadio(checkboxGroup,checkboxGroup[i],checkboxGroup[i].value);
                    	}
                    }
            } else {
	            var v = checkboxGroup.value.substring(checkboxGroup.value.lastIndexOf("|") + 1)
            	if (v == action) {
            		checkboxGroup.checked = true;
            		mimicRadio(checkboxGroup,checkboxGroup,checkboxGroup.value);
            	}
            }
    }
}
// This function checks all textarea fields within thisForm to make sure they don't exceed 2000 char limit
function checkAllTextarea(thisForm) {
    var thisElement;
    var i;
    var field_name = /x_custom_.+_value/;
    for (i = 0; i < thisForm.elements.length; i++) {
        thisElement = thisForm.elements[i];
        if (thisElement.type == "textarea") {
                if ((thisElement.name.match(field_name)) && (thisElement.rows == 5)){
                if (thisElement.value.length > 2000) {
                    alert("Your text exceeded 2000 characters! Please limit your input and try submitting again.");
                    return false;
                }
            }
        }
    }
    return true;
}

// This function will be called on all form which submits to the report server to
// prevent user submit more than once
var report_submitted = false;
function submit_report() {
        if (report_submitted) {
                return false;
        } else {
                report_submitted = true;
                return true;
        }
}
// this variable is created for the request screen to keep track of the form changes
var formChanged = false;
function check_unsaved(redirectUrl, locObj) {
	if ((!formChanged) || (formChanged && 
			(confirm("Note: You have unsaved changes.  If you would like to proceed without saving, click OK.  To return to save your changes, click Cancel.")))) 
		if (redirectUrl) 
			locObj.href = redirectUrl;
		else 
			return true;
	else if (!redirectUrl)
		return false;
}

// this function is to submit the form to switch the program_type which was selected
// by THIS selectbox
function refresh_pg_type_form(pgTypeSelect, pgTypeId, pgTypeForm) {
	pgTypeId.value = pgTypeSelect.options[pgTypeSelect.selectedIndex].value;
	pgTypeForm.submit();
}

// this function is restrictly for donor search form use, should not be used by any other procedure
function refresh_and_close(loc){
//loc=http://66.89.218.167:9990/cybergrants/plsql/sg_view_req.view_reqaccess?req_id=238&org_id=1935031
    window.opener.document.location=loc;
	window.opener.document.location.reload();
	window.close();
}

// created for the survey to request interface to funnel list values from two <select> into one
function funnelListSub(fromList1, fromList2, toList) {
	var text1 = ""
	var text2 = ""
	var value1 = ""
	var value2 = ""
	var type1 = ""
	var type2 = ""
	var temp = ""

	if ((fromList1.selectedIndex >= 0) && (fromList2.selectedIndex >= 0)) {
		text1 = fromList1.options[fromList1.selectedIndex].text
		value1 = fromList1.options[fromList1.selectedIndex].value
		text2 = fromList2.options[fromList2.selectedIndex].text
		value2 = fromList2.options[fromList2.selectedIndex].value

		// type validation
		type1 = value1.substring(0,2)
		type2 = value2.substring(0,2)

		if (type1 != type2) { 
			alert("Incompatible Field Type!")
			return false
		}

		// if the option has no value, don't bother to move it
		if ((value1.length > 0) && (value2.length > 0)) {
			insertOption = new Option(text1 + " => " + text2, value1 + "#" + value2)

			for (var i = toList.length; i > 0 ; i--) {
				temp =  new Option(toList.options[i - 1].text, toList.options[i - 1].value)
				toList.options[i] = temp
			}
			toList.options[0] = insertOption
			fromList1.options[fromList1.selectedIndex]=null
			fromList2.options[fromList2.selectedIndex]=null
		}
	} 
	return true
}

function funnelList(fromList1, fromList2, contactList, organizationList, requestList) {
	var listValue
	var tableName
	var index

	listValue = fromList2.options[fromList2.selectedIndex].value
	index = listValue.indexOf("|",3)
	tableName = listValue.substring(3,index);

	if (tableName.toLowerCase() == "contact")
		funnelListSub(fromList1, fromList2, contactList)
	else if (tableName.toLowerCase() == "organization")
		funnelListSub(fromList1, fromList2, organizationList)
	else if (tableName.toLowerCase() == "request")
		funnelListSub(fromList1, fromList2, requestList)
}

function unfunnelList(fromList, sourceList, destinationList) {
	var text = ""
	var value = ""
	var text1 = ""
	var value1 = ""
	var text2 = ""
	var value2 = ""
	var destinationTableName
	var counter = 0
	var temp = ""
	var insertPosition
	var textIndex, valueIndex

	while (counter < fromList.length) {
		if (fromList.options[counter].selected) {
			text = fromList.options[counter].text
			value = fromList.options[counter].value

			textIndex = text.indexOf(' => ')
			valueIndex = value.indexOf('#')
			text1 = text.substring(0,textIndex)
			text2 = text.substring(textIndex+4)
			value1 = value.substring(0,valueIndex)
			value2 = value.substring(valueIndex+1)

			// put back to sourceList
			insertOption = new Option(text1, value1)
			for (var i = sourceList.length; i > 0 ; i--) {
				temp =  new Option(sourceList.options[i - 1].text, sourceList.options[i - 1].value)
				sourceList.options[i] = temp
			}
			sourceList.options[0] = insertOption

			// put back to destinationList
			// find the correct section to put back
			valueIndex = value2.indexOf("|",3)
			destinationTableName = value2.substring(3,valueIndex);
			destinationTableName = "*****" + destinationTableName.toUpperCase() + "*****"

			insertOption = new Option(text2, value2)
			for (var i = destinationList.length; i > 0 ; i--) {
				temp =  new Option(destinationList.options[i - 1].text, destinationList.options[i - 1].value)
				if (destinationList.options[i - 1].text == destinationTableName) {
					insertPosition = i 
					break
				}
				destinationList.options[i] = temp
			}
			destinationList.options[insertPosition] = insertOption

			// remove list from fromList
			fromList.options[counter]=null
		} else {
			counter++
		}
	}
}

// function to validation email address line
function validate_email(mailform) {
    var valid_pattern = /^\s*\w([\.\']?[\w\-]+)*@\w([\.]?[\w\-]+)*\.[a-zA-Z0-9]+\s*$/g;
	var emailaddresses;
	if (mailform.x_recipient_email) {
		emailaddresses = mailform.x_recipient_email.value;
		if (emailaddresses.length > 0) {
			var email_ar = emailaddresses.split(",");
			for (i = 0; i < email_ar.length; i++) {
				valid_pattern = /^\s*\w([\.\']?[\w\-]+)*@\w([\.]?[\w\-]+)*\.[a-zA-Z0-9]+\s*$/g;
				if (valid_pattern.exec(email_ar[i]) == null) {
					alert(email_ar[i]+" is not a valid email address");
					return false;
				} else if (valid_pattern.exec(email_ar[i]) != null) {
				}
			}
		}
	}
	if (mailform.x_recipient_email_cc) {
		emailaddresses = mailform.x_recipient_email_cc.value;
		if (emailaddresses.length > 0) {
			var email_ar = emailaddresses.split(",");
			for (i = 0; i < email_ar.length; i++) {
				valid_pattern = /^\s*\w([\.\']?[\w\-]+)*@\w([\.]?[\w\-]+)*\.[a-zA-Z0-9]+\s*$/g;
				if (valid_pattern.exec(email_ar[i]) == null) {
					alert(email_ar[i]+" is not a valid email address");
					return false;
				} else if (valid_pattern.exec(email_ar[i]) != null) {
				}
			}
		}
	}
	if (mailform.x_recipient_email_bcc) {
		emailaddresses = mailform.x_recipient_email_bcc.value;
		if (emailaddresses.length > 0) {
			var email_ar = emailaddresses.split(",");
			for (i = 0; i < email_ar.length; i++) {
				valid_pattern = /^\s*\w([\.\']?[\w\-]+)*@\w([\.]?[\w\-]+)*\.[a-zA-Z0-9]+\s*$/g;
				if (valid_pattern.exec(email_ar[i]) == null) {
					alert(email_ar[i]+" is not a valid email address");
					return false;
				} else if (valid_pattern.exec(email_ar[i]) != null) {
				}
			}
		}
	}
	return true;
}

function togglediv(e,status,onStatus) {
	if (document.getElementById || document.all || document.layers) {
		if (onStatus == null) {
			onStatus = '';
		}

		//basic support for DHTML - IE5+ or NS6+
		if (status == 'on') {
		    document.getElementById(e).style.display = onStatus;
		} else if (status == 'off') {
		    document.getElementById(e).style.display = 'none';	
		} else {
			if (document.getElementById(e).style.display == 'none') {
		    	document.getElementById(e).style.display = onStatus;
			} else {
		    	document.getElementById(e).style.display = 'none';	
			}
		}
	} 
//	else if (document.layers) { }
}


/*
toggle based on visibility instead of display attribute to try to avoid conflicts with embedded CSS
*/
function toggleClass(c,status) {
	var obj = getElementsByClass(c);

	for (var i = 0; i < obj.length; i++) {
		if (status == 'on') {
		    obj[i].style.display = '';
		} else if (status == 'off') {
		    obj[i].style.display = 'none';	
		} else {
			if (obj[i].style.display == 'none') {
		    	obj[i].style.display = '';
			} else {
		    	obj[i].style.display = 'none';	
			}
		}
	} 
}

function toggleClassDisplay(c,status) {
	var obj = getElementsByClass(c);

	for (var i = 0; i < obj.length; i++) {
		if (status == 'on') {
		    obj[i].style.display = '';
		} else if (status == 'off') {
		    obj[i].style.display = 'none';	
		} else {
			if (obj[i].style.display == 'none') {
		    	obj[i].style.display = '';
			} else {
		    	obj[i].style.display = 'none';	
			}
		}
	} 
}

/*
Visibility preserves allocated space on page
*/
function toggleClassVisibility(c,status) {
	var obj = getElementsByClass(c);

	for (var i = 0; i < obj.length; i++) {
		if (status == 'on') {
		    obj[i].style.visibility = 'visible';
		} else if (status == 'off') {
		    obj[i].style.visibility = 'hidden';	
		} else {
			if (obj[i].style.visibility == 'hidden') {
		    	obj[i].style.visibility = 'visible';
			} else {
		    	obj[i].style.visibility = 'hidden';	
			}
		}
	} 
}


// helper functions for user-defined lists
function synchUserDefinedList(labelPrefix) {
	if (document.getElementById)
		{
			// grab the three components
			text = document.getElementById(labelPrefix + '.entry');
			select = document.getElementById(labelPrefix + '.select');
			hidden = document.getElementById(labelPrefix);

			// blank out hidden before building the new string
			hidden.value = "";
			for (var i = 0; i < select.length; i++) {
				if (i != 0) {
					hidden.value = hidden.value + String.fromCharCode(10) + select.options[i].text;
				} else {
					hidden.value = select.options[i].text;
				}
  			}

			$(labelPrefix).simulate('change');
  		}
}

function addToList(labelPrefix)
{
	if (document.getElementById)
		{
			text = document.getElementById(labelPrefix + '.entry');
			select = document.getElementById(labelPrefix + '.select');

			// create new option and add to other list
			if (text.value && text.value.length > 0) {
				insertOption = new Option(text.value);
				select.options[select.length] = insertOption;

				// clear out option from text box
				text.value = '';

				// add to hidden list form element
				synchUserDefinedList(labelPrefix);
			}
		}
	else
		alert("Element access by ID didn't work");
}

function removeFromList(labelPrefix)
{
	if (document.getElementById)
		{
			select = document.getElementById(labelPrefix + '.select');

			for (var i = select.options.length - 1; i >= 0; i--) {
				if (select.options[i].selected) {
					select.options[i] = null;
				}
  			}
			// remove from hidden list form element
			synchUserDefinedList(labelPrefix);
		}
	else
		alert("Element access by ID didn't work");
}

function getOffsetTop(cgObject) {
    if (cgObject.offsetParent) {
        return cgObject.offsetTop + getOffsetTop(cgObject.offsetParent) - 10;
    } else {
        return cgObject.offsetTop;
    }   
}

function getOffsetLeft(cgObject) {
    if (cgObject.offsetParent) {
        return cgObject.offsetLeft + getOffsetLeft(cgObject.offsetParent);
    } else {
        return cgObject.offsetLeft;
    }
}

// moves all selected options on selectBox into selectedSelectBox
// used to keep the number select box in synch with the selected columns to display
function synchSelectedSelect(selectBox, selectedSelectBox) 
{
	var text;
	var value;
	var selected = true;

	if (selectBox && selectedSelectBox) {
		var selectBoxLength = selectBox.length;
		var selectedSelectLength = selectedSelectBox.length;
		var selectedItems = new Object();
		var selectedItemValue;
		var selectedItemsIndex = 0;

		//record all selected selectedSelectBox items
		for (var i = 0; i < selectedSelectLength; i++) {
			selectedItemValue = selectedSelectBox.options[i].value;
			selectedItems[selectedItemValue] = selectedSelectBox.options[i].selected;
		}

		// remove all item in selectedSelectBox
		while (selectedSelectBox.length > 0) {
			selectedSelectBox.options[0] = null;
		}

		// create item in selectedSelectBox if selected in selectBox
		for (var i = 0; i < selectBoxLength; i++) {
			text = selectBox.options[i].text;
			value = selectBox.options[i].value;
			selected = selectBox.options[i].selected;

			if (selected) {
				insertOption = new Option(text, value);
				if (selectedItems[value]) {
					insertOption.selected = true;
				}
				selectedSelectBox.options[selectedSelectBox.length] = insertOption;
			}
		}
	}
} // end synchSelectedSelect
function readScanFrame(parentForm)

{
	// check for result pane
	if (window.frames['scan_results']) {
		// now check for acceptance fields
		if (window.frames['scan_results'].document.scanForm) {
			parentForm.x_scan_summary_id.value = window.frames['scan_results'].document.scanForm.x_scan_summary_id.value;
			parentForm.x_accept_initials.value = window.frames['scan_results'].document.scanForm.x_accept_initials.value;
		}

	}

}

function postScanParentFrame(scanForm) 
{
alert("in postScanParentFrame");
	var parentForm;
	var saveButton;
	if (top.window.frames['workarea']) {
		if (top.window.frames['workarea'].document.reqForm) {
			parentForm = top.window.frames['workarea'].document.reqForm;
			for (i = 0 ; i < parentForm.x_action.length ; i++) {
				if (parentForm.x_action[i].value == 'Save All') {
					saveButton = parentForm.x_action[i];
					break;
				}
			}
		} else if (top.window.frames['workarea'].document.giftForm) {
			parentForm = top.window.frames['workarea'].document.giftForm;
			if (parentForm.x_button.length) {
				for (i = 0 ; i < parentForm.x_button.length ; i++) {
					if (parentForm.x_button[i].value == 'Save') {
						saveButton = parentForm.x_button[i];
						break;
					}
				}
			} else {
				saveButton = parentForm.x_button;
			}
		} else if (top.window.frames['workarea'].document.nomForm) {
			parentForm = top.window.frames['workarea'].document.nomForm;
			if (parentForm.x_button.length) {
				for (i = 0 ; i < parentForm.x_button.length ; i++) {
					if (parentForm.x_button[i].value == 'Save') {
						saveButton = parentForm.x_button[i];
						break;
					}
				}
			} else {
				saveButton = parentForm.x_button;
			}
		}
		parentForm.x_scan_summary_id.value = scanForm.x_scan_summary_id.value;
		parentForm.x_accept_initials.value = scanForm.x_accept_initials.value;
		saveButton.click();
	}
	return false; // make sure this child form does not post
}

// highlight current fields
jQuery(document).ready(formatScreen);

function formatScreen() {
  initLinks();  // popup windows and print windows
  formatTables();   // stripe rows and align table cells
}

// warn about unsaved changes
function alert_unsaved() {
  if (formChanged) 
    return confirm("Note: You have unsaved changes.  If you would like to proceed without saving, click OK.  To return to save your changes, click Cancel.");
  else 
    return true;
}
  
// redefining default features
var _POPUP_FEATURES = 'location=0,scrollbars=1,resizable=1,statusbar=0,menubar=0,width=800,height=600';

function raw_popup(url, target, features) {
    // pops up a window containing url optionally named target, optionally having features
    if (isUndefined(features)) features = _POPUP_FEATURES;
    if (isUndefined(target  )) target   = '_blank';
    var theWindow = window.open(url, target, features);
  if (theWindow.opener == null) {
    theWindow.opener = self;
  }
  // tool bar = yes?

    theWindow.focus();
    return theWindow;
}

function link_popup(src, features) {
    // to be used in an html event handler as in: <a href="..." onclick="link_popup(this,...)" ...
    // pops up a window grabbing the url from the event source's href
    return raw_popup(src.getAttribute('href'), src.getAttribute('target') || '_blank', features);
}
/*
function event_popup(e) {
    // to be passed as an event listener
    // pops up a window grabbing the url from the event source's href
    link_popup(e.currentTarget);
    e.preventDefault();
}
*/

function initLinks() {
  jQuery('a.popUp').on('click', function(e) {
    e.preventDefault();
    link_popup(e.currentTarget, 'location=0,scrollbars=1,resizable=1,statusbar=0,menubar=1,width=800,height=600');
  });
  jQuery('a.littlePop').on('click', function(e) {
    e.preventDefault();
    link_popup(e.currentTarget, 'location=0,scrollbars=1,resizable=1,statusbar=0,menubar=0,width=600,height=400');
  });
  jQuery('a.printLink').on('click', function(e) {
    e.preventDefault();
    printScreen();
  });

  // for backwards compatibility with frame-based nav pages
  var legacyNavLinks = jQuery('a.rightFrame');
  if (legacyNavLinks.length) {
    for (var i = 0; i < legacyNavLinks.length; i++) {
      legacyNavLinks[i].setAttribute("target", "rightFrame");
    }
  }
  legacyNavLinks = jQuery('a.workarea');
  if (legacyNavLinks.length) {
    for (var i = 0; i < legacyNavLinks.length; i++) {
      legacyNavLinks[i].setAttribute("target", "workarea");
    }
  }
}

function printScreen() {
  window.print();
}

function formatTables() {
  var tables = document.getElementsByTagName('table');
  if (tables) {
      // loop through all tables
      for (var i = 0; i < tables.length; i++) {
        var header = tables[i].tHead;
        // only if there is a thead in the table
        if (header) {
          var headerCells = header.rows[0].cells;
          var rightAlignIndexes = new Array();
          var centerAlignIndexes = new Array();

          if (headerCells) {
            var numHeaderCells = headerCells.length;
            for (var a = 0; a < numHeaderCells; a++) {
              if ( jQuery(headerCells[a]).hasClass("tdRight") ) {
                rightAlignIndexes[rightAlignIndexes.length] = a;
              } else if ( jQuery(headerCells[a]).hasClass("tdCenter") ) {
                centerAlignIndexes[centerAlignIndexes.length] = a;
              }
            }
          }

          // loop through all TBODYs in the current table
          var bodies = tables[i].tBodies;
          if (bodies) {
            for (var j = 0; j < bodies.length; j++) {
              var rows = bodies[j].rows;
              if (rows) {
                for (var k = 0; k < rows.length; k++) {
                  // stripe every other row
                  if (tables[i].className == "striped") {
                    if ((k % 2) == 1) {
                      jQuery(rows[k]).addClass("odd");
                    }
                  }

                  // only proceed with alignment if the number of cells in the row matches the header, otherwise, colspanning is at play, let them format themselves
                  if (rows[k].cells.length == numHeaderCells) { 
                    var currentIndex;
                    // right align cells in the current row
                    for (var l = 0; l < rightAlignIndexes.length; l++) {
                      currentIndex = rightAlignIndexes[l];
                      jQuery(rows[k].cells[currentIndex]).addClass("tdRight");
                    }

                    // center align cells in the current row
                    for (var l = 0; l < centerAlignIndexes.length; l++) {
                      currentIndex = centerAlignIndexes[l];
                      jQuery(rows[k].cells[currentIndex]).addClass("tdCenter");
                    }
                  }
                }
              }
            }
          }
        }
    }

  }
}

// var to prevent double click
var submitClicked = false;

/*
Receives:
ID of UL to toggle visibility of (should be of format sub + x)

Gets all other toolSubs and turns them off


*/
function toggleNav(anchorId, menuId) {
  // change the class for the link
  var controlLink = document.getElementById(anchorId);
  var subMenu = document.getElementById(menuId);

  if ( jQuery('#' + anchorId).hasClass("toolOpened") ) { // CG-5353 replace lib.js with jQuery
  // if (hasClass(anchorId, "toolOpened")) {
    // currently expanded, so close
    jQuery(controlLink).removeClass("toolOpened");
    jQuery(controlLink).addClass("toolClosed");

    subMenu.style.display = 'none';
  } else {
    // currently closed, so open the submenu 
    jQuery(controlLink).removeClass("toolClosed");
    jQuery(controlLink).addClass("toolOpened");

    subMenu.style.display = '';

    // collapse any other open submenus (only if this is a level one item)
    if ((subMenu.parentNode).parentNode.className == "toolBox") {
      var otherMenus = jQuery('ul.toolSub');
      if (otherMenus.length) {
        for (var i = 0; i < otherMenus.length; i++) {
          if ((otherMenus[i].parentNode).parentNode.className == "toolBox") {
            if (otherMenus[i].id != menuId) {
              // change the class for the corresponding links
              var currControllerLinkId = (otherMenus[i].id).substring(3);
              var currControllerLink = document.getElementById(currControllerLinkId); // hack off the "sub" at the beginning
              if (currControllerLink) {
                if ( jQuery('#' + currControllerLinkId).hasClass("toolOpened") ) {
                  jQuery(currControllerLink).removeClass("toolOpened");
                  jQuery(currControllerLink).addClass("toolClosed");
                }
              }
              otherMenus[i].style.display = 'none';
            }
          }
        }
      }
    }
  }
}

function cgBuildTooltips() {
  jQuery('.cg-tooltip-icon a').qtip({
    show: {
      event: 'mouseenter focus'
    },
    hide: {
      event: 'mouseleave blur'
    },
    position: {
      my: 'bottom left',
      at: 'top center'
    },
    style: {
      classes: 'qtip-rounded qtip-shadow cg-qtip-style'
    } 
  });
}

jQuery(document).ready( function () {
  cgBuildTooltips();
});



// Override to stop Ajax requests from getting an extra "_" parameter.
// Needs to be removed after all other prototype.js is removed.
function cgrequest(url) {
this.url = url;
this.method = this.options.method;
var params = Object.clone(this.options.parameters);

if (!['get', 'post'].include(this.method)) {
  // simulate other verbs over post
  params['_method'] = this.method;
  this.method = 'post';
}

this.parameters = params;

if (params = Object.toQueryString(params)) {
  // when GET, append parameters to URL
  if (this.method == 'get')
    this.url += (this.url.include('?') ? '&' : '?') + params;
// WL: take out these two lines because PL/SQL doesn't like extra random parameters
//      else if (/Konqueror|Safari|KHTML/.test(navigator.userAgent))
//        params += '&_=';
}

try {
  var response = new Ajax.Response(this);
  if (this.options.onCreate) this.options.onCreate(response);
  Ajax.Responders.dispatch('onCreate', this, response);

  this.transport.open(this.method.toUpperCase(), this.url,
    this.options.asynchronous);

  if (this.options.asynchronous) this.respondToReadyState.bind(this).defer(1);

  this.transport.onreadystatechange = this.onStateChange.bind(this);
  this.setRequestHeaders();

  this.body = this.method == 'post' ? (this.options.postBody || params) : null;
  this.transport.send(this.body);

  /* Force Firefox to handle ready state 4 for synchronous requests */
  if (!this.options.asynchronous && this.transport.overrideMimeType)
    this.onStateChange();

}
catch (e) {
  this.dispatchException(e);
}
}

Ajax.Request.prototype.request = cgrequest;

jQuery(document).ready(initTrees);

// function for summable lists (used internally and externally)
function updateTotal(currentInput, inputClass, divId, isCurrency, currencySymbol, groupSeparator, decimalSeparator, numPrecision) {
	var totalDiv = document.getElementById(divId);

	// create variable for precision because we'll need to determine precision below if non-currency
	var precision = numPrecision;

	// make sure div containing total exists before doing all the calculations
	if (totalDiv) {
		// set to default if not indicated
		if (isCurrency == null) isCurrency = false;
		if (currencySymbol == null) currencySymbol = '$';
		if (groupSeparator == null) groupSeparator = ',';
		if (decimalSeparator == null) decimalSeparator = '.';

		var initialReg;			// define regular expression to be used for detecting entry issues
		var reg; 			// define regular expression to be used

		// account for $ being special
		if (currencySymbol == '$') {
			if (decimalSeparator == '.') { 	// account for . being special
				initialReg = new RegExp("\\" + currencySymbol + "|-|" + groupSeparator + "|\\" + decimalSeparator, "gi");// global, case-insensitive match
				reg = new RegExp("\\" + currencySymbol + "|" + groupSeparator, "gi");// global, case-insensitive match
			} else {
				initialReg = new RegExp("\\" + currencySymbol + "|-|" + groupSeparator + "|" + decimalSeparator, "gi");	// global, case-insensitive match
				reg = new RegExp("\\" + currencySymbol + "|" + groupSeparator, "gi");	// global, case-insensitive match
			}
		} else {
			if (decimalSeparator == '.') { 	// account for . being special
				initialReg = new RegExp(currencySymbol + "|-|" + groupSeparator + "|\\" + decimalSeparator, "gi");		// global, case-insensitive match
				reg = new RegExp(currencySymbol + "|" + groupSeparator, "gi");		// global, case-insensitive match
			} else {
				initialReg = new RegExp(currencySymbol + "|-|" + groupSeparator + "|" + decimalSeparator, "gi");			// global, case-insensitive match
				reg = new RegExp(currencySymbol + "|" + groupSeparator, "gi");			// global, case-insensitive match
			}
		}
		var currValue = currentInput.value.replace(initialReg, '');
		var total = 0;

		if (currValue.length == 0) {
			currValue = 0;
		}

		if (isNaN(currValue)) {
			alert(CyberGrants.l10n.invalidNumber(CyberGrants.l10n.language(), currentInput.value));
			currentInput.value = '';
			currentInput.focus();
		} else {
			// get values for each text box, convert to number
			var numberInput = getElementsByClass(inputClass,'input');
			var cleanedNumber;
			for (var i = 0; i < numberInput.length; i++) {
				cleanedNumber = numberInput[i].value;
				if (cleanedNumber != '') {
					cleanedNumber = cleanedNumber.replace(currencySymbol,"");
					// find the highest degree of precision used, and keep the summary at that level
					if (cleanedNumber.indexOf(decimalSeparator) >= 0) {
						if ((cleanedNumber.substring(cleanedNumber.indexOf(decimalSeparator) + 1)).length > precision) {
							precision = (cleanedNumber.substring(cleanedNumber.indexOf(decimalSeparator) + 1)).length;
						}
					}

					// make sure that the value contains more than just a symbol
					if ((cleanedNumber.replace(initialReg, '')).length > 0) {
						cleanedNumber = cleanedNumber.replace(reg, '');
						total = total + (cleanedNumber * 1);	// convert to number
					}
				}
			}

			// format the total as needed; need to set precision due to the conversion of numbers from base 2 and then back to base 10
			var formattedTotal = formatNumber((total.toFixed(precision)), groupSeparator, isCurrency, currencySymbol, decimalSeparator);

			totalDiv.firstChild.nodeValue = formattedTotal;
		}

		// check for a wrapper parent that is currently hidden
		var parentSpan = document.getElementById(divId + "Wrapper");
		if (parentSpan) {
			parentSpan.style.display = 'inline';
		}
	}
}

/*
 * Based on javascript tree widget at http://www.silverstripe.com/blog
 * Copyright (C) 2005 SilverStripe Limited
*/

/*
 * Initialise all trees identified by <ul class="tree">
 */
function initTrees() {
	var trees = getElementsByClass('tree', 'ul');
	if (trees && trees.length > 0) {

		if (testforDOMBug()) {
			for(var i = 0; i < trees.length; i++) {
				initTree(trees[i]);
			}
		} else {
			var closedLi = getElementsByClass("closed", "li");

			for(var i = 0; i < closedLi.length; i++) {
				removeClass(closedLi[i], "closed");
			}
		}
	}
}

// https://bugzilla.mozilla.org/show_bug.cgi?id=204784
// workaround for bug where when DOM functions are used to move/create input elements, they are added to the end of the elements array
function testforDOMBug() {
	var ok = false;
	var parentNode = document.forms[0];

	if (parentNode) {
		// create a couple of hidden inputs, and add one in front of the other (as far as document tree), then compare with order in elements array
		var testNode1 = document.createElement("input");
		var testNode2 = document.createElement("input");

		testNode1.setAttribute("type", "hidden");
		testNode1.setAttribute("name", "dummy");
		testNode1.setAttribute("value", "1");

		testNode2.setAttribute("type", "hidden");
		testNode2.setAttribute("name", "dummy");
		testNode2.setAttribute("value", "2");

		parentNode.appendChild(testNode2);
		parentNode.insertBefore(testNode1, testNode2);

		// testNode1 should be first in elements, but if not, return false
		var checkString = ""

		var formChildren = parentNode.elements;
		for(i = 0; i < formChildren.length; i++) {
			if(formChildren[i].name && formChildren[i].name.toLowerCase() == 'dummy') {
				checkString = checkString + formChildren[i].value;
			}
		}

		if (checkString == "12") {
			ok = true;
		}

		parentNode.removeChild(testNode1);
		parentNode.removeChild(testNode2);

		return ok;
	}
}
 
/*
 * Initialise a tree node, converting all its LIs appropriately
 */
function initTree(el) {
	
	// Find all LIs to process
	var childLis = el.childNodes;

	for(var i = 0; i < childLis.length; i++) {
		if(childLis[i].tagName && childLis[i].tagName.toLowerCase() == 'li') {
			var spanA, spanB, spanC;
			var startingPoint, stoppingPoint, childUL;

			var li = childLis[i];

			// Create our extra spans
			spanA = document.createElement('span');
			spanB = document.createElement('span');
			spanC = document.createElement('span');
			spanA.appendChild(spanB);
			spanB.appendChild(spanC);
			if (hasClass(li, 'closed')) {
				spanA.className = 'a spanClosed';
			} else {
				spanA.className = 'a';
			}
			spanA.onMouseOver = function() {}
			spanB.className = 'b';
			spanB.onclick = treeToggle;
			spanC.className = 'c';
			
			
			// Find the UL within the LI, if it exists
			stoppingPoint = li.childNodes.length;
			startingPoint = 0;
			childUL = null;

			for(var j = 0; j < li.childNodes.length; j++) {
				if(li.childNodes[j].tagName && li.childNodes[j].tagName.toLowerCase() == 'ul') {
					childUL = li.childNodes[j];
					stoppingPoint = j;
					break;					
				}
			}
				
			// Move all the nodes up until that point into spanC
			for(j=startingPoint;j<stoppingPoint;j++) {
				spanC.appendChild(li.childNodes[startingPoint]);
			}
			
			// Insert the outermost extra span into the tree
			if (childUL != null) {
				li.insertBefore(spanA, li.firstChild);	// the first child should be the UL at this point

//				li.insertBefore(spanA, li.childNodes[startingPoint]);
			} else li.appendChild(spanA);
			
			// Process the children
			if(childUL != null) {
				if(initTree(childUL)) {
					addClass(li, 'children', 'closed');
					addClass(spanA, 'children', 'spanClosed');
				}
			}
		}
	}
	
	if(li) {
		// li and spanA will still be set to the last item
		addClass(li, 'last', 'closed');
		addClass(spanA, 'last', 'spanClosed');
		return true;
	} else {
		return false;
	}
		
}
 

/*
 * +/- toggle the tree, where el is the <span class="b"> node
 * force, will force it to "open" or "close"
 */
function treeToggle(el, force) {
	el = this;
	
	while(el != null && (!el.tagName || el.tagName.toLowerCase() != "li")) el = el.parentNode;
	
	// Get UL within the LI
	var childSet = findChildWithTag(el, 'ul');
	var topSpan = findChildWithTag(el, 'span');

	if( force != null ){
		
		if( force == "open"){
			treeOpen( topSpan, el )
		}
		else if( force == "close" ){
			treeClose( topSpan, el )
		}
		
	}
	
	else if( childSet != null) {
		// Is open, close it
		if(!el.className.match(/(^| )closed($| )/)) {		
			treeClose( topSpan, el )
		// Is closed, open it
		} else {			
			treeOpen( topSpan, el )
		}
	}
}


function treeOpen( a, b ){
	removeClass(a,'spanClosed');
	removeClass(b,'closed');
}
	
	
function treeClose( a, b ){
	addClass(a,'spanClosed');
	addClass(b,'closed');
}

/*
 * Find the a child of el of type tag
 */
function findChildWithTag(el, tag) {
	for(var i=0;i<el.childNodes.length;i++) {
		if(el.childNodes[i].tagName != null && el.childNodes[i].tagName.toLowerCase() == tag) return el.childNodes[i];
	}
	return null;
}
/*
Takes all form elements in the form indicated by sourceForm, creates them in the form indicated by destForm before submitting destForm.

Note that destForm's onsubmit handlers will NOT be fired! (change this?)

Only special case is that if the form element already exists in the destForm as a hidden field, and only one exists, 
the below will update the existing value.
*/
function transferForm(sourceForm, destForm)
{
	if (destForm) {
		var sourceElements;
		var currElement;
		var currName;

		sourceElements = sourceForm.getElementsByTagName("SELECT");

		if (sourceElements) {
			// loop through all the input elements
			for (var i = 0; i < sourceElements.length; i++) {
				currElement = sourceElements[i];
				currName = currElement.getAttribute("name");
				currValue = currElement.options[currElement.selectedIndex].value;

				// check for a hidden input for which we might need to re-assign value	
				var formField;
				var existingFields = getElementsByName(currName, "INPUT", destForm);
				if (existingFields && existingFields.length == 1 && existingFields[0].type == "hidden") {
//					alert("field already exists; re-using");
					formField = existingFields[0];
				} else {
//					alert("field doesn't already exist; creating new");
					// create the select value as a hidden form element
					formField = document.createElement("input");
					formField.setAttribute("type", "hidden");
				}

				// assign attributes for hidden input field
				if (document.getElementById) {
					formField.setAttribute("name", currName);
					formField.setAttribute("value", currValue);
					destForm.appendChild(formField);
//					alert("transferred " + currName + "(" + currValue + ")");
				}
			}

		}

		sourceElements = sourceForm.getElementsByTagName("TEXTAREA");

		if (sourceElements) {
			// loop through all the textarea elements
			for (var i = 0; i < sourceElements.length; i++) {
				currElement = sourceElements[i];
				currName = currElement.getAttribute("name");

				// check for a hidden input for which we might need to re-assign value	
				var formField;
				var existingFields = getElementsByName(currName, "INPUT", destForm);

				if (existingFields && existingFields.length == 1 && existingFields[0].type == "hidden") {
//					alert("field already exists; re-using");
					formField = existingFields[0];
				} else {
//					alert("field doesn't already exist; creating new");
					// create the textarea value as a hidden form element
					formField = document.createElement("input");
				}

				// assign attributes for hidden input field
				if (document.getElementById) {
					formField.setAttribute("type", "hidden");
					formField.setAttribute("name", currName);
					formField.setAttribute("value", currElement.value);
					destForm.appendChild(formField);
//					alert("transferred " + currName + "(" + currElement.value + ")");
				}
			}

		}

		sourceElements = sourceForm.getElementsByTagName("INPUT");

		if (sourceElements) {
			// loop through all the input elements
			for (var i = 0; i < sourceElements.length; i++) {
				currElement = sourceElements[i];
				currName = currElement.getAttribute("name");
//				alert("name is " + currName + "; type is " + currElement.getAttribute("type"));

				// create the input value as a hidden form element (need special handling for submit?)
				var formField = document.createElement("input");

				// assign attributes for hidden input field
				if (document.getElementById) {
					formField.setAttribute("type", "hidden");
					formField.setAttribute("name", currName);
					formField.setAttribute("value", currElement.getAttribute("value"));
					destForm.appendChild(formField);
//					alert("transferred " + currName + "(" + currElement.getAttribute("value") + ")");
				}
			}
		}

		// submit the parent frame; note that event handlers won't fire
		destForm.submit();
//		alert(destForm.action);
	}
}
/*
Assuming a structure of: 
AOL:
<tr><td>label</td><td><input type="hidden" /></td></tr>
Internal Request Screen
<div class="formRow" id="formRowCG164255">
  <h3  class="formLabel">get org legal name <script language="JavaScript" type="text/javascript">getAOValue(726,164255,'request',264488);</script></h3>
  <div class="formReadOnly"></div>
  <input type="hidden" name="x_custom_request_value" value="" />
  <div class="clear"></div>
</div>
displays the value and sets the value of the hidden
*/

function updateAOField(labelId, value) {
  var reqForm = document.getElementsByName("reqForm")[0] || document.getElementsByName("impact_rpt")[0]; //SS--14206
  var sectionForm = jQuery('#cgcontent');
  if (reqForm) {
    // internal
    var rDiv = jQuery("#formRow" + labelId + " .formReadOnly");
    if (rDiv[0]) rDiv[0].innerHTML = value;
  } else {
//  } else if (sectionForm.className = "donorUi") {
    // AOL
    var labelTd = jQuery('label[for="' + labelId + '"]').first().parents('td'); // td containing the label indicated (based on FOR attribute)
    var valueTd = labelTd.next(); 

    // the next td (should contain the value)

    // check to see if this cell contains an input element
    var currInput = valueTd.find('input');
    
      valueTd.html(value); 

      if (currInput.length) {
      // create a hidden input field with the specified value
      var hiddenInput = document.createElement("input");
      hiddenInput.setAttribute("name", "x_custom_field_value");
      hiddenInput.setAttribute("type", "hidden");
      hiddenInput.setAttribute("value", value);
       
        valueTd.append(hiddenInput);  // add in the hidden input (for save purposes)
      } /* Not needed since the value is stamped in above 
      else {
        valueTd.append(value);  // add in the literal value
        
      }*/
  }
}
function getAOValue(x_target_custom_field_id, x_section_custom_field_id, x_section_table_name, x_section_key) {
  jQuery.ajax({
    url:'ao_json.get_value',
    method: 'get', 
    data: { x_target_custom_field_id: x_target_custom_field_id, x_section_custom_field_id: x_section_custom_field_id, x_section_table_name: x_section_table_name, x_section_key: x_section_key, x_ts:  new Date().getTime()},
    success: function(resp) {
      var json = jQuery.parseJSON(resp);
      if ((json.xCustomFieldId != null) && (json.xValue != '')) { 
        updateAOField('CG' + json.xCustomFieldId, json.xValue);
      }
       }
    });
}
function getEGValue(x_target_custom_field_id, x_section_custom_field_id, x_section_table_name, x_section_key) {
  jQuery.ajax({
    url: 'eg_json.get_value', 
    method: 'get', 
    data: { x_target_custom_field_id: x_target_custom_field_id, x_section_custom_field_id: x_section_custom_field_id, x_section_table_name: x_section_table_name, x_section_key: x_section_key, x_ts:  new Date().getTime()},
    success: function(resp) {
      var json = jQuery.parseJSON(resp);
      if ((json.xCustomFieldId != null) && (json.xValue != '')) { 
        updateAOField('CG' + json.xCustomFieldId, json.xValue);
      }
       }
    });
}

function refreshAOList(obj, fieldId, selectedValue) {
  jQuery.ajax({
    url: 'ao_json.get_list_options',
    data: {x_field_id: fieldId, x_parent_value: selectedValue},
    success: function(response) {
      jQuery(obj).html(response);
    }
  });
}
function refreshEGList(obj, fieldId, selectedValue) {
  jQuery.ajax({
    url: 'eg_json.get_list_options',
    data: {x_field_id: fieldId, x_parent_value: selectedValue},
    success: function(response) {
      jQuery(obj).html(response);
    }
  });
}
/*
Created By: Chris Campbell
Website: http://particletree.com
Date: 2/1/2006

Inspired by the lightbox implementation found at http://www.huddletogether.com/projects/lightbox/
*/

/*-------------------------------GLOBAL VARIABLES------------------------------------*/

var lbDetect = navigator.userAgent.toLowerCase();	//WL: changed name of variable due to name conflict
var OS,browser,version,total,thestring;

/*-----------------------------------------------------------------------------------------------*/

//Browser detect script origionally created by Peter Paul Koch at http://www.quirksmode.org/

function getBrowserInfo() {
	if (checkIt('konqueror')) {
		browser = "Konqueror";
		OS = "Linux";
	}
	else if (checkIt('safari')) browser 	= "Safari"
	else if (checkIt('omniweb')) browser 	= "OmniWeb"
	else if (checkIt('opera')) browser 		= "Opera"
	else if (checkIt('webtv')) browser 		= "WebTV";
	else if (checkIt('icab')) browser 		= "iCab"
	else if (checkIt('msie')) browser 		= "Internet Explorer"
	else if (!checkIt('compatible')) {
		browser = "Netscape Navigator"
		version = lbDetect.charAt(8);
	}
	else browser = "An unknown browser";

	if (!version) version = lbDetect.charAt(place + thestring.length);

	if (!OS) {
		if (checkIt('linux')) OS 		= "Linux";
		else if (checkIt('x11')) OS 	= "Unix";
		else if (checkIt('mac')) OS 	= "Mac"
		else if (checkIt('win')) OS 	= "Windows"
		else OS 								= "an unknown operating system";
	}
}

function checkIt(string) {
	place = lbDetect.indexOf(string) + 1;
	thestring = string;
	return place;
}

/*-----------------------------------------------------------------------------------------------*/

/* 
 * unloadCache has been removed in Prototype 1.6
 * INFO: http://www.prototypejs.org/api/event/unloadCache
 */
Event.observe(window, 'load', initialize, false);
Event.observe(window, 'load', getBrowserInfo, false);

var lightbox = Class.create();

lightbox.prototype = {

	yPos : 0,
	xPos : 0,

	initialize: function(ctrl) {
		this.content = ctrl.href;
		Event.observe(ctrl, 'click', this.activate.bindAsEventListener(this), false);
		ctrl.onclick = function(){return false;};
	},
	
	// Turn everything on - mainly the IE fixes
	activate: function(){
		if (browser == 'Internet Explorer'){
			this.getScroll();
			this.prepareIE('100%', 'hidden');
			this.setScroll(0,0);
			this.hideSelects('hidden');
		}
		this.displayLightbox("block");
	},
	
	// Ie requires height to 100% and overflow hidden or else you can scroll down past the lightbox
	prepareIE: function(height, overflow){
		bod = document.getElementsByTagName('body')[0];
		bod.style.height = height;
		bod.style.overflow = overflow;
  
		htm = document.getElementsByTagName('html')[0];
		htm.style.height = height;
		htm.style.overflow = overflow; 
	},
	
	// In IE, select elements hover on top of the lightbox
	hideSelects: function(visibility){
		selects = document.getElementsByTagName('select');
		for(i = 0; i < selects.length; i++) {
			selects[i].style.visibility = visibility;
		}
	},
	
	// Taken from lightbox implementation found at http://www.huddletogether.com/projects/lightbox/
	getScroll: function(){
		if (self.pageYOffset) {
			this.yPos = self.pageYOffset;
		} else if (document.documentElement && document.documentElement.scrollTop){
			this.yPos = document.documentElement.scrollTop; 
		} else if (document.body) {
			this.yPos = document.body.scrollTop;
		}
	},
	
	setScroll: function(x, y){
		window.scrollTo(x, y); 
	},
	
	displayLightbox: function(display){
		$('overlay').style.display = display;
		$('lightbox').style.display = display;
		if(display != 'none') this.loadInfo();
	},
	
	// Begin Ajax request based off of the href of the clicked linked
	loadInfo: function() {
		var myAjax = new Ajax.Request(
        this.content,
        {method: 'post', parameters: "", onComplete: this.processInfo.bindAsEventListener(this)}
		);
		
	},
	
	// Display Ajax response
	processInfo: function(response){
		info = "<div id='lbContent'>" + response.responseText + "</div>";
		new Insertion.Before($('lbLoadMessage'), info)
		$('lightbox').className = "done";	
		this.actions();			
	},
	
	// Search through new links within the lightbox, and attach click event
	actions: function(){
		lbActions = document.getElementsByClassName('lbAction');

		for(i = 0; i < lbActions.length; i++) {
			Event.observe(lbActions[i], 'click', this[lbActions[i].rel].bindAsEventListener(this), false);
			lbActions[i].onclick = function(){return false;};
		}

		// WL: add special class for Closing lightbox
		lbActions = document.getElementsByClassName('lbClose');

		for(i = 0; i < lbActions.length; i++) {
			Event.observe(lbActions[i], 'click', this['deactivate'].bindAsEventListener(this), false);
			lbActions[i].onclick = function(){return false;};
		}
	},
	
	// Example of creating your own functionality once lightbox is initiated
	insert: function(e){
	   link = Event.element(e).parentNode;
	   Element.remove($('lbContent'));
	 
	   var myAjax = new Ajax.Request(
			  link.href,
			  {method: 'post', parameters: "", onComplete: this.processInfo.bindAsEventListener(this)}
	   );
	 
	},
	
	// Example of creating your own functionality once lightbox is initiated
	deactivate: function(){
		Element.remove($('lbContent'));
		
		if (browser == "Internet Explorer"){
			this.setScroll(0,this.yPos);
			this.prepareIE("auto", "auto");
			this.hideSelects("visible");
		}
		
		this.displayLightbox("none");
	}
}

/*-----------------------------------------------------------------------------------------------*/

// Onload, make all links that need to trigger a lightbox active
function initialize(){
	lbox = document.getElementsByClassName('lbOn');
	// only add markup if the page includes lightbox tags
	if (lbox.length > 0) {
		addLightboxMarkup();
		for(i = 0; i < lbox.length; i++) {
			valid = new lightbox(lbox[i]);
		}
	}
}

// Add in markup necessary to make this work. Basically two divs:
// Overlay holds the shadow
// Lightbox is the centered square that the content is put into.
function addLightboxMarkup() {
	bod 				= document.getElementsByTagName('body')[0];
	overlay 			= document.createElement('div');
	overlay.id		= 'overlay';
	lb					= document.createElement('div');
	lb.id				= 'lightbox';
	lb.className 	= 'loading';
	lb.innerHTML	= '<div id="lbLoadMessage">' +
						  '<p>Loading</p>' +
						  '</div>';
	bod.appendChild(overlay);
	bod.appendChild(lb);
}
jQuery(document).ready(function() {
  
  jQuery('body').on('keyup', 'textarea[class*="max"]', function(event) {
    countCharacters(jQuery(event.currentTarget));
  });

  jQuery('textarea[class*="max"]').each(function() {
    countCharacters(jQuery(this));
  });

  function countCharacters(element) {
    var maxes = element.attr('class').match(/(?:\bmax)(\d+\b)/);
    var max = maxes ? maxes[1] : null;
    var msg_elem = jQuery('.formItem' + element.attr('id')).find('.maxLength').get(0);
    var newlineFixedString = element.val().replace(/(?:\r\n|\r|\n)/g, '\r\n');
    var len = newlineFixedString.length;
    var chars_remaining = max - len;
    var new_msg;
    if (len == 0) {
      new_msg = CyberGrants.l10n.characterMaximum(CyberGrants.l10n.language(), max.toString());
    } else if (len <= max) {
      new_msg = CyberGrants.l10n.charactersRemaining(CyberGrants.l10n.language(), chars_remaining.toString());
    } else if (len > max) {
      new_msg = CyberGrants.l10n.charactersOver(CyberGrants.l10n.language(), chars_remaining.toString().substr(1));
    };

    // when the length is zero the message already contains the paren.
    new_msg = len ? '(' + new_msg + ')' : new_msg;
    jQuery(msg_elem).text(new_msg);
  }

});
var fieldCache = {};  // instantiate Object to hold cache field values

// test/temp file for developing conditional display logic

// receives: custom field ID
// returns field value (either from screen, or saved in database)
function getValue(fieldId, userType, key) {
  // check for existence as a form element
  if (jQuery('#CG' + fieldId).length > 0 && ((jQuery('#CG' + fieldId).prop('tagName') == 'INPUT')||(jQuery('#CG' + fieldId).prop('tagName') == 'SELECT')||(jQuery('#CG' + fieldId).prop('tagName') == 'TEXTAREA'))) {
    return jQuery('#CG' + fieldId).val();
  } else {
    // possibly will address team specific handling as well
    // date was different; possibly impact datepicker handling
    // payment standard fields don't follow this convention (VERIFY)

    // check for class for checkbox/summable/pct/etc values
    var multiInput = jQuery('.CG' + fieldId);
    var fieldKey = 'CG' + fieldId + '|'+ key; // cache with key for modals
    if (multiInput.length == 0) {
      // cannot locate field on page, so either it's a file type (no corresponding input), or the field isn't on the page at all
      // check to see whether we have a cached response for this field
      if (fieldKey in fieldCache) {
        return fieldCache[fieldKey];
      } else {
        var json;

        // make AJAX request
        // consider whether it's possible to issue all parameters together
        // possibly implement a cache on top
        jQuery.ajax({
            url: 'field_view.get_field_value',
            async: false, // we need to wait for this response in order to proceed
            data: { x_custom_field_id: fieldId, x_ut: userType, x_key: key, x_ts:  new Date().getTime()},
            success: function(resp) {
                json = jQuery.parseJSON(resp);
            }
        });

        // check for multiple responses
        if (json.values) {
          fieldCache[fieldKey] = json.values.split(',');  // cache the system response
          return json.values.split(',');
        } else {
          fieldCache[fieldKey] = json.value;  // cache the system response
          return json.value;
        }
      }
    } else {
      var values = [];
      multiInput.each(function(index, item) {
        // get the form values for this multiple input item
        if (jQuery(item).prop('selected') || jQuery(item).prop('checked') || (jQuery(item).prop("tagName") === "INPUT" && item.type !== "checkbox") ) {
          if (jQuery(item).val() != '' && jQuery(item).val() != null) values.push(jQuery(item).val());
        }
      });
      return values;
    }
  }
}

function clearValue(fieldId, value) {
  // check for existence as a form element
  if (jQuery('#CG' + fieldId).length > 0 && ((jQuery('#CG' + fieldId).prop('tagName') == 'INPUT')||(jQuery('#CG' + fieldId).prop('tagName') == 'SELECT')||(jQuery('#CG' + fieldId).prop('tagName') == 'TEXTAREA'))) {
    if (jQuery('#CG' + fieldId).val() != null && jQuery('#CG' + fieldId).val() != value) {
      // for select options, if we're trying to set the value to blank, then deselect all options
      if (value == '' && (jQuery('#CG' + fieldId).prop('tagName') == 'SELECT')){
        for (i = 0; i < jQuery('#CG' + fieldId)[0].options.length; i++){
          jQuery('#CG' + fieldId)[0].options[i].selected = false;
        }
        if (jQuery('#CG' + fieldId).attr('multiple') == null)
          jQuery('#CG' + fieldId)[0].selectedIndex = 0; // Redundant for IE
      } else {
        jQuery('#CG' + fieldId).val(value);
      }
//      jQuery('#CG' + fieldId).simulate('change'); // fire onchange in case of cascading dependencies
    }
  } else {
    // check for class for checkbox/summable/pct/etc values
    var multiInput = jQuery('.CG' + fieldId);
    if (multiInput.length == 0) {
      // check for metric contents
      multiInput = jQuery('#tblMetric' + fieldId + ' input[type="text"], #tblMetric' + fieldId + ' select, #tblMetric' + fieldId + ' textarea');
    }

    multiInput.each(function(index, item) {
      // get the form values for this multiple input item
      if (((jQuery(item).val() != null) && jQuery(item).val() != value)|| jQuery(item).is(":checkbox")) {
      
        // for select options, if we're trying to set the value to blank, then deselect all options
        if (value == '' && (jQuery(item).prop('tagName') == 'SELECT')){
          for (i = 0; i < jQuery(item)[0].options.length; i++){
            jQuery(item)[0].options[i].selected = false;
          }
          jQuery(item)[0].selectedIndex = -1; // Redunant for IE
        } else {
          if (jQuery(item).is(":checkbox"))
            jQuery(item).prop("checked", false);
          else
            jQuery(item).val(value);
        }
      }
    });
  }
}

// For numbers, expect clean numbers (Number(val.replace(/\$|\,/g, "")))
// For dates, expect formatted dates (Date.parse(val))
// For lists, expect arrays ([..,..])
function evalCondition(val, operator, cond) {
  var $A = function(arr) {
    if (Array.isArray(arr)) return Array.prototype.slice.call(arr);
    else return [arr];
  };
  var EVAL_EXPRESSIONS = {
    less_than: 'val !== "" && val < cond',
    less_than_or_equal_to: 'val !== "" && val <= cond',
    equal_to: 'val == cond',
    not_equal_to: 'val !== "" && val != cond',
    greater_than: 'val !== "" && val > cond',
    greater_than_or_equal_to: 'val !== "" && val >= cond',
    between: 'val !== "" && val >= cond[0] && val  <= cond[1]', // using !== otherwise 0 != "" evaluates to false
    is_blank: 'val == ""',
    is_not_blank: 'val != ""',
    includes: '$A(typeof val == "string" ? val.split(","): val).intersect($A(cond)).size() == 0 ? false : true',
    does_not_include: '$A(typeof val == "string" ? val.split(","): val).intersect($A(cond)).size() == 0 ? true: false'
  }

  // for the includes/does not includes operators, val might be a standlone string (single value selected), or could be an array object
  // make it an array by doing this: typeof val == "string" ? val.split(","): val


//(val[0]==undefined ? val : val[0])

  var op = EVAL_EXPRESSIONS[operator.replace(/ /g,"_")];

  return eval(op);
}

// fieldId = custom field ID, status = on/off
// parent container (whether div/internal or tr/external) should have a class of formRow
function toggleField(fieldId, status) {
  // try the easy lookup for the formRow first
  var p = jQuery('#formRowCG' + fieldId);

  if (p.length === 0) {
    // for Apply Online/EG, look for matching class on container item should only be one)
    p = jQuery('.formRowCG' + fieldId);
    if (p.length === 0) {
      // For E2 there is no formRow class
      p = jQuery('#CG' + fieldId).parents('.row').first();

      if (p.length === 0) {
        // For E2 checkboxes
        p = jQuery('.CG' + fieldId).first().parents('.row').first();
      }
    }
  }

    //For subdividors 
   if(p.length ===0)
    if (jQuery('#CG' + fieldId).length > 0 && jQuery('#CG' + fieldId).hasClass("formSubRow"))
      p = jQuery('#CG' + fieldId);

  // we identified the row, now turn it off
  if (p) {
    if (status == 'on') {
      p.show();
    } else {
      p.hide();

      clearValue(fieldId, '');
      // TODO: stores temporary value and restores them
    }
  }
}

// extracts the list value ID from an array of multi-selects  that might be formatted as custom_field + "|" + list_value_id
// val.indexOf("|")==-1?val:val.split("|")[1]
// Usage val = ["306621|33509832", "306621|33509833", "306621|33509834"]
// Returns ["33509832", "33509833", "33509834"]
function condFormatMulti(val) {
  if (val === null || val.length==0) {
    return "";
  } else {
    var newVal = [];
    if (typeof(val) !== 'string') {
      jQuery.each(val, function(index, v) {
        newVal.push(v.indexOf("|")==-1?v:v.split("|")[1]);
      });
    } else {
      newVal.push(val.indexOf("|")==-1 ? val : val.split("|")[1]);
    }
    return newVal;
  }
}

function condFormatNumber(val) {
  return (val === null || val.length==0) ? "" : Number(val.replace(/\$|\,/g, ""));
}

function condFormatDate(val) {
  return (val === null || val.length==0) ? "" : Date.parse(val);
}

// AOL/EG show responses as Yes/No, not Y/N
function condFormatYesNo(val) {
  return (val === null) ? "" : val.substring(0,1);
}// accordion.js v2.0
//
// Copyright (c) 2007 stickmanlabs
// Author: Kevin P Miller | http://www.stickmanlabs.com
// 
// Accordion is freely distributable under the terms of an MIT-style license.
//
// I don't care what you think about the file size...
//   Be a pro: 
//	    http://www.thinkvitamin.com/features/webapps/serving-javascript-fast
//      http://rakaz.nl/item/make_your_pages_load_faster_by_combining_and_compressing_javascript_and_css_files
//

/*-----------------------------------------------------------------------------------------------*/

if (typeof Effect == 'undefined') 
	throw("accordion.js requires including script.aculo.us' effects.js library!");

var accordion = Class.create();
accordion.prototype = {

	//
	//  Setup the Variables
	//
	showAccordion : null,
	currentAccordion : null,
	duration : null,
	effects : [],
	animating : false,
	
	//  
	//  Initialize the accordions
	//
	initialize: function(container, options) {
	  if (!$(container)) {
	    throw(container+" doesn't exist!");
	    return false;
	  }
	  
		this.options = Object.extend({
			resizeSpeed : 8,
			classNames : {
				toggle : 'accordion_toggle',
				toggleActive : 'accordion_toggle_active',
				content : 'accordion_content'
			},
			defaultSize : {
				height : null,
				width : null
			},
			direction : 'vertical',
			onEvent : 'click'
		}, options || {});
		
		this.duration = ((11-this.options.resizeSpeed)*0.15);
		var self = this;

		var accordions = $$('#'+container+' .'+this.options.classNames.toggle);
		accordions.each(function(accordion) {
			Event.observe(accordion, self.options.onEvent, self.activate.bind(self, accordion));	// pass in accordion (h2)
			if (self.options.onEvent == 'click') {
			  accordion.onclick = function() {return false;};
			}
			
			if (self.options.direction == 'horizontal') {
				var options = $H({width: '0px'});
			} else {
				var options = $H({height: '0px'});			
			}
			options.update({display: 'none'});			
			
			self.currentAccordion = $(accordion.down('.' + this.options.classNames.content)).setStyle(options.toObject());			
		}, this);
	},
	
	//
	//  Activate an accordion
	//
	activate : function(accordion) {
		if (this.animating) {	// WL: this = accordion reference; accordion = h3
			return false;
		}
		
		this.effects = [];
	
		this.currentAccordion = $(accordion.down('.' + this.options.classNames.content));
		this.currentAccordion.setStyle({
			display: 'block'
		});		
		
		this.currentAccordion.up('.' + this.options.classNames.toggle).addClassName(this.options.classNames.toggleActive);

		if (this.options.direction == 'horizontal') {
			this.scaling = $H({
				scaleX: true,
				scaleY: false
			});
		} else {
			this.scaling = $H({
				scaleX: false,
				scaleY: true
			});			
		}
			
		if (this.currentAccordion == this.showAccordion) {
		  this.deactivate();
		} else {
		  this._handleAccordion();
		}
	},
	// 
	// Deactivate an active accordion
	//
	deactivate : function() {
		var options = $H({
		  duration: this.duration,
			scaleContent: false,
			transition: Effect.Transitions.sinoidal,
			queue: {
				position: 'end', 
				scope: 'accordionAnimation'
			},
			scaleMode: { 
				originalHeight: this.options.defaultSize.height ? this.options.defaultSize.height : this.currentAccordion.scrollHeight,
				originalWidth: this.options.defaultSize.width ? this.options.defaultSize.width : this.currentAccordion.scrollWidth
			},
			afterFinish: function() {
				this.showAccordion.setStyle({
          			height: 'auto',
					display: 'none'
				});				
				this.showAccordion = null;
				this.animating = false;
			}.bind(this)
		});    
    options.update(this.scaling);

    this.showAccordion.up('.' + this.options.classNames.toggle).removeClassName(this.options.classNames.toggleActive);
    
		new Effect.Scale(this.showAccordion, 0, options.toObject());
	},

  //
  // Handle the open/close actions of the accordion
  //
	_handleAccordion : function() {
		var options = $H({
			sync: true,
			scaleFrom: 0,
			scaleContent: false,
			transition: Effect.Transitions.sinoidal,	// WL: this = Accordion object still
			scaleMode: { 
				originalHeight: this.options.defaultSize.height ? this.options.defaultSize.height : this.currentAccordion.scrollHeight,
				originalWidth: this.options.defaultSize.width ? this.options.defaultSize.width : this.currentAccordion.scrollWidth
			}
		});
		options.update(this.scaling);
		
		this.effects.push(
			new Effect.Scale(this.currentAccordion, 100, options.toObject())
		);

		if (this.showAccordion) {
			this.showAccordion.up('.' + this.options.classNames.toggle).removeClassName(this.options.classNames.toggleActive);
			
			options = $H({
				sync: true,
				scaleContent: false,
				transition: Effect.Transitions.sinoidal
			});
			options.update(this.scaling);
			
			this.effects.push(
				new Effect.Scale(this.showAccordion, 0, options.toObject())
			);				
		}
		
    new Effect.Parallel(this.effects, {
			duration: this.duration, 
			queue: {
				position: 'end', 
				scope: 'accordionAnimation'
			},
			beforeStart: function() {
				this.animating = true;
			}.bind(this),
			afterFinish: function() {
				if (this.showAccordion) {
					this.showAccordion.setStyle({
						display: 'none'
					});				
				}
				$(this.currentAccordion).setStyle({
				  height: 'auto'
				});
				this.showAccordion = this.currentAccordion;
				this.animating = false;
			}.bind(this)
		});
	}
}
	// callback function invoked after user requests download of chart
function saveExportProperties(objRtn){              
	if (objRtn.statusCode=="1") { // upon success, add iframewhich links to content
	var iframe = '<iframe src="' + objRtn.fileName + '" style="display:none"></iframe>';
	jQuery("body").append(iframe);
	} else {
	 alert("Error while retrieving image. Please contact your Account Coordinator for assistance.");
	}
}

var thisPage;

/*
 
generated by portal page

thisPage.setTitle();
thisPage.setUser();
thisPage.setDate();
*/

var Portal = function() {
	this._portletList = {};
	this._css = '';
	this._title = '';
	this._user = '';
	this._date = '';
	this._numPortlets = 0;
	this._numCharts = 0;
	this._numExportedCharts = 0;
	this._numReadyForExport = 0;
	this._lightboxInitialized = false;

	this.initialize();
};

Portal.prototype.initialize = function() {
	//this._portletList = new Object();
};

Portal.prototype.initializeLightbox = function() {
	if (!this._lightboxInitialized) {
		// prepare the modal lightbox for showing status
		addLightboxMarkup();
		jQuery('#lightbox').css('height','100px');
		jQuery('#lightbox').html('<div style="text-align: center;"><div style="padding-top: 2em; padding-bottom: 0.5em;">Generating output</div><img src="/includes/images/loading_24x24.gif" alt="Generating output" /></div>');
		this._lightboxInitialized = true;
	}
};

Portal.prototype.increaseNumExportedCharts = function() {
	this._numExportedCharts++;
};

Portal.prototype.increaseNumPortlets = function() {
	this._numPortlets++;
};

Portal.prototype.increaseNumReadyForExport = function() {
	this._numReadyForExport++;
};

Portal.prototype.retrieveOutput = function() {
	// if we have the right number of charts, then redirect
	if (this._numPortlets == this._numReadyForExport) {
		var xml = '<?xml version="1.0" encoding="UTF-8"?>' +
		'<!DOCTYPE pdf PUBLIC "-//big.faceless.org//report" "report-1.1.dtd">' +
		'<pdf>' +
		'<head>' +
		'<meta name="creator" value="CyberGrants"/>' +
		'<meta name="author" value="CyberGrants"/>' +
		'<meta name="title" value="' + this._title + '"/>' +
		((this._css == "") ? "" : '<style type="text/css">' + this._css + '</style>');
		
		xml = xml + '<macrolist><macro id="rptPageHeader"><div class="header">' +
					'<table width="100%"><tr><td width="75%"><h1 class="title">' + this._title + '</h1></td>' + 
					'<td width="25%" align="right"><p class="user">Run By: ' + this._user + '</p>' +
					'<p class="date">Run Date: ' + this._date + '</p></td></tr>'+
					'</table></div></macro></macrolist>' +
					'</head>' +
					'<body size="letter-landscape" header="rptPageHeader" header-height="40">';

		// need to wrap the entire page contents within a p
		// xml = xml + '<p>';
		var columns = jQuery('.column');
		
		// create a "two dimensional" array to hold the portlet contents
		var portletArray = [];
		// make note of the most number of portlets we'll have to support per column
		var maxPortletsPerColumn = 0;
		for (var columnIndex = 0; columnIndex < columns.length; columnIndex++) {
			// create an array of the portlets in this column
			portletArray[columnIndex] = [];
			// loop through portlets in this column
			var portlets = jQuery('.portlet', columns[columnIndex]);
			maxPortletsPerColumn = (portlets.length > maxPortletsPerColumn)? portlets.length : maxPortletsPerColumn;
			for (var portletIndex = 0; portletIndex < portlets.length; portletIndex++) {
				if (this._portletList[portlets[portletIndex].id.substring(2)]) {
					portletArray[columnIndex][portletIndex] = '<div id="' + portlets[portletIndex].id + '" class="column' + (columnIndex + 1) + ' portlet">' +
							this._portletList[portlets[portletIndex].id.substring(2)].getContent() +
							'</div>';
				}
			}
		}

		// now generate the xml by iterating through each "row" of portlets
		for (var i = 0; i < maxPortletsPerColumn; i++) {  // i = row counter
			// if multi-column, need to wrap the "row" of portlets in a p tag for floats and portlet widths to work, otherwise floats ignored, and width goes to 0
			if (columns.length > 1) {
				xml = xml + '<p>';
			}
			for (var j = 0; j < columns.length; j++) {    // j = column counter
				xml = xml + ((portletArray[j][i] != undefined) ? portletArray[j][i] : '');
			}
			if (columns.length > 1) {
				xml = xml + '</p>';
			}
		}
		
		// close doc
		// xml = xml + '</p></body></pdf>';
		xml = xml + '</body></pdf>';
		
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", "/dashboard/PdfStream",true);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				var json = JSON.parse(xmlhttp.responseText);
				// create the iframe that houses the filename in the response
				if (json.statusCode == "1") {
					// http://stackoverflow.com/questions/3499597/javascript-jquery-to-download-file-via-post-with-json-data
					var iframe = '<iframe src="/dashboard/ExportedImage/' + json.fileName + '" style="display:none"></iframe>';
					jQuery("body").append(iframe);
				} else {
					alert("Export failed; please contact your Account Coordinator for assistance");
				}
				// remove modal
				jQuery('#overlay').css('display', 'none');
				jQuery('#lightbox').css('display', 'none'); 
			}
		};
		xmlhttp.setRequestHeader("Content-Type", "text/xml");
		try {
			console.log(xml);
		} catch(e) {}

		xmlhttp.send(xml);
		
	}
};

Portal.prototype.setCss = function(css) {
	this._css = css;
};

Portal.prototype.setTitle = function(title) {
	this._title = title;
};

Portal.prototype.setUser = function(user) {
	this._user = user;
};

Portal.prototype.setDate = function(dateString) {
	this._date = dateString;
};

Portal.prototype.exportAll = function() {
	try {
		var allReady = true;
		for (var portlet in this._portletList) {
			allReady = allReady&&this._portletList[portlet].isReady();
		}

		if (allReady) {
			for (var portletReady in this._portletList) {
				this._portletList[portletReady].captureContent();
			}

			// put up modal screen
			this.initializeLightbox();
			jQuery('#overlay').css('display', 'block');
			jQuery('#lightbox').css('display', 'block');
		} else {
			alert("Please wait until all charts on the page have finished rendering before attempting export");
		}
	} catch (e) {
		// error occurred, so take down modal, show error message
		// remove modal
		jQuery('#overlay').css('display', 'none');
		jQuery('#lightbox').css('display', 'none');
		alert(e);
	}
};


/*
Expand/collapse behavior for internal portlets
 */
var Portlet = function(containerId, index) {
	this._portletId = null;
	this._index = null;
	this._containerId = null;
	this._title = "";
	this._width = ""; // width of portlet in inches
	this._content = "";
	this._currentState = "open";
	this._toggleLink = null;
	this._excelLink = null;
	this._exportable = true;

	this.initialize(containerId, index);
};

Portlet.prototype.initialize = function(containerId, index) {
	this._portletId = containerId.substring(2); // assume containerID = "cg" + portlet ID
	this._index = index;

	this._containerId = containerId;
	// initialize the portlet actions
	try {
		this._toggleLink = jQuery('#' + this._containerId).find('.toggle-link')[0];
		this._currentState = (jQuery(this._toggleLink).hasClass('closed')) ? 'closed' : 'open';

		// collapse the portlet as needed
		if (this._currentState == 'closed') {
			this.collapse();
		}
		this.initToggle();
	} catch (ignore) {} 
	try {     
		this._title = jQuery('#' + this._containerId).find('.portlet-title h2')[0].innerHTML;
	} catch (ignore) {}
	try {
		this._excelLink = jQuery('#' + this._containerId).find('.portlet-title .formImgExcel')[0];

		if (this._excelLink != undefined) {
			// add the onclick events to the expand/collapse link
			jQuery(this._excelLink).on('click', this.exportToExcel.bind(this));
		}
	} catch (ignore) {}
	this.self = this;

	thisPage.increaseNumPortlets();
	// this.getContent.bind(this);
};

Portlet.prototype.initToggle = function(response) {
	// add the onclick events to the expand/collapse link
	jQuery(this._toggleLink).on('click', this.toggleView.bind(this));
};

Portlet.prototype.collapse = function() {      // collapse portlet contents  
	jQuery('#' + this._containerId).find('.header, .content, .footer').slideUp();

	// save the collapse state for this portlet
	jQuery.ajax({
		url: 'int_portlet_view.collapse_portlet',
		method: 'GET',
		data: { x_portlet_id: this._portletId, x_ts: new Date().getTime() }
	});

	this._currentState = 'closed';
};

Portlet.prototype.expand = function() {      // expand portlet contents
	jQuery('#' + this._containerId).find('.header, .content, .footer').slideDown();

	// save the expanded state for this portlet
	jQuery.ajax({
		url: 'int_portlet_view.expand_portlet',
		method: 'GET',
		data: { x_portlet_id: this._portletId, x_ts: new Date().getTime() }
	});

	this._currentState = 'open';
};

Portlet.prototype.setWidth = function(width) {
	this._width = width;
};

Portlet.prototype.setExportable = function(exportable) {
	this._exportable = exportable;
};

Portlet.prototype.toggleView = function(event) { // changes the view type
	// prevent the link from working
	event.preventDefault();
	event.stopPropagation();

	// remove the old class that denoted the state of the link
	jQuery(this._toggleLink).removeClass(this._currentState);

	// if currently open, then close, else expand
	if (this._currentState == 'open') {
		this.collapse();
	} else {
		this.expand();
	}

	// update the class
	jQuery(this._toggleLink).addClass(this._currentState);
};

Portlet.prototype.saveAjaxResponse = function(response) {  // used as a callback for chart capture process completion      
	// resize the image to occupy 90% of the portlet width in inches
	this._content = (response.statusCode == "1") ? ('<img src="http://localhost' + response.fileName + '" width="' + 
		(this._width * 0.9) + 'in" height="' + ((response.height/response.width) * (this._width * 0.9)) + 'in" />') : 
		'Error saving chart: ' + response.statusMessage;

							//            thisPage.increaseNumReadyForExport();
								//          thisPage.retrieveOutput();        

	thisPage.increaseNumExportedCharts.apply(thisPage); // TODO: is this apply needed?
	thisPage.increaseNumReadyForExport.apply(thisPage);
	thisPage.retrieveOutput.apply(thisPage);
};

Portlet.prototype.captureContent = function() {
	if (!this._exportable || this._currentState == 'closed') {
		thisPage.increaseNumReadyForExport();
		thisPage.retrieveOutput();
	} else {
		// check to see if this portlet contains a chart
		var cgChart;
		cgChart = FusionCharts('chart' + this._portletId);
		if (cgChart == undefined) {
			cgChart = FusionCharts('widget' + this._portletId);
		}
		if (cgChart == undefined) {
			cgChart = getMapFromId('map' + this._portletId);
		}
		if (cgChart != undefined) {
			if (cgChart.hasRendered && cgChart.hasRendered()) {
				if (cgChart.exportChart) {
					cgChart.exportChart({"exportFormat" : "png", "exportCallback" : "thisPage._portletList[" + this._portletId + "].saveAjaxResponse"});
				}
			} else {
				// throw an exception if the charts aren't ready
				throw "Please wait until all charts on the page have finished rendering before attempting export";
			}
		} else {
			// retrieve contents of table with class .data-table in the portlet
			if (jQuery.browser.msie) {// IE strips double quotes from attribute names
				this._content = '<table class="data-table">' + innerXHTML(jQuery('#' + this._containerId).find('.content table.data-table')[0]) + '</table>';
			} else {
				this._content = '<table class="data-table">' + jQuery('#' + this._containerId).find('.content table.data-table')[0].innerHTML + '</table>';                  
			}
			thisPage.increaseNumReadyForExport();
			thisPage.retrieveOutput();        
		}
	}
};

Portlet.prototype.exportToExcel = function() {
	var filter = "";
	try {
		filter = '<p class="filter">' + jQuery('#' + this._containerId).find('.filter')[0].innerHTML + '</p>';
	} catch (ignored) {}

	var xml = '<?xml version="1.0" encoding="UTF-8"?><div>' + 
						'<table class="data-table">' + jQuery('#' + this._containerId).find('.content table.data-table')[0].innerHTML + '</table>' + 
						'</div>' +
						filter;
	try {
		console.log(xml);           
	} catch (e) {}
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("POST", "/dashboard/ExcelStream", true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			var json = JSON.parse(xmlhttp.responseText);
			// create the iframe that houses the filename in the response
			if (json.statusCode == "1") {
				var iframe = '<iframe src="/dashboard/ExportedImage/' + json.fileName + '" style="display:none"></iframe>';
				jQuery("body").append(iframe);
			} else {
				alert("Export failed; please contact your Account Coordinator for assistance");
			}
		}
	};
	xmlhttp.setRequestHeader("Content-Type", "text/xml");

	xmlhttp.send(xml);            
};

Portlet.prototype.getContent = function() {
	if (!this._exportable || this._currentState == 'closed') {
		return "";
	} else {
		var filter = "";
		try {
			filter = '<p class="filter">' + 
					((jQuery.browser.msie) ? innerXHTML(jQuery('#' + this._containerId).find('.filter')[0]) : jQuery('#' + this._containerId).find('.filter')[0].innerHTML) + 
					'</p>';
		} catch (ignored) {}
		return (this._title.length == 0 ? '' : '<h2 class="portlet-title">' + this._title + '</h2>') +
				'<div class="content">' + 
				this._content +
				'</div>' +
				filter;
	}
};

Portlet.prototype.isReady = function() {
	if (!this._exportable) {
		return true;
	} else {
		if (this._currentState == 'closed') {
			return true;
		} else {
			// check to see if this portlet contains a chart
			var cgChart;
			cgChart = FusionCharts('chart' + this._portletId);
			if (cgChart == undefined) {
				cgChart = FusionCharts('widget' + this._portletId);
			}
			if (cgChart == undefined) {
				cgChart = FusionCharts('map' + this._portletId);
			}
			if (cgChart != undefined) {
				if (cgChart.hasRendered && cgChart.hasRendered()) {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		}
	}
};
/*
Written by Steve Tucker, 2006, http://www.stevetucker.co.uk
Full documentation can be found at http://www.stevetucker.co.uk/page-innerxhtml.php
Released under the Creative Commons Attribution-Share Alike 3.0  License, http://creativecommons.org/licenses/by-sa/3.0/

Change Log
----------
15/10/2006	v0.3	innerXHTML official release.
21/03/2007	v0.4	1. Third argument $appendage added (Steve Tucker & Stef Dawson, www.stefdawson.com)
			2. $source argument accepts string ID (Stef Dawson)
			3. IE6 'on' functions work (Stef Dawson & Steve Tucker)
*/
innerXHTML = function($source,$string,$appendage) {
	// (v0.4) Written 2006 by Steve Tucker, http://www.stevetucker.co.uk
	if (typeof($source) == 'string') $source = document.getElementById($source);
	if (!($source.nodeType == 1)) return false;
	var $children = $source.childNodes;
	var $xhtml = '';
	if (!$string) {
		for (var $i=0; $i<$children.length; $i++) {
			if ($children[$i].nodeType == 3) {
				var $text_content = $children[$i].nodeValue;
				$text_content = $text_content.replace(/</g,'&lt;');
				$text_content = $text_content.replace(/>/g,'&gt;');
				$xhtml += $text_content;
			}
			else if ($children[$i].nodeType == 8) {
				$xhtml += '<!--'+$children[$i].nodeValue+'-->';
			}
			else {
				$xhtml += '<'+$children[$i].nodeName.toLowerCase();
				var $attributes = $children[$i].attributes;
 				for (var $j=0; $j<$attributes.length; $j++) {
					var $attName = $attributes[$j].nodeName.toLowerCase();
					var $attValue = $attributes[$j].nodeValue;
					if ($attName == 'style' && $children[$i].style.cssText) {
						$xhtml += ' style="'+$children[$i].style.cssText.toLowerCase()+'"';
					}
					else if ($attValue && $attName != 'contenteditable') {
						$xhtml += ' '+$attName+'="'+$attValue+'"';
					}
				}
				$xhtml += '>'+innerXHTML($children[$i]);
				$xhtml += '</'+$children[$i].nodeName.toLowerCase()+'>';
			}
		}
	}
	else {
		if (!$appendage) {
			while ($children.length>0) {
				$source.removeChild($children[0]);
			}
			$appendage = false;
		}
		$xhtml = $string;
		while ($string) {
			var $returned = translateXHTML($string);
			var $elements = $returned[0];
			$string = $returned[1];
			if ($elements) {
				if (typeof($appendage) == 'string') $appendage = document.getElementById($appendage);
				if (!($appendage.nodeType == 1)) $source.appendChild($elements);
				else $source.insertBefore($elements,$appendage);
			}
		}
	}
	return $xhtml;
}
function translateXHTML($string) {
	var $match = /^<\/[a-z0-9]{1,}>/i.test($string);
	if ($match) {
		var $return = Array;
		$return[0] = false;
		$return[1] = $string.replace(/^<\/[a-z0-9]{1,}>/i,'');
		return $return;
	}
	$match = /^<[a-z]{1,}/i.test($string);
	if ($match) {
		$string = $string.replace(/^</,'');
		var $element = $string.match(/[a-z0-9]{1,}/i);
		if ($element) {
			var $new_element = document.createElement($element[0]);
			$string = $string.replace(/[a-z0-9]{1,}/i,'');
			var $attribute = true;
			while ($attribute) {
				$string = $string.replace(/^\s{1,}/,'');
				$attribute = $string.match(/^[a-z1-9_-]{1,}="[^"]{0,}"/i);
				if ($attribute) {
					$attribute = $attribute[0];
					$string = $string.replace(/^[a-z1-9_-]{1,}="[^"]{0,}"/i,'');
					var $attName = $attribute.match(/^[a-z1-9_-]{1,}/i);
					$attribute = $attribute.replace(/^[a-z1-9_-]{1,}="/i,'');
					$attribute = $attribute.replace(/;{0,1}"$/,'');
					if ($attribute) {
						var $attValue = $attribute;
						if ($attName == 'value') $new_element.value = $attValue;
						else if ($attName == 'class') $new_element.className = $attValue;
						else if ($attName == 'style') {
							var $style = $attValue.split(';');
							for (var $i=0; $i<$style.length; $i++) {
								var $this_style = $style[$i].split(':');
								$this_style[0] = $this_style[0].toLowerCase().replace(/(^\s{0,})|(\s{0,1}$)/,'');
								$this_style[1] = $this_style[1].toLowerCase().replace(/(^\s{0,})|(\s{0,1}$)/,'');
								if (/-{1,}/g.test($this_style[0])) {
									var $this_style_words = $this_style[0].split(/-/g);
									$this_style[0] = '';
									for (var $j=0; $j<$this_style_words.length; $j++) {
										if ($j==0) {
											$this_style[0] = $this_style_words[0];
											continue;
										}
										var $first_letter = $this_style_words[$j].toUpperCase().match(/^[a-z]{1,1}/i);
										$this_style[0] += $first_letter+$this_style_words[$j].replace(/^[a-z]{1,1}/,'');
									}
								}
								$new_element.style[$this_style[0]] = $this_style[1];
							}
						}
						else if (/^on/.test($attName)) $new_element[$attName] = function() { eval($attValue) };
						else $new_element.setAttribute($attName,$attValue);
					}
					else $attribute = true;
				}
			}
			$match = /^>/.test($string);
			if ($match) {
				$string = $string.replace(/^>/,'');
				var $child = true;
				while ($child) {
					var $returned = translateXHTML($string,false);
					$child = $returned[0];
					if ($child) $new_element.appendChild($child);
					$string = $returned[1];
				}
			}
			$string = $string.replace(/^\/>/,'');
		}
	}
	$match = /^[^<>]{1,}/i.test($string);
	if ($match && !$new_element) {
		var $text_content = $string.match(/^[^<>]{1,}/i)[0];
		$text_content = $text_content.replace(/&lt;/g,'<');
		$text_content = $text_content.replace(/&gt;/g,'>');
		var $new_element = document.createTextNode($text_content);
		$string = $string.replace(/^[^<>]{1,}/i,'');
	}
	$match = /^<!--[^<>]{1,}-->/i.test($string);
	if ($match && !$new_element) {
		if (document.createComment) {
			$string = $string.replace(/^<!--/i,'');
			var $text_content = $string.match(/^[^<>]{0,}-->{1,}/i);
			$text_content = $text_content[0].replace(/-->{1,1}$/,'');			
			var $new_element = document.createComment($text_content);
			$string = $string.replace(/^[^<>]{1,}-->/i,'');
		}
		else $string = $string.replace(/^<!--[^<>]{1,}-->/i,'');
	}
	var $return = Array;
	$return[0] = $new_element;
	$return[1] = $string;
	return $return;
}/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));//! moment.js
//! version : 2.11.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return Qc.apply(null,arguments)}function b(a){Qc=a}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}function d(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function e(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function f(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function g(a,b){for(var c in b)f(b,c)&&(a[c]=b[c]);return f(b,"toString")&&(a.toString=b.toString),f(b,"valueOf")&&(a.valueOf=b.valueOf),a}function h(a,b,c,d){return za(a,b,c,d,!0).utc()}function i(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function j(a){return null==a._pf&&(a._pf=i()),a._pf}function k(a){if(null==a._isValid){var b=j(a);a._isValid=!(isNaN(a._d.getTime())||!(b.overflow<0)||b.empty||b.invalidMonth||b.invalidWeekday||b.nullInput||b.invalidFormat||b.userInvalidated),a._strict&&(a._isValid=a._isValid&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour)}return a._isValid}function l(a){var b=h(NaN);return null!=a?g(j(b),a):j(b).userInvalidated=!0,b}function m(a){return void 0===a}function n(a,b){var c,d,e;if(m(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),m(b._i)||(a._i=b._i),m(b._f)||(a._f=b._f),m(b._l)||(a._l=b._l),m(b._strict)||(a._strict=b._strict),m(b._tzm)||(a._tzm=b._tzm),m(b._isUTC)||(a._isUTC=b._isUTC),m(b._offset)||(a._offset=b._offset),m(b._pf)||(a._pf=j(b)),m(b._locale)||(a._locale=b._locale),Sc.length>0)for(c in Sc)d=Sc[c],e=b[d],m(e)||(a[d]=e);return a}function o(b){n(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),Tc===!1&&(Tc=!0,a.updateOffset(this),Tc=!1)}function p(a){return a instanceof o||null!=a&&null!=a._isAMomentObject}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=q(b)),c}function s(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&r(a[d])!==r(b[d]))&&g++;return g+f}function t(){}function u(a){return a?a.toLowerCase().replace("_","-"):a}function v(a){for(var b,c,d,e,f=0;f<a.length;){for(e=u(a[f]).split("-"),b=e.length,c=u(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=w(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&s(e,c,!0)>=b-1)break;b--}f++}return null}function w(a){var b=null;if(!Uc[a]&&!m(module)&&module&&module.exports)try{b=Rc._abbr,require("./locale/"+a),x(b)}catch(c){}return Uc[a]}function x(a,b){var c;return a&&(c=m(b)?z(a):y(a,b),c&&(Rc=c)),Rc._abbr}function y(a,b){return null!==b?(b.abbr=a,Uc[a]=Uc[a]||new t,Uc[a].set(b),x(a),Uc[a]):(delete Uc[a],null)}function z(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Rc;if(!c(a)){if(b=w(a))return b;a=[a]}return v(a)}function A(a,b){var c=a.toLowerCase();Vc[c]=Vc[c+"s"]=Vc[b]=a}function B(a){return"string"==typeof a?Vc[a]||Vc[a.toLowerCase()]:void 0}function C(a){var b,c,d={};for(c in a)f(a,c)&&(b=B(c),b&&(d[b]=a[c]));return d}function D(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function E(b,c){return function(d){return null!=d?(G(this,b,d),a.updateOffset(this,c),this):F(this,b)}}function F(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function G(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function H(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else if(a=B(a),D(this[a]))return this[a](b);return this}function I(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function J(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Zc[a]=e),b&&(Zc[b[0]]=function(){return I(e.apply(this,arguments),b[1],b[2])}),c&&(Zc[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function K(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function L(a){var b,c,d=a.match(Wc);for(b=0,c=d.length;c>b;b++)Zc[d[b]]?d[b]=Zc[d[b]]:d[b]=K(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function M(a,b){return a.isValid()?(b=N(b,a.localeData()),Yc[b]=Yc[b]||L(b),Yc[b](a)):a.localeData().invalidDate()}function N(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Xc.lastIndex=0;d>=0&&Xc.test(a);)a=a.replace(Xc,c),Xc.lastIndex=0,d-=1;return a}function O(a,b,c){pd[a]=D(b)?b:function(a){return a&&c?c:b}}function P(a,b){return f(pd,a)?pd[a](b._strict,b._locale):new RegExp(Q(a))}function Q(a){return a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function R(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),"number"==typeof b&&(d=function(a,c){c[b]=r(a)}),c=0;c<a.length;c++)qd[a[c]]=d}function S(a,b){R(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function T(a,b,c){null!=b&&f(qd,a)&&qd[a](b,c._a,c,a)}function U(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function V(a,b){return c(this._months)?this._months[a.month()]:this._months[Ad.test(b)?"format":"standalone"][a.month()]}function W(a,b){return c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[Ad.test(b)?"format":"standalone"][a.month()]}function X(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=h([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function Y(a,b){var c;return a.isValid()?"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),U(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a):a}function Z(b){return null!=b?(Y(this,b),a.updateOffset(this,!0),this):F(this,"Month")}function $(){return U(this.year(),this.month())}function _(a){var b,c=a._a;return c&&-2===j(a).overflow&&(b=c[sd]<0||c[sd]>11?sd:c[td]<1||c[td]>U(c[rd],c[sd])?td:c[ud]<0||c[ud]>24||24===c[ud]&&(0!==c[vd]||0!==c[wd]||0!==c[xd])?ud:c[vd]<0||c[vd]>59?vd:c[wd]<0||c[wd]>59?wd:c[xd]<0||c[xd]>999?xd:-1,j(a)._overflowDayOfYear&&(rd>b||b>td)&&(b=td),j(a)._overflowWeeks&&-1===b&&(b=yd),j(a)._overflowWeekday&&-1===b&&(b=zd),j(a).overflow=b),a}function aa(b){a.suppressDeprecationWarnings===!1&&!m(console)&&console.warn&&console.warn("Deprecation warning: "+b)}function ba(a,b){var c=!0;return g(function(){return c&&(aa(a+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),c=!1),b.apply(this,arguments)},b)}function ca(a,b){Dd[a]||(aa(b),Dd[a]=!0)}function da(a){var b,c,d,e,f,g,h=a._i,i=Ed.exec(h)||Fd.exec(h);if(i){for(j(a).iso=!0,b=0,c=Hd.length;c>b;b++)if(Hd[b][1].exec(i[1])){e=Hd[b][0],d=Hd[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Id.length;c>b;b++)if(Id[b][1].exec(i[3])){f=(i[2]||" ")+Id[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Gd.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),sa(a)}else a._isValid=!1}function ea(b){var c=Jd.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(da(b),void(b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b))))}function fa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 100>a&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ga(a){var b=new Date(Date.UTC.apply(null,arguments));return 100>a&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ha(a){return ia(a)?366:365}function ia(a){return a%4===0&&a%100!==0||a%400===0}function ja(){return ia(this.year())}function ka(a,b,c){var d=7+b-c,e=(7+ga(a,0,d).getUTCDay()-b)%7;return-e+d-1}function la(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ka(a,d,e),j=1+7*(b-1)+h+i;return 0>=j?(f=a-1,g=ha(f)+j):j>ha(a)?(f=a+1,g=j-ha(a)):(f=a,g=j),{year:f,dayOfYear:g}}function ma(a,b,c){var d,e,f=ka(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return 1>g?(e=a.year()-1,d=g+na(e,b,c)):g>na(a.year(),b,c)?(d=g-na(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function na(a,b,c){var d=ka(a,b,c),e=ka(a+1,b,c);return(ha(a)-d+e)/7}function oa(a,b,c){return null!=a?a:null!=b?b:c}function pa(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function qa(a){var b,c,d,e,f=[];if(!a._d){for(d=pa(a),a._w&&null==a._a[td]&&null==a._a[sd]&&ra(a),a._dayOfYear&&(e=oa(a._a[rd],d[rd]),a._dayOfYear>ha(e)&&(j(a)._overflowDayOfYear=!0),c=ga(e,0,a._dayOfYear),a._a[sd]=c.getUTCMonth(),a._a[td]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;7>b;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[ud]&&0===a._a[vd]&&0===a._a[wd]&&0===a._a[xd]&&(a._nextDay=!0,a._a[ud]=0),a._d=(a._useUTC?ga:fa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[ud]=24)}}function ra(a){var b,c,d,e,f,g,h,i;b=a._w,null!=b.GG||null!=b.W||null!=b.E?(f=1,g=4,c=oa(b.GG,a._a[rd],ma(Aa(),1,4).year),d=oa(b.W,1),e=oa(b.E,1),(1>e||e>7)&&(i=!0)):(f=a._locale._week.dow,g=a._locale._week.doy,c=oa(b.gg,a._a[rd],ma(Aa(),f,g).year),d=oa(b.w,1),null!=b.d?(e=b.d,(0>e||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f),1>d||d>na(c,f,g)?j(a)._overflowWeeks=!0:null!=i?j(a)._overflowWeekday=!0:(h=la(c,d,e,f,g),a._a[rd]=h.year,a._dayOfYear=h.dayOfYear)}function sa(b){if(b._f===a.ISO_8601)return void da(b);b._a=[],j(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,k=0;for(e=N(b._f,b._locale).match(Wc)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&j(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),k+=d.length),Zc[f]?(d?j(b).empty=!1:j(b).unusedTokens.push(f),T(f,d,b)):b._strict&&!d&&j(b).unusedTokens.push(f);j(b).charsLeftOver=i-k,h.length>0&&j(b).unusedInput.push(h),j(b).bigHour===!0&&b._a[ud]<=12&&b._a[ud]>0&&(j(b).bigHour=void 0),b._a[ud]=ta(b._locale,b._a[ud],b._meridiem),qa(b),_(b)}function ta(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function ua(a){var b,c,d,e,f;if(0===a._f.length)return j(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],sa(b),k(b)&&(f+=j(b).charsLeftOver,f+=10*j(b).unusedTokens.length,j(b).score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function va(a){if(!a._d){var b=C(a._i);a._a=e([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),qa(a)}}function wa(a){var b=new o(_(xa(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function xa(a){var b=a._i,e=a._f;return a._locale=a._locale||z(a._l),null===b||void 0===e&&""===b?l({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),p(b)?new o(_(b)):(c(e)?ua(a):e?sa(a):d(b)?a._d=b:ya(a),k(a)||(a._d=null),a))}function ya(b){var f=b._i;void 0===f?b._d=new Date(a.now()):d(f)?b._d=new Date(+f):"string"==typeof f?ea(b):c(f)?(b._a=e(f.slice(0),function(a){return parseInt(a,10)}),qa(b)):"object"==typeof f?va(b):"number"==typeof f?b._d=new Date(f):a.createFromInputFallback(b)}function za(a,b,c,d,e){var f={};return"boolean"==typeof c&&(d=c,c=void 0),f._isAMomentObject=!0,f._useUTC=f._isUTC=e,f._l=c,f._i=a,f._f=b,f._strict=d,wa(f)}function Aa(a,b,c,d){return za(a,b,c,d,!1)}function Ba(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return Aa();for(d=b[0],e=1;e<b.length;++e)(!b[e].isValid()||b[e][a](d))&&(d=b[e]);return d}function Ca(){var a=[].slice.call(arguments,0);return Ba("isBefore",a)}function Da(){var a=[].slice.call(arguments,0);return Ba("isAfter",a)}function Ea(a){var b=C(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=z(),this._bubble()}function Fa(a){return a instanceof Ea}function Ga(a,b){J(a,0,0,function(){var a=this.utcOffset(),c="+";return 0>a&&(a=-a,c="-"),c+I(~~(a/60),2)+b+I(~~a%60,2)})}function Ha(a,b){var c=(b||"").match(a)||[],d=c[c.length-1]||[],e=(d+"").match(Od)||["-",0,0],f=+(60*e[1])+r(e[2]);return"+"===e[0]?f:-f}function Ia(b,c){var e,f;return c._isUTC?(e=c.clone(),f=(p(b)||d(b)?+b:+Aa(b))-+e,e._d.setTime(+e._d+f),a.updateOffset(e,!1),e):Aa(b).local()}function Ja(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Ka(b,c){var d,e=this._offset||0;return this.isValid()?null!=b?("string"==typeof b?b=Ha(md,b):Math.abs(b)<16&&(b=60*b),!this._isUTC&&c&&(d=Ja(this)),this._offset=b,this._isUTC=!0,null!=d&&this.add(d,"m"),e!==b&&(!c||this._changeInProgress?$a(this,Va(b-e,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?e:Ja(this):null!=b?this:NaN}function La(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Ma(a){return this.utcOffset(0,a)}function Na(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Ja(this),"m")),this}function Oa(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Ha(ld,this._i)),this}function Pa(a){return this.isValid()?(a=a?Aa(a).utcOffset():0,(this.utcOffset()-a)%60===0):!1}function Qa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ra(){if(!m(this._isDSTShifted))return this._isDSTShifted;var a={};if(n(a,this),a=xa(a),a._a){var b=a._isUTC?h(a._a):Aa(a._a);this._isDSTShifted=this.isValid()&&s(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Sa(){return this.isValid()?!this._isUTC:!1}function Ta(){return this.isValid()?this._isUTC:!1}function Ua(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Va(a,b){var c,d,e,g=a,h=null;return Fa(a)?g={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(g={},b?g[b]=a:g.milliseconds=a):(h=Pd.exec(a))?(c="-"===h[1]?-1:1,g={y:0,d:r(h[td])*c,h:r(h[ud])*c,m:r(h[vd])*c,s:r(h[wd])*c,ms:r(h[xd])*c}):(h=Qd.exec(a))?(c="-"===h[1]?-1:1,g={y:Wa(h[2],c),M:Wa(h[3],c),d:Wa(h[4],c),h:Wa(h[5],c),m:Wa(h[6],c),s:Wa(h[7],c),w:Wa(h[8],c)}):null==g?g={}:"object"==typeof g&&("from"in g||"to"in g)&&(e=Ya(Aa(g.from),Aa(g.to)),g={},g.ms=e.milliseconds,g.M=e.months),d=new Ea(g),Fa(a)&&f(a,"_locale")&&(d._locale=a._locale),d}function Wa(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Xa(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Ya(a,b){var c;return a.isValid()&&b.isValid()?(b=Ia(b,a),a.isBefore(b)?c=Xa(a,b):(c=Xa(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Za(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(ca(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Va(c,d),$a(this,e,a),this}}function $a(b,c,d,e){var f=c._milliseconds,g=c._days,h=c._months;b.isValid()&&(e=null==e?!0:e,f&&b._d.setTime(+b._d+f*d),g&&G(b,"Date",F(b,"Date")+g*d),h&&Y(b,F(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function _a(a,b){var c=a||Aa(),d=Ia(c,this).startOf("day"),e=this.diff(d,"days",!0),f=-6>e?"sameElse":-1>e?"lastWeek":0>e?"lastDay":1>e?"sameDay":2>e?"nextDay":7>e?"nextWeek":"sameElse",g=b&&(D(b[f])?b[f]():b[f]);return this.format(g||this.localeData().calendar(f,this,Aa(c)))}function ab(){return new o(this)}function bb(a,b){var c=p(a)?a:Aa(a);return this.isValid()&&c.isValid()?(b=B(m(b)?"millisecond":b),"millisecond"===b?+this>+c:+c<+this.clone().startOf(b)):!1}function cb(a,b){var c=p(a)?a:Aa(a);return this.isValid()&&c.isValid()?(b=B(m(b)?"millisecond":b),"millisecond"===b?+c>+this:+this.clone().endOf(b)<+c):!1}function db(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)}function eb(a,b){var c,d=p(a)?a:Aa(a);return this.isValid()&&d.isValid()?(b=B(b||"millisecond"),"millisecond"===b?+this===+d:(c=+d,+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))):!1}function fb(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function gb(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function hb(a,b,c){var d,e,f,g;return this.isValid()?(d=Ia(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=B(b),"year"===b||"month"===b||"quarter"===b?(g=ib(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:q(g)):NaN):NaN}function ib(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function jb(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function kb(){var a=this.clone().utc();return 0<a.year()&&a.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():M(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):M(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function lb(b){var c=M(this,b||a.defaultFormat);return this.localeData().postformat(c)}function mb(a,b){return this.isValid()&&(p(a)&&a.isValid()||Aa(a).isValid())?Va({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function nb(a){return this.from(Aa(),a)}function ob(a,b){return this.isValid()&&(p(a)&&a.isValid()||Aa(a).isValid())?Va({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function pb(a){return this.to(Aa(),a)}function qb(a){var b;return void 0===a?this._locale._abbr:(b=z(a),null!=b&&(this._locale=b),this)}function rb(){return this._locale}function sb(a){switch(a=B(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function tb(a){return a=B(a),void 0===a||"millisecond"===a?this:this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")}function ub(){return+this._d-6e4*(this._offset||0)}function vb(){return Math.floor(+this/1e3)}function wb(){return this._offset?new Date(+this):this._d}function xb(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function yb(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function zb(){return this.isValid()?this.toISOString():"null"}function Ab(){return k(this)}function Bb(){return g({},j(this))}function Cb(){return j(this).overflow}function Db(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Eb(a,b){J(0,[a,a.length],0,b)}function Fb(a){return Jb.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Gb(a){return Jb.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Hb(){return na(this.year(),1,4)}function Ib(){var a=this.localeData()._week;return na(this.year(),a.dow,a.doy)}function Jb(a,b,c,d,e){var f;return null==a?ma(this,d,e).year:(f=na(a,d,e),b>f&&(b=f),Kb.call(this,a,b,c,d,e))}function Kb(a,b,c,d,e){var f=la(a,b,c,d,e),g=ga(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Lb(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Mb(a){return ma(a,this._week.dow,this._week.doy).week}function Nb(){return this._week.dow}function Ob(){return this._week.doy}function Pb(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Qb(a){var b=ma(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Rb(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Sb(a,b){return c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]}function Tb(a){return this._weekdaysShort[a.day()]}function Ub(a){return this._weekdaysMin[a.day()]}function Vb(a,b,c){var d,e,f;for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;7>d;d++){if(e=Aa([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Wb(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Rb(a,this.localeData()),this.add(a-b,"d")):b}function Xb(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Yb(a){return this.isValid()?null==a?this.day()||7:this.day(this.day()%7?a:a-7):null!=a?this:NaN}function Zb(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function $b(){return this.hours()%12||12}function _b(a,b){J(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function ac(a,b){return b._meridiemParse}function bc(a){return"p"===(a+"").toLowerCase().charAt(0)}function cc(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function dc(a,b){b[xd]=r(1e3*("0."+a))}function ec(){return this._isUTC?"UTC":""}function fc(){return this._isUTC?"Coordinated Universal Time":""}function gc(a){return Aa(1e3*a)}function hc(){return Aa.apply(null,arguments).parseZone()}function ic(a,b,c){var d=this._calendar[a];return D(d)?d.call(b,c):d}function jc(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function kc(){return this._invalidDate}function lc(a){return this._ordinal.replace("%d",a)}function mc(a){return a}function nc(a,b,c,d){var e=this._relativeTime[c];return D(e)?e(a,b,c,d):e.replace(/%d/i,a)}function oc(a,b){var c=this._relativeTime[a>0?"future":"past"];return D(c)?c(b):c.replace(/%s/i,b)}function pc(a){var b,c;for(c in a)b=a[c],D(b)?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function qc(a,b,c,d){var e=z(),f=h().set(d,b);return e[c](f,a)}function rc(a,b,c,d,e){if("number"==typeof a&&(b=a,a=void 0),a=a||"",null!=b)return qc(a,b,c,e);var f,g=[];for(f=0;d>f;f++)g[f]=qc(a,f,c,e);return g}function sc(a,b){return rc(a,b,"months",12,"month")}function tc(a,b){return rc(a,b,"monthsShort",12,"month")}function uc(a,b){return rc(a,b,"weekdays",7,"day")}function vc(a,b){return rc(a,b,"weekdaysShort",7,"day")}function wc(a,b){return rc(a,b,"weekdaysMin",7,"day")}function xc(){var a=this._data;return this._milliseconds=me(this._milliseconds),this._days=me(this._days),this._months=me(this._months),a.milliseconds=me(a.milliseconds),a.seconds=me(a.seconds),a.minutes=me(a.minutes),a.hours=me(a.hours),a.months=me(a.months),a.years=me(a.years),this}function yc(a,b,c,d){var e=Va(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function zc(a,b){return yc(this,a,b,1)}function Ac(a,b){return yc(this,a,b,-1)}function Bc(a){return 0>a?Math.floor(a):Math.ceil(a)}function Cc(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||0>=f&&0>=g&&0>=h||(f+=864e5*Bc(Ec(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=q(f/1e3),i.seconds=a%60,b=q(a/60),i.minutes=b%60,c=q(b/60),i.hours=c%24,g+=q(c/24),e=q(Dc(g)),h+=e,g-=Bc(Ec(e)),d=q(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function Dc(a){return 4800*a/146097}function Ec(a){return 146097*a/4800}function Fc(a){var b,c,d=this._milliseconds;if(a=B(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+Dc(b),"month"===a?c:c/12;switch(b=this._days+Math.round(Ec(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function Gc(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*r(this._months/12)}function Hc(a){return function(){return this.as(a)}}function Ic(a){return a=B(a),this[a+"s"]()}function Jc(a){return function(){return this._data[a]}}function Kc(){return q(this.days()/7)}function Lc(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function Mc(a,b,c){var d=Va(a).abs(),e=Ce(d.as("s")),f=Ce(d.as("m")),g=Ce(d.as("h")),h=Ce(d.as("d")),i=Ce(d.as("M")),j=Ce(d.as("y")),k=e<De.s&&["s",e]||1>=f&&["m"]||f<De.m&&["mm",f]||1>=g&&["h"]||g<De.h&&["hh",g]||1>=h&&["d"]||h<De.d&&["dd",h]||1>=i&&["M"]||i<De.M&&["MM",i]||1>=j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,Lc.apply(null,k)}function Nc(a,b){return void 0===De[a]?!1:void 0===b?De[a]:(De[a]=b,!0)}function Oc(a){var b=this.localeData(),c=Mc(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function Pc(){var a,b,c,d=Ee(this._milliseconds)/1e3,e=Ee(this._days),f=Ee(this._months);a=q(d/60),b=q(a/60),d%=60,a%=60,c=q(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(0>m?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var Qc,Rc,Sc=a.momentProperties=[],Tc=!1,Uc={},Vc={},Wc=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Xc=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Yc={},Zc={},$c=/\d/,_c=/\d\d/,ad=/\d{3}/,bd=/\d{4}/,cd=/[+-]?\d{6}/,dd=/\d\d?/,ed=/\d\d\d\d?/,fd=/\d\d\d\d\d\d?/,gd=/\d{1,3}/,hd=/\d{1,4}/,id=/[+-]?\d{1,6}/,jd=/\d+/,kd=/[+-]?\d+/,ld=/Z|[+-]\d\d:?\d\d/gi,md=/Z|[+-]\d\d(?::?\d\d)?/gi,nd=/[+-]?\d+(\.\d{1,3})?/,od=/[0-9]*(a[mn]\s?)?['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,pd={},qd={},rd=0,sd=1,td=2,ud=3,vd=4,wd=5,xd=6,yd=7,zd=8;J("M",["MM",2],"Mo",function(){return this.month()+1}),J("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),J("MMMM",0,0,function(a){return this.localeData().months(this,a)}),A("month","M"),O("M",dd),O("MM",dd,_c),O("MMM",od),O("MMMM",od),R(["M","MM"],function(a,b){b[sd]=r(a)-1}),R(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[sd]=e:j(c).invalidMonth=a});var Ad=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Bd="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Cd="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_"),Dd={};a.suppressDeprecationWarnings=!1;var Ed=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Fd=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Gd=/Z|[+-]\d\d(?::?\d\d)?/,Hd=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Id=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Jd=/^\/?Date\((\-?\d+)/i;a.createFromInputFallback=ba("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),J(0,["YY",2],0,function(){return this.year()%100}),J(0,["YYYY",4],0,"year"),J(0,["YYYYY",5],0,"year"),J(0,["YYYYYY",6,!0],0,"year"),A("year","y"),O("Y",kd),O("YY",dd,_c),O("YYYY",hd,bd),O("YYYYY",id,cd),O("YYYYYY",id,cd),R(["YYYYY","YYYYYY"],rd),R("YYYY",function(b,c){c[rd]=2===b.length?a.parseTwoDigitYear(b):r(b)}),R("YY",function(b,c){c[rd]=a.parseTwoDigitYear(b)}),a.parseTwoDigitYear=function(a){return r(a)+(r(a)>68?1900:2e3)};var Kd=E("FullYear",!1);a.ISO_8601=function(){};var Ld=ba("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return this.isValid()&&a.isValid()?this>a?this:a:l()}),Md=ba("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var a=Aa.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:l()}),Nd=Date.now||function(){return+new Date};Ga("Z",":"),Ga("ZZ",""),O("Z",md),O("ZZ",md),R(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Ha(md,a)});var Od=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Pd=/(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Qd=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Va.fn=Ea.prototype;var Rd=Za(1,"add"),Sd=Za(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Td=ba("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});J(0,["gg",2],0,function(){return this.weekYear()%100}),J(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Eb("gggg","weekYear"),Eb("ggggg","weekYear"),Eb("GGGG","isoWeekYear"),Eb("GGGGG","isoWeekYear"),A("weekYear","gg"),A("isoWeekYear","GG"),O("G",kd),O("g",kd),O("GG",dd,_c),O("gg",dd,_c),O("GGGG",hd,bd),O("gggg",hd,bd),O("GGGGG",id,cd),O("ggggg",id,cd),S(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=r(a)}),S(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),J("Q",0,"Qo","quarter"),A("quarter","Q"),O("Q",$c),R("Q",function(a,b){b[sd]=3*(r(a)-1)}),J("w",["ww",2],"wo","week"),J("W",["WW",2],"Wo","isoWeek"),A("week","w"),A("isoWeek","W"),O("w",dd),O("ww",dd,_c),O("W",dd),O("WW",dd,_c),S(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=r(a)});var Ud={dow:0,doy:6};J("D",["DD",2],"Do","date"),A("date","D"),O("D",dd),O("DD",dd,_c),O("Do",function(a,b){
return a?b._ordinalParse:b._ordinalParseLenient}),R(["D","DD"],td),R("Do",function(a,b){b[td]=r(a.match(dd)[0],10)});var Vd=E("Date",!0);J("d",0,"do","day"),J("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),J("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),J("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),J("e",0,0,"weekday"),J("E",0,0,"isoWeekday"),A("day","d"),A("weekday","e"),A("isoWeekday","E"),O("d",dd),O("e",dd),O("E",dd),O("dd",od),O("ddd",od),O("dddd",od),S(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:j(c).invalidWeekday=a}),S(["d","e","E"],function(a,b,c,d){b[d]=r(a)});var Wd="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Xd="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Yd="Su_Mo_Tu_We_Th_Fr_Sa".split("_");J("DDD",["DDDD",3],"DDDo","dayOfYear"),A("dayOfYear","DDD"),O("DDD",gd),O("DDDD",ad),R(["DDD","DDDD"],function(a,b,c){c._dayOfYear=r(a)}),J("H",["HH",2],0,"hour"),J("h",["hh",2],0,$b),J("hmm",0,0,function(){return""+$b.apply(this)+I(this.minutes(),2)}),J("hmmss",0,0,function(){return""+$b.apply(this)+I(this.minutes(),2)+I(this.seconds(),2)}),J("Hmm",0,0,function(){return""+this.hours()+I(this.minutes(),2)}),J("Hmmss",0,0,function(){return""+this.hours()+I(this.minutes(),2)+I(this.seconds(),2)}),_b("a",!0),_b("A",!1),A("hour","h"),O("a",ac),O("A",ac),O("H",dd),O("h",dd),O("HH",dd,_c),O("hh",dd,_c),O("hmm",ed),O("hmmss",fd),O("Hmm",ed),O("Hmmss",fd),R(["H","HH"],ud),R(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),R(["h","hh"],function(a,b,c){b[ud]=r(a),j(c).bigHour=!0}),R("hmm",function(a,b,c){var d=a.length-2;b[ud]=r(a.substr(0,d)),b[vd]=r(a.substr(d)),j(c).bigHour=!0}),R("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[ud]=r(a.substr(0,d)),b[vd]=r(a.substr(d,2)),b[wd]=r(a.substr(e)),j(c).bigHour=!0}),R("Hmm",function(a,b,c){var d=a.length-2;b[ud]=r(a.substr(0,d)),b[vd]=r(a.substr(d))}),R("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[ud]=r(a.substr(0,d)),b[vd]=r(a.substr(d,2)),b[wd]=r(a.substr(e))});var Zd=/[ap]\.?m?\.?/i,$d=E("Hours",!0);J("m",["mm",2],0,"minute"),A("minute","m"),O("m",dd),O("mm",dd,_c),R(["m","mm"],vd);var _d=E("Minutes",!1);J("s",["ss",2],0,"second"),A("second","s"),O("s",dd),O("ss",dd,_c),R(["s","ss"],wd);var ae=E("Seconds",!1);J("S",0,0,function(){return~~(this.millisecond()/100)}),J(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),J(0,["SSS",3],0,"millisecond"),J(0,["SSSS",4],0,function(){return 10*this.millisecond()}),J(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),J(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),J(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),J(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),J(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),A("millisecond","ms"),O("S",gd,$c),O("SS",gd,_c),O("SSS",gd,ad);var be;for(be="SSSS";be.length<=9;be+="S")O(be,jd);for(be="S";be.length<=9;be+="S")R(be,dc);var ce=E("Milliseconds",!1);J("z",0,0,"zoneAbbr"),J("zz",0,0,"zoneName");var de=o.prototype;de.add=Rd,de.calendar=_a,de.clone=ab,de.diff=hb,de.endOf=tb,de.format=lb,de.from=mb,de.fromNow=nb,de.to=ob,de.toNow=pb,de.get=H,de.invalidAt=Cb,de.isAfter=bb,de.isBefore=cb,de.isBetween=db,de.isSame=eb,de.isSameOrAfter=fb,de.isSameOrBefore=gb,de.isValid=Ab,de.lang=Td,de.locale=qb,de.localeData=rb,de.max=Md,de.min=Ld,de.parsingFlags=Bb,de.set=H,de.startOf=sb,de.subtract=Sd,de.toArray=xb,de.toObject=yb,de.toDate=wb,de.toISOString=kb,de.toJSON=zb,de.toString=jb,de.unix=vb,de.valueOf=ub,de.creationData=Db,de.year=Kd,de.isLeapYear=ja,de.weekYear=Fb,de.isoWeekYear=Gb,de.quarter=de.quarters=Lb,de.month=Z,de.daysInMonth=$,de.week=de.weeks=Pb,de.isoWeek=de.isoWeeks=Qb,de.weeksInYear=Ib,de.isoWeeksInYear=Hb,de.date=Vd,de.day=de.days=Wb,de.weekday=Xb,de.isoWeekday=Yb,de.dayOfYear=Zb,de.hour=de.hours=$d,de.minute=de.minutes=_d,de.second=de.seconds=ae,de.millisecond=de.milliseconds=ce,de.utcOffset=Ka,de.utc=Ma,de.local=Na,de.parseZone=Oa,de.hasAlignedHourOffset=Pa,de.isDST=Qa,de.isDSTShifted=Ra,de.isLocal=Sa,de.isUtcOffset=Ta,de.isUtc=Ua,de.isUTC=Ua,de.zoneAbbr=ec,de.zoneName=fc,de.dates=ba("dates accessor is deprecated. Use date instead.",Vd),de.months=ba("months accessor is deprecated. Use month instead",Z),de.years=ba("years accessor is deprecated. Use year instead",Kd),de.zone=ba("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",La);var ee=de,fe={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},ge={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},he="Invalid date",ie="%d",je=/\d{1,2}/,ke={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},le=t.prototype;le._calendar=fe,le.calendar=ic,le._longDateFormat=ge,le.longDateFormat=jc,le._invalidDate=he,le.invalidDate=kc,le._ordinal=ie,le.ordinal=lc,le._ordinalParse=je,le.preparse=mc,le.postformat=mc,le._relativeTime=ke,le.relativeTime=nc,le.pastFuture=oc,le.set=pc,le.months=V,le._months=Bd,le.monthsShort=W,le._monthsShort=Cd,le.monthsParse=X,le.week=Mb,le._week=Ud,le.firstDayOfYear=Ob,le.firstDayOfWeek=Nb,le.weekdays=Sb,le._weekdays=Wd,le.weekdaysMin=Ub,le._weekdaysMin=Yd,le.weekdaysShort=Tb,le._weekdaysShort=Xd,le.weekdaysParse=Vb,le.isPM=bc,le._meridiemParse=Zd,le.meridiem=cc,x("en",{monthsParse:[/^jan/i,/^feb/i,/^mar/i,/^apr/i,/^may/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^oct/i,/^nov/i,/^dec/i],longMonthsParse:[/^january$/i,/^february$/i,/^march$/i,/^april$/i,/^may$/i,/^june$/i,/^july$/i,/^august$/i,/^september$/i,/^october$/i,/^november$/i,/^december$/i],shortMonthsParse:[/^jan$/i,/^feb$/i,/^mar$/i,/^apr$/i,/^may$/i,/^jun$/i,/^jul$/i,/^aug/i,/^sept?$/i,/^oct$/i,/^nov$/i,/^dec$/i],ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===r(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=ba("moment.lang is deprecated. Use moment.locale instead.",x),a.langData=ba("moment.langData is deprecated. Use moment.localeData instead.",z);var me=Math.abs,ne=Hc("ms"),oe=Hc("s"),pe=Hc("m"),qe=Hc("h"),re=Hc("d"),se=Hc("w"),te=Hc("M"),ue=Hc("y"),ve=Jc("milliseconds"),we=Jc("seconds"),xe=Jc("minutes"),ye=Jc("hours"),ze=Jc("days"),Ae=Jc("months"),Be=Jc("years"),Ce=Math.round,De={s:45,m:45,h:22,d:26,M:11},Ee=Math.abs,Fe=Ea.prototype;Fe.abs=xc,Fe.add=zc,Fe.subtract=Ac,Fe.as=Fc,Fe.asMilliseconds=ne,Fe.asSeconds=oe,Fe.asMinutes=pe,Fe.asHours=qe,Fe.asDays=re,Fe.asWeeks=se,Fe.asMonths=te,Fe.asYears=ue,Fe.valueOf=Gc,Fe._bubble=Cc,Fe.get=Ic,Fe.milliseconds=ve,Fe.seconds=we,Fe.minutes=xe,Fe.hours=ye,Fe.days=ze,Fe.weeks=Kc,Fe.months=Ae,Fe.years=Be,Fe.humanize=Oc,Fe.toISOString=Pc,Fe.toString=Pc,Fe.toJSON=Pc,Fe.locale=qb,Fe.localeData=rb,Fe.toIsoString=ba("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Pc),Fe.lang=Td,J("X",0,0,"unix"),J("x",0,0,"valueOf"),O("x",kd),O("X",nd),R("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),R("x",function(a,b,c){c._d=new Date(r(a))}),a.version="2.11.0",b(Aa),a.fn=ee,a.min=Ca,a.max=Da,a.now=Nd,a.utc=h,a.unix=gc,a.months=sc,a.isDate=d,a.locale=x,a.invalid=l,a.duration=Va,a.isMoment=p,a.weekdays=uc,a.parseZone=hc,a.localeData=z,a.isDuration=Fa,a.monthsShort=tc,a.weekdaysMin=wc,a.defineLocale=y,a.weekdaysShort=vc,a.normalizeUnits=B,a.relativeTimeThreshold=Nc,a.prototype=ee;var Ge=a;return Ge});(function(root,factory){"use strict";var moment;if(typeof exports==="object"){try{moment=require("moment")}catch(e){}module.exports=factory(moment)}else if(typeof define==="function"&&define.amd){define(function(req){var id="moment";try{moment=req(id)}catch(e){}return factory(moment)})}else{root.Pikaday=factory(root.moment)}})(this,function(moment){"use strict";var hasMoment=typeof moment==="function",hasEventListeners=!!window.addEventListener,document=window.document,sto=window.setTimeout,addEvent=function(el,e,callback,capture){if(hasEventListeners){el.addEventListener(e,callback,!!capture)}else{el.attachEvent("on"+e,callback)}},removeEvent=function(el,e,callback,capture){if(hasEventListeners){el.removeEventListener(e,callback,!!capture)}else{el.detachEvent("on"+e,callback)}},fireEvent=function(el,eventName,data){var ev;if(document.createEvent){ev=document.createEvent("HTMLEvents");ev.initEvent(eventName,true,false);ev=extend(ev,data);el.dispatchEvent(ev)}else if(document.createEventObject){ev=document.createEventObject();ev=extend(ev,data);el.fireEvent("on"+eventName,ev)}},trim=function(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,"")},hasClass=function(el,cn){return(" "+el.className+" ").indexOf(" "+cn+" ")!==-1},addClass=function(el,cn){if(!hasClass(el,cn)){el.className=el.className===""?cn:el.className+" "+cn}},removeClass=function(el,cn){el.className=trim((" "+el.className+" ").replace(" "+cn+" "," "))},isArray=function(obj){return/Array/.test(Object.prototype.toString.call(obj))},isDate=function(obj){return/Date/.test(Object.prototype.toString.call(obj))&&!isNaN(obj.getTime())},isWeekend=function(date){var day=date.getDay();return day===0||day===6},isLeapYear=function(year){return year%4===0&&year%100!==0||year%400===0},getDaysInMonth=function(year,month){return[31,isLeapYear(year)?29:28,31,30,31,30,31,31,30,31,30,31][month]},setToStartOfDay=function(date){if(isDate(date))date.setHours(0,0,0,0)},compareDates=function(a,b){return a.getTime()===b.getTime()},extend=function(to,from,overwrite){var prop,hasProp;for(prop in from){hasProp=to[prop]!==undefined;if(hasProp&&typeof from[prop]==="object"&&from[prop]!==null&&from[prop].nodeName===undefined){if(isDate(from[prop])){if(overwrite){to[prop]=new Date(from[prop].getTime())}}else if(isArray(from[prop])){if(overwrite){to[prop]=from[prop].slice(0)}}else{to[prop]=extend({},from[prop],overwrite)}}else if(overwrite||!hasProp){to[prop]=from[prop]}}return to},adjustCalendar=function(calendar){if(calendar.month<0){calendar.year-=Math.ceil(Math.abs(calendar.month)/12);calendar.month+=12}if(calendar.month>11){calendar.year+=Math.floor(Math.abs(calendar.month)/12);calendar.month-=12}return calendar},defaults={field:null,bound:undefined,position:"bottom left",reposition:true,format:"YYYY-MM-DD",defaultDate:null,setDefaultDate:false,firstDay:0,minDate:null,maxDate:null,yearRange:10,showWeekNumber:false,minYear:0,maxYear:9999,minMonth:undefined,maxMonth:undefined,startRange:null,endRange:null,isRTL:false,yearSuffix:"",showMonthAfterYear:false,numberOfMonths:1,mainCalendar:"left",container:undefined,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,onSelect:null,onOpen:null,onClose:null,onDraw:null},renderDayName=function(opts,day,abbr){day+=opts.firstDay;while(day>=7){day-=7}return abbr?opts.i18n.weekdaysShort[day]:opts.i18n.weekdays[day]},renderDay=function(opts){if(opts.isEmpty){return'<td class="is-empty"></td>'}var arr=[];if(opts.isDisabled){arr.push("is-disabled")}if(opts.isToday){arr.push("is-today")}if(opts.isSelected){arr.push("is-selected")}if(opts.isInRange){arr.push("is-inrange")}if(opts.isStartRange){arr.push("is-startrange")}if(opts.isEndRange){arr.push("is-endrange")}return'<td data-day="'+opts.day+'" class="'+arr.join(" ")+'">'+'<button class="pika-button pika-day" type="button" '+'data-pika-year="'+opts.year+'" data-pika-month="'+opts.month+'" data-pika-day="'+opts.day+'">'+opts.day+"</button>"+"</td>"},renderWeek=function(d,m,y){var onejan=new Date(y,0,1),weekNum=Math.ceil(((new Date(y,m,d)-onejan)/864e5+onejan.getDay()+1)/7);return'<td class="pika-week">'+weekNum+"</td>"},renderRow=function(days,isRTL){return"<tr>"+(isRTL?days.reverse():days).join("")+"</tr>"},renderBody=function(rows){return"<tbody>"+rows.join("")+"</tbody>"},renderHead=function(opts){var i,arr=[];if(opts.showWeekNumber){arr.push("<th></th>")}for(i=0;i<7;i++){arr.push('<th scope="col"><abbr title="'+renderDayName(opts,i)+'">'+renderDayName(opts,i,true)+"</abbr></th>")}return"<thead>"+(opts.isRTL?arr.reverse():arr).join("")+"</thead>"},renderTitle=function(instance,c,year,month,refYear){var i,j,arr,opts=instance._o,isMinYear=year===opts.minYear,isMaxYear=year===opts.maxYear,html='<div class="pika-title">',monthHtml,yearHtml,prev=true,next=true;for(arr=[],i=0;i<12;i++){arr.push('<option value="'+(year===refYear?i-c:12+i-c)+'"'+(i===month?" selected":"")+(isMinYear&&i<opts.minMonth||isMaxYear&&i>opts.maxMonth?"disabled":"")+">"+opts.i18n.months[i]+"</option>")}monthHtml='<div class="pika-label">'+opts.i18n.months[month]+'<select class="pika-select pika-select-month" tabindex="-1">'+arr.join("")+"</select></div>";if(isArray(opts.yearRange)){i=opts.yearRange[0];j=opts.yearRange[1]+1}else{i=year-opts.yearRange;j=1+year+opts.yearRange}for(arr=[];i<j&&i<=opts.maxYear;i++){if(i>=opts.minYear){arr.push('<option value="'+i+'"'+(i===year?" selected":"")+">"+i+"</option>")}}yearHtml='<div class="pika-label">'+year+opts.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+arr.join("")+"</select></div>";if(opts.showMonthAfterYear){html+=yearHtml+monthHtml}else{html+=monthHtml+yearHtml}if(isMinYear&&(month===0||opts.minMonth>=month)){prev=false}if(isMaxYear&&(month===11||opts.maxMonth<=month)){next=false}if(c===0){html+='<button class="pika-prev'+(prev?"":" is-disabled")+'" type="button">'+opts.i18n.previousMonth+"</button>"}if(c===instance._o.numberOfMonths-1){html+='<button class="pika-next'+(next?"":" is-disabled")+'" type="button">'+opts.i18n.nextMonth+"</button>"}return html+="</div>"},renderTable=function(opts,data){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+renderHead(opts)+renderBody(data)+"</table>"},Pikaday=function(options){var self=this,opts=self.config(options);self._onMouseDown=function(e){if(!self._v){return}e=e||window.event;var target=e.target||e.srcElement;if(!target){return}if(!hasClass(target,"is-disabled")){if(hasClass(target,"pika-button")&&!hasClass(target,"is-empty")){self.setDate(new Date(target.getAttribute("data-pika-year"),target.getAttribute("data-pika-month"),target.getAttribute("data-pika-day")));if(opts.bound){sto(function(){self.hide();if(opts.field){opts.field.blur()}},100)}}else if(hasClass(target,"pika-prev")){self.prevMonth()}else if(hasClass(target,"pika-next")){self.nextMonth()}}if(!hasClass(target,"pika-select")){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false;return false}}else{self._c=true}};self._onChange=function(e){e=e||window.event;var target=e.target||e.srcElement;if(!target){return}if(hasClass(target,"pika-select-month")){self.gotoMonth(target.value)}else if(hasClass(target,"pika-select-year")){self.gotoYear(target.value)}};self._onInputChange=function(e){var date;if(e.firedBy===self){return}if(hasMoment){date=moment(opts.field.value,opts.format);date=date&&date.isValid()?date.toDate():null}else{date=new Date(Date.parse(opts.field.value))}if(isDate(date)){self.setDate(date)}if(!self._v){self.show()}};self._onInputFocus=function(){self.show()};self._onInputClick=function(){self.show()};self._onInputBlur=function(){var pEl=document.activeElement;do{if(hasClass(pEl,"pika-single")){return}}while(pEl=pEl.parentNode);if(!self._c){self._b=sto(function(){self.hide()},50)}self._c=false};self._onClick=function(e){e=e||window.event;var target=e.target||e.srcElement,pEl=target;if(!target){return}if(!hasEventListeners&&hasClass(target,"pika-select")){if(!target.onchange){target.setAttribute("onchange","return;");addEvent(target,"change",self._onChange)}}do{if(hasClass(pEl,"pika-single")||pEl===opts.trigger){return}}while(pEl=pEl.parentNode);if(self._v&&target!==opts.trigger&&pEl!==opts.trigger){self.hide()}};self.el=document.createElement("div");self.el.className="pika-single"+(opts.isRTL?" is-rtl":"")+(opts.theme?" "+opts.theme:"");addEvent(self.el,"mousedown",self._onMouseDown,true);addEvent(self.el,"touchend",self._onMouseDown,true);addEvent(self.el,"change",self._onChange);if(opts.field){if(opts.container){opts.container.appendChild(self.el)}else if(opts.bound){document.body.appendChild(self.el)}else{opts.field.parentNode.insertBefore(self.el,opts.field.nextSibling)}addEvent(opts.field,"change",self._onInputChange);if(!opts.defaultDate){if(hasMoment&&opts.field.value){opts.defaultDate=moment(opts.field.value,opts.format).toDate()}else{opts.defaultDate=new Date(Date.parse(opts.field.value))}opts.setDefaultDate=true}}var defDate=opts.defaultDate;if(isDate(defDate)){if(opts.setDefaultDate){self.setDate(defDate,true)}else{self.gotoDate(defDate)}}else{self.gotoDate(new Date)}if(opts.bound){this.hide();self.el.className+=" is-bound";addEvent(opts.trigger,"click",self._onInputClick);addEvent(opts.trigger,"focus",self._onInputFocus);addEvent(opts.trigger,"blur",self._onInputBlur)}else{this.show()}};Pikaday.prototype={config:function(options){if(!this._o){this._o=extend({},defaults,true)}var opts=extend(this._o,options,true);opts.isRTL=!!opts.isRTL;opts.field=opts.field&&opts.field.nodeName?opts.field:null;opts.theme=typeof opts.theme==="string"&&opts.theme?opts.theme:null;opts.bound=!!(opts.bound!==undefined?opts.field&&opts.bound:opts.field);opts.trigger=opts.trigger&&opts.trigger.nodeName?opts.trigger:opts.field;opts.disableWeekends=!!opts.disableWeekends;opts.disableDayFn=typeof opts.disableDayFn==="function"?opts.disableDayFn:null;var nom=parseInt(opts.numberOfMonths,10)||1;opts.numberOfMonths=nom>4?4:nom;if(!isDate(opts.minDate)){opts.minDate=false}if(!isDate(opts.maxDate)){opts.maxDate=false}if(opts.minDate&&opts.maxDate&&opts.maxDate<opts.minDate){opts.maxDate=opts.minDate=false}if(opts.minDate){this.setMinDate(opts.minDate)}if(opts.maxDate){this.setMaxDate(opts.maxDate)}if(isArray(opts.yearRange)){var fallback=(new Date).getFullYear()-10;opts.yearRange[0]=parseInt(opts.yearRange[0],10)||fallback;opts.yearRange[1]=parseInt(opts.yearRange[1],10)||fallback}else{opts.yearRange=Math.abs(parseInt(opts.yearRange,10))||defaults.yearRange;if(opts.yearRange>100){opts.yearRange=100}}return opts},toString:function(format){return!isDate(this._d)?"":hasMoment?moment(this._d).format(format||this._o.format):this._d.toDateString()},getMoment:function(){return hasMoment?moment(this._d):null},setMoment:function(date,preventOnSelect){if(hasMoment&&moment.isMoment(date)){this.setDate(date.toDate(),preventOnSelect)}},getDate:function(){return isDate(this._d)?new Date(this._d.getTime()):null},setDate:function(date,preventOnSelect){if(!date){this._d=null;if(this._o.field){this._o.field.value="";fireEvent(this._o.field,"change",{firedBy:this})}return this.draw()}if(typeof date==="string"){date=new Date(Date.parse(date))}if(!isDate(date)){return}var min=this._o.minDate,max=this._o.maxDate;if(isDate(min)&&date<min){date=min}else if(isDate(max)&&date>max){date=max}this._d=new Date(date.getTime());setToStartOfDay(this._d);this.gotoDate(this._d);if(this._o.field){this._o.field.value=this.toString();fireEvent(this._o.field,"change",{firedBy:this})}if(!preventOnSelect&&typeof this._o.onSelect==="function"){this._o.onSelect.call(this,this.getDate())}},gotoDate:function(date){var newCalendar=true;if(!isDate(date)){return}if(this.calendars){var firstVisibleDate=new Date(this.calendars[0].year,this.calendars[0].month,1),lastVisibleDate=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),visibleDate=date.getTime();lastVisibleDate.setMonth(lastVisibleDate.getMonth()+1);lastVisibleDate.setDate(lastVisibleDate.getDate()-1);newCalendar=visibleDate<firstVisibleDate.getTime()||lastVisibleDate.getTime()<visibleDate}if(newCalendar){this.calendars=[{month:date.getMonth(),year:date.getFullYear()}];if(this._o.mainCalendar==="right"){this.calendars[0].month+=1-this._o.numberOfMonths}}this.adjustCalendars()},adjustCalendars:function(){this.calendars[0]=adjustCalendar(this.calendars[0]);for(var c=1;c<this._o.numberOfMonths;c++){this.calendars[c]=adjustCalendar({month:this.calendars[0].month+c,year:this.calendars[0].year})}this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(month){if(!isNaN(month)){this.calendars[0].month=parseInt(month,10);this.adjustCalendars()}},nextMonth:function(){this.calendars[0].month++;this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--;this.adjustCalendars()},gotoYear:function(year){if(!isNaN(year)){this.calendars[0].year=parseInt(year,10);this.adjustCalendars()}},setMinDate:function(value){setToStartOfDay(value);this._o.minDate=value;this._o.minYear=value.getFullYear();this._o.minMonth=value.getMonth();this.draw()},setMaxDate:function(value){setToStartOfDay(value);this._o.maxDate=value;this._o.maxYear=value.getFullYear();this._o.maxMonth=value.getMonth();this.draw()},setStartRange:function(value){this._o.startRange=value},setEndRange:function(value){this._o.endRange=value},draw:function(force){if(!this._v&&!force){return}var opts=this._o,minYear=opts.minYear,maxYear=opts.maxYear,minMonth=opts.minMonth,maxMonth=opts.maxMonth,html="";if(this._y<=minYear){this._y=minYear;if(!isNaN(minMonth)&&this._m<minMonth){this._m=minMonth}}if(this._y>=maxYear){this._y=maxYear;if(!isNaN(maxMonth)&&this._m>maxMonth){this._m=maxMonth}}for(var c=0;c<opts.numberOfMonths;c++){html+='<div class="pika-lendar">'+renderTitle(this,c,this.calendars[c].year,this.calendars[c].month,this.calendars[0].year)+this.render(this.calendars[c].year,this.calendars[c].month)+"</div>"}this.el.innerHTML=html;if(opts.bound){if(opts.field.type!=="hidden"){sto(function(){opts.trigger.focus()},1)}}if(typeof this._o.onDraw==="function"){var self=this;sto(function(){self._o.onDraw.call(self)},0)}},adjustPosition:function(){var field,pEl,width,height,viewportWidth,viewportHeight,scrollTop,left,top,clientRect;if(this._o.container)return;this.el.style.position="absolute";field=this._o.trigger;pEl=field;width=this.el.offsetWidth;height=this.el.offsetHeight;viewportWidth=window.innerWidth||document.documentElement.clientWidth;viewportHeight=window.innerHeight||document.documentElement.clientHeight;scrollTop=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;if(typeof field.getBoundingClientRect==="function"){clientRect=field.getBoundingClientRect();left=clientRect.left+window.pageXOffset;top=clientRect.bottom+window.pageYOffset}else{left=pEl.offsetLeft;top=pEl.offsetTop+pEl.offsetHeight;while(pEl=pEl.offsetParent){left+=pEl.offsetLeft;top+=pEl.offsetTop}}if(this._o.reposition&&left+width>viewportWidth||this._o.position.indexOf("right")>-1&&left-width+field.offsetWidth>0){left=left-width+field.offsetWidth}if(this._o.reposition&&top+height>viewportHeight+scrollTop||this._o.position.indexOf("top")>-1&&top-height-field.offsetHeight>0){top=top-height-field.offsetHeight}this.el.style.left=left+"px";this.el.style.top=top+"px"},render:function(year,month){var opts=this._o,now=new Date,days=getDaysInMonth(year,month),before=new Date(year,month,1).getDay(),data=[],row=[];setToStartOfDay(now);if(opts.firstDay>0){before-=opts.firstDay;if(before<0){before+=7}}var cells=days+before,after=cells;while(after>7){after-=7}cells+=7-after;for(var i=0,r=0;i<cells;i++){var day=new Date(year,month,1+(i-before)),isSelected=isDate(this._d)?compareDates(day,this._d):false,isToday=compareDates(day,now),isEmpty=i<before||i>=days+before,isStartRange=opts.startRange&&compareDates(opts.startRange,day),isEndRange=opts.endRange&&compareDates(opts.endRange,day),isInRange=opts.startRange&&opts.endRange&&opts.startRange<day&&day<opts.endRange,isDisabled=opts.minDate&&day<opts.minDate||opts.maxDate&&day>opts.maxDate||opts.disableWeekends&&isWeekend(day)||opts.disableDayFn&&opts.disableDayFn(day),dayConfig={day:1+(i-before),month:month,year:year,isSelected:isSelected,isToday:isToday,isDisabled:isDisabled,isEmpty:isEmpty,isStartRange:isStartRange,isEndRange:isEndRange,isInRange:isInRange};row.push(renderDay(dayConfig));if(++r===7){if(opts.showWeekNumber){row.unshift(renderWeek(i-before,month,year))}data.push(renderRow(row,opts.isRTL));row=[];r=0}}return renderTable(opts,data)},isVisible:function(){return this._v},show:function(){if(!this._v){removeClass(this.el,"is-hidden");this._v=true;this.draw();if(this._o.bound){addEvent(document,"click",this._onClick);this.adjustPosition()}if(typeof this._o.onOpen==="function"){this._o.onOpen.call(this)}}},hide:function(){var v=this._v;if(v!==false){if(this._o.bound){removeEvent(document,"click",this._onClick)}this.el.style.position="static";this.el.style.left="auto";this.el.style.top="auto";addClass(this.el,"is-hidden");this._v=false;if(v!==undefined&&typeof this._o.onClose==="function"){this._o.onClose.call(this)}}},destroy:function(){this.hide();removeEvent(this.el,"mousedown",this._onMouseDown,true);removeEvent(this.el,"touchend",this._onMouseDown,true);removeEvent(this.el,"change",this._onChange);if(this._o.field){removeEvent(this._o.field,"change",this._onInputChange);if(this._o.bound){removeEvent(this._o.trigger,"click",this._onInputClick);removeEvent(this._o.trigger,"focus",this._onInputFocus);removeEvent(this._o.trigger,"blur",this._onInputBlur)}}if(this.el.parentNode){this.el.parentNode.removeChild(this.el)}}};return Pikaday});﻿jQuery(document).ready(function() {

  // Get language to use.
  var lang = jQuery('body').attr('lang');

  // Get all fields that should use the datepicker.
  var datePickerInputs = jQuery('.datepicker-input');

  // Set up basic configuration.
  var i18nConfig = {
    previousMonth : '<',
    nextMonth     : '>',
    months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
    weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    weekdaysShort : ['Su','M','Tu','W','Th','F','Sa']
  };

  // Modify configuration based on language.
  switch(lang) {
    case 'en':
      i18nConfig.previousMonth = 'Previous Month';
      i18nConfig.nextMonth = 'Next Month';
      break;
    case 'tr':
      i18nConfig.months = [ 'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık' ],
      i18nConfig.weekdays = [ 'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi' ];
      i18nConfig.weekdaysShort = [ 'Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cts' ];
      break;
    case 'zh':
      i18nConfig.months = [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
      i18nConfig.weekdays = [ '日', '一', '二', '三', '四', '五', '六' ];
      i18nConfig.weekdaysShort = [ '日', '一', '二', '三', '四', '五', '六' ];
      break;
    // case 'zh':
    //   i18nConfig.months = [ '1&#32;&#26376;', '2&#32;&#26376;', '3&#32;&#26376;', '4&#32;&#26376;', '5&#32;&#26376;', '6&#32;&#26376;', '7&#32;&#26376;', '8&#32;&#26376;', '9&#32;&#26376;', '10&#26376;', '11&#26376;', '12&#26376;'];
    //   i18nConfig.weekdays = [ '&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;', '&#21608;&#20116;', '&#21608;&#20845;' ];
    //   i18nConfig.weekdaysShort = [ '&#21608;&#26085;', '&#21608;&#19968;', '&#21608;&#20108;', '&#21608;&#19977;', '&#21608;&#22235;', '&#21608;&#20116;', '&#21608;&#20845;' ];
    //   break;
    case 'fr':
      i18nConfig.previousMonth = 'Préc.';
      i18nConfig.nextMonth = 'Suivant';
      i18nConfig.months = [ 'Janvier', 'F&#233;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'D&#233;cembre' ];
      i18nConfig.weekdays = [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ];
      i18nConfig.weekdaysShort = [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ];
      break;
    case 'es':
      i18nConfig.months = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
      i18nConfig.weekdays = [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'S&#224;b' ];
      i18nConfig.weekdaysShort = [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'S&#224;b' ];
      break;
    case 'it':
      i18nConfig.months = [ 'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre' ];
      i18nConfig.weekdays = [ 'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab' ];
      i18nConfig.weekdaysShort = [ 'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab' ];
      break;
    case 'de':
      i18nConfig.months = [ 'Januar', 'Februar', 'M&#228;rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ];
      i18nConfig.weekdays = [ 'Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam' ];
      i18nConfig.weekdaysShort = [ 'Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam' ];
      break;
    case 'pt':
      i18nConfig.months = [ 'Janeiro', 'Fevereiro', 'Mar&#231;o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];
      i18nConfig.weekdays = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&#225;' ];
      i18nConfig.weekdaysShort = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S&#225;' ];
      break;
    case 'hu':
      i18nConfig.months = [ 'Janu&#225;r', 'Febru&#225;r', 'M&#225;rcius', '&#193;prilis', 'M&#225;jus', 'J&#250;nius', 'J&#250;lius', 'Augusztus', 'Szeptember', 'Okt&#243;ber', 'November', 'December' ];
      i18nConfig.weekdays = [ 'Vas', 'H&#233;', 'Ke', 'Sze', 'Cs&#252;', 'P&#233;', 'Szo' ];
      i18nConfig.weekdaysShort = [ 'Vas', 'H&#233;', 'Ke', 'Sze', 'Cs&#252;', 'P&#233;', 'Szo' ];
      break;
    case 'lt':
      i18nConfig.months = [ 'Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegu&#382;&#279;', 'Bir&#382;elis', 'Liepa', 'Rugj&#363;tis', 'Rus&#279;jis', 'Spalis', 'Lapkritis', 'Gruodis' ];
      i18nConfig.weekdays = [ 'Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', '&Scaron;e&scaron;' ];
      i18nConfig.weekdaysShort = [ 'Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', '&Scaron;e&scaron;' ];
      break;
    case 'nl':
      i18nConfig.months = [ 'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december' ];
      i18nConfig.weekdays = [ 'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za' ];
      i18nConfig.weekdaysShort = [ 'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za' ];
      break;
    case 'dk':
      i18nConfig.months = [ 'Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December' ];
      i18nConfig.weekdays = [ 'S&#248;n', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L&#248;r' ];
      i18nConfig.weekdaysShort = [ 'S&#248;n', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L&#248;r' ];
      break;
    case 'no':
      i18nConfig.months = [ 'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember' ];
      i18nConfig.weekdays = [ 'Sun', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L&#248;r' ];
      i18nConfig.weekdaysShort = [ 'Sun', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L&#248;r' ];
      break;
    case 'lv':
      i18nConfig.months = [ 'Janv&#257;ris', 'Febru&#257;ris', 'Marts', 'Apr&#299;lis', 'Maijs', 'J&#363;nijs', 'J&#363;lijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decemberis' ];
      i18nConfig.weekdays = [ 'Sv', 'P', 'O', 'T', 'C', 'Pk', 'S' ];
      i18nConfig.weekdaysShort = [ 'Sv', 'P', 'O', 'T', 'C', 'Pk', 'S' ];
      break;
    case 'ja':
      i18nConfig.months = [ '1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月' ];
      i18nConfig.weekdays = [ '日','月','火','水','木','金','土'];
      i18nConfig.weekdaysShort = [ '日','月','火','水','木','金','土'];
      break;
    case 'fi':
      i18nConfig.months = [ 'Tammikuu', 'Helmikuu', 'Maalisokuu', 'Huhtikuu', 'Toukokuu', 'Kes&#228;kuu', 'Hein&#228;kuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu' ];
      i18nConfig.weekdays = [ 'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La' ];
      i18nConfig.weekdaysShort = [ 'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La' ];
      break;
    case 'ro':
      i18nConfig.months = [ 'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Junie', 'Julie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie' ];
      i18nConfig.weekdays = [ 'Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sam' ];
      i18nConfig.weekdaysShort = [ 'Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sam' ];
      break;
    case 'sv':
      i18nConfig.months = [ 'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December' ];
      i18nConfig.weekdays = [ 'S&#246;n', 'M&#229;n', 'Tis', 'Ons', 'Tor', 'Fre', 'L&#246;r' ];
      i18nConfig.weekdaysShort = [ 'S&#246;n', 'M&#229;n', 'Tis', 'Ons', 'Tor', 'Fre', 'L&#246;r' ];
      break;
    case 'pl':
      i18nConfig.months = [ 'Stycze\u0144', 'Luty', 'Marzec', 'Kwiecie\u0144', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpie\u0144', 'Wrzesie\u0144', 'Pa\u017adziernik', 'Listopad', 'Grudzie\u0144'];
      i18nConfig.weekdays = ['Nie', 'Pon', 'Wt', '\u015ar', 'Czw', 'Pt', 'Sob'];
      i18nConfig.weekdaysShort = ['Nie', 'Pon', 'Wt', '\u015ar', 'Czw', 'Pt', 'Sob'];
      break;
    case 'ru':
      i18nConfig.months = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];
      i18nConfig.weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
      i18nConfig.weekdaysShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
      break;
    case 'ko':
      i18nConfig.previousMonth = '이전';
      i18nConfig.nextMonth = '다음';
      i18nConfig.months = [ '1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
      i18nConfig.weekdays = ['토','일','월','화','수','목','금'];
      i18nConfig.weekdaysShort = ['토','일','월','화','수','목','금'];
      break;
    default:
      break;
  }

  // Initalize datepicker on each input field.
  jQuery.each(datePickerInputs, function(index, input) {
    initDatepicker(input);
  });

  jQuery('body').on('focus', '.datepicker-input', function(event) {
    if (! event.currentTarget.cgDatepickerInitalized ) {
      initDatepicker(event.currentTarget);
    }
  });

  function initDatepicker(input) {
    // don't let initalizing datepickers change the "formChanged" status.
    var previousFormChanged = window.formChanged;

    var myFormat = jQuery(input).data('dateFormat');
    var options = {
      field: input,
      format: myFormat,
      i18n: i18nConfig
    };
    var picker = new Pikaday(options);
    input.cgDatepickerInitalized = true;

    if (previousFormChanged === false) {
      window.formChanged = false;
    }
  }
});jQuery(document).ready(function() {
  jQuery('form[data-validator="validateQuickSearch"]')
    .on("submit", function(event) {
      validateQuickSearch(event, jQuery(this))
    });

  jQuery('form[data-validator="validateVCQuickSearch"]')
    .on("submit", function(event) {
      validateQuickSearch(event, jQuery(this))
    });

  // Ensure that a proposal type is selected in the quick search portlets and disable the submit button 
  validateQuickSearch = function (event, searchForm) {
    // if no proposal type selected and no required attribute exists (in which case, assume client-side validation), 
    // throw up error and prevent form submission
    if (searchForm.find('select[name="x_pt_id"][required!="required"]').val() == "") {
      alert(searchForm.attr("data-required-error"));
      event.preventDefault();
    } else {
      // if there's a submit button, change the label and disable it
      var button = searchForm.find('input[type="submit"]');
      if (button) {
        button.val(searchForm.attr("data-please-wait"));
        button.prop("disabled",true);
      }
    }
  };
});