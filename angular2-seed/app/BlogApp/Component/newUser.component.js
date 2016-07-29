System.register(['angular2/core', 'angular2/router', 'angular2/common', './BasicValidators', '../Service/user.service', './user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, BasicValidators_1, user_service_1, user_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (BasicValidators_1_1) {
                BasicValidators_1 = BasicValidators_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(_routeParams, _userService, _route, fb) {
                    this._routeParams = _routeParams;
                    this._userService = _userService;
                    this._route = _route;
                    this.user = new user_1.User();
                    this.form = fb.group({
                        userName: ['', common_1.Validators.required],
                        userEmail: ['', BasicValidators_1.BasicValidators.email],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                NewUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this.title = id ? "Edit User" : "New User";
                    if (!id)
                        return;
                    this._userService.getUser(id)
                        .subscribe(function (user) { return _this.user = user; }, function (response) {
                        if (response.status == 404) {
                            _this._route.navigate(['NotFound']);
                        }
                    });
                };
                NewUserComponent.prototype.routerCanDeactivate = function () {
                    if (this.form.dirty)
                        return confirm('You have unsaved changes. Are you sure you want to quit?');
                    return true;
                };
                NewUserComponent.prototype.addNewUser = function () {
                    var _this = this;
                    var result;
                    if (this.user.id)
                        result = this._userService.updateUser(this.user);
                    else
                        result = this._userService.createUser(this.user);
                    result.subscribe(function (x) {
                        _this._route.navigate(['User']);
                    });
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/BlogApp/Component/newUser.component.html',
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, user_service_1.UserService, router_1.Router, common_1.FormBuilder])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=newUser.component.js.map