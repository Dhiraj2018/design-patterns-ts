"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartPhone = void 0;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
    }
    SmartPhone.prototype.call = function (contact) {
        console.log("calling " + contact);
    };
    SmartPhone.prototype.sendSms = function (contact, msg) {
        console.log("send " + msg + " to " + contact);
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
