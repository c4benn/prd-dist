/* eslint-disable promise/param-names */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-void */

self.addEventListener(
	"message",
	async (e) => {
	  let promiser = (val = true) => {
		return new Promise((r) => r(val));
	  };
  
	  if (e.data.name == "fetch-states") {
		let failed = false;
		let retryCount = 0;
  
		async function getStates() {
		  try {
			const $fetch = await fetch(
			  "http://locationsng-api.herokuapp.com/api/v1/lgas",
			  {
				method: "GET"
			  }
			);
			const response = await $fetch.json();
			const result = await response;
  
			function formatData() {
			  return new Promise((r) => {
				const output = {};
  
				if (
				  !(result !== null && result !== void 0 && result.length) ||
				  !Object.values(result).length
				) {
				  failed = true;
				  return r(null);
				}
  
				result.forEach((x) => {
				  if (!output[x.state]) {
					output[x.state] = [
					  ...((x === null || x === void 0 ? void 0 : x.lgas) || [])
					];
				  }
				});
				return r(output);
			  });
			}
  
			const messageData = await formatData();
			messageData &&
			  self.postMessage({
				name: "fetch-states",
				data: messageData
			  });
		  } catch (e) {
			let _e$message;
  
			if (retryCount >= 3) {
			  return self.postMessage({
				name: "fetch-states",
				data: null
			  });
			}
  
			if (
			  /failed to fetch$/i.test(
				e === null || e === void 0
				  ? void 0
				  : (_e$message = e.message) === null || _e$message === void 0
				  ? void 0
				  : _e$message.trim()
			  )
			) {
			  failed = true;
			  setTimeout(() => {
				retryCount += 1;
				getStates();
			  }, 5000);
			}
		  }
		}
  
		getStates();
  
		if (failed) {
		  console.log("failed fetching");
		}
  
		return;
	  }
  
	  if (e.data.name == "timeout") {
		let t = self.setTimeout(() => {
		  self.postMessage({
			name: "timeout",
			timeStamp: e.data.timeStamp,
			data: e.data.data
		  });
		  self.clearTimeout(t);
		  t = 0;
		}, e.data.delay);
  
		return;
	  }
  
	  if (e.data.name == "spring") {
		let data = e.data;
		let className = data.className;
  
		let createSpringAnimation = ({
		  from = 0,
		  to = 100,
		  stiffness = 150,
		  damping = 5,
		  mass = 0.5,
		  precision = 0.001
		}) => {
		  return new Promise((r) => {
			const $to = 1;
			const k = -stiffness;
			const d = -damping;
			const fps = 1 / 60;
			let x = 0;
			let velocity = 0;
			const positions = [];
			let frames = 0;
			let stoppingAttempt = 0;
  
			for (let step = 0; step <= 1000; step += 1) {
			  const springForce = k * (x - $to);
			  const dampingForce = d * velocity;
			  const acceleration = (springForce + dampingForce) / mass;
			  velocity += acceleration * fps;
			  const nextValue = x + velocity * fps;
			  const stopping = Math.abs(nextValue - x) <= parseFloat(precision);
  
			  if (stopping) {
				stoppingAttempt += 1;
			  }
  
			  x = nextValue;
  
			  if (step == 0) {
				positions.push(0);
			  }
  
			  positions.push(x);
  
			  if (stoppingAttempt >= 3) {
				positions.push($to);
				frames = step + 1;
				break;
			  }
			}
  
			if (frames == 0) {
			  frames = 1000;
			  positions.push($to);
			}
  
			const parseFrom = parseFloat(from);
			const parseTo = parseFloat(to);
			const returnValue = {
			  positions: positions.map(
				(ratio) => parseFrom + (parseTo - parseFrom) * ratio
			  ),
			  frames
			};
			return r(returnValue);
		  });
		};
  
		let springConfig = {
		  precision: e.data.precision,
		  stiffness: e.data.stiffness,
		  damping: e.data.damping,
		  mass: e.data.mass
		};
  
		let mapFromAndTo = async () => {
		  let _returnValue$, _returnValue$$positio;
  
		  const from = e.data.from;
		  const to = e.data.to;
  
		  const flatValue = (arr) => arr.flat(Infinity);
  
		  const $from = flatValue([from]).map((x) => parseFloat(x));
		  const $to = flatValue([to]).map((x) => parseFloat(x)); // const mapValues = (arr, val) => arr.map(() => val);
  
		  const getSuffix = (val) => {
			let _$match;
  
			return (
			  ((_$match = `${val}`.match(/\D+$/g)) === null || _$match === void 0
				? void 0
				: _$match[0]) || ""
			).replace(/\.|undefined/g, "");
		  };
  
		  const suffix = flatValue([to]).map((x, i) => {
			let returnValue = getSuffix(x);
  
			if (!returnValue) {
			  returnValue = getSuffix(flatValue([from])[i]);
			}
  
			return returnValue;
		  });
  
		  if ($from.length != $to.length) {
			throw new Error("invalid spring config", {
			  $from,
			  $to
			});
		  }
  
		  const returnValue = {};
  
		  for (let key = 0; key < $to.length; key++) {
			const fromValue = $from[key];
			const toValue = $to[key];
			returnValue[`${key}`] = await createSpringAnimation({
			  from: fromValue,
			  to: toValue,
			  ...springConfig
			});
			returnValue[`${key}`].suffix = suffix[key];
		  }
  
		  returnValue.length =
			((_returnValue$ = returnValue["0"]) === null ||
			_returnValue$ === void 0
			  ? void 0
			  : (_returnValue$$positio = _returnValue$.positions) === null ||
				_returnValue$$positio === void 0
			  ? void 0
			  : _returnValue$$positio.length) || 0;
		  return returnValue;
		};
  
		const now = e.data.timeStamp || performance.now();
		let output = await mapFromAndTo();
		let $css = {};
		const outputPositionsLength = output.length;
  
		for (let i = 0; i < outputPositionsLength; i++) {
		  let string = e.data.cssText || "";
		  const indexes = string
			.match(/\{\d+\}/g)
			.map((x) => parseFloat(x.replace(/\{|\}/g, "")));
		  indexes.forEach((x) => {
			const regExp = new RegExp(`\\{${x}\\}`);
			const value = output[x].positions[i];
			const suffix = output[x].suffix;
			string = string.replace(regExp, `${value}${suffix}`);
			string = string.replace(/;{2,}/g, ";");
		  });
		  let keyFrameIndex = (100 / (outputPositionsLength - 1)) * i;
  
		  if (keyFrameIndex <= 0) {
			keyFrameIndex = 0;
		  }
  
		  if (keyFrameIndex >= 100) {
			keyFrameIndex = 100;
		  }
  
		  $css[`${keyFrameIndex}%`] = string;
		}
  
		let $Frames = `{`;
		Object.keys($css).forEach((x, i, a) => {
		  $Frames += `${x}{${$css[x]}}`;
  
		  if (i + 1 == a.length) {
			$Frames += "}";
			let animName = data.animName;
  
			let buildFrames = () => {
			  let returnValue = "";
			  ["@-webkit-", "@"].forEach(
				(x) =>
				  (returnValue += `${x}keyframes ${animName.toUpperCase()} ${$Frames}`)
			  );
			  return returnValue;
			};
  
			let keyFrames = buildFrames();
			let duration = `${((output[0].frames + 1) / 60) * 1000}ms`;
			let classRule = e.data.classRule;
			let $output = {
			  name: "spring",
			  id: e.data.id,
			  data: output,
			  timeStamp: now,
			  className,
			  animName,
			  duration,
			  keyFrames,
			  classRule,
			  ogCssText: e.data.cssText,
			  animType: e.data.animType,
			  animPath: e.data.animPath,
			  direction: e.data.direction,
			  springConfig
			};
  
			self.postMessage({ ...$output });
  
			$output = 0;
  
			animName = 0;
			buildFrames = 0;
  
			keyFrames = 0;
			duration = 0;
			classRule = 0;
  
			data = 0;
			className = 0;
			createSpringAnimation = 0;
			springConfig = 0;
			mapFromAndTo = 0;
			output = 0;
			$css = 0;
		  }
		});
	  }
  
	  if (e.data.name == "color") {
		let convertColors = (color) => {
		  const colorNames = `{"aliceblue":"$(240,248,255,1)","antiquewhite":"$(250,235,215,1)","aqua":"$(0,255,255,1)","aquamarine":"$(127,255,212,1)","azure":"$(240,255,255,1)","beige":"$(245,245,220,1)","bisque":"$(255,228,196,1)","black":"$(0,0,0,1)","blanchedalmond":"$(255,235,205,1)","blue":"$(0,0,255,1)","blueviolet":"$(138,43,226,1)","brown":"$(165,42,42,1)","burlywood":"$(222,184,135,1)","cadetblue":"$(95,158,160,1)","chartreuse":"$(127,255,0,1)","chocolate":"$(210,105,30,1)","coral":"$(255,127,80,1)","cornflowerblue":"$(100,149,237,1)","cornsilk":"$(255,248,220,1)","crimson":"$(220,20,60,1)","cyan":"$(0,255,255,1)","darkblue":"$(0,0,139,1)","darkcyan":"$(0,139,139,1)","darkgoldenrod":"$(184,134,11,1)","darkgray":"$(169,169,169,1)","darkgreen":"$(0,100,0,1)","darkkhaki":"$(189,183,107,1)","darkmagenta":"$(139,0,139,1)","darkolivegreen":"$(85,107,47,1)","darkorange":"$(255,140,0,1)","darkorchid":"$(153,50,204,1)","darkred":"$(139,0,0,1)","darksalmon":"$(233,150,122,1)","darkseagreen":"$(143,188,143,1)","darkslateblue":"$(72,61,139,1)","darkslategray":"$(47,79,79,1)","darkturquoise":"$(0,206,209,1)","darkviolet":"$(148,0,211,1)","deeppink":"$(255,20,147,1)","deepskyblue":"$(0,191,255,1)","dimgray":"$(105,105,105,1)","dodgerblue":"$(30,144,255,1)","firebrick":"$(178,34,34,1)","floralwhite":"$(255,250,240,1)","forestgreen":"$(34,139,34,1)","fuchsia":"$(255,0,255,1)","gainsboro":"$(220,220,220,1)","ghostwhite":"$(248,248,255,1)","gold":"$(255,215,0,1)","goldenrod":"$(218,165,32,1)","gray":"$(128,128,128,1)","green":"$(0,128,0,1)","greenyellow":"$(173,255,47,1)","honeydew":"$(240,255,240,1)","hotpink":"$(255,105,180,1)","indianred":"$(205,92,92,1)","indigo":"$(75,0,130,1)","ivory":"$(255,255,240,1)","khaki":"$(240,230,140,1)","lavender":"$(230,230,250,1)","lavenderblush":"$(255,240,245,1)","lawngreen":"$(124,252,0,1)","lemonchiffon":"$(255,250,205,1)","lightblue":"$(173,216,230,1)","lightcoral":"$(240,128,128,1)","lightcyan":"$(224,255,255,1)","lightgoldenrodyellow":"$(250,250,210,1)","lightgrey":"$(211,211,211,1)","lightgreen":"$(144,238,144,1)","lightpink":"$(255,182,193,1)","lightsalmon":"$(255,160,122,1)","lightseagreen":"$(32,178,170,1)","lightskyblue":"$(135,206,250,1)","lightslategray":"$(119,136,153,1)","lightsteelblue":"$(176,196,222,1)","lightyellow":"$(255,255,224,1)","lime":"$(0,255,0,1)","limegreen":"$(50,205,50,1)","linen":"$(250,240,230,1)","magenta":"$(255,0,255,1)","maroon":"$(128,0,0,1)","mediumaquamarine":"$(102,205,170,1)","mediumblue":"$(0,0,205,1)","mediumorchid":"$(186,85,211,1)","mediumpurple":"$(147,112,216,1)","mediumseagreen":"$(60,179,113,1)","mediumslateblue":"$(123,104,238,1)","mediumspringgreen":"$(0,250,154,1)","mediumturquoise":"$(72,209,204,1)","mediumvioletred":"$(199,21,133,1)","midnightblue":"$(25,25,112,1)","mintcream":"$(245,255,250,1)","mistyrose":"$(255,228,225,1)","moccasin":"$(255,228,181,1)","navajowhite":"$(255,222,173,1)","navy":"$(0,0,128,1)","oldlace":"$(253,245,230,1)","olive":"$(128,128,0,1)","olivedrab":"$(107,142,35,1)","orange":"$(255,165,0,1)","orangered":"$(255,69,0,1)","orchid":"$(218,112,214,1)","palegoldenrod":"$(238,232,170,1)","palegreen":"$(152,251,152,1)","paleturquoise":"$(175,238,238,1)","palevioletred":"$(216,112,147,1)","papayawhip":"$(255,239,213,1)","peachpuff":"$(255,218,185,1)","peru":"$(205,133,63,1)","pink":"$(255,192,203,1)","plum":"$(221,160,221,1)","powderblue":"$(176,224,230,1)","purple":"$(128,0,128,1)","rebeccapurple":"$(102,51,153,1)","red":"$(255,0,0,1)","rosybrown":"$(188,143,143,1)","royalblue":"$(65,105,225,1)","saddlebrown":"$(139,69,19,1)","salmon":"$(250,128,114,1)","sandybrown":"$(244,164,96,1)","seagreen":"$(46,139,87,1)","seashell":"$(255,245,238,1)","sienna":"$(160,82,45,1)","silver":"$(192,192,192,1)","skyblue":"$(135,206,235,1)","slateblue":"$(106,90,205,1)","slategray":"$(112,128,144,1)","snow":"$(255,250,250,1)","springgreen":"$(0,255,127,1)","steelblue":"$(70,130,180,1)","tan":"$(210,180,140,1)","teal":"$(0,128,128,1)","thistle":"$(216,191,216,1)","tomato":"$(255,99,71,1)","turquoise":"$(64,224,208,1)","violet":"$(238,130,238,1)","wheat":"$(245,222,179,1)","white":"$(255,255,255,1)","whitesmoke":"$(245,245,245,1)","yellow":"$(255,255,0,1)","yellowgreen":"$(154,205,50,1)","transparent":"$(0,0,0,0)"}`;
		  const parseColors = JSON.parse(colorNames.replace(/\$/g, "rgba"));
  
		  function validColor(arg) {
			const valid =
			  /^#.+|^rgb\(|^rgba\(|^hsl\(|^hsla\(/.test(arg) ||
			  Object.keys(parseColors).includes(arg);
  
			return valid;
		  }
  
		  if (typeof color != "string" || !validColor(color)) {
			return promiser(color);
		  }
  
		  if (Object.keys(parseColors).includes(color)) {
			return promiser(parseColors[color]);
		  }
  
		  function hexToRgb(hex) {
			hex = hex.replace(/^#/g, "");
  
			const alpha =
			  hex.length == 6
				? 1
				: hex.length == 8
				? `0.${parseFloat(`${hex.charAt(6)}${hex.charAt(7)}`)}`
				: 1;
  
			const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
			return `rgba(${r},${g},${b},${!isNaN(alpha) ? alpha : 1})`;
		  }
  
		  if (/^#/.test(color)) {
			return promiser(hexToRgb(color));
		  }
  
		  if (/^rgb|^rgba/.test(color)) {
			color = color.replace(/\s*/g, "");
			let args = color
			  .replace(/rgba?\(|\)/g, "")
			  .split(/,/)
			  .filter(Boolean)
			  .map((x) => parseFloat(x));
  
			if (args.length == 3) {
			  args[3] = 1;
			}
  
			if (args[3] < 0) {
			  args[3] = 0;
			} else if (args[3] > 1) {
			  args[3] = 1;
			}
  
			const commas = color.match(/,/g);
			const percentageRgba = !commas
			  ? false
			  : commas.length == 2
			  ? !/\d+,|\d+\)/g.test(color)
			  : commas.length == 3
			  ? !/\d+,/g.test(color)
			  : false;
  
			if (percentageRgba) {
			  args = args.map((x, i) => (i < 3 ? (x / 100) * 255 : x));
			}
  
			return promiser(`rgba(${args.join(", ")})`);
		  }
  
		  function hslToRgb(colorArray) {
			let $h = colorArray[0];
			let $s = colorArray[1];
			let $l = colorArray[2];
			const alpha = colorArray[3];
			let $hsl = [];
			const $rgb = [];
			let $r = null;
			let $g = null;
			let $b = null;
			let $temp1 = null;
			let $temp2 = null;
  
			function degPercPercToHsl(_h, _s, _l) {
			  // convert h, s, and l back to the 0-1 range
  
			  // convert the hue's 360 degrees in a circle to 1
			  _h /= 360;
  
			  // convert the saturation and lightness to the 0-1
			  // range by multiplying by 100
			  _s /= 100;
			  _l /= 100;
  
			  $hsl[0] = _h;
			  $hsl[1] = _s;
			  $hsl[2] = _l;
  
			  return $hsl;
			}
  
			function hueToRgb($temp1, $temp2, $hue) {
			  if ($hue < 0) {
				$hue += 1;
			  }
			  if ($hue > 1) {
				$hue -= 1;
			  }
  
			  if (6 * $hue < 1) {
				return $temp1 + ($temp2 - $temp1) * 6 * $hue;
			  } else if (2 * $hue < 1) {
				return $temp2;
			  } else if (3 * $hue < 2) {
				return $temp1 + ($temp2 - $temp1) * (2 / 3 - $hue) * 6;
			  }
			  return $temp1;
			}
  
			$hsl = degPercPercToHsl($h, $s, $l);
			$h = $hsl[0];
			$s = $hsl[1];
			$l = $hsl[2];
  
			// If there's no saturation, the color is a greyscale,
			// so all three RGB values can be set to the lightness.
			// (Hue doesn't matter, because it's grey, not color)
			if ($s == 0) {
			  $r = $l * 255;
			  $g = $l * 255;
			  $b = $l * 255;
			} else {
			  // calculate some temperary variables to make the
			  // calculation eaisier.
			  if ($l < 0.5) {
				$temp2 = $l * (1 + $s);
			  } else {
				$temp2 = $l + $s - $s * $l;
			  }
			  $temp1 = 2 * $l - $temp2;
  
			  // run the calculated vars through hueToRgb to
			  // calculate the RGB value.  Note that for the Red
			  // value, we add a third (120 degrees), to adjust
			  // the hue to the correct section of the circle for
			  // red.  Simalarly, for blue, we subtract 1/3.
			  $r = 255 * hueToRgb($temp1, $temp2, $h + 1 / 3);
			  $g = 255 * hueToRgb($temp1, $temp2, $h);
			  $b = 255 * hueToRgb($temp1, $temp2, $h - 1 / 3);
			}
  
			$rgb[0] = Math.round($r);
			$rgb[1] = Math.round($g);
			$rgb[2] = Math.round($b);
  
			const parsedAlpha = parseFloat(alpha);
			const validAlpha = !isNaN(parsedAlpha);
  
			$rgb[3] = validAlpha ? parsedAlpha : 1;
  
			return $rgb;
		  }
  
		  if (/^hsla|^hsl/.test(color)) {
			color = color.replace(/\s*/g, "");
  
			const args = color
			  .replace(/hsla?\(|\)/g, "")
			  .split(/,/)
			  .filter(Boolean)
			  .map((x) => parseFloat(x));
  
			if (args.length == 3) {
			  args[3] = 1;
			}
  
			if (args[3] < 0) {
			  args[3] = 0;
			} else if (args[3] > 1) {
			  args[3] = 1;
			}
  
			return promiser(`rgba(${hslToRgb(args)})`);
		  }
  
		  return promiser(color);
		};
  
		const value = await convertColors(e.data.color);
  
		// array
		let rgb = (
		  typeof value == "object"
			? Object.values(value)
			: value.match(/(\d+(\.\d+)?)/g)
		).map((x) => parseFloat(x));
  
		let rgbRatios = [];
		// 1 = dark; 0 = white
  
		if (rgb[0] >= 130) {
		  rgbRatios.push(1);
		} else rgbRatios.push(0);
  
		if (rgb[1] >= 200) {
		  rgbRatios.push(1);
		} else rgbRatios.push(0);
  
		if (rgb[0] >= 150) {
		  rgbRatios.push(1);
		} else rgbRatios.push(0);
  
		rgbRatios = rgbRatios.reduce((a, b) => a + b, 0);
  
		// let totalRgb = rgb.reduce((a, b) => a + b, 0);
  
		// console.log(totalRgb);
  
		self.postMessage({
		  name: "color",
		  data: value,
		  textColor: rgbRatios >= 2 ? "#000" : "#fff",
		  uid: e.data.uid
		});
  
		rgbRatios = 0;
		rgb = 0;
		// totalRgb = 0;
		convertColors = 0;
		promiser = 0;
	  }
	},
	{
	  passive: true
	}
  );
  