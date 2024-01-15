var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function loginProperty(description) {
    return function (targetClassPrototype, attr) {
        console.log(description);
        console.log(targetClassPrototype);
        console.log(attr);
    };
}
var CustomerService = /** @class */ (function () {
    function CustomerService(degree) {
        this.customerName = '王五';
        this.degree = degree;
    }
    __decorate([
        loginProperty('顾客登记'),
        __metadata("design:type", String)
    ], CustomerService.prototype, "degree", void 0);
    return CustomerService;
}());
export {};
