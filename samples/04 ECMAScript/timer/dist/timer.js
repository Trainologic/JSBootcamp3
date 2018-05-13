var Timer = /** @class */ (function () {
    function Timer(interval) {
        this.interval = interval;
        this.callbacks = [];
    }
    Timer.prototype.tick = function (callback) {
        this.callbacks.push(callback);
    };
    Timer.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            for (var _i = 0, _a = _this.callbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback();
            }
        }, this.interval);
    };
    Timer.prototype.stop = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    };
    return Timer;
}());
//# sourceMappingURL=timer.js.map