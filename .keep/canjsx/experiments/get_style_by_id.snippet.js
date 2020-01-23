/*
    https://stackoverflow.com/users/938089/rob-w
    Use the following method:

    Loop through the indexes of the CSSStyleDeclaration object (getComputedStyle) to get each known property name. Use getPropertyValue + this name to get the value.
    Code optimalization: Do not use getComputedStyle for each iteration, but store it in a variable outside the loop.
    Use an ordinary for ( name in object ) loop for currentStyle.
    Use the same looping method for inline styles

 */
function getStyleById(id) {
    return getAllStyles(document.getElementById(id));
}
function getAllStyles(elem) {
    if (!elem) return []; // Element does not exist, empty list.
    var win = document.defaultView || window, style, styleNode = [];
    if (win.getComputedStyle) { /* Modern browsers */
        style = win.getComputedStyle(elem, '');
        for (var i=0; i<style.length; i++) {
            styleNode.push( style[i] + ':' + style.getPropertyValue(style[i]) );
            //               ^name ^           ^ value ^
        }
    } else if (elem.currentStyle) { /* IE */
        style = elem.currentStyle;
        for (var name in style) {
            styleNode.push( name + ':' + style[name] );
        }
    } else { /* Ancient browser..*/
        style = elem.style;
        for (var i=0; i<style.length; i++) {
            styleNode.push( style[i] + ':' + style[style[i]] );
        }
    }
    return styleNode;
}
