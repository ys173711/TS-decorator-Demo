var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 第2章的方法拦截器
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.trimSpace = function (str) {
        return str.replace(/\s+/g, '');
    };
    return StringUtil;
}());
function interceptor(className, methodName) {
    var desc = Object.getOwnPropertyDescriptor(className.prototype, methodName);
    var _originMethod = desc.value;
    desc.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('前置拦截器...');
        args = args.map(function (item) {
            return StringUtil.trimSpace(item);
        });
        _originMethod.apply(this, args);
        console.log('后置拦截器...');
    };
    Object.defineProperty(className.prototype, methodName, desc);
}
var RoleService = /** @class */ (function () {
    function RoleService() {
        this.roleName = '管理员';
    }
    RoleService.prototype.destributeRoles = function (role, flag) {
        console.log('分配角色 ', role);
    };
    __decorate([
        my_methodDecorator,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Boolean]),
        __metadata("design:returntype", void 0)
    ], RoleService.prototype, "destributeRoles", null);
    return RoleService;
}());
/**
 * @param targetClassPrototype
 * @param methodName
 * @param descriptor
 */
function my_methodDecorator(targetClassPrototype, methodName, descriptor) {
    var OriginMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('前置拦截...');
        args = args.map(function (item) {
            if (typeof item === 'string') {
                return StringUtil.trimSpace(item);
            }
            return item;
        });
        console.log('args: ', args);
        OriginMethod.apply(this, args);
        console.log('后置拦截...');
    };
}
var roleService = new RoleService();
roleService.destributeRoles(' lss p p x ', true); //
export {};
