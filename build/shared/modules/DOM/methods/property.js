//props
var _val = function (node, n) {
	if (hasValue(n)) {
		if (_isFunction(n)) {
			var n = n.apply(this, []);
		}
		node.value = n;
		return node;
	}
	return node.value;
},
_sty = function (node, attr , value) {
	if (hasValue(value)) {
		node.style[attr] = value;
		return node;
	}
	return node.style;
},
_sel = function (node, n) {
	if (n) {
		node.selected = n;
		return o;
	}
	return node.selected;
};