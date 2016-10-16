"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var No1Component = (function () {
    function No1Component() {
    }
    No1Component = __decorate([
        core_1.Component({
            selector: 'no1',
            template: "<form class=\"pure-form pure-form-stacked\">\n    <fieldset>\n        <label for=\"text\">Type Text</label>\n        <input id=\"text\" type=\"text\" placeholder=\"Some text...\">\n\n        <button type=\"submit\" class=\"pure-button pure-button-primary\">Go!</button>\n    </fieldset>\n</form>"
        }), 
        __metadata('design:paramtypes', [])
    ], No1Component);
    return No1Component;
}());
exports.No1Component = No1Component;
//# sourceMappingURL=app.no1.js.map