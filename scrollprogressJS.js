
const progressJS = {
        "defaults": {
          //color
          "color": "#003f72",
          //height
          "height": "3px",
          "top": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "zIndex": 9999,
          //bottom or top
          "ontop": true,
          //left to right
          "ltr": true,
          //element to use value
          "attach": false,
          //js style or css
          "css": false,
          //decimal numbers
          "round": false,
          //use only values
          "nobar": false
        },
        "start": function (configs = {}) {
          let progressJSelem;
          if(!configs.nobar) {
            //create element
            progressJSelem = document.createElement("div");
            //use css instead of js style
            progressJSelem.setAttribute('id', 'progressbarJS');
            //append to body
            document.body.appendChild(progressJSelem);
            //styles
            progressJSelem.style.position = 'fixed';
            progressJSelem.style.zIndex = '99999';
            progressJSelem.style.width = '0%';
            //configurable options
            //top or bottom
            configs.ontop ? progressJSelem.style.bottom = '0' : progressJSelem.style.top = progressJS.defaults.top;
            //ltr or rtl
            configs.ltr ? progressJSelem.style.right = '0' : progressJSelem.style.left = progressJS.defaults.left;
            //height
            configs.height ? progressJSelem.style.height = configs.height : progressJSelem.style.height = progressJS.defaults.height;
            //color
            configs.color ? progressJSelem.style.backgroundColor = configs.color : progressJSelem.style.backgroundColor = progressJS.defaults.color;
          }
          let attachElem =  progressJS.defaults.attach;
          let roundto = progressJS.defaults.round;
          //round to
          configs.round ? roundto = configs.round : roundto = 2;
          //attach
          configs.attach ? attachElem = document.querySelector(configs.attach) : false ;
          //scroll event
          document.addEventListener('scroll', function (e) {
            const maxHeight = document.body.scrollHeight;
            const sizeHeight = window.innerHeight;
            const scrolls = window.scrollY;
            const percentage = (scrolls / (maxHeight - sizeHeight)) * 100;
            if (!configs.nobar) {
              progressJSelem.style.width = percentage.toFixed(roundto) + "%";
            }
            if (attachElem) {
              attachElem.innerHTML = percentage.toFixed(roundto);
            }
          });

        }
      }



