var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject } from './InjectDecorator';
import { get } from './MethodDecorator';
import { Controller } from './ControllerDecorator';
import { UserService } from './service';
import { InjectCtor } from './CtorParameterDecorator';
import collectionInstance from './Collection';
// 牢记装饰器的执行顺序：属性装饰器 -> 方法参数装饰器 -> 方法装饰器 -> 类装饰器
var UserController = /** @class */ (function () {
    function UserController(userService, count) {
        this.userService = userService;
        this.count = count;
    }
    UserController.prototype.login = function () {
        var peopleServiceInstance = collectionInstance.get('userService');
        peopleServiceInstance.login();
    };
    __decorate([
        Inject('userService'),
        __metadata("design:type", UserService)
    ], UserController.prototype, "peopleService", void 0);
    __decorate([
        get('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "login", null);
    UserController = __decorate([
        Controller('/user'),
        __param(0, InjectCtor('userService')),
        __metadata("design:paramtypes", [UserService, String])
    ], UserController);
    return UserController;
}());
var controller = new UserController();
controller.login();
