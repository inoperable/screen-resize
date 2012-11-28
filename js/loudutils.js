var LoudUtils = (function () {

    settings = {
        verbose:false
    };

    function _logEvent(event, verbose) {
        var t_tag = event.target.tagName,
            t_class = event.target.className,
            t_id = event.target.id,
            e_type = event.type,
            result = null;

        if (event.originalEvent.constructor.name === "MouseEvent") {
            t_class === undefined || t_class === '' ? t_class = '[not set]' : null;
            t_tag === undefined || t_tag === '' ? t_tag = '[not set]' : null;
            t_id === undefined || t_id === '' ? t_id = '[not set]' : null;
            result = (" event type: " + e_type + ", tag: " + t_tag + ", class: " + t_class + ", id: " + t_id);
        } else result = (" event type: " + e_type);

        if (verbose === true || settings.verbose === true) {
            console.log(result);
        }
        return result;
    }

    function _findPosition(obj) {
        var obj2 = obj;
        var curtop = 0;
        var curleft = 0;
        if (document.getElementById || document.all) {
            do {
                curleft += obj.offsetLeft - obj.scrollLeft;
                curtop += obj.offsetTop - obj.scrollTop;
                obj = obj.offsetParent;
                obj2 = obj2.parentNode;
                while (obj2 != obj) {
                    curleft -= obj2.scrollLeft;
                    curtop -= obj2.scrollTop;
                    obj2 = obj2.parentNode;
                }
            } while (obj.offsetParent)
        } else if (document.layers) {
            curtop += obj.y;
            curleft += obj.x;
        }
        return [curtop, curleft];
    }

    function _findOffset(obj) {
        return [obj.scrollWidth - obj.offsetWidth, obj.scrollHeight - obj.offsetHeight];
    }

    function _centerObject(obj, container, option) {
        // if no container supplied, parent node will be used
				// if option is true new style will be applired 
        container === undefined ? this.container = obj.parentNode : this.container = container;
        option === undefined ? this.option = false : this.option = true;

				var pTop = Math.round(window.innerHeight/2 - obj.offsetHeight /2);
				var pLeft = Math.round(window.innerWidth/2 - obj.offsetWidth /2);
        //var pTop = Math.round(this.container.offsetHeight / 2 - obj.offsetHeight / 2) + "px";
        //var pLeft = Math.round(this.container.offsetWidth / 2 - obj.offsetWidth / 2) + "px";

        if (this.option === true) {
            obj.style.top = pTop;
            obj.style.left = pLeft;
        }
        return {top:pTop,left:pLeft};
    }

    return {
        logEvent:function (event, verbose) {
            return _logEvent(event, verbose);
        },

        findPosition:function (obj) {
            return _findPosition(obj);
        },

        findOffset:function (obj) {
            return _findOffset(obj);
        },
        centerObject:function (obj, container, option) {
            return _centerObject(obj, container, option);
        }
    }

})();