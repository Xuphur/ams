(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Dashboard/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/Dashboard/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navbar {\n  background-color: rgb(0, 157, 248);\n  color: white;\n  text-align: left;\n  vertical-align: middle;\n  height: 60px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaGJvYXJkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU3LCAyNDgpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Dashboard/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/Dashboard/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link\n  rel=\"stylesheet\"\n  href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\"\n  integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\"\n  crossorigin=\"anonymous\"\n/>\n\n<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">AMS</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarText\"\n    aria-controls=\"navbarText\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\"\n          >Home <span class=\"sr-only\">(current)</span></a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n    </ul>\n    <!-- <div class=\"searchbar\">\n              <input class=\"search_input\" type=\"text\" name=\"\" placeholder=\"Search...\">\n              <a href=\"#\" class=\"search_icon\"><i class=\"fas fa-search\"></i></a>\n          </div> -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/Dashboard/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Dashboard/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/Dashboard/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Dashboard/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/sidebar/sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Dashboard/sidebar/sidebar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-left-sidebar\n  .nav-link[data-toggle=\"collapse\"][aria-expanded=\"false\"]:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n\n.nav-left-sidebar .navbar {\n  padding: 14px;\n}\n\n.nav-left-sidebar .navbar-nav .nav-link:focus,\n.nav-left-sidebar .navbar-nav .nav-link.active {\n  background-color: #e2e2eb;\n  color: #3d405c;\n  border-radius: 2px;\n}\n\n.nav-left-sidebar .navbar-nav .nav-link:focus,\n.nav-left-sidebar .navbar-nav .nav-link:hover {\n  background-color: #e2e2eb;\n  color: #3d405c;\n  border-radius: 2px;\n}\n\n.sidebar-primary.nav-left-sidebar .nav-link i {\n  color: #8991d4;\n}\n\n.sidebar-primary.nav-left-sidebar .navbar-nav .nav-link {\n  color: #8991d4;\n}\n\nspan + span {\n  margin-left: 10px;\n}\n\ni {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRGFzaGJvYXJkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtDQUEwQjtVQUExQiwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBQ0Q7O0VBRUUsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0FBQ0Q7O0VBRUUsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL0Rhc2hib2FyZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGVmdC1zaWRlYmFyXG4gIC5uYXYtbGlua1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5uYXYtbGVmdC1zaWRlYmFyIC5uYXZiYXIge1xuICBwYWRkaW5nOiAxNHB4O1xufVxuLm5hdi1sZWZ0LXNpZGViYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLFxuLm5hdi1sZWZ0LXNpZGViYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZWI7XG4gIGNvbG9yOiAjM2Q0MDVjO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubmF2LWxlZnQtc2lkZWJhciAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsXG4ubmF2LWxlZnQtc2lkZWJhciAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmViO1xuICBjb2xvcjogIzNkNDA1YztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnNpZGViYXItcHJpbWFyeS5uYXYtbGVmdC1zaWRlYmFyIC5uYXYtbGluayBpIHtcbiAgY29sb3I6ICM4OTkxZDQ7XG59XG4uc2lkZWJhci1wcmltYXJ5Lm5hdi1sZWZ0LXNpZGViYXIgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgY29sb3I6ICM4OTkxZDQ7XG59XG5zcGFuICsgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5pIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Dashboard/sidebar/sidebar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/Dashboard/sidebar/sidebar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-left-sidebar sidebar-dark\">\n  <div class=\"menu-list\">\n    <nav class=\"navbar navbar-expand-sm navbar-light\">\n      <a class=\"d-xl-none d-lg-none\" href=\"#\">Dashboard</a>\n      <button\n        class=\"navbar-toggler\"\n        type=\"button\"\n        data-toggle=\"collapse\"\n        data-target=\"#navbarNav\"\n        aria-controls=\"navbarNav\"\n        aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\"\n      >\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav flex-column\">\n          <!-- <li class=\"nav-divider\">\n                      Menu\n                  </li> -->\n          <li class=\"nav-item \">\n            <span\n              ><a\n                class=\"nav-link\"\n                [routerLink]=\"['/Dashboard']\"\n                routerLinkActive=\"router-link-active\"\n                ><i class=\"fa fa-fw fa-user-circle\"></i>Dashboard\n                <span class=\"badge badge-success\"></span></a\n            ></span>\n          </li>\n          <li class=\"nav-item\">\n            <span\n              ><a\n                class=\"nav-link\"\n                [routerLink]=\"['/asset/list']\"\n                routerLinkActive=\"router-link-active\"\n                ><i class=\"fa fa-fw fa-rocket\"></i>Assest</a\n              ></span\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"['/customer/list']\"\n              routerLinkActive=\"router-link-active\"\n              ><i class=\"fas fa-fw fa-chart-pie\"></i>Customer</a\n            >\n          </li>\n          <li class=\"nav-item \">\n            <a\n              class=\"nav-link\"\n              [routerLink]=\"['//contract/list']\"\n              routerLinkActive=\"router-link-active\"\n              ><i class=\"fab fa-fw fa-wpforms\"></i>Contract</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\"\n              ><i class=\"fas fa-fw fa-table\"></i>Reports</a\n            >\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Dashboard/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/Dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/Dashboard/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/ams.service.ts":
/*!********************************!*\
  !*** ./src/app/ams.service.ts ***!
  \********************************/
/*! exports provided: AmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsService", function() { return AmsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




// import { NewcontractComponent } from './components/contract/newcontract/newcontract.component';
var AmsService = /** @class */ (function () {
    function AmsService(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.editMode = false;
        // url = 'http://localhost:4000';
        this.url = 'https://ams-backend.herokuapp.com';
    }
    // Asset CRUDs
    AmsService.prototype.getAssets = function () {
        return this.http.get(this.url + '/asset/list');
    };
    AmsService.prototype.getAsset = function (item) {
        return this.http.get(this.url + '/asset/one/' + item);
    };
    AmsService.prototype.getAssetById = function (id) {
        console.log(id, 'id at service to edit');
        return this.http.get(this.url + '/asset/' + id);
    };
    AmsService.prototype.getAssetByOwner = function (owner) {
        console.log(owner, 'id at service to edit');
        return this.http.get(this.url + '/asset/owner/' + owner);
    };
    AmsService.prototype.getAssetByType = function (type) {
        console.log(type, 'id at service to edit');
        return this.http.get(this.url + '/asset/type/' + type);
    };
    AmsService.prototype.addAsset = function (asset) {
        console.log(asset, 'this is asset at service');
        return this.http.post(this.url + '/asset/new', asset);
    };
    AmsService.prototype.updateAsset = function (asset) {
        console.log(asset._id, 'update at asset service');
        return this.http.put(this.url + '/asset/update/' + asset._id, asset);
    };
    AmsService.prototype.deleteAsset = function (id) {
        console.log('Asset Delete');
        return this.http.get(this.url + '/asset/delete/' + id);
    };
    // Reciept CRUDs
    // postReciept(_id) {
    //   return this.http.post(this.url + '/reciept/list', + _id);
    // }
    AmsService.prototype.getReciept = function (_id) {
        return this.http.get(this.url + '/reciept/all');
    };
    AmsService.prototype.getRecieptById = function (id) {
        console.log(id, 'this is asset at service');
        return this.http.get(this.url + '/reciept/list/' + id);
    };
    AmsService.prototype.addReciept = function (reciept) {
        console.log(reciept, 'this is reciept at service');
        return this.http.post(this.url + '/reciept/new', reciept);
    };
    AmsService.prototype.updateReciept = function (reciept) {
        console.log(reciept._id, 'update at reciept service');
        return this.http.put(this.url + '/reciept/update/' + reciept._id, reciept);
    };
    AmsService.prototype.deleteReciept = function (id) {
        console.log('Reciept Delete');
        return this.http.get(this.url + '/reciept/delete/' + id);
    };
    // Customer CRUDs
    AmsService.prototype.find = function (customer) {
        console.log(customer, 'this is search value at service');
        return this.http.get(this.url + '/customer/find/' + customer);
    };
    AmsService.prototype.getCustomers = function () {
        return this.http.get(this.url + '/customer/list');
    };
    AmsService.prototype.getCustomerByName = function (name) {
        return this.http.get(this.url + '/customer/name/' + name);
    };
    AmsService.prototype.getCustomerById = function (id) {
        console.log(id, 'id at service to edit');
        return this.http.get(this.url + '/customer/' + id);
    };
    AmsService.prototype.getCustomerByCnic = function (cnic) {
        console.log(cnic, 'id at service to edit');
        return this.http.get(this.url + '/customer/cnic/' + cnic);
    };
    AmsService.prototype.getCustomerByMobile = function (mobile) {
        console.log(mobile, 'id at service to edit');
        return this.http.get(this.url + '/customer/mobile/' + mobile);
    };
    AmsService.prototype.addCustomer = function (customer) {
        return this.http.post(this.url + '/customer/new', customer);
    };
    AmsService.prototype.updateCustomer = function (customer) {
        console.log(customer._id, 'update at customer service');
        return this.http.put(this.url + '/customer/update/' + customer._id, customer);
    };
    AmsService.prototype.deleteCustomer = function (id) {
        console.log('Customer Delete');
        return this.http.get(this.url + '/customer/delete/' + id);
    };
    // Contract CRUDs
    AmsService.prototype.getContracts = function () {
        return this.http.get(this.url + '/contract/list');
    };
    AmsService.prototype.getContractByStatus = function (status) {
        return this.http.get(this.url + '/contract/status/' + status);
    };
    AmsService.prototype.getContractById = function (id) {
        console.log(id, 'id at service to edit');
        return this.http.get(this.url + '/contract/' + id);
    };
    AmsService.prototype.getContractByOwner = function (owner) {
        console.log(owner, 'id at service to edit');
        return this.http.get(this.url + '/contract/owner/' + owner);
    };
    AmsService.prototype.getContractByType = function (type) {
        console.log(type, 'id at service to edit');
        return this.http.get(this.url + '/contract/type/' + type);
    };
    AmsService.prototype.addContract = function (contract) {
        console.log(contract, 'this is contract at service');
        return this.http.post(this.url + '/contract/new', contract);
    };
    AmsService.prototype.updateContract = function (contract) {
        console.log(contract._id, 'update at asset service');
        return this.http.put(this.url + '/contract/update/' + contract._id, contract);
    };
    AmsService.prototype.deleteContract = function (id) {
        console.log('Contract Delete');
        return this.http.get(this.url + '/contract/delete/' + id);
    };
    AmsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], AmsService);
    return AmsService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_asset_listasset_listasset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/asset/listasset/listasset.component */ "./src/app/components/asset/listasset/listasset.component.ts");
/* harmony import */ var _components_contract_listcontract_listcontract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contract/listcontract/listcontract.component */ "./src/app/components/contract/listcontract/listcontract.component.ts");
/* harmony import */ var _components_customer_listcustomer_listcustomer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/customer/listcustomer/listcustomer.component */ "./src/app/components/customer/listcustomer/listcustomer.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");








