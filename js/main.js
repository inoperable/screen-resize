    function initialize() {
        console.log(this.constructor.name + ' :: Initializing');

        // GlobalVariables
        LU = LoudUtils;

        var canvas = document.getElementById('canvas');
        var divmain = document.getElementById('main');

        // mouse event listeners
        setupEventListeners();
    }

    function setupEventListeners(options) {

        $(window)
            .on("debouncedresize", function(e) {
            scaleToCenter(divmain,20,600);
            moveToCenter(canvas,divmain,600);
        });

        // $(window)
        //     .mousedown(function(e) {

        // });

        // $(window)
        //     .mouseenter(function(e) {

        // });

        // $(window)
        //     .mouseleave(function(e) {

        // });

        // $(window)
        //     .mouseup(function(e) {

        // });


        //$(window).mousemove(function(){
        //
        //});
    }

    function moveToCenter(obj,container,duration) {
        duration === undefined ? this.duration = 400 : this.duration = duration;
        var style = LU.centerObject(obj,container);
        $(obj)
            .stop()
            .animate({
            top: style["top"],
            left: style["left"]
        },this.duration);
    }

    function scaleToCenter(obj, offset,duration) {
        duration === undefined ? this.duration = 400 : this.duration = duration;
        var style = {
            top: offset,
            left: offset,
            width: (window.innerWidth - 2*offset),
            height: (window.innerHeight - 2*offset)
        }
        $(obj)
            .stop()
            .animate({
            top: style["top"],
            left: style["left"],
            width: style["width"],
            height: style["height"]
        },this.duration);
    }
