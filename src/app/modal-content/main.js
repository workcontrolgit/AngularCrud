(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ '+nzw':
      /*!************************************************************!*\
  !*** ./src/app/@shared/classes/query-string-parameters.ts ***!
  \************************************************************/
      /*! exports provided: QueryStringParameters */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'QueryStringParameters', function () {
          return QueryStringParameters;
        });
        class QueryStringParameters {
          constructor() {
            this.toString = () => this.paramsAndValues.join('&');
            this.paramsAndValues = [];
          }
          push(key, value) {
            value = encodeURIComponent(value.toString());
            this.paramsAndValues.push([key, value].join('='));
          }
        }

        /***/
      },

    /***/ '/+EF':
      /*!**************************************************!*\
  !*** ./src/app/@core/route-reusable-strategy.ts ***!
  \**************************************************/
      /*! exports provided: RouteReusableStrategy */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'RouteReusableStrategy', function () {
          return RouteReusableStrategy;
        });
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );

        /**
         * A route strategy allowing for explicit route reuse.
         * Used as a workaround for https://github.com/angular/angular/issues/18374
         * To reuse a given route, add `data: { reuse: true }` to the route definition.
         */
        class RouteReusableStrategy extends _angular_router__WEBPACK_IMPORTED_MODULE_0__['RouteReuseStrategy'] {
          shouldDetach(route) {
            return false;
          }
          store(route, detachedTree) {}
          shouldAttach(route) {
            return false;
          }
          retrieve(route) {
            return null;
          }
          shouldReuseRoute(future, curr) {
            var _a, _b, _c;
            // Reuse the route if the RouteConfig is the same, or if both routes use the
            // same component, because the latter can have different RouteConfigs.
            return (
              future.routeConfig === curr.routeConfig ||
              Boolean(
                ((_a = future.routeConfig) === null || _a === void 0 ? void 0 : _a.component) &&
                  ((_b = future.routeConfig) === null || _b === void 0 ? void 0 : _b.component) ===
                    ((_c = curr.routeConfig) === null || _c === void 0 ? void 0 : _c.component)
              )
            );
          }
        }
        RouteReusableStrategy.ɵfac = function RouteReusableStrategy_Factory(t) {
          return ɵRouteReusableStrategy_BaseFactory(t || RouteReusableStrategy);
        };
        RouteReusableStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjectable']({
          token: RouteReusableStrategy,
          factory: RouteReusableStrategy.ɵfac,
        });
        const ɵRouteReusableStrategy_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵgetInheritedFactory'
        ](RouteReusableStrategy);
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
              RouteReusableStrategy,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ 0:
      /*!**********************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! C:\apps\devkit\Clients\AngularCrud\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:0&sockPath=/sockjs-node */ 'QM51'
        );
        module.exports = __webpack_require__(/*! C:\apps\devkit\Clients\AngularCrud\src\main.ts */ 'zUnb');

        /***/
      },

    /***/ '1YVg':
      /*!**************************************!*\
  !*** ./src/app/i18n/i18n.service.ts ***!
  \**************************************/
      /*! exports provided: I18nService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'I18nService', function () {
          return I18nService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var _core_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @core/logger.service */ 'k+XM'
        );
        /* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../translations/en-US.json */ 'A/Ql'
        );
        var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/ __webpack_require__.t(
          /*! ../../translations/en-US.json */ 'A/Ql',
          1
        );

        const log = new _core_logger_service__WEBPACK_IMPORTED_MODULE_2__['Logger']('I18nService');
        const languageKey = 'language';
        class I18nService {
          constructor(translateService) {
            this.translateService = translateService;
            // Embed languages to avoid extra HTTP requests
            translateService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_3__);
          }
          /**
           * Initializes i18n for the application.
           * Loads language from local storage if present, or sets default language.
           * @param defaultLanguage The default language to use.
           * @param supportedLanguages The list of supported languages.
           */
          init(defaultLanguage, supportedLanguages) {
            this.defaultLanguage = defaultLanguage;
            this.supportedLanguages = supportedLanguages;
            this.language = '';
            // Warning: this subscription will always be alive for the app's lifetime
            this.langChangeSubscription = this.translateService.onLangChange.subscribe((event) => {
              localStorage.setItem(languageKey, event.lang);
            });
          }
          /**
           * Cleans up language change subscription.
           */
          destroy() {
            if (this.langChangeSubscription) {
              this.langChangeSubscription.unsubscribe();
            }
          }
          /**
           * Sets the current language.
           * Note: The current language is saved to the local storage.
           * If no parameter is specified, the language is loaded from local storage (if present).
           * @param language The IETF language code to set.
           */
          set language(language) {
            language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
            let isSupportedLanguage = this.supportedLanguages.includes(language);
            // If no exact match is found, search without the region
            if (language && !isSupportedLanguage) {
              language = language.split('-')[0];
              language =
                this.supportedLanguages.find((supportedLanguage) => supportedLanguage.startsWith(language)) || '';
              isSupportedLanguage = Boolean(language);
            }
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
              language = this.defaultLanguage;
            }
            log.debug(`Language set to ${language}`);
            this.translateService.use(language);
          }
          /**
           * Gets the current language.
           * @return The current language code.
           */
          get language() {
            return this.translateService.currentLang;
          }
        }
        I18nService.ɵfac = function I18nService_Factory(t) {
          return new (t || I18nService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService']
            )
          );
        };
        I18nService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: I18nService,
          factory: I18nService.ɵfac,
          providedIn: 'root',
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              I18nService,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                  args: [
                    {
                      providedIn: 'root',
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__['TranslateService'] }];
              },
              null
            );
        })();

        /***/
      },

    /***/ '2g2N':
      /*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
      /*! exports provided: ToastService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ToastService', function () {
          return ToastService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );

        class ToastService {
          constructor() {
            this.toasts = [];
          }
          // Push new Toasts to array with content and options
          show(textOrTpl, options = {}) {
            this.toasts.push(Object.assign({ textOrTpl }, options));
          }
          // Callback method to remove Toast DOM element from view
          remove(toast) {
            this.toasts = this.toasts.filter((t) => t !== toast);
          }
        }
        ToastService.ɵfac = function ToastService_Factory(t) {
          return new (t || ToastService)();
        };
        ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: ToastService,
          factory: ToastService.ɵfac,
          providedIn: 'root',
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ToastService,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                  args: [
                    {
                      providedIn: 'root',
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ '41cW':
      /*!**************************************************!*\
  !*** ./src/app/@shared/toast/toast.component.ts ***!
  \**************************************************/
      /*! exports provided: ToastComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ToastComponent', function () {
          return ToastComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @app/services/toast.service */ '2g2N'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );

        function ToastComponent_ngb_toast_0_ng_template_2_ng_template_1_Template(rf, ctx) {}
        function ToastComponent_ngb_toast_0_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](0, '\n    ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              ToastComponent_ngb_toast_0_ng_template_2_ng_template_1_Template,
              0,
              0,
              'ng-template',
              4
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2, '\n  ');
          }
          if (rf & 2) {
            const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngTemplateOutlet', toast_r1.textOrTpl);
          }
        }
        function ToastComponent_ngb_toast_0_ng_template_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](0);
          }
          if (rf & 2) {
            const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']().$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](toast_r1.textOrTpl);
          }
        }
        function ToastComponent_ngb_toast_0_Template(rf, ctx) {
          if (rf & 1) {
            const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'ngb-toast', 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'hide',
              function ToastComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r9);
                const toast_r1 = ctx.$implicit;
                const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r8.toastService.remove(toast_r1);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n  ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              ToastComponent_ngb_toast_0_ng_template_2_Template,
              3,
              1,
              'ng-template',
              2
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n\n  ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              4,
              ToastComponent_ngb_toast_0_ng_template_4_Template,
              1,
              1,
              'ng-template',
              null,
              3,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\n');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const toast_r1 = ctx.$implicit;
            const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](5);
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](toast_r1.classname);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('header', toast_r1.headertext)(
              'autohide',
              toast_r1.autohide
            )('delay', toast_r1.delay || 5000);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r0.isTemplate(toast_r1))(
              'ngIfElse',
              _r3
            );
          }
        }
        class ToastComponent {
          constructor(toastService) {
            this.toastService = toastService;
          }
          isTemplate(toast) {
            return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__['TemplateRef'];
          }
        }
        ToastComponent.ɵfac = function ToastComponent_Factory(t) {
          return new (t || ToastComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__['ToastService']
            )
          );
        };
        ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ToastComponent,
          selectors: [['app-toasts']],
          hostVars: 2,
          hostBindings: function ToastComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('ngb-toasts', true);
            }
          },
          decls: 2,
          vars: 1,
          consts: [
            [3, 'header', 'class', 'autohide', 'delay', 'hide', 4, 'ngFor', 'ngForOf'],
            [3, 'header', 'autohide', 'delay', 'hide'],
            [3, 'ngIf', 'ngIfElse'],
            ['text', ''],
            [3, 'ngTemplateOutlet'],
          ],
          template: function ToastComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                0,
                ToastComponent_ngb_toast_0_Template,
                7,
                7,
                'ngb-toast',
                0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.toastService.toasts);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf'],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__['NgbToast'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgTemplateOutlet'],
          ],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdC5jb21wb25lbnQuc2NzcyJ9 */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ToastComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-toasts',
                      templateUrl: './toast.component.html',
                      styleUrls: ['./toast.component.scss'],
                      host: { '[class.ngb-toasts]': 'true' },
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__['ToastService'] }];
              },
              null
            );
        })();

        /***/
      },

    /***/ '4UYq':
      /*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
      /*! exports provided: ShellComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ShellComponent', function () {
          return ShellComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./header/header.component */ 'Wfs9'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );

        class ShellComponent {
          constructor() {}
          ngOnInit() {}
        }
        ShellComponent.ɵfac = function ShellComponent_Factory(t) {
          return new (t || ShellComponent)();
        };
        ShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ShellComponent,
          selectors: [['app-shell']],
          decls: 4,
          vars: 0,
          template: function ShellComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'app-header');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'router-outlet');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n');
            }
          },
          directives: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_1__['HeaderComponent'],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterOutlet'],
          ],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGVsbC5jb21wb25lbnQuc2NzcyJ9 */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ShellComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-shell',
                      templateUrl: './shell.component.html',
                      styleUrls: ['./shell.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [];
              },
              null
            );
        })();

        /***/
      },

    /***/ '4pUk':
      /*!**********************************!*\
  !*** ./src/environments/.env.ts ***!
  \**********************************/
      /*! exports provided: env */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'env', function () {
          return env;
        });
        const env = {
          npm_package_version: '1.0.0',
        };

        /***/
      },

    /***/ '5Pvz':
      /*!*************************************!*\
  !*** ./src/app/config/constants.ts ***!
  \*************************************/
      /*! exports provided: Constants */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Constants', function () {
          return Constants;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @env/environment */ 'AytR'
        );
        // Angular Modules

        class Constants {
          constructor() {
            this.Api_Endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].Api_Endpoint;
            this.Api_Mock_Endpoint = _env_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].Api_Mock_Endpoint;
          }
        }
        Constants.ɵfac = function Constants_Factory(t) {
          return new (t || Constants)();
        };
        Constants.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: Constants,
          factory: Constants.ɵfac,
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              Constants,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ '7R0Y':
      /*!***************************************************!*\
  !*** ./src/app/services/api-endpoints.service.ts ***!
  \***************************************************/
      /*! exports provided: ApiEndpointsService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ApiEndpointsService', function () {
          return ApiEndpointsService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @shared/classes/url-builder */ 'w3tR'
        );
        /* harmony import */ var _shared_classes_query_string_parameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @shared/classes/query-string-parameters */ '+nzw'
        );
        /* harmony import */ var _app_config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @app/config/constants */ '5Pvz'
        );
        // Angular Modules

        // Application Classes

        // Application Constants

        // Returns the api endpoints urls to use in services in a consistent way
        class ApiEndpointsService {
          constructor(
            // Application Constants
            constants
          ) {
            this.constants = constants;
            /* #region EXAMPLES */
            this.getDataByIdEndpoint = (id) => this.createUrlWithPathVariables('data', [id]);
            this.getDataByIdAndCodeEndpoint = (id, code) => this.createUrlWithPathVariables('data', [id, code]);
            // call Mock endpoint
            this.getNewsEndpoint = () => this.createUrl('41gRGwOaw', true);
            this.invalidUrlEndpoint = () => this.createUrl('invalidurl', true);
            // call regular endpoint without boolean true at end
            this.getPersonsEndpoint = () => this.createUrl('Persons');
            // Call API technique https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64
            // call Mock endpoint
            // https://angular-datatables-demo-server.herokuapp.com
            this.getPositionByIdEndpoint = (id) => this.createUrlWithPathVariables('Positions', [id]);
            this.deletePositionByIdEndpoint = (id) => this.createUrlWithPathVariables('Positions', [id]);
            this.postPersonsEndpoint = () => this.createUrl('', true);
            // call regular endpoint without boolean true at end
            // https://localhost:44378/api/v1 (ASP.NET CORE REST API.  Repo https://github.com/workcontrolgit/AngularNgxDataTableBackend)
            this.postPositionsPagedEndpoint = () => this.createUrl('Positions/Paged');
            this.postPositionsEndpoint = () => this.createUrl('Positions');
            this.putPositionsPagedEndpoint = (id) => this.createUrlWithPathVariables('Positions', [id]);
          }
          getDataByIdCodeAndYearEndpoint(id, code, year) {
            const queryString = new _shared_classes_query_string_parameters__WEBPACK_IMPORTED_MODULE_2__[
              'QueryStringParameters'
            ]();
            queryString.push('year', year);
            return `${this.createUrlWithPathVariables('data', [id, code])}?${queryString.toString()}`;
          }
          getProductListByCountryCodeEndpoint(countryCode) {
            return this.createUrlWithQueryParameters('productlist', (qs) => qs.push('countryCode', countryCode));
          }
          getProductListByCountryAndPostalCodeEndpoint(countryCode, postalCode) {
            return this.createUrlWithQueryParameters('productlist', (qs) => {
              qs.push('countryCode', countryCode);
              qs.push('postalCode', postalCode);
            });
          }
          /* #endregion */
          /* #region URL CREATOR */
          // URL
          createUrl(action, isMockAPI = false) {
            const urlBuilder = new _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_1__['UrlBuilder'](
              isMockAPI ? this.constants.Api_Mock_Endpoint : this.constants.Api_Endpoint,
              action
            );
            return urlBuilder.toString();
          }
          // URL WITH QUERY PARAMS
          createUrlWithQueryParameters(action, queryStringHandler) {
            const urlBuilder = new _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_1__['UrlBuilder'](
              this.constants.Api_Endpoint,
              action
            );
            // Push extra query string params
            if (queryStringHandler) {
              queryStringHandler(urlBuilder.queryString);
            }
            return urlBuilder.toString();
          }
          // URL WITH PATH VARIABLES
          createUrlWithPathVariables(action, pathVariables = []) {
            let encodedPathVariablesUrl = '';
            // Push extra path variables
            for (const pathVariable of pathVariables) {
              if (pathVariable !== null) {
                encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
              }
            }
            const urlBuilder = new _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_1__['UrlBuilder'](
              this.constants.Api_Endpoint,
              `${action}${encodedPathVariablesUrl}`
            );
            return urlBuilder.toString();
          }
        }
        ApiEndpointsService.ɵfac = function ApiEndpointsService_Factory(t) {
          return new (t || ApiEndpointsService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _app_config_constants__WEBPACK_IMPORTED_MODULE_3__['Constants']
            )
          );
        };
        ApiEndpointsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: ApiEndpointsService,
          factory: ApiEndpointsService.ɵfac,
          providedIn: 'root',
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ApiEndpointsService,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                  args: [
                    {
                      providedIn: 'root',
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _app_config_constants__WEBPACK_IMPORTED_MODULE_3__['Constants'] }];
              },
              null
            );
        })();

        /***/
      },

    /***/ '8J3p':
      /*!********************************************!*\
  !*** ./src/app/master/master.component.ts ***!
  \********************************************/
      /*! exports provided: MasterComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MasterComponent', function () {
          return MasterComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _app_services_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @app/services/api-http.service */ 'bJRj'
        );
        /* harmony import */ var _app_services_api_endpoints_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @app/services/api-endpoints.service */ '7R0Y'
        );
        /* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core */ 'Txg/');
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../modal-content/modal-content.component */ 'wP4b'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! angular-datatables */ 'njyG'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );

        const _c0 = function (a1) {
          return ['/detail', a1];
        };
        function MasterComponent_tbody_44_tr_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tr');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n              ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'td');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n                ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4, '\n                ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'a', 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7, '\n              ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\n              ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'td');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, '\n              ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'td');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](14, '\n              ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'td');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, '\n            ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const position_r3 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](5, _c0, position_r3.id)
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](position_r3.positionNumber);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](position_r3.positionTitle);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](position_r3.positionDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](position_r3.positionSalary);
          }
        }
        function MasterComponent_tbody_44_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tbody');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n            ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              MasterComponent_tbody_44_tr_2_Template,
              18,
              7,
              'tr',
              14
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n          ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r0.positions);
          }
        }
        function MasterComponent_tbody_46_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'tbody');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n            ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'tr');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n              ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'td', 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5, 'No data!');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\n            ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7, '\n          ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }
        const _c1 = function () {
          return ['/detail'];
        };
        const log = new _core__WEBPACK_IMPORTED_MODULE_3__['Logger']('Master');
        class MasterComponent {
          constructor(apiHttpService, apiEndpointsService, modalService) {
            this.apiHttpService = apiHttpService;
            this.apiEndpointsService = apiEndpointsService;
            this.modalService = modalService;
            this.dtOptions = {};
            this.user = {
              name: 'Izzat Nadiri',
              age: 26,
            };
          }
          ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 10,
              serverSide: true,
              processing: true,
              ajax: (dataTablesParameters, callback) => {
                // Call WebAPI to get positions
                this.apiHttpService
                  .post(this.apiEndpointsService.postPositionsPagedEndpoint(), dataTablesParameters)
                  .subscribe((resp) => {
                    this.positions = resp.data;
                    callback({
                      recordsTotal: resp.recordsTotal,
                      recordsFiltered: resp.recordsFiltered,
                      data: [],
                    });
                  });
              },
              // Set column title and data field
              columns: [
                {
                  title: 'Number',
                  data: 'positionNumber',
                },
                {
                  title: 'Title',
                  data: 'positionTitle',
                },
                {
                  title: 'Description',
                  data: 'positionDescription',
                },
                {
                  title: 'Salary',
                  data: 'positionSalary',
                },
              ],
            };
          }
          openModal() {
            const modalRef = this.modalService.open(
              _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_5__['ModalContentComponent']
            );
            modalRef.componentInstance.user = this.user;
            modalRef.result.then((result) => {
              if (result) {
                console.log(result);
              }
            });
            // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
            //   console.log(receivedEntry);
            // })
          }
        }
        MasterComponent.ɵfac = function MasterComponent_Factory(t) {
          return new (t || MasterComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _app_services_api_http_service__WEBPACK_IMPORTED_MODULE_1__['ApiHttpService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _app_services_api_endpoints_service__WEBPACK_IMPORTED_MODULE_2__['ApiEndpointsService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__['NgbModal']
            )
          );
        };
        MasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: MasterComponent,
          selectors: [['app-master']],
          decls: 59,
          vars: 5,
          consts: [
            [1, 'container-fluid'],
            [1, 'card'],
            [1, 'card-header'],
            [1, 'float-left'],
            [1, 'text-info'],
            [1, 'float-right'],
            [1, 'btn', 'btn-primary', 3, 'routerLink'],
            [1, 'fa', 'fa-plus'],
            [1, 'card-body'],
            [1, 'table-responsive-sm'],
            ['datatable', '', 1, 'table-border', 'hover', 3, 'dtOptions'],
            [4, 'ngIf'],
            [1, 'card-footer'],
            [3, 'click'],
            [4, 'ngFor', 'ngForOf'],
            [3, 'routerLink'],
            ['colspan', '3', 1, 'no-data-available'],
          ],
          template: function MasterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'h3', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, 'Position');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'a', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](14, 'i', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15, ' Add');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](16, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'div', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](20, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'div', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](22, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'table', 10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](25, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'thead');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](27, '\n            ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](28, 'tr');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](29, '\n              ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](30, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](31, 'Position Number');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](32, '\n              ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](33, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](34, 'Position Title');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](35, '\n              ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](37, 'Position Descripton');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](38, '\n              ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](39, 'th');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](40, 'Position Salary');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](41, '\n            ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](42, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](43, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                44,
                MasterComponent_tbody_44_Template,
                4,
                1,
                'tbody',
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](45, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                46,
                MasterComponent_tbody_46_Template,
                8,
                0,
                'tbody',
                11
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](47, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](48, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](49, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](50, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](51, 'div', 12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                52,
                '*Searchable columns are Number, Title and Description'
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](53, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](54, 'button', 13);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function MasterComponent_Template_button_click_54_listener() {
                  return ctx.openModal();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](55, 'open the modal');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](56, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](57, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](58, '\n');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](13);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'routerLink',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](4, _c1)
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('dtOptions', ctx.dtOptions);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](20);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                (ctx.positions == null ? null : ctx.positions.length) != 0
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                (ctx.positions == null ? null : ctx.positions.length) == 0
              );
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__['RouterLinkWithHref'],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__['DataTableDirective'],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__['NgIf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__['NgForOf'],
          ],
          styles: [
            '@charset "UTF-8";\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n}\nq[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 1.2rem;\n  quotes: "\u00AB " " \u00BB";\n}\n  table.dataTable td.dataTables_empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxZQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxhQUFBO0FBRUYiLCJmaWxlIjoibWFzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbnEge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBxdW90ZXM6IFwiwqsgXCIgXCIgwrtcIjtcbn1cblxuOjpuZy1kZWVwIHRhYmxlLmRhdGFUYWJsZSB0ZC5kYXRhVGFibGVzX2VtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              MasterComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-master',
                      templateUrl: './master.component.html',
                      styleUrls: ['./master.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [
                  { type: _app_services_api_http_service__WEBPACK_IMPORTED_MODULE_1__['ApiHttpService'] },
                  { type: _app_services_api_endpoints_service__WEBPACK_IMPORTED_MODULE_2__['ApiEndpointsService'] },
                  { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__['NgbModal'] },
                ];
              },
              null
            );
        })();

        /***/
      },

    /***/ '9urI':
      /*!**********************************!*\
  !*** ./src/app/@shared/index.ts ***!
  \**********************************/
      /*! exports provided: SharedModule, LoaderComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./shared.module */ 'pk6O'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'SharedModule', function () {
          return _shared_module__WEBPACK_IMPORTED_MODULE_0__['SharedModule'];
        });

        /* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./loader/loader.component */ 'ogi/'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'LoaderComponent', function () {
          return _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__['LoaderComponent'];
        });

        /***/
      },

    /***/ 'A/Ql':
      /*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
      /*! exports provided: APP_NAME, Detail, Hello world !, Master, Version, default */
      /***/ function (module) {
        module.exports = JSON.parse(
          '{"APP_NAME":"Scrum and Coke","Detail":"Detail","Hello world !":"Hello world !","Master":"Master","Version":"Version"}'
        );

        /***/
      },

    /***/ AytR:
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'environment', function () {
          return environment;
        });
        /* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.env */ '4pUk');
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        // `.env.ts` is generated by the `npm run env` command
        // `npm run env` exposes environment variables as JSON for any usage you might
        // want, like displaying the version or getting extra config from your CI bot, etc.
        // This is useful for granularity you might need beyond just the environment.
        // Note that as usual, any environment variables you expose through it will end up in your
        // bundle, and you should not use it for any sensitive information like passwords or keys.

        const environment = {
          production: false,
          version: _env__WEBPACK_IMPORTED_MODULE_0__['env'].npm_package_version + '-dev',
          serverUrl: '/api',
          defaultLanguage: 'en-US',
          supportedLanguages: ['en-US'],
          Api_Endpoint: 'https://localhost:44378/api/v1',
          Api_Mock_Endpoint: 'https://angular-datatables-demo-server.herokuapp.com',
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ Nm5a:
      /*!*****************************************!*\
  !*** ./src/app/master/master.module.ts ***!
  \*****************************************/
      /*! exports provided: MasterModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MasterModule', function () {
          return MasterModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ '9urI');
        /* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./master-routing.module */ 'tNAB'
        );
        /* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./master.component */ '8J3p'
        );
        /* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! angular-datatables */ 'njyG'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/forms */ '3Pt+'
        );
        /* harmony import */ var _modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../modal-container/modal-container.component */ 'YM09'
        );
        /* harmony import */ var _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../modal-content/modal-content.component */ 'wP4b'
        );

        class MasterModule {}
        MasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: MasterModule });
        MasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MasterModule_Factory(t) {
            return new (t || MasterModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
              _shared__WEBPACK_IMPORTED_MODULE_3__['SharedModule'],
              _master_routing_module__WEBPACK_IMPORTED_MODULE_4__['MasterRoutingModule'],
              angular_datatables__WEBPACK_IMPORTED_MODULE_6__['DataTablesModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_7__['FormsModule'],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MasterModule, {
              declarations: [
                _master_component__WEBPACK_IMPORTED_MODULE_5__['MasterComponent'],
                _modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_8__['ModalContainerComponent'],
                _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_9__['ModalContentComponent'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                _shared__WEBPACK_IMPORTED_MODULE_3__['SharedModule'],
                _master_routing_module__WEBPACK_IMPORTED_MODULE_4__['MasterRoutingModule'],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__['DataTablesModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__['FormsModule'],
              ],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              MasterModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                  args: [
                    {
                      imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                        _shared__WEBPACK_IMPORTED_MODULE_3__['SharedModule'],
                        _master_routing_module__WEBPACK_IMPORTED_MODULE_4__['MasterRoutingModule'],
                        angular_datatables__WEBPACK_IMPORTED_MODULE_6__['DataTablesModule'],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__['FormsModule'],
                      ],
                      declarations: [
                        _master_component__WEBPACK_IMPORTED_MODULE_5__['MasterComponent'],
                        _modal_container_modal_container_component__WEBPACK_IMPORTED_MODULE_8__[
                          'ModalContainerComponent'
                        ],
                        _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_9__['ModalContentComponent'],
                      ],
                      entryComponents: [
                        _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_9__['ModalContentComponent'],
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ PSy5:
      /*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
      /*! exports provided: Shell */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Shell', function () {
          return Shell;
        });
        /* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./shell.component */ '4UYq'
        );

        /**
         * Provides helper methods to create routes.
         */
        class Shell {
          /**
           * Creates routes using the shell component and authentication.
           * @param routes The routes to add.
           * @return The new route using shell as the base.
           */
          static childRoutes(routes) {
            return {
              path: '',
              component: _shell_component__WEBPACK_IMPORTED_MODULE_0__['ShellComponent'],
              children: routes,
            };
          }
        }

        /***/
      },

    /***/ PXna:
      /*!*******************************!*\
  !*** ./src/app/i18n/index.ts ***!
  \*******************************/
      /*! exports provided: I18nModule, I18nService, LanguageSelectorComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./i18n.module */ 'ngHY'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'I18nModule', function () {
          return _i18n_module__WEBPACK_IMPORTED_MODULE_0__['I18nModule'];
        });

        /* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./i18n.service */ '1YVg'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'I18nService', function () {
          return _i18n_service__WEBPACK_IMPORTED_MODULE_1__['I18nService'];
        });

        /* harmony import */ var _language_selector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./language-selector.component */ 'lJ4U'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'LanguageSelectorComponent',
          function () {
            return _language_selector_component__WEBPACK_IMPORTED_MODULE_2__['LanguageSelectorComponent'];
          }
        );

        /***/
      },

    /***/ Sy1n:
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppComponent', function () {
          return AppComponent;
        });
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 'mrSG');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ 'jhN1'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 'qCKp');
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! rxjs/operators */ 'kU1M'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @env/environment */ 'AytR'
        );
        /* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core */ 'Txg/');
        /* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/i18n */ 'PXna');
        /* harmony import */ var _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./@shared/toast/toast.component */ '41cW'
        );

        const log = new _core__WEBPACK_IMPORTED_MODULE_8__['Logger']('App');
        let AppComponent = class AppComponent {
          constructor(router, activatedRoute, titleService, translateService, i18nService) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.titleService = titleService;
            this.translateService = translateService;
            this.i18nService = i18nService;
          }
          ngOnInit() {
            // Setup logger
            if (_env_environment__WEBPACK_IMPORTED_MODULE_7__['environment'].production) {
              _core__WEBPACK_IMPORTED_MODULE_8__['Logger'].enableProductionMode();
            }
            log.debug('init');
            // Setup translations
            this.i18nService.init(
              _env_environment__WEBPACK_IMPORTED_MODULE_7__['environment'].defaultLanguage,
              _env_environment__WEBPACK_IMPORTED_MODULE_7__['environment'].supportedLanguages
            );
            const onNavigationEnd = this.router.events.pipe(
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['filter'])(
                (event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__['NavigationEnd']
              )
            );
            // Change page title on navigation or language change, based on route data
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__['merge'])(this.translateService.onLangChange, onNavigationEnd)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['map'])(() => {
                  let route = this.activatedRoute;
                  while (route.firstChild) {
                    route = route.firstChild;
                  }
                  return route;
                }),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['filter'])((route) => route.outlet === 'primary'),
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__['switchMap'])((route) => route.data),
                Object(_core__WEBPACK_IMPORTED_MODULE_8__['untilDestroyed'])(this)
              )
              .subscribe((event) => {
                const title = event.title;
                if (title) {
                  this.titleService.setTitle(this.translateService.instant(title));
                }
              });
          }
          ngOnDestroy() {
            this.i18nService.destroy();
          }
        };
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['ActivatedRoute']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['Title']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslateService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _app_i18n__WEBPACK_IMPORTED_MODULE_9__['I18nService']
            )
          );
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineComponent']({
          type: AppComponent,
          selectors: [['app-root']],
          decls: 4,
          vars: 0,
          consts: [['aria-live', 'polite', 'aria-atomic', 'true']],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](0, 'router-outlet');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](1, ' ');
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelement'](2, 'app-toasts', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](3, '\n');
            }
          },
          directives: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterOutlet'],
            _shared_toast_toast_component__WEBPACK_IMPORTED_MODULE_10__['ToastComponent'],
          ],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */',
          ],
        });
        AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__decorate'])(
          [
            Object(_core__WEBPACK_IMPORTED_MODULE_8__['UntilDestroy'])(),
            Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__metadata'])('design:paramtypes', [
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['ActivatedRoute'],
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['Title'],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslateService'],
              _app_i18n__WEBPACK_IMPORTED_MODULE_9__['I18nService'],
            ]),
          ],
          AppComponent
        );

        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
              AppComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'],
                  args: [
                    {
                      selector: 'app-root',
                      templateUrl: './app.component.html',
                      styleUrls: ['./app.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [
                  { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'] },
                  { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['ActivatedRoute'] },
                  { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['Title'] },
                  { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslateService'] },
                  { type: _app_i18n__WEBPACK_IMPORTED_MODULE_9__['I18nService'] },
                ];
              },
              null
            );
        })();

        /***/
      },

    /***/ 'Txg/':
      /*!********************************!*\
  !*** ./src/app/@core/index.ts ***!
  \********************************/
      /*! exports provided: CoreModule, ApiPrefixInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, LogLevel, Logger, UntilDestroy, untilDestroyed */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./core.module */ 'V5UK'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'CoreModule', function () {
          return _core_module__WEBPACK_IMPORTED_MODULE_0__['CoreModule'];
        });

        /* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./http/api-prefix.interceptor */ 'UwRw'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'ApiPrefixInterceptor', function () {
          return _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_1__['ApiPrefixInterceptor'];
        });

        /* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./http/error-handler.interceptor */ 'y8/e'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ErrorHandlerInterceptor',
          function () {
            return _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__['ErrorHandlerInterceptor'];
          }
        );

        /* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./route-reusable-strategy */ '/+EF'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'RouteReusableStrategy', function () {
          return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_3__['RouteReusableStrategy'];
        });

        /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./logger.service */ 'k+XM'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'LogLevel', function () {
          return _logger_service__WEBPACK_IMPORTED_MODULE_4__['LogLevel'];
        });

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'Logger', function () {
          return _logger_service__WEBPACK_IMPORTED_MODULE_4__['Logger'];
        });

        /* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @ngneat/until-destroy */ 'VfN6'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'UntilDestroy', function () {
          return _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__['UntilDestroy'];
        });

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'untilDestroyed', function () {
          return _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__['untilDestroyed'];
        });

        /***/
      },

    /***/ UwRw:
      /*!******************************************************!*\
  !*** ./src/app/@core/http/api-prefix.interceptor.ts ***!
  \******************************************************/
      /*! exports provided: ApiPrefixInterceptor */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ApiPrefixInterceptor', function () {
          return ApiPrefixInterceptor;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @env/environment */ 'AytR'
        );

        /**
         * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
         */
        class ApiPrefixInterceptor {
          intercept(request, next) {
            if (!/^(http|https):/i.test(request.url)) {
              request = request.clone({
                url: _env_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].serverUrl + request.url,
              });
            }
            return next.handle(request);
          }
        }
        ApiPrefixInterceptor.ɵfac = function ApiPrefixInterceptor_Factory(t) {
          return new (t || ApiPrefixInterceptor)();
        };
        ApiPrefixInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: ApiPrefixInterceptor,
          factory: ApiPrefixInterceptor.ɵfac,
          providedIn: 'root',
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ApiPrefixInterceptor,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                  args: [
                    {
                      providedIn: 'root',
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ V5UK:
      /*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
      /*! exports provided: CoreModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'CoreModule', function () {
          return CoreModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */ 'tk/3'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./route-reusable-strategy */ '/+EF'
        );
        /* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./http/api-prefix.interceptor */ 'UwRw'
        );
        /* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./http/error-handler.interceptor */ 'y8/e'
        );
        /* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ../config/constants */ '5Pvz'
        );

        class CoreModule {
          constructor(parentModule) {
            // Import guard
            if (parentModule) {
              throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
            }
          }
        }
        CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: CoreModule });
        CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function CoreModule_Factory(t) {
            return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](CoreModule, 12));
          },
          providers: [
            {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HTTP_INTERCEPTORS'],
              useClass: _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_6__['ApiPrefixInterceptor'],
              multi: true,
            },
            {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HTTP_INTERCEPTORS'],
              useClass: _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_7__['ErrorHandlerInterceptor'],
              multi: true,
            },
            {
              provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouteReuseStrategy'],
              useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__['RouteReusableStrategy'],
            },
            _config_constants__WEBPACK_IMPORTED_MODULE_8__['Constants'],
          ],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClientModule'],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslateModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](CoreModule, {
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClientModule'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslateModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'],
              ],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              CoreModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                  args: [
                    {
                      imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClientModule'],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslateModule'],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'],
                      ],
                      providers: [
                        {
                          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HTTP_INTERCEPTORS'],
                          useClass: _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_6__['ApiPrefixInterceptor'],
                          multi: true,
                        },
                        {
                          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HTTP_INTERCEPTORS'],
                          useClass:
                            _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_7__['ErrorHandlerInterceptor'],
                          multi: true,
                        },
                        {
                          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouteReuseStrategy'],
                          useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__['RouteReusableStrategy'],
                        },
                        _config_constants__WEBPACK_IMPORTED_MODULE_8__['Constants'],
                      ],
                    },
                  ],
                },
              ],
              function () {
                return [
                  {
                    type: CoreModule,
                    decorators: [
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Optional'],
                      },
                      {
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['SkipSelf'],
                      },
                    ],
                  },
                ];
              },
              null
            );
        })();

        /***/
      },

    /***/ Wfs9:
      /*!**************************************************!*\
  !*** ./src/app/shell/header/header.component.ts ***!
  \**************************************************/
      /*! exports provided: HeaderComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HeaderComponent', function () {
          return HeaderComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var _i18n_language_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../i18n/language-selector.component */ 'lJ4U'
        );

        class HeaderComponent {
          constructor() {
            this.menuHidden = true;
          }
          ngOnInit() {}
          toggleMenu() {
            this.menuHidden = !this.menuHidden;
          }
        }
        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)();
        };
        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: HeaderComponent,
          selectors: [['app-header']],
          decls: 41,
          vars: 2,
          consts: [
            [1, 'navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'],
            ['href', '/', 'translate', '', 1, 'navbar-brand'],
            [
              'type',
              'button',
              'aria-controls',
              'navbar-menu',
              'aria-label',
              'Toggle navigation',
              1,
              'navbar-toggler',
              3,
              'click',
            ],
            [1, 'navbar-toggler-icon'],
            ['id', 'navbar-menu', 1, 'collapse', 'navbar-collapse', 'float-xs-none', 3, 'ngbCollapse'],
            [1, 'navbar-nav'],
            ['routerLink', '/master', 'routerLinkActive', 'active', 1, 'nav-item', 'nav-link', 'text-uppercase'],
            [1, 'fas', 'fa-home'],
            ['translate', ''],
            ['routerLink', '/detail', 'routerLinkActive', 'active', 1, 'nav-item', 'nav-link', 'text-uppercase'],
            [1, 'fas', 'fa-question-circle'],
            [1, 'navbar-nav', 'ml-auto'],
            ['inNavbar', 'true', 'menuClass', 'dropdown-menu dropdown-menu-right'],
          ],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'header');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'nav', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'a', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5, 'APP_NAME');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'button', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function HeaderComponent_Template_button_click_7_listener() {
                  return ctx.toggleMenu();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](9, 'span', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'a', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](18, 'i', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'span', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21, 'Master');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](22, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'a', 9);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](25, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](26, 'i', 10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](27, '\n          ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](28, 'span', 8);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](29, 'Detail');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](30, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](31, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](32, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](33, 'div', 11);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](34, '\n        ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](35, 'app-language-selector', 12);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](36, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](37, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](38, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](39, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](40, '\n');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵattribute']('aria-expanded', !ctx.menuHidden);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngbCollapse', ctx.menuHidden);
            }
          },
          directives: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__['NgbNavbar'],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateDirective'],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__['NgbCollapse'],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterLinkWithHref'],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterLinkActive'],
            _i18n_language_selector_component__WEBPACK_IMPORTED_MODULE_4__['LanguageSelectorComponent'],
          ],
          styles: [
            '.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFx0aGVtZVxcdGhlbWUtdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FDRUE7RUFDRSxtQkNvSU87QURsSVQ7QUFDQTtFQUNFLGVBQUE7QUFFRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwbGljYXRpb24gZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4vLyBTZXQgRm9udCBBd2Vzb21lIGZvbnQgcGF0aFxuJGZhLWZvbnQtcGF0aDogXCJ+QGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCb290c3RyYXAgdmFyaWFibGVzXG4vL1xuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHZhcmlhYmxlcyBoZXJlIHRvIHN1aXRlIHlvdXIgdGhlbWUuXG4vLyBDb3B5IHZhcmlhYmxlcyB5b3Ugd2FudCB0byBjdXN0b21pemUgZnJvbSBub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogI2ZmZjtcbiRncmF5LTEwMDogI2Y4ZjlmYTtcbiRncmF5LTIwMDogI2U5ZWNlZjtcbiRncmF5LTMwMDogI2RlZTJlNjtcbiRncmF5LTQwMDogI2NlZDRkYTtcbiRncmF5LTUwMDogI2FkYjViZDtcbiRncmF5LTYwMDogIzg2OGU5NjtcbiRncmF5LTcwMDogIzQ5NTA1NztcbiRncmF5LTgwMDogIzM0M2E0MDtcbiRncmF5LTkwMDogIzIxMjUyOTtcbiRibGFjazogIzAwMDtcblxuJGJsdWU6ICMwMDczZGQ7XG4kaW5kaWdvOiAjNjYxMGYyO1xuJHB1cnBsZTogIzZmNDJjMTtcbiRwaW5rOiAjZTgzZThjO1xuJHJlZDogI2RjMzU0NTtcbiRvcmFuZ2U6ICNmZDdlMTQ7XG4keWVsbG93OiAjZmZjMTA3O1xuJGdyZWVuOiAjMjhhNzQ1O1xuJHRlYWw6ICMyMGM5OTc7XG4kY3lhbjogIzE3YTJiODtcblxuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkYmx1ZSxcbiAgc2Vjb25kYXJ5OiAkZ3JheS02MDAsXG4gIHN1Y2Nlc3M6ICRncmVlbixcbiAgaW5mbzogJGN5YW4sXG4gIHdhcm5pbmc6ICR5ZWxsb3csXG4gIGRhbmdlcjogJHJlZCxcbiAgbGlnaHQ6ICRncmF5LTEwMCxcbiAgZGFyazogJGdyYXktODAwLFxuKTtcblxuLy8gVXNlIEJvb3RzdHJhcCBkZWZhdWx0cyBmb3Igb3RoZXIgdmFyaWFibGVzLCBpbXBvcnRlZCBoZXJlIHNvIHdlIGNhbiBhY2Nlc3MgYWxsIGFwcCB2YXJpYWJsZXMgaW4gb25lIHBsYWNlIHdoZW4gdXNlZFxuLy8gaW4gY29tcG9uZW50cy5cbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvX2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlc1wiO1xuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlcjtcbn1cblxuLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY5ZmEgIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWVjZWYgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWQ0ZGEgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGI1YmQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM2Yzc1N2QgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTUwNTcgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDNhNDAgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAkc2Vjb25kYXJ5LFxuICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgXCJ3YXJuaW5nXCI6ICAgICR3YXJuaW5nLFxuICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgXCJkYXJrXCI6ICAgICAgICRkYXJrXG4gICksXG4gICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogICAgICA4JSAhZGVmYXVsdDtcblxuLy8gVGhlIHlpcSBsaWdodG5lc3MgdmFsdWUgdGhhdCBkZXRlcm1pbmVzIHdoZW4gdGhlIGxpZ2h0bmVzcyBvZiBjb2xvciBjaGFuZ2VzIGZyb20gXCJkYXJrXCIgdG8gXCJsaWdodFwiLiBBY2NlcHRhYmxlIHZhbHVlcyBhcmUgYmV0d2VlbiAwIGFuZCAyNTUuXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAgMTUwICFkZWZhdWx0O1xuXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiR5aXEtdGV4dC1kYXJrOiAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4keWlxLXRleHQtbGlnaHQ6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkLCBubyBsb25nZXIgYWZmZWN0cyBhbnkgY29tcGlsZWQgQ1NTXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcblxuJHJvdW5kZWQtcGlsbDogICAgICAgICAgICAgICAgNTByZW0gIWRlZmF1bHQ7XG5cbiRib3gtc2hhZG93LXNtOiAgICAgICAgICAgICAgIDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGJveC1zaGFkb3ctbGc6ICAgICAgICAgICAgICAgMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kY29tcG9uZW50LWFjdGl2ZS1jb2xvcjogICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY29tcG9uZW50LWFjdGl2ZS1iZzogICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG5cbiRjYXJldC13aWR0aDogICAgICAgICAgICAgICAgIC4zZW0gIWRlZmF1bHQ7XG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG4kY2FyZXQtc3BhY2luZzogICAgICAgICAgICAgICAkY2FyZXQtd2lkdGggKiAuODUgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLWJhc2U6ICAgICAgICAgICAgIGFsbCAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5IC4xNXMgbGluZWFyICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcblxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogKCkgIWRlZmF1bHQ7XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIFwiTGliZXJhdGlvbiBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcblxuJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiR0YWJsZS10aC1mb250LXdlaWdodDogICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiR0YWJsZS1kYXJrLWNvbG9yOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJnOiAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWFjY2VudC1iZzogICAgICAgIHJnYmEoJHdoaXRlLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICAgICAgJHRhYmxlLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1iZzogICAgICAgICByZ2JhKCR3aGl0ZSwgLjA3NSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ib3JkZXItY29sb3I6ICAgICBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKSAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtb3JkZXI6ICAgICAgICAgb2RkICFkZWZhdWx0O1xuXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcblxuJHRhYmxlLWJnLWxldmVsOiAgICAgICAgICAgICAgLTkgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLWxldmVsOiAgICAgICAgICAtNiAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zICsgRm9ybXNcbi8vXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cblxuJGlucHV0LWJ0bi1wYWRkaW5nLXk6ICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6ICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZTogICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAuMjUpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgMCAwIDAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAkbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplLWxnOiAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAkbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1mb250LWZhbWlseTogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplOiAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodDogICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRidG4td2hpdGUtc3BhY2U6ICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIFNldCB0byBgbm93cmFwYCB0byBwcmV2ZW50IHRleHQgd3JhcHBpbmdcblxuJGJ0bi1wYWRkaW5nLXktc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1zbTogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGJ0bi1saW5lLWhlaWdodC1sZzogICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAuMTUpLCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy13aWR0aDogICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIC42NSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6ICAgICAgIGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJ0bi1ibG9jay1zcGFjaW5nLXk6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGJ0bi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDI1JSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAvIDIpICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXkgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1zbSAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15LWxnICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6ICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAgICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlubGluZS1tYXJnaW4teDogICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6ICAgICAgLjMxMjVyZW0gIWRlZmF1bHQ7XG5cbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxMHB4ICFkZWZhdWx0O1xuJGZvcm0tZ3JvdXAtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZm9ybXMtdHJhbnNpdGlvbjogICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1zcGFjZXIteDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZzogICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDUwJSA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJveC1zaGFkb3c6ICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1sYWJlbC1jb2xvcjogICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6ICByZ2JhKHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSwgLjUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6ICAgbnVsbCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1jb2xvcjogICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1ib3gtc2hhZG93OiAgICBudWxsICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNmwyLjk3NCAyLjk5TDggMi4xOTN6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzQnIGhlaWdodD0nNCcgdmlld0JveD0nMCAwIDQgNCc+PHBhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6ICAgbnVsbCAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICA1MCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMicgaGVpZ2h0PScxMicgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NSAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAvIDIgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogICAgICAgICAgICAgICAgICBzdWJ0cmFjdCgkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICogNCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgJGlucHV0LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZzogICAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcbiRjdXN0b20tc2VsZWN0LWZvbnQtd2VpZ2h0OiAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWxpbmUtaGVpZ2h0OiAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWNvbG9yOiAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWRpc2FibGVkLWJnOiAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDhweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICAgICAgICAgIGVzY2FwZS1zdmcoJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yKSByaWdodCAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZSBuby1yZXBlYXQgIWRlZmF1bHQ7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXG5cbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogYWRkKDFlbSAqIC43NSwgKDIgKiAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXkgKiAuNzUpICsgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogICAgICBjZW50ZXIgcmlnaHQgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tc2l6ZTogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXdpZHRoOiAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogICAgICAgICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICAgICAgICAkaW5wdXQtcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZS1sZzogICAgICAgICRpbnB1dC1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAgICAgICAgICAxMDAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1oZWlnaHQ6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3JkZXItcmFkaXVzOiAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgIGluc2V0IDAgLjI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6ICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIC4xcmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgMCAwIDAgMXB4ICRib2R5LWJnLCAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gSUUvRWRnZVxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLWhlaWdodDogICAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkaW5wdXQtZGlzYWJsZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy14ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAgICAgICAgICAgJGlucHV0LWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWNvbG9yOiAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogICAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAgICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogICAgICAgICAgJGN1c3RvbS1maWxlLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICAgICAgICAgICRmb3JtLXRleHQtbWFyZ2luLXRvcCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcblxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogICAgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PScwIDAgMTIgMTInPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZFxuICAgICksXG4gICAgXCJpbnZhbGlkXCI6IChcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgICApLFxuICApLFxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuKTtcblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG5cbi8vIE5hdnNcblxuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTMwMCAkZ3JheS0zMDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtZGl2aWRlci1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuXG5cbi8vIE5hdmJhclxuXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRuYXZiYXItcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbmF2LWxpbmstcGFkZGluZy14OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuLy8gQ29tcHV0ZSB0aGUgbmF2YmFyLWJyYW5kIHBhZGRpbmcteSBzbyB0aGUgbmF2YmFyLWJyYW5kIHdpbGwgaGF2ZSB0aGUgc2FtZSBoZWlnaHQgYXMgbmF2YmFyLXRleHQgYW5kIG5hdi1saW5rXG4kbmF2LWxpbmstaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICAgICAgICAgICAgICAgJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiAgICAgICAgICAgICgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpIC8gMiAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtc2Nyb2xsLW1heC1oZWlnaHQ6ICAgICAgNzV2aCAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICAgICAgICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICRkcm9wZG93bi1pdGVtLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuXG4vLyBQYWdpbmF0aW9uXG5cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1saW5lLWhlaWdodDogICAgICAgICAgICAxLjI1ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggLyAyICFkZWZhdWx0O1xuJGNhcmQtZGVjay1tYXJnaW46ICAgICAgICAgICAgICAgICAgJGNhcmQtZ3JvdXAtbWFyZ2luICFkZWZhdWx0O1xuXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAgICAgICAgICAgICAgICAzICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1nYXA6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtbWFyZ2luOiAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICFkZWZhdWx0O1xuXG5cbi8vIFRvb2x0aXBzXG5cbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZyAhZGVmYXVsdDtcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogICAgICAgJHRvb2x0aXAtb3BhY2l0eSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtYm9yZGVyLXJhZGl1czogJHRvb2x0aXAtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJHBvcG92ZXItaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgc3VidHJhY3QoJHBvcG92ZXItYm9yZGVyLXJhZGl1cywgJHBvcG92ZXItYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KSAhZGVmYXVsdDtcblxuXG4vLyBUb2FzdHNcblxuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNzVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJHRvYXN0LWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogICAgICAgICByZ2JhKDAsIDAsIDAsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIDc1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNGVtICFkZWZhdWx0O1xuJGJhZGdlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRiYWRnZS10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiAhZGVmYXVsdDtcbiRiYWRnZS1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG5cbiRiYWRnZS1waWxsLXBhZGRpbmcteDogICAgICAgICAgICAgIC42ZW0gIWRlZmF1bHQ7XG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4vLyBjdXN0b21pemluZyBwYWRkaW5nIG9yIGZvbnQtc2l6ZSBvbiBsYWJlbHMuXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcblxuXG4vLyBNb2RhbHNcblxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XG4kbW9kYWwtaW5uZXItcGFkZGluZzogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4vLyBNYXJnaW4gYmV0d2VlbiBlbGVtZW50cyBpbiBmb290ZXIsIG11c3QgYmUgbG93ZXIgdGhhbiBvciBlcXVhbCB0byAyICogJG1vZGFsLWlubmVyLXBhZGRpbmdcbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgcmdiYSgkYmxhY2ssIC4yKSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KCRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXMsICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRhbGVydC1iZy1sZXZlbDogICAgICAgICAgICAgICAgICAgIC0xMCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItbGV2ZWw6ICAgICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJGFsZXJ0LWNvbG9yLWxldmVsOiAgICAgICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbiRwcm9ncmVzcy1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAuNzUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci13aWR0aDogICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cblxuLy8gRmlndXJlc1xuXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICA5MCUgIWRlZmF1bHQ7XG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gQnJlYWRjcnVtYnNcblxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBxdW90ZShcIi9cIikgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMjBweCAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNUw0LjI1IDRsMi41LTIuNUw1LjI1IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjVMMy43NSA0bC0yLjUgMi41TDIuNzUgOGw0LTQtNC00eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cblxuLy8gU3Bpbm5lcnNcblxuJHNwaW5uZXItd2lkdGg6ICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodDogICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgLjI1ZW0gIWRlZmF1bHQ7XG5cbiRzcGlubmVyLXdpZHRoLXNtOiAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWhlaWdodC1zbTogICAgICAgJHNwaW5uZXItd2lkdGgtc20gIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IC4yZW0gIWRlZmF1bHQ7XG5cblxuLy8gQ2xvc2VcblxuJGNsb3NlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGNsb3NlLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kY2xvc2UtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2xvc2UtdGV4dC1zaGFkb3c6ICAgICAgICAgICAgICAgICAwIDFweCAwICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgIDg3LjUlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgJHBpbmsgIWRlZmF1bHQ7XG5cbiRrYmQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGtiZC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgLjRyZW0gIWRlZmF1bHQ7XG4ka2JkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAkY29kZS1mb250LXNpemUgIWRlZmF1bHQ7XG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4ka2JkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0OiAgICAgICAgIDM0MHB4ICFkZWZhdWx0O1xuXG5cbi8vIFV0aWxpdGllc1xuXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCwgaW5saW5lLWZsZXggIWRlZmF1bHQ7XG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4gIWRlZmF1bHQ7XG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreSAhZGVmYXVsdDtcbiR1c2VyLXNlbGVjdHM6IGFsbCwgYXV0bywgbm9uZSAhZGVmYXVsdDtcblxuXG4vLyBQcmludGluZ1xuXG4kcHJpbnQtcGFnZS1zaXplOiAgICAgICAgICAgICAgICAgICBhMyAhZGVmYXVsdDtcbiRwcmludC1ib2R5LW1pbi13aWR0aDogICAgICAgICAgICAgIG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIikgIWRlZmF1bHQ7XG4iXX0= */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              HeaderComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-header',
                      templateUrl: './header.component.html',
                      styleUrls: ['./header.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [];
              },
              null
            );
        })();

        /***/
      },

    /***/ YM09:
      /*!**************************************************************!*\
  !*** ./src/app/modal-container/modal-container.component.ts ***!
  \**************************************************************/
      /*! exports provided: ModalContainerComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ModalContainerComponent',
          function () {
            return ModalContainerComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../modal-content/modal-content.component */ 'wP4b'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );

        class ModalContainerComponent {
          constructor(modalService) {
            this.modalService = modalService;
            this.user = {
              name: 'Izzat Nadiri',
              age: 26,
            };
          }
          ngOnInit() {}
          openModal() {
            const modalRef = this.modalService.open(
              _modal_content_modal_content_component__WEBPACK_IMPORTED_MODULE_1__['ModalContentComponent']
            );
            modalRef.componentInstance.user = this.user;
            modalRef.result.then((result) => {
              if (result) {
                console.log(result);
              }
            });
            // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
            //   console.log(receivedEntry);
            // })
          }
        }
        ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) {
          return new (t || ModalContainerComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbModal']
            )
          );
        };
        ModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ModalContainerComponent,
          selectors: [['app-modal-container']],
          decls: 2,
          vars: 0,
          consts: [[3, 'click']],
          template: function ModalContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ModalContainerComponent_Template_button_click_0_listener() {
                  return ctx.openModal();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'open the modal');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
          },
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ModalContainerComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-modal-container',
                      templateUrl: './modal-container.component.html',
                      styleUrls: ['./modal-container.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbModal'] }];
              },
              null
            );
        })();

        /***/
      },

    /***/ ZAI4:
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppModule', function () {
          return AppModule;
        });
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */ 'jhN1'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ '3Pt+'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common/http */ 'tk/3'
        );
        /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/service-worker */ 'Jho9'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @env/environment */ 'AytR'
        );
        /* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core */ 'Txg/');
        /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared */ '9urI');
        /* harmony import */ var _master_master_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./master/master.module */ 'Nm5a'
        );
        /* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./shell/shell.module */ 'ZpN7'
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./app.component */ 'Sy1n'
        );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! ./app-routing.module */ 'vY5A'
        );

        // import { ModalContainerComponent } from './modal-container/modal-container.component';
        // import { ModalContentComponent } from './modal-content/modal-content.component';
        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__['AppComponent']],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
              _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__['ServiceWorkerModule'].register('./ngsw-worker.js', {
                enabled: _env_environment__WEBPACK_IMPORTED_MODULE_7__['environment'].production,
              }),
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_3__['HttpClientModule'],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__['TranslateModule'].forRoot(),
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__['NgbModule'],
              _core__WEBPACK_IMPORTED_MODULE_8__['CoreModule'],
              _shared__WEBPACK_IMPORTED_MODULE_9__['SharedModule'],
              _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__['ShellModule'],
              _master_master_module__WEBPACK_IMPORTED_MODULE_10__['MasterModule'],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_13__['AppRoutingModule'],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](AppModule, {
              declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__['AppComponent']],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__['ServiceWorkerModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__['HttpClientModule'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__['TranslateModule'],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__['NgbModule'],
                _core__WEBPACK_IMPORTED_MODULE_8__['CoreModule'],
                _shared__WEBPACK_IMPORTED_MODULE_9__['SharedModule'],
                _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__['ShellModule'],
                _master_master_module__WEBPACK_IMPORTED_MODULE_10__['MasterModule'],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__['AppRoutingModule'],
              ],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
              AppModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                  args: [
                    {
                      imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__[
                          'ServiceWorkerModule'
                        ].register('./ngsw-worker.js', {
                          enabled: _env_environment__WEBPACK_IMPORTED_MODULE_7__['environment'].production,
                        }),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__['HttpClientModule'],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__['TranslateModule'].forRoot(),
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__['NgbModule'],
                        _core__WEBPACK_IMPORTED_MODULE_8__['CoreModule'],
                        _shared__WEBPACK_IMPORTED_MODULE_9__['SharedModule'],
                        _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__['ShellModule'],
                        _master_master_module__WEBPACK_IMPORTED_MODULE_10__['MasterModule'],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_13__['AppRoutingModule'],
                      ],
                      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__['AppComponent']],
                      providers: [],
                      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__['AppComponent']],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ ZpN7:
      /*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
      /*! exports provided: ShellModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ShellModule', function () {
          return ShellModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/i18n */ 'PXna');
        /* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./shell.component */ '4UYq'
        );
        /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./header/header.component */ 'Wfs9'
        );

        class ShellModule {}
        ShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: ShellModule });
        ShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function ShellModule_Factory(t) {
            return new (t || ShellModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__['NgbModule'],
              _app_i18n__WEBPACK_IMPORTED_MODULE_5__['I18nModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](ShellModule, {
              declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__['HeaderComponent'],
                _shell_component__WEBPACK_IMPORTED_MODULE_6__['ShellComponent'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__['NgbModule'],
                _app_i18n__WEBPACK_IMPORTED_MODULE_5__['I18nModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'],
              ],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ShellModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                  args: [
                    {
                      imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__['NgbModule'],
                        _app_i18n__WEBPACK_IMPORTED_MODULE_5__['I18nModule'],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__['RouterModule'],
                      ],
                      declarations: [
                        _header_header_component__WEBPACK_IMPORTED_MODULE_7__['HeaderComponent'],
                        _shell_component__WEBPACK_IMPORTED_MODULE_6__['ShellComponent'],
                      ],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ bJRj:
      /*!**********************************************!*\
  !*** ./src/app/services/api-http.service.ts ***!
  \**********************************************/
      /*! exports provided: ApiHttpService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ApiHttpService', function () {
          return ApiHttpService;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */ 'tk/3'
        );
        // Angular Modules

        class ApiHttpService {
          constructor(
            // Angular Modules
            http
          ) {
            this.http = http;
            this.get = (url, options) => this.http.get(url, options);
            this.post = (url, data, options) => this.http.post(url, data, options);
            this.put = (url, data, options) => this.http.put(url, data, options);
            this.delete = (url, options) => this.http.delete(url, options);
          }
        }
        ApiHttpService.ɵfac = function ApiHttpService_Factory(t) {
          return new (t || ApiHttpService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient']
            )
          );
        };
        ApiHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: ApiHttpService,
          factory: ApiHttpService.ɵfac,
          providedIn: 'root',
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ApiHttpService,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                  args: [
                    {
                      providedIn: 'root',
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClient'] }];
              },
              null
            );
        })();

        /***/
      },

    /***/ i3Xp:
      /*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var map = {
          './log': 'dZZH',
        };

        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = 'i3Xp';

        /***/
      },

    /***/ 'k+XM':
      /*!*****************************************!*\
  !*** ./src/app/@core/logger.service.ts ***!
  \*****************************************/
      /*! exports provided: LogLevel, Logger */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LogLevel', function () {
          return LogLevel;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Logger', function () {
          return Logger;
        });
        /**
         * Simple logger system with the possibility of registering custom outputs.
         *
         * 4 different log levels are provided, with corresponding methods:
         * - debug   : for debug information
         * - info    : for informative status of the application (success, ...)
         * - warning : for non-critical errors that do not prevent normal application behavior
         * - error   : for critical errors that prevent normal application behavior
         *
         * Example usage:
         * ```
         * import { Logger } from 'app/core/logger.service';
         *
         * const log = new Logger('myFile');
         * ...
         * log.debug('something happened');
         * ```
         *
         * To disable debug and info logs in production, add this snippet to your root component:
         * ```
         * export class AppComponent implements OnInit {
         *   ngOnInit() {
         *     if (environment.production) {
         *       Logger.enableProductionMode();
         *     }
         *     ...
         *   }
         * }
         *
         * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
         */
        /**
         * The possible log levels.
         * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
         */
        var LogLevel;
        (function (LogLevel) {
          LogLevel[(LogLevel['Off'] = 0)] = 'Off';
          LogLevel[(LogLevel['Error'] = 1)] = 'Error';
          LogLevel[(LogLevel['Warning'] = 2)] = 'Warning';
          LogLevel[(LogLevel['Info'] = 3)] = 'Info';
          LogLevel[(LogLevel['Debug'] = 4)] = 'Debug';
        })(LogLevel || (LogLevel = {}));
        class Logger {
          constructor(source) {
            this.source = source;
          }
          /**
           * Enables production mode.
           * Sets logging level to LogLevel.Warning.
           */
          static enableProductionMode() {
            Logger.level = LogLevel.Warning;
          }
          /**
           * Logs messages or objects  with the debug level.
           * Works the same as console.log().
           */
          debug(...objects) {
            this.log(console.log, LogLevel.Debug, objects);
          }
          /**
           * Logs messages or objects  with the info level.
           * Works the same as console.log().
           */
          info(...objects) {
            this.log(console.info, LogLevel.Info, objects);
          }
          /**
           * Logs messages or objects  with the warning level.
           * Works the same as console.log().
           */
          warn(...objects) {
            this.log(console.warn, LogLevel.Warning, objects);
          }
          /**
           * Logs messages or objects  with the error level.
           * Works the same as console.log().
           */
          error(...objects) {
            this.log(console.error, LogLevel.Error, objects);
          }
          log(func, level, objects) {
            if (level <= Logger.level) {
              const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
              func.apply(console, log);
              Logger.outputs.forEach((output) => output.apply(output, [this.source, level, ...objects]));
            }
          }
        }
        /**
         * Current logging level.
         * Set it to LogLevel.Off to disable logs completely.
         */
        Logger.level = LogLevel.Debug;
        /**
         * Additional log outputs.
         */
        Logger.outputs = [];

        /***/
      },

    /***/ lJ4U:
      /*!*****************************************************!*\
  !*** ./src/app/i18n/language-selector.component.ts ***!
  \*****************************************************/
      /*! exports provided: LanguageSelectorComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LanguageSelectorComponent',
          function () {
            return LanguageSelectorComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./i18n.service */ '1YVg'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );

        function LanguageSelectorComponent_a_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'a', 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](2, 'translate');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              '\n    ',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](2, 1, ctx_r0.currentLanguage),
              '\n  '
            );
          }
        }
        function LanguageSelectorComponent_ng_template_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](0, '\n    ');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'button', 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n  ');
          }
          if (rf & 2) {
            const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              '\n      ',
              ctx_r2.currentLanguage,
              '\n    '
            );
          }
        }
        function LanguageSelectorComponent_button_9_Template(rf, ctx) {
          if (rf & 1) {
            const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'button', 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function LanguageSelectorComponent_button_9_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r6);
                const language_r4 = ctx.$implicit;
                const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r5.setLanguage(language_r4);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipe'](2, 'translate');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const language_r4 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              '\n      ',
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpipeBind1'](2, 1, language_r4),
              '\n    '
            );
          }
        }
        const _c0 = function (a0) {
          return { 'nav-item': a0 };
        };
        class LanguageSelectorComponent {
          constructor(i18nService) {
            this.i18nService = i18nService;
            this.inNavbar = false;
            this.menuClass = '';
          }
          ngOnInit() {}
          setLanguage(language) {
            this.i18nService.language = language;
          }
          get currentLanguage() {
            return this.i18nService.language;
          }
          get languages() {
            return this.i18nService.supportedLanguages;
          }
        }
        LanguageSelectorComponent.ɵfac = function LanguageSelectorComponent_Factory(t) {
          return new (t || LanguageSelectorComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _i18n_service__WEBPACK_IMPORTED_MODULE_1__['I18nService']
            )
          );
        };
        LanguageSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: LanguageSelectorComponent,
          selectors: [['app-language-selector']],
          inputs: { inNavbar: 'inNavbar', menuClass: 'menuClass' },
          decls: 13,
          vars: 7,
          consts: [
            ['ngbDropdown', '', 3, 'ngClass'],
            ['id', 'language-dropdown', 'class', 'nav-link', 'ngbDropdownToggle', '', 4, 'ngIf', 'ngIfElse'],
            ['button', ''],
            ['ngbDropdownMenu', '', 'aria-labelledby', 'language-dropdown', 3, 'ngClass'],
            ['class', 'dropdown-item', 3, 'click', 4, 'ngFor', 'ngForOf'],
            ['id', 'language-dropdown', 'ngbDropdownToggle', '', 1, 'nav-link'],
            ['id', 'language-dropdown', 'ngbDropdownToggle', '', 1, 'btn', 'btn-sm', 'btn-secondary'],
            [1, 'dropdown-item', 3, 'click'],
          ],
          template: function LanguageSelectorComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                LanguageSelectorComponent_a_2_Template,
                3,
                3,
                'a',
                1
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                4,
                LanguageSelectorComponent_ng_template_4_Template,
                4,
                1,
                'ng-template',
                null,
                2,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                9,
                LanguageSelectorComponent_button_9_Template,
                3,
                3,
                'button',
                4
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, '\n');
            }
            if (rf & 2) {
              const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵreference'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngClass',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](5, _c0, ctx.inNavbar)
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.inNavbar)('ngIfElse', _r1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngClass', ctx.menuClass);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.languages);
            }
          },
          directives: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbDropdown'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgClass'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgIf'],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbDropdownMenu'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf'],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbDropdownToggle'],
          ],
          pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__['TranslatePipe']],
          styles: [
            '.nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmd1YWdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6Imxhbmd1YWdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              LanguageSelectorComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-language-selector',
                      templateUrl: './language-selector.component.html',
                      styleUrls: ['./language-selector.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _i18n_service__WEBPACK_IMPORTED_MODULE_1__['I18nService'] }];
              },
              {
                inNavbar: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
                menuClass: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
              }
            );
        })();

        /***/
      },

    /***/ ngHY:
      /*!*************************************!*\
  !*** ./src/app/i18n/i18n.module.ts ***!
  \*************************************/
      /*! exports provided: I18nModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'I18nModule', function () {
          return I18nModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ngx-translate/core */ 'sYmb'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _language_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./language-selector.component */ 'lJ4U'
        );

        class I18nModule {}
        I18nModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: I18nModule });
        I18nModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function I18nModule_Factory(t) {
            return new (t || I18nModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__['NgbModule'],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](I18nModule, {
              declarations: [_language_selector_component__WEBPACK_IMPORTED_MODULE_4__['LanguageSelectorComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__['NgbModule'],
              ],
              exports: [_language_selector_component__WEBPACK_IMPORTED_MODULE_4__['LanguageSelectorComponent']],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              I18nModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                  args: [
                    {
                      imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__['TranslateModule'],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__['NgbModule'],
                      ],
                      declarations: [
                        _language_selector_component__WEBPACK_IMPORTED_MODULE_4__['LanguageSelectorComponent'],
                      ],
                      exports: [_language_selector_component__WEBPACK_IMPORTED_MODULE_4__['LanguageSelectorComponent']],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ 'ogi/':
      /*!****************************************************!*\
  !*** ./src/app/@shared/loader/loader.component.ts ***!
  \****************************************************/
      /*! exports provided: LoaderComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'LoaderComponent', function () {
          return LoaderComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );

        class LoaderComponent {
          constructor() {
            this.isLoading = false;
          }
          ngOnInit() {}
        }
        LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
          return new (t || LoaderComponent)();
        };
        LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: LoaderComponent,
          selectors: [['app-loader']],
          inputs: { isLoading: 'isLoading', message: 'message' },
          decls: 8,
          vars: 2,
          consts: [
            [1, 'text-xs-center', 3, 'hidden'],
            [1, 'fas', 'fa-cog', 'fa-spin', 'fa-3x'],
          ],
          template: function LoaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'i', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, ' ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'span');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](7, '\n');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('hidden', !ctx.isLoading);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.message);
            }
          },
          styles: [
            '.fa[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iXX0= */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              LoaderComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-loader',
                      templateUrl: './loader.component.html',
                      styleUrls: ['./loader.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [];
              },
              {
                isLoading: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
                message: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
              }
            );
        })();

        /***/
      },

    /***/ pk6O:
      /*!******************************************!*\
  !*** ./src/app/@shared/shared.module.ts ***!
  \******************************************/
      /*! exports provided: SharedModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SharedModule', function () {
          return SharedModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./loader/loader.component */ 'ogi/'
        );
        /* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./confirmation-dialog/confirmation-dialog.component */ 't10e'
        );
        /* harmony import */ var _toast_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./toast/toast.component */ '41cW'
        );

        class SharedModule {}
        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: SharedModule });
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)();
          },
          providers: [],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbModule'],
            ],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](SharedModule, {
              declarations: [
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__['LoaderComponent'],
                _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__[
                  'ConfirmationDialogComponent'
                ],
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_5__['ToastComponent'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbModule'],
              ],
              exports: [
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__['LoaderComponent'],
                _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__[
                  'ConfirmationDialogComponent'
                ],
                _toast_toast_component__WEBPACK_IMPORTED_MODULE_5__['ToastComponent'],
              ],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              SharedModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                  args: [
                    {
                      imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__['NgbModule'],
                      ],
                      declarations: [
                        _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__['LoaderComponent'],
                        _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__[
                          'ConfirmationDialogComponent'
                        ],
                        _toast_toast_component__WEBPACK_IMPORTED_MODULE_5__['ToastComponent'],
                      ],
                      exports: [
                        _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__['LoaderComponent'],
                        _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_4__[
                          'ConfirmationDialogComponent'
                        ],
                        _toast_toast_component__WEBPACK_IMPORTED_MODULE_5__['ToastComponent'],
                      ],
                      providers: [],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ t10e:
      /*!******************************************************************************!*\
  !*** ./src/app/@shared/confirmation-dialog/confirmation-dialog.component.ts ***!
  \******************************************************************************/
      /*! exports provided: ConfirmationDialogComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ConfirmationDialogComponent',
          function () {
            return ConfirmationDialogComponent;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );

        class ConfirmationDialogComponent {
          constructor(activeModal) {
            this.activeModal = activeModal;
          }
          ngOnInit() {}
          decline() {
            this.activeModal.close(false);
          }
          accept() {
            this.activeModal.close(true);
          }
          dismiss() {
            this.activeModal.dismiss();
          }
        }
        ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) {
          return new (t || ConfirmationDialogComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__['NgbActiveModal']
            )
          );
        };
        ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ConfirmationDialogComponent,
          selectors: [['app-confirmation-dialog']],
          inputs: { title: 'title', message: 'message', btnOkText: 'btnOkText', btnCancelText: 'btnCancelText' },
          decls: 24,
          vars: 4,
          consts: [
            [1, 'modal-header'],
            [1, 'modal-title'],
            ['type', 'button', 'aria-label', 'Close', 1, 'close', 3, 'click'],
            ['aria-hidden', 'true'],
            [1, 'modal-body'],
            [1, 'modal-footer'],
            ['type', 'button', 1, 'btn', 'btn-secondary', 3, 'click'],
            ['type', 'button', 1, 'btn', 'btn-primary', 3, 'click'],
          ],
          template: function ConfirmationDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h4', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'button', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ConfirmationDialogComponent_Template_button_click_5_listener() {
                  return ctx.dismiss();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'span', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\u00D7');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](14, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](16, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'button', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ConfirmationDialogComponent_Template_button_click_17_listener() {
                  return ctx.decline();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'button', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ConfirmationDialogComponent_Template_button_click_20_listener() {
                  return ctx.accept();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](22, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](23, '\n');
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.title);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](10);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1']('\n  ', ctx.message, '\n');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.btnCancelText);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.btnOkText);
            }
          },
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ConfirmationDialogComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-confirmation-dialog',
                      templateUrl: './confirmation-dialog.component.html',
                      styleUrls: ['./confirmation-dialog.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__['NgbActiveModal'] }];
              },
              {
                title: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
                message: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
                btnOkText: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
                btnCancelText: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
              }
            );
        })();

        /***/
      },

    /***/ tNAB:
      /*!*************************************************!*\
  !*** ./src/app/master/master-routing.module.ts ***!
  \*************************************************/
      /*! exports provided: MasterRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MasterRoutingModule', function () {
          return MasterRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @biesbjerg/ngx-translate-extract-marker */ '4u49'
        );
        /* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./master.component */ '8J3p'
        );
        /* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @app/shell/shell.service */ 'PSy5'
        );

        const routes = [
          _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__['Shell'].childRoutes([
            { path: '', redirectTo: '/master', pathMatch: 'full' },
            {
              path: 'master',
              component: _master_component__WEBPACK_IMPORTED_MODULE_3__['MasterComponent'],
              data: {
                title: Object(_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__['marker'])('Master'),
              },
            },
          ]),
        ];
        class MasterRoutingModule {}
        MasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: MasterRoutingModule,
        });
        MasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MasterRoutingModule_Factory(t) {
            return new (t || MasterRoutingModule)();
          },
          providers: [],
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MasterRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              MasterRoutingModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                  args: [
                    {
                      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)],
                      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                      providers: [],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ vY5A:
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppRoutingModule', function () {
          return AppRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        );
        /* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @app/shell/shell.service */ 'PSy5'
        );

        const routes = [
          _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__['Shell'].childRoutes([
            {
              path: 'detail',
              loadChildren: () =>
                __webpack_require__
                  .e(/*! import() | detail-detail-module */ 'detail-detail-module')
                  .then(__webpack_require__.bind(null, /*! ./detail/detail.module */ 'lM0Z'))
                  .then((m) => m.DetailModule),
            },
          ]),
          // Fallback when no prior route is matched
          { path: '**', redirectTo: '', pathMatch: 'full' },
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: AppRoutingModule,
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          providers: [],
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__['PreloadAllModules'],
              }),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
          ],
        });
        (function () {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AppRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
            });
        })();
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              AppRoutingModule,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                  args: [
                    {
                      imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes, {
                          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__['PreloadAllModules'],
                        }),
                      ],
                      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
                      providers: [],
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ w3tR:
      /*!************************************************!*\
  !*** ./src/app/@shared/classes/url-builder.ts ***!
  \************************************************/
      /*! exports provided: UrlBuilder */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UrlBuilder', function () {
          return UrlBuilder;
        });
        /* harmony import */ var _query_string_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./query-string-parameters */ '+nzw'
        );
        // Application Classes

        class UrlBuilder {
          constructor(baseUrl, action, queryString) {
            this.baseUrl = baseUrl;
            this.action = action;
            this.url = [baseUrl, action].join('/');
            this.queryString =
              queryString || new _query_string_parameters__WEBPACK_IMPORTED_MODULE_0__['QueryStringParameters']();
          }
          toString() {
            const qs = this.queryString ? this.queryString.toString() : '';
            return qs ? `${this.url}?${qs}` : this.url;
          }
        }

        /***/
      },

    /***/ wP4b:
      /*!**********************************************************!*\
  !*** ./src/app/modal-content/modal-content.component.ts ***!
  \**********************************************************/
      /*! exports provided: ModalContentComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ModalContentComponent', function () {
          return ModalContentComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @ng-bootstrap/ng-bootstrap */ '1kSV'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ '3Pt+'
        );

        class ModalContentComponent {
          //@Output() passEntry: EventEmitter<any> = new EventEmitter();
          constructor(activeModal) {
            this.activeModal = activeModal;
          }
          ngOnInit() {
            console.log(this.user);
          }
          passBack() {
            //this.passEntry.emit(this.user);
            this.activeModal.close(this.user);
          }
        }
        ModalContentComponent.ɵfac = function ModalContentComponent_Factory(t) {
          return new (t || ModalContentComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__['NgbActiveModal']
            )
          );
        };
        ModalContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ModalContentComponent,
          selectors: [['app-modal-content']],
          inputs: { user: 'user' },
          decls: 21,
          vars: 2,
          consts: [
            [1, 'modal-header'],
            ['id', 'modal-basic-title', 1, 'modal-title'],
            ['type', 'button', 'aria-label', 'Close', 1, 'close', 3, 'click'],
            ['aria-hidden', 'true'],
            [1, 'modal-body'],
            ['type', 'text', 3, 'ngModel', 'ngModelChange'],
            ['type', 'number', 3, 'ngModel', 'ngModelChange'],
            ['type', 'submit', 1, 'btn', 'btn-primary', 'w-100', 3, 'click'],
          ],
          template: function ModalContentComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h4', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, 'Simple modal');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'button', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ModalContentComponent_Template_button_click_5_listener() {
                  return ctx.activeModal.dismiss('Cross click');
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, '\n      ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'span', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, '\u00D7');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](11, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'div', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'input', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngModelChange',
                function ModalContentComponent_Template_input_ngModelChange_14_listener($event) {
                  return (ctx.user.name = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](16, 'input', 6);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'ngModelChange',
                function ModalContentComponent_Template_input_ngModelChange_16_listener($event) {
                  return (ctx.user.age = $event);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](17, '\n    ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'button', 7);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ModalContentComponent_Template_button_click_18_listener() {
                  return ctx.passBack();
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, 'Pass back');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](20, '\n  ');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](14);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngModel', ctx.user.name);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngModel', ctx.user.age);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgModel'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NumberValueAccessor'],
          ],
          styles: [
            '.modal-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vZGFsLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0FBRUoiLCJmaWxlIjoibW9kYWwtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufSJdfQ== */',
          ],
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ModalContentComponent,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                  args: [
                    {
                      selector: 'app-modal-content',
                      templateUrl: './modal-content.component.html',
                      styleUrls: ['./modal-content.component.scss'],
                    },
                  ],
                },
              ],
              function () {
                return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__['NgbActiveModal'] }];
              },
              {
                user: [
                  {
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  },
                ],
              }
            );
        })();

        /***/
      },

    /***/ 'y8/e':
      /*!*********************************************************!*\
  !*** ./src/app/@core/http/error-handler.interceptor.ts ***!
  \*********************************************************/
      /*! exports provided: ErrorHandlerInterceptor */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ErrorHandlerInterceptor',
          function () {
            return ErrorHandlerInterceptor;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */ 'kU1M'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @env/environment */ 'AytR'
        );
        /* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../logger.service */ 'k+XM'
        );

        const log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__['Logger']('ErrorHandlerInterceptor');
        /**
         * Adds a default error handler to all requests.
         */
        class ErrorHandlerInterceptor {
          intercept(request, next) {
            return next
              .handle(request)
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__['catchError'])((error) => this.errorHandler(error))
              );
          }
          // Customize the default error handler here if needed
          errorHandler(response) {
            if (!_env_environment__WEBPACK_IMPORTED_MODULE_2__['environment'].production) {
              // Do something with the error
              log.error('Request error', response);
            }
            throw response;
          }
        }
        ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) {
          return new (t || ErrorHandlerInterceptor)();
        };
        ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjectable']({
          token: ErrorHandlerInterceptor,
          factory: ErrorHandlerInterceptor.ɵfac,
          providedIn: 'root',
        });
        (function () {
          (typeof ngDevMode === 'undefined' || ngDevMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
              ErrorHandlerInterceptor,
              [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                  args: [
                    {
                      providedIn: 'root',
                    },
                  ],
                },
              ],
              null,
              null
            );
        })();

        /***/
      },

    /***/ zUnb:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        );
        /* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @env/environment */ 'AytR'
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ 'ZAI4'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ 'jhN1'
        );
        /*
         * Entry point of the application.
         * Only platform bootstrapping code should be here.
         * For app-specific initialization, use `app/app.component.ts`.
         */

        if (_env_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['platformBrowser']()
          .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
          .catch((err) => console.error(err));

        /***/
      },

    /***/ zn8P:
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = 'zn8P';

        /***/
      },
  },
  [[0, 'runtime', 'vendor']],
]);
//# sourceMappingURL=main.js.map
