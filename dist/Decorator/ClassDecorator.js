var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 类装饰器
// 第一种：普通装饰器（不带参数）
function ClassDecorator_myFirst(targetClass) {
    var targetClassObj = new targetClass();
    targetClassObj.buy();
    console.log(targetClass.prototype.constructor === targetClass);
    var ownKeys = Object.keys(targetClass.prototype);
    console.log(ownKeys);
    ownKeys.forEach(function (key) {
        console.log('方法名：' + key);
    });
}
// 第二种：装饰器工厂（带参数）
function ClassDecorator_mySecond(params) {
    return function (targetClass) {
        console.log('装饰器工厂：' + params);
    };
}
// 一个类 CustomerService
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.name = '客户服务类';
    }
    CustomerService.prototype.buy = function () {
        console.log(this.name + ' 购买');
    };
    CustomerService.prototype.placeOrder = function () {
        console.log(this.name + ' 下单购买');
    };
    CustomerService = __decorate([
        ClassDecorator_mySecond('我是装饰器工厂'),
        ClassDecorator_myFirst,
        __metadata("design:paramtypes", [])
    ], CustomerService);
    return CustomerService;
}());
export {};
