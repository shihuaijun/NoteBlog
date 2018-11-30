(function(window) {
	var svgSprite = '<svg><symbol id="icon-renzhengkaobei" viewBox="0 0 1024 1024"><path d="M512 512m-475.428571 0a475.428571 475.428571 0 1 0 950.857142 0 475.428571 475.428571 0 1 0-950.857142 0Z" fill="#FFA800" ></path><path d="M510.061714 763.392L332.178286 347.172571H241.664v57.819429h50.651429l166.985142 397.458286h103.570286L741.12 405.942857h49.627429V347.172571h-91.428572l-189.257143 416.219429zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m0 959.488A447.488 447.488 0 1 1 959.488 512 447.488 447.488 0 0 1 512 959.488zM271.835429 375.917714a29.037714 29.037714 0 1 1-29.037715-29.037714 29.037714 29.037714 0 0 1 29.037715 29.037714z m548.571428 0.621715a29.257143 29.257143 0 1 1-29.257143-29.257143 29.257143 29.257143 0 0 1 29.330286 29.403428z" fill="#F9C80E" ></path><path d="M791.113143 405.942857h-49.993143l-178.249143 396.434286h-103.570286L292.315429 404.992H241.664v-0.219429a28.964571 28.964571 0 0 1 1.133714-57.892571c0.512 0 0.950857 0.256 1.462857 0.292571h87.771429l177.883429 416.219429L699.245714 347.172571h91.757715a29.257143 29.257143 0 0 1 0.109714 58.770286z" fill="#FFFFFF" ></path></symbol></svg>';
	var script = function() {
		var scripts = document.getElementsByTagName("script");
		return scripts[scripts.length - 1]
	}();
	var shouldInjectCss = script.getAttribute("data-injectcss");
	var ready = function(fn) {
		if (document.addEventListener) {
			if (~ [ "complete", "loaded", "interactive" ]
					.indexOf(document.readyState)) {
				setTimeout(fn, 0)
			} else {
				var loadFn = function() {
					document.removeEventListener("DOMContentLoaded", loadFn,
							false);
					fn()
				};
				document.addEventListener("DOMContentLoaded", loadFn, false)
			}
		} else if (document.attachEvent) {
			IEContentLoaded(window, fn)
		}
		function IEContentLoaded(w, fn) {
			var d = w.document, done = false, init = function() {
				if (!done) {
					done = true;
					fn()
				}
			};
			var polling = function() {
				try {
					d.documentElement.doScroll("left")
				} catch (e) {
					setTimeout(polling, 50);
					return
				}
				init()
			};
			polling();
			d.onreadystatechange = function() {
				if (d.readyState == "complete") {
					d.onreadystatechange = null;
					init()
				}
			}
		}
	};
	var before = function(el, target) {
		target.parentNode.insertBefore(el, target)
	};
	var prepend = function(el, target) {
		if (target.firstChild) {
			before(el, target.firstChild)
		} else {
			target.appendChild(el)
		}
	};
	function appendSvg() {
		var div, svg;
		div = document.createElement("div");
		div.innerHTML = svgSprite;
		svgSprite = null;
		svg = div.getElementsByTagName("svg")[0];
		if (svg) {
			svg.setAttribute("aria-hidden", "true");
			svg.style.position = "absolute";
			svg.style.width = 0;
			svg.style.height = 0;
			svg.style.overflow = "hidden";
			prepend(svg, document.body)
		}
	}
	if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
		window.__iconfont__svg__cssinject__ = true;
		try {
			document
					.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
		} catch (e) {
			console && console.log(e)
		}
	}
	ready(appendSvg)
})(window)