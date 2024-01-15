// 需求：对项目中已经开发好的类添加功能，类创建实例时打印日志信息，并输出传递了哪些参数。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 1. 打印日志信息的装饰器
function log_decorator(targetClass) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            console.log('日志信息：', targetClass.name);
            return _this;
        }
        class_1.prototype.one = function () {
            console.log('one');
        };
        return class_1;
    }(targetClass));
}
// 2. 目标类
var Test = /** @class */ (function () {
    function Test(name, age) {
        this.name = name;
        this.age = age;
    }
    Test.prototype.eat = function () {
        console.log(this.name, ' eat');
    };
    Test = __decorate([
        log_decorator // 装饰器函数返回类型“typeof NewClass”不可分配到类型“void | typeof Test”。
        ,
        __metadata("design:paramtypes", [String, Number])
    ], Test);
    return Test;
}());
var test = new Test('zhangsan', 18); // 日志信息： Test
test.eat(); // zhangsan  eat
test.one(); // one 注意：编译后装饰器运行了，Test类才变成子类NewClass，所以在编译期间，Test类没有one方法，需要类型断言
var SubClass = log_decorator(Test); // 写法四
var sub = new SubClass('lisi', 20); // 日志信息： Test
export {};
