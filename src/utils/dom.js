const getStyle = (el, key) => {
	return el.currentStyle ? el.currentStyle[key] : document.defaultView.getComputedStyle(el, false)[key]; 	
};

const setStyle = (el, key, value) => {
  el.style[key] = value;
};

const hasClass = (el, className) => {
  el.classes = el.className.split(' ');

  if (el.classes.includes(className)) {
    return true;
  }

  return false;
};

const addClass = (el, className) => {
  el.classes = el.className.split(' ');

  if (!hasClass(el, className)) {
    el.classes.push(className);
    el.className = el.classes.join(' ');
  }
};

const removeClass = (el, className) => {
  el.classes = el.className.split(' ');

  if (hasClass(el, className)) {
    el.classes = el.classes.filter((item) => {
      return item !== className
    });

    el.className = el.classes.join(' ');
  }
}

export {
  getStyle,
  setStyle,
  hasClass,
  addClass,
  removeClass
}

