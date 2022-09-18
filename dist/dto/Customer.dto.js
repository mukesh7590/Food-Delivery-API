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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditCustomerProfileInput = exports.CustomerLoginInputs = exports.CreateCustomerInput = void 0;
var class_validator_1 = require("class-validator");
var CreateCustomerInput = /** @class */ (function () {
    function CreateCustomerInput() {
    }
    __decorate([
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], CreateCustomerInput.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.Length)(7, 12),
        __metadata("design:type", String)
    ], CreateCustomerInput.prototype, "phone", void 0);
    __decorate([
        (0, class_validator_1.Length)(6, 12),
        __metadata("design:type", String)
    ], CreateCustomerInput.prototype, "password", void 0);
    return CreateCustomerInput;
}());
exports.CreateCustomerInput = CreateCustomerInput;
var CustomerLoginInputs = /** @class */ (function () {
    function CustomerLoginInputs() {
    }
    __decorate([
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], CustomerLoginInputs.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.Length)(6, 12),
        __metadata("design:type", String)
    ], CustomerLoginInputs.prototype, "password", void 0);
    return CustomerLoginInputs;
}());
exports.CustomerLoginInputs = CustomerLoginInputs;
var EditCustomerProfileInput = /** @class */ (function () {
    function EditCustomerProfileInput() {
    }
    __decorate([
        (0, class_validator_1.Length)(3, 16),
        __metadata("design:type", String)
    ], EditCustomerProfileInput.prototype, "firstName", void 0);
    __decorate([
        (0, class_validator_1.Length)(3, 16),
        __metadata("design:type", String)
    ], EditCustomerProfileInput.prototype, "lastName", void 0);
    __decorate([
        (0, class_validator_1.Length)(6, 16),
        __metadata("design:type", String)
    ], EditCustomerProfileInput.prototype, "address", void 0);
    return EditCustomerProfileInput;
}());
exports.EditCustomerProfileInput = EditCustomerProfileInput;
//# sourceMappingURL=Customer.dto.js.map