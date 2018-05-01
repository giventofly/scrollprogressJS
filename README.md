

# scrollprogressJS


 - **what is this?**

its a lightweight (2.61 KB )simple vanilla JS page scroll progress.

 **- What do i need to run it?**

just call the scrollprogressJS.js file in your HTML and do a progressJS.start(); to use the default options.

 **- How can i change configurations?**
 
Just pass the parameters on "boot", example:

	//this attachs the scroll value to .elementClassToAttach
    document.addEventListener("DOMContentLoaded", function (event) {
    		progressJS.start({"attach":  ".elementClassToAttach"});
    });

**But what are the configurations?**

    "defaults": { //color "color":  "#003f72", //height "height":  "3px", "top":  0, "bottom":  0, "left":  0, "right":  0, "zIndex":  9999, //bottom or top "ontop":  true, //left to right "ltr":  true, //element to use value "attach":  false, //js style or css "css":  false, //decimal numbers "round":  false, //use only values "nobar":  false }

**color** will be the default color for the bar, css attributes.

    progressJS.start({"color":  "red"});
    progressJS.start({"color":  "#ff33DD"});
    progressJS.start({"color":  "rgb(23,45,255)"});
    progressJS.start({"color":  "rgba(23,45,255, 0.6)"});

**height** the bar height, css attributes.

    progressJS.start({"height":  "5px"});
    progressJS.start({"height":  "5%"});

**ontop** (default: true), sets the bar on top or bottom, set to false to put on bottom

    //bottom 
    progressJS.start({"ontop":  "false"});

**ltr** (default: true), sets the growth of the bar, from left to right or right to left.

    //grows from right to left
    progressJS.start({"ltr":  "false"});

**css** (default: false), if you want to use your own .css for the div not using .js 

    //use your .css to style the element (#progressbarJS)
    progressJS.start({"css":  "true"});

**round** (default = 2), value of decimal numbers, useful to use with attach.

    progressJS.start({"round":  "3"});

**nobar** (default: false), if you want to use no bar and just attach the value to a element, requires attach.

    //nobar and value will be put in the element with the id progressValue
    progressJS.start({"nobar":  "true", "attach":"#progressValue"});

___

*This probably has a lot of room to improve, feel free to do what you want with it. You don't need to credit, but it would be awesome to me :'D*