var routes = [
    { path: 'asset/list', component: _components_asset_listasset_listasset_component__WEBPACK_IMPORTED_MODULE_3__["ListassetComponent"] },
    { path: 'contract/list', component: _components_contract_listcontract_listcontract_component__WEBPACK_IMPORTED_MODULE_4__["ListcontractComponent"] },
    { path: 'customer/list', component: _components_customer_listcustomer_listcustomer_component__WEBPACK_IMPORTED_MODULE_5__["ListcustomerComponent"] },
    { path: 'Dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.row {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <app-header></app-header>\n\n  <div class=\"row\">\n    <div class=\"col-2\">\n        <app-sidebar></app-sidebar>\n    </div>\n<div class=\"col-10\">\n    <router-outlet></router-outlet>\n</div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Asset Management System';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_asset_listasset_listasset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/asset/listasset/listasset.component */ "./src/app/components/asset/listasset/listasset.component.ts");
/* harmony import */ var _ams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_asset_newasset_newasset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/asset/newasset/newasset.component */ "./src/app/components/asset/newasset/newasset.component.ts");
/* harmony import */ var _components_reciept_newreciept_newreciept_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reciept/newreciept/newreciept.component */ "./src/app/components/reciept/newreciept/newreciept.component.ts");
/* harmony import */ var _components_reciept_listreciept_listreciept_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reciept/listreciept/listreciept.component */ "./src/app/components/reciept/listreciept/listreciept.component.ts");
/* harmony import */ var _components_asset_viewasset_viewasset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/asset/viewasset/viewasset.component */ "./src/app/components/asset/viewasset/viewasset.component.ts");
/* harmony import */ var _components_customer_newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/customer/newcustomer/newcustomer.component */ "./src/app/components/customer/newcustomer/newcustomer.component.ts");
/* harmony import */ var _components_customer_listcustomer_listcustomer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/customer/listcustomer/listcustomer.component */ "./src/app/components/customer/listcustomer/listcustomer.component.ts");
/* harmony import */ var _components_customer_viewcustomer_viewcustomer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/customer/viewcustomer/viewcustomer.component */ "./src/app/components/customer/viewcustomer/viewcustomer.component.ts");
/* harmony import */ var _components_contract_newcontract_newcontract_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/contract/newcontract/newcontract.component */ "./src/app/components/contract/newcontract/newcontract.component.ts");
/* harmony import */ var _components_contract_listcontract_listcontract_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/contract/listcontract/listcontract.component */ "./src/app/components/contract/listcontract/listcontract.component.ts");
/* harmony import */ var _components_contract_viewcontract_viewcontract_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/contract/viewcontract/viewcontract.component */ "./src/app/components/contract/viewcontract/viewcontract.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _Dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Dashboard/sidebar/sidebar.component */ "./src/app/Dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _Dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Dashboard/header/header.component */ "./src/app/Dashboard/header/header.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_asset_listasset_listasset_component__WEBPACK_IMPORTED_MODULE_5__["ListassetComponent"],
                _components_asset_newasset_newasset_component__WEBPACK_IMPORTED_MODULE_11__["NewassetComponent"],
                _components_reciept_newreciept_newreciept_component__WEBPACK_IMPORTED_MODULE_12__["NewrecieptComponent"],
                _components_reciept_listreciept_listreciept_component__WEBPACK_IMPORTED_MODULE_13__["ListrecieptComponent"],
                _components_asset_viewasset_viewasset_component__WEBPACK_IMPORTED_MODULE_14__["ViewassetComponent"],
                _components_customer_newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_15__["NewcustomerComponent"],
                _components_customer_listcustomer_listcustomer_component__WEBPACK_IMPORTED_MODULE_16__["ListcustomerComponent"],
                _components_customer_viewcustomer_viewcustomer_component__WEBPACK_IMPORTED_MODULE_17__["ViewcustomerComponent"],
                _components_contract_newcontract_newcontract_component__WEBPACK_IMPORTED_MODULE_18__["NewcontractComponent"],
                _components_contract_listcontract_listcontract_component__WEBPACK_IMPORTED_MODULE_19__["ListcontractComponent"],
                _components_contract_viewcontract_viewcontract_component__WEBPACK_IMPORTED_MODULE_20__["ViewcontractComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"],
                _Dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["SidebarComponent"],
                _Dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                // tslint:disable-next-line: deprecation
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            entryComponents: [
                _components_asset_newasset_newasset_component__WEBPACK_IMPORTED_MODULE_11__["NewassetComponent"],
                _components_reciept_newreciept_newreciept_component__WEBPACK_IMPORTED_MODULE_12__["NewrecieptComponent"],
                _components_reciept_listreciept_listreciept_component__WEBPACK_IMPORTED_MODULE_13__["ListrecieptComponent"],
                _components_asset_viewasset_viewasset_component__WEBPACK_IMPORTED_MODULE_14__["ViewassetComponent"],
                _components_customer_newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_15__["NewcustomerComponent"],
                _components_customer_listcustomer_listcustomer_component__WEBPACK_IMPORTED_MODULE_16__["ListcustomerComponent"],
                _components_customer_viewcustomer_viewcustomer_component__WEBPACK_IMPORTED_MODULE_17__["ViewcustomerComponent"],
                _components_contract_newcontract_newcontract_component__WEBPACK_IMPORTED_MODULE_18__["NewcontractComponent"],
                _components_contract_listcontract_listcontract_component__WEBPACK_IMPORTED_MODULE_19__["ListcontractComponent"],
                _components_contract_viewcontract_viewcontract_component__WEBPACK_IMPORTED_MODULE_20__["ViewcontractComponent"]
            ],
            providers: [_ams_service__WEBPACK_IMPORTED_MODULE_6__["AmsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/asset.model.ts":
/*!********************************!*\
  !*** ./src/app/asset.model.ts ***!
  \********************************/
/*! exports provided: Asset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asset", function() { return Asset; });
var Asset = /** @class */ (function () {
    function Asset() {
        this.assetDetail = {
            vehicle: {
                contractId: '',
                reg: '',
                make: '',
                model: '',
                year: '',
                colour: '',
                status: '',
                meterOut: '',
                meterIn: '',
                driveZone: '',
                destination: '',
                actualPrice: ''
            },
            house: {
                contractId: '',
                address: {
                    floor: '',
                    number: '',
                    street: '',
                    sector: '',
                    city: '',
                    province: '',
                    zipcode: ''
                },
                area: '',
                status: '',
                actualPrice: ''
            },
            item: {
                contractId: '',
                title: '',
                make: '',
                model: '',
                year: '',
                version: '',
                discription: '',
                actualPrice: ''
            }
        };
        this.owner = {
            name: '',
            fatherName: '',
            cnic: '',
            mobile1: '',
            mobile2: '',
            address: {
                floor: '',
                number: '',
                street: '',
                sector: '',
                city: '',
                province: '',
                zipcode: ''
            }
        };
    }
    return Asset;
}());



/***/ }),

/***/ "./src/app/components/asset/listasset/listasset.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/asset/listasset/listasset.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n  height: 40px;\r\n  width: 40px;\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgb(0, 157, 248);\r\n}\r\n\r\n.card {\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 5px;\r\n  margin: 10px;\r\n}\r\n\r\n.card-header {\r\n  background-color: rgb(0, 157, 248);\r\n  color: white;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\n.card-footer {\r\n  background-color: rgb(255, 255, 255);\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: white;\r\n  background-color: rgb(0, 157, 248);\r\n  border-bottom: 1px solid rgb(168, 168, 168);\r\n  padding: 10px;\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n  color: rgb(150, 150, 150);\r\n  /* border-bottom: 1px solid rgb(168, 168, 168); */\r\n}\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  outline: 0;\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\n.search {\r\n  outline: 0;\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\nselect[type=\"text\"]:hover {\r\n  background-color: #e2e2eb;\r\n  color: #3d405c;\r\n}\r\n\r\nselect[type=\"text\"] {\r\n  width: 100%;\r\n  outline: 0;\r\n  color: rgb(150, 150, 150);\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC9saXN0YXNzZXQvbGlzdGFzc2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsYUFBYTtDQUNkOztBQUNEO0VBQ0UsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1DQUFtQztFQUNuQyw0Q0FBNEM7RUFDNUMsY0FBYztDQUNmOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixrREFBa0Q7Q0FDbkQ7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGlDQUFpQztDQUNsQzs7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQvbGlzdGFzc2V0L2xpc3Rhc3NldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jaXJjbGUge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTcsIDI0OCk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTcsIDI0OCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQtZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxudGgge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU3LCAyNDgpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTY4LCAxNjgsIDE2OCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTY4LCAxNjgsIDE2OCk7ICovXHJcbn1cclxuXHJcbi5idG4tc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcclxuICBib3JkZXItY29sb3I6IHJnYigxNzYsIDE3NiwgMTc5KTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XHJcbn1cclxuXHJcbnNlbGVjdFt0eXBlPVwidGV4dFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlYjtcclxuICBjb2xvcjogIzNkNDA1YztcclxufVxyXG5cclxuc2VsZWN0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/asset/listasset/listasset.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/asset/listasset/listasset.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow rounded\">\n  <div class=\"card-header shadow rounded\">\n    <h3>Asset List</h3>\n  </div>\n  <div class=\"card-body\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"title\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By Title\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"search(title)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"owner\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By Owner\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByOwner(owner)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"type\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By type\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByType(type)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n    <div class=\"col float-right newbox\">\n      <button class=\"btn btn-primary btn-circle\" (click)=\"open()\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n    </div>\n  </div>\n</div>\n<div class=\"card shadow rounded\">\n  <div class=\"card-body\">\n    <table>\n      <thead>\n        <th>Title &nbsp; <i class=\"fas fa-sort\"></i></th>\n        <th>Type&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Owner Name&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Owner Contact&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Owner CNIC&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Actions</th>\n        <!-- <th>Owner Address</th> -->\n      </thead>\n\n      <tbody\n        *ngFor=\"\n          let asset of (assetlist\n            | slice: (page - 1) * pageSize:(page - 1) * pageSize + pageSize)\n        \"\n      >\n        <td>{{ asset?.title }}</td>\n        <td>{{ asset?.assetType }}</td>\n        <td>{{ asset?.owner?.name }}</td>\n        <td>{{ asset?.owner?.mobile1 }}</td>\n        <td>{{ asset?.owner?.cnic }}</td>\n        <td>\n          &nbsp;<button\n            class=\"btn btn-sm btn-outline-warning\"\n            (click)=\"edit(asset._id)\"\n          >\n            <i class=\"far fa-edit\"></i></button\n          >&nbsp; &nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-danger\"\n            (click)=\"deleteAsset(asset._id)\"\n          >\n            <i class=\"far fa-trash-alt\"></i></button\n          >&nbsp; &nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-success\"\n            (click)=\"viewAsset(asset._id)\"\n          >\n            <i class=\"far fa-eye\"></i>\n          </button>\n        </td>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card-footer\">\n <div class=\"row\">\n    <div class=\"col-2\">\n        <label for=\"pageSize\">Show Rows</label>\n        <select\n          [(ngModel)]=\"pageSize\"\n          type=\"text\"\n          name=\"pageSize\"\n          id=\"pageSize\"\n        >\n          <option value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"20\">20</option>\n        </select>\n      </div>\n\n   <div class=\"col-10\">\n    <ngb-pagination\n      class=\"d-flex justify-content-end\"\n      [(page)]=\"page\"\n      [pageSize]=\"pageSize\"\n      [collectionSize]=\"assetlist.length\"\n      [maxSize]=\"5\"\n    >\n    </ngb-pagination>\n   </div>\n </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/asset/listasset/listasset.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/asset/listasset/listasset.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListassetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListassetComponent", function() { return ListassetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _newasset_newasset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../newasset/newasset.component */ "./src/app/components/asset/newasset/newasset.component.ts");
/* harmony import */ var _viewasset_viewasset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../viewasset/viewasset.component */ "./src/app/components/asset/viewasset/viewasset.component.ts");







var ListassetComponent = /** @class */ (function () {
    function ListassetComponent(amsService, router, modalService) {
        this.amsService = amsService;
        this.router = router;
        this.modalService = modalService;
        this.page = 1;
        this.assetlist = [];
        this.isCollapsed = true;
        // this.asset = assetData.asset;
    }
    ListassetComponent.prototype.ngOnInit = function () {
        this.fetchAssets();
    };
    ListassetComponent.prototype.fetchAssets = function () {
        var _this = this;
        this.amsService
            .getAssets()
            .subscribe(function (data) {
            _this.assetlist = data;
            console.log('all asset found', data);
        });
    };
    ListassetComponent.prototype.edit = function (_id) {
        this.amsService.Id = _id;
        this.amsService.editMode = true;
        console.log(_id, 'this is asset id');
        var modalRef = this.modalService.open(_newasset_newasset_component__WEBPACK_IMPORTED_MODULE_5__["NewassetComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.name = 'Update Asset';
    };
    ListassetComponent.prototype.search = function (title) {
        var _this = this;
        console.log(title, 'this is title at search');
        this.amsService
            .getAsset(title)
            .subscribe(function (res) {
            _this.assetlist = res.data;
            console.log('all asset found bt Title', _this.assetlist);
        });
    };
    ListassetComponent.prototype.searchByOwner = function (owner) {
        var _this = this;
        console.log(owner, 'this is owner at search');
        this.amsService
            .getAssetByOwner(owner)
            .subscribe(function (res) {
            _this.assetlist = res.data;
            console.log('all asset found by Owner', _this.assetlist);
        });
    };
    ListassetComponent.prototype.searchByType = function (type) {
        var _this = this;
        console.log(type, 'this is owner at search');
        this.amsService
            .getAssetByType(type)
            .subscribe(function (res) {
            _this.assetlist = res.data;
            console.log('all asset found by Owner', _this.assetlist);
        });
    };
    ListassetComponent.prototype.deleteAsset = function (_id) {
        var _this = this;
        this.amsService.deleteAsset(_id).subscribe(function () {
            _this.fetchAssets();
            console.log('delete click');
        });
    };
    ListassetComponent.prototype.open = function () {
        this.amsService.editMode = false;
        this.amsService.Id = null;
        var modalRef = this.modalService.open(_newasset_newasset_component__WEBPACK_IMPORTED_MODULE_5__["NewassetComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.name = 'New Asset';
    };
    ListassetComponent.prototype.viewAsset = function (_id) {
        console.log(_id, 'this is asset id');
        this.amsService.Id = _id;
        var modalRef = this.modalService.open(_viewasset_viewasset_component__WEBPACK_IMPORTED_MODULE_6__["ViewassetComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.asset = _id;
        console.log('view asset open');
    };
    ListassetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listasset',
            template: __webpack_require__(/*! ./listasset.component.html */ "./src/app/components/asset/listasset/listasset.component.html"),
            styles: [__webpack_require__(/*! ./listasset.component.css */ "./src/app/components/asset/listasset/listasset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ListassetComponent);
    return ListassetComponent;
}());



/***/ }),

/***/ "./src/app/components/asset/newasset/newasset.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/asset/newasset/newasset.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"text\"]:hover {\r\n  background-color: #e2e2eb;\r\n  color: #3d405c;\r\n}\r\n\r\nselect[type=\"text\"]:hover {\r\n  background-color: #e2e2eb;\r\n  color: #3d405c;\r\n}\r\n\r\nselect[type=\"text\"] {\r\n  width: 100%;\r\n  outline: 0;\r\n  color: rgb(150, 150, 150);\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  width: 100%;\r\n  outline: 0;\r\n  color: rgb(150, 150, 150);\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC9uZXdhc3NldC9uZXdhc3NldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsaUNBQWlDO0NBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hc3NldC9uZXdhc3NldC9uZXdhc3NldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cInRleHRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZWI7XHJcbiAgY29sb3I6ICMzZDQwNWM7XHJcbn1cclxuXHJcbnNlbGVjdFt0eXBlPVwidGV4dFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlYjtcclxuICBjb2xvcjogIzNkNDA1YztcclxufVxyXG5cclxuc2VsZWN0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogMDtcclxuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcclxuICBib3JkZXItY29sb3I6IHJnYigxNzYsIDE3NiwgMTc5KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/asset/newasset/newasset.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/asset/newasset/newasset.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"container\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"title\">Title</label>\n        <input [(ngModel)]=\"asset.title\" type=\"text\" name=\"title\" id=\"title\" />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"assetType\">Asset Type</label>\n        <select\n          [(ngModel)]=\"asset.assetType\"\n          type=\"text\"\n          name=\"assetType\"\n          id=\"assetType\"\n        >\n          <option value=\"vehicle\">Vehicle</option>\n          <option value=\"house\">House</option>\n          <option value=\"item\">Item</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"this.asset.assetType == 'vehicle'\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"reg\">Registration</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.vehicle.reg\"\n          type=\"text\"\n          name=\"reg\"\n          id=\"reg\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"make\">Make</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.vehicle.make\"\n          type=\"text\"\n          name=\"make\"\n          id=\"make\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"model\">Model</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.vehicle.model\"\n          type=\"text\"\n          name=\"model\"\n          id=\"model\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"year\">Year</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.vehicle.year\"\n          type=\"text\"\n          name=\"year\"\n          id=\"year\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"colour\">Colour</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.vehicle.colour\"\n          type=\"text\"\n          name=\"colour\"\n          id=\"colour\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"status\">Status</label>\n        <select\n          [(ngModel)]=\"asset.assetDetail.vehicle.status\"\n          type=\"text\"\n          name=\"status\"\n          id=\"status\"\n        >\n          <option value=\"available\">Available</option>\n          <option value=\"on-trip\">On-Trip</option>\n          <option value=\"workshop\">Workshop</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"this.asset.assetType == 'house'\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"floor\">Floor</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.address.floor\"\n          type=\"text\"\n          name=\"floor\"\n          id=\"floor\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"number\">House Number</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.address.number\"\n          type=\"text\"\n          name=\"number\"\n          id=\"number\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"street\">Street</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.address.street\"\n          type=\"text\"\n          name=\"street\"\n          id=\"street\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"sector\">Sector</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.address.sector\"\n          type=\"text\"\n          name=\"sector\"\n          id=\"sector\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"city\">City</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.address.city\"\n          type=\"text\"\n          name=\"city\"\n          id=\"city\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"province\">Province</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.address.province\"\n          type=\"text\"\n          name=\"province\"\n          id=\"province\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"zipcode\">Zip Code</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.address.zipcode\"\n          type=\"text\"\n          name=\"zipcode\"\n          id=\"zipcode\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"area\">Size</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.house.area\"\n          type=\"text\"\n          name=\"area\"\n          id=\"area\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"status\">Status</label>\n        <select\n          [(ngModel)]=\"asset.assetDetail.house.status\"\n          type=\"text\"\n          name=\"status\"\n          id=\"status\"\n        >\n          <option value=\"available\">Available</option>\n          <option value=\"rented\">Rented</option>\n          <option value=\"sold\">Sold</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"this.asset.assetType == 'item'\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"make\">Make</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.item.make\"\n          type=\"text\"\n          name=\"make\"\n          id=\"make\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"model\">Model</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.item.model\"\n          type=\"text\"\n          name=\"model\"\n          id=\"model\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"year\">Year</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.item.year\"\n          type=\"text\"\n          name=\"year\"\n          id=\"year\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"discription\">Discription</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.item.discription\"\n          type=\"text\"\n          name=\"discription\"\n          id=\"discription\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"actualPrice\">Actual Price</label>\n        <input\n          [(ngModel)]=\"asset.assetDetail.item.actualPrice\"\n          type=\"text\"\n          name=\"actualPrice\"\n          id=\"actualPrice\"\n        />\n      </div>\n    </div>\n\n    <h3>Owner</h3>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"name\">Name</label>\n        <input\n          [(ngModel)]=\"asset.owner.name\"\n          type=\"text\"\n          name=\"name\"\n          id=\"name\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"fatherName\">Father Name</label>\n        <input\n          [(ngModel)]=\"asset.owner.fatherName\"\n          type=\"text\"\n          name=\"fatherName\"\n          id=\"fatherName\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"cnic\">CNIC</label>\n        <input\n          [(ngModel)]=\"asset.owner.cnic\"\n          type=\"text\"\n          name=\"cnic\"\n          id=\"cnic\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"mobile1\">Mobile 1</label>\n        <input\n          [(ngModel)]=\"asset.owner.mobile1\"\n          type=\"text\"\n          name=\"mobile1\"\n          id=\"mobile1\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"mobile2\">Mobile2</label>\n        <input\n          [(ngModel)]=\"asset.owner.mobile2\"\n          type=\"text\"\n          name=\"mobile2\"\n          id=\"mobile2\"\n        />\n      </div>\n    </div>\n    <h6>Address</h6>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"floor\">Floor</label>\n        <input\n          [(ngModel)]=\"asset.owner.address.floor\"\n          type=\"text\"\n          name=\"floor\"\n          id=\"floor\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"number\">House Number</label>\n        <input\n          [(ngModel)]=\"asset.owner.address.number\"\n          type=\"text\"\n          name=\"number\"\n          id=\"number\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"street\">Street</label>\n        <input\n          [(ngModel)]=\"asset.owner.address.street\"\n          type=\"text\"\n          name=\"street\"\n          id=\"street\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"sector\">Sector</label>\n        <input\n          [(ngModel)]=\"asset.owner.address.sector\"\n          type=\"text\"\n          name=\"sector\"\n          id=\"sector\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"city\">City</label>\n        <input\n          [(ngModel)]=\"asset.owner.address.city\"\n          type=\"text\"\n          name=\"city\"\n          id=\"city\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"province\">Province</label>\n        <input\n          [(ngModel)]=\"asset.owner.address.province\"\n          type=\"text\"\n          name=\"province\"\n          id=\"province\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"zipcode\">Zip Code</label>\n        <input\n          [(ngModel)]=\"asset.owner.address.zipcode\"\n          type=\"text\"\n          name=\"zipcode\"\n          id=\"zipcode\"\n        />\n      </div>\n    </div>\n  </div>\n</form>\n\n<div class=\"modal-footer\">\n  <button\n    type=\"button\"\n    class=\"btn btn-outline-success\"\n    (click)=\"addAsset(asset)\"\n  >\n    Save\n  </button>\n  <button type=\"button\" (click)=\"close()\" class=\"btn btn-outline-danger\">\n    Exit\n  </button>\n</div>\n<!-- <pre>{{closeResult}}</pre> -->\n"

/***/ }),

/***/ "./src/app/components/asset/newasset/newasset.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/asset/newasset/newasset.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewassetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewassetComponent", function() { return NewassetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_asset_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/asset.model */ "./src/app/asset.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var NewassetComponent = /** @class */ (function () {
    function NewassetComponent(amsService, fb, router, route, modalService, activeModal) {
        var _this = this;
        this.amsService = amsService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.activeIdString = '';
        this.asset = new src_app_asset_model__WEBPACK_IMPORTED_MODULE_5__["Asset"]();
        this.route.paramMap.subscribe(function (parameterMap) {
            var id = parameterMap.get('id');
            _this.amsService.getAssetById(id);
        });
    }
    NewassetComponent.prototype.ngOnInit = function () {
        if (this.amsService.editMode) {
            this.fetchAssetById();
        }
    };
    NewassetComponent.prototype.fetchAssetById = function () {
        var _this = this;
        this.amsService
            .getAssetById(this.amsService.Id)
            .subscribe(function (res) {
            _this.asset = res.data;
            console.log(_this.amsService.Id, 'asset at view');
        });
    };
    NewassetComponent.prototype.addAsset = function (asset) {
        var _this = this;
        console.log(asset, 'this is new asset'),
            this.amsService.addAsset(asset).subscribe(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Assest Inserted Successfully');
                _this.close();
            });
    };
    NewassetComponent.prototype.close = function () {
        this.activeModal.close();
    };
    NewassetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newasset',
            template: __webpack_require__(/*! ./newasset.component.html */ "./src/app/components/asset/newasset/newasset.component.html"),
            styles: [__webpack_require__(/*! ./newasset.component.css */ "./src/app/components/asset/newasset/newasset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]])
    ], NewassetComponent);
    return NewassetComponent;
}());



/***/ }),

/***/ "./src/app/components/asset/viewasset/viewasset.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/asset/viewasset/viewasset.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  margin-top: 11px;\n  text-align: center;\n}\n.heading {\n  border: 1px solid red;\n}\nh5 {\n  background-color: #fafafa;\n}\n.header {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  list-style: none;\n\n  font-size: 14px;\n}\ni {\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hc3NldC92aWV3YXNzZXQvdmlld2Fzc2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCOztFQUVqQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNzZXQvdmlld2Fzc2V0L3ZpZXdhc3NldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGluZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cbmg1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/asset/viewasset/viewasset.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/asset/viewasset/viewasset.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>{{ asset?.title }}</h2>\n  <div class=\"header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div *ngIf=\"this.asset.assetType == 'vehicle'\">\n    <h5>Vehicle Details</h5>\n\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"reg\">Registration</label> &nbsp;\n        {{ asset?.assetDetail?.vehicle?.reg }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"make\">Make</label> &nbsp;\n        {{ asset?.assetDetail?.vehicle?.make }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"model\">Model</label> &nbsp;\n        {{ asset?.assetDetail?.vehicle.model }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"year\">Year</label> &nbsp;\n        {{ asset?.assetDetail?.vehicle?.year }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"colour\">Colour</label> &nbsp;\n        {{ asset?.assetDetail?.vehicle?.colour }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"status\">Status</label> &nbsp;\n        {{ asset?.assetDetail?.vehicle?.status }}\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"this.asset.assetType == 'house'\">\n    <h5>House Details</h5>\n\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"floor\">Floor</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.floor }}\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"floor\">House Number</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.number }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"street\">Street Number</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.street }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"sector\">Sector</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.sector }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"city\">City</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.city }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"province\">Province</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.province }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"zipcode\">Zip Code</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.zipcode }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"area\">Area / Size</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.area }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"area\">Area / Size</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.area }}\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"actualPrice\">Actual Price</label> &nbsp;\n        {{ asset?.assetDetail?.house?.address?.actualPrice }}\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"this.asset.assetType == 'item'\">\n    <h5>Item Details</h5>\n\n    <div class=\"col-6 col-md-4\">\n      <label for=\"title\">Title</label> &nbsp;\n      {{ asset?.assetDetail?.item?.title }}\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <label for=\"make\">Make</label> &nbsp;\n      {{ asset?.assetDetail?.item?.make }}\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <label for=\"model\">Model</label> &nbsp;\n      {{ asset?.assetDetail?.item?.model }}\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <label for=\"year\">Year</label> &nbsp;\n      {{ asset?.assetDetail?.item?.year }}\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <label for=\"discription\">Discription</label> &nbsp;\n      {{ asset?.assetDetail?.item?.discription }}\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <label for=\"discription\">Discription</label> &nbsp;\n      {{ asset?.assetDetail?.item?.discription }}\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <label for=\"actualPrice\">Actual Price</label> &nbsp;\n      {{ asset?.assetDetail?.item?.actualPrice }}\n    </div>\n  </div>\n</div>\n<div class=\"card\">\n  <h5>Owner Details</h5>\n  <div class=\"row\">\n    <div class=\"col\">\n      <strong> {{ asset?.owner?.name }} </strong> &nbsp; S/O &nbsp;\n      <strong> {{ asset?.owner?.fatherName }}</strong>\n    </div>\n    <div class=\"col\">\n      <label for=\"cnic\">CNIC</label> &nbsp;\n      {{ asset?.owner?.cnic }}\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <label for=\"mobile1\">Contact</label> &nbsp; {{ asset?.owner?.mobile1 }} /\n      {{ asset?.owner?.mobile2 }}\n    </div>\n  </div>\n  <div class=\"card\">\n    <label for=\"Address\"><strong>Address</strong></label> &nbsp; floor #: &nbsp;\n    {{ asset?.owner?.address?.floor }} &nbsp; , House #: &nbsp;\n    {{ asset?.owner?.address?.number }} &nbsp; , Street #: &nbsp;\n    {{ asset?.owner?.address?.street }} &nbsp; , Sector #: &nbsp;\n    {{ asset?.owner?.address?.sector }} &nbsp; , City #: &nbsp;\n    {{ asset?.owner?.address?.city }} &nbsp; , Province #: &nbsp;\n    {{ asset?.owner?.address?.province }} &nbsp; , Zip-Code #: &nbsp;\n    {{ asset?.owner?.address?.zipcode }} &nbsp; ,\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/asset/viewasset/viewasset.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/asset/viewasset/viewasset.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewassetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewassetComponent", function() { return ViewassetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var ViewassetComponent = /** @class */ (function () {
    //  vehicle: Boolean = true;
    //  house: Boolean = true;
    //  item: Boolean = true;
    function ViewassetComponent(activeModal, amsService) {
        this.activeModal = activeModal;
        this.amsService = amsService;
    }
    ViewassetComponent.prototype.ngOnInit = function () {
        this.fetchAssetById();
    };
    ViewassetComponent.prototype.fetchAssetById = function () {
        var _this = this;
        this.amsService.getAssetById(this.amsService.Id).subscribe(function (res) {
            _this.asset = res.data;
            console.log(_this.amsService.Id, _this.asset, 'asset at view');
        });
    };
    ViewassetComponent.prototype.close = function () {
        this.activeModal.close();
    };
    ViewassetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewasset',
            template: __webpack_require__(/*! ./viewasset.component.html */ "./src/app/components/asset/viewasset/viewasset.component.html"),
            styles: [__webpack_require__(/*! ./viewasset.component.css */ "./src/app/components/asset/viewasset/viewasset.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"]])
    ], ViewassetComponent);
    return ViewassetComponent;
}());



/***/ }),

/***/ "./src/app/components/contract/listcontract/listcontract.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/contract/listcontract/listcontract.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n  height: 40px;\r\n  width: 40px;\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgb(0, 157, 248);\r\n}\r\n\r\n.card {\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 10px;\r\n  margin: 8px;\r\n  width: 100%;\r\n}\r\n\r\n.card-header {\r\n  background-color: rgb(0, 157, 248);\r\n  color: white;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\n.card-footer {\r\n  background-color: rgb(255, 255, 255);\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: white;\r\n  background-color: rgb(0, 157, 248);\r\n  border-bottom: 1px solid rgb(168, 168, 168);\r\n  padding: 10px;\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n  color: rgb(150, 150, 150);\r\n  /* border-bottom: 1px solid rgb(168, 168, 168); */\r\n}\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  outline: 0;\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\n.search {\r\n  outline: 0;\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdC9saXN0Y29udHJhY3QvbGlzdGNvbnRyYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsNENBQTRDO0VBQzVDLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0RBQWtEO0NBQ25EOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0L2xpc3Rjb250cmFjdC9saXN0Y29udHJhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY2lyY2xlIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU3LCAyNDgpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU3LCAyNDgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1NywgMjQ4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OCwgMTY4LCAxNjgpOyAqL1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/contract/listcontract/listcontract.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/contract/listcontract/listcontract.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow bg-white rounded\">\n  <div class=\"card-header shadow rounded\">\n    <h3>Contract List</h3>\n  </div>\n  <div class=\"row card-body\">\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"status\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By Status\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByStatus(status)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"owner\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By abc\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByOwner(owner)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"type\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By xyz\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByType(type)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n\n    <div class=\"col float-right newbox\">\n      <button class=\"btn btn-primary btn-circle\" (click)=\"open()\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"card shadow bg-white rounded\">\n  <div class=\"card-body\">\n    <table>\n      <thead>\n        <th>Status &nbsp; <i class=\"fas fa-sort\"></i></th>\n        <th>Duration&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Increament&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Contract Date&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Price Quoted&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Customer Id&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Actions</th>\n        <!-- <th>Owner Address</th> -->\n      </thead>\n      <tbody\n        *ngFor=\"\n          let contract of (contractlist\n            | slice: (page - 1) * pageSize:(page - 1) * pageSize + pageSize)\n        \"\n      >\n        <td>{{ contract?.status }}</td>\n        <td>{{ contract?.duration }}</td>\n        <td>{{ contract?.contractDate }}</td>\n        <td>{{ contract?.expiryDate }}</td>\n        <td>{{ contract?.priceQuoted }}</td>\n        <td>{{ contract?.customer }}</td>\n        <td>\n          <button\n            class=\"btn btn-sm btn-outline-warning\"\n            (click)=\"edit(contract._id)\"\n          >\n            <i class=\"far fa-edit\"></i></button\n          >&nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-danger\"\n            (click)=\"deleteContract(contract._id)\"\n          >\n            <i class=\"far fa-trash-alt\"></i></button\n          >&nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-primary\"\n            (click)=\"viewContract(contract._id)\"\n          >\n            <i class=\"fa fa-eye\"></i></button\n          >&nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-success\"\n            (click)=\"addReciept(contract._id)\"\n          >\n            <i class=\"fas fa-file-invoice-dollar\"></i></button\n          >&nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-success\"\n            (click)=\"listReciept(contract._id)\"\n          >\n            <i class=\"fas fa-list\"></i>\n          </button>\n        </td>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card-footer\">\n    <div class=\"row\">\n       <div class=\"col-2\">\n           <label for=\"pageSize\">Show Rows</label>\n           <select\n             [(ngModel)]=\"pageSize\"\n             type=\"text\"\n             name=\"pageSize\"\n             id=\"pageSize\"\n           >\n             <option value=\"5\">5</option>\n             <option value=\"10\">10</option>\n             <option value=\"20\">20</option>\n           </select>\n         </div>\n\n      <div class=\"col-10\">\n       <ngb-pagination\n         class=\"d-flex justify-content-end\"\n         [(page)]=\"page\"\n         [pageSize]=\"pageSize\"\n         [collectionSize]=\"contractlist.length\"\n         [maxSize]=\"5\"\n       >\n       </ngb-pagination>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/contract/listcontract/listcontract.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/contract/listcontract/listcontract.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListcontractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcontractComponent", function() { return ListcontractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _newcontract_newcontract_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../newcontract/newcontract.component */ "./src/app/components/contract/newcontract/newcontract.component.ts");
/* harmony import */ var _viewcontract_viewcontract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../viewcontract/viewcontract.component */ "./src/app/components/contract/viewcontract/viewcontract.component.ts");
/* harmony import */ var _reciept_newreciept_newreciept_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reciept/newreciept/newreciept.component */ "./src/app/components/reciept/newreciept/newreciept.component.ts");
/* harmony import */ var _reciept_listreciept_listreciept_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reciept/listreciept/listreciept.component */ "./src/app/components/reciept/listreciept/listreciept.component.ts");









var ListcontractComponent = /** @class */ (function () {
    function ListcontractComponent(amsService, router, modalService) {
        this.amsService = amsService;
        this.router = router;
        this.modalService = modalService;
        this.page = 1;
        this.contractlist = [];
        this.isCollapsed = true;
    }
    ListcontractComponent.prototype.ngOnInit = function () {
        this.fetchContracts();
    };
    ListcontractComponent.prototype.fetchContracts = function () {
        var _this = this;
        this.amsService.getContracts().subscribe(function (data) {
            _this.contractlist = data;
            var total = _this.fetchCustomer(_this.contractlist);
            console.log('all contract found', data);
        });
    };
    ListcontractComponent.prototype.fetchCustomer = function (data) {
        var _this = this;
        data.forEach(function (element) {
            _this.amsService.find(element._id).subscribe(function (cus) {
                _this.customer = cus;
                console.log('all customer found', data);
            });
        });
    };
    ListcontractComponent.prototype.open = function () {
        this.amsService.editMode = false;
        var modalRef = this.modalService.open(_newcontract_newcontract_component__WEBPACK_IMPORTED_MODULE_5__["NewcontractComponent"], {
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.name = 'New Contract';
    };
    ListcontractComponent.prototype.viewContract = function (_id) {
        console.log(_id, 'this is contract id');
        this.amsService.Id = _id;
        var modalRef = this.modalService.open(_viewcontract_viewcontract_component__WEBPACK_IMPORTED_MODULE_6__["ViewcontractComponent"], {
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.name = 'View Contract';
        console.log('view contract open');
    };
    ListcontractComponent.prototype.edit = function (_id) {
        this.amsService.Id = _id;
        this.amsService.editMode = true;
        console.log(this.amsService.Id, 'got this contract');
        var modalRef = this.modalService.open(_newcontract_newcontract_component__WEBPACK_IMPORTED_MODULE_5__["NewcontractComponent"], {
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.user = 'Update Asset';
    };
    ListcontractComponent.prototype.searchByStatus = function (status) {
        var _this = this;
        console.log(status, 'this is title at search');
        this.amsService.getContractByStatus(status).subscribe(function (res) {
            _this.contractlist = res.data;
            console.log('all contract found by status', _this.contractlist);
        });
    };
    ListcontractComponent.prototype.searchByOwner = function (owner) {
        var _this = this;
        console.log(owner, 'this is owner at search');
        this.amsService.getAssetByOwner(owner).subscribe(function (res) {
            _this.contractlist = res.data;
            console.log('all asset found by Owner', _this.contractlist);
        });
    };
    ListcontractComponent.prototype.searchByType = function (type) {
        var _this = this;
        console.log(type, 'this is owner at search');
        this.amsService.getAssetByType(type).subscribe(function (res) {
            _this.contractlist = res.data;
            console.log('all asset found by Owner', _this.contractlist);
        });
    };
    ListcontractComponent.prototype.deleteContract = function (_id) {
        var _this = this;
        this.amsService.deleteContract(_id).subscribe(function () {
            _this.fetchContracts();
            console.log('delete click');
        });
    };
    ListcontractComponent.prototype.addReciept = function (_id) {
        console.log(_id, 'this is asset id');
        this.amsService.Id = _id;
        var modalRef = this.modalService.open(_reciept_newreciept_newreciept_component__WEBPACK_IMPORTED_MODULE_7__["NewrecieptComponent"], {
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.name = 'New Reciept';
    };
    ListcontractComponent.prototype.listReciept = function (_id) {
        this.amsService.Id = _id;
        console.log(this.amsService.Id, 'this asset Called');
        var modalRef = this.modalService.open(_reciept_listreciept_listreciept_component__WEBPACK_IMPORTED_MODULE_8__["ListrecieptComponent"], {
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.name = 'List Reciept';
    };
    ListcontractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listcontract',
            template: __webpack_require__(/*! ./listcontract.component.html */ "./src/app/components/contract/listcontract/listcontract.component.html"),
            styles: [__webpack_require__(/*! ./listcontract.component.css */ "./src/app/components/contract/listcontract/listcontract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ListcontractComponent);
    return ListcontractComponent;
}());



/***/ }),

/***/ "./src/app/components/contract/newcontract/newcontract.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/contract/newcontract/newcontract.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align{\nmargin-top: 20px;\npadding-left: 15px;\n}\n.aligncontract{\npadding: 10px;\nmargin-left: -9px;\n}\n.btn{\n    float: right;\n    padding-right: 12px;\n    padding-left: 12px;\n    margin: 1px;\n    margin: right;\n    padding-bottom: 5px;\n    padding-left: 6px;\n    padding-right: 6px;\n    margin-bottom: 10px;\n    margin-right: 7px;\n}\ninput[type=text]:hover {\n  background-color: #e2e2eb;\n  color: #3d405c;\n}\ninput[type=text] {\n    width: 100%;\n    outline: 0;\n    color: rgb(150, 150, 150);\n    border-width: 0 0 1px;\n    border-color: rgb(176, 176, 179);\n  }\ninput[type=date]:hover {\n  background-color: #e2e2eb;\n  color: #3d405c;\n}\ninput[type=date] {\n    width: 100%;\n    outline: 0;\n    color: rgb(150, 150, 150);\n    border-width: 0 0 1px;\n    border-color: rgb(176, 176, 179);\n  }\nselect[type=text]:hover {\n    background-color: #e2e2eb;\n    color: #3d405c;\n  }\nselect[type=text] {\n    width: 100%;\n    outline: 0;\n    color: rgb(150, 150, 150);\n    border-width: 0 0 1px;\n    border-color: rgb(176, 176, 179);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdC9uZXdjb250cmFjdC9uZXdjb250cmFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1CQUFtQjtDQUNsQjtBQUNEO0FBQ0EsY0FBYztBQUNkLGtCQUFrQjtDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0NBQ3JCO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztHQUNsQztBQUNIO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEI7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixpQ0FBaUM7R0FDbEM7QUFFRDtJQUNFLDBCQUEwQjtJQUMxQixlQUFlO0dBQ2hCO0FBRUQ7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsaUNBQWlDO0dBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdC9uZXdjb250cmFjdC9uZXdjb250cmFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWdue1xubWFyZ2luLXRvcDogMjBweDtcbnBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5hbGlnbmNvbnRyYWN0e1xucGFkZGluZzogMTBweDtcbm1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuLmJ0bntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgbWFyZ2luOiAxcHg7XG4gICAgbWFyZ2luOiByaWdodDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xufVxuaW5wdXRbdHlwZT10ZXh0XTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZWI7XG4gIGNvbG9yOiAjM2Q0MDVjO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xuICB9XG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlYjtcbiAgY29sb3I6ICMzZDQwNWM7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IDA7XG4gICAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XG4gIH1cblxuICBzZWxlY3RbdHlwZT10ZXh0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlYjtcbiAgICBjb2xvcjogIzNkNDA1YztcbiAgfVxuXG4gIHNlbGVjdFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/contract/newcontract/newcontract.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/contract/newcontract/newcontract.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"container\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <h3 class=\"aligncontract\">Contract</h3>\n\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"status\">Sale Type</label>\n        <select\n          [(ngModel)]=\"contract.saleType\"\n          type=\"text\"\n          name=\"saleType\"\n          id=\"saleType\"\n          class=\"form-control\"\n          placeholder=\"1\"\n        >\n          <option value=\"1\">Counter</option>\n          <option value=\"2\">Rented</option>\n          <option value=\"3\">Installment</option>\n        </select>\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"Select Customer\">Select Customer</label>\n        <select\n          [(ngModel)]=\"contract.customer\"\n          type=\"text\"\n          name=\"customer\"\n          id=\"customer\"\n          (click)=\"fetchCustomers()\"\n          class=\"form-control\"\n          placeholder=\"\"\n        >\n          <option\n            value=\"{{ customer?._id }}\"\n            *ngFor=\"let customer of customerlist\"\n            >{{ customer?.customer?.name }}</option\n          >\n        </select>\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"Select Asset\">Select Asset</label>\n        <select\n          [(ngModel)]=\"contract.asset\"\n          type=\"text\"\n          name=\"asset\"\n          id=\"asset\"\n          (click)=\"fetchAssets()\"\n          class=\"form-control\"\n          placeholder=\"\"\n        >\n          <option value=\"{{ asset?._id }}\" *ngFor=\"let asset of assetlist\">{{\n            asset?.title\n          }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"this.contract.saleType !== '1'\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"contractDate\">Contract Date</label>\n        <input\n          [(ngModel)]=\"contract.contractDate\"\n          type=\"date\"\n          name=\"contractDate\"\n          id=\"contractDate\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"startDate\">Contract Start Date</label>\n        <input\n          [(ngModel)]=\"contract.startDate\"\n          type=\"date\"\n          name=\"startdate\"\n          id=\"startDate\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"duration\">Contract Duration</label>\n        <input\n          [(ngModel)]=\"contract.duration\"\n          type=\"text\"\n          name=\"duration\"\n          id=\"duration\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"increment\">Increment</label>\n        <input\n          [(ngModel)]=\"contract.increment\"\n          type=\"text\"\n          name=\"increament\"\n          id=\"increment\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"incrementSchedule\">Increment Schedule</label>\n        <select\n          [(ngModel)]=\"contract.incrementSchedule\"\n          type=\"text\"\n          name=\"incrementSchedule\"\n          id=\"incrementSchedule\"\n          class=\"form-control\"\n          placeholder=\"\"\n        >\n          <option value=\"daily\">Daily</option>\n          <option value=\"monthly\">Monthly</option>\n          <option value=\"annual\">Annual</option>\n        </select>\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"expiry\">Expiry Date</label>\n        <input\n          [(ngModel)]=\"contract.expiryDate\"\n          type=\"date\"\n          name=\"expiry\"\n          id=\"expiry\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"cancelation\">Cancelation Date</label>\n        <input\n          [(ngModel)]=\"contract.cancelation\"\n          type=\"date\"\n          name=\"cancelation\"\n          id=\"cancelation\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"mathod\">Payment Mathod</label>\n        <select\n          [(ngModel)]=\"contract.paymentMathod\"\n          type=\"text\"\n          name=\"mathod\"\n          id=\"mathod\"\n          class=\"form-control\"\n          placeholder=\"\"\n        >\n          <option value=\"daily\">Daily</option>\n          <option value=\"monthly\">Monthly</option>\n          <option value=\"annual\">Annual</option>\n        </select>\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"downPayment\">Down Payment</label>\n        <input\n          [(ngModel)]=\"contract.downPayment\"\n          type=\"text\"\n          name=\"downPayment\"\n          id=\"downPayment\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"avdancePayment\">Advance Payment</label>\n        <input\n          [(ngModel)]=\"contract.avdancePayment\"\n          type=\"text\"\n          name=\"advancePayment\"\n          id=\"advancePayment\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"status\">Contract Status</label>\n        <select\n          [(ngModel)]=\"contract.status\"\n          type=\"text\"\n          name=\"status\"\n          id=\"status\"\n          class=\"form-control\"\n          placeholder=\"\"\n        >\n          <option value=\"Open\">Open</option>\n          <option value=\"Canceled\">Canceled</option>\n          <option value=\"Expired\">Expired</option>\n        </select>\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"quoted\">Price Quoted</label>\n        <input\n          [(ngModel)]=\"contract.priceQuoted\"\n          type=\"text\"\n          name=\"qouted\"\n          id=\"qouted\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"quoted\">Total Payable</label>\n        <input\n          [(ngModel)]=\"contract.totalPayable\"\n          type=\"text\"\n          name=\"qouted\"\n          id=\"qouted\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n    </div>\n\n    <div class=\"row float-right\">\n      <button\n        type=\"submit\"\n        (click)=\"addContract(contract)\"\n        class=\"btn btn-primary\"\n      >\n        Save\n      </button>\n      <button type=\"submit\" (click)=\"openCustomer()\" class=\"btn btn-primary\">\n        Create Customer\n      </button>\n      <button type=\"submit\" (click)=\"openAsset()\" class=\"btn btn-primary\">\n        Create Asset\n      </button>\n      <button\n        type=\"submit\"\n        [routerLink]=\"['/contract/list']\"\n        routerLinkActive=\"router-link-active\"\n        class=\"btn btn-danger\"\n      >\n        Cancel\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/contract/newcontract/newcontract.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/contract/newcontract/newcontract.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewcontractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcontractComponent", function() { return NewcontractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_contract_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/contract.model */ "./src/app/contract.model.ts");
/* harmony import */ var src_app_ams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _asset_newasset_newasset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../asset/newasset/newasset.component */ "./src/app/components/asset/newasset/newasset.component.ts");
/* harmony import */ var _customer_newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../customer/newcustomer/newcustomer.component */ "./src/app/components/customer/newcustomer/newcustomer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");










var NewcontractComponent = /** @class */ (function () {
    function NewcontractComponent(amsService, fb, router, route, modalService, activeModal) {
        var _this = this;
        this.amsService = amsService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.contract = new src_app_contract_model__WEBPACK_IMPORTED_MODULE_2__["Contract"]();
        this.route.paramMap.subscribe(function (parameterMap) {
            var id = parameterMap.get('id');
            _this.amsService.getContractById(id);
        });
    }
    NewcontractComponent.prototype.ngOnInit = function () {
        if (this.amsService.editMode) {
            this.fetchContractById();
        }
    };
    NewcontractComponent.prototype.fetchContractById = function () {
        var _this = this;
        this.amsService
            .getContractById(this.amsService.Id)
            .subscribe(function (res) {
            _this.contract = res.data;
            console.log(_this.amsService.Id, _this.contract, 'contract at view');
        });
    };
    NewcontractComponent.prototype.fetchCustomers = function () {
        var _this = this;
        this.amsService.getCustomers().subscribe(function (data) {
            _this.customerlist = data;
            console.log('all customer found', data);
        });
    };
    NewcontractComponent.prototype.fetchAssets = function () {
        var _this = this;
        this.amsService.getAssets().subscribe(function (data) {
            _this.assetlist = data;
            console.log('all customer found', data);
        });
    };
    NewcontractComponent.prototype.addContract = function (contract) {
        var _this = this;
        console.log(contract, 'this is new contract'),
            this.amsService.addContract(contract).subscribe(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Contract Inserted Successfully');
                _this.close();
            });
        //   this.router.navigate(['/']);
        // });
    };
    NewcontractComponent.prototype.openCustomer = function () {
        var modalRef = this.modalService.open(_customer_newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_8__["NewcustomerComponent"], {
            size: 'lg'
        });
        modalRef.componentInstance.name = 'New Customer';
    };
    NewcontractComponent.prototype.openAsset = function () {
        var modalRef = this.modalService.open(_asset_newasset_newasset_component__WEBPACK_IMPORTED_MODULE_7__["NewassetComponent"], { size: 'lg' });
        modalRef.componentInstance.name = 'New Asset';
    };
    NewcontractComponent.prototype.close = function () {
        this.activeModal.close();
    };
    NewcontractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newcontract',
            template: __webpack_require__(/*! ./newcontract.component.html */ "./src/app/components/contract/newcontract/newcontract.component.html"),
            styles: [__webpack_require__(/*! ./newcontract.component.css */ "./src/app/components/contract/newcontract/newcontract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_ams_service__WEBPACK_IMPORTED_MODULE_3__["AmsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"]])
    ], NewcontractComponent);
    return NewcontractComponent;
}());



/***/ }),

/***/ "./src/app/components/contract/viewcontract/viewcontract.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/contract/viewcontract/viewcontract.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-xl-9 {\n  flex: 0 0 75%;\n  max-width: 100%;\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n.card {\n  margin-bottom: 30px;\n  border: none;\n}\n.p-0 {\n  padding: 0 !important;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250cmFjdC92aWV3Y29udHJhY3Qvdmlld2NvbnRyYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDtBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw4QkFBOEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRyYWN0L3ZpZXdjb250cmFjdC92aWV3Y29udHJhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wteGwtOSB7XG4gIC1tcy1mbGV4OiAwIDAgNzUlO1xuICBmbGV4OiAwIDAgNzUlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ucC0wIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/contract/viewcontract/viewcontract.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/contract/viewcontract/viewcontract.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<<<<<<< HEAD\n<div class=\"header\">\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"container\">\n  <div class=\"col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12\">\n    <div class=\"card\">\n      <h5 class=\"card-header\">Contracts</h5>\n      <div class=\"card-body p-0\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead class=\"bg-light\">\n              <tr class=\"border-0\">\n                <th class=\"border-0\">Contract Date</th>\n                <th class=\"border-0\">Start Date</th>\n                <th class=\"border-0\">Duration</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>{{ contract?.contractDate }}</td>\n                <td>{{ contract?.startDate }}</td>\n                <td>{{ contract?.duration }}</td>\n              </tr>\n              <th class=\"border-0\">Increment</th>\n              <th class=\"border-0\">Increment Schedule</th>\n              <th class=\"border-0\">Expiry Date</th>\n\n              <tr>\n                <td>{{ contract?.increment }}</td>\n                <td>{{ contract?.incrementSchedule }}</td>\n                <td>{{ contract?.expiryDate }}</td>\n              </tr>\n              <th class=\"border-0\">Cancelation</th>\n              <th class=\"border-0\">PaymentMathod</th>\n              <th class=\"border-0\">Price Quoted</th>\n              <tr>\n                <td>{{ contract?.cancelation }}</td>\n                <td>{{ contract?.paymentMathod }}</td>\n                <td>{{ contract?.priceQuoted }}</td>\n              </tr>\n              <th class=\"border-0\">Total Payable</th>\n              <th class=\"border-0\">Down Payment</th>\n              <th class=\"border-0\">Advance Payment</th>\n              <tr>\n                <td>{{ contract?.totalPayable }}</td>\n                <td>{{ contract?.downPayment }}</td>\n                <td>{{ contract?.avdancePayment }}</td>\n              </tr>\n              <th class=\"border-0\">Status</th>\n              <th class=\"border-0\">Customer</th>\n              <th class=\"border-0\">Asset</th>\n              <tr>\n                <td>{{ contract?.status }}</td>\n                <td>{{ contract?.customer.customer.name }}</td>\n                <td>{{ contract?.asset.assetType }}</td>\n              </tr>\n            </tbody>\n          </table>\n=======\n\n  <button type=\"button\" class=\"close\" aria-label=\"Close\"(click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n   </button>\n\n<div class=\"container\">\n    <div class=\"col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12\">\n        <div class=\"card\">\n            <h1> {{contract?.customer.customer.name}}</h1>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr class=\"border-0\">\n                                <th class=\"border-0\">Contract Date</th>\n                                <th class=\"border-0\">Start Date</th>\n                                <th class=\"border-0\">Duration</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{contract?.contractDate}}</td>\n                                <td>{{contract?.startDate}}</td>\n                                <td>{{contract?.duration}}</td>\n                            </tr>\n                                    <th class=\"border-0\">Increment</th>\n                                    <th class=\"border-0\">Increment Schedule</th>\n                                    <th class=\"border-0\">Expiry Date</th>\n\n                            <tr>\n                                <td>{{contract?.increment}}</td>\n                                <td>{{contract?.incrementSchedule}}</td>\n                                <td>{{contract?.expiryDate}}</td>\n                            </tr>\n                                    <th class=\"border-0\">Cancelation</th>\n                                    <th class=\"border-0\">PaymentMathod</th>\n                                    <th class=\"border-0\">Price Quoted</th>\n                            <tr>\n                                <td>{{contract?.cancelation}}</td>\n                                <td>{{contract?. paymentMathod}} </td>\n                                <td> {{contract?. priceQuoted}} </td>\n                            </tr>\n                                    <th class=\"border-0\">Total Payable</th>\n                                    <th class=\"border-0\">Down Payment</th>\n                                    <th class=\"border-0\">Advance Payment</th>\n                            <tr>\n                                <td>{{contract?.totalPayable}}</td>\n                                <td> {{contract?.downPayment}} </td>\n                                <td> {{contract?. avdancePayment}}</td>\n                                </tr>\n                                <th class=\"border-0\">Status</th>\n                                    <th class=\"border-0\">Customer</th>\n                                    <th class=\"border-0\">Asset</th>\n                            <tr>\n                                <td>  {{contract?. status}}</td>\n                                    <td> {{contract?.customer.customer.name}}</td>\n                                        <td> {{contract?.asset.assetType}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n>>>>>>> 552d507ccd9b40c3dc4dea4a9ab4b55bd93049d0\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contract/viewcontract/viewcontract.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/contract/viewcontract/viewcontract.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewcontractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcontractComponent", function() { return ViewcontractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var ViewcontractComponent = /** @class */ (function () {
    function ViewcontractComponent(activeModal, amsService) {
        this.activeModal = activeModal;
        this.amsService = amsService;
    }
    ViewcontractComponent.prototype.ngOnInit = function () {
        this.fetchContractById();
    };
    ViewcontractComponent.prototype.fetchContractById = function () {
        var _this = this;
        this.amsService
            .getContractById(this.amsService.Id)
            .subscribe(function (res) {
            _this.contract = res.data;
            console.log(_this.amsService.Id, _this.contract, 'contract at view');
        });
    };
    ViewcontractComponent.prototype.close = function () {
        this.activeModal.close();
    };
    ViewcontractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewcontract',
            template: __webpack_require__(/*! ./viewcontract.component.html */ "./src/app/components/contract/viewcontract/viewcontract.component.html"),
            styles: [__webpack_require__(/*! ./viewcontract.component.css */ "./src/app/components/contract/viewcontract/viewcontract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"],
            src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"]])
    ], ViewcontractComponent);
    return ViewcontractComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/listcustomer/listcustomer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/customer/listcustomer/listcustomer.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\r\n  height: 40px;\r\n  width: 40px;\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-radius: 50%;\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgb(0, 157, 248);\r\n}\r\n\r\n.card {\r\n  background-color: rgb(255, 255, 255);\r\n  padding: 10px;\r\n  margin: 8px;\r\n  width: 100%;\r\n}\r\n\r\n.card-header {\r\n  background-color: rgb(0, 157, 248);\r\n  color: white;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\n.card-footer {\r\n  background-color: rgb(255, 255, 255);\r\n  height: 60px;\r\n  width: 100%;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color: white;\r\n  background-color: rgb(0, 157, 248);\r\n  border-bottom: 1px solid rgb(168, 168, 168);\r\n  padding: 10px;\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n  color: rgb(150, 150, 150);\r\n  /* border-bottom: 1px solid rgb(168, 168, 168); */\r\n}\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  outline: 0;\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\n.search {\r\n  outline: 0;\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9saXN0Y3VzdG9tZXIvbGlzdGN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztDQUNwQzs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsNENBQTRDO0VBQzVDLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0RBQWtEO0NBQ25EOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbWVyL2xpc3RjdXN0b21lci9saXN0Y3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY2lyY2xlIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU3LCAyNDgpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU3LCAyNDgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1NywgMjQ4KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OCwgMTY4LCAxNjgpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2OCwgMTY4LCAxNjgpOyAqL1xyXG59XHJcblxyXG4uYnRuLXNlYXJjaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/customer/listcustomer/listcustomer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/customer/listcustomer/listcustomer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow bg-white rounded\">\n  <div class=\"card-header shadow rounded\">\n    <h3>Customer List</h3>\n  </div>\n  <div class=\"row card-body\">\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"name\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By Name\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByName(name)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"cnic\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By CNIC\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByCnic(cnic)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n    <div class=\"col\">\n      <input\n        [(ngModel)]=\"mobile\"\n        class=\"search\"\n        type=\"text\"\n        name=\"\"\n        placeholder=\"Search By Mobile\"\n      />\n      <button type=\"button\" class=\"btn-search\" (click)=\"searchByMobile(mobile)\">\n        <i class=\"fas fa-angle-down\"></i>\n      </button>\n    </div>\n\n    <div class=\"col float-right\">\n      <button class=\"btn btn-primary btn-circle\" (click)=\"open()\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"card shadow bg-white rounded\">\n  <div class=\"card-body\">\n    <table>\n      <thead>\n        <th>Name &nbsp; <i class=\"fas fa-sort\"></i></th>\n        <th>Contact&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>CNIC&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Guarantor&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Contact&nbsp;<i class=\"fas fa-sort\"></i></th>\n        <th>Actions</th>\n      </thead>\n      <tbody\n        *ngFor=\"\n          let customer of (customerlist\n            | slice: (page - 1) * pageSize:(page - 1) * pageSize + pageSize)\n        \"\n      >\n        <td>{{ customer?.customer?.name }}</td>\n        <td>{{ customer?.customer?.mobile1 }}</td>\n        <td>{{ customer?.customer?.cnic }}</td>\n        <td>{{ customer?.guarantor?.gname }}</td>\n        <td>{{ customer?.guarantor?.gmobile }}</td>\n        <td>\n          <button\n            class=\"btn btn-sm btn-outline-warning\"\n            (click)=\"edit(customer._id)\"\n          >\n            <i class=\"far fa-edit\"></i></button\n          >&nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-danger\"\n            (click)=\"deleteCustomer(customer._id)\"\n          >\n            <i class=\"far fa-trash-alt\"></i></button\n          >&nbsp;\n          <button\n            class=\"btn btn-sm btn-outline-success\"\n            (click)=\"viewCustomer(customer._id)\"\n          >\n            <i class=\"far fa-eye\"></i>\n          </button>\n        </td>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card-footer\">\n    <div class=\"row\">\n       <div class=\"col-2\">\n           <label for=\"pageSize\">Show Rows</label>\n           <select\n             [(ngModel)]=\"pageSize\"\n             type=\"text\"\n             name=\"pageSize\"\n             id=\"pageSize\"\n           >\n             <option value=\"5\">5</option>\n             <option value=\"10\">10</option>\n             <option value=\"20\">20</option>\n           </select>\n         </div>\n\n      <div class=\"col-10\">\n       <ngb-pagination\n         class=\"d-flex justify-content-end\"\n         [(page)]=\"page\"\n         [pageSize]=\"pageSize\"\n         [collectionSize]=\"customerlist.length\"\n         [maxSize]=\"5\"\n       >\n       </ngb-pagination>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/customer/listcustomer/listcustomer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/customer/listcustomer/listcustomer.component.ts ***!
  \****************************************************************************/
/*! exports provided: ListcustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcustomerComponent", function() { return ListcustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../newcustomer/newcustomer.component */ "./src/app/components/customer/newcustomer/newcustomer.component.ts");
/* harmony import */ var _viewcustomer_viewcustomer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../viewcustomer/viewcustomer.component */ "./src/app/components/customer/viewcustomer/viewcustomer.component.ts");







var ListcustomerComponent = /** @class */ (function () {
    function ListcustomerComponent(amsService, router, modalService) {
        this.amsService = amsService;
        this.router = router;
        this.modalService = modalService;
        this.page = 1;
        this.customerlist = [];
        this.isCollapsed = true;
    }
    ListcustomerComponent.prototype.ngOnInit = function () {
        this.fetchCustomers();
    };
    ListcustomerComponent.prototype.fetchCustomers = function () {
        var _this = this;
        this.amsService.getCustomers().subscribe(function (data) {
            _this.customerlist = data;
            console.log('all customer found', data);
        });
    };
    ListcustomerComponent.prototype.edit = function (_id) {
        this.amsService.Id = _id;
        this.amsService.editMode = true;
        console.log(this.amsService.Id, 'got this customer');
        var modalRef = this.modalService.open(_newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_5__["NewcustomerComponent"], {
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.user = 'Update Customer';
    };
    ListcustomerComponent.prototype.open = function () {
        this.amsService.editMode = false;
        this.amsService.Id = null;
        var modalRef = this.modalService.open(_newcustomer_newcustomer_component__WEBPACK_IMPORTED_MODULE_5__["NewcustomerComponent"], {
            size: 'lg',
            backdrop: 'static'
        });
        modalRef.componentInstance.name = 'New Customer';
    };
    ListcustomerComponent.prototype.deleteCustomer = function (_id) {
        var _this = this;
        this.amsService.deleteCustomer(_id).subscribe(function () {
            _this.fetchCustomers();
            console.log('delete click');
        });
    };
    ListcustomerComponent.prototype.viewCustomer = function (id) {
        this.amsService.Id = id;
        var modalRef = this.modalService.open(_viewcustomer_viewcustomer_component__WEBPACK_IMPORTED_MODULE_6__["ViewcustomerComponent"], { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.name = 'View Customer';
    };
    ListcustomerComponent.prototype.searchByName = function (name) {
        var _this = this;
        console.log(name, 'this is Name at search');
        this.amsService.getCustomerByName(name).subscribe(function (res) {
            _this.customerlist = res.data;
            console.log('all customer found bt Name', _this.customerlist);
        });
    };
    ListcustomerComponent.prototype.searchByCnic = function (cnic) {
        var _this = this;
        console.log(cnic, 'this is cnic at search');
        this.amsService.getCustomerByCnic(cnic).subscribe(function (res) {
            _this.customerlist = res.data;
            console.log('all customer found by Cnic', _this.customerlist);
        });
    };
    ListcustomerComponent.prototype.searchByMobile = function (mobile) {
        var _this = this;
        console.log(mobile, 'this is mobile at search');
        this.amsService.getCustomerByMobile(mobile).subscribe(function (res) {
            _this.customerlist = res.data;
            console.log('all customer found by Mobile', _this.customerlist);
        });
    };
    ListcustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listcustomer',
            template: __webpack_require__(/*! ./listcustomer.component.html */ "./src/app/components/customer/listcustomer/listcustomer.component.html"),
            styles: [__webpack_require__(/*! ./listcustomer.component.css */ "./src/app/components/customer/listcustomer/listcustomer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], ListcustomerComponent);
    return ListcustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/newcustomer/newcustomer.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/customer/newcustomer/newcustomer.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align {\n  margin-top: 20px;\n  padding-left: 15px;\n}\n.aligncontract {\n  padding: 10px;\n  margin-left: -9px;\n}\n.btn {\n  float: right;\n  padding-right: 12px;\n  padding-left: 12px;\n  margin: 1px;\n  margin: right;\n  padding-bottom: 5px;\n  padding-left: 6px;\n  padding-right: 6px;\n  margin-bottom: 10px;\n  margin-right: 7px;\n}\ninput[type=\"text\"]:hover {\n  background-color: #e2e2eb;\n  color: #3d405c;\n}\ninput[type=\"text\"] {\n  width: 100%;\n  outline: 0;\n  color: rgb(150, 150, 150);\n  border-width: 0 0 1px;\n  border-color: rgb(176, 176, 179);\n}\ninput[type=\"date\"]:hover {\n  background-color: #e2e2eb;\n  color: #3d405c;\n}\ninput[type=\"date\"] {\n  width: 100%;\n  outline: 0;\n  color: rgb(150, 150, 150);\n  border-width: 0 0 1px;\n  border-color: rgb(176, 176, 179);\n}\nselect[type=\"text\"]:hover {\n  background-color: #e2e2eb;\n  color: #3d405c;\n}\nselect[type=\"text\"] {\n  width: 100%;\n  outline: 0;\n  color: rgb(150, 150, 150);\n  border-width: 0 0 1px;\n  border-color: rgb(176, 176, 179);\n}\n.btn-circle {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: rgb(255, 255, 255);\n  background-color: rgb(0, 157, 248);\n}\n.card {\n  background-color: rgb(255, 255, 255);\n  padding: 10px;\n  margin: 8px;\n  width: 100%;\n}\n.card-header {\n  background-color: rgb(0, 157, 248);\n  color: white;\n  text-align: left;\n  vertical-align: middle;\n  height: 60px;\n  width: 100%;\n}\n.card-footer {\n  background-color: rgb(255, 255, 255);\n  height: 60px;\n  width: 100%;\n}\ntable {\n  width: 100%;\n}\nth {\n  text-align: center;\n  vertical-align: middle;\n  color: white;\n  background-color: rgb(0, 157, 248);\n  border-bottom: 1px solid rgb(168, 168, 168);\n  padding: 10px;\n}\ntd {\n  text-align: center;\n  color: rgb(150, 150, 150);\n  /* border-bottom: 1px solid rgb(168, 168, 168); */\n}\n.btn-search {\n  background-color: white;\n  outline: 0;\n  border-width: 0 0 1px;\n  border-color: rgb(176, 176, 179);\n}\n.search {\n  outline: 0;\n  border-width: 0 0 1px;\n  border-color: rgb(176, 176, 179);\n}\ninput[type=text] {\n    width: 100%;\n    outline: 0;\n    color: rgb(150, 150, 150);\n    border-width: 0 0 1px;\n    border-color: rgb(176, 176, 179);\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9uZXdjdXN0b21lci9uZXdjdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtDQUNuQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEM7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsaUNBQWlDO0NBQ2xDO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG1DQUFtQztDQUNwQztBQUVEO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtDQUNiO0FBQ0Q7RUFDRSxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7Q0FDYjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixZQUFZO0NBQ2I7QUFFRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLDRDQUE0QztFQUM1QyxjQUFjO0NBQ2Y7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0RBQWtEO0NBQ25EO0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEM7QUFFRDtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUNBQWlDO0NBQ2xDO0FBRUQ7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsaUNBQWlDO0dBQ2xDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9uZXdjdXN0b21lci9uZXdjdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmFsaWduY29udHJhY3Qge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cbi5idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgbWFyZ2luOiAxcHg7XG4gIG1hcmdpbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuaW5wdXRbdHlwZT1cInRleHRcIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmViO1xuICBjb2xvcjogIzNkNDA1Yztcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogMDtcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigxNzYsIDE3NiwgMTc5KTtcbn1cbmlucHV0W3R5cGU9XCJkYXRlXCJdOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlYjtcbiAgY29sb3I6ICMzZDQwNWM7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IDA7XG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XG59XG5cbnNlbGVjdFt0eXBlPVwidGV4dFwiXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZWI7XG4gIGNvbG9yOiAjM2Q0MDVjO1xufVxuXG5zZWxlY3RbdHlwZT1cInRleHRcIl0ge1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogMDtcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICBib3JkZXItY29sb3I6IHJnYigxNzYsIDE3NiwgMTc5KTtcbn1cbi5idG4tY2lyY2xlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU3LCAyNDgpO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1NywgMjQ4KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1NywgMjQ4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjgsIDE2OCwgMTY4KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTY4LCAxNjgsIDE2OCk7ICovXG59XG5cbi5idG4tc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XG59XG5cbi5zZWFyY2gge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/customer/newcustomer/newcustomer.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/customer/newcustomer/newcustomer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"card shadow rounded\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <h5>Customer</h5>\n    <div class=\"row card-body\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"name\">Customer Name</label>\n        <input\n          [(ngModel)]=\"customer.customer.name\"\n          type=\"text\"\n          name=\"name\"\n          id=\"name\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"fatherName\">Father Name</label>\n        <input\n          [(ngModel)]=\"customer.customer.fatherName\"\n          type=\"text\"\n          name=\"fatherName\"\n          id=\"fatherName\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"cnic\">CNIC</label>\n        <input\n          [(ngModel)]=\"customer.customer.cnic\"\n          type=\"text\"\n          name=\"cnic\"\n          id=\"cnic\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"mobile1\">Mobile 1</label>\n        <input\n          [(ngModel)]=\"customer.customer.mobile1\"\n          type=\"text\"\n          name=\"mobile1\"\n          id=\"mobile1\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"mobile2\">Mobile2</label>\n        <input\n          [(ngModel)]=\"customer.customer.mobile2\"\n          type=\"text\"\n          name=\"mobile2\"\n          id=\"mobile2\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n    </div>\n\n    <div class=\"col-6 col-md-4\">\n      <h5>Address</h5>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"floor\">Floor</label>\n        <input\n          [(ngModel)]=\"customer.customer.address.floor\"\n          type=\"text\"\n          name=\"floor\"\n          id=\"floor\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"number\">House Number</label>\n        <input\n          [(ngModel)]=\"customer.customer.address.number\"\n          type=\"text\"\n          name=\"number\"\n          id=\"number\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"street\">Street</label>\n        <input\n          [(ngModel)]=\"customer.customer.address.street\"\n          type=\"text\"\n          name=\"street\"\n          id=\"street\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"sector\">Sector</label>\n        <input\n          [(ngModel)]=\"customer.customer.address.sector\"\n          type=\"text\"\n          name=\"sector\"\n          id=\"sector\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"city\">City</label>\n        <input\n          [(ngModel)]=\"customer.customer.address.city\"\n          type=\"text\"\n          name=\"city\"\n          id=\"city\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"province\">Province</label>\n        <input\n          [(ngModel)]=\"customer.customer.address.province\"\n          type=\"text\"\n          name=\"province\"\n          id=\"province\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"zipcode\">Zip Code</label>\n        <input\n          [(ngModel)]=\"customer.customer.address.zipcode\"\n          type=\"text\"\n          name=\"zipcode\"\n          id=\"zipcode\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n    </div>\n  </div>\n  <div class=\"card shadow rounded\">\n    <h5>Guarantor</h5>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"gname\">Guarantor Name</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gname\"\n          type=\"text\"\n          name=\"gname\"\n          id=\"gname\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"fatherName\">Father Name</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gfather\"\n          type=\"text\"\n          name=\"fatherName\"\n          id=\"fatherName\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"cnic\">CNIC</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gcnic\"\n          type=\"text\"\n          name=\"cnic\"\n          id=\"cnic\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"mobile1\">Mobile 1</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gmobile1\"\n          type=\"text\"\n          name=\"mobile1\"\n          id=\"mobile1\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"mobile2\">Mobile 2</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gmobile2\"\n          type=\"text\"\n          name=\"mobile2\"\n          id=\"mobile2\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label>Address</label>\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"floor\">Floor</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gaddress.floor\"\n          type=\"text\"\n          name=\"floor\"\n          id=\"floor\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"number\">House Number</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gaddress.number\"\n          type=\"text\"\n          name=\"number\"\n          id=\"number\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"street\">Street</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gaddress.street\"\n          type=\"text\"\n          name=\"street\"\n          id=\"street\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"sector\">Sector</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gaddress.sector\"\n          type=\"text\"\n          name=\"sector\"\n          id=\"sector\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"city\">City</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gaddress.city\"\n          type=\"text\"\n          name=\"city\"\n          id=\"city\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"province\">Province</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gaddress.province\"\n          type=\"text\"\n          name=\"province\"\n          id=\"province\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <label for=\"zipcode\">Zip Code</label>\n        <input\n          [(ngModel)]=\"customer.guarantor.gaddress.zipcode\"\n          type=\"text\"\n          name=\"zipcode\"\n          id=\"zipcode\"\n          class=\"form-control\"\n          placeholder=\"\"\n        />\n      </div>\n    </div>\n    <div>\n      <div class=\"row float-right\">\n        <button\n          type=\"submit\"\n          (click)=\"addCustomer(customer)\"\n          class=\"btn btn-primary save\"\n        >\n          Save\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/customer/newcustomer/newcustomer.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/customer/newcustomer/newcustomer.component.ts ***!
  \**************************************************************************/
/*! exports provided: NewcustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcustomerComponent", function() { return NewcustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/customer.model */ "./src/app/customer.model.ts");
/* harmony import */ var src_app_ams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var NewcustomerComponent = /** @class */ (function () {
    function NewcustomerComponent(amsService, fb, router, route, modalService, activeModal) {
        var _this = this;
        this.amsService = amsService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.customer = new src_app_customer_model__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.route.paramMap.subscribe(function (parameterMap) {
            var id = parameterMap.get('id');
            _this.amsService.getCustomerById(id);
        });
    }
    NewcustomerComponent.prototype.ngOnInit = function () {
        if (this.amsService.editMode) {
            this.fetchCustomerById();
        }
    };
    NewcustomerComponent.prototype.fetchCustomerById = function () {
        var _this = this;
        this.amsService
            .getCustomerById(this.amsService.Id)
            .subscribe(function (res) {
            _this.customer = res.data;
            console.log(_this.amsService.Id, 'customer at edit');
        });
    };
    NewcustomerComponent.prototype.addCustomer = function (customer) {
        var _this = this;
        console.log(customer, 'this is new asset'),
            this.amsService.addCustomer(customer).subscribe(function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Customer Inserted Successfully');
                _this.close();
            });
        //   this.router.navigate(['/']);
        // });
    };
    NewcustomerComponent.prototype.close = function () {
        this.activeModal.close();
    };
    NewcustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newcustomer',
            template: __webpack_require__(/*! ./newcustomer.component.html */ "./src/app/components/customer/newcustomer/newcustomer.component.html"),
            styles: [__webpack_require__(/*! ./newcustomer.component.css */ "./src/app/components/customer/newcustomer/newcustomer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_ams_service__WEBPACK_IMPORTED_MODULE_3__["AmsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]])
    ], NewcustomerComponent);
    return NewcustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/viewcustomer/viewcustomer.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/customer/viewcustomer/viewcustomer.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-xl-9 {\n  flex: 0 0 75%;\n  max-width: 100%;\n}\n    .table-responsive{\n      display: block;\n    width: 100%;\n    overflow-x: auto;\n    }\n    .card{\n  margin-bottom: 30px;\n    border: none;\n}\n    .table{\n  width: 100%;\n    max-width: 100%;\n    margin-bottom: 1rem;\n    background-color: transparent;\n}\n    th{\n  background-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci92aWV3Y3VzdG9tZXIvdmlld2N1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0lBQ0c7TUFDRSxlQUFlO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7S0FDaEI7SUFDTDtFQUNFLG9CQUFvQjtJQUNsQixhQUFhO0NBQ2hCO0lBRUQ7RUFDRSxZQUFZO0lBQ1YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiw4QkFBOEI7Q0FDakM7SUFDRDtFQUNFLDhCQUE4QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvdmlld2N1c3RvbWVyL3ZpZXdjdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC14bC05IHtcbiAgLW1zLWZsZXg6IDAgMCA3NSU7XG4gIGZsZXg6IDAgMCA3NSU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbiAgICAudGFibGUtcmVzcG9uc2l2ZXtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuLmNhcmR7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4udGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxudGh7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/customer/viewcustomer/viewcustomer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/customer/viewcustomer/viewcustomer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <button type=\"button\" class=\"close\" aria-label=\"Close\"(click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n   </button>\n\n<div class=\"container\">\n    <div class=\"col-xl-9 col-lg-12 col-md-6 col-sm-12 col-12\">\n        <div class=\"card\">\n            <h1>{{customer?.customer?.name}}</h1>\n            <div>\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead>\n                            <tr class=\"border-0\">\n                                <th class=\"border-0\">Reference</th>\n                                <th class=\"border-0\">Father Name</th>\n                                <th class=\"border-0\">Cnic No</th>\n                                <th class=\"border-0\">License No</th>\n                                <th class=\"border-0\">Phone No</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{customer?.customer?.ref}}</td>\n                                <td>{{customer?.customer?.number}}</td>\n                                <td>{{customer?.customer?.fatherName}}</td>\n                                <td>{{customer?.customer?.cnic}}</td>\n                                <td>{{customer?.customer?.license}}</td>\n                            </tr>\n                                    <th class=\"border-0\">Mobile 1</th>\n                                    <th class=\"border-0\">Mobile 2</th>\n                                    <th class=\"border-0\">Zipcode</th>\n                                    <th class=\"border-0\">City</th>\n                                    <th class=\"border-0\">Province</th>\n                            <tr>\n                                <td>{{customer?.customer?.mobile1}}</td>\n                                <td>{{customer?.customer?.mobile2}}</td>\n                                <td>{{customer?.customer?.province}}</td>\n                                <td>{{customer?.customer?.zipcode}}</td>\n                                <td>{{customer?.customer?.city}}</td>\n                            </tr>\n                                    <th class=\"border-0\">Sector</th>\n                                    <th class=\"border-0\">Street</th>\n                                    <th class=\"border-0\">Floor</th>\n                                    <th class=\"border-0\">Address</th>\n                            <tr>\n                                <td>{{customer?.customer?.sector}}</td>\n                                <td>{{customer?.customer?.street}}</td>\n                                <td>{{customer?.customer?.floor}}</td>\n                                <td>{{customer?.customer?.address}}</td>\n\n                            </tr>\n                                <th class=\"border-0\">Guarantor Name</th>\n                                    <th class=\"border-0\">Father Name</th>\n                                    <th class=\"border-0\">Cnic No</th>\n                                    <th class=\"border-0\"> Mobile 1</th>\n                                    <th class=\"border-0\">Mobile 2</th>\n                            <tr>\n                                <td>{{customer?.guarantor.gname}}</td>\n                                <td>{{customer?.guarantor?.gfather}}</td>\n                                <td>{{customer?.guarantor?.gcnic}}</td>\n                                <td>{{customer?.guarantor?.gmobile1}}</td>\n                                <td>{{customer?.guarantor?.gmobile2}}</td>\n                                </tr>\n                                <th class=\"border-0\">Province</th>\n                                <th class=\"border-0\">City </th>\n                                <th class=\"border-0\">Floor </th>\n                                <th class=\"border-0\">Street </th>\n                                <th class=\"border-0\">Address </th>\n                            <tr>\n                                <td>{{customer?.guarantor?.province}}</td>\n                                <td>{{customer?.guarantor?.city}}</td>\n                                <td>{{customer?.guarantor?.floor}}</td>\n                                <td>{{customer?.guarantor?.street}}</td>\n                                <td>{{customer?.guarantor?.gaddress}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/customer/viewcustomer/viewcustomer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/customer/viewcustomer/viewcustomer.component.ts ***!
  \****************************************************************************/
/*! exports provided: ViewcustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcustomerComponent", function() { return ViewcustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_ams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ams.service */ "./src/app/ams.service.ts");




var ViewcustomerComponent = /** @class */ (function () {
    function ViewcustomerComponent(activeModal, amsService) {
        this.activeModal = activeModal;
        this.amsService = amsService;
    }
    ViewcustomerComponent.prototype.ngOnInit = function () {
        this.getCustomerById();
    };
    ViewcustomerComponent.prototype.getCustomerById = function () {
        var _this = this;
        this.amsService
            .getCustomerById(this.amsService.Id)
            .subscribe(function (res) {
            _this.customer = res.data;
            console.log(_this.amsService.Id, _this.customer, 'customer at view');
        });
    };
    ViewcustomerComponent.prototype.close = function () {
        this.activeModal.close();
    };
    ViewcustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewcustomer',
            template: __webpack_require__(/*! ./viewcustomer.component.html */ "./src/app/components/customer/viewcustomer/viewcustomer.component.html"),
            styles: [__webpack_require__(/*! ./viewcustomer.component.css */ "./src/app/components/customer/viewcustomer/viewcustomer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            src_app_ams_service__WEBPACK_IMPORTED_MODULE_3__["AmsService"]])
    ], ViewcustomerComponent);
    return ViewcustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/reciept/listreciept/listreciept.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/reciept/listreciept/listreciept.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n  margin-top: -25px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpZXB0L2xpc3RyZWNpZXB0L2xpc3RyZWNpZXB0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2llcHQvbGlzdHJlY2llcHQvbGlzdHJlY2llcHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/reciept/listreciept/listreciept.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/reciept/listreciept/listreciept.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"float-right\">\n  <button type=\"submit\" (click)=\"close()\" class=\"btn btn-sm btn-outline-danger\">\n    X\n  </button>\n</div>\n<h3>{{ contract?.customer?.customer?.name }} Ledger</h3>\n<hr />\n<div class=\"row\">\n  <div class=\"col\">\n    <label>Total Payable = &nbsp;</label>\n    <strong>{{ contract?.totalPayable }}</strong>\n  </div>\n  <div class=\"col\">\n    <label>Total Recieved = &nbsp;</label><strong>{{ grandTotal }}</strong>\n  </div>\n  <div class=\"col\">\n    <label>Total blance = &nbsp;</label><strong>{{ balance }}</strong>\n  </div>\n</div>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Sr</th>\n      <th scope=\"col\">Date</th>\n      <th scope=\"col\">Mathod</th>\n      <th scope=\"col\">Amount</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let reciept of recieptlist; index as i\">\n      <td>{{ i + 1 }}</td>\n      <td>{{ reciept?._id }}</td>\n      <td>{{ reciept?.recieptDate }}</td>\n      <td>{{ reciept?.paymentMathod }}</td>\n      <td>{{ reciept?.recivedAmount }}</td>\n      <!-- <td>{{reciept?.contractId}}</td> -->\n    </tr>\n  </tbody>\n</table>\n<!-- <th scope=\"row\">{{ i + 1 }}</th> -->\n"

/***/ }),

/***/ "./src/app/components/reciept/listreciept/listreciept.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/reciept/listreciept/listreciept.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListrecieptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListrecieptComponent", function() { return ListrecieptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var ListrecieptComponent = /** @class */ (function () {
    function ListrecieptComponent(amsService, router, modalService, activeModal) {
        this.amsService = amsService;
        this.router = router;
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    ListrecieptComponent.prototype.ngOnInit = function () {
        console.log('i m called in listrec');
        // this.fetchAssetById();
        this.fetchReciept();
        // this.fetchContractById();
    };
    ListrecieptComponent.prototype.fetchReciept = function () {
        var _this = this;
        this.amsService
            .getRecieptById(this.amsService.Id)
            .subscribe(function (data) {
            _this.recieptlist = data.data;
            var total = _this.getTotal(_this.recieptlist);
            _this.grandTotal = total;
            console.log(_this.recieptlist, 'this is reciept data');
            _this.amsService
                .getContractById(_this.amsService.Id)
                .subscribe(function (con) {
                _this.contract = con.data;
                var blnc = _this.contract.totalPayable - _this.grandTotal;
                _this.balance = blnc;
                console.log(blnc, 'got this blnc');
            });
        });
    };
    ListrecieptComponent.prototype.getTotal = function (data) {
        var amount = 0;
        var total = 0;
        data.forEach(function (element) {
            amount = parseInt(element.recivedAmount, 10);
            console.log(amount, 'this is amount');
            total += amount;
        });
        return total;
    };
    // getBalance(data) {
    //   let amount = 0;
    //   let total = this.grandTotal;
    //   // data.forEach(element => {
    //   //   amount = parseInt(element.recivedAmount, 10);
    //   //   console.log(amount, 'this is amount');
    //     total += amount;
    //   });
    //   return total;
    // }
    ListrecieptComponent.prototype.fetchContractById = function () {
        var _this = this;
        this.amsService
            .getContractById(this.amsService.Id)
            .subscribe(function (data) {
            _this.contract = data.data;
            console.log(_this.amsService.Id, _this.contract, 'got this asset');
        });
    };
    ListrecieptComponent.prototype.close = function () {
        this.activeModal.close();
    };
    ListrecieptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listreciept',
            template: __webpack_require__(/*! ./listreciept.component.html */ "./src/app/components/reciept/listreciept/listreciept.component.html"),
            styles: [__webpack_require__(/*! ./listreciept.component.css */ "./src/app/components/reciept/listreciept/listreciept.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
    ], ListrecieptComponent);
    return ListrecieptComponent;
}());



/***/ }),

/***/ "./src/app/components/reciept/newreciept/newreciept.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/reciept/newreciept/newreciept.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\r\n  float: right;\r\n  padding-right: 12px;\r\n  padding-left: 12px;\r\n  margin: 1px;\r\n  margin: right;\r\n  padding-bottom: 5px;\r\n  padding-left: 6px;\r\n  padding-right: 6px;\r\n  margin-bottom: 10px;\r\n  margin-right: 7px;\r\n}\r\ninput[type=\"text\"]:hover {\r\n  background-color: #e2e2eb;\r\n  color: #3d405c;\r\n}\r\ninput[type=\"text\"] {\r\n  width: 100%;\r\n  outline: 0;\r\n  color: rgb(150, 150, 150);\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\ninput[type=\"date\"]:hover {\r\n  background-color: #e2e2eb;\r\n  color: #3d405c;\r\n}\r\ninput[type=\"date\"] {\r\n  width: 100%;\r\n  outline: 0;\r\n  color: rgb(150, 150, 150);\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\nselect[type=\"text\"]:hover {\r\n  background-color: #e2e2eb;\r\n  color: #3d405c;\r\n}\r\nselect[type=\"text\"] {\r\n  width: 100%;\r\n  outline: 0;\r\n  color: rgb(150, 150, 150);\r\n  border-width: 0 0 1px;\r\n  border-color: rgb(176, 176, 179);\r\n}\r\n.card {\r\n  padding: 10px;\r\n}\r\n.card-footer {\r\n  background-color: white;\r\n  padding: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpZXB0L25ld3JlY2llcHQvbmV3cmVjaWVwdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtDQUNoQjtBQUVEO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztDQUNsQztBQUNEO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEM7QUFFRDtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsaUNBQWlDO0NBQ2xDO0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY2llcHQvbmV3cmVjaWVwdC9uZXdyZWNpZXB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbiAgbWFyZ2luOiByaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmViO1xyXG4gIGNvbG9yOiAjM2Q0MDVjO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogMDtcclxuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xyXG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcclxuICBib3JkZXItY29sb3I6IHJnYigxNzYsIDE3NiwgMTc5KTtcclxufVxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlYjtcclxuICBjb2xvcjogIzNkNDA1YztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcclxuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XHJcbn1cclxuXHJcbnNlbGVjdFt0eXBlPVwidGV4dFwiXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlYjtcclxuICBjb2xvcjogIzNkNDA1YztcclxufVxyXG5cclxuc2VsZWN0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY2FyZC1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/reciept/newreciept/newreciept.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/reciept/newreciept/newreciept.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>New Reciept</h2>\n\n<div class=\"card\">\n  <form>\n    <div class=\"row align-items-center\">\n      <div class=\"col-6 col-md-4\">\n        <label for=\"date\">Date</label>\n        <input\n          [(ngModel)]=\"reciept.recieptDate\"\n          type=\"date\"\n          name=\"date\"\n          id=\"date\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"amount\">Recived Amount</label>\n        <input\n          [(ngModel)]=\"reciept.recivedAmount\"\n          type=\"text\"\n          name=\"amount\"\n          id=\"amount\"\n        />\n      </div>\n\n      <div class=\"col-6 col-md-4\">\n        <label for=\"paymentMathod\">Payment Mathod</label>&nbsp;\n        <select\n          [(ngModel)]=\"reciept.paymentMathod\"\n          type=\"text\"\n          name=\"paymentMathod\"\n          id=\"paymentMathod\"\n        >\n          <option value=\"cash\">Cash</option>\n          <option value=\"cheque\">Cheque</option>\n          <option value=\"onLine\">On-Line</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"card-footer float-right\">\n      <button\n        type=\"submit\"\n        (click)=\"close()\"\n        class=\"btn btn-sm btn-outline-danger\"\n      >\n        Exit\n      </button>\n      &nbsp;\n      <button\n        type=\"submit\"\n        (click)=\"addReciept(reciept)\"\n        class=\"btn btn-sm btn-outline-primary\"\n      >\n        Save\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/reciept/newreciept/newreciept.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/reciept/newreciept/newreciept.component.ts ***!
  \***********************************************************************/
/*! exports provided: NewrecieptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewrecieptComponent", function() { return NewrecieptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ams.service */ "./src/app/ams.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_reciept_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/reciept.model */ "./src/app/reciept.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");







var NewrecieptComponent = /** @class */ (function () {
    function NewrecieptComponent(amsService, fb, router, modalService, activeModal) {
        this.amsService = amsService;
        this.fb = fb;
        this.router = router;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.reciept = new src_app_reciept_model__WEBPACK_IMPORTED_MODULE_5__["Reciept"]();
    }
    NewrecieptComponent.prototype.ngOnInit = function () { };
    NewrecieptComponent.prototype.addReciept = function (reciept) {
        var _this = this;
        console.log(reciept, 'this is new reciept');
        reciept.contractId = this.amsService.Id;
        console.log(this.amsService.Id, 'receipt is');
        this.amsService.addReciept(reciept).subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    NewrecieptComponent.prototype.close = function () {
        this.activeModal.close();
    };
    NewrecieptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newreciept',
            template: __webpack_require__(/*! ./newreciept.component.html */ "./src/app/components/reciept/newreciept/newreciept.component.html"),
            styles: [__webpack_require__(/*! ./newreciept.component.css */ "./src/app/components/reciept/newreciept/newreciept.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ams_service__WEBPACK_IMPORTED_MODULE_2__["AmsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]])
    ], NewrecieptComponent);
    return NewrecieptComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/contract.model.ts":
/*!***********************************!*\
  !*** ./src/app/contract.model.ts ***!
  \***********************************/
/*! exports provided: Contract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contract", function() { return Contract; });
var Contract = /** @class */ (function () {
    function Contract() {
    }
    return Contract;
}());



/***/ }),

/***/ "./src/app/customer.model.ts":
/*!***********************************!*\
  !*** ./src/app/customer.model.ts ***!
  \***********************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
        this.customer = {
            ref: '',
            name: '',
            fatherName: '',
            cnic: '',
            license: '',
            mobile1: '',
            mobile2: '',
            address: {
                floor: '',
                number: '',
                street: '',
                sector: '',
                city: '',
                province: '',
                zipcode: ''
            }
        };
        this.guarantor = {
            gname: '',
            gfather: '',
            gcnic: '',
            gmobile1: '',
            gmobile2: '',
            gaddress: {
                floor: '',
                number: '',
                street: '',
                sector: '',
                city: '',
                province: '',
                zipcode: ''
            }
        };
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\n  height: 40px;\n  width: 40px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: rgb(255, 255, 255);\n  background-color: rgb(0, 157, 248);\n}\n\n.card {\n  background-color: rgb(255, 255, 255);\n  padding: 5px;\n  margin: 10px;\n}\n\n.card-header {\n  background-color: rgb(0, 157, 248);\n  color: white;\n  text-align: left;\n  vertical-align: middle;\n  height: 60px;\n  width: 100%;\n}\n\n.card-footer {\n  background-color: rgb(255, 255, 255);\n  height: 60px;\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  text-align: center;\n  vertical-align: middle;\n  color: white;\n  background-color: rgb(0, 157, 248);\n  border-bottom: 1px solid rgb(168, 168, 168);\n  padding: 10px;\n}\n\ntd {\n  text-align: center;\n  color: rgb(150, 150, 150);\n  /* border-bottom: 1px solid rgb(168, 168, 168); */\n}\n\n.btn-search {\n  background-color: white;\n  outline: 0;\n  border-width: 0 0 1px;\n  border-color: rgb(176, 176, 179);\n}\n\n.search {\n  outline: 0;\n  border-width: 0 0 1px;\n  border-color: rgb(176, 176, 179);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixtQ0FBbUM7Q0FDcEM7O0FBRUQ7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGFBQWE7Q0FDZDs7QUFDRDtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsNENBQTRDO0VBQzVDLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0RBQWtEO0NBQ25EOztBQUVEO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUNBQWlDO0NBQ2xDOztBQUVEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQ0FBaUM7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNpcmNsZSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1NywgMjQ4KTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1NywgMjQ4KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxudGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1NywgMjQ4KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjgsIDE2OCwgMTY4KTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxudGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTY4LCAxNjgsIDE2OCk7ICovXG59XG5cbi5idG4tc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3OSk7XG59XG5cbi5zZWFyY2gge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gIGJvcmRlci1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzkpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\" col card shadow rounded\">\n  <div class=\"card-header\">\n    Report 1\n  </div>\n  <div class=\"card-body\">\n    <h6>Last Month Total</h6>\n    <h1>100,000,000</h1>\n  </div>\n  <div class=\"card-footer float-right\">\n    <button class=\"btn btn-sm btn-outline-primary\">Details...</button>\n  </div>\n      </div>\n    <div class=\" col card shadow rounded\">\n  <div class=\"card-header\">\n    Report 2\n  </div>\n  <div class=\"card-body\">\n    <h6>This Month Total</h6>\n    <h1>200,000,000</h1>\n  </div>\n  <div class=\"card-footer float-right\">\n    <button class=\"btn btn-sm btn-outline-primary\">Details...</button>\n  </div>\n      </div>\n    <div class=\" col card shadow rounded\">\n  <div class=\"card-header\">\n    Report 3\n  </div>\n  <div class=\"card-body\">\n    <h6>Next Month Total</h6>\n    <h1>400,000,000</h1>\n  </div>\n  <div class=\"card-footer float-right\">\n    <button class=\"btn btn-sm btn-outline-primary\">Details...</button>\n  </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/reciept.model.ts":
/*!**********************************!*\
  !*** ./src/app/reciept.model.ts ***!
  \**********************************/
/*! exports provided: Reciept */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reciept", function() { return Reciept; });
var Reciept = /** @class */ (function () {
    function Reciept() {
    }
    return Reciept;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ZAFAR Data\AMS\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map