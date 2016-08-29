var Tapestry = {
    on: function(target, type, listener){console.log(target);
        if(target.length > 1){
            
            for (var i = 0; i < target.length; i++) {
                Tapestry._on(target[i], type, listener);
            }
        }else{
            Tapestry._on(target, type, listener);
        }
    },

    _on: function(target, type, listener){
        if ("addEventListener" in window) {
            target.addEventListener(type, listener, false);
        }
        else {
            target.attachEvent("on" + type, function(){
                listener(window.event);
            });
        }
    },

    hasClass: function(target, className){
        var classes = target.className.split(' ');
        for(var i = 0; i < classes.length; i++){
            if(classes[i] == className){return true;}
        }
        return false;
    },

    addClass: function(target, className){
        if(!target){return;}
        if(!className){return;}
        if(!target.className){return;}
        var classes = target.className;
        classes += (classes != '' ? ' ' : '') + className;
        target.className = classes.replace(new RegExp('  '), ' ');
    },

    removeClass: function(target, className){
        if(!target){return;}
        if(!className){return;}
        if(!target.className){return;}
        var classes = target.className.replace(new RegExp(className), '').replace(new RegExp('  '), ' ');

        target.className = classes;
    },

    getChildrenByTagName: function(target, tagname){
        var elem = target.firstChild;
        var children = [];
        while (elem != null) {
            console.log(elem);
            if(elem.tagName){
                if (elem.tagName.toLowerCase() == tagname.toLowerCase()) {
                    children.push(elem);
                }
            }
            
            elem = elem.nextSibling;
        }
        return children;
    },

    menu:{
        click: function(){
            console.log(this);
            var p = this;
            if(p){
                p = p.parentNode.parentNode.parentNode;
                var submenu = p.querySelector('ul.menu');
                console.log(submenu);
                if(submenu){
                    if(Tapestry.hasClass(submenu, 'expanded') == true){
                        Tapestry.menu.collapse(submenu);
                        return;
                    }
                }
            }
            Tapestry.menu.expand(submenu);
        },

        expand: function(submenu){
            Tapestry.addClass(submenu, 'expanded');
        },

        collapse: function(submenu){
            Tapestry.removeClass(submenu, 'expanded');
        }
    }
}