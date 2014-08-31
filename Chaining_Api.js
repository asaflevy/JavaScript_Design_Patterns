var Calc = function (start) {
	var _self = this;
	this.add = function (x) {
		start += x;
		return _self
	};

	this.multiply = function (x) {
		start *= x;
		return _self;
	};

	this.equals = function (callback) {
		callback(start);
		return _self;
	};
}

new Calc(0)
	.add(1)
	.add(2)
	.multiply(3)
	.equals(function (result) {
		console.log(result);
	});