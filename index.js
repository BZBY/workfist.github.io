/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
let count = 0;
let divs =[];
let Start=[];
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function test(evt){

    for(var i = 0; i < divs.length; i++) {
        if (divs[i] == evt){
            return i;
        }
    }
    divs[divs.length] = evt;
    return divs.length-1;
}

function s(evt,fin) {
    let l = test(evt);
    Start[l] = document.getElementById(evt).value;
    let val = marked.parse(document.getElementById(evt).value);

    document.getElementById(fin).innerHTML = marked.parse(document.getElementById(evt).value);

    console.log(marked.parse(document.getElementById(evt).value))
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

openCity(null, 'London')


var autoTextarea = function (elem, extra, maxHeight) {

    extra = extra || 0;

    var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,

        isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),

        addEvent = function (type, callback) {

            elem.addEventListener ?

                elem.addEventListener(type, callback, false) :

                elem.attachEvent('on' + type, callback);

        },

        getStyle = elem.currentStyle ? function (name) {

            var val = elem.currentStyle[name];

            if (name === 'height' && val.search(/px/i) !== 1) {

                var rect = elem.getBoundingClientRect();

                return rect.bottom - rect.top -

                    parseFloat(getStyle('paddingTop')) -

                    parseFloat(getStyle('paddingBottom')) + 'px';

            };

            return val;

        } : function (name) {

            return getComputedStyle(elem, null)[name];

        },

        minHeight = parseFloat(getStyle('height'));

    elem.style.resize = 'none';

    var change = function () {

        var scrollTop, height,

            padding = 0,

            style = elem.style;

        if (elem._length === elem.value.length) return;

        elem._length = elem.value.length;

        if (!isFirefox && !isOpera) {

            padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));

        };

        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        elem.style.height = minHeight + 'px';

        if (elem.scrollHeight > minHeight) {

            if (maxHeight && elem.scrollHeight > maxHeight) {

                height = maxHeight - padding;

                style.overflowY = 'auto';

            } else {

                height = elem.scrollHeight - padding;

                style.overflowY = 'hidden';

            };

            style.height = height + extra + 'px';

            scrollTop += parseInt(style.height) - elem.currHeight;

            document.body.scrollTop = scrollTop;

            document.documentElement.scrollTop = scrollTop;

            elem.currHeight = parseInt(style.height);

        };

    };

    addEvent('propertychange', change);

    addEvent('input', change);

    addEvent('focus', change);

    change();

};

