/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(184);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_0__directives__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fragments__ = __webpack_require__(185);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__fragments__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getFromAST__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__getFromAST__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transform__ = __webpack_require__(186);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__transform__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_3__transform__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storeUtils__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_4__storeUtils__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_assign__ = __webpack_require__(80);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__util_assign__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_cloneDeep__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_environment__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_7__util_environment__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_7__util_environment__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_errorHandling__ = __webpack_require__(187);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_8__util_errorHandling__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_8__util_errorHandling__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__util_isEqual__ = __webpack_require__(188);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_9__util_isEqual__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_maybeDeepFreeze__ = __webpack_require__(189);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_10__util_maybeDeepFreeze__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_warnOnce__ = __webpack_require__(190);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_11__util_warnOnce__["a"]; });












//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = getMutationDefinition;
/* harmony export (immutable) */ __webpack_exports__["a"] = checkDocument;
/* harmony export (immutable) */ __webpack_exports__["h"] = getOperationName;
/* harmony export (immutable) */ __webpack_exports__["d"] = getFragmentDefinitions;
/* harmony export (immutable) */ __webpack_exports__["i"] = getQueryDefinition;
/* harmony export (immutable) */ __webpack_exports__["g"] = getOperationDefinition;
/* unused harmony export getFragmentDefinition */
/* harmony export (immutable) */ __webpack_exports__["b"] = createFragmentMap;
/* harmony export (immutable) */ __webpack_exports__["e"] = getFragmentQueryDocument;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDefaultValues;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_storeUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_assign__ = __webpack_require__(5);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = null;
    doc.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation') {
            mutationDef = definition;
        }
    });
    if (!mutationDef) {
        throw new Error('Must contain a mutation definition.');
    }
    return mutationDef;
}
function checkDocument(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    var foundOperation = false;
    doc.definitions.forEach(function (definition) {
        switch (definition.kind) {
            case 'FragmentDefinition':
                break;
            case 'OperationDefinition':
                if (foundOperation) {
                    throw new Error('Queries must have exactly one operation definition.');
                }
                foundOperation = true;
                break;
            default:
                throw new Error("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
    });
}
function getOperationName(doc) {
    var res = null;
    doc.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition' && definition.name) {
            res = definition.name.value;
        }
    });
    return res;
}
function getFragmentDefinitions(doc) {
    var fragmentDefinitions = doc.definitions.filter(function (definition) {
        if (definition.kind === 'FragmentDefinition') {
            return true;
        }
        else {
            return false;
        }
    });
    return fragmentDefinitions;
}
function getQueryDefinition(doc) {
    checkDocument(doc);
    var queryDef = null;
    doc.definitions.map(function (definition) {
        if (definition.kind === 'OperationDefinition' &&
            definition.operation === 'query') {
            queryDef = definition;
        }
    });
    if (!queryDef) {
        throw new Error('Must contain a query definition.');
    }
    return queryDef;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    var opDef = null;
    doc.definitions.map(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            opDef = definition;
        }
    });
    if (!opDef) {
        throw new Error('Must contain a query definition.');
    }
    return opDef;
}
function getFragmentDefinition(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    if (doc.definitions.length > 1) {
        throw new Error('Fragment must have exactly one definition.');
    }
    var fragmentDef = doc.definitions[0];
    if (fragmentDef.kind !== 'FragmentDefinition') {
        throw new Error('Must be a fragment definition.');
    }
    return fragmentDef;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw new Error("Found a " + definition.operation + " operation" + (definition.name
                ? " named '" + definition.name.value + "'"
                : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        if (fragments.length !== 1) {
            throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        }
        actualFragmentName = fragments[0].name.value;
    }
    var query = __assign({}, document, { definitions: [
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ].concat(document.definitions) });
    return query;
}
function getDefaultValues(definition) {
    if (definition.variableDefinitions && definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            Object(__WEBPACK_IMPORTED_MODULE_0__data_storeUtils__["j" /* valueToObjectRepresentation */])(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return __WEBPACK_IMPORTED_MODULE_1__util_assign__["a" /* assign */].apply(void 0, [{}].concat(defaultValues));
    }
    return {};
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["j"] = valueToObjectRepresentation;
/* harmony export (immutable) */ __webpack_exports__["h"] = storeKeyNameFromField;
/* harmony export (immutable) */ __webpack_exports__["a"] = getStoreKeyName;
/* harmony export (immutable) */ __webpack_exports__["g"] = resultKeyNameFromField;
/* harmony export (immutable) */ __webpack_exports__["c"] = isField;
/* harmony export (immutable) */ __webpack_exports__["e"] = isInlineFragment;
/* harmony export (immutable) */ __webpack_exports__["b"] = graphQLResultHasError;
/* harmony export (immutable) */ __webpack_exports__["d"] = isIdValue;
/* harmony export (immutable) */ __webpack_exports__["i"] = toIdValue;
/* harmony export (immutable) */ __webpack_exports__["f"] = isJsonValue;
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else {
        throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value
            .kind + "\" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.");
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    if (args) {
        var stringifiedArgs = JSON.stringify(args);
        return fieldName + "(" + stringifiedArgs + ")";
    }
    return fieldName;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
function isIdValue(idObject) {
    return (idObject != null &&
        typeof idObject === 'object' &&
        idObject.type === 'id');
}
function toIdValue(id, generated) {
    if (generated === void 0) { generated = false; }
    return {
        type: 'id',
        id: id,
        generated: generated,
    };
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(90);
} else {
  module.exports = require('./cjs/react.development.js');
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}
//# sourceMappingURL=assign.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export getEnv */
/* unused harmony export isEnv */
/* harmony export (immutable) */ __webpack_exports__["b"] = isProduction;
/* harmony export (immutable) */ __webpack_exports__["a"] = isDevelopment;
/* harmony export (immutable) */ __webpack_exports__["c"] = isTest;
function getEnv() {
    if (typeof process !== 'undefined' && "production") {
        return "production";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}
//# sourceMappingURL=environment.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ID_KEY */
/* harmony export (immutable) */ __webpack_exports__["b"] = readQueryFromStore;
/* harmony export (immutable) */ __webpack_exports__["a"] = diffQueryAgainstStore;
/* unused harmony export assertIdValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_anywhere___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storeUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_getFromAST__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isEqual__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_assign__ = __webpack_require__(5);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var ID_KEY = typeof Symbol !== 'undefined' ? Symbol('id') : '@@id';
function readQueryFromStore(options) {
    var optsPatch = { returnPartialData: false };
    return diffQueryAgainstStore(__assign({}, options, optsPatch)).result;
}
var readStoreResolver = function (fieldName, idValue, args, context, _a) {
    var resultKey = _a.resultKey, directives = _a.directives;
    assertIdValue(idValue);
    var objId = idValue.id;
    var obj = context.store[objId];
    var storeKeyName = Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["a" /* getStoreKeyName */])(fieldName, args, directives);
    var fieldValue = (obj || {})[storeKeyName];
    if (typeof fieldValue === 'undefined') {
        if (context.customResolvers &&
            obj &&
            (obj.__typename || objId === 'ROOT_QUERY')) {
            var typename = obj.__typename || 'Query';
            var type = context.customResolvers[typename];
            if (type) {
                var resolver = type[fieldName];
                if (resolver) {
                    fieldValue = resolver(obj, args);
                }
            }
        }
        if (typeof fieldValue === 'undefined') {
            if (!context.returnPartialData) {
                throw new Error("Can't find field " + storeKeyName + " on object (" + objId + ") " + JSON.stringify(obj, null, 2) + ".");
            }
            context.hasMissingField = true;
            return fieldValue;
        }
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["f" /* isJsonValue */])(fieldValue)) {
        if (idValue.previousResult &&
            Object(__WEBPACK_IMPORTED_MODULE_3__util_isEqual__["a" /* isEqual */])(idValue.previousResult[resultKey], fieldValue.json)) {
            return idValue.previousResult[resultKey];
        }
        return fieldValue.json;
    }
    if (idValue.previousResult) {
        fieldValue = addPreviousResultToIdValues(fieldValue, idValue.previousResult[resultKey]);
    }
    return fieldValue;
};
function diffQueryAgainstStore(_a) {
    var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_2__queries_getFromAST__["i" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_4__util_assign__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_2__queries_getFromAST__["c" /* getDefaultValues */])(queryDefinition), variables);
    var context = {
        store: store,
        returnPartialData: returnPartialData,
        customResolvers: (config && config.customResolvers) || {},
        hasMissingField: false,
    };
    var rootIdValue = {
        type: 'id',
        id: rootId,
        previousResult: previousResult,
    };
    var result = __WEBPACK_IMPORTED_MODULE_0_graphql_anywhere___default()(readStoreResolver, query, rootIdValue, context, variables, {
        fragmentMatcher: fragmentMatcherFunction,
        resultMapper: resultMapper,
    });
    return {
        result: result,
        isMissing: context.hasMissingField,
    };
}
function assertIdValue(idValue) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(idValue)) {
        throw new Error("Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
    }
}
function addPreviousResultToIdValues(value, previousResult) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(value)) {
        return __assign({}, value, { previousResult: previousResult });
    }
    else if (Array.isArray(value)) {
        var idToPreviousResult_1 = {};
        if (Array.isArray(previousResult)) {
            previousResult.forEach(function (item) {
                if (item && item[ID_KEY]) {
                    idToPreviousResult_1[item[ID_KEY]] = item;
                }
            });
        }
        return value.map(function (item, i) {
            var itemPreviousResult = previousResult && previousResult[i];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(item)) {
                itemPreviousResult = idToPreviousResult_1[item.id] || itemPreviousResult;
            }
            return addPreviousResultToIdValues(item, itemPreviousResult);
        });
    }
    return value;
}
function resultMapper(resultFields, idValue) {
    if (idValue.previousResult) {
        var currentResultKeys_1 = Object.keys(resultFields);
        var sameAsPreviousResult = Object.keys(idValue.previousResult).reduce(function (sameKeys, key) { return sameKeys && currentResultKeys_1.indexOf(key) > -1; }, true) &&
            currentResultKeys_1.reduce(function (same, key) {
                return same &&
                    areNestedArrayItemsStrictlyEqual(resultFields[key], idValue.previousResult[key]);
            }, true);
        if (sameAsPreviousResult) {
            return idValue.previousResult;
        }
    }
    Object.defineProperty(resultFields, ID_KEY, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: idValue.id,
    });
    return resultFields;
}
function areNestedArrayItemsStrictlyEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
        return false;
    }
    return a.reduce(function (same, item, i) { return same && areNestedArrayItemsStrictlyEqual(item, b[i]); }, true);
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addTypenameToDocument;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeConnectionDirectiveFromDocument;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getFromAST__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_cloneDeep__ = __webpack_require__(163);


var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function addTypenameToSelectionSet(selectionSet, isRoot) {
    if (isRoot === void 0) { isRoot = false; }
    if (selectionSet.selections) {
        if (!isRoot) {
            var alreadyHasThisField = selectionSet.selections.some(function (selection) {
                return (selection.kind === 'Field' &&
                    selection.name.value === '__typename');
            });
            if (!alreadyHasThisField) {
                selectionSet.selections.push(TYPENAME_FIELD);
            }
        }
        selectionSet.selections.forEach(function (selection) {
            if (selection.kind === 'Field') {
                if (selection.name.value.lastIndexOf('__', 0) !== 0 &&
                    selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
            else if (selection.kind === 'InlineFragment') {
                if (selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
        });
    }
}
function removeConnectionDirectiveFromSelectionSet(selectionSet) {
    if (selectionSet.selections) {
        selectionSet.selections.forEach(function (selection) {
            if (selection.kind === 'Field' &&
                selection &&
                selection.directives) {
                selection.directives = selection.directives.filter(function (directive) {
                    var willRemove = directive.name.value === 'connection';
                    if (willRemove) {
                        if (!directive.arguments ||
                            !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                            console.warn('Removing an @connection directive even though it does not have a key. ' +
                                'You may want to use the key parameter to specify a store key.');
                        }
                    }
                    return !willRemove;
                });
            }
        });
        selectionSet.selections.forEach(function (selection) {
            if (selection.kind === 'Field') {
                if (selection.selectionSet) {
                    removeConnectionDirectiveFromSelectionSet(selection.selectionSet);
                }
            }
            else if (selection.kind === 'InlineFragment') {
                if (selection.selectionSet) {
                    removeConnectionDirectiveFromSelectionSet(selection.selectionSet);
                }
            }
        });
    }
}
function addTypenameToDocument(doc) {
    Object(__WEBPACK_IMPORTED_MODULE_0__getFromAST__["a" /* checkDocument */])(doc);
    var docClone = Object(__WEBPACK_IMPORTED_MODULE_1__util_cloneDeep__["a" /* cloneDeep */])(doc);
    docClone.definitions.forEach(function (definition) {
        var isRoot = definition.kind === 'OperationDefinition';
        addTypenameToSelectionSet(definition.selectionSet, isRoot);
    });
    return docClone;
}
function removeConnectionDirectiveFromDocument(doc) {
    Object(__WEBPACK_IMPORTED_MODULE_0__getFromAST__["a" /* checkDocument */])(doc);
    var docClone = Object(__WEBPACK_IMPORTED_MODULE_1__util_cloneDeep__["a" /* cloneDeep */])(doc);
    docClone.definitions.forEach(function (definition) {
        removeConnectionDirectiveFromSelectionSet(definition.selectionSet);
    });
    return docClone;
}
//# sourceMappingURL=queryTransform.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = writeQueryToStore;
/* harmony export (immutable) */ __webpack_exports__["b"] = writeResultToStore;
/* unused harmony export writeSelectionSetToStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storeUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_directives__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_environment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_assign__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var WriteError = (function (_super) {
    __extends(WriteError, _super);
    function WriteError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'WriteError';
        return _this;
    }
    return WriteError;
}(Error));
function enhanceErrorWithDocument(error, document) {
    var enhancedError = new WriteError("Error writing result to store for query " + (document.loc &&
        document.loc.source &&
        document.loc.source.body));
    enhancedError.message += '/n' + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
}
function writeQueryToStore(_a) {
    var result = _a.result, query = _a.query, _b = _a.store, store = _b === void 0 ? {} : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, _c = _a.fragmentMap, fragmentMap = _c === void 0 ? {} : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["i" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_4__util_assign__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["c" /* getDefaultValues */])(queryDefinition), variables);
    try {
        return writeSelectionSetToStore({
            dataId: 'ROOT_QUERY',
            result: result,
            selectionSet: queryDefinition.selectionSet,
            context: {
                store: store,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, query);
    }
}
function writeResultToStore(_a) {
    var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.store, store = _b === void 0 ? {} : _b, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var operationDefinition = Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["g" /* getOperationDefinition */])(document);
    var selectionSet = operationDefinition.selectionSet;
    var fragmentMap = Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["b" /* createFragmentMap */])(Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["d" /* getFragmentDefinitions */])(document));
    variables = Object(__WEBPACK_IMPORTED_MODULE_4__util_assign__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["c" /* getDefaultValues */])(operationDefinition), variables);
    try {
        return writeSelectionSetToStore({
            result: result,
            dataId: dataId,
            selectionSet: selectionSet,
            context: {
                store: store,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, document);
    }
}
function writeSelectionSetToStore(_a) {
    var result = _a.result, dataId = _a.dataId, selectionSet = _a.selectionSet, context = _a.context;
    var variables = context.variables, store = context.store, dataIdFromObject = context.dataIdFromObject, fragmentMap = context.fragmentMap;
    selectionSet.selections.forEach(function (selection) {
        var included = Object(__WEBPACK_IMPORTED_MODULE_2__queries_directives__["a" /* shouldInclude */])(selection, variables);
        if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["c" /* isField */])(selection)) {
            var resultFieldKey = Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["g" /* resultKeyNameFromField */])(selection);
            var value = result[resultFieldKey];
            if (included) {
                if (typeof value !== 'undefined') {
                    writeFieldToStore({
                        dataId: dataId,
                        value: value,
                        field: selection,
                        context: context,
                    });
                }
                else {
                    if (context.fragmentMatcherFunction) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_3__util_environment__["b" /* isProduction */])()) {
                            console.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                        }
                    }
                }
            }
        }
        else {
            var fragment = void 0;
            if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["e" /* isInlineFragment */])(selection)) {
                fragment = selection;
            }
            else {
                fragment = (fragmentMap || {})[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value + ".");
                }
            }
            var matches = true;
            if (context.fragmentMatcherFunction && fragment.typeCondition) {
                var idValue = { type: 'id', id: 'self', generated: false };
                var fakeContext = {
                    store: { self: result },
                    returnPartialData: false,
                    hasMissingField: false,
                    customResolvers: {},
                };
                matches = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                if (fakeContext.returnPartialData) {
                    console.error('WARNING: heuristic fragment matching going on!');
                }
            }
            if (included && matches) {
                writeSelectionSetToStore({
                    result: result,
                    selectionSet: fragment.selectionSet,
                    dataId: dataId,
                    context: context,
                });
            }
        }
    });
    return store;
}
function isGeneratedId(id) {
    return id[0] === '$';
}
function mergeWithGenerated(generatedKey, realKey, cache) {
    var generated = cache[generatedKey];
    var real = cache[realKey];
    Object.keys(generated).forEach(function (key) {
        var value = generated[key];
        var realValue = real[key];
        if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(value) && isGeneratedId(value.id) && Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(realValue)) {
            mergeWithGenerated(value.id, realValue.id, cache);
        }
        delete cache[generatedKey];
        cache[realKey] = __assign({}, generated, real);
    });
}
function isDataProcessed(dataId, field, processedData) {
    if (!processedData) {
        return false;
    }
    if (processedData[dataId]) {
        if (processedData[dataId].indexOf(field) >= 0) {
            return true;
        }
        else {
            processedData[dataId].push(field);
        }
    }
    else {
        processedData[dataId] = [field];
    }
    return false;
}
function writeFieldToStore(_a) {
    var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
    var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store, fragmentMap = context.fragmentMap;
    var storeValue;
    var storeFieldName = Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["h" /* storeKeyNameFromField */])(field, variables);
    var shouldMerge = false;
    var generatedKey = '';
    if (!field.selectionSet || value === null) {
        storeValue =
            value != null && typeof value === 'object'
                ?
                    { type: 'json', json: value }
                :
                    value;
    }
    else if (Array.isArray(value)) {
        var generatedId = dataId + "." + storeFieldName;
        storeValue = processArrayValue(value, generatedId, field.selectionSet, context);
    }
    else {
        var valueDataId = dataId + "." + storeFieldName;
        var generated = true;
        if (!isGeneratedId(valueDataId)) {
            valueDataId = '$' + valueDataId;
        }
        if (dataIdFromObject) {
            var semanticId = dataIdFromObject(value);
            if (semanticId && isGeneratedId(semanticId)) {
                throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');
            }
            if (semanticId) {
                valueDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(valueDataId, field, context.processedData)) {
            writeSelectionSetToStore({
                dataId: valueDataId,
                result: value,
                selectionSet: field.selectionSet,
                context: context,
            });
        }
        storeValue = {
            type: 'id',
            id: valueDataId,
            generated: generated,
        };
        if (store[dataId] && store[dataId][storeFieldName] !== storeValue) {
            var escapedId = store[dataId][storeFieldName];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(storeValue) &&
                storeValue.generated &&
                Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(escapedId) &&
                !escapedId.generated) {
                throw new Error("Store error: the application attempted to write an object with no provided id" +
                    (" but the store already contains an id of " + escapedId.id + " for this object."));
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["d" /* isIdValue */])(escapedId) && escapedId.generated) {
                generatedKey = escapedId.id;
                shouldMerge = true;
            }
        }
    }
    var newStoreObj = __assign({}, store[dataId], (_b = {}, _b[storeFieldName] = storeValue, _b));
    if (shouldMerge) {
        mergeWithGenerated(generatedKey, storeValue.id, store);
    }
    if (!store[dataId] || storeValue !== store[dataId][storeFieldName]) {
        store[dataId] = newStoreObj;
    }
    var _b;
}
function processArrayValue(value, generatedId, selectionSet, context) {
    return value.map(function (item, index) {
        if (item === null) {
            return null;
        }
        var itemDataId = generatedId + "." + index;
        if (Array.isArray(item)) {
            return processArrayValue(item, itemDataId, selectionSet, context);
        }
        var generated = true;
        if (context.dataIdFromObject) {
            var semanticId = context.dataIdFromObject(item);
            if (semanticId) {
                itemDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
            writeSelectionSetToStore({
                dataId: itemDataId,
                result: item,
                selectionSet: selectionSet,
                context: context,
            });
        }
        var idStoreValue = {
            type: 'id',
            id: itemDataId,
            generated: generated,
        };
        return idStoreValue;
    });
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkStatus; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isNetworkRequestInFlight;
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(183);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (
      // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      'fragment ' + name + wrap('(', join(variableDefinitions, ', '), ')') + ' ' + ('on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return JSON.stringify(value);
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
    var description = _ref22.description,
        name = _ref22.name,
        directives = _ref22.directives;
    return join([description, join(['scalar', name, join(directives, ' ')], ' ')], '\n');
  },

  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
    var description = _ref23.description,
        name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join([description, join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ')], '\n');
  },

  FieldDefinition: function FieldDefinition(_ref24) {
    var description = _ref24.description,
        name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return join([description, name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '))], '\n');
  },

  InputValueDefinition: function InputValueDefinition(_ref25) {
    var description = _ref25.description,
        name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([description, join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ')], '\n');
  },

  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
    var description = _ref26.description,
        name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join([description, join(['interface', name, join(directives, ' '), block(fields)], ' ')], '\n');
  },

  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
    var description = _ref27.description,
        name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join([description, join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ')], '\n');
  },

  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
    var description = _ref28.description,
        name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join([description, join(['enum', name, join(directives, ' '), block(values)], ' ')], '\n');
  },

  EnumValueDefinition: function EnumValueDefinition(_ref29) {
    var description = _ref29.description,
        name = _ref29.name,
        directives = _ref29.directives;
    return join([description, join([name, join(directives, ' ')], ' ')], '\n');
  },

  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
    var description = _ref30.description,
        name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join([description, join(['input', name, join(directives, ' '), block(fields)], ' ')], '\n');
  },

  ScalarTypeExtension: function ScalarTypeExtension(_ref31) {
    var name = _ref31.name,
        directives = _ref31.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeExtension: function ObjectTypeExtension(_ref32) {
    var name = _ref32.name,
        interfaces = _ref32.interfaces,
        directives = _ref32.directives,
        fields = _ref32.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
  },

  InterfaceTypeExtension: function InterfaceTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives,
        fields = _ref33.fields;
    return join(['extend interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeExtension: function UnionTypeExtension(_ref34) {
    var name = _ref34.name,
        directives = _ref34.directives,
        types = _ref34.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },

  EnumTypeExtension: function EnumTypeExtension(_ref35) {
    var name = _ref35.name,
        directives = _ref35.directives,
        values = _ref35.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },

  InputObjectTypeExtension: function InputObjectTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        fields = _ref36.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  },

  DirectiveDefinition: function DirectiveDefinition(_ref37) {
    var description = _ref37.description,
        name = _ref37.name,
        args = _ref37.arguments,
        locations = _ref37.locations;
    return join([description, 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ')], '\n');
  }
};

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && maybeString.replace(/\n/g, '\n  ');
}

/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */
function printBlockString(value, isDescription) {
  return (value[0] === ' ' || value[0] === '\t') && value.indexOf('\n') === -1 ? '"""' + value.replace(/"""/g, '\\"""') + '"""' : isDescription ? '"""\n' + value.replace(/"""/g, '\\"""') + '\n"""' : indent('"""\n' + value.replace(/"""/g, '\\"""')) + '\n"""';
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkStatus; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isNetworkRequestInFlight;
var NetworkStatus;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus < 7;
}
//# sourceMappingURL=networkStatus.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__link__ = __webpack_require__(191);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__link__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__link__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkUtils__ = __webpack_require__(83);
/* unused harmony reexport createOperation */
/* unused harmony reexport makePromise */
/* unused harmony reexport toPromise */
/* unused harmony reexport fromPromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zen_observable__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zen_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zen_observable__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2_zen_observable__; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.print = print;

var _visitor = __webpack_require__(162);

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, { leave: printDocASTReducer });
} /**
   *  Copyright (c) 2015, Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the BSD-style license found in the
   *  LICENSE file in the root directory of this source tree. An additional grant
   *  of patent rights can be found in the PATENTS file in the same directory.
   */

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },

  // Document

  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },

  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet;
    // Anonymous queries with no directives or variable definitions can use
    // the query short form.
    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },


  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue;
    return variable + ': ' + type + wrap(' = ', defaultValue);
  },

  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },

  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    return join([wrap('', alias, ': ') + name + wrap('(', join(args, ', '), ')'), join(directives, ' '), selectionSet], ' ');
  },

  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },

  // Fragments

  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },

  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },

  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return 'fragment ' + name + ' on ' + typeCondition + ' ' + wrap('', join(directives, ' '), ' ') + selectionSet;
  },

  // Value

  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10) {
    var value = _ref10.value;
    return JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return JSON.stringify(value);
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },

  // Directive

  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },

  // Type

  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },

  // Type System Definitions

  SchemaDefinition: function SchemaDefinition(_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  },

  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },

  ScalarTypeDefinition: function ScalarTypeDefinition(_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  },

  ObjectTypeDefinition: function ObjectTypeDefinition(_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ', ')), join(directives, ' '), block(fields)], ' ');
  },

  FieldDefinition: function FieldDefinition(_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + wrap('(', join(args, ', '), ')') + ': ' + type + wrap(' ', join(directives, ' '));
  },

  InputValueDefinition: function InputValueDefinition(_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  },

  InterfaceTypeDefinition: function InterfaceTypeDefinition(_ref26) {
    var name = _ref26.name,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, join(directives, ' '), block(fields)], ' ');
  },

  UnionTypeDefinition: function UnionTypeDefinition(_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), '= ' + join(types, ' | ')], ' ');
  },

  EnumTypeDefinition: function EnumTypeDefinition(_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  },

  EnumValueDefinition: function EnumValueDefinition(_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  },

  InputObjectTypeDefinition: function InputObjectTypeDefinition(_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  },

  TypeExtensionDefinition: function TypeExtensionDefinition(_ref31) {
    var definition = _ref31.definition;
    return 'extend ' + definition;
  },

  DirectiveDefinition: function DirectiveDefinition(_ref32) {
    var name = _ref32.name,
        args = _ref32.arguments,
        locations = _ref32.locations;
    return 'directive @' + name + wrap('(', join(args, ', '), ')') + ' on ' + join(locations, ' | ');
  }
};

/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */
function join(maybeArray, separator) {
  return maybeArray ? maybeArray.filter(function (x) {
    return x;
  }).join(separator || '') : '';
}

/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */
function block(array) {
  return array && array.length !== 0 ? indent('{\n' + join(array, '\n')) + '\n}' : '{}';
}

/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise
 * print an empty string.
 */
function wrap(start, maybeString, end) {
  return maybeString ? start + maybeString + (end || '') : '';
}

function indent(maybeString) {
  return maybeString && maybeString.replace(/\n/g, '\n  ');
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEqual;
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a != null &&
        typeof a === 'object' &&
        b != null &&
        typeof b === 'object') {
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                if (!Object.prototype.hasOwnProperty.call(b, key)) {
                    return false;
                }
                if (!isEqual(a[key], b[key])) {
                    return false;
                }
            }
        }
        for (var key in b) {
            if (!Object.prototype.hasOwnProperty.call(a, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=isEqual.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchType; });
var FetchType;
(function (FetchType) {
    FetchType[FetchType["normal"] = 1] = "normal";
    FetchType[FetchType["refetch"] = 2] = "refetch";
    FetchType[FetchType["poll"] = 3] = "poll";
})(FetchType || (FetchType = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(102)();
}


/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(116);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(117);


/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(152);

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc);
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;

module.exports = gql;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;

var _printError = __webpack_require__(64);

var _location = __webpack_require__(65);

/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined;

  // Compute locations in the source for the given nodes/positions.
  var _source = source;
  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;
  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }
      return list;
    }, []);
  }
  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations = void 0;
  if (positions && source) {
    var providedSource = source;
    _locations = positions.map(function (pos) {
      return (0, _location.getLocation)(providedSource, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
      }
      return list;
    }, []);
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      value: extensions || originalError && originalError.extensions
    }
  });

  // Include (non-enumerable) stack trace.
  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: { value: GraphQLError },
  name: { value: 'GraphQLError' },
  toString: {
    value: function toString() {
      return (0, _printError.printError)(this);
    }
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = printRequest;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseNetworkInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HTTPFetchNetworkInterface; });
/* harmony export (immutable) */ __webpack_exports__["c"] = createNetworkInterface;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_queryTransform__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function printRequest(request) {
    return __assign({}, request, { query: Object(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__["print"])(request.query) });
}
var BaseNetworkInterface = (function () {
    function BaseNetworkInterface(uri, opts) {
        if (opts === void 0) { opts = {}; }
        if (!uri) {
            throw new Error('A remote endpoint is required for a network layer');
        }
        if (typeof uri !== 'string') {
            throw new Error('Remote endpoint must be a string');
        }
        this._uri = uri;
        this._opts = __assign({}, opts);
        this._middlewares = [];
        this._afterwares = [];
    }
    BaseNetworkInterface.prototype.query = function (request) {
        return new Promise(function (resolve, reject) {
            reject(new Error('BaseNetworkInterface should not be used directly'));
        });
    };
    return BaseNetworkInterface;
}());

var HTTPFetchNetworkInterface = (function (_super) {
    __extends(HTTPFetchNetworkInterface, _super);
    function HTTPFetchNetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTTPFetchNetworkInterface.prototype.applyMiddlewares = function (requestAndOptions) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var request = requestAndOptions.request, options = requestAndOptions.options;
            var queue = function (funcs, scope) {
                var next = function (err) {
                    if (err) {
                        reject(err);
                    }
                    else if (funcs.length > 0) {
                        var f = funcs.shift();
                        if (f) {
                            f.applyMiddleware.apply(scope, [{ request: request, options: options }, next]);
                        }
                    }
                    else {
                        resolve({
                            request: request,
                            options: options,
                        });
                    }
                };
                next();
            };
            queue(_this._middlewares.slice(), _this);
        });
    };
    HTTPFetchNetworkInterface.prototype.applyAfterwares = function (_a) {
        var _this = this;
        var response = _a.response, options = _a.options;
        return new Promise(function (resolve, reject) {
            var responseObject = { response: response, options: options };
            var queue = function (funcs, scope) {
                var next = function () {
                    if (funcs.length > 0) {
                        var f = funcs.shift();
                        if (f) {
                            f.applyAfterware.apply(scope, [responseObject, next]);
                        }
                    }
                    else {
                        resolve(responseObject);
                    }
                };
                next();
            };
            queue(_this._afterwares.slice(), _this);
        });
    };
    HTTPFetchNetworkInterface.prototype.fetchFromRemoteEndpoint = function (_a) {
        var request = _a.request, options = _a.options;
        return fetch(this._uri, __assign({}, this._opts, { body: JSON.stringify(printRequest(request)), method: 'POST' }, options, { headers: __assign({ Accept: '*/*', 'Content-Type': 'application/json' }, options.headers) }));
    };
    HTTPFetchNetworkInterface.prototype.query = function (request) {
        var _this = this;
        var options = __assign({}, this._opts);
        return this.applyMiddlewares({
            request: request,
            options: options,
        })
            .then(function (rao) {
            if (rao.request.query) {
                rao.request.query = Object(__WEBPACK_IMPORTED_MODULE_2__queries_queryTransform__["b" /* removeConnectionDirectiveFromDocument */])(rao.request.query);
            }
            return rao;
        })
            .then(function (rao) { return _this.fetchFromRemoteEndpoint.call(_this, rao); })
            .then(function (response) {
            return _this.applyAfterwares({
                response: response,
                options: options,
            });
        })
            .then(function (_a) {
            var response = _a.response;
            var httpResponse = response;
            return httpResponse.json().catch(function (error) {
                var httpError = new Error("Network request failed with status " + response.status + " - \"" + response.statusText + "\"");
                httpError.response = httpResponse;
                httpError.parseError = error;
                throw httpError;
            });
        })
            .then(function (payload) {
            if (!payload.hasOwnProperty('data') &&
                !payload.hasOwnProperty('errors')) {
                throw new Error("Server response was missing for query '" + request.debugName + "'.");
            }
            else {
                return payload;
            }
        });
    };
    HTTPFetchNetworkInterface.prototype.use = function (middlewares) {
        var _this = this;
        middlewares.map(function (middleware) {
            if (typeof middleware.applyMiddleware === 'function') {
                _this._middlewares.push(middleware);
            }
            else {
                throw new Error('Middleware must implement the applyMiddleware function');
            }
        });
        return this;
    };
    HTTPFetchNetworkInterface.prototype.useAfter = function (afterwares) {
        var _this = this;
        afterwares.map(function (afterware) {
            if (typeof afterware.applyAfterware === 'function') {
                _this._afterwares.push(afterware);
            }
            else {
                throw new Error('Afterware must implement the applyAfterware function');
            }
        });
        return this;
    };
    return HTTPFetchNetworkInterface;
}(BaseNetworkInterface));

function createNetworkInterface(uriOrInterfaceOpts, secondArgOpts) {
    if (secondArgOpts === void 0) { secondArgOpts = {}; }
    if (!uriOrInterfaceOpts) {
        throw new Error('You must pass an options argument to createNetworkInterface.');
    }
    var uri;
    var opts;
    if (typeof uriOrInterfaceOpts === 'string') {
        console.warn("Passing the URI as the first argument to createNetworkInterface is deprecated as of Apollo Client 0.5. Please pass it as the \"uri\" property of the network interface options.");
        opts = secondArgOpts.opts;
        uri = uriOrInterfaceOpts;
    }
    else {
        opts = uriOrInterfaceOpts.opts;
        uri = uriOrInterfaceOpts.uri;
    }
    return new HTTPFetchNetworkInterface(uri, opts);
}
//# sourceMappingURL=networkInterface.js.map

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createApolloReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = createApolloStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_store__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__optimistic_data_store__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__optimistic_data_store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(33);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var crashReporter = function (store) { return function (next) { return function (action) {
    try {
        return next(action);
    }
    catch (err) {
        console.error('Caught an exception!', err);
        console.error(err.stack);
        throw err;
    }
}; }; };
var createReducerError = function (error, action) {
    var reducerError = { error: error };
    if (Object(__WEBPACK_IMPORTED_MODULE_3__actions__["d" /* isQueryResultAction */])(action)) {
        reducerError.queryId = action.queryId;
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_3__actions__["f" /* isSubscriptionResultAction */])(action)) {
        reducerError.subscriptionId = action.subscriptionId;
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* isMutationResultAction */])(action)) {
        reducerError.mutationId = action.mutationId;
    }
    return reducerError;
};
function createApolloReducer(config) {
    return function apolloReducer(state, action) {
        if (state === void 0) { state = {}; }
        try {
            var newState = {
                data: Object(__WEBPACK_IMPORTED_MODULE_1__data_store__["a" /* data */])(state.data, action, config),
                optimistic: [],
                reducerError: null,
            };
            newState.optimistic = Object(__WEBPACK_IMPORTED_MODULE_2__optimistic_data_store__["b" /* optimistic */])(state.optimistic, action, newState, config);
            if (state.data === newState.data &&
                state.optimistic === newState.optimistic &&
                state.reducerError === newState.reducerError) {
                return state;
            }
            return newState;
        }
        catch (reducerError) {
            return __assign({}, state, { reducerError: createReducerError(reducerError, action) });
        }
    };
}
function createApolloStore(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.reduxRootKey, reduxRootKey = _c === void 0 ? 'apollo' : _c, initialState = _b.initialState, _d = _b.config, config = _d === void 0 ? {} : _d, _e = _b.reportCrashes, reportCrashes = _e === void 0 ? true : _e, logger = _b.logger;
    var enhancers = [];
    var middlewares = [];
    if (reportCrashes) {
        middlewares.push(crashReporter);
    }
    if (logger) {
        middlewares.push(logger);
    }
    if (middlewares.length > 0) {
        enhancers.push(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(void 0, middlewares));
    }
    if (typeof window !== 'undefined') {
        var anyWindow = window;
        if (anyWindow.devToolsExtension) {
            enhancers.push(anyWindow.devToolsExtension());
        }
    }
    var compose = __WEBPACK_IMPORTED_MODULE_0_redux__["compose"];
    if (initialState &&
        initialState[reduxRootKey] &&
        initialState[reduxRootKey]['queries']) {
        throw new Error('Apollo initial state may not contain queries, only data');
    }
    if (initialState &&
        initialState[reduxRootKey] &&
        initialState[reduxRootKey]['mutations']) {
        throw new Error('Apollo initial state may not contain mutations, only data');
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])((_f = {}, _f[reduxRootKey] = createApolloReducer(config), _f)), initialState, compose.apply(void 0, enhancers));
    var _f;
}
//# sourceMappingURL=store.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isQueryResultAction;
/* unused harmony export isQueryErrorAction */
/* unused harmony export isQueryInitAction */
/* unused harmony export isQueryResultClientAction */
/* unused harmony export isQueryStopAction */
/* harmony export (immutable) */ __webpack_exports__["b"] = isMutationInitAction;
/* harmony export (immutable) */ __webpack_exports__["c"] = isMutationResultAction;
/* harmony export (immutable) */ __webpack_exports__["a"] = isMutationErrorAction;
/* harmony export (immutable) */ __webpack_exports__["g"] = isUpdateQueryResultAction;
/* harmony export (immutable) */ __webpack_exports__["e"] = isStoreResetAction;
/* harmony export (immutable) */ __webpack_exports__["f"] = isSubscriptionResultAction;
/* harmony export (immutable) */ __webpack_exports__["h"] = isWriteAction;
function isQueryResultAction(action) {
    return action.type === 'APOLLO_QUERY_RESULT';
}
function isQueryErrorAction(action) {
    return action.type === 'APOLLO_QUERY_ERROR';
}
function isQueryInitAction(action) {
    return action.type === 'APOLLO_QUERY_INIT';
}
function isQueryResultClientAction(action) {
    return action.type === 'APOLLO_QUERY_RESULT_CLIENT';
}
function isQueryStopAction(action) {
    return action.type === 'APOLLO_QUERY_STOP';
}
function isMutationInitAction(action) {
    return action.type === 'APOLLO_MUTATION_INIT';
}
function isMutationResultAction(action) {
    return action.type === 'APOLLO_MUTATION_RESULT';
}
function isMutationErrorAction(action) {
    return action.type === 'APOLLO_MUTATION_ERROR';
}
function isUpdateQueryResultAction(action) {
    return action.type === 'APOLLO_UPDATE_QUERY_RESULT';
}
function isStoreResetAction(action) {
    return action.type === 'APOLLO_STORE_RESET';
}
function isSubscriptionResultAction(action) {
    return action.type === 'APOLLO_SUBSCRIPTION_RESULT';
}
function isWriteAction(action) {
    return action.type === 'APOLLO_WRITE';
}
//# sourceMappingURL=actions.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Observable__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors_ApolloError__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_errorHandling__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isEqual__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_maybeDeepFreeze__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__queries_networkStatus__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var ObservableQuery = (function (_super) {
    __extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var scheduler = _a.scheduler, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
        var _this = this;
        var queryManager = scheduler.queryManager;
        var queryId = queryManager.generateQueryId();
        var subscriberFunction = function (observer) {
            return _this.onSubscribe(observer);
        };
        _this = _super.call(this, subscriberFunction) || this;
        _this.isCurrentlyPolling = false;
        _this.options = options;
        _this.variables = _this.options.variables || {};
        _this.scheduler = scheduler;
        _this.queryManager = queryManager;
        _this.queryId = queryId;
        _this.shouldSubscribe = shouldSubscribe;
        _this.observers = [];
        _this.subscriptionHandles = [];
        return _this;
    }
    ObservableQuery.prototype.result = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            var subscription = null;
            var observer = {
                next: function (result) {
                    resolve(result);
                    var selectedObservers = that.observers.filter(function (obs) { return obs !== observer; });
                    if (selectedObservers.length === 0) {
                        that.queryManager.removeQuery(that.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: function (error) {
                    reject(error);
                },
            };
            subscription = that.subscribe(observer);
        });
    };
    ObservableQuery.prototype.currentResult = function () {
        var _a = this.queryManager.getCurrentQueryResult(this, true), data = _a.data, partial = _a.partial;
        var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
        if (queryStoreValue &&
            ((queryStoreValue.graphQLErrors &&
                queryStoreValue.graphQLErrors.length > 0) ||
                queryStoreValue.networkError)) {
            var error = new __WEBPACK_IMPORTED_MODULE_1__errors_ApolloError__["a" /* ApolloError */]({
                graphQLErrors: queryStoreValue.graphQLErrors,
                networkError: queryStoreValue.networkError,
            });
            return {
                data: {},
                loading: false,
                networkStatus: queryStoreValue.networkStatus,
                error: error,
            };
        }
        var queryLoading = !queryStoreValue ||
            queryStoreValue.networkStatus === __WEBPACK_IMPORTED_MODULE_6__queries_networkStatus__["a" /* NetworkStatus */].loading;
        var loading = (this.options.fetchPolicy === 'network-only' && queryLoading) ||
            (partial && this.options.fetchPolicy !== 'cache-only');
        var networkStatus;
        if (queryStoreValue) {
            networkStatus = queryStoreValue.networkStatus;
        }
        else {
            networkStatus = loading ? __WEBPACK_IMPORTED_MODULE_6__queries_networkStatus__["a" /* NetworkStatus */].loading : __WEBPACK_IMPORTED_MODULE_6__queries_networkStatus__["a" /* NetworkStatus */].ready;
        }
        var result = {
            data: data,
            loading: Object(__WEBPACK_IMPORTED_MODULE_6__queries_networkStatus__["b" /* isNetworkRequestInFlight */])(networkStatus),
            networkStatus: networkStatus,
        };
        if (!partial) {
            var stale = false;
            this.lastResult = __assign({}, result, { stale: stale });
        }
        return __assign({}, result, { partial: partial });
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.refetch = function (variables) {
        this.variables = __assign({}, this.variables, variables);
        if (this.options.fetchPolicy === 'cache-only') {
            return Promise.reject(new Error('cache-only fetchPolicy option should not be used together with query refetch.'));
        }
        this.options.variables = __assign({}, this.options.variables, this.variables);
        var combinedOptions = __assign({}, this.options, { fetchPolicy: 'network-only' });
        return this.queryManager
            .fetchQuery(this.queryId, combinedOptions, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* FetchType */].refetch)
            .then(function (result) { return Object(__WEBPACK_IMPORTED_MODULE_5__util_maybeDeepFreeze__["a" /* default */])(result); });
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        if (!fetchMoreOptions.updateQuery) {
            throw new Error('updateQuery option is required. This function defines how to update the query data with the new results.');
        }
        return Promise.resolve()
            .then(function () {
            var qid = _this.queryManager.generateQueryId();
            var combinedOptions = null;
            if (fetchMoreOptions.query) {
                combinedOptions = fetchMoreOptions;
            }
            else {
                var variables = __assign({}, _this.variables, fetchMoreOptions.variables);
                combinedOptions = __assign({}, _this.options, fetchMoreOptions, { variables: variables });
            }
            combinedOptions = __assign({}, combinedOptions, { query: combinedOptions.query, fetchPolicy: 'network-only' });
            return _this.queryManager.fetchQuery(qid, combinedOptions, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* FetchType */].normal, _this.queryId);
        })
            .then(function (fetchMoreResult) {
            var data = fetchMoreResult.data;
            var reducer = fetchMoreOptions.updateQuery;
            var mapFn = function (previousResult, _a) {
                var variables = _a.variables;
                var queryVariables = variables;
                return reducer(previousResult, {
                    fetchMoreResult: data,
                    queryVariables: queryVariables,
                });
            };
            _this.updateQuery(mapFn);
            return fetchMoreResult;
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var observable = this.queryManager.startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
        });
        var subscription = observable.subscribe({
            next: function (data) {
                if (options.updateQuery) {
                    var reducer_1 = options.updateQuery;
                    var mapFn = function (previousResult, _a) {
                        var variables = _a.variables;
                        return reducer_1(previousResult, {
                            subscriptionData: { data: data },
                            variables: variables,
                        });
                    };
                    _this.updateQuery(mapFn);
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                }
                else {
                    console.error('Unhandled GraphQL subscription error', err);
                }
            },
        });
        this.subscriptionHandles.push(subscription);
        return function () {
            var i = _this.subscriptionHandles.indexOf(subscription);
            if (i >= 0) {
                _this.subscriptionHandles.splice(i, 1);
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (opts) {
        var oldOptions = this.options;
        this.options = __assign({}, this.options, opts);
        if (opts.pollInterval) {
            this.startPolling(opts.pollInterval);
        }
        else if (opts.pollInterval === 0) {
            this.stopPolling();
        }
        var tryFetch = (oldOptions.fetchPolicy !== 'network-only' &&
            opts.fetchPolicy === 'network-only') ||
            (oldOptions.fetchPolicy === 'cache-only' &&
                opts.fetchPolicy !== 'cache-only') ||
            (oldOptions.fetchPolicy === 'standby' &&
                opts.fetchPolicy !== 'standby') ||
            false;
        return this.setVariables(this.options.variables, tryFetch, opts.fetchResults);
    };
    ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
        if (tryFetch === void 0) { tryFetch = false; }
        if (fetchResults === void 0) { fetchResults = true; }
        var newVariables = __assign({}, this.variables, variables);
        if (Object(__WEBPACK_IMPORTED_MODULE_4__util_isEqual__["a" /* isEqual */])(newVariables, this.variables) && !tryFetch) {
            if (this.observers.length === 0 || !fetchResults) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.result();
        }
        else {
            this.variables = newVariables;
            this.options.variables = newVariables;
            if (this.observers.length === 0) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.queryManager
                .fetchQuery(this.queryId, __assign({}, this.options, { variables: this.variables }))
                .then(function (result) { return Object(__WEBPACK_IMPORTED_MODULE_5__util_maybeDeepFreeze__["a" /* default */])(result); });
        }
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var _a = this.queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
        var newResult = Object(__WEBPACK_IMPORTED_MODULE_3__util_errorHandling__["a" /* tryFunctionOrLogError */])(function () {
            return mapFn(previousResult, { variables: variables });
        });
        if (newResult) {
            this.queryManager.store.dispatch({
                type: 'APOLLO_UPDATE_QUERY_RESULT',
                newResult: newResult,
                variables: variables,
                document: document,
                operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(document),
            });
        }
    };
    ObservableQuery.prototype.stopPolling = function () {
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.options.pollInterval = undefined;
            this.isCurrentlyPolling = false;
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        if (this.options.fetchPolicy === 'cache-first' ||
            this.options.fetchPolicy === 'cache-only') {
            throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
        }
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
        }
        this.options.pollInterval = pollInterval;
        this.isCurrentlyPolling = true;
        this.scheduler.startPollingQuery(this.options, this.queryId);
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        this.observers.push(observer);
        if (observer.next && this.lastResult) {
            observer.next(this.lastResult);
        }
        if (observer.error && this.lastError) {
            observer.error(this.lastError);
        }
        if (this.observers.length === 1) {
            this.setUpQuery();
        }
        var retQuerySubscription = {
            unsubscribe: function () {
                if (!_this.observers.some(function (el) { return el === observer; })) {
                    return;
                }
                _this.observers = _this.observers.filter(function (obs) { return obs !== observer; });
                if (_this.observers.length === 0) {
                    _this.tearDownQuery();
                }
            },
        };
        return retQuerySubscription;
    };
    ObservableQuery.prototype.setUpQuery = function () {
        var _this = this;
        if (this.shouldSubscribe) {
            this.queryManager.addObservableQuery(this.queryId, this);
        }
        if (!!this.options.pollInterval) {
            if (this.options.fetchPolicy === 'cache-first' ||
                this.options.fetchPolicy === 'cache-only') {
                throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
            }
            this.isCurrentlyPolling = true;
            this.scheduler.startPollingQuery(this.options, this.queryId);
        }
        var observer = {
            next: function (result) {
                _this.lastResult = result;
                _this.observers.forEach(function (obs) {
                    if (obs.next) {
                        obs.next(result);
                    }
                });
            },
            error: function (error) {
                _this.observers.forEach(function (obs) {
                    if (obs.error) {
                        obs.error(error);
                    }
                    else {
                        console.error('Unhandled error', error.message, error.stack);
                    }
                });
                _this.lastError = error;
            },
        };
        this.queryManager.startQuery(this.queryId, this.options, this.queryManager.queryListenerForObserver(this.queryId, this.options, observer));
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
        }
        this.subscriptionHandles.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptionHandles = [];
        this.queryManager.stopQuery(this.queryId);
        if (this.shouldSubscribe) {
            this.queryManager.removeObservableQuery(this.queryId);
        }
        this.observers = [];
    };
    return ObservableQuery;
}(__WEBPACK_IMPORTED_MODULE_0__util_Observable__["a" /* Observable */]));

//# sourceMappingURL=ObservableQuery.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isApolloError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (Array.isArray(err.graphQLErrors) && err.graphQLErrors.length !== 0) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += "GraphQL error: " + errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += 'Network error: ' + err.networkError.message + '\n';
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    __extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        if (!errorMessage) {
            _this.message = generateErrorMessage(_this);
        }
        else {
            _this.message = errorMessage;
        }
        _this.extraInfo = extraInfo;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=ApolloError.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchType; });
var FetchType;
(function (FetchType) {
    FetchType[FetchType["normal"] = 1] = "normal";
    FetchType[FetchType["refetch"] = 2] = "refetch";
    FetchType[FetchType["poll"] = 3] = "poll";
})(FetchType || (FetchType = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function cleanupSubscription(subscription) {
    var cleanup = subscription._cleanup;
    if (!cleanup) {
        return;
    }
    subscription._cleanup = undefined;
    cleanup();
}
function subscriptionClosed(subscription) {
    return subscription._observer === undefined;
}
function closeSubscription(subscription) {
    if (subscriptionClosed(subscription)) {
        return;
    }
    subscription._observer = undefined;
    cleanupSubscription(subscription);
}
function cleanupFromSubscription(subscription) {
    return function () {
        subscription.unsubscribe();
    };
}
var Subscription = (function () {
    function Subscription(observer, subscriber) {
        if (Object(observer) !== observer) {
            throw new TypeError('Observer must be an object');
        }
        this._cleanup = undefined;
        this._observer = observer;
        if (observer.start) {
            observer.start(this);
        }
        if (subscriptionClosed(this)) {
            return;
        }
        var _observer = new SubscriptionObserver(this);
        try {
            var cleanup = subscriber(_observer);
            if (cleanup != null) {
                if (typeof cleanup.unsubscribe ===
                    'function') {
                    cleanup = cleanupFromSubscription(cleanup);
                }
                else if (typeof cleanup !== 'function') {
                    throw new TypeError(cleanup + ' is not a function');
                }
                this._cleanup = cleanup;
            }
        }
        catch (e) {
            if (_observer.error) {
                _observer.error(e);
            }
            return;
        }
        if (subscriptionClosed(this)) {
            cleanupSubscription(this);
        }
    }
    Object.defineProperty(Subscription.prototype, "closed", {
        get: function () {
            return subscriptionClosed(this);
        },
        enumerable: true,
        configurable: true
    });
    Subscription.prototype.unsubscribe = function () {
        closeSubscription(this);
    };
    return Subscription;
}());
exports.Subscription = Subscription;
var SubscriptionObserver = (function () {
    function SubscriptionObserver(subscription) {
        this._subscription = subscription;
    }
    Object.defineProperty(SubscriptionObserver.prototype, "closed", {
        get: function () {
            return subscriptionClosed(this._subscription);
        },
        enumerable: true,
        configurable: true
    });
    SubscriptionObserver.prototype.next = function (value) {
        var subscription = this._subscription;
        if (subscriptionClosed(subscription)) {
            return;
        }
        var observer = subscription._observer;
        if (!observer.next) {
            return;
        }
        observer.next(value);
        return;
    };
    SubscriptionObserver.prototype.error = function (value) {
        var subscription = this._subscription;
        if (subscriptionClosed(subscription)) {
            throw value;
        }
        var observer = subscription._observer;
        subscription._observer = undefined;
        try {
            if (!observer.error) {
                throw value;
            }
            observer.error(value);
        }
        catch (e) {
            try {
                cleanupSubscription(subscription);
            }
            finally {
                throw e;
            }
        }
        cleanupSubscription(subscription);
    };
    SubscriptionObserver.prototype.complete = function () {
        var subscription = this._subscription;
        if (subscriptionClosed(subscription)) {
            return;
        }
        var observer = subscription._observer;
        subscription._observer = undefined;
        try {
            if (observer.complete) {
                observer.complete();
            }
        }
        catch (e) {
            try {
                cleanupSubscription(subscription);
            }
            finally {
                throw e;
            }
        }
        cleanupSubscription(subscription);
    };
    return SubscriptionObserver;
}());
exports.SubscriptionObserver = SubscriptionObserver;
var Observable = (function () {
    function Observable(subscriber) {
        if (typeof subscriber !== 'function') {
            throw new TypeError('Observable initializer must be a function');
        }
        this._subscriber = subscriber;
    }
    Observable.from = function (observable) {
        if (observable.subscribe) {
            return new Observable(function (observer) {
                return observable.subscribe(observer);
            });
        }
        if (Array.isArray(observable)) {
            return new Observable(function (observer) {
                for (var i = 0; i < observable.length; ++i) {
                    observer.next(observable[i]);
                    if (observer.closed) {
                        return;
                    }
                }
                if (observer.complete) {
                    observer.complete();
                }
            });
        }
        throw new TypeError(observable + ' is not observable');
    };
    Observable.of = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return new Observable(function (observer) {
            for (var i = 0; i < items.length; ++i) {
                observer.next(items[i]);
                if (observer.closed) {
                    return;
                }
            }
            if (observer.complete) {
                observer.complete();
            }
        });
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        if (typeof observerOrNext === 'function') {
            return new Subscription({
                next: observerOrNext,
                error: error,
                complete: complete,
            }, this._subscriber);
        }
        return new Subscription(observerOrNext, this._subscriber);
    };
    Observable.prototype.forEach = function (fn) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof fn !== 'function') {
                return Promise.reject(new TypeError(fn + ' is not a function'));
            }
            _this.subscribe({
                start: function (subscription) {
                    this._subscription = subscription;
                },
                next: function (value) {
                    var subscription = this._subscription;
                    if (subscription.closed) {
                        return;
                    }
                    try {
                        fn(value);
                        return;
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
        });
    };
    Observable.prototype.map = function (fn) {
        var _this = this;
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not a function');
        }
        return new Observable(function (observer) {
            return _this.subscribe({
                next: function (value) {
                    if (observer.closed) {
                        return;
                    }
                    var _value;
                    try {
                        _value = fn(value);
                    }
                    catch (e) {
                        observer.error(e);
                        return;
                    }
                    observer.next(_value);
                },
                error: function (e) {
                    observer.error(e);
                },
                complete: function () {
                    observer.complete();
                },
            });
        });
    };
    Observable.prototype.filter = function (fn) {
        var _this = this;
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not a function');
        }
        return new Observable(function (observer) {
            _this.subscribe({
                next: function (value) {
                    if (observer.closed) {
                        return;
                    }
                    try {
                        if (!fn(value)) {
                            return;
                        }
                    }
                    catch (e) {
                        if (observer.error) {
                            observer.error(e);
                        }
                        return;
                    }
                    observer.next(value);
                },
                error: function (e) {
                    observer.error(e);
                },
                complete: function () {
                    observer.complete();
                },
            });
        });
    };
    Observable.prototype.reduce = function (fn, initialValue) {
        var _this = this;
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not a function');
        }
        var hasSeed = arguments.length > 1;
        var hasValue = false;
        var seed = arguments[1];
        var acc = seed;
        return new Observable(function (observer) {
            _this.subscribe({
                next: function (value) {
                    if (observer.closed) {
                        return;
                    }
                    var first = !hasValue;
                    hasValue = true;
                    if (!first || hasSeed) {
                        try {
                            acc = fn(acc, value);
                        }
                        catch (e) {
                            observer.error(e);
                            return;
                        }
                    }
                    else {
                        acc = value;
                    }
                },
                error: function (e) {
                    observer.error(e);
                },
                complete: function () {
                    if (!hasValue && !hasSeed) {
                        observer.error(new TypeError('Cannot reduce an empty sequence'));
                        return;
                    }
                    observer.next(acc);
                    observer.complete();
                },
            });
        });
    };
    Observable.prototype.flatMap = function (fn) {
        var _this = this;
        if (typeof fn !== 'function') {
            throw new TypeError(fn + ' is not a function');
        }
        return new Observable(function (observer) {
            var completed = false;
            var subscriptions = [];
            var outer = _this.subscribe({
                next: function (value) {
                    var _value;
                    if (fn) {
                        try {
                            _value = fn(value);
                        }
                        catch (x) {
                            observer.error(x);
                            return;
                        }
                    }
                    Observable.from(_value).subscribe({
                        start: function (s) {
                            subscriptions.push((this._subscription = s));
                        },
                        next: function (data) {
                            observer.next(data);
                        },
                        error: function (e) {
                            observer.error(e);
                        },
                        complete: function () {
                            var i = subscriptions.indexOf(this._subscription);
                            if (i >= 0) {
                                subscriptions.splice(i, 1);
                            }
                            closeIfDone();
                        },
                    });
                },
                error: function (e) {
                    observer.error(e);
                },
                complete: function () {
                    completed = true;
                    closeIfDone();
                },
            });
            function closeIfDone() {
                if (completed && subscriptions.length === 0) {
                    observer.complete();
                }
            }
            return function () {
                subscriptions.forEach(function (s) { return s.unsubscribe(); });
                outer.unsubscribe();
            };
        });
    };
    return Observable;
}());
exports.default = Observable;
//# sourceMappingURL=zenObservable.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IntrospectionFragmentMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeuristicFragmentMatcher; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_environment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_warnOnce__ = __webpack_require__(174);


var IntrospectionFragmentMatcher = (function () {
    function IntrospectionFragmentMatcher(options) {
        if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
        }
        else {
            this.isReady = false;
        }
        this.match = this.match.bind(this);
    }
    IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        if (!this.isReady) {
            throw new Error('FragmentMatcher.match() was called before FragmentMatcher.init()');
        }
        var obj = context.store[idValue.id];
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            throw new Error("Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        var implementingTypes = this.possibleTypesMap[typeCondition];
        if (implementingTypes && implementingTypes.indexOf(obj.__typename) > -1) {
            return true;
        }
        return false;
    };
    IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
        var typeMap = {};
        introspectionResultData.__schema.types.forEach(function (type) {
            if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
                typeMap[type.name] = type.possibleTypes.map(function (implementingType) { return implementingType.name; });
            }
        });
        return typeMap;
    };
    return IntrospectionFragmentMatcher;
}());

var haveWarned = false;
var HeuristicFragmentMatcher = (function () {
    function HeuristicFragmentMatcher() {
    }
    HeuristicFragmentMatcher.prototype.ensureReady = function () {
        return Promise.resolve();
    };
    HeuristicFragmentMatcher.prototype.canBypassInit = function () {
        return true;
    };
    HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        var obj = context.store[idValue.id];
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            if (!haveWarned) {
                console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                console.warn('Could not find __typename on Fragment ', typeCondition, obj);
                console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " +
                    "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_environment__["c" /* isTest */])()) {
                    haveWarned = true;
                }
            }
            context.returnPartialData = true;
            return true;
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__util_warnOnce__["a" /* warnOnceInDevelopment */])("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types.\n     Apollo Client will not be able to able to accurately map fragments." +
            "To make this error go away, use the IntrospectionFragmentMatcher as described in the docs: " +
            "http://dev.apollodata.com/react/initialization.html#fragment-matcher", 'error');
        context.returnPartialData = true;
        return true;
    };
    return HeuristicFragmentMatcher;
}());

//# sourceMappingURL=fragmentMatcher.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networkStatus__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_Observable__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errors_ApolloError__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__types__ = __webpack_require__(20);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var hasError = function (storeValue, policy) {
    if (policy === void 0) { policy = 'none'; }
    return storeValue &&
        ((storeValue.graphQLErrors &&
            storeValue.graphQLErrors.length > 0 &&
            policy === 'none') ||
            storeValue.networkError);
};
var ObservableQuery = (function (_super) {
    __extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var scheduler = _a.scheduler, options = _a.options, _b = _a.shouldSubscribe, shouldSubscribe = _b === void 0 ? true : _b;
        var _this = _super.call(this, function (observer) {
            return _this.onSubscribe(observer);
        }) || this;
        _this.isCurrentlyPolling = false;
        _this.isTornDown = false;
        _this.options = options;
        _this.variables = options.variables || {};
        _this.queryId = scheduler.queryManager.generateQueryId();
        _this.shouldSubscribe = shouldSubscribe;
        _this.scheduler = scheduler;
        _this.queryManager = scheduler.queryManager;
        _this.observers = [];
        _this.subscriptionHandles = [];
        return _this;
    }
    ObservableQuery.prototype.result = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            var subscription;
            var observer = {
                next: function (result) {
                    resolve(result);
                    if (!that.observers.some(function (obs) { return obs !== observer; })) {
                        that.queryManager.removeQuery(that.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: function (error) {
                    reject(error);
                },
            };
            subscription = that.subscribe(observer);
        });
    };
    ObservableQuery.prototype.currentResult = function () {
        if (this.isTornDown) {
            return {
                data: this.lastError ? {} : this.lastResult ? this.lastResult.data : {},
                error: this.lastError,
                loading: false,
                networkStatus: __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].error,
            };
        }
        var queryStoreValue = this.queryManager.queryStore.get(this.queryId);
        if (hasError(queryStoreValue, this.options.errorPolicy)) {
            return {
                data: {},
                loading: false,
                networkStatus: queryStoreValue.networkStatus,
                error: new __WEBPACK_IMPORTED_MODULE_3__errors_ApolloError__["a" /* ApolloError */]({
                    graphQLErrors: queryStoreValue.graphQLErrors,
                    networkError: queryStoreValue.networkError,
                }),
            };
        }
        var _a = this.queryManager.getCurrentQueryResult(this), data = _a.data, partial = _a.partial;
        var queryLoading = !queryStoreValue ||
            queryStoreValue.networkStatus === __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].loading;
        var loading = (this.options.fetchPolicy === 'network-only' && queryLoading) ||
            (partial && this.options.fetchPolicy !== 'cache-only');
        var networkStatus;
        if (queryStoreValue) {
            networkStatus = queryStoreValue.networkStatus;
        }
        else {
            networkStatus = loading ? __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].loading : __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].ready;
        }
        var result = {
            data: data,
            loading: Object(__WEBPACK_IMPORTED_MODULE_1__networkStatus__["b" /* isNetworkRequestInFlight */])(networkStatus),
            networkStatus: networkStatus,
        };
        if (queryStoreValue &&
            queryStoreValue.graphQLErrors &&
            this.options.errorPolicy === 'all') {
            result.errors = queryStoreValue.graphQLErrors;
        }
        if (!partial) {
            var stale = false;
            this.lastResult = __assign({}, result, { stale: stale });
        }
        return __assign({}, result, { partial: partial });
    };
    ObservableQuery.prototype.getLastResult = function () {
        return this.lastResult;
    };
    ObservableQuery.prototype.getLastError = function () {
        return this.lastError;
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.lastResult;
        delete this.lastError;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.refetch = function (variables) {
        if (this.options.fetchPolicy === 'cache-only') {
            return Promise.reject(new Error('cache-only fetchPolicy option should not be used together with query refetch.'));
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["q" /* isEqual */])(this.variables, variables)) {
            this.variables = __assign({}, this.variables, variables);
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["q" /* isEqual */])(this.options.variables, this.variables)) {
            this.options.variables = __assign({}, this.options.variables, this.variables);
        }
        var combinedOptions = __assign({}, this.options, { fetchPolicy: 'network-only' });
        return this.queryManager
            .fetchQuery(this.queryId, combinedOptions, __WEBPACK_IMPORTED_MODULE_4__types__["a" /* FetchType */].refetch)
            .then(function (result) { return Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["x" /* maybeDeepFreeze */])(result); });
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        if (!fetchMoreOptions.updateQuery) {
            throw new Error('updateQuery option is required. This function defines how to update the query data with the new results.');
        }
        return Promise.resolve()
            .then(function () {
            var qid = _this.queryManager.generateQueryId();
            var combinedOptions;
            if (fetchMoreOptions.query) {
                combinedOptions = fetchMoreOptions;
            }
            else {
                combinedOptions = __assign({}, _this.options, fetchMoreOptions, { variables: __assign({}, _this.variables, fetchMoreOptions.variables) });
            }
            combinedOptions.fetchPolicy = 'network-only';
            return _this.queryManager.fetchQuery(qid, combinedOptions, __WEBPACK_IMPORTED_MODULE_4__types__["a" /* FetchType */].normal, _this.queryId);
        })
            .then(function (fetchMoreResult) {
            _this.updateQuery(function (previousResult, _a) {
                var variables = _a.variables;
                return fetchMoreOptions.updateQuery(previousResult, {
                    fetchMoreResult: fetchMoreResult.data,
                    variables: variables,
                });
            });
            return fetchMoreResult;
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
        })
            .subscribe({
            next: function (data) {
                if (options.updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return options.updateQuery(previous, {
                            subscriptionData: data,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                console.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptionHandles.push(subscription);
        return function () {
            var i = _this.subscriptionHandles.indexOf(subscription);
            if (i >= 0) {
                _this.subscriptionHandles.splice(i, 1);
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (opts) {
        var oldOptions = this.options;
        this.options = __assign({}, this.options, opts);
        if (opts.pollInterval) {
            this.startPolling(opts.pollInterval);
        }
        else if (opts.pollInterval === 0) {
            this.stopPolling();
        }
        var tryFetch = (oldOptions.fetchPolicy !== 'network-only' &&
            opts.fetchPolicy === 'network-only') ||
            (oldOptions.fetchPolicy === 'cache-only' &&
                opts.fetchPolicy !== 'cache-only') ||
            (oldOptions.fetchPolicy === 'standby' &&
                opts.fetchPolicy !== 'standby') ||
            false;
        return this.setVariables(this.options.variables, tryFetch, opts.fetchResults);
    };
    ObservableQuery.prototype.setVariables = function (variables, tryFetch, fetchResults) {
        if (tryFetch === void 0) { tryFetch = false; }
        if (fetchResults === void 0) { fetchResults = true; }
        this.isTornDown = false;
        var newVariables = __assign({}, this.variables, variables);
        if (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["q" /* isEqual */])(newVariables, this.variables) && !tryFetch) {
            if (this.observers.length === 0 || !fetchResults) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.result();
        }
        else {
            this.lastVariables = this.variables;
            this.variables = newVariables;
            this.options.variables = newVariables;
            if (this.observers.length === 0) {
                return new Promise(function (resolve) { return resolve(); });
            }
            return this.queryManager
                .fetchQuery(this.queryId, __assign({}, this.options, { variables: this.variables }))
                .then(function (result) { return Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["x" /* maybeDeepFreeze */])(result); });
        }
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var _a = this.queryManager.getQueryWithPreviousResult(this.queryId), previousResult = _a.previousResult, variables = _a.variables, document = _a.document;
        var newResult = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["C" /* tryFunctionOrLogError */])(function () {
            return mapFn(previousResult, { variables: variables });
        });
        if (newResult) {
            this.queryManager.dataStore.markUpdateQueryResult(document, variables, newResult);
            this.queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.stopPolling = function () {
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.options.pollInterval = undefined;
            this.isCurrentlyPolling = false;
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        if (this.options.fetchPolicy === 'cache-first' ||
            this.options.fetchPolicy === 'cache-only') {
            throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
        }
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
        }
        this.options.pollInterval = pollInterval;
        this.isCurrentlyPolling = true;
        this.scheduler.startPollingQuery(this.options, this.queryId);
    };
    ObservableQuery.prototype.onSubscribe = function (observer) {
        var _this = this;
        if (observer._subscription &&
            observer._subscription._observer &&
            !observer._subscription._observer.error) {
            observer._subscription._observer.error = function (error) {
                console.error('Unhandled error', error.message, error.stack);
            };
        }
        this.observers.push(observer);
        if (observer.next && this.lastResult)
            observer.next(this.lastResult);
        if (observer.error && this.lastError)
            observer.error(this.lastError);
        if (this.observers.length === 1)
            this.setUpQuery();
        return function () {
            _this.observers = _this.observers.filter(function (obs) { return obs !== observer; });
            if (_this.observers.length === 0) {
                _this.tearDownQuery();
            }
        };
    };
    ObservableQuery.prototype.setUpQuery = function () {
        var _this = this;
        if (this.shouldSubscribe) {
            this.queryManager.addObservableQuery(this.queryId, this);
        }
        if (!!this.options.pollInterval) {
            if (this.options.fetchPolicy === 'cache-first' ||
                this.options.fetchPolicy === 'cache-only') {
                throw new Error('Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.');
            }
            this.isCurrentlyPolling = true;
            this.scheduler.startPollingQuery(this.options, this.queryId);
        }
        var observer = {
            next: function (result) {
                _this.lastResult = result;
                _this.observers.forEach(function (obs) { return obs.next && obs.next(result); });
            },
            error: function (error) {
                _this.lastError = error;
                _this.observers.forEach(function (obs) { return obs.error && obs.error(error); });
            },
        };
        this.queryManager.startQuery(this.queryId, this.options, this.queryManager.queryListenerForObserver(this.queryId, this.options, observer));
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        this.isTornDown = true;
        if (this.isCurrentlyPolling) {
            this.scheduler.stopPollingQuery(this.queryId);
            this.isCurrentlyPolling = false;
        }
        this.subscriptionHandles.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptionHandles = [];
        this.queryManager.removeObservableQuery(this.queryId);
        this.queryManager.stopQuery(this.queryId);
        this.observers = [];
    };
    return ObservableQuery;
}(__WEBPACK_IMPORTED_MODULE_2__util_Observable__["a" /* Observable */]));

//# sourceMappingURL=ObservableQuery.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isScalarValue */
/* unused harmony export isNumberValue */
/* harmony export (immutable) */ __webpack_exports__["i"] = valueToObjectRepresentation;
/* harmony export (immutable) */ __webpack_exports__["h"] = storeKeyNameFromField;
/* harmony export (immutable) */ __webpack_exports__["b"] = getStoreKeyName;
/* harmony export (immutable) */ __webpack_exports__["a"] = argumentsObjectFromField;
/* harmony export (immutable) */ __webpack_exports__["g"] = resultKeyNameFromField;
/* harmony export (immutable) */ __webpack_exports__["c"] = isField;
/* harmony export (immutable) */ __webpack_exports__["e"] = isInlineFragment;
/* harmony export (immutable) */ __webpack_exports__["d"] = isIdValue;
/* unused harmony export toIdValue */
/* harmony export (immutable) */ __webpack_exports__["f"] = isJsonValue;
/* unused harmony export valueFromNode */
function isScalarValue(value) {
    return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}
function isNumberValue(value) {
    return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else {
        throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\" is not supported.\n                    Use variables instead of inline arguments to overcome this limitation.");
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
function getStoreKeyName(fieldName, args, directives) {
    if (directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var queryArgs_1 = args;
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = queryArgs_1[key];
            });
            return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
        }
        else {
            return directives['connection']['key'];
        }
    }
    if (args) {
        var stringifiedArgs = JSON.stringify(args);
        return fieldName + "(" + stringifiedArgs + ")";
    }
    return fieldName;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
function isIdValue(idObject) {
    return idObject && idObject.type === 'id';
}
function toIdValue(id, generated) {
    if (generated === void 0) { generated = false; }
    return {
        type: 'id',
        id: id,
        generated: generated,
    };
}
function isJsonValue(jsonObject) {
    return (jsonObject != null &&
        typeof jsonObject === 'object' &&
        jsonObject.type === 'json');
}
function defaultValueFromVariable(node) {
    throw new Error("Variable nodes are not supported by valueFromNode");
}
function valueFromNode(node, onVariable) {
    if (onVariable === void 0) { onVariable = defaultValueFromVariable; }
    switch (node.kind) {
        case 'Variable':
            return onVariable(node);
        case 'NullValue':
            return null;
        case 'IntValue':
            return parseInt(node.value);
        case 'FloatValue':
            return parseFloat(node.value);
        case 'ListValue':
            return node.values.map(function (v) { return valueFromNode(v, onVariable); });
        case 'ObjectValue': {
            var value = {};
            for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
                var field = _a[_i];
                value[field.name.value] = valueFromNode(field.value, onVariable);
            }
            return value;
        }
        default:
            return node.value;
    }
}
//# sourceMappingURL=storeUtils.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export getEnv */
/* unused harmony export isEnv */
/* harmony export (immutable) */ __webpack_exports__["b"] = isProduction;
/* harmony export (immutable) */ __webpack_exports__["a"] = isDevelopment;
/* harmony export (immutable) */ __webpack_exports__["c"] = isTest;
function getEnv() {
    if (typeof process !== 'undefined' && "production") {
        return "production";
    }
    return 'development';
}
function isEnv(env) {
    return getEnv() === env;
}
function isProduction() {
    return isEnv('production') === true;
}
function isDevelopment() {
    return isEnv('development') === true;
}
function isTest() {
    return isEnv('test') === true;
}
//# sourceMappingURL=environment.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(28)))

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(192).Observable;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isApolloError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloError; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (Array.isArray(err.graphQLErrors) && err.graphQLErrors.length !== 0) {
        err.graphQLErrors.forEach(function (graphQLError) {
            var errorMessage = graphQLError
                ? graphQLError.message
                : 'Error message not found.';
            message += "GraphQL error: " + errorMessage + "\n";
        });
    }
    if (err.networkError) {
        message += 'Network error: ' + err.networkError.message + '\n';
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    __extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.graphQLErrors = graphQLErrors || [];
        _this.networkError = networkError || null;
        if (!errorMessage) {
            _this.message = generateErrorMessage(_this);
        }
        else {
            _this.message = errorMessage;
        }
        _this.extraInfo = extraInfo;
        return _this;
    }
    return ApolloError;
}(Error));

//# sourceMappingURL=ApolloError.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectCache; });
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultNormalizedCacheFactory;
var ObjectCache = (function () {
    function ObjectCache(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
    }
    ObjectCache.prototype.toObject = function () {
        return this.data;
    };
    ObjectCache.prototype.get = function (dataId) {
        return this.data[dataId];
    };
    ObjectCache.prototype.set = function (dataId, value) {
        this.data[dataId] = value;
    };
    ObjectCache.prototype.delete = function (dataId) {
        this.data[dataId] = undefined;
    };
    ObjectCache.prototype.clear = function () {
        this.data = {};
    };
    ObjectCache.prototype.replace = function (newData) {
        this.data = newData || {};
    };
    return ObjectCache;
}());

function defaultNormalizedCacheFactory(seed) {
    return new ObjectCache(seed);
}
//# sourceMappingURL=objectCache.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(110);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const RENDER_TRANSACTIONS = 'render_transactions';
/* unused harmony export RENDER_TRANSACTIONS */


/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GraphQLError = __webpack_require__(30);

Object.defineProperty(exports, 'GraphQLError', {
  enumerable: true,
  get: function get() {
    return _GraphQLError.GraphQLError;
  }
});

var _syntaxError = __webpack_require__(154);

Object.defineProperty(exports, 'syntaxError', {
  enumerable: true,
  get: function get() {
    return _syntaxError.syntaxError;
  }
});

var _locatedError = __webpack_require__(155);

Object.defineProperty(exports, 'locatedError', {
  enumerable: true,
  get: function get() {
    return _locatedError.locatedError;
  }
});

var _printError = __webpack_require__(64);

Object.defineProperty(exports, 'printError', {
  enumerable: true,
  get: function get() {
    return _printError.printError;
  }
});

var _formatError = __webpack_require__(156);

Object.defineProperty(exports, 'formatError', {
  enumerable: true,
  get: function get() {
    return _formatError.formatError;
  }
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;

var _location = __webpack_require__(65);

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];
  if (error.nodes) {
    error.nodes.forEach(function (node) {
      if (node.loc) {
        printedLocations.push(highlightSourceAtLocation(node.loc.source, (0, _location.getLocation)(node.loc.source, node.loc.start)));
      }
    });
  } else if (error.source && error.locations) {
    var source = error.source;
    error.locations.forEach(function (location) {
      printedLocations.push(highlightSourceAtLocation(source, location));
    });
  }
  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}

/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function highlightSourceAtLocation(source, location) {
  var line = location.line;
  var lineOffset = source.locationOffset.line - 1;
  var columnOffset = getColumnOffset(source, location);
  var contextLine = line + lineOffset;
  var contextColumn = location.column + columnOffset;
  var prevLineNum = (contextLine - 1).toString();
  var lineNum = contextLine.toString();
  var nextLineNum = (contextLine + 1).toString();
  var padLen = nextLineNum.length;
  var lines = source.body.split(/\r\n|[\n\r]/g);
  lines[0] = whitespace(source.locationOffset.column - 1) + lines[0];
  var outputLines = [source.name + ' (' + contextLine + ':' + contextColumn + ')', line >= 2 && lpad(padLen, prevLineNum) + ': ' + lines[line - 2], lpad(padLen, lineNum) + ': ' + lines[line - 1], whitespace(2 + padLen + contextColumn - 1) + '^', line < lines.length && lpad(padLen, nextLineNum) + ': ' + lines[line]];
  return outputLines.filter(Boolean).join('\n');
}

function getColumnOffset(source, location) {
  return location.line === 1 ? source.locationOffset.column - 1 : 0;
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;


/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match = void 0;
  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }
  return { line: line, column: column };
}

/**
 * Represents a location in a Source.
 */

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(4), __webpack_require__(21), __webpack_require__(9), __webpack_require__(161), __webpack_require__(29)) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'redux', 'apollo-client', 'graphql-tag'], factory) :
	(factory((global['react-apollo'] = {}),global.React,global.PropTypes,global.redux,global.apolloClient,global.graphqlTag));
}(this, (function (exports,React,PropTypes,redux,apolloClient,graphqlTag) { 'use strict';

graphqlTag = graphqlTag && graphqlTag.hasOwnProperty('default') ? graphqlTag['default'] : graphqlTag;

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var ObservableQueryRecycler = (function () {
    function ObservableQueryRecycler() {
        this.observableQueries = [];
    }
    ObservableQueryRecycler.prototype.recycle = function (observableQuery) {
        observableQuery.setOptions({
            fetchPolicy: 'standby',
            pollInterval: 0,
            fetchResults: false,
        });
        this.observableQueries.push({
            observableQuery: observableQuery,
            subscription: observableQuery.subscribe({}),
        });
    };
    ObservableQueryRecycler.prototype.reuse = function (options) {
        if (this.observableQueries.length <= 0) {
            return null;
        }
        var _a = this.observableQueries.pop(), observableQuery = _a.observableQuery, subscription = _a.subscription;
        subscription.unsubscribe();
        var ssr = options.ssr, skip = options.skip, client = options.client, modifiableOpts = __rest(options, ["ssr", "skip", "client"]);
        observableQuery.setOptions(__assign({}, modifiableOpts, { pollInterval: options.pollInterval, fetchPolicy: options.fetchPolicy }));
        return observableQuery;
    };
    return ObservableQueryRecycler;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var QueryRecyclerProvider = (function (_super) {
    __extends$1(QueryRecyclerProvider, _super);
    function QueryRecyclerProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.recyclers = new WeakMap();
        _this.getQueryRecycler = _this.getQueryRecycler.bind(_this);
        return _this;
    }
    QueryRecyclerProvider.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if (this.context.client !== nextContext.client) {
            this.recyclers = new WeakMap();
        }
    };
    QueryRecyclerProvider.prototype.getQueryRecycler = function (component) {
        if (!this.recyclers.has(component)) {
            this.recyclers.set(component, new ObservableQueryRecycler());
        }
        return this.recyclers.get(component);
    };
    QueryRecyclerProvider.prototype.getChildContext = function () {
        return ({
            getQueryRecycler: this.getQueryRecycler
        });
    };
    QueryRecyclerProvider.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    QueryRecyclerProvider.propTypes = {
        children: PropTypes.element.isRequired
    };
    QueryRecyclerProvider.contextTypes = {
        client: PropTypes.object
    };
    QueryRecyclerProvider.childContextTypes = {
        getQueryRecycler: PropTypes.func.isRequired
    };
    return QueryRecyclerProvider;
}(React.Component));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var invariant = __webpack_require__(8);
var ApolloProvider = (function (_super) {
    __extends(ApolloProvider, _super);
    function ApolloProvider(props, context) {
        var _this = _super.call(this, props, context) || this;
        invariant(props.client, 'ApolloClient was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.');
        if (!props.store && typeof props.client.initStore === 'function') {
            props.client.initStore();
        }
        return _this;
    }
    ApolloProvider.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.client !== this.props.client &&
            !nextProps.store &&
            typeof nextProps.client.initStore === 'function') {
            nextProps.client.initStore();
        }
    };
    ApolloProvider.prototype.getChildContext = function () {
        return {
            store: this.props.store || this.context.store,
            client: this.props.client,
        };
    };
    ApolloProvider.prototype.render = function () {
        return (React.createElement(QueryRecyclerProvider, null, React.Children.only(this.props.children)));
    };
    ApolloProvider.propTypes = {
        store: PropTypes.shape({
            subscribe: PropTypes.func.isRequired,
            dispatch: PropTypes.func.isRequired,
            getState: PropTypes.func.isRequired,
        }),
        client: PropTypes.object.isRequired,
        children: PropTypes.element.isRequired,
    };
    ApolloProvider.childContextTypes = {
        store: PropTypes.object,
        client: PropTypes.object.isRequired,
    };
    ApolloProvider.contextTypes = {
        store: PropTypes.object,
    };
    return ApolloProvider;
}(React.Component));

function shallowEqual(objA, objB) {
    if (!objA || !objB)
        return false;
    if (objA === objB)
        return true;
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;
    var hasOwn = Object.prototype.hasOwnProperty;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }
    return true;
}

var invariant$2 = __webpack_require__(8);
var DocumentType;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));
function parser(document) {
    var variables, type, name;
    invariant$2(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document");
    var fragments = document.definitions.filter(function (x) { return x.kind === 'FragmentDefinition'; });
    var queries = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'query';
    });
    var mutations = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'mutation';
    });
    var subscriptions = document.definitions.filter(function (x) {
        return x.kind === 'OperationDefinition' && x.operation === 'subscription';
    });
    invariant$2(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well");
    invariant$2(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + document + " had " + queries.length + " queries, " + subscriptions.length + " subscriptions and " + mutations.length + " mutations. You can use 'compose' to join multiple operation types to a component");
    type = queries.length ? DocumentType.Query : DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length ? mutations : subscriptions;
    invariant$2(definitions.length === 1, "react-apollo only supports one defintion per HOC. " + document + " had " + definitions.length + " definitions. You can use 'compose' to join multiple operation types to a component");
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    var hasName = definition.name && definition.name.kind === 'Name';
    name = hasName ? definition.name.value : 'data';
    return { name: name, type: type, variables: variables };
}

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var pick = __webpack_require__(182);
var invariant$1 = __webpack_require__(8);
var assign = __webpack_require__(16);
var hoistNonReactStatics = __webpack_require__(23);
var defaultMapPropsToOptions = function (props) { return ({}); };
var defaultMapResultToProps = function (props) { return props; };
var defaultMapPropsToSkip = function (props) { return false; };
function observableQueryFields(observable) {
    var fields = pick(observable, 'variables', 'refetch', 'fetchMore', 'updateQuery', 'startPolling', 'stopPolling', 'subscribeToMore');
    Object.keys(fields).forEach(function (key) {
        if (typeof fields[key] === 'function') {
            fields[key] = fields[key].bind(observable);
        }
    });
    return fields;
}
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
var nextVersion = 0;
function graphql(document, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var _a = operationOptions.options, options = _a === void 0 ? defaultMapPropsToOptions : _a, _b = operationOptions.skip, skip = _b === void 0 ? defaultMapPropsToSkip : _b, _c = operationOptions.alias, alias = _c === void 0 ? 'Apollo' : _c;
    var mapPropsToOptions = options;
    if (typeof mapPropsToOptions !== 'function')
        mapPropsToOptions = function () { return options; };
    var mapPropsToSkip = skip;
    if (typeof mapPropsToSkip !== 'function')
        mapPropsToSkip = function () { return skip; };
    var mapResultToProps = operationOptions.props;
    var operation = parser(document);
    var version = nextVersion++;
    function wrapWithApolloComponent(WrappedComponent) {
        var graphQLDisplayName = alias + "(" + getDisplayName(WrappedComponent) + ")";
        var GraphQL = (function (_super) {
            __extends$2(GraphQL, _super);
            function GraphQL(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.previousData = {};
                _this.version = version;
                _this.type = operation.type;
                _this.dataForChildViaMutation = _this.dataForChildViaMutation.bind(_this);
                _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
                return _this;
            }
            GraphQL.prototype.componentWillMount = function () {
                if (!this.shouldSkip(this.props)) {
                    this.setInitialProps();
                }
            };
            GraphQL.prototype.componentDidMount = function () {
                this.hasMounted = true;
                if (this.type === DocumentType.Mutation)
                    return;
                if (!this.shouldSkip(this.props)) {
                    this.subscribeToQuery();
                    if (this.refetcherQueue) {
                        var _a = this.refetcherQueue, args = _a.args, resolve = _a.resolve, reject = _a.reject;
                        this.queryObservable.refetch(args).then(resolve).catch(reject);
                    }
                }
            };
            GraphQL.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
                var client = mapPropsToOptions(nextProps).client;
                if (shallowEqual(this.props, nextProps) &&
                    (this.client === client || this.client === nextContext.client)) {
                    return;
                }
                this.shouldRerender = true;
                if (this.client !== client && this.client !== nextContext.client) {
                    if (client) {
                        this.client = client;
                    }
                    else {
                        this.client = nextContext.client;
                    }
                    this.unsubscribeFromQuery();
                    this.queryObservable = null;
                    this.previousData = {};
                    this.updateQuery(nextProps);
                    if (!this.shouldSkip(nextProps)) {
                        this.subscribeToQuery();
                    }
                    return;
                }
                if (this.type === DocumentType.Mutation) {
                    return;
                }
                if (this.type === DocumentType.Subscription &&
                    operationOptions.shouldResubscribe &&
                    operationOptions.shouldResubscribe(this.props, nextProps)) {
                    this.unsubscribeFromQuery();
                    delete this.queryObservable;
                    this.updateQuery(nextProps);
                    this.subscribeToQuery();
                    return;
                }
                if (this.shouldSkip(nextProps)) {
                    if (!this.shouldSkip(this.props)) {
                        this.unsubscribeFromQuery();
                    }
                    return;
                }
                this.updateQuery(nextProps);
                this.subscribeToQuery();
            };
            GraphQL.prototype.componentWillUnmount = function () {
                if (this.type === DocumentType.Query) {
                    if (this.queryObservable) {
                        var recycler = this.getQueryRecycler();
                        if (recycler) {
                            recycler.recycle(this.queryObservable);
                            delete this.queryObservable;
                        }
                    }
                    this.unsubscribeFromQuery();
                }
                if (this.type === DocumentType.Subscription)
                    this.unsubscribeFromQuery();
                this.hasMounted = false;
            };
            GraphQL.prototype.getQueryRecycler = function () {
                return (this.context.getQueryRecycler &&
                    this.context.getQueryRecycler(GraphQL));
            };
            GraphQL.prototype.getClient = function (props) {
                if (this.client)
                    return this.client;
                var client = mapPropsToOptions(props).client;
                if (client) {
                    this.client = client;
                }
                else {
                    this.client = this.context.client;
                }
                invariant$1(!!this.client, "Could not find \"client\" in the context of " +
                    ("\"" + graphQLDisplayName + "\". ") +
                    "Wrap the root component in an <ApolloProvider>");
                return this.client;
            };
            GraphQL.prototype.calculateOptions = function (props, newOpts) {
                if (props === void 0) { props = this.props; }
                var opts = mapPropsToOptions(props);
                if (newOpts && newOpts.variables) {
                    newOpts.variables = assign({}, opts.variables, newOpts.variables);
                }
                if (newOpts)
                    opts = assign({}, opts, newOpts);
                if (opts.variables || !operation.variables.length)
                    return opts;
                var variables = {};
                for (var _i = 0, _a = operation.variables; _i < _a.length; _i++) {
                    var _b = _a[_i], variable = _b.variable, type = _b.type;
                    if (!variable.name || !variable.name.value)
                        continue;
                    if (typeof props[variable.name.value] !== 'undefined') {
                        variables[variable.name.value] = props[variable.name.value];
                        continue;
                    }
                    if (type.kind !== 'NonNullType') {
                        variables[variable.name.value] = null;
                        continue;
                    }
                    invariant$1(typeof props[variable.name.value] !== 'undefined', "The operation '" + operation.name + "' wrapping '" + getDisplayName(WrappedComponent) + "' " +
                        ("is expecting a variable: '" + variable.name
                            .value + "' but it was not found in the props ") +
                        ("passed to '" + graphQLDisplayName + "'"));
                }
                opts = __assign$1({}, opts, { variables: variables });
                return opts;
            };
            GraphQL.prototype.calculateResultProps = function (result) {
                var name = this.type === DocumentType.Mutation ? 'mutate' : 'data';
                if (operationOptions.name)
                    name = operationOptions.name;
                var newResult = (_a = {},
                    _a[name] = result,
                    _a.ownProps = this.props,
                    _a);
                if (mapResultToProps)
                    return mapResultToProps(newResult);
                return _b = {}, _b[name] = defaultMapResultToProps(result), _b;
                var _a, _b;
            };
            GraphQL.prototype.setInitialProps = function () {
                if (this.type === DocumentType.Mutation) {
                    return;
                }
                var opts = this.calculateOptions(this.props);
                this.createQuery(opts);
            };
            GraphQL.prototype.createQuery = function (opts, props) {
                if (props === void 0) { props = this.props; }
                if (this.type === DocumentType.Subscription) {
                    this.queryObservable = this.getClient(props).subscribe(assign({
                        query: document,
                    }, opts));
                }
                else {
                    var recycler = this.getQueryRecycler();
                    var queryObservable = null;
                    if (recycler)
                        queryObservable = recycler.reuse(opts);
                    if (queryObservable === null) {
                        this.queryObservable = this.getClient(props).watchQuery(assign({
                            query: document,
                            metadata: {
                                reactComponent: {
                                    displayName: graphQLDisplayName,
                                },
                            },
                        }, opts));
                    }
                    else {
                        this.queryObservable = queryObservable;
                    }
                }
            };
            GraphQL.prototype.updateQuery = function (props) {
                var opts = this.calculateOptions(props);
                if (!this.queryObservable) {
                    this.createQuery(opts, props);
                }
                if (this.queryObservable._setOptionsNoResult) {
                    this.queryObservable._setOptionsNoResult(opts);
                }
                else {
                    if (this.queryObservable.setOptions) {
                        this.queryObservable
                            .setOptions(opts)
                            .catch(function (error) { return null; });
                    }
                }
            };
            GraphQL.prototype.fetchData = function () {
                if (this.shouldSkip())
                    return false;
                if (operation.type === DocumentType.Mutation ||
                    operation.type === DocumentType.Subscription)
                    return false;
                var opts = this.calculateOptions();
                if (opts.ssr === false)
                    return false;
                if (opts.fetchPolicy === 'network-only' ||
                    opts.fetchPolicy === 'cache-and-network') {
                    opts.fetchPolicy = 'cache-first';
                }
                var observable = this.getClient(this.props).watchQuery(assign({ query: document }, opts));
                var result = observable.currentResult();
                if (result.loading) {
                    return observable.result();
                }
                else {
                    return false;
                }
            };
            GraphQL.prototype.subscribeToQuery = function () {
                var _this = this;
                if (this.querySubscription) {
                    return;
                }
                var next = function (results) {
                    if (_this.type === DocumentType.Subscription) {
                        _this.lastSubscriptionData = results;
                        results = { data: results };
                    }
                    var clashingKeys = Object.keys(observableQueryFields(results.data));
                    invariant$1(clashingKeys.length === 0, "the result of the '" + graphQLDisplayName + "' operation contains keys that " +
                        "conflict with the return object." +
                        clashingKeys.map(function (k) { return "'" + k + "'"; }).join(', ') +
                        " not allowed.");
                    _this.forceRenderChildren();
                };
                var handleError = function (error) {
                    if (error.hasOwnProperty('graphQLErrors'))
                        return next({ error: error });
                    throw error;
                };
                this.querySubscription = this.queryObservable.subscribe({
                    next: next,
                    error: handleError,
                });
            };
            GraphQL.prototype.unsubscribeFromQuery = function () {
                if (this.querySubscription) {
                    this.querySubscription.unsubscribe();
                    delete this.querySubscription;
                }
            };
            GraphQL.prototype.shouldSkip = function (props) {
                if (props === void 0) { props = this.props; }
                return (mapPropsToSkip(props) || mapPropsToOptions(props).skip);
            };
            GraphQL.prototype.forceRenderChildren = function () {
                this.shouldRerender = true;
                if (this.hasMounted)
                    this.forceUpdate();
            };
            GraphQL.prototype.getWrappedInstance = function () {
                invariant$1(operationOptions.withRef, "To access the wrapped instance, you need to specify " +
                    "{ withRef: true } in the options");
                return this.wrappedInstance;
            };
            GraphQL.prototype.setWrappedInstance = function (ref) {
                this.wrappedInstance = ref;
            };
            GraphQL.prototype.dataForChildViaMutation = function (mutationOpts) {
                var opts = this.calculateOptions(this.props, mutationOpts);
                if (typeof opts.variables === 'undefined')
                    delete opts.variables;
                opts.mutation = document;
                return this.getClient(this.props).mutate(opts);
            };
            GraphQL.prototype.dataForChild = function () {
                var _this = this;
                if (this.type === DocumentType.Mutation) {
                    return this.dataForChildViaMutation;
                }
                var opts = this.calculateOptions(this.props);
                var data = {};
                assign(data, observableQueryFields(this.queryObservable));
                if (this.type === DocumentType.Subscription) {
                    assign(data, {
                        loading: !this.lastSubscriptionData,
                        variables: opts.variables,
                    }, this.lastSubscriptionData);
                }
                else {
                    var currentResult = this.queryObservable.currentResult();
                    var loading = currentResult.loading, error_1 = currentResult.error, networkStatus = currentResult.networkStatus;
                    assign(data, { loading: loading, networkStatus: networkStatus });
                    var logErrorTimeoutId_1 = setTimeout(function () {
                        if (error_1) {
                            console.error('Unhandled (in react-apollo)', error_1.stack || error_1);
                        }
                    }, 10);
                    Object.defineProperty(data, 'error', {
                        configurable: true,
                        enumerable: true,
                        get: function () {
                            clearTimeout(logErrorTimeoutId_1);
                            return error_1;
                        },
                    });
                    if (loading) {
                        assign(data, this.previousData, currentResult.data);
                    }
                    else if (error_1) {
                        assign(data, (this.queryObservable.getLastResult() || {}).data);
                    }
                    else {
                        assign(data, currentResult.data);
                        this.previousData = currentResult.data;
                    }
                    if (!this.querySubscription) {
                        data.refetch = function (args) {
                            return new Promise(function (r, f) {
                                _this.refetcherQueue = { resolve: r, reject: f, args: args };
                            });
                        };
                    }
                }
                return data;
            };
            GraphQL.prototype.render = function () {
                if (this.shouldSkip()) {
                    if (operationOptions.withRef) {
                        return React.createElement(WrappedComponent, assign({}, this.props, { ref: this.setWrappedInstance }));
                    }
                    return React.createElement(WrappedComponent, this.props);
                }
                var _a = this, shouldRerender = _a.shouldRerender, renderedElement = _a.renderedElement, props = _a.props;
                this.shouldRerender = false;
                if (!shouldRerender &&
                    renderedElement &&
                    renderedElement.type === WrappedComponent) {
                    return renderedElement;
                }
                var data = this.dataForChild();
                var clientProps = this.calculateResultProps(data);
                var mergedPropsAndData = assign({}, props, clientProps);
                if (operationOptions.withRef)
                    mergedPropsAndData.ref = this.setWrappedInstance;
                this.renderedElement = React.createElement(WrappedComponent, mergedPropsAndData);
                return this.renderedElement;
            };
            GraphQL.displayName = graphQLDisplayName;
            GraphQL.WrappedComponent = WrappedComponent;
            GraphQL.contextTypes = {
                client: PropTypes.object,
                getQueryRecycler: PropTypes.func,
            };
            return GraphQL;
        }(React.Component));
        return hoistNonReactStatics(GraphQL, WrappedComponent, {});
    }
    return wrapWithApolloComponent;
}

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var invariant$3 = __webpack_require__(8);
var assign$1 = __webpack_require__(16);
var hoistNonReactStatics$1 = __webpack_require__(23);
function getDisplayName$1(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function withApollo(WrappedComponent, operationOptions) {
    if (operationOptions === void 0) { operationOptions = {}; }
    var withDisplayName = "withApollo(" + getDisplayName$1(WrappedComponent) + ")";
    var WithApollo = (function (_super) {
        __extends$3(WithApollo, _super);
        function WithApollo(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.client = context.client;
            _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
            invariant$3(!!_this.client, "Could not find \"client\" in the context of " +
                ("\"" + withDisplayName + "\". ") +
                "Wrap the root component in an <ApolloProvider>");
            return _this;
        }
        WithApollo.prototype.getWrappedInstance = function () {
            invariant$3(operationOptions.withRef, "To access the wrapped instance, you need to specify " +
                "{ withRef: true } in the options");
            return this.wrappedInstance;
        };
        WithApollo.prototype.setWrappedInstance = function (ref) {
            this.wrappedInstance = ref;
        };
        WithApollo.prototype.render = function () {
            var props = assign$1({}, this.props);
            props.client = this.client;
            if (operationOptions.withRef)
                props.ref = this.setWrappedInstance;
            return React.createElement(WrappedComponent, props);
        };
        WithApollo.displayName = withDisplayName;
        WithApollo.WrappedComponent = WrappedComponent;
        WithApollo.contextTypes = { client: PropTypes.object.isRequired };
        return WithApollo;
    }(React.Component));
    return hoistNonReactStatics$1(WithApollo, WrappedComponent, {});
}

exports.ApolloProvider = ApolloProvider;
exports.graphql = graphql;
exports.withApollo = withApollo;
exports.compose = redux.compose;
exports.gql = graphqlTag;
Object.keys(apolloClient).forEach(function (key) { exports[key] = apolloClient[key]; });

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-apollo.browser.umd.js.map


/***/ }),
/* 67 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__writeToStore__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_proxy__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__queries_getFromAST__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storeUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__replaceQueryResults__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__readFromStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_errorHandling__ = __webpack_require__(73);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








function data(previousState, action, config) {
    if (previousState === void 0) { previousState = {}; }
    var constAction = action;
    if (Object(__WEBPACK_IMPORTED_MODULE_0__actions__["d" /* isQueryResultAction */])(action)) {
        if (action.fetchMoreForQueryId) {
            return previousState;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__storeUtils__["b" /* graphQLResultHasError */])(action.result)) {
            var clonedState = __assign({}, previousState);
            var newState_1 = Object(__WEBPACK_IMPORTED_MODULE_1__writeToStore__["b" /* writeResultToStore */])({
                result: action.result.data,
                dataId: 'ROOT_QUERY',
                document: action.document,
                variables: action.variables,
                store: clonedState,
                dataIdFromObject: config.dataIdFromObject,
                fragmentMatcherFunction: config.fragmentMatcher,
            });
            if (action.extraReducers) {
                action.extraReducers.forEach(function (reducer) {
                    newState_1 = reducer(newState_1, constAction);
                });
            }
            return newState_1;
        }
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__actions__["f" /* isSubscriptionResultAction */])(action)) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_4__storeUtils__["b" /* graphQLResultHasError */])(action.result)) {
            var clonedState = __assign({}, previousState);
            var newState_2 = Object(__WEBPACK_IMPORTED_MODULE_1__writeToStore__["b" /* writeResultToStore */])({
                result: action.result.data,
                dataId: 'ROOT_SUBSCRIPTION',
                document: action.document,
                variables: action.variables,
                store: clonedState,
                dataIdFromObject: config.dataIdFromObject,
                fragmentMatcherFunction: config.fragmentMatcher,
            });
            if (action.extraReducers) {
                action.extraReducers.forEach(function (reducer) {
                    newState_2 = reducer(newState_2, constAction);
                });
            }
            return newState_2;
        }
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__actions__["c" /* isMutationResultAction */])(constAction)) {
        if (!constAction.result.errors) {
            var clonedState = __assign({}, previousState);
            var newState_3 = Object(__WEBPACK_IMPORTED_MODULE_1__writeToStore__["b" /* writeResultToStore */])({
                result: constAction.result.data,
                dataId: 'ROOT_MUTATION',
                document: constAction.document,
                variables: constAction.variables,
                store: clonedState,
                dataIdFromObject: config.dataIdFromObject,
                fragmentMatcherFunction: config.fragmentMatcher,
            });
            var updateQueries_1 = constAction.updateQueries;
            if (updateQueries_1) {
                Object.keys(updateQueries_1)
                    .filter(function (id) { return updateQueries_1[id]; })
                    .forEach(function (queryId) {
                    var _a = updateQueries_1[queryId], query = _a.query, reducer = _a.reducer;
                    var _b = Object(__WEBPACK_IMPORTED_MODULE_6__readFromStore__["a" /* diffQueryAgainstStore */])({
                        store: previousState,
                        query: query.document,
                        variables: query.variables,
                        returnPartialData: true,
                        fragmentMatcherFunction: config.fragmentMatcher,
                        config: config,
                    }), currentQueryResult = _b.result, isMissing = _b.isMissing;
                    if (isMissing) {
                        return;
                    }
                    var nextQueryResult = Object(__WEBPACK_IMPORTED_MODULE_7__util_errorHandling__["a" /* tryFunctionOrLogError */])(function () {
                        return reducer(currentQueryResult, {
                            mutationResult: constAction.result,
                            queryName: Object(__WEBPACK_IMPORTED_MODULE_3__queries_getFromAST__["h" /* getOperationName */])(query.document),
                            queryVariables: query.variables,
                        });
                    });
                    if (nextQueryResult) {
                        newState_3 = Object(__WEBPACK_IMPORTED_MODULE_1__writeToStore__["b" /* writeResultToStore */])({
                            result: nextQueryResult,
                            dataId: 'ROOT_QUERY',
                            document: query.document,
                            variables: query.variables,
                            store: newState_3,
                            dataIdFromObject: config.dataIdFromObject,
                            fragmentMatcherFunction: config.fragmentMatcher,
                        });
                    }
                });
            }
            if (constAction.update) {
                var update_1 = constAction.update;
                var proxy_1 = new __WEBPACK_IMPORTED_MODULE_2__data_proxy__["b" /* TransactionDataProxy */](newState_3, config);
                Object(__WEBPACK_IMPORTED_MODULE_7__util_errorHandling__["a" /* tryFunctionOrLogError */])(function () { return update_1(proxy_1, constAction.result); });
                var writes = proxy_1.finish();
                newState_3 = data(newState_3, { type: 'APOLLO_WRITE', writes: writes }, config);
            }
            if (constAction.extraReducers) {
                constAction.extraReducers.forEach(function (reducer) {
                    newState_3 = reducer(newState_3, constAction);
                });
            }
            return newState_3;
        }
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__actions__["g" /* isUpdateQueryResultAction */])(constAction)) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__replaceQueryResults__["a" /* replaceQueryResults */])(previousState, constAction, config);
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__actions__["e" /* isStoreResetAction */])(action)) {
        return {};
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_0__actions__["h" /* isWriteAction */])(action)) {
        return action.writes.reduce(function (currentState, write) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__writeToStore__["b" /* writeResultToStore */])({
                result: write.result,
                dataId: write.rootId,
                document: write.document,
                variables: write.variables,
                store: currentState,
                dataIdFromObject: config.dataIdFromObject,
                fragmentMatcherFunction: config.fragmentMatcher,
            });
        }, __assign({}, previousState));
    }
    return previousState;
}
//# sourceMappingURL=store.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReduxDataProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TransactionDataProxy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__optimistic_data_store__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__readFromStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__writeToStore__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__ = __webpack_require__(10);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var ReduxDataProxy = (function () {
    function ReduxDataProxy(store, reduxRootSelector, fragmentMatcher, reducerConfig) {
        this.store = store;
        this.reduxRootSelector = reduxRootSelector;
        this.reducerConfig = reducerConfig;
        this.fragmentMatcher = fragmentMatcher;
    }
    ReduxDataProxy.prototype.readQuery = function (_a) {
        var query = _a.query, variables = _a.variables;
        if (this.reducerConfig.addTypename) {
            query = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(query);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__readFromStore__["b" /* readQueryFromStore */])({
            rootId: 'ROOT_QUERY',
            store: Object(__WEBPACK_IMPORTED_MODULE_1__optimistic_data_store__["a" /* getDataWithOptimisticResults */])(this.reduxRootSelector(this.store.getState())),
            query: query,
            variables: variables,
            fragmentMatcherFunction: this.fragmentMatcher.match,
            config: this.reducerConfig,
        });
    };
    ReduxDataProxy.prototype.readFragment = function (_a) {
        var id = _a.id, fragment = _a.fragment, fragmentName = _a.fragmentName, variables = _a.variables;
        var query = Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["e" /* getFragmentQueryDocument */])(fragment, fragmentName);
        var data = Object(__WEBPACK_IMPORTED_MODULE_1__optimistic_data_store__["a" /* getDataWithOptimisticResults */])(this.reduxRootSelector(this.store.getState()));
        if (typeof data[id] === 'undefined') {
            return null;
        }
        if (this.reducerConfig.addTypename) {
            query = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(query);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__readFromStore__["b" /* readQueryFromStore */])({
            rootId: id,
            store: data,
            query: query,
            variables: variables,
            fragmentMatcherFunction: this.fragmentMatcher.match,
            config: this.reducerConfig,
        });
    };
    ReduxDataProxy.prototype.writeQuery = function (_a) {
        var data = _a.data, query = _a.query, variables = _a.variables;
        if (this.reducerConfig.addTypename) {
            query = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(query);
        }
        this.store.dispatch({
            type: 'APOLLO_WRITE',
            writes: [
                {
                    rootId: 'ROOT_QUERY',
                    result: data,
                    document: query,
                    operationName: Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["h" /* getOperationName */])(query),
                    variables: variables || {},
                },
            ],
        });
    };
    ReduxDataProxy.prototype.writeFragment = function (_a) {
        var data = _a.data, id = _a.id, fragment = _a.fragment, fragmentName = _a.fragmentName, variables = _a.variables;
        var document = Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["e" /* getFragmentQueryDocument */])(fragment, fragmentName);
        if (this.reducerConfig.addTypename) {
            document = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(document);
        }
        this.store.dispatch({
            type: 'APOLLO_WRITE',
            writes: [
                {
                    rootId: id,
                    result: data,
                    document: document,
                    operationName: Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["h" /* getOperationName */])(document),
                    variables: variables || {},
                },
            ],
        });
    };
    return ReduxDataProxy;
}());

var TransactionDataProxy = (function () {
    function TransactionDataProxy(data, reducerConfig) {
        this.data = __assign({}, data);
        this.reducerConfig = reducerConfig;
        this.writes = [];
        this.isFinished = false;
    }
    TransactionDataProxy.prototype.finish = function () {
        this.assertNotFinished();
        var writes = this.writes;
        this.writes = [];
        this.isFinished = true;
        return writes;
    };
    TransactionDataProxy.prototype.readQuery = function (_a) {
        var query = _a.query, variables = _a.variables;
        this.assertNotFinished();
        if (this.reducerConfig.addTypename) {
            query = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(query);
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__readFromStore__["b" /* readQueryFromStore */])({
            rootId: 'ROOT_QUERY',
            store: this.data,
            query: query,
            variables: variables,
            config: this.reducerConfig,
            fragmentMatcherFunction: this.reducerConfig.fragmentMatcher,
        });
    };
    TransactionDataProxy.prototype.readFragment = function (_a) {
        var id = _a.id, fragment = _a.fragment, fragmentName = _a.fragmentName, variables = _a.variables;
        this.assertNotFinished();
        if (!fragment) {
            throw new Error('fragment option is required. Please pass a GraphQL fragment to readFragment.');
        }
        var data = this.data;
        var query = Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["e" /* getFragmentQueryDocument */])(fragment, fragmentName);
        if (this.reducerConfig.addTypename) {
            query = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(query);
        }
        if (typeof data[id] === 'undefined') {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_2__readFromStore__["b" /* readQueryFromStore */])({
            rootId: id,
            store: data,
            query: query,
            variables: variables,
            config: this.reducerConfig,
            fragmentMatcherFunction: this.reducerConfig.fragmentMatcher,
        });
    };
    TransactionDataProxy.prototype.writeQuery = function (_a) {
        var data = _a.data, query = _a.query, variables = _a.variables;
        this.assertNotFinished();
        if (this.reducerConfig.addTypename) {
            query = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(query);
        }
        this.applyWrite({
            rootId: 'ROOT_QUERY',
            result: data,
            document: query,
            operationName: Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["h" /* getOperationName */])(query),
            variables: variables || {},
        });
    };
    TransactionDataProxy.prototype.writeFragment = function (_a) {
        var data = _a.data, id = _a.id, fragment = _a.fragment, fragmentName = _a.fragmentName, variables = _a.variables;
        this.assertNotFinished();
        if (!fragment) {
            throw new Error('fragment option is required. Please pass a GraphQL fragment to writeFragment.');
        }
        var query = Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["e" /* getFragmentQueryDocument */])(fragment, fragmentName);
        if (this.reducerConfig.addTypename) {
            query = Object(__WEBPACK_IMPORTED_MODULE_4__queries_queryTransform__["a" /* addTypenameToDocument */])(query);
        }
        this.applyWrite({
            rootId: id,
            result: data,
            document: query,
            operationName: Object(__WEBPACK_IMPORTED_MODULE_0__queries_getFromAST__["h" /* getOperationName */])(query),
            variables: variables || {},
        });
    };
    TransactionDataProxy.prototype.assertNotFinished = function () {
        if (this.isFinished) {
            throw new Error('Cannot call transaction methods after the transaction has finished.');
        }
    };
    TransactionDataProxy.prototype.applyWrite = function (write) {
        Object(__WEBPACK_IMPORTED_MODULE_3__writeToStore__["b" /* writeResultToStore */])({
            result: write.result,
            dataId: write.rootId,
            document: write.document,
            variables: write.variables,
            store: this.data,
            dataIdFromObject: this.reducerConfig.dataIdFromObject || (function () { return null; }),
            fragmentMatcherFunction: this.reducerConfig.fragmentMatcher,
        });
        this.writes.push(write);
    };
    return TransactionDataProxy;
}());

//# sourceMappingURL=proxy.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataWithOptimisticResults;
/* harmony export (immutable) */ __webpack_exports__["b"] = optimistic;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_store__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_assign__ = __webpack_require__(5);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var optimisticDefaultState = [];
function getDataWithOptimisticResults(store) {
    if (store.optimistic.length === 0) {
        return store.data;
    }
    var patches = store.optimistic.map(function (opt) { return opt.data; });
    return __WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* assign */].apply(void 0, [{}, store.data].concat(patches));
}
function optimistic(previousState, action, store, config) {
    if (previousState === void 0) { previousState = optimisticDefaultState; }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__actions__["b" /* isMutationInitAction */])(action) && action.optimisticResponse) {
        var optimisticResponse = void 0;
        if (typeof action.optimisticResponse === 'function') {
            optimisticResponse = action.optimisticResponse(action.variables);
        }
        else {
            optimisticResponse = action.optimisticResponse;
        }
        var fakeMutationResultAction = {
            type: 'APOLLO_MUTATION_RESULT',
            result: { data: optimisticResponse },
            document: action.mutation,
            operationName: action.operationName,
            variables: action.variables,
            mutationId: action.mutationId,
            extraReducers: action.extraReducers,
            updateQueries: action.updateQueries,
            update: action.update,
        };
        var optimisticData = getDataWithOptimisticResults(__assign({}, store, { optimistic: previousState }));
        var patch = getOptimisticDataPatch(optimisticData, fakeMutationResultAction, store.queries, store.mutations, config);
        var optimisticState = {
            action: fakeMutationResultAction,
            data: patch,
            mutationId: action.mutationId,
        };
        var newState = previousState.concat([optimisticState]);
        return newState;
    }
    else if ((Object(__WEBPACK_IMPORTED_MODULE_0__actions__["a" /* isMutationErrorAction */])(action) || Object(__WEBPACK_IMPORTED_MODULE_0__actions__["c" /* isMutationResultAction */])(action)) &&
        previousState.some(function (change) { return change.mutationId === action.mutationId; })) {
        return rollbackOptimisticData(function (change) { return change.mutationId === action.mutationId; }, previousState, store, config);
    }
    return previousState;
}
function getOptimisticDataPatch(previousData, optimisticAction, queries, mutations, config) {
    var optimisticData = Object(__WEBPACK_IMPORTED_MODULE_1__data_store__["a" /* data */])(previousData, optimisticAction, config);
    var patch = {};
    Object.keys(optimisticData).forEach(function (key) {
        if (optimisticData[key] !== previousData[key]) {
            patch[key] = optimisticData[key];
        }
    });
    return patch;
}
function rollbackOptimisticData(filterFn, previousState, store, config) {
    if (previousState === void 0) { previousState = optimisticDefaultState; }
    var optimisticData = Object(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* assign */])({}, store.data);
    var newState = previousState
        .filter(function (item) { return !filterFn(item); })
        .map(function (change) {
        var patch = getOptimisticDataPatch(optimisticData, change.action, store.queries, store.mutations, config);
        Object(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* assign */])(optimisticData, patch);
        return __assign({}, change, { data: patch });
    });
    return newState;
}
//# sourceMappingURL=store.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getFromAST_1 = __webpack_require__(169);
var directives_1 = __webpack_require__(170);
var storeUtils_1 = __webpack_require__(72);
function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
    if (execOptions === void 0) { execOptions = {}; }
    var mainDefinition = getFromAST_1.getMainDefinition(document);
    var fragments = getFromAST_1.getFragmentDefinitions(document);
    var fragmentMap = getFromAST_1.createFragmentMap(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
    var execContext = {
        fragmentMap: fragmentMap,
        contextValue: contextValue,
        variableValues: variableValues,
        resultMapper: resultMapper,
        resolver: resolver,
        fragmentMatcher: fragmentMatcher,
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
exports.graphql = graphql;
function executeSelectionSet(selectionSet, rootValue, execContext) {
    var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
    var result = {};
    selectionSet.selections.forEach(function (selection) {
        if (!directives_1.shouldInclude(selection, variables)) {
            return;
        }
        if (storeUtils_1.isField(selection)) {
            var fieldResult = executeField(selection, rootValue, execContext);
            var resultFieldKey = storeUtils_1.resultKeyNameFromField(selection);
            if (fieldResult !== undefined) {
                if (result[resultFieldKey] === undefined) {
                    result[resultFieldKey] = fieldResult;
                }
                else {
                    merge(result[resultFieldKey], fieldResult);
                }
            }
        }
        else {
            var fragment = void 0;
            if (storeUtils_1.isInlineFragment(selection)) {
                fragment = selection;
            }
            else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value);
                }
            }
            var typeCondition = fragment.typeCondition.name.value;
            if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                var fragmentResult = executeSelectionSet(fragment.selectionSet, rootValue, execContext);
                merge(result, fragmentResult);
            }
        }
    });
    if (execContext.resultMapper) {
        return execContext.resultMapper(result, rootValue);
    }
    return result;
}
function executeField(field, rootValue, execContext) {
    var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
    var fieldName = field.name.value;
    var args = storeUtils_1.argumentsObjectFromField(field, variables);
    var info = {
        isLeaf: !field.selectionSet,
        resultKey: storeUtils_1.resultKeyNameFromField(field),
        directives: directives_1.getDirectiveInfoFromField(field, variables),
    };
    var result = resolver(fieldName, rootValue, args, contextValue, info);
    if (!field.selectionSet) {
        return result;
    }
    if (result == null) {
        return result;
    }
    if (Array.isArray(result)) {
        return executeSubSelectedArray(field, result, execContext);
    }
    return executeSelectionSet(field.selectionSet, result, execContext);
}
function executeSubSelectedArray(field, result, execContext) {
    return result.map(function (item) {
        if (item === null) {
            return null;
        }
        if (Array.isArray(item)) {
            return executeSubSelectedArray(field, item, execContext);
        }
        return executeSelectionSet(field.selectionSet, item, execContext);
    });
}
function merge(dest, src) {
    if (src === null ||
        typeof src !== 'object') {
        return src;
    }
    Object.keys(dest).forEach(function (destKey) {
        if (src.hasOwnProperty(destKey)) {
            merge(dest[destKey], src[destKey]);
        }
    });
    Object.keys(src).forEach(function (srcKey) {
        if (!dest.hasOwnProperty(srcKey)) {
            dest[srcKey] = src[srcKey];
        }
    });
}
//# sourceMappingURL=graphql.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SCALAR_TYPES = {
    StringValue: true,
    BooleanValue: true,
    EnumValue: true,
};
function isScalarValue(value) {
    return !!SCALAR_TYPES[value.kind];
}
var NUMBER_TYPES = {
    IntValue: true,
    FloatValue: true,
};
function isNumberValue(value) {
    return NUMBER_TYPES[value.kind];
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObject(value) {
    return value.kind === 'ObjectValue';
}
function isList(value) {
    return value.kind === 'ListValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (variables === void 0) { variables = {}; }
    if (isNumberValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isScalarValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObject(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) { return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables); });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = variables[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isList(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else {
        throw new Error("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\" is not supported. Use variables instead of inline arguments to overcome this limitation.");
    }
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
exports.argumentsObjectFromField = argumentsObjectFromField;
function resultKeyNameFromField(field) {
    return field.alias ?
        field.alias.value :
        field.name.value;
}
exports.resultKeyNameFromField = resultKeyNameFromField;
function isField(selection) {
    return selection.kind === 'Field';
}
exports.isField = isField;
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}
exports.isInlineFragment = isInlineFragment;
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
exports.graphQLResultHasError = graphQLResultHasError;
//# sourceMappingURL=storeUtils.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tryFunctionOrLogError;
function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_symbol_observable__);

function isSubscription(subscription) {
    return subscription.unsubscribe !== undefined;
}
var Observable = (function () {
    function Observable(subscriberFunction) {
        this.subscriberFunction = subscriberFunction;
    }
    Observable.prototype[__WEBPACK_IMPORTED_MODULE_0_symbol_observable___default.a] = function () {
        return this;
    };
    Observable.prototype.subscribe = function (observer) {
        var subscriptionOrCleanupFunction = this.subscriberFunction(observer);
        if (isSubscription(subscriptionOrCleanupFunction)) {
            return subscriptionOrCleanupFunction;
        }
        else {
            return {
                unsubscribe: subscriptionOrCleanupFunction,
            };
        }
    };
    return Observable;
}());

//# sourceMappingURL=Observable.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = maybeDeepFreeze;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(6);

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* isDevelopment */])() || Object(__WEBPACK_IMPORTED_MODULE_0__environment__["c" /* isTest */])()) {
        return deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var linkUtils_1 = __webpack_require__(77);
var graphql_tag_1 = __webpack_require__(29);
var zen_observable_ts_1 = __webpack_require__(37);
var ApolloLink = (function () {
    function ApolloLink() {
    }
    ApolloLink.from = function (links) {
        if (links.length === 0) {
            return ApolloLink.empty();
        }
        return links.map(linkUtils_1.toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.empty = function () {
        return new FunctionLink(function (op, forward) { return zen_observable_ts_1.default.of(); });
    };
    ApolloLink.passthrough = function () {
        return new FunctionLink(function (op, forward) { return (forward ? forward(op) : zen_observable_ts_1.default.of()); });
    };
    ApolloLink.split = function (test, left, right) {
        if (right === void 0) { right = ApolloLink.passthrough(); }
        var leftLink = linkUtils_1.validateLink(linkUtils_1.toLink(left));
        var rightLink = linkUtils_1.validateLink(linkUtils_1.toLink(right));
        if (linkUtils_1.isTerminating(leftLink) && linkUtils_1.isTerminating(rightLink)) {
            return new FunctionLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || zen_observable_ts_1.default.of()
                    : rightLink.request(operation) || zen_observable_ts_1.default.of();
            });
        }
        else {
            return new FunctionLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || zen_observable_ts_1.default.of()
                    : rightLink.request(operation, forward) || zen_observable_ts_1.default.of();
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        if (right === void 0) { right = ApolloLink.passthrough(); }
        return this.concat(ApolloLink.split(test, left, right));
    };
    ApolloLink.prototype.concat = function (next) {
        var _this = this;
        linkUtils_1.validateLink(this);
        if (linkUtils_1.isTerminating(this)) {
            console.warn(new linkUtils_1.LinkError("You are calling concat on a terminating link, which will have no effect", this));
            return this;
        }
        var nextLink = linkUtils_1.validateLink(linkUtils_1.toLink(next));
        if (linkUtils_1.isTerminating(nextLink)) {
            return new FunctionLink(function (operation) {
                return _this.request(operation, function (op) { return nextLink.request(op) || zen_observable_ts_1.default.of(); }) || zen_observable_ts_1.default.of();
            });
        }
        else {
            return new FunctionLink(function (operation, forward) {
                return (_this.request(operation, function (op) {
                    return nextLink.request(op, forward) || zen_observable_ts_1.default.of();
                }) || zen_observable_ts_1.default.of());
            });
        }
    };
    return ApolloLink;
}());
exports.ApolloLink = ApolloLink;
function execute(link, operation) {
    var copy = __assign({}, operation);
    linkUtils_1.validateOperation(copy);
    if (!copy.context) {
        copy.context = {};
    }
    if (!copy.variables) {
        copy.variables = {};
    }
    if (!copy.query) {
        console.warn("query should either be a string or GraphQL AST");
        copy.query = {};
    }
    return link.request(transformOperation(copy)) || zen_observable_ts_1.default.of();
}
exports.execute = execute;
function getName(node) {
    return node && node.name && node.name.kind === 'Name' && node.name.value;
}
function transformOperation(operation) {
    var transformedOperation;
    if (typeof operation.query === 'string') {
        transformedOperation = __assign({}, operation, { query: graphql_tag_1.default(operation.query) });
    }
    else {
        transformedOperation = __assign({}, operation);
    }
    if (transformedOperation.query && transformedOperation.query.definitions) {
        if (!transformedOperation.operationName) {
            var operationTypes_1 = ['query', 'mutation', 'subscription'];
            var definitions = transformedOperation.query.definitions.filter(function (x) {
                return x.kind === 'OperationDefinition' &&
                    operationTypes_1.indexOf(x.operation) >= 0;
            });
            transformedOperation.operationName = getName(definitions[0]) || '';
        }
    }
    else if (!transformedOperation.operationName) {
        transformedOperation.operationName = '';
    }
    return transformedOperation;
}
var FunctionLink = (function (_super) {
    __extends(FunctionLink, _super);
    function FunctionLink(f) {
        var _this = _super.call(this) || this;
        _this.f = f;
        _this.request = f;
        return _this;
    }
    FunctionLink.prototype.request = function (operation, forward) {
        throw Error('should be overridden');
    };
    return FunctionLink;
}(ApolloLink));
exports.FunctionLink = FunctionLink;
//# sourceMappingURL=link.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __webpack_require__(76);
function validateLink(link) {
    if (link instanceof link_1.ApolloLink && typeof link.request === 'function') {
        return link;
    }
    else {
        throw new LinkError('Link does not extend ApolloLink and implement request', link);
    }
}
exports.validateLink = validateLink;
function validateOperation(operation) {
    var OPERATION_FIELDS = ['query', 'operationName', 'variables', 'context'];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw new Error("illegal argument: " + key);
        }
    }
    return operation;
}
exports.validateOperation = validateOperation;
var LinkError = (function (_super) {
    __extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
exports.LinkError = LinkError;
function toLink(link) {
    if (typeof link === 'function') {
        return new link_1.FunctionLink(link);
    }
    else {
        return link;
    }
}
exports.toLink = toLink;
function isTerminating(link) {
    return link.request.length <= 1;
}
exports.isTerminating = isTerminating;
function makePromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    console.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
exports.makePromise = makePromise;
//# sourceMappingURL=linkUtils.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__);
/* unused harmony reexport printAST */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ObservableQuery__ = __webpack_require__(39);
/* unused harmony reexport ObservableQuery */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_networkStatus__ = __webpack_require__(14);
/* unused harmony reexport NetworkStatus */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_types__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errors_ApolloError__ = __webpack_require__(43);
/* unused harmony reexport ApolloError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ApolloClient__ = __webpack_require__(193);
/* unused harmony reexport ApolloClient */







/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_5__ApolloClient__["a" /* default */]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = getMutationDefinition;
/* harmony export (immutable) */ __webpack_exports__["a"] = checkDocument;
/* harmony export (immutable) */ __webpack_exports__["g"] = getOperationDefinition;
/* harmony export (immutable) */ __webpack_exports__["h"] = getOperationDefinitionOrDie;
/* harmony export (immutable) */ __webpack_exports__["i"] = getOperationName;
/* harmony export (immutable) */ __webpack_exports__["d"] = getFragmentDefinitions;
/* harmony export (immutable) */ __webpack_exports__["j"] = getQueryDefinition;
/* unused harmony export getFragmentDefinition */
/* harmony export (immutable) */ __webpack_exports__["e"] = getMainDefinition;
/* harmony export (immutable) */ __webpack_exports__["b"] = createFragmentMap;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDefaultValues;
/* unused harmony export variablesInOperation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_assign__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storeUtils__ = __webpack_require__(40);


function getMutationDefinition(doc) {
    checkDocument(doc);
    var mutationDef = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation';
    })[0];
    if (!mutationDef) {
        throw new Error('Must contain a mutation definition.');
    }
    return mutationDef;
}
function checkDocument(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw new Error("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
        }
        return definition;
    });
    if (operations.length > 1) {
        throw new Error("Ambiguous GraphQL document: contains " + operations.length + " operations");
    }
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; })[0];
}
function getOperationDefinitionOrDie(document) {
    var def = getOperationDefinition(document);
    if (!def) {
        throw new Error("GraphQL document is missing an operation");
    }
    return def;
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) { return definition.kind === 'FragmentDefinition'; });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    if (!queryDef || queryDef.operation !== 'query') {
        throw new Error('Must contain a query definition.');
    }
    return queryDef;
}
function getFragmentDefinition(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    if (doc.definitions.length > 1) {
        throw new Error('Fragment must have exactly one definition.');
    }
    var fragmentDef = doc.definitions[0];
    if (fragmentDef.kind !== 'FragmentDefinition') {
        throw new Error('Must be a fragment definition.');
    }
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw new Error('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getDefaultValues(definition) {
    if (definition &&
        definition.variableDefinitions &&
        definition.variableDefinitions.length) {
        var defaultValues = definition.variableDefinitions
            .filter(function (_a) {
            var defaultValue = _a.defaultValue;
            return defaultValue;
        })
            .map(function (_a) {
            var variable = _a.variable, defaultValue = _a.defaultValue;
            var defaultValueObj = {};
            Object(__WEBPACK_IMPORTED_MODULE_1__storeUtils__["i" /* valueToObjectRepresentation */])(defaultValueObj, variable.name, defaultValue);
            return defaultValueObj;
        });
        return __WEBPACK_IMPORTED_MODULE_0__util_assign__["a" /* assign */].apply(void 0, [{}].concat(defaultValues));
    }
    return {};
}
function variablesInOperation(operation) {
    var names = new Set();
    if (operation.variableDefinitions) {
        for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
            var definition = _a[_i];
            names.add(definition.variable.name.value);
        }
    }
    return names;
}
//# sourceMappingURL=getFromAST.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (typeof source === 'undefined' || source === null) {
            return;
        }
        Object.keys(source).forEach(function (key) {
            target[key] = source[key];
        });
    });
    return target;
}
//# sourceMappingURL=assign.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneDeep;
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return value.map(function (item) { return cloneDeep(item); });
    }
    if (value !== null && typeof value === 'object') {
        var nextValue = {};
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                nextValue[key] = cloneDeep(value[key]);
            }
        }
        return nextValue;
    }
    return value;
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Observable = (function (_super) {
    __extends(Observable, _super);
    function Observable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Observable.prototype[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
        return this;
    };
    return Observable;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["b" /* Observable */]));

//# sourceMappingURL=Observable.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = validateOperation;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkError; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isTerminating;
/* unused harmony export toPromise */
/* unused harmony export makePromise */
/* unused harmony export fromPromise */
/* harmony export (immutable) */ __webpack_exports__["d"] = transformOperation;
/* harmony export (immutable) */ __webpack_exports__["b"] = createOperation;
/* unused harmony export getKey */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zen_observable__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zen_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zen_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw new Error("illegal argument: " + key);
        }
    }
    return operation;
}
var LinkError = (function (_super) {
    __extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));

function isTerminating(link) {
    return link.request.length <= 1;
}
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    console.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
var makePromise = toPromise;
function fromPromise(promise) {
    return new __WEBPACK_IMPORTED_MODULE_1_zen_observable__(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["l" /* getOperationName */])(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
function createOperation(starting, operation) {
    var context = __assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = __assign({}, context, next(context));
        }
        else {
            context = __assign({}, context, next);
        }
    };
    var getContext = function () { return (__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
function getKey(operation) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__["print"])(operation.query) + "|" + JSON.stringify(operation.variables) + "|" + operation.operationName;
}
//# sourceMappingURL=linkUtils.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeuristicFragmentMatcher; });
/* unused harmony export IntrospectionFragmentMatcher */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(1);

var haveWarned = false;
var HeuristicFragmentMatcher = (function () {
    function HeuristicFragmentMatcher() {
    }
    HeuristicFragmentMatcher.prototype.ensureReady = function () {
        return Promise.resolve();
    };
    HeuristicFragmentMatcher.prototype.canBypassInit = function () {
        return true;
    };
    HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        var obj = context.store.get(idValue.id);
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            if (!haveWarned) {
                console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                console.warn('Could not find __typename on Fragment ', typeCondition, obj);
                console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " +
                    "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
                if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["w" /* isTest */])()) {
                    haveWarned = true;
                }
            }
            context.returnPartialData = true;
            return true;
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["D" /* warnOnceInDevelopment */])("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types.\n     Apollo Client will not be able to able to accurately map fragments." +
            "To make this error go away, use the IntrospectionFragmentMatcher as described in the docs: " +
            "https://www.apollographql.com/docs/react/recipes/fragment-matching.html", 'error');
        context.returnPartialData = true;
        return true;
    };
    return HeuristicFragmentMatcher;
}());

var IntrospectionFragmentMatcher = (function () {
    function IntrospectionFragmentMatcher(options) {
        if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
        }
        else {
            this.isReady = false;
        }
        this.match = this.match.bind(this);
    }
    IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        if (!this.isReady) {
            throw new Error('FragmentMatcher.match() was called before FragmentMatcher.init()');
        }
        var obj = context.store.get(idValue.id);
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            throw new Error("Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        var implementingTypes = this.possibleTypesMap[typeCondition];
        if (implementingTypes && implementingTypes.indexOf(obj.__typename) > -1) {
            return true;
        }
        return false;
    };
    IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
        var typeMap = {};
        introspectionResultData.__schema.types.forEach(function (type) {
            if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
                typeMap[type.name] = type.possibleTypes.map(function (implementingType) { return implementingType.name; });
            }
        });
        return typeMap;
    };
    return IntrospectionFragmentMatcher;
}());

//# sourceMappingURL=fragmentMatcher.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WriteError */
/* unused harmony export enhanceErrorWithDocument */
/* unused harmony export writeQueryToStore */
/* harmony export (immutable) */ __webpack_exports__["a"] = writeResultToStore;
/* unused harmony export writeSelectionSetToStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectCache__ = __webpack_require__(44);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var WriteError = (function (_super) {
    __extends(WriteError, _super);
    function WriteError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'WriteError';
        return _this;
    }
    return WriteError;
}(Error));

function enhanceErrorWithDocument(error, document) {
    var enhancedError = new WriteError("Error writing result to store for query:\n " + Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(document));
    enhancedError.message += '\n' + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
}
function writeQueryToStore(_a) {
    var result = _a.result, query = _a.query, _b = _a.storeFactory, storeFactory = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_2__objectCache__["b" /* defaultNormalizedCacheFactory */] : _b, _c = _a.store, store = _c === void 0 ? storeFactory() : _c, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, _d = _a.fragmentMap, fragmentMap = _d === void 0 ? {} : _d, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["m" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(queryDefinition), variables);
    try {
        return writeSelectionSetToStore({
            dataId: 'ROOT_QUERY',
            result: result,
            selectionSet: queryDefinition.selectionSet,
            context: {
                store: store,
                storeFactory: storeFactory,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, query);
    }
}
function writeResultToStore(_a) {
    var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.storeFactory, storeFactory = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_2__objectCache__["b" /* defaultNormalizedCacheFactory */] : _b, _c = _a.store, store = _c === void 0 ? storeFactory() : _c, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var operationDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["k" /* getOperationDefinition */])(document);
    var selectionSet = operationDefinition.selectionSet;
    var fragmentMap = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["d" /* createFragmentMap */])(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["g" /* getFragmentDefinitions */])(document));
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(operationDefinition), variables);
    try {
        return writeSelectionSetToStore({
            result: result,
            dataId: dataId,
            selectionSet: selectionSet,
            context: {
                store: store,
                storeFactory: storeFactory,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, document);
    }
}
function writeSelectionSetToStore(_a) {
    var result = _a.result, dataId = _a.dataId, selectionSet = _a.selectionSet, context = _a.context;
    var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
    selectionSet.selections.forEach(function (selection) {
        var included = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["A" /* shouldInclude */])(selection, variables);
        if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["r" /* isField */])(selection)) {
            var resultFieldKey = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["z" /* resultKeyNameFromField */])(selection);
            var value = result[resultFieldKey];
            if (included) {
                if (typeof value !== 'undefined') {
                    writeFieldToStore({
                        dataId: dataId,
                        value: value,
                        field: selection,
                        context: context,
                    });
                }
                else {
                    var isDefered = selection.directives &&
                        selection.directives.length &&
                        selection.directives.some(function (directive) { return directive.name && directive.name.value === 'defer'; });
                    if (!isDefered && context.fragmentMatcherFunction) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["v" /* isProduction */])()) {
                            console.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                        }
                    }
                }
            }
        }
        else {
            var fragment = void 0;
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["t" /* isInlineFragment */])(selection)) {
                fragment = selection;
            }
            else {
                fragment = (fragmentMap || {})[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value + ".");
                }
            }
            var matches = true;
            if (context.fragmentMatcherFunction && fragment.typeCondition) {
                var idValue = { type: 'id', id: 'self', generated: false };
                var fakeContext = {
                    store: new __WEBPACK_IMPORTED_MODULE_2__objectCache__["a" /* ObjectCache */]({ self: result }),
                    returnPartialData: false,
                    hasMissingField: false,
                    cacheResolvers: {},
                };
                matches = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["v" /* isProduction */])() && fakeContext.returnPartialData) {
                    console.error('WARNING: heuristic fragment matching going on!');
                }
            }
            if (included && matches) {
                writeSelectionSetToStore({
                    result: result,
                    selectionSet: fragment.selectionSet,
                    dataId: dataId,
                    context: context,
                });
            }
        }
    });
    return store;
}
function isGeneratedId(id) {
    return id[0] === '$';
}
function mergeWithGenerated(generatedKey, realKey, cache) {
    var generated = cache.get(generatedKey);
    var real = cache.get(realKey);
    Object.keys(generated).forEach(function (key) {
        var value = generated[key];
        var realValue = real[key];
        if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(value) && isGeneratedId(value.id) && Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(realValue)) {
            mergeWithGenerated(value.id, realValue.id, cache);
        }
        cache.delete(generatedKey);
        cache.set(realKey, __assign({}, generated, real));
    });
}
function isDataProcessed(dataId, field, processedData) {
    if (!processedData) {
        return false;
    }
    if (processedData[dataId]) {
        if (processedData[dataId].indexOf(field) >= 0) {
            return true;
        }
        else {
            processedData[dataId].push(field);
        }
    }
    else {
        processedData[dataId] = [field];
    }
    return false;
}
function writeFieldToStore(_a) {
    var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
    var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
    var storeValue;
    var storeObject;
    var storeFieldName = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["B" /* storeKeyNameFromField */])(field, variables);
    var shouldMerge = false;
    var generatedKey = '';
    if (!field.selectionSet || value === null) {
        storeValue =
            value != null && typeof value === 'object'
                ?
                    { type: 'json', json: value }
                :
                    value;
    }
    else if (Array.isArray(value)) {
        var generatedId = dataId + "." + storeFieldName;
        storeValue = processArrayValue(value, generatedId, field.selectionSet, context);
    }
    else {
        var valueDataId = dataId + "." + storeFieldName;
        var generated = true;
        if (!isGeneratedId(valueDataId)) {
            valueDataId = '$' + valueDataId;
        }
        if (dataIdFromObject) {
            var semanticId = dataIdFromObject(value);
            if (semanticId && isGeneratedId(semanticId)) {
                throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');
            }
            if (semanticId) {
                valueDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(valueDataId, field, context.processedData)) {
            writeSelectionSetToStore({
                dataId: valueDataId,
                result: value,
                selectionSet: field.selectionSet,
                context: context,
            });
        }
        storeValue = {
            type: 'id',
            id: valueDataId,
            generated: generated,
        };
        storeObject = store.get(dataId);
        if (storeObject && storeObject[storeFieldName] !== storeValue) {
            var escapedId = storeObject[storeFieldName];
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(storeValue) &&
                storeValue.generated &&
                Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(escapedId) &&
                !escapedId.generated) {
                throw new Error("Store error: the application attempted to write an object with no provided id" +
                    (" but the store already contains an id of " + escapedId.id + " for this object. The selectionSet") +
                    " that was trying to be written is:\n" +
                    Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(field));
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(escapedId) && escapedId.generated) {
                generatedKey = escapedId.id;
                shouldMerge = true;
            }
        }
    }
    var newStoreObj = __assign({}, store.get(dataId), (_b = {}, _b[storeFieldName] = storeValue, _b));
    if (shouldMerge) {
        mergeWithGenerated(generatedKey, storeValue.id, store);
    }
    storeObject = store.get(dataId);
    if (!storeObject || storeValue !== storeObject[storeFieldName]) {
        store.set(dataId, newStoreObj);
    }
    var _b;
}
function processArrayValue(value, generatedId, selectionSet, context) {
    return value.map(function (item, index) {
        if (item === null) {
            return null;
        }
        var itemDataId = generatedId + "." + index;
        if (Array.isArray(item)) {
            return processArrayValue(item, itemDataId, selectionSet, context);
        }
        var generated = true;
        if (context.dataIdFromObject) {
            var semanticId = context.dataIdFromObject(item);
            if (semanticId) {
                itemDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
            writeSelectionSetToStore({
                dataId: itemDataId,
                result: item,
                selectionSet: selectionSet,
                context: context,
            });
        }
        var idStoreValue = {
            type: 'id',
            id: itemDataId,
            generated: generated,
        };
        return idStoreValue;
    });
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ID_KEY */
/* harmony export (immutable) */ __webpack_exports__["b"] = readQueryFromStore;
/* harmony export (immutable) */ __webpack_exports__["a"] = diffQueryAgainstStore;
/* unused harmony export assertIdValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(1);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var ID_KEY = typeof Symbol !== 'undefined' ? Symbol('id') : '@@id';
function readQueryFromStore(options) {
    var optsPatch = { returnPartialData: false };
    return diffQueryAgainstStore(__assign({}, options, optsPatch)).result;
}
var readStoreResolver = function (fieldName, idValue, args, context, _a) {
    var resultKey = _a.resultKey, directives = _a.directives;
    assertIdValue(idValue);
    var objId = idValue.id;
    var obj = context.store.get(objId);
    var storeKeyName = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["n" /* getStoreKeyName */])(fieldName, args, directives);
    var fieldValue = (obj || {})[storeKeyName];
    if (typeof fieldValue === 'undefined') {
        if (context.cacheResolvers &&
            obj &&
            (obj.__typename || objId === 'ROOT_QUERY')) {
            var typename = obj.__typename || 'Query';
            var type = context.cacheResolvers[typename];
            if (type) {
                var resolver = type[fieldName];
                if (resolver) {
                    fieldValue = resolver(obj, args);
                }
            }
        }
    }
    if (typeof fieldValue === 'undefined') {
        if (!context.returnPartialData) {
            throw new Error("Can't find field " + storeKeyName + " on object (" + objId + ") " + JSON.stringify(obj, null, 2) + ".");
        }
        context.hasMissingField = true;
        return fieldValue;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["u" /* isJsonValue */])(fieldValue)) {
        if (idValue.previousResult &&
            Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["q" /* isEqual */])(idValue.previousResult[resultKey], fieldValue.json)) {
            return idValue.previousResult[resultKey];
        }
        return fieldValue.json;
    }
    if (idValue.previousResult) {
        fieldValue = addPreviousResultToIdValues(fieldValue, idValue.previousResult[resultKey]);
    }
    return fieldValue;
};
function diffQueryAgainstStore(_a) {
    var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["m" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(queryDefinition), variables);
    var context = {
        store: store,
        returnPartialData: returnPartialData,
        cacheResolvers: (config && config.cacheResolvers) || {},
        hasMissingField: false,
    };
    var rootIdValue = {
        type: 'id',
        id: rootId,
        previousResult: previousResult,
    };
    var result = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__["a" /* default */])(readStoreResolver, query, rootIdValue, context, variables, {
        fragmentMatcher: fragmentMatcherFunction,
        resultMapper: resultMapper,
    });
    return {
        result: result,
        complete: !context.hasMissingField,
    };
}
function assertIdValue(idValue) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(idValue)) {
        throw new Error("Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
    }
}
function addPreviousResultToIdValues(value, previousResult) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(value)) {
        return __assign({}, value, { previousResult: previousResult });
    }
    else if (Array.isArray(value)) {
        var idToPreviousResult_1 = new Map();
        if (Array.isArray(previousResult)) {
            previousResult.forEach(function (item) {
                if (item && item[ID_KEY]) {
                    idToPreviousResult_1.set(item[ID_KEY], item);
                }
            });
        }
        return value.map(function (item, i) {
            var itemPreviousResult = previousResult && previousResult[i];
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(item)) {
                itemPreviousResult =
                    idToPreviousResult_1.get(item.id) || itemPreviousResult;
            }
            return addPreviousResultToIdValues(item, itemPreviousResult);
        });
    }
    return value;
}
function resultMapper(resultFields, idValue) {
    if (idValue.previousResult) {
        var currentResultKeys_1 = Object.keys(resultFields);
        var sameAsPreviousResult = Object.keys(idValue.previousResult).reduce(function (sameKeys, key) { return sameKeys && currentResultKeys_1.indexOf(key) > -1; }, true) &&
            currentResultKeys_1.every(function (key) {
                return areNestedArrayItemsStrictlyEqual(resultFields[key], idValue.previousResult[key]);
            });
        if (sameAsPreviousResult) {
            return idValue.previousResult;
        }
    }
    Object.defineProperty(resultFields, ID_KEY, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: idValue.id,
    });
    return resultFields;
}
function areNestedArrayItemsStrictlyEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
        return false;
    }
    return a.every(function (item, i) { return areNestedArrayItemsStrictlyEqual(item, b[i]); });
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graphql;
/* unused harmony export merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(1);

function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
    if (execOptions === void 0) { execOptions = {}; }
    var mainDefinition = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["i" /* getMainDefinition */])(document);
    var fragments = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["g" /* getFragmentDefinitions */])(document);
    var fragmentMap = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["d" /* createFragmentMap */])(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
    var execContext = {
        fragmentMap: fragmentMap,
        contextValue: contextValue,
        variableValues: variableValues,
        resultMapper: resultMapper,
        resolver: resolver,
        fragmentMatcher: fragmentMatcher,
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
function executeSelectionSet(selectionSet, rootValue, execContext) {
    var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
    var result = {};
    selectionSet.selections.forEach(function (selection) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["A" /* shouldInclude */])(selection, variables)) {
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["r" /* isField */])(selection)) {
            var fieldResult = executeField(selection, rootValue, execContext);
            var resultFieldKey = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["z" /* resultKeyNameFromField */])(selection);
            if (fieldResult !== undefined) {
                if (result[resultFieldKey] === undefined) {
                    result[resultFieldKey] = fieldResult;
                }
                else {
                    merge(result[resultFieldKey], fieldResult);
                }
            }
        }
        else {
            var fragment = void 0;
            if (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["t" /* isInlineFragment */])(selection)) {
                fragment = selection;
            }
            else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value);
                }
            }
            var typeCondition = fragment.typeCondition.name.value;
            if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                var fragmentResult = executeSelectionSet(fragment.selectionSet, rootValue, execContext);
                merge(result, fragmentResult);
            }
        }
    });
    if (execContext.resultMapper) {
        return execContext.resultMapper(result, rootValue);
    }
    return result;
}
function executeField(field, rootValue, execContext) {
    var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
    var fieldName = field.name.value;
    var args = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["b" /* argumentsObjectFromField */])(field, variables);
    var info = {
        isLeaf: !field.selectionSet,
        resultKey: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["z" /* resultKeyNameFromField */])(field),
        directives: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["f" /* getDirectiveInfoFromField */])(field, variables),
    };
    var result = resolver(fieldName, rootValue, args, contextValue, info);
    if (!field.selectionSet) {
        return result;
    }
    if (result == null) {
        return result;
    }
    if (Array.isArray(result)) {
        return executeSubSelectedArray(field, result, execContext);
    }
    return executeSelectionSet(field.selectionSet, result, execContext);
}
function executeSubSelectedArray(field, result, execContext) {
    return result.map(function (item) {
        if (item === null) {
            return null;
        }
        if (Array.isArray(item)) {
            return executeSubSelectedArray(field, item, execContext);
        }
        return executeSelectionSet(field.selectionSet, item, execContext);
    });
}
function merge(dest, src) {
    if (src === null || typeof src !== 'object') {
        return src;
    }
    Object.keys(dest).forEach(function (destKey) {
        if (src.hasOwnProperty(destKey)) {
            merge(dest[destKey], src[destKey]);
        }
    });
    Object.keys(src).forEach(function (srcKey) {
        if (!dest.hasOwnProperty(srcKey)) {
            dest[srcKey] = src[srcKey];
        }
    });
}
//# sourceMappingURL=graphql.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RecordingCache */
/* harmony export (immutable) */ __webpack_exports__["a"] = record;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var RecordingCache = (function () {
    function RecordingCache(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
        this.recordedData = {};
    }
    RecordingCache.prototype.record = function (transaction) {
        transaction(this);
        var recordedData = this.recordedData;
        this.recordedData = {};
        return recordedData;
    };
    RecordingCache.prototype.toObject = function () {
        return __assign({}, this.data, this.recordedData);
    };
    RecordingCache.prototype.get = function (dataId) {
        if (this.recordedData.hasOwnProperty(dataId)) {
            return this.recordedData[dataId];
        }
        return this.data[dataId];
    };
    RecordingCache.prototype.set = function (dataId, value) {
        if (this.get(dataId) !== value) {
            this.recordedData[dataId] = value;
        }
    };
    RecordingCache.prototype.delete = function (dataId) {
        this.recordedData[dataId] = undefined;
    };
    RecordingCache.prototype.clear = function () {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) { return _this.delete(dataId); });
        this.recordedData = {};
    };
    RecordingCache.prototype.replace = function (newData) {
        this.clear();
        this.recordedData = __assign({}, newData);
    };
    return RecordingCache;
}());

function record(startingState, transaction) {
    var recordingCache = new RecordingCache(startingState);
    return recordingCache.record(transaction);
}
//# sourceMappingURL=recordingCache.js.map

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_reducers_index_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_App_jsx__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_App_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_pages_App_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pages_Splash_jsx__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_pages_Splash_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_pages_Splash_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_client__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_link_http__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_cache_inmemory__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_apollo__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_apollo__);












const client = new __WEBPACK_IMPORTED_MODULE_7_apollo_client__["a" /* default */]({
  link: new __WEBPACK_IMPORTED_MODULE_8_apollo_link_http__["a" /* HttpLink */]({ uri: 'http://localhost:3000' }),
  cache: new __WEBPACK_IMPORTED_MODULE_9_apollo_cache_inmemory__["a" /* InMemoryCache */]().restore(window.__APOLLO_STATE__)
});

const createStoreWithMiddleware = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a)(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"]);
const store = createStoreWithMiddleware(__WEBPACK_IMPORTED_MODULE_4__redux_reducers_index_js__["a" /* default */], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

document.addEventListener('DOMContentLoaded', () => {
  return __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_10_react_apollo__["ApolloProvider"],
    { client: client },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_pages_App_jsx__["default"], null)
  ), document.getElementById('app'));
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(16),n=__webpack_require__(45),p=__webpack_require__(17),q="function"===typeof Symbol&&Symbol["for"],r=q?Symbol["for"]("react.element"):60103,t=q?Symbol["for"]("react.call"):60104,u=q?Symbol["for"]("react.return"):60105,v=q?Symbol["for"]("react.portal"):60106,w=q?Symbol["for"]("react.fragment"):60107,x="function"===typeof Symbol&&Symbol.iterator;
function y(a){for(var b=arguments.length-1,e="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function A(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}A.prototype.isReactComponent={};A.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?y("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};A.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function B(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}function C(){}C.prototype=A.prototype;var D=B.prototype=new C;D.constructor=B;m(D,A.prototype);D.isPureReactComponent=!0;function E(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}var F=E.prototype=new C;F.constructor=E;m(F,A.prototype);F.unstable_isAsyncReactComponent=!0;F.render=function(){return this.props.children};var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,e){var c,d={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)H.call(b,c)&&!I.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var h=Array(f),l=0;l<f;l++)h[l]=arguments[l+2];d.children=h}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:r,type:a,key:g,ref:k,props:d,_owner:G.current}}function K(a){return"object"===typeof a&&null!==a&&a.$$typeof===r}
function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var L=/\/+/g,M=[];function N(a,b,e,c){if(M.length){var d=M.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function O(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>M.length&&M.push(a)}
function P(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case r:case t:case u:case v:g=!0}}if(g)return e(c,a,""===b?"."+Q(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+Q(d,k);g+=P(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=x&&a[x]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=
f.call(a),k=0;!(d=a.next()).done;)d=d.value,f=b+Q(d,k++),g+=P(d,f,e,c);else"object"===d&&(e=""+a,y("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function R(a,b){a.func.call(a.context,b,a.count++)}
function S(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?T(a,c,e,p.thatReturnsArgument):null!=a&&(K(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(L,"$\x26/")+"/")+e,a={$$typeof:r,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function T(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(L,"$\x26/")+"/");b=N(b,g,c,d);null==a||P(a,"",S,b);O(b)}
var U={Children:{map:function(a,b,e){if(null==a)return a;var c=[];T(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=N(null,null,b,e);null==a||P(a,"",R,b);O(b)},count:function(a){return null==a?0:P(a,"",p.thatReturnsNull,null)},toArray:function(a){var b=[];T(a,b,null,p.thatReturnsArgument);return b},only:function(a){K(a)?void 0:y("143");return a}},Component:A,PureComponent:B,unstable_AsyncComponent:E,Fragment:w,createElement:J,cloneElement:function(a,b,e){var c=m({},a.props),
d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)H.call(b,h)&&!I.hasOwnProperty(h)&&(c[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)c.children=e;else if(1<h){f=Array(h);for(var l=0;l<h;l++)f[l]=arguments[l+2];c.children=f}return{$$typeof:r,type:a.type,key:d,ref:g,props:c,_owner:k}},createFactory:function(a){var b=J.bind(null,a);b.type=a;return b},
isValidElement:K,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:G,assign:m}},V=Object.freeze({default:U}),W=V&&U||V;module.exports=W["default"]?W["default"]:W;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(92);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(4),l=__webpack_require__(93),B=__webpack_require__(16),C=__webpack_require__(17),ba=__webpack_require__(94),da=__webpack_require__(95),ea=__webpack_require__(96),fa=__webpack_require__(97),ia=__webpack_require__(100),D=__webpack_require__(45);
function E(a){for(var b=arguments.length-1,c="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,d=0;d<b;d++)c+="\x26args[]\x3d"+encodeURIComponent(arguments[d+1]);b=Error(c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}aa?void 0:E("227");
var oa={children:!0,dangerouslySetInnerHTML:!0,defaultValue:!0,defaultChecked:!0,innerHTML:!0,suppressContentEditableWarning:!0,suppressHydrationWarning:!0,style:!0};function pa(a,b){return(a&b)===b}
var ta={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,HAS_STRING_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(a){var b=ta,c=a.Properties||{},d=a.DOMAttributeNamespaces||{},e=a.DOMAttributeNames||{};a=a.DOMMutationMethods||{};for(var f in c){ua.hasOwnProperty(f)?E("48",f):void 0;var g=f.toLowerCase(),h=c[f];g={attributeName:g,attributeNamespace:null,propertyName:f,mutationMethod:null,mustUseProperty:pa(h,b.MUST_USE_PROPERTY),
hasBooleanValue:pa(h,b.HAS_BOOLEAN_VALUE),hasNumericValue:pa(h,b.HAS_NUMERIC_VALUE),hasPositiveNumericValue:pa(h,b.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:pa(h,b.HAS_OVERLOADED_BOOLEAN_VALUE),hasStringBooleanValue:pa(h,b.HAS_STRING_BOOLEAN_VALUE)};1>=g.hasBooleanValue+g.hasNumericValue+g.hasOverloadedBooleanValue?void 0:E("50",f);e.hasOwnProperty(f)&&(g.attributeName=e[f]);d.hasOwnProperty(f)&&(g.attributeNamespace=d[f]);a.hasOwnProperty(f)&&(g.mutationMethod=a[f]);ua[f]=g}}},ua={};
function va(a,b){if(oa.hasOwnProperty(a)||2<a.length&&("o"===a[0]||"O"===a[0])&&("n"===a[1]||"N"===a[1]))return!1;if(null===b)return!0;switch(typeof b){case "boolean":return oa.hasOwnProperty(a)?a=!0:(b=wa(a))?a=b.hasBooleanValue||b.hasStringBooleanValue||b.hasOverloadedBooleanValue:(a=a.toLowerCase().slice(0,5),a="data-"===a||"aria-"===a),a;case "undefined":case "number":case "string":case "object":return!0;default:return!1}}function wa(a){return ua.hasOwnProperty(a)?ua[a]:null}
var xa=ta,ya=xa.MUST_USE_PROPERTY,K=xa.HAS_BOOLEAN_VALUE,za=xa.HAS_NUMERIC_VALUE,Aa=xa.HAS_POSITIVE_NUMERIC_VALUE,Ba=xa.HAS_OVERLOADED_BOOLEAN_VALUE,Ca=xa.HAS_STRING_BOOLEAN_VALUE,Da={Properties:{allowFullScreen:K,async:K,autoFocus:K,autoPlay:K,capture:Ba,checked:ya|K,cols:Aa,contentEditable:Ca,controls:K,"default":K,defer:K,disabled:K,download:Ba,draggable:Ca,formNoValidate:K,hidden:K,loop:K,multiple:ya|K,muted:ya|K,noValidate:K,open:K,playsInline:K,readOnly:K,required:K,reversed:K,rows:Aa,rowSpan:za,
scoped:K,seamless:K,selected:ya|K,size:Aa,start:za,span:Aa,spellCheck:Ca,style:0,tabIndex:0,itemScope:K,acceptCharset:0,className:0,htmlFor:0,httpEquiv:0,value:Ca},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMMutationMethods:{value:function(a,b){if(null==b)return a.removeAttribute("value");"number"!==a.type||!1===a.hasAttribute("value")?a.setAttribute("value",""+b):a.validity&&!a.validity.badInput&&a.ownerDocument.activeElement!==a&&
a.setAttribute("value",""+b)}}},Ea=xa.HAS_STRING_BOOLEAN_VALUE,M={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Ga={Properties:{autoReverse:Ea,externalResourcesRequired:Ea,preserveAlpha:Ea},DOMAttributeNames:{autoReverse:"autoReverse",externalResourcesRequired:"externalResourcesRequired",preserveAlpha:"preserveAlpha"},DOMAttributeNamespaces:{xlinkActuate:M.xlink,xlinkArcrole:M.xlink,xlinkHref:M.xlink,xlinkRole:M.xlink,xlinkShow:M.xlink,xlinkTitle:M.xlink,xlinkType:M.xlink,
xmlBase:M.xml,xmlLang:M.xml,xmlSpace:M.xml}},Ha=/[\-\:]([a-z])/g;function Ia(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function(a){var b=a.replace(Ha,
Ia);Ga.Properties[b]=0;Ga.DOMAttributeNames[b]=a});xa.injectDOMPropertyConfig(Da);xa.injectDOMPropertyConfig(Ga);
var P={_caughtError:null,_hasCaughtError:!1,_rethrowError:null,_hasRethrowError:!1,injection:{injectErrorUtils:function(a){"function"!==typeof a.invokeGuardedCallback?E("197"):void 0;Ja=a.invokeGuardedCallback}},invokeGuardedCallback:function(a,b,c,d,e,f,g,h,k){Ja.apply(P,arguments)},invokeGuardedCallbackAndCatchFirstError:function(a,b,c,d,e,f,g,h,k){P.invokeGuardedCallback.apply(this,arguments);if(P.hasCaughtError()){var q=P.clearCaughtError();P._hasRethrowError||(P._hasRethrowError=!0,P._rethrowError=
q)}},rethrowCaughtError:function(){return Ka.apply(P,arguments)},hasCaughtError:function(){return P._hasCaughtError},clearCaughtError:function(){if(P._hasCaughtError){var a=P._caughtError;P._caughtError=null;P._hasCaughtError=!1;return a}E("198")}};function Ja(a,b,c,d,e,f,g,h,k){P._hasCaughtError=!1;P._caughtError=null;var q=Array.prototype.slice.call(arguments,3);try{b.apply(c,q)}catch(v){P._caughtError=v,P._hasCaughtError=!0}}
function Ka(){if(P._hasRethrowError){var a=P._rethrowError;P._rethrowError=null;P._hasRethrowError=!1;throw a;}}var La=null,Ma={};
function Na(){if(La)for(var a in Ma){var b=Ma[a],c=La.indexOf(a);-1<c?void 0:E("96",a);if(!Oa[c]){b.extractEvents?void 0:E("97",a);Oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;Pa.hasOwnProperty(h)?E("99",h):void 0;Pa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&Qa(k[e],g,h);e=!0}else f.registrationName?(Qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:E("98",d,a)}}}}
function Qa(a,b,c){Ra[a]?E("100",a):void 0;Ra[a]=b;Sa[a]=b.eventTypes[c].dependencies}var Oa=[],Pa={},Ra={},Sa={};function Ta(a){La?E("101"):void 0;La=Array.prototype.slice.call(a);Na()}function Ua(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];Ma.hasOwnProperty(c)&&Ma[c]===d||(Ma[c]?E("102",c):void 0,Ma[c]=d,b=!0)}b&&Na()}
var Va=Object.freeze({plugins:Oa,eventNameDispatchConfigs:Pa,registrationNameModules:Ra,registrationNameDependencies:Sa,possibleRegistrationNames:null,injectEventPluginOrder:Ta,injectEventPluginsByName:Ua}),Wa=null,Xa=null,Ya=null;function Za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=Ya(d);P.invokeGuardedCallbackAndCatchFirstError(b,c,void 0,a);a.currentTarget=null}
function $a(a,b){null==b?E("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function ab(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var bb=null;
function cb(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)Za(a,b,c[e],d[e]);else c&&Za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function db(a){return cb(a,!0)}function gb(a){return cb(a,!1)}var hb={injectEventPluginOrder:Ta,injectEventPluginsByName:Ua};
function ib(a,b){var c=a.stateNode;if(!c)return null;var d=Wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?E("231",b,typeof c):void 0;
return c}function jb(a,b,c,d){for(var e,f=0;f<Oa.length;f++){var g=Oa[f];g&&(g=g.extractEvents(a,b,c,d))&&(e=$a(e,g))}return e}function kb(a){a&&(bb=$a(bb,a))}function lb(a){var b=bb;bb=null;b&&(a?ab(b,db):ab(b,gb),bb?E("95"):void 0,P.rethrowCaughtError())}var mb=Object.freeze({injection:hb,getListener:ib,extractEvents:jb,enqueueEvents:kb,processEventQueue:lb}),nb=Math.random().toString(36).slice(2),Q="__reactInternalInstance$"+nb,ob="__reactEventHandlers$"+nb;
function pb(a){if(a[Q])return a[Q];for(var b=[];!a[Q];)if(b.push(a),a.parentNode)a=a.parentNode;else return null;var c=void 0,d=a[Q];if(5===d.tag||6===d.tag)return d;for(;a&&(d=a[Q]);a=b.pop())c=d;return c}function qb(a){if(5===a.tag||6===a.tag)return a.stateNode;E("33")}function rb(a){return a[ob]||null}
var sb=Object.freeze({precacheFiberNode:function(a,b){b[Q]=a},getClosestInstanceFromNode:pb,getInstanceFromNode:function(a){a=a[Q];return!a||5!==a.tag&&6!==a.tag?null:a},getNodeFromInstance:qb,getFiberCurrentPropsFromNode:rb,updateFiberProps:function(a,b){a[ob]=b}});function tb(a){do a=a["return"];while(a&&5!==a.tag);return a?a:null}function ub(a,b,c){for(var d=[];a;)d.push(a),a=tb(a);for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}
function vb(a,b,c){if(b=ib(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=$a(c._dispatchListeners,b),c._dispatchInstances=$a(c._dispatchInstances,a)}function wb(a){a&&a.dispatchConfig.phasedRegistrationNames&&ub(a._targetInst,vb,a)}function xb(a){if(a&&a.dispatchConfig.phasedRegistrationNames){var b=a._targetInst;b=b?tb(b):null;ub(b,vb,a)}}
function yb(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=ib(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=$a(c._dispatchListeners,b),c._dispatchInstances=$a(c._dispatchInstances,a))}function zb(a){a&&a.dispatchConfig.registrationName&&yb(a._targetInst,null,a)}function Ab(a){ab(a,wb)}
function Bb(a,b,c,d){if(c&&d)a:{var e=c;for(var f=d,g=0,h=e;h;h=tb(h))g++;h=0;for(var k=f;k;k=tb(k))h++;for(;0<g-h;)e=tb(e),g--;for(;0<h-g;)f=tb(f),h--;for(;g--;){if(e===f||e===f.alternate)break a;e=tb(e);f=tb(f)}e=null}else e=null;f=e;for(e=[];c&&c!==f;){g=c.alternate;if(null!==g&&g===f)break;e.push(c);c=tb(c)}for(c=[];d&&d!==f;){g=d.alternate;if(null!==g&&g===f)break;c.push(d);d=tb(d)}for(d=0;d<e.length;d++)yb(e[d],"bubbled",a);for(a=c.length;0<a--;)yb(c[a],"captured",b)}
var Cb=Object.freeze({accumulateTwoPhaseDispatches:Ab,accumulateTwoPhaseDispatchesSkipTarget:function(a){ab(a,xb)},accumulateEnterLeaveDispatches:Bb,accumulateDirectDispatches:function(a){ab(a,zb)}}),Db=null;function Eb(){!Db&&l.canUseDOM&&(Db="textContent"in document.documentElement?"textContent":"innerText");return Db}var S={_root:null,_startText:null,_fallbackText:null};
function Fb(){if(S._fallbackText)return S._fallbackText;var a,b=S._startText,c=b.length,d,e=Gb(),f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);S._fallbackText=e.slice(a,1<d?1-d:void 0);return S._fallbackText}function Gb(){return"value"in S._root?S._root.value:S._root[Eb()]}
var Hb="dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),Ib={type:null,target:null,currentTarget:C.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
function T(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?C.thatReturnsTrue:C.thatReturnsFalse;this.isPropagationStopped=C.thatReturnsFalse;return this}
B(T.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=C.thatReturnsTrue)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=C.thatReturnsTrue)},persist:function(){this.isPersistent=C.thatReturnsTrue},isPersistent:C.thatReturnsFalse,
destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;for(a=0;a<Hb.length;a++)this[Hb[a]]=null}});T.Interface=Ib;T.augmentClass=function(a,b){function c(){}c.prototype=this.prototype;var d=new c;B(d,a.prototype);a.prototype=d;a.prototype.constructor=a;a.Interface=B({},this.Interface,b);a.augmentClass=this.augmentClass;Jb(a)};Jb(T);function Kb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function Lb(a){a instanceof this?void 0:E("223");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Jb(a){a.eventPool=[];a.getPooled=Kb;a.release=Lb}function Mb(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Mb,{data:null});function Nb(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Nb,{data:null});var Pb=[9,13,27,32],Vb=l.canUseDOM&&"CompositionEvent"in window,Wb=null;l.canUseDOM&&"documentMode"in document&&(Wb=document.documentMode);var Xb;
if(Xb=l.canUseDOM&&"TextEvent"in window&&!Wb){var Yb=window.opera;Xb=!("object"===typeof Yb&&"function"===typeof Yb.version&&12>=parseInt(Yb.version(),10))}
var Zb=Xb,$b=l.canUseDOM&&(!Vb||Wb&&8<Wb&&11>=Wb),ac=String.fromCharCode(32),bc={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["topCompositionEnd","topKeyPress","topTextInput","topPaste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ")}},cc=!1;
function dc(a,b){switch(a){case "topKeyUp":return-1!==Pb.indexOf(b.keyCode);case "topKeyDown":return 229!==b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":return!0;default:return!1}}function ec(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var fc=!1;function gc(a,b){switch(a){case "topCompositionEnd":return ec(b);case "topKeyPress":if(32!==b.which)return null;cc=!0;return ac;case "topTextInput":return a=b.data,a===ac&&cc?null:a;default:return null}}
function hc(a,b){if(fc)return"topCompositionEnd"===a||!Vb&&dc(a,b)?(a=Fb(),S._root=null,S._startText=null,S._fallbackText=null,fc=!1,a):null;switch(a){case "topPaste":return null;case "topKeyPress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "topCompositionEnd":return $b?null:b.data;default:return null}}
var ic={eventTypes:bc,extractEvents:function(a,b,c,d){var e;if(Vb)b:{switch(a){case "topCompositionStart":var f=bc.compositionStart;break b;case "topCompositionEnd":f=bc.compositionEnd;break b;case "topCompositionUpdate":f=bc.compositionUpdate;break b}f=void 0}else fc?dc(a,c)&&(f=bc.compositionEnd):"topKeyDown"===a&&229===c.keyCode&&(f=bc.compositionStart);f?($b&&(fc||f!==bc.compositionStart?f===bc.compositionEnd&&fc&&(e=Fb()):(S._root=d,S._startText=Gb(),fc=!0)),f=Mb.getPooled(f,b,c,d),e?f.data=
e:(e=ec(c),null!==e&&(f.data=e)),Ab(f),e=f):e=null;(a=Zb?gc(a,c):hc(a,c))?(b=Nb.getPooled(bc.beforeInput,b,c,d),b.data=a,Ab(b)):b=null;return[e,b]}},jc=null,kc=null,lc=null;function mc(a){if(a=Xa(a)){jc&&"function"===typeof jc.restoreControlledState?void 0:E("194");var b=Wa(a.stateNode);jc.restoreControlledState(a.stateNode,a.type,b)}}var nc={injectFiberControlledHostComponent:function(a){jc=a}};function oc(a){kc?lc?lc.push(a):lc=[a]:kc=a}
function pc(){if(kc){var a=kc,b=lc;lc=kc=null;mc(a);if(b)for(a=0;a<b.length;a++)mc(b[a])}}var qc=Object.freeze({injection:nc,enqueueStateRestore:oc,restoreStateIfNeeded:pc});function rc(a,b){return a(b)}var sc=!1;function tc(a,b){if(sc)return rc(a,b);sc=!0;try{return rc(a,b)}finally{sc=!1,pc()}}var uc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};
function vc(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!uc[a.type]:"textarea"===b?!0:!1}function wc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var xc;l.canUseDOM&&(xc=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));
function yc(a,b){if(!l.canUseDOM||b&&!("addEventListener"in document))return!1;b="on"+a;var c=b in document;c||(c=document.createElement("div"),c.setAttribute(b,"return;"),c="function"===typeof c[b]);!c&&xc&&"wheel"===a&&(c=document.implementation.hasFeature("Events.wheel","3.0"));return c}function zc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ac(a){var b=zc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"function"===typeof c.get&&"function"===typeof c.set)return Object.defineProperty(a,b,{enumerable:c.enumerable,configurable:!0,get:function(){return c.get.call(this)},set:function(a){d=""+a;c.set.call(this,a)}}),{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}
function Bc(a){a._valueTracker||(a._valueTracker=Ac(a))}function Cc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=zc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Dc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ")}};
function Ec(a,b,c){a=T.getPooled(Dc.change,a,b,c);a.type="change";oc(c);Ab(a);return a}var Fc=null,Gc=null;function Hc(a){kb(a);lb(!1)}function Ic(a){var b=qb(a);if(Cc(b))return a}function Jc(a,b){if("topChange"===a)return b}var Kc=!1;l.canUseDOM&&(Kc=yc("input")&&(!document.documentMode||9<document.documentMode));function Lc(){Fc&&(Fc.detachEvent("onpropertychange",Mc),Gc=Fc=null)}function Mc(a){"value"===a.propertyName&&Ic(Gc)&&(a=Ec(Gc,a,wc(a)),tc(Hc,a))}
function Nc(a,b,c){"topFocus"===a?(Lc(),Fc=b,Gc=c,Fc.attachEvent("onpropertychange",Mc)):"topBlur"===a&&Lc()}function Oc(a){if("topSelectionChange"===a||"topKeyUp"===a||"topKeyDown"===a)return Ic(Gc)}function Pc(a,b){if("topClick"===a)return Ic(b)}function $c(a,b){if("topInput"===a||"topChange"===a)return Ic(b)}
var ad={eventTypes:Dc,_isInputEventSupported:Kc,extractEvents:function(a,b,c,d){var e=b?qb(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Jc;else if(vc(e))if(Kc)g=$c;else{g=Oc;var h=Nc}else f=e.nodeName,!f||"input"!==f.toLowerCase()||"checkbox"!==e.type&&"radio"!==e.type||(g=Pc);if(g&&(g=g(a,b)))return Ec(g,c,d);h&&h(a,e,b);"topBlur"===a&&null!=b&&(a=b._wrapperState||e._wrapperState)&&a.controlled&&"number"===e.type&&(a=""+e.value,e.getAttribute("value")!==
a&&e.setAttribute("value",a))}};function bd(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(bd,{view:null,detail:null});var cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=cd[a])?!!b[a]:!1}function ed(){return dd}function fd(a,b,c,d){return T.call(this,a,b,c,d)}
bd.augmentClass(fd,{screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ed,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)}});
var gd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["topMouseOut","topMouseOver"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["topMouseOut","topMouseOver"]}},hd={eventTypes:gd,extractEvents:function(a,b,c,d){if("topMouseOver"===a&&(c.relatedTarget||c.fromElement)||"topMouseOut"!==a&&"topMouseOver"!==a)return null;var e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;"topMouseOut"===a?(a=b,b=(b=c.relatedTarget||c.toElement)?pb(b):null):a=null;if(a===
b)return null;var f=null==a?e:qb(a);e=null==b?e:qb(b);var g=fd.getPooled(gd.mouseLeave,a,c,d);g.type="mouseleave";g.target=f;g.relatedTarget=e;c=fd.getPooled(gd.mouseEnter,b,c,d);c.type="mouseenter";c.target=e;c.relatedTarget=f;Bb(g,c,a,b);return[g,c]}},id=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function jd(a){a=a.type;return"string"===typeof a?a:"function"===typeof a?a.displayName||a.name:null}
function kd(a){var b=a;if(a.alternate)for(;b["return"];)b=b["return"];else{if(0!==(b.effectTag&2))return 1;for(;b["return"];)if(b=b["return"],0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){return(a=a._reactInternalFiber)?2===kd(a):!1}function md(a){2!==kd(a)?E("188"):void 0}
function nd(a){var b=a.alternate;if(!b)return b=kd(a),3===b?E("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c["return"],f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return md(e),a;if(g===d)return md(e),b;g=g.sibling}E("188")}if(c["return"]!==d["return"])c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:E("189")}}c.alternate!==d?E("190"):void 0}3!==c.tag?E("188"):void 0;return c.stateNode.current===c?a:b}function od(a){a=nd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}
function pd(a){a=nd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child["return"]=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b["return"]||b["return"]===a)return null;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}}return null}var qd=[];
function rd(a){var b=a.targetInst;do{if(!b){a.ancestors.push(b);break}var c;for(c=b;c["return"];)c=c["return"];c=3!==c.tag?null:c.stateNode.containerInfo;if(!c)break;a.ancestors.push(b);b=pb(c)}while(b);for(c=0;c<a.ancestors.length;c++)b=a.ancestors[c],sd(a.topLevelType,b,a.nativeEvent,wc(a.nativeEvent))}var td=!0,sd=void 0;function ud(a){td=!!a}function U(a,b,c){return c?ba.listen(c,b,vd.bind(null,a)):null}function wd(a,b,c){return c?ba.capture(c,b,vd.bind(null,a)):null}
function vd(a,b){if(td){var c=wc(b);c=pb(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(qd.length){var d=qd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{tc(rd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>qd.length&&qd.push(a)}}}
var xd=Object.freeze({get _enabled(){return td},get _handleTopLevel(){return sd},setHandleTopLevel:function(a){sd=a},setEnabled:ud,isEnabled:function(){return td},trapBubbledEvent:U,trapCapturedEvent:wd,dispatchEvent:vd});function yd(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;c["ms"+a]="MS"+b;c["O"+a]="o"+b.toLowerCase();return c}
var zd={animationend:yd("Animation","AnimationEnd"),animationiteration:yd("Animation","AnimationIteration"),animationstart:yd("Animation","AnimationStart"),transitionend:yd("Transition","TransitionEnd")},Ad={},Bd={};l.canUseDOM&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete zd.animationend.animation,delete zd.animationiteration.animation,delete zd.animationstart.animation),"TransitionEvent"in window||delete zd.transitionend.transition);
function Cd(a){if(Ad[a])return Ad[a];if(!zd[a])return a;var b=zd[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Bd)return Ad[a]=b[c];return""}
var Dd={topAbort:"abort",topAnimationEnd:Cd("animationend")||"animationend",topAnimationIteration:Cd("animationiteration")||"animationiteration",topAnimationStart:Cd("animationstart")||"animationstart",topBlur:"blur",topCancel:"cancel",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topClose:"close",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",
topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoad:"load",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",
topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topToggle:"toggle",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",
topTouchStart:"touchstart",topTransitionEnd:Cd("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},Ed={},Fd=0,Gd="_reactListenersID"+(""+Math.random()).slice(2);function Hd(a){Object.prototype.hasOwnProperty.call(a,Gd)||(a[Gd]=Fd++,Ed[a[Gd]]={});return Ed[a[Gd]]}function Id(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Jd(a,b){var c=Id(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Id(c)}}function Kd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&"text"===a.type||"textarea"===b||"true"===a.contentEditable)}
var Ld=l.canUseDOM&&"documentMode"in document&&11>=document.documentMode,Md={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ")}},Nd=null,Od=null,Pd=null,Qd=!1;
function Rd(a,b){if(Qd||null==Nd||Nd!==da())return null;var c=Nd;"selectionStart"in c&&Kd(c)?c={start:c.selectionStart,end:c.selectionEnd}:window.getSelection?(c=window.getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}):c=void 0;return Pd&&ea(Pd,c)?null:(Pd=c,a=T.getPooled(Md.select,Od,a,b),a.type="select",a.target=Nd,Ab(a),a)}
var Sd={eventTypes:Md,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Hd(e);f=Sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?qb(b):window;switch(a){case "topFocus":if(vc(e)||"true"===e.contentEditable)Nd=e,Od=b,Pd=null;break;case "topBlur":Pd=Od=Nd=null;break;case "topMouseDown":Qd=!0;break;case "topContextMenu":case "topMouseUp":return Qd=!1,Rd(c,d);case "topSelectionChange":if(Ld)break;
case "topKeyDown":case "topKeyUp":return Rd(c,d)}return null}};function Td(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Td,{animationName:null,elapsedTime:null,pseudoElement:null});function Ud(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(Ud,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}});function Vd(a,b,c,d){return T.call(this,a,b,c,d)}bd.augmentClass(Vd,{relatedTarget:null});
function Wd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;return 32<=a||13===a?a:0}
var Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function Zd(a,b,c,d){return T.call(this,a,b,c,d)}
bd.augmentClass(Zd,{key:function(a){if(a.key){var b=Xd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Wd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Yd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ed,charCode:function(a){return"keypress"===a.type?Wd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?Wd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}});function $d(a,b,c,d){return T.call(this,a,b,c,d)}fd.augmentClass($d,{dataTransfer:null});function ae(a,b,c,d){return T.call(this,a,b,c,d)}bd.augmentClass(ae,{touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ed});function be(a,b,c,d){return T.call(this,a,b,c,d)}T.augmentClass(be,{propertyName:null,elapsedTime:null,pseudoElement:null});
function ce(a,b,c,d){return T.call(this,a,b,c,d)}fd.augmentClass(ce,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null});var de={},ee={};
"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function(a){var b=a[0].toUpperCase()+
a.slice(1),c="on"+b;b="top"+b;c={phasedRegistrationNames:{bubbled:c,captured:c+"Capture"},dependencies:[b]};de[a]=c;ee[b]=c});
var fe={eventTypes:de,extractEvents:function(a,b,c,d){var e=ee[a];if(!e)return null;switch(a){case "topKeyPress":if(0===Wd(c))return null;case "topKeyDown":case "topKeyUp":a=Zd;break;case "topBlur":case "topFocus":a=Vd;break;case "topClick":if(2===c.button)return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":a=fd;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":a=
$d;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":a=ae;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":a=Td;break;case "topTransitionEnd":a=be;break;case "topScroll":a=bd;break;case "topWheel":a=ce;break;case "topCopy":case "topCut":case "topPaste":a=Ud;break;default:a=T}b=a.getPooled(e,b,c,d);Ab(b);return b}};sd=function(a,b,c,d){a=jb(a,b,c,d);kb(a);lb(!1)};hb.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
Wa=sb.getFiberCurrentPropsFromNode;Xa=sb.getInstanceFromNode;Ya=sb.getNodeFromInstance;hb.injectEventPluginsByName({SimpleEventPlugin:fe,EnterLeaveEventPlugin:hd,ChangeEventPlugin:ad,SelectEventPlugin:Sd,BeforeInputEventPlugin:ic});var ge=[],he=-1;function V(a){0>he||(a.current=ge[he],ge[he]=null,he--)}function W(a,b){he++;ge[he]=a.current;a.current=b}new Set;var ie={current:D},X={current:!1},je=D;function ke(a){return le(a)?je:ie.current}
function me(a,b){var c=a.type.contextTypes;if(!c)return D;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function le(a){return 2===a.tag&&null!=a.type.childContextTypes}function ne(a){le(a)&&(V(X,a),V(ie,a))}
function oe(a,b,c){null!=ie.cursor?E("168"):void 0;W(ie,b,a);W(X,c,a)}function pe(a,b){var c=a.stateNode,d=a.type.childContextTypes;if("function"!==typeof c.getChildContext)return b;c=c.getChildContext();for(var e in c)e in d?void 0:E("108",jd(a)||"Unknown",e);return B({},b,c)}function qe(a){if(!le(a))return!1;var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||D;je=ie.current;W(ie,b,a);W(X,X.current,a);return!0}
function re(a,b){var c=a.stateNode;c?void 0:E("169");if(b){var d=pe(a,je);c.__reactInternalMemoizedMergedChildContext=d;V(X,a);V(ie,a);W(ie,d,a)}else V(X,a);W(X,b,a)}
function Y(a,b,c){this.tag=a;this.key=b;this.stateNode=this.type=null;this.sibling=this.child=this["return"]=null;this.index=0;this.memoizedState=this.updateQueue=this.memoizedProps=this.pendingProps=this.ref=null;this.internalContextTag=c;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.expirationTime=0;this.alternate=null}
function se(a,b,c){var d=a.alternate;null===d?(d=new Y(a.tag,a.key,a.internalContextTag),d.type=a.type,d.stateNode=a.stateNode,d.alternate=a,a.alternate=d):(d.effectTag=0,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null);d.expirationTime=c;d.pendingProps=b;d.child=a.child;d.memoizedProps=a.memoizedProps;d.memoizedState=a.memoizedState;d.updateQueue=a.updateQueue;d.sibling=a.sibling;d.index=a.index;d.ref=a.ref;return d}
function te(a,b,c){var d=void 0,e=a.type,f=a.key;"function"===typeof e?(d=e.prototype&&e.prototype.isReactComponent?new Y(2,f,b):new Y(0,f,b),d.type=e,d.pendingProps=a.props):"string"===typeof e?(d=new Y(5,f,b),d.type=e,d.pendingProps=a.props):"object"===typeof e&&null!==e&&"number"===typeof e.tag?(d=e,d.pendingProps=a.props):E("130",null==e?e:typeof e,"");d.expirationTime=c;return d}function ue(a,b,c,d){b=new Y(10,d,b);b.pendingProps=a;b.expirationTime=c;return b}
function ve(a,b,c){b=new Y(6,null,b);b.pendingProps=a;b.expirationTime=c;return b}function we(a,b,c){b=new Y(7,a.key,b);b.type=a.handler;b.pendingProps=a;b.expirationTime=c;return b}function xe(a,b,c){a=new Y(9,null,b);a.expirationTime=c;return a}function ye(a,b,c){b=new Y(4,a.key,b);b.pendingProps=a.children||[];b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}var ze=null,Ae=null;
function Be(a){return function(b){try{return a(b)}catch(c){}}}function Ce(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);ze=Be(function(a){return b.onCommitFiberRoot(c,a)});Ae=Be(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function De(a){"function"===typeof ze&&ze(a)}function Ee(a){"function"===typeof Ae&&Ae(a)}
function Fe(a){return{baseState:a,expirationTime:0,first:null,last:null,callbackList:null,hasForceUpdate:!1,isInitialized:!1}}function Ge(a,b){null===a.last?a.first=a.last=b:(a.last.next=b,a.last=b);if(0===a.expirationTime||a.expirationTime>b.expirationTime)a.expirationTime=b.expirationTime}
function He(a,b){var c=a.alternate,d=a.updateQueue;null===d&&(d=a.updateQueue=Fe(null));null!==c?(a=c.updateQueue,null===a&&(a=c.updateQueue=Fe(null))):a=null;a=a!==d?a:null;null===a?Ge(d,b):null===d.last||null===a.last?(Ge(d,b),Ge(a,b)):(Ge(d,b),a.last=b)}function Ie(a,b,c,d){a=a.partialState;return"function"===typeof a?a.call(b,c,d):a}
function Je(a,b,c,d,e,f){null!==a&&a.updateQueue===c&&(c=b.updateQueue={baseState:c.baseState,expirationTime:c.expirationTime,first:c.first,last:c.last,isInitialized:c.isInitialized,callbackList:null,hasForceUpdate:!1});c.expirationTime=0;c.isInitialized?a=c.baseState:(a=c.baseState=b.memoizedState,c.isInitialized=!0);for(var g=!0,h=c.first,k=!1;null!==h;){var q=h.expirationTime;if(q>f){var v=c.expirationTime;if(0===v||v>q)c.expirationTime=q;k||(k=!0,c.baseState=a)}else{k||(c.first=h.next,null===
c.first&&(c.last=null));if(h.isReplace)a=Ie(h,d,a,e),g=!0;else if(q=Ie(h,d,a,e))a=g?B({},a,q):B(a,q),g=!1;h.isForced&&(c.hasForceUpdate=!0);null!==h.callback&&(q=c.callbackList,null===q&&(q=c.callbackList=[]),q.push(h))}h=h.next}null!==c.callbackList?b.effectTag|=32:null!==c.first||c.hasForceUpdate||(b.updateQueue=null);k||(c.baseState=a);return a}
function Ke(a,b){var c=a.callbackList;if(null!==c)for(a.callbackList=null,a=0;a<c.length;a++){var d=c[a],e=d.callback;d.callback=null;"function"!==typeof e?E("191",e):void 0;e.call(b)}}
function Le(a,b,c,d){function e(a,b){b.updater=f;a.stateNode=b;b._reactInternalFiber=a}var f={isMounted:ld,enqueueSetState:function(c,d,e){c=c._reactInternalFiber;e=void 0===e?null:e;var g=b(c);He(c,{expirationTime:g,partialState:d,callback:e,isReplace:!1,isForced:!1,nextCallback:null,next:null});a(c,g)},enqueueReplaceState:function(c,d,e){c=c._reactInternalFiber;e=void 0===e?null:e;var g=b(c);He(c,{expirationTime:g,partialState:d,callback:e,isReplace:!0,isForced:!1,nextCallback:null,next:null});
a(c,g)},enqueueForceUpdate:function(c,d){c=c._reactInternalFiber;d=void 0===d?null:d;var e=b(c);He(c,{expirationTime:e,partialState:null,callback:d,isReplace:!1,isForced:!0,nextCallback:null,next:null});a(c,e)}};return{adoptClassInstance:e,constructClassInstance:function(a,b){var c=a.type,d=ke(a),f=2===a.tag&&null!=a.type.contextTypes,g=f?me(a,d):D;b=new c(b,g);e(a,b);f&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=g);return b},mountClassInstance:function(a,
b){var c=a.alternate,d=a.stateNode,e=d.state||null,g=a.pendingProps;g?void 0:E("158");var h=ke(a);d.props=g;d.state=a.memoizedState=e;d.refs=D;d.context=me(a,h);null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent&&(a.internalContextTag|=1);"function"===typeof d.componentWillMount&&(e=d.state,d.componentWillMount(),e!==d.state&&f.enqueueReplaceState(d,d.state,null),e=a.updateQueue,null!==e&&(d.state=Je(c,a,e,d,g,b)));"function"===typeof d.componentDidMount&&(a.effectTag|=
4)},updateClassInstance:function(a,b,e){var g=b.stateNode;g.props=b.memoizedProps;g.state=b.memoizedState;var h=b.memoizedProps,k=b.pendingProps;k||(k=h,null==k?E("159"):void 0);var u=g.context,z=ke(b);z=me(b,z);"function"!==typeof g.componentWillReceiveProps||h===k&&u===z||(u=g.state,g.componentWillReceiveProps(k,z),g.state!==u&&f.enqueueReplaceState(g,g.state,null));u=b.memoizedState;e=null!==b.updateQueue?Je(a,b,b.updateQueue,g,k,e):u;if(!(h!==k||u!==e||X.current||null!==b.updateQueue&&b.updateQueue.hasForceUpdate))return"function"!==
typeof g.componentDidUpdate||h===a.memoizedProps&&u===a.memoizedState||(b.effectTag|=4),!1;var G=k;if(null===h||null!==b.updateQueue&&b.updateQueue.hasForceUpdate)G=!0;else{var I=b.stateNode,L=b.type;G="function"===typeof I.shouldComponentUpdate?I.shouldComponentUpdate(G,e,z):L.prototype&&L.prototype.isPureReactComponent?!ea(h,G)||!ea(u,e):!0}G?("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(k,e,z),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4)):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&u===a.memoizedState||(b.effectTag|=4),c(b,k),d(b,e));g.props=k;g.state=e;g.context=z;return G}}}var Qe="function"===typeof Symbol&&Symbol["for"],Re=Qe?Symbol["for"]("react.element"):60103,Se=Qe?Symbol["for"]("react.call"):60104,Te=Qe?Symbol["for"]("react.return"):60105,Ue=Qe?Symbol["for"]("react.portal"):60106,Ve=Qe?Symbol["for"]("react.fragment"):60107,We="function"===typeof Symbol&&Symbol.iterator;
function Xe(a){if(null===a||"undefined"===typeof a)return null;a=We&&a[We]||a["@@iterator"];return"function"===typeof a?a:null}var Ye=Array.isArray;
function Ze(a,b){var c=b.ref;if(null!==c&&"function"!==typeof c){if(b._owner){b=b._owner;var d=void 0;b&&(2!==b.tag?E("110"):void 0,d=b.stateNode);d?void 0:E("147",c);var e=""+c;if(null!==a&&null!==a.ref&&a.ref._stringRef===e)return a.ref;a=function(a){var b=d.refs===D?d.refs={}:d.refs;null===a?delete b[e]:b[e]=a};a._stringRef=e;return a}"string"!==typeof c?E("148"):void 0;b._owner?void 0:E("149",c)}return c}
function $e(a,b){"textarea"!==a.type&&E("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function af(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=se(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=ve(c,a.internalContextTag,d),b["return"]=a,b;b=e(b,c,d);b["return"]=a;return b}function k(a,b,c,d){if(null!==b&&b.type===c.type)return d=e(b,c.props,d),d.ref=Ze(b,c),d["return"]=a,d;d=te(c,a.internalContextTag,d);d.ref=Ze(b,c);d["return"]=a;return d}function q(a,b,c,d){if(null===b||7!==b.tag)return b=we(c,a.internalContextTag,d),b["return"]=a,b;b=e(b,c,d);
b["return"]=a;return b}function v(a,b,c,d){if(null===b||9!==b.tag)return b=xe(c,a.internalContextTag,d),b.type=c.value,b["return"]=a,b;b=e(b,null,d);b.type=c.value;b["return"]=a;return b}function y(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=ye(c,a.internalContextTag,d),b["return"]=a,b;b=e(b,c.children||[],d);b["return"]=a;return b}function u(a,b,c,d,f){if(null===b||10!==b.tag)return b=ue(c,a.internalContextTag,
d,f),b["return"]=a,b;b=e(b,c,d);b["return"]=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=ve(""+b,a.internalContextTag,c),b["return"]=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Re:if(b.type===Ve)return b=ue(b.props.children,a.internalContextTag,c,b.key),b["return"]=a,b;c=te(b,a.internalContextTag,c);c.ref=Ze(null,b);c["return"]=a;return c;case Se:return b=we(b,a.internalContextTag,c),b["return"]=a,b;case Te:return c=xe(b,a.internalContextTag,
c),c.type=b.value,c["return"]=a,c;case Ue:return b=ye(b,a.internalContextTag,c),b["return"]=a,b}if(Ye(b)||Xe(b))return b=ue(b,a.internalContextTag,c,null),b["return"]=a,b;$e(a,b)}return null}function G(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Re:return c.key===e?c.type===Ve?u(a,b,c.props.children,d,e):k(a,b,c,d):null;case Se:return c.key===e?q(a,b,c,d):null;case Te:return null===
e?v(a,b,c,d):null;case Ue:return c.key===e?y(a,b,c,d):null}if(Ye(c)||Xe(c))return null!==e?null:u(a,b,c,d,null);$e(a,c)}return null}function I(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Re:return a=a.get(null===d.key?c:d.key)||null,d.type===Ve?u(b,a,d.props.children,e,d.key):k(b,a,d,e);case Se:return a=a.get(null===d.key?c:d.key)||null,q(b,a,d,e);case Te:return a=a.get(c)||null,v(b,a,d,e);case Ue:return a=
a.get(null===d.key?c:d.key)||null,y(b,a,d,e)}if(Ye(d)||Xe(d))return a=a.get(c)||null,u(b,a,d,e,null);$e(b,d)}return null}function L(e,g,m,A){for(var h=null,r=null,n=g,w=g=0,k=null;null!==n&&w<m.length;w++){n.index>w?(k=n,n=null):k=n.sibling;var x=G(e,n,m[w],A);if(null===x){null===n&&(n=k);break}a&&n&&null===x.alternate&&b(e,n);g=f(x,g,w);null===r?h=x:r.sibling=x;r=x;n=k}if(w===m.length)return c(e,n),h;if(null===n){for(;w<m.length;w++)if(n=z(e,m[w],A))g=f(n,g,w),null===r?h=n:r.sibling=n,r=n;return h}for(n=
d(e,n);w<m.length;w++)if(k=I(n,e,w,m[w],A)){if(a&&null!==k.alternate)n["delete"](null===k.key?w:k.key);g=f(k,g,w);null===r?h=k:r.sibling=k;r=k}a&&n.forEach(function(a){return b(e,a)});return h}function N(e,g,m,A){var h=Xe(m);"function"!==typeof h?E("150"):void 0;m=h.call(m);null==m?E("151"):void 0;for(var r=h=null,n=g,w=g=0,k=null,x=m.next();null!==n&&!x.done;w++,x=m.next()){n.index>w?(k=n,n=null):k=n.sibling;var J=G(e,n,x.value,A);if(null===J){n||(n=k);break}a&&n&&null===J.alternate&&b(e,n);g=f(J,
g,w);null===r?h=J:r.sibling=J;r=J;n=k}if(x.done)return c(e,n),h;if(null===n){for(;!x.done;w++,x=m.next())x=z(e,x.value,A),null!==x&&(g=f(x,g,w),null===r?h=x:r.sibling=x,r=x);return h}for(n=d(e,n);!x.done;w++,x=m.next())if(x=I(n,e,w,x.value,A),null!==x){if(a&&null!==x.alternate)n["delete"](null===x.key?w:x.key);g=f(x,g,w);null===r?h=x:r.sibling=x;r=x}a&&n.forEach(function(a){return b(e,a)});return h}return function(a,d,f,h){"object"===typeof f&&null!==f&&f.type===Ve&&null===f.key&&(f=f.props.children);
var m="object"===typeof f&&null!==f;if(m)switch(f.$$typeof){case Re:a:{var r=f.key;for(m=d;null!==m;){if(m.key===r)if(10===m.tag?f.type===Ve:m.type===f.type){c(a,m.sibling);d=e(m,f.type===Ve?f.props.children:f.props,h);d.ref=Ze(m,f);d["return"]=a;a=d;break a}else{c(a,m);break}else b(a,m);m=m.sibling}f.type===Ve?(d=ue(f.props.children,a.internalContextTag,h,f.key),d["return"]=a,a=d):(h=te(f,a.internalContextTag,h),h.ref=Ze(d,f),h["return"]=a,a=h)}return g(a);case Se:a:{for(m=f.key;null!==d;){if(d.key===
m)if(7===d.tag){c(a,d.sibling);d=e(d,f,h);d["return"]=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=we(f,a.internalContextTag,h);d["return"]=a;a=d}return g(a);case Te:a:{if(null!==d)if(9===d.tag){c(a,d.sibling);d=e(d,null,h);d.type=f.value;d["return"]=a;a=d;break a}else c(a,d);d=xe(f,a.internalContextTag,h);d.type=f.value;d["return"]=a;a=d}return g(a);case Ue:a:{for(m=f.key;null!==d;){if(d.key===m)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===
f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d["return"]=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=ye(f,a.internalContextTag,h);d["return"]=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h)):(c(a,d),d=ve(f,a.internalContextTag,h)),d["return"]=a,a=d,g(a);if(Ye(f))return L(a,d,f,h);if(Xe(f))return N(a,d,f,h);m&&$e(a,f);if("undefined"===typeof f)switch(a.tag){case 2:case 1:h=a.type,E("152",h.displayName||
h.name||"Component")}return c(a,d)}}var bf=af(!0),cf=af(!1);
function df(a,b,c,d,e){function f(a,b,c){var d=b.expirationTime;b.child=null===a?cf(b,null,c,d):bf(b,a.child,c,d)}function g(a,b){var c=b.ref;null===c||a&&a.ref===c||(b.effectTag|=128)}function h(a,b,c,d){g(a,b);if(!c)return d&&re(b,!1),q(a,b);c=b.stateNode;id.current=b;var e=c.render();b.effectTag|=1;f(a,b,e);b.memoizedState=c.state;b.memoizedProps=c.props;d&&re(b,!0);return b.child}function k(a){var b=a.stateNode;b.pendingContext?oe(a,b.pendingContext,b.pendingContext!==b.context):b.context&&oe(a,
b.context,!1);I(a,b.containerInfo)}function q(a,b){null!==a&&b.child!==a.child?E("153"):void 0;if(null!==b.child){a=b.child;var c=se(a,a.pendingProps,a.expirationTime);b.child=c;for(c["return"]=b;null!==a.sibling;)a=a.sibling,c=c.sibling=se(a,a.pendingProps,a.expirationTime),c["return"]=b;c.sibling=null}return b.child}function v(a,b){switch(b.tag){case 3:k(b);break;case 2:qe(b);break;case 4:I(b,b.stateNode.containerInfo)}return null}var y=a.shouldSetTextContent,u=a.useSyncScheduling,z=a.shouldDeprioritizeSubtree,
G=b.pushHostContext,I=b.pushHostContainer,L=c.enterHydrationState,N=c.resetHydrationState,J=c.tryToClaimNextHydratableInstance;a=Le(d,e,function(a,b){a.memoizedProps=b},function(a,b){a.memoizedState=b});var w=a.adoptClassInstance,m=a.constructClassInstance,A=a.mountClassInstance,Ob=a.updateClassInstance;return{beginWork:function(a,b,c){if(0===b.expirationTime||b.expirationTime>c)return v(a,b);switch(b.tag){case 0:null!==a?E("155"):void 0;var d=b.type,e=b.pendingProps,r=ke(b);r=me(b,r);d=d(e,r);b.effectTag|=
1;"object"===typeof d&&null!==d&&"function"===typeof d.render?(b.tag=2,e=qe(b),w(b,d),A(b,c),b=h(a,b,!0,e)):(b.tag=1,f(a,b,d),b.memoizedProps=e,b=b.child);return b;case 1:a:{e=b.type;c=b.pendingProps;d=b.memoizedProps;if(X.current)null===c&&(c=d);else if(null===c||d===c){b=q(a,b);break a}d=ke(b);d=me(b,d);e=e(c,d);b.effectTag|=1;f(a,b,e);b.memoizedProps=c;b=b.child}return b;case 2:return e=qe(b),d=void 0,null===a?b.stateNode?E("153"):(m(b,b.pendingProps),A(b,c),d=!0):d=Ob(a,b,c),h(a,b,d,e);case 3:return k(b),
e=b.updateQueue,null!==e?(d=b.memoizedState,e=Je(a,b,e,null,null,c),d===e?(N(),b=q(a,b)):(d=e.element,r=b.stateNode,(null===a||null===a.child)&&r.hydrate&&L(b)?(b.effectTag|=2,b.child=cf(b,null,d,c)):(N(),f(a,b,d)),b.memoizedState=e,b=b.child)):(N(),b=q(a,b)),b;case 5:G(b);null===a&&J(b);e=b.type;var n=b.memoizedProps;d=b.pendingProps;null===d&&(d=n,null===d?E("154"):void 0);r=null!==a?a.memoizedProps:null;X.current||null!==d&&n!==d?(n=d.children,y(e,d)?n=null:r&&y(e,r)&&(b.effectTag|=16),g(a,b),
2147483647!==c&&!u&&z(e,d)?(b.expirationTime=2147483647,b=null):(f(a,b,n),b.memoizedProps=d,b=b.child)):b=q(a,b);return b;case 6:return null===a&&J(b),a=b.pendingProps,null===a&&(a=b.memoizedProps),b.memoizedProps=a,null;case 8:b.tag=7;case 7:e=b.pendingProps;if(X.current)null===e&&(e=a&&a.memoizedProps,null===e?E("154"):void 0);else if(null===e||b.memoizedProps===e)e=b.memoizedProps;d=e.children;b.stateNode=null===a?cf(b,b.stateNode,d,c):bf(b,b.stateNode,d,c);b.memoizedProps=e;return b.stateNode;
case 9:return null;case 4:a:{I(b,b.stateNode.containerInfo);e=b.pendingProps;if(X.current)null===e&&(e=a&&a.memoizedProps,null==e?E("154"):void 0);else if(null===e||b.memoizedProps===e){b=q(a,b);break a}null===a?b.child=bf(b,null,e,c):f(a,b,e);b.memoizedProps=e;b=b.child}return b;case 10:a:{c=b.pendingProps;if(X.current)null===c&&(c=b.memoizedProps);else if(null===c||b.memoizedProps===c){b=q(a,b);break a}f(a,b,c);b.memoizedProps=c;b=b.child}return b;default:E("156")}},beginFailedWork:function(a,b,
c){switch(b.tag){case 2:qe(b);break;case 3:k(b);break;default:E("157")}b.effectTag|=64;null===a?b.child=null:b.child!==a.child&&(b.child=a.child);if(0===b.expirationTime||b.expirationTime>c)return v(a,b);b.firstEffect=null;b.lastEffect=null;b.child=null===a?cf(b,null,null,c):bf(b,a.child,null,c);2===b.tag&&(a=b.stateNode,b.memoizedProps=a.props,b.memoizedState=a.state);return b.child}}}
function ef(a,b,c){function d(a){a.effectTag|=4}var e=a.createInstance,f=a.createTextInstance,g=a.appendInitialChild,h=a.finalizeInitialChildren,k=a.prepareUpdate,q=a.persistence,v=b.getRootHostContainer,y=b.popHostContext,u=b.getHostContext,z=b.popHostContainer,G=c.prepareToHydrateHostInstance,I=c.prepareToHydrateHostTextInstance,L=c.popHydrationState,N=void 0,J=void 0,w=void 0;a.mutation?(N=function(){},J=function(a,b,c){(b.updateQueue=c)&&d(b)},w=function(a,b,c,e){c!==e&&d(b)}):q?E("235"):E("236");
return{completeWork:function(a,b,c){var m=b.pendingProps;if(null===m)m=b.memoizedProps;else if(2147483647!==b.expirationTime||2147483647===c)b.pendingProps=null;switch(b.tag){case 1:return null;case 2:return ne(b),null;case 3:z(b);V(X,b);V(ie,b);m=b.stateNode;m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null);if(null===a||null===a.child)L(b),b.effectTag&=-3;N(b);return null;case 5:y(b);c=v();var A=b.type;if(null!==a&&null!=b.stateNode){var p=a.memoizedProps,q=b.stateNode,x=u();q=
k(q,A,p,m,c,x);J(a,b,q,A,p,m,c);a.ref!==b.ref&&(b.effectTag|=128)}else{if(!m)return null===b.stateNode?E("166"):void 0,null;a=u();if(L(b))G(b,c,a)&&d(b);else{a=e(A,m,c,a,b);a:for(p=b.child;null!==p;){if(5===p.tag||6===p.tag)g(a,p.stateNode);else if(4!==p.tag&&null!==p.child){p.child["return"]=p;p=p.child;continue}if(p===b)break;for(;null===p.sibling;){if(null===p["return"]||p["return"]===b)break a;p=p["return"]}p.sibling["return"]=p["return"];p=p.sibling}h(a,A,m,c)&&d(b);b.stateNode=a}null!==b.ref&&
(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)w(a,b,a.memoizedProps,m);else{if("string"!==typeof m)return null===b.stateNode?E("166"):void 0,null;a=v();c=u();L(b)?I(b)&&d(b):b.stateNode=f(m,a,c,b)}return null;case 7:(m=b.memoizedProps)?void 0:E("165");b.tag=8;A=[];a:for((p=b.stateNode)&&(p["return"]=b);null!==p;){if(5===p.tag||6===p.tag||4===p.tag)E("247");else if(9===p.tag)A.push(p.type);else if(null!==p.child){p.child["return"]=p;p=p.child;continue}for(;null===p.sibling;){if(null===
p["return"]||p["return"]===b)break a;p=p["return"]}p.sibling["return"]=p["return"];p=p.sibling}p=m.handler;m=p(m.props,A);b.child=bf(b,null!==a?a.child:null,m,c);return b.child;case 8:return b.tag=7,null;case 9:return null;case 10:return null;case 4:return z(b),N(b),null;case 0:E("167");default:E("156")}}}}
function ff(a,b){function c(a){var c=a.ref;if(null!==c)try{c(null)}catch(A){b(a,A)}}function d(a){"function"===typeof Ee&&Ee(a);switch(a.tag){case 2:c(a);var d=a.stateNode;if("function"===typeof d.componentWillUnmount)try{d.props=a.memoizedProps,d.state=a.memoizedState,d.componentWillUnmount()}catch(A){b(a,A)}break;case 5:c(a);break;case 7:e(a.stateNode);break;case 4:k&&g(a)}}function e(a){for(var b=a;;)if(d(b),null===b.child||k&&4===b.tag){if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||
b["return"]===a)return;b=b["return"]}b.sibling["return"]=b["return"];b=b.sibling}else b.child["return"]=b,b=b.child}function f(a){return 5===a.tag||3===a.tag||4===a.tag}function g(a){for(var b=a,c=!1,f=void 0,g=void 0;;){if(!c){c=b["return"];a:for(;;){null===c?E("160"):void 0;switch(c.tag){case 5:f=c.stateNode;g=!1;break a;case 3:f=c.stateNode.containerInfo;g=!0;break a;case 4:f=c.stateNode.containerInfo;g=!0;break a}c=c["return"]}c=!0}if(5===b.tag||6===b.tag)e(b),g?J(f,b.stateNode):N(f,b.stateNode);
else if(4===b.tag?f=b.stateNode.containerInfo:d(b),null!==b.child){b.child["return"]=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b["return"]||b["return"]===a)return;b=b["return"];4===b.tag&&(c=!1)}b.sibling["return"]=b["return"];b=b.sibling}}var h=a.getPublicInstance,k=a.mutation;a=a.persistence;k||(a?E("235"):E("236"));var q=k.commitMount,v=k.commitUpdate,y=k.resetTextContent,u=k.commitTextUpdate,z=k.appendChild,G=k.appendChildToContainer,I=k.insertBefore,L=k.insertInContainerBefore,
N=k.removeChild,J=k.removeChildFromContainer;return{commitResetTextContent:function(a){y(a.stateNode)},commitPlacement:function(a){a:{for(var b=a["return"];null!==b;){if(f(b)){var c=b;break a}b=b["return"]}E("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:E("161")}c.effectTag&16&&(y(b),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c["return"]||f(c["return"])){c=
null;break a}c=c["return"]}c.sibling["return"]=c["return"];for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child["return"]=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)c?d?L(b,e.stateNode,c):I(b,e.stateNode,c):d?G(b,e.stateNode):z(b,e.stateNode);else if(4!==e.tag&&null!==e.child){e.child["return"]=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e["return"]||e["return"]===
a)return;e=e["return"]}e.sibling["return"]=e["return"];e=e.sibling}},commitDeletion:function(a){g(a);a["return"]=null;a.child=null;a.alternate&&(a.alternate.child=null,a.alternate["return"]=null)},commitWork:function(a,b){switch(b.tag){case 2:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&v(c,f,e,a,d,b)}break;case 6:null===b.stateNode?E("162"):void 0;c=b.memoizedProps;u(b.stateNode,null!==a?a.memoizedProps:
c,c);break;case 3:break;default:E("163")}},commitLifeCycles:function(a,b){switch(b.tag){case 2:var c=b.stateNode;if(b.effectTag&4)if(null===a)c.props=b.memoizedProps,c.state=b.memoizedState,c.componentDidMount();else{var d=a.memoizedProps;a=a.memoizedState;c.props=b.memoizedProps;c.state=b.memoizedState;c.componentDidUpdate(d,a)}b=b.updateQueue;null!==b&&Ke(b,c);break;case 3:c=b.updateQueue;null!==c&&Ke(c,null!==b.child?b.child.stateNode:null);break;case 5:c=b.stateNode;null===a&&b.effectTag&4&&q(c,
b.type,b.memoizedProps,b);break;case 6:break;case 4:break;default:E("163")}},commitAttachRef:function(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:b(h(c));break;default:b(c)}}},commitDetachRef:function(a){a=a.ref;null!==a&&a(null)}}}var gf={};
function hf(a){function b(a){a===gf?E("174"):void 0;return a}var c=a.getChildHostContext,d=a.getRootHostContext,e={current:gf},f={current:gf},g={current:gf};return{getHostContext:function(){return b(e.current)},getRootHostContainer:function(){return b(g.current)},popHostContainer:function(a){V(e,a);V(f,a);V(g,a)},popHostContext:function(a){f.current===a&&(V(e,a),V(f,a))},pushHostContainer:function(a,b){W(g,b,a);b=d(b);W(f,a,a);W(e,b,a)},pushHostContext:function(a){var d=b(g.current),h=b(e.current);
d=c(h,a.type,d);h!==d&&(W(f,a,a),W(e,d,a))},resetHostContainer:function(){e.current=gf;g.current=gf}}}
function jf(a){function b(a,b){var c=new Y(5,null,0);c.type="DELETED";c.stateNode=b;c["return"]=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function c(a,b){switch(a.tag){case 5:return b=f(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=g(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;default:return!1}}function d(a){for(a=a["return"];null!==a&&5!==a.tag&&3!==a.tag;)a=a["return"];y=a}var e=a.shouldSetTextContent;
a=a.hydration;if(!a)return{enterHydrationState:function(){return!1},resetHydrationState:function(){},tryToClaimNextHydratableInstance:function(){},prepareToHydrateHostInstance:function(){E("175")},prepareToHydrateHostTextInstance:function(){E("176")},popHydrationState:function(){return!1}};var f=a.canHydrateInstance,g=a.canHydrateTextInstance,h=a.getNextHydratableSibling,k=a.getFirstHydratableChild,q=a.hydrateInstance,v=a.hydrateTextInstance,y=null,u=null,z=!1;return{enterHydrationState:function(a){u=
k(a.stateNode.containerInfo);y=a;return z=!0},resetHydrationState:function(){u=y=null;z=!1},tryToClaimNextHydratableInstance:function(a){if(z){var d=u;if(d){if(!c(a,d)){d=h(d);if(!d||!c(a,d)){a.effectTag|=2;z=!1;y=a;return}b(y,u)}y=a;u=k(d)}else a.effectTag|=2,z=!1,y=a}},prepareToHydrateHostInstance:function(a,b,c){b=q(a.stateNode,a.type,a.memoizedProps,b,c,a);a.updateQueue=b;return null!==b?!0:!1},prepareToHydrateHostTextInstance:function(a){return v(a.stateNode,a.memoizedProps,a)},popHydrationState:function(a){if(a!==
y)return!1;if(!z)return d(a),z=!0,!1;var c=a.type;if(5!==a.tag||"head"!==c&&"body"!==c&&!e(c,a.memoizedProps))for(c=u;c;)b(a,c),c=h(c);d(a);u=y?h(a.stateNode):null;return!0}}}
function kf(a){function b(a){Qb=ja=!0;var b=a.stateNode;b.current===a?E("177"):void 0;b.isReadyForCommit=!1;id.current=null;if(1<a.effectTag)if(null!==a.lastEffect){a.lastEffect.nextEffect=a;var c=a.firstEffect}else c=a;else c=a.firstEffect;yg();for(t=c;null!==t;){var d=!1,e=void 0;try{for(;null!==t;){var f=t.effectTag;f&16&&zg(t);if(f&128){var g=t.alternate;null!==g&&Ag(g)}switch(f&-242){case 2:Ne(t);t.effectTag&=-3;break;case 6:Ne(t);t.effectTag&=-3;Oe(t.alternate,t);break;case 4:Oe(t.alternate,
t);break;case 8:Sc=!0,Bg(t),Sc=!1}t=t.nextEffect}}catch(Tc){d=!0,e=Tc}d&&(null===t?E("178"):void 0,h(t,e),null!==t&&(t=t.nextEffect))}Cg();b.current=a;for(t=c;null!==t;){c=!1;d=void 0;try{for(;null!==t;){var k=t.effectTag;k&36&&Dg(t.alternate,t);k&128&&Eg(t);if(k&64)switch(e=t,f=void 0,null!==R&&(f=R.get(e),R["delete"](e),null==f&&null!==e.alternate&&(e=e.alternate,f=R.get(e),R["delete"](e))),null==f?E("184"):void 0,e.tag){case 2:e.stateNode.componentDidCatch(f.error,{componentStack:f.componentStack});
break;case 3:null===ca&&(ca=f.error);break;default:E("157")}var Qc=t.nextEffect;t.nextEffect=null;t=Qc}}catch(Tc){c=!0,d=Tc}c&&(null===t?E("178"):void 0,h(t,d),null!==t&&(t=t.nextEffect))}ja=Qb=!1;"function"===typeof De&&De(a.stateNode);ha&&(ha.forEach(G),ha=null);null!==ca&&(a=ca,ca=null,Ob(a));b=b.current.expirationTime;0===b&&(qa=R=null);return b}function c(a){for(;;){var b=Fg(a.alternate,a,H),c=a["return"],d=a.sibling;var e=a;if(2147483647===H||2147483647!==e.expirationTime){if(2!==e.tag&&3!==
e.tag)var f=0;else f=e.updateQueue,f=null===f?0:f.expirationTime;for(var g=e.child;null!==g;)0!==g.expirationTime&&(0===f||f>g.expirationTime)&&(f=g.expirationTime),g=g.sibling;e.expirationTime=f}if(null!==b)return b;null!==c&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));if(null!==d)return d;
if(null!==c)a=c;else{a.stateNode.isReadyForCommit=!0;break}}return null}function d(a){var b=rg(a.alternate,a,H);null===b&&(b=c(a));id.current=null;return b}function e(a){var b=Gg(a.alternate,a,H);null===b&&(b=c(a));id.current=null;return b}function f(a){if(null!==R){if(!(0===H||H>a))if(H<=Uc)for(;null!==F;)F=k(F)?e(F):d(F);else for(;null!==F&&!A();)F=k(F)?e(F):d(F)}else if(!(0===H||H>a))if(H<=Uc)for(;null!==F;)F=d(F);else for(;null!==F&&!A();)F=d(F)}function g(a,b){ja?E("243"):void 0;ja=!0;a.isReadyForCommit=
!1;if(a!==ra||b!==H||null===F){for(;-1<he;)ge[he]=null,he--;je=D;ie.current=D;X.current=!1;x();ra=a;H=b;F=se(ra.current,null,b)}var c=!1,d=null;try{f(b)}catch(Rc){c=!0,d=Rc}for(;c;){if(eb){ca=d;break}var g=F;if(null===g)eb=!0;else{var k=h(g,d);null===k?E("183"):void 0;if(!eb){try{c=k;d=b;for(k=c;null!==g;){switch(g.tag){case 2:ne(g);break;case 5:qg(g);break;case 3:p(g);break;case 4:p(g)}if(g===k||g.alternate===k)break;g=g["return"]}F=e(c);f(d)}catch(Rc){c=!0;d=Rc;continue}break}}}b=ca;eb=ja=!1;ca=
null;null!==b&&Ob(b);return a.isReadyForCommit?a.current.alternate:null}function h(a,b){var c=id.current=null,d=!1,e=!1,f=null;if(3===a.tag)c=a,q(a)&&(eb=!0);else for(var g=a["return"];null!==g&&null===c;){2===g.tag?"function"===typeof g.stateNode.componentDidCatch&&(d=!0,f=jd(g),c=g,e=!0):3===g.tag&&(c=g);if(q(g)){if(Sc||null!==ha&&(ha.has(g)||null!==g.alternate&&ha.has(g.alternate)))return null;c=null;e=!1}g=g["return"]}if(null!==c){null===qa&&(qa=new Set);qa.add(c);var h="";g=a;do{a:switch(g.tag){case 0:case 1:case 2:case 5:var k=
g._debugOwner,Qc=g._debugSource;var m=jd(g);var n=null;k&&(n=jd(k));k=Qc;m="\n    in "+(m||"Unknown")+(k?" (at "+k.fileName.replace(/^.*[\\\/]/,"")+":"+k.lineNumber+")":n?" (created by "+n+")":"");break a;default:m=""}h+=m;g=g["return"]}while(g);g=h;a=jd(a);null===R&&(R=new Map);b={componentName:a,componentStack:g,error:b,errorBoundary:d?c.stateNode:null,errorBoundaryFound:d,errorBoundaryName:f,willRetry:e};R.set(c,b);try{var p=b.error;p&&p.suppressReactErrorLogging||console.error(p)}catch(Vc){Vc&&
Vc.suppressReactErrorLogging||console.error(Vc)}Qb?(null===ha&&(ha=new Set),ha.add(c)):G(c);return c}null===ca&&(ca=b);return null}function k(a){return null!==R&&(R.has(a)||null!==a.alternate&&R.has(a.alternate))}function q(a){return null!==qa&&(qa.has(a)||null!==a.alternate&&qa.has(a.alternate))}function v(){return 20*(((I()+100)/20|0)+1)}function y(a){return 0!==ka?ka:ja?Qb?1:H:!Hg||a.internalContextTag&1?v():1}function u(a,b){return z(a,b,!1)}function z(a,b){for(;null!==a;){if(0===a.expirationTime||
a.expirationTime>b)a.expirationTime=b;null!==a.alternate&&(0===a.alternate.expirationTime||a.alternate.expirationTime>b)&&(a.alternate.expirationTime=b);if(null===a["return"])if(3===a.tag){var c=a.stateNode;!ja&&c===ra&&b<H&&(F=ra=null,H=0);var d=c,e=b;Rb>Ig&&E("185");if(null===d.nextScheduledRoot)d.remainingExpirationTime=e,null===O?(sa=O=d,d.nextScheduledRoot=d):(O=O.nextScheduledRoot=d,O.nextScheduledRoot=sa);else{var f=d.remainingExpirationTime;if(0===f||e<f)d.remainingExpirationTime=e}Fa||(la?
Sb&&(ma=d,na=1,m(ma,na)):1===e?w(1,null):L(e));!ja&&c===ra&&b<H&&(F=ra=null,H=0)}else break;a=a["return"]}}function G(a){z(a,1,!0)}function I(){return Uc=((Wc()-Pe)/10|0)+2}function L(a){if(0!==Tb){if(a>Tb)return;Jg(Xc)}var b=Wc()-Pe;Tb=a;Xc=Kg(J,{timeout:10*(a-2)-b})}function N(){var a=0,b=null;if(null!==O)for(var c=O,d=sa;null!==d;){var e=d.remainingExpirationTime;if(0===e){null===c||null===O?E("244"):void 0;if(d===d.nextScheduledRoot){sa=O=d.nextScheduledRoot=null;break}else if(d===sa)sa=e=d.nextScheduledRoot,
O.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===O){O=c;O.nextScheduledRoot=sa;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===O)break;c=d;d=d.nextScheduledRoot}}c=ma;null!==c&&c===b?Rb++:Rb=0;ma=b;na=a}function J(a){w(0,a)}function w(a,b){fb=b;for(N();null!==ma&&0!==na&&(0===a||na<=a)&&!Yc;)m(ma,na),N();null!==fb&&(Tb=0,Xc=-1);0!==na&&L(na);fb=null;Yc=!1;Rb=0;if(Ub)throw a=Zc,Zc=
null,Ub=!1,a;}function m(a,c){Fa?E("245"):void 0;Fa=!0;if(c<=I()){var d=a.finishedWork;null!==d?(a.finishedWork=null,a.remainingExpirationTime=b(d)):(a.finishedWork=null,d=g(a,c),null!==d&&(a.remainingExpirationTime=b(d)))}else d=a.finishedWork,null!==d?(a.finishedWork=null,a.remainingExpirationTime=b(d)):(a.finishedWork=null,d=g(a,c),null!==d&&(A()?a.finishedWork=d:a.remainingExpirationTime=b(d)));Fa=!1}function A(){return null===fb||fb.timeRemaining()>Lg?!1:Yc=!0}function Ob(a){null===ma?E("246"):
void 0;ma.remainingExpirationTime=0;Ub||(Ub=!0,Zc=a)}var r=hf(a),n=jf(a),p=r.popHostContainer,qg=r.popHostContext,x=r.resetHostContainer,Me=df(a,r,n,u,y),rg=Me.beginWork,Gg=Me.beginFailedWork,Fg=ef(a,r,n).completeWork;r=ff(a,h);var zg=r.commitResetTextContent,Ne=r.commitPlacement,Bg=r.commitDeletion,Oe=r.commitWork,Dg=r.commitLifeCycles,Eg=r.commitAttachRef,Ag=r.commitDetachRef,Wc=a.now,Kg=a.scheduleDeferredCallback,Jg=a.cancelDeferredCallback,Hg=a.useSyncScheduling,yg=a.prepareForCommit,Cg=a.resetAfterCommit,
Pe=Wc(),Uc=2,ka=0,ja=!1,F=null,ra=null,H=0,t=null,R=null,qa=null,ha=null,ca=null,eb=!1,Qb=!1,Sc=!1,sa=null,O=null,Tb=0,Xc=-1,Fa=!1,ma=null,na=0,Yc=!1,Ub=!1,Zc=null,fb=null,la=!1,Sb=!1,Ig=1E3,Rb=0,Lg=1;return{computeAsyncExpiration:v,computeExpirationForFiber:y,scheduleWork:u,batchedUpdates:function(a,b){var c=la;la=!0;try{return a(b)}finally{(la=c)||Fa||w(1,null)}},unbatchedUpdates:function(a){if(la&&!Sb){Sb=!0;try{return a()}finally{Sb=!1}}return a()},flushSync:function(a){var b=la;la=!0;try{a:{var c=
ka;ka=1;try{var d=a();break a}finally{ka=c}d=void 0}return d}finally{la=b,Fa?E("187"):void 0,w(1,null)}},deferredUpdates:function(a){var b=ka;ka=v();try{return a()}finally{ka=b}}}}
function lf(a){function b(a){a=od(a);return null===a?null:a.stateNode}var c=a.getPublicInstance;a=kf(a);var d=a.computeAsyncExpiration,e=a.computeExpirationForFiber,f=a.scheduleWork;return{createContainer:function(a,b){var c=new Y(3,null,0);a={current:c,containerInfo:a,pendingChildren:null,remainingExpirationTime:0,isReadyForCommit:!1,finishedWork:null,context:null,pendingContext:null,hydrate:b,nextScheduledRoot:null};return c.stateNode=a},updateContainer:function(a,b,c,q){var g=b.current;if(c){c=
c._reactInternalFiber;var h;b:{2===kd(c)&&2===c.tag?void 0:E("170");for(h=c;3!==h.tag;){if(le(h)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}(h=h["return"])?void 0:E("171")}h=h.stateNode.context}c=le(c)?pe(c,h):h}else c=D;null===b.context?b.context=c:b.pendingContext=c;b=q;b=void 0===b?null:b;q=null!=a&&null!=a.type&&null!=a.type.prototype&&!0===a.type.prototype.unstable_isAsyncReactComponent?d():e(g);He(g,{expirationTime:q,partialState:{element:a},callback:b,isReplace:!1,isForced:!1,
nextCallback:null,next:null});f(g,q)},batchedUpdates:a.batchedUpdates,unbatchedUpdates:a.unbatchedUpdates,deferredUpdates:a.deferredUpdates,flushSync:a.flushSync,getPublicRootInstance:function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return c(a.child.stateNode);default:return a.child.stateNode}},findHostInstance:b,findHostInstanceWithNoPortals:function(a){a=pd(a);return null===a?null:a.stateNode},injectIntoDevTools:function(a){var c=a.findFiberByHostInstance;return Ce(B({},
a,{findHostInstanceByFiber:function(a){return b(a)},findFiberByHostInstance:function(a){return c?c(a):null}}))}}}var mf=Object.freeze({default:lf}),nf=mf&&lf||mf,of=nf["default"]?nf["default"]:nf;function pf(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ue,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}var qf="object"===typeof performance&&"function"===typeof performance.now,rf=void 0;rf=qf?function(){return performance.now()}:function(){return Date.now()};
var sf=void 0,tf=void 0;
if(l.canUseDOM)if("function"!==typeof requestIdleCallback||"function"!==typeof cancelIdleCallback){var uf=null,vf=!1,wf=-1,xf=!1,yf=0,zf=33,Af=33,Bf;Bf=qf?{didTimeout:!1,timeRemaining:function(){var a=yf-performance.now();return 0<a?a:0}}:{didTimeout:!1,timeRemaining:function(){var a=yf-Date.now();return 0<a?a:0}};var Cf="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",function(a){if(a.source===window&&a.data===Cf){vf=!1;a=rf();if(0>=yf-a)if(-1!==wf&&wf<=
a)Bf.didTimeout=!0;else{xf||(xf=!0,requestAnimationFrame(Df));return}else Bf.didTimeout=!1;wf=-1;a=uf;uf=null;null!==a&&a(Bf)}},!1);var Df=function(a){xf=!1;var b=a-yf+Af;b<Af&&zf<Af?(8>b&&(b=8),Af=b<zf?zf:b):zf=b;yf=a+Af;vf||(vf=!0,window.postMessage(Cf,"*"))};sf=function(a,b){uf=a;null!=b&&"number"===typeof b.timeout&&(wf=rf()+b.timeout);xf||(xf=!0,requestAnimationFrame(Df));return 0};tf=function(){uf=null;vf=!1;wf=-1}}else sf=window.requestIdleCallback,tf=window.cancelIdleCallback;else sf=function(a){return setTimeout(function(){a({timeRemaining:function(){return Infinity}})})},
tf=function(a){clearTimeout(a)};var Ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Gf={};
function Hf(a){if(Gf.hasOwnProperty(a))return!0;if(Ff.hasOwnProperty(a))return!1;if(Ef.test(a))return Gf[a]=!0;Ff[a]=!0;return!1}
function If(a,b,c){var d=wa(b);if(d&&va(b,c)){var e=d.mutationMethod;e?e(a,c):null==c||d.hasBooleanValue&&!c||d.hasNumericValue&&isNaN(c)||d.hasPositiveNumericValue&&1>c||d.hasOverloadedBooleanValue&&!1===c?Jf(a,b):d.mustUseProperty?a[d.propertyName]=c:(b=d.attributeName,(e=d.attributeNamespace)?a.setAttributeNS(e,b,""+c):d.hasBooleanValue||d.hasOverloadedBooleanValue&&!0===c?a.setAttribute(b,""):a.setAttribute(b,""+c))}else Kf(a,b,va(b,c)?c:null)}
function Kf(a,b,c){Hf(b)&&(null==c?a.removeAttribute(b):a.setAttribute(b,""+c))}function Jf(a,b){var c=wa(b);c?(b=c.mutationMethod)?b(a,void 0):c.mustUseProperty?a[c.propertyName]=c.hasBooleanValue?!1:"":a.removeAttribute(c.attributeName):a.removeAttribute(b)}
function Lf(a,b){var c=b.value,d=b.checked;return B({type:void 0,step:void 0,min:void 0,max:void 0},b,{defaultChecked:void 0,defaultValue:void 0,value:null!=c?c:a._wrapperState.initialValue,checked:null!=d?d:a._wrapperState.initialChecked})}function Mf(a,b){var c=b.defaultValue;a._wrapperState={initialChecked:null!=b.checked?b.checked:b.defaultChecked,initialValue:null!=b.value?b.value:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}
function Nf(a,b){b=b.checked;null!=b&&If(a,"checked",b)}function Of(a,b){Nf(a,b);var c=b.value;if(null!=c)if(0===c&&""===a.value)a.value="0";else if("number"===b.type){if(b=parseFloat(a.value)||0,c!=b||c==b&&a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else null==b.value&&null!=b.defaultValue&&a.defaultValue!==""+b.defaultValue&&(a.defaultValue=""+b.defaultValue),null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Pf(a,b){switch(b.type){case "submit":case "reset":break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":a.value="";a.value=a.defaultValue;break;default:a.value=a.value}b=a.name;""!==b&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!a.defaultChecked;""!==b&&(a.name=b)}function Qf(a){var b="";aa.Children.forEach(a,function(a){null==a||"string"!==typeof a&&"number"!==typeof a||(b+=a)});return b}
function Rf(a,b){a=B({children:void 0},b);if(b=Qf(b.children))a.children=b;return a}function Sf(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+c;b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Tf(a,b){var c=b.value;a._wrapperState={initialValue:null!=c?c:b.defaultValue,wasMultiple:!!b.multiple}}function Uf(a,b){null!=b.dangerouslySetInnerHTML?E("91"):void 0;return B({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Vf(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?E("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:E("93"),b=b[0]),c=""+b),null==c&&(c=""));a._wrapperState={initialValue:""+c}}
function Wf(a,b){var c=b.value;null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&(a.defaultValue=c));null!=b.defaultValue&&(a.defaultValue=b.defaultValue)}function Xf(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Yf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Zf(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $f(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Zf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ag=void 0,bg=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Yf.svg||"innerHTML"in a)a.innerHTML=b;else{ag=ag||document.createElement("div");ag.innerHTML="\x3csvg\x3e"+b+"\x3c/svg\x3e";for(b=ag.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function cg(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var dg={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eg=["Webkit","ms","Moz","O"];Object.keys(dg).forEach(function(a){eg.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);dg[b]=dg[a]})});
function fg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||dg.hasOwnProperty(e)&&dg[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var gg=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function hg(a,b,c){b&&(gg[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?E("137",a,c()):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?E("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:E("61")),null!=b.style&&"object"!==typeof b.style?E("62",c()):void 0)}
function ig(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var jg=Yf.html,kg=C.thatReturns("");
function lg(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Hd(a);b=Sa[b];for(var d=0;d<b.length;d++){var e=b[d];c.hasOwnProperty(e)&&c[e]||("topScroll"===e?wd("topScroll","scroll",a):"topFocus"===e||"topBlur"===e?(wd("topFocus","focus",a),wd("topBlur","blur",a),c.topBlur=!0,c.topFocus=!0):"topCancel"===e?(yc("cancel",!0)&&wd("topCancel","cancel",a),c.topCancel=!0):"topClose"===e?(yc("close",!0)&&wd("topClose","close",a),c.topClose=!0):Dd.hasOwnProperty(e)&&U(e,Dd[e],a),c[e]=!0)}}
var mg={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",
topWaiting:"waiting"};function ng(a,b,c,d){c=9===c.nodeType?c:c.ownerDocument;d===jg&&(d=Zf(a));d===jg?"script"===a?(a=c.createElement("div"),a.innerHTML="\x3cscript\x3e\x3c/script\x3e",a=a.removeChild(a.firstChild)):a="string"===typeof b.is?c.createElement(a,{is:b.is}):c.createElement(a):a=c.createElementNS(d,a);return a}function og(a,b){return(9===b.nodeType?b:b.ownerDocument).createTextNode(a)}
function pg(a,b,c,d){var e=ig(b,c);switch(b){case "iframe":case "object":U("topLoad","load",a);var f=c;break;case "video":case "audio":for(f in mg)mg.hasOwnProperty(f)&&U(f,mg[f],a);f=c;break;case "source":U("topError","error",a);f=c;break;case "img":case "image":U("topError","error",a);U("topLoad","load",a);f=c;break;case "form":U("topReset","reset",a);U("topSubmit","submit",a);f=c;break;case "details":U("topToggle","toggle",a);f=c;break;case "input":Mf(a,c);f=Lf(a,c);U("topInvalid","invalid",a);
lg(d,"onChange");break;case "option":f=Rf(a,c);break;case "select":Tf(a,c);f=B({},c,{value:void 0});U("topInvalid","invalid",a);lg(d,"onChange");break;case "textarea":Vf(a,c);f=Uf(a,c);U("topInvalid","invalid",a);lg(d,"onChange");break;default:f=c}hg(b,f,kg);var g=f,h;for(h in g)if(g.hasOwnProperty(h)){var k=g[h];"style"===h?fg(a,k,kg):"dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,null!=k&&bg(a,k)):"children"===h?"string"===typeof k?("textarea"!==b||""!==k)&&cg(a,k):"number"===typeof k&&cg(a,
""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(Ra.hasOwnProperty(h)?null!=k&&lg(d,h):e?Kf(a,h,k):null!=k&&If(a,h,k))}switch(b){case "input":Bc(a);Pf(a,c);break;case "textarea":Bc(a);Xf(a,c);break;case "option":null!=c.value&&a.setAttribute("value",c.value);break;case "select":a.multiple=!!c.multiple;b=c.value;null!=b?Sf(a,!!c.multiple,b,!1):null!=c.defaultValue&&Sf(a,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof f.onClick&&(a.onclick=
C)}}
function sg(a,b,c,d,e){var f=null;switch(b){case "input":c=Lf(a,c);d=Lf(a,d);f=[];break;case "option":c=Rf(a,c);d=Rf(a,d);f=[];break;case "select":c=B({},c,{value:void 0});d=B({},d,{value:void 0});f=[];break;case "textarea":c=Uf(a,c);d=Uf(a,d);f=[];break;default:"function"!==typeof c.onClick&&"function"===typeof d.onClick&&(a.onclick=C)}hg(b,d,kg);var g,h;a=null;for(g in c)if(!d.hasOwnProperty(g)&&c.hasOwnProperty(g)&&null!=c[g])if("style"===g)for(h in b=c[g],b)b.hasOwnProperty(h)&&(a||(a={}),a[h]=
"");else"dangerouslySetInnerHTML"!==g&&"children"!==g&&"suppressContentEditableWarning"!==g&&"suppressHydrationWarning"!==g&&"autoFocus"!==g&&(Ra.hasOwnProperty(g)?f||(f=[]):(f=f||[]).push(g,null));for(g in d){var k=d[g];b=null!=c?c[g]:void 0;if(d.hasOwnProperty(g)&&k!==b&&(null!=k||null!=b))if("style"===g)if(b){for(h in b)!b.hasOwnProperty(h)||k&&k.hasOwnProperty(h)||(a||(a={}),a[h]="");for(h in k)k.hasOwnProperty(h)&&b[h]!==k[h]&&(a||(a={}),a[h]=k[h])}else a||(f||(f=[]),f.push(g,a)),a=k;else"dangerouslySetInnerHTML"===
g?(k=k?k.__html:void 0,b=b?b.__html:void 0,null!=k&&b!==k&&(f=f||[]).push(g,""+k)):"children"===g?b===k||"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(g,""+k):"suppressContentEditableWarning"!==g&&"suppressHydrationWarning"!==g&&(Ra.hasOwnProperty(g)?(null!=k&&lg(e,g),f||b===k||(f=[])):(f=f||[]).push(g,k))}a&&(f=f||[]).push("style",a);return f}
function tg(a,b,c,d,e){"input"===c&&"radio"===e.type&&null!=e.name&&Nf(a,e);ig(c,d);d=ig(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?fg(a,h,kg):"dangerouslySetInnerHTML"===g?bg(a,h):"children"===g?cg(a,h):d?null!=h?Kf(a,g,h):a.removeAttribute(g):null!=h?If(a,g,h):Jf(a,g)}switch(c){case "input":Of(a,e);break;case "textarea":Wf(a,e);break;case "select":a._wrapperState.initialValue=void 0,b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?Sf(a,
!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?Sf(a,!!e.multiple,e.defaultValue,!0):Sf(a,!!e.multiple,e.multiple?[]:"",!1))}}
function ug(a,b,c,d,e){switch(b){case "iframe":case "object":U("topLoad","load",a);break;case "video":case "audio":for(var f in mg)mg.hasOwnProperty(f)&&U(f,mg[f],a);break;case "source":U("topError","error",a);break;case "img":case "image":U("topError","error",a);U("topLoad","load",a);break;case "form":U("topReset","reset",a);U("topSubmit","submit",a);break;case "details":U("topToggle","toggle",a);break;case "input":Mf(a,c);U("topInvalid","invalid",a);lg(e,"onChange");break;case "select":Tf(a,c);
U("topInvalid","invalid",a);lg(e,"onChange");break;case "textarea":Vf(a,c),U("topInvalid","invalid",a),lg(e,"onChange")}hg(b,c,kg);d=null;for(var g in c)c.hasOwnProperty(g)&&(f=c[g],"children"===g?"string"===typeof f?a.textContent!==f&&(d=["children",f]):"number"===typeof f&&a.textContent!==""+f&&(d=["children",""+f]):Ra.hasOwnProperty(g)&&null!=f&&lg(e,g));switch(b){case "input":Bc(a);Pf(a,c);break;case "textarea":Bc(a);Xf(a,c);break;case "select":case "option":break;default:"function"===typeof c.onClick&&
(a.onclick=C)}return d}function vg(a,b){return a.nodeValue!==b}
var wg=Object.freeze({createElement:ng,createTextNode:og,setInitialProperties:pg,diffProperties:sg,updateProperties:tg,diffHydratedProperties:ug,diffHydratedText:vg,warnForUnmatchedText:function(){},warnForDeletedHydratableElement:function(){},warnForDeletedHydratableText:function(){},warnForInsertedHydratedElement:function(){},warnForInsertedHydratedText:function(){},restoreControlledState:function(a,b,c){switch(b){case "input":Of(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=
c.parentNode;c=c.querySelectorAll("input[name\x3d"+JSON.stringify(""+b)+'][type\x3d"radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=rb(d);e?void 0:E("90");Cc(d);Of(d,e)}}}break;case "textarea":Wf(a,c);break;case "select":b=c.value,null!=b&&Sf(a,!!c.multiple,b,!1)}}});nc.injectFiberControlledHostComponent(wg);var xg=null,Mg=null;function Ng(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function Og(a){a=a?9===a.nodeType?a.documentElement:a.firstChild:null;return!(!a||1!==a.nodeType||!a.hasAttribute("data-reactroot"))}
var Z=of({getRootHostContext:function(a){var b=a.nodeType;switch(b){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:$f(null,"");break;default:b=8===b?a.parentNode:a,a=b.namespaceURI||null,b=b.tagName,a=$f(a,b)}return a},getChildHostContext:function(a,b){return $f(a,b)},getPublicInstance:function(a){return a},prepareForCommit:function(){xg=td;var a=da();if(Kd(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{var c=window.getSelection&&window.getSelection();
if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(z){b=null;break a}var f=0,g=-1,h=-1,k=0,q=0,v=a,y=null;b:for(;;){for(var u;;){v!==b||0!==d&&3!==v.nodeType||(g=f+d);v!==e||0!==c&&3!==v.nodeType||(h=f+c);3===v.nodeType&&(f+=v.nodeValue.length);if(null===(u=v.firstChild))break;y=v;v=u}for(;;){if(v===a)break b;y===b&&++k===d&&(g=f);y===e&&++q===c&&(h=f);if(null!==(u=v.nextSibling))break;v=y;y=v.parentNode}v=u}b=-1===g||-1===h?null:
{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;Mg={focusedElem:a,selectionRange:b};ud(!1)},resetAfterCommit:function(){var a=Mg,b=da(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&fa(document.documentElement,c)){if(Kd(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(window.getSelection){b=window.getSelection();var e=c[Eb()].length;a=Math.min(d.start,e);d=void 0===d.end?a:Math.min(d.end,e);!b.extend&&a>
d&&(e=d,d=a,a=e);e=Jd(c,a);var f=Jd(c,d);if(e&&f&&(1!==b.rangeCount||b.anchorNode!==e.node||b.anchorOffset!==e.offset||b.focusNode!==f.node||b.focusOffset!==f.offset)){var g=document.createRange();g.setStart(e.node,e.offset);b.removeAllRanges();a>d?(b.addRange(g),b.extend(f.node,f.offset)):(g.setEnd(f.node,f.offset),b.addRange(g))}}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});ia(c);for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=
a.top}Mg=null;ud(xg);xg=null},createInstance:function(a,b,c,d,e){a=ng(a,b,c,d);a[Q]=e;a[ob]=b;return a},appendInitialChild:function(a,b){a.appendChild(b)},finalizeInitialChildren:function(a,b,c,d){pg(a,b,c,d);a:{switch(b){case "button":case "input":case "select":case "textarea":a=!!c.autoFocus;break a}a=!1}return a},prepareUpdate:function(a,b,c,d,e){return sg(a,b,c,d,e)},shouldSetTextContent:function(a,b){return"textarea"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===
typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&"string"===typeof b.dangerouslySetInnerHTML.__html},shouldDeprioritizeSubtree:function(a,b){return!!b.hidden},createTextInstance:function(a,b,c,d){a=og(a,b);a[Q]=d;return a},now:rf,mutation:{commitMount:function(a){a.focus()},commitUpdate:function(a,b,c,d,e){a[ob]=e;tg(a,b,c,d,e)},resetTextContent:function(a){a.textContent=""},commitTextUpdate:function(a,b,c){a.nodeValue=c},appendChild:function(a,b){a.appendChild(b)},appendChildToContainer:function(a,
b){8===a.nodeType?a.parentNode.insertBefore(b,a):a.appendChild(b)},insertBefore:function(a,b,c){a.insertBefore(b,c)},insertInContainerBefore:function(a,b,c){8===a.nodeType?a.parentNode.insertBefore(b,c):a.insertBefore(b,c)},removeChild:function(a,b){a.removeChild(b)},removeChildFromContainer:function(a,b){8===a.nodeType?a.parentNode.removeChild(b):a.removeChild(b)}},hydration:{canHydrateInstance:function(a,b){return 1!==a.nodeType||b.toLowerCase()!==a.nodeName.toLowerCase()?null:a},canHydrateTextInstance:function(a,
b){return""===b||3!==a.nodeType?null:a},getNextHydratableSibling:function(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},getFirstHydratableChild:function(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a},hydrateInstance:function(a,b,c,d,e,f){a[Q]=f;a[ob]=c;return ug(a,b,c,e,d)},hydrateTextInstance:function(a,b,c){a[Q]=c;return vg(a,b)},didNotMatchHydratedContainerTextInstance:function(){},didNotMatchHydratedTextInstance:function(){},
didNotHydrateContainerInstance:function(){},didNotHydrateInstance:function(){},didNotFindHydratableContainerInstance:function(){},didNotFindHydratableContainerTextInstance:function(){},didNotFindHydratableInstance:function(){},didNotFindHydratableTextInstance:function(){}},scheduleDeferredCallback:sf,cancelDeferredCallback:tf,useSyncScheduling:!0});rc=Z.batchedUpdates;
function Pg(a,b,c,d,e){Ng(c)?void 0:E("200");var f=c._reactRootContainer;if(f)Z.updateContainer(b,f,a,e);else{d=d||Og(c);if(!d)for(f=void 0;f=c.lastChild;)c.removeChild(f);var g=Z.createContainer(c,d);f=c._reactRootContainer=g;Z.unbatchedUpdates(function(){Z.updateContainer(b,g,a,e)})}return Z.getPublicRootInstance(f)}function Qg(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Ng(b)?void 0:E("200");return pf(a,b,null,c)}
function Rg(a,b){this._reactRootContainer=Z.createContainer(a,b)}Rg.prototype.render=function(a,b){Z.updateContainer(a,this._reactRootContainer,null,b)};Rg.prototype.unmount=function(a){Z.updateContainer(null,this._reactRootContainer,null,a)};
var Sg={createPortal:Qg,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(b)return Z.findHostInstance(b);"function"===typeof a.render?E("188"):E("213",Object.keys(a))},hydrate:function(a,b,c){return Pg(null,a,b,!0,c)},render:function(a,b,c){return Pg(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?E("38"):void 0;return Pg(a,b,c,!1,d)},unmountComponentAtNode:function(a){Ng(a)?void 0:
E("40");return a._reactRootContainer?(Z.unbatchedUpdates(function(){Pg(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:Qg,unstable_batchedUpdates:tc,unstable_deferredUpdates:Z.deferredUpdates,flushSync:Z.flushSync,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{EventPluginHub:mb,EventPluginRegistry:Va,EventPropagators:Cb,ReactControlledComponent:qc,ReactDOMComponentTree:sb,ReactDOMEventListener:xd}};
Z.injectIntoDevTools({findFiberByHostInstance:pb,bundleType:0,version:"16.2.0",rendererPackageName:"react-dom"});var Tg=Object.freeze({default:Sg}),Ug=Tg&&Sg||Tg;module.exports=Ug["default"]?Ug["default"]:Ug;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var emptyFunction = __webpack_require__(17);

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (false) {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: emptyFunction
      };
    }
  },

  registerDefault: function registerDefault() {}
};

module.exports = EventListener;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(98);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(99);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * @param {DOMElement} node input/textarea to focus
 */

function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

module.exports = focusNode;

/***/ }),
/* 101 */,
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(17);
var invariant = __webpack_require__(103);
var ReactPropTypesSecret = __webpack_require__(104);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(113);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(111);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(25)))

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(50);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(115);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(118);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), __webpack_require__(51)(module)))

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(52);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(53);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transactions_js__ = __webpack_require__(128);



const rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  transactions: __WEBPACK_IMPORTED_MODULE_1__transactions_js__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_types__ = __webpack_require__(56);


const INITIAL_STATE = { transactions: [] };

/* harmony default export */ __webpack_exports__["a"] = ((state = INITIAL_STATE, action) => {
  // switch (action.type) {
  //   case RENDER_TRANSACTIONS: 
  //     return { ...state, videos: action.payload };
  // }
  return state;
});

/***/ }),
/* 129 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Duplicate declaration \"App\"\n\n\u001b[0m \u001b[90m  6 | \u001b[39m\n \u001b[90m  7 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  8 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mApp\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mComponent\u001b[39m {\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  9 | \u001b[39m  render() {\n \u001b[90m 10 | \u001b[39m    \u001b[36mreturn\u001b[39m (\n \u001b[90m 11 | \u001b[39m      \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _source = __webpack_require__(153);

var _error = __webpack_require__(63);

var _lexer = __webpack_require__(157);

var _kinds = __webpack_require__(159);

var _directiveLocation = __webpack_require__(160);

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */


/**
 * Configuration options to control parser behavior
 */
function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  if (!(sourceObj instanceof _source.Source)) {
    throw new TypeError('Must provide Source. Received: ' + String(sourceObj));
  }
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer);
}

/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer, false);
  expect(lexer, _lexer.TokenKind.EOF);
  return value;
}

/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */
function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expect(lexer, _lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer);
  expect(lexer, _lexer.TokenKind.EOF);
  return type;
}

/**
 * Converts a name lex token into a name parse node.
 */
function parseName(lexer) {
  var token = expect(lexer, _lexer.TokenKind.NAME);
  return {
    kind: _kinds.NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
}

// Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */
function parseDocument(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SOF);
  var definitions = [];
  do {
    definitions.push(parseDefinition(lexer));
  } while (!skip(lexer, _lexer.TokenKind.EOF));

  return {
    kind: _kinds.DOCUMENT,
    definitions: definitions,
    loc: loc(lexer, start)
  };
}

/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 */
function parseDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer);
      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'extend':
      case 'directive':
        // Note: The schema definition language is an experimental addition.
        return parseTypeSystemDefinition(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseExecutableDefinition(lexer);
  } else if (peekDescription(lexer)) {
    // Note: The schema definition language is an experimental addition.
    return parseTypeSystemDefinition(lexer);
  }

  throw unexpected(lexer);
}

/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */
function parseExecutableDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  throw unexpected(lexer);
}

// Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */
function parseOperationDefinition(lexer) {
  var start = lexer.token;
  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return {
      kind: _kinds.OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  var operation = parseOperationType(lexer);
  var name = void 0;
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    name = parseName(lexer);
  }
  return {
    kind: _kinds.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * OperationType : one of query mutation subscription
 */
function parseOperationType(lexer) {
  var operationToken = expect(lexer, _lexer.TokenKind.NAME);
  switch (operationToken.value) {
    case 'query':
      return 'query';
    case 'mutation':
      return 'mutation';
    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}

/**
 * VariableDefinitions : ( VariableDefinition+ )
 */
function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * VariableDefinition : Variable : Type DefaultValue?
 */
function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expect(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
    defaultValue: skip(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Variable : $ Name
 */
function parseVariable(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.DOLLAR);
  return {
    kind: _kinds.VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * SelectionSet : { Selection+ }
 */
function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.SELECTION_SET,
    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}

/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */
function parseSelection(lexer) {
  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
}

/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */
function parseField(lexer) {
  var start = lexer.token;

  var nameOrAlias = parseName(lexer);
  var alias = void 0;
  var name = void 0;
  if (skip(lexer, _lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: _kinds.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer, false),
    directives: parseDirectives(lexer, false),
    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : undefined,
    loc: loc(lexer, start)
  };
}

/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */
function parseArguments(lexer, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, item, _lexer.TokenKind.PAREN_R) : [];
}

/**
 * Argument[Const] : Name : Value[?Const]
 */
function parseArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, false)),
    loc: loc(lexer, start)
  };
}

function parseConstArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.ARGUMENT,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseConstValue(lexer)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */
function parseFragment(lexer) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.SPREAD);
  if (peek(lexer, _lexer.TokenKind.NAME) && lexer.token.value !== 'on') {
    return {
      kind: _kinds.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer, false),
      loc: loc(lexer, start)
    };
  }
  var typeCondition = void 0;
  if (lexer.token.value === 'on') {
    lexer.advance();
    typeCondition = parseNamedType(lexer);
  }
  return {
    kind: _kinds.INLINE_FRAGMENT,
    typeCondition: typeCondition,
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */
function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment');
  // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet
  if (lexer.options.experimentalFragmentVariables) {
    return {
      kind: _kinds.FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer),
      variableDefinitions: parseVariableDefinitions(lexer),
      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
      directives: parseDirectives(lexer, false),
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }
  return {
    kind: _kinds.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}

/**
 * FragmentName : Name but not `on`
 */
function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }
  return parseName(lexer);
}

// Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */
function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;
  switch (token.kind) {
    case _lexer.TokenKind.BRACKET_L:
      return parseList(lexer, isConst);
    case _lexer.TokenKind.BRACE_L:
      return parseObject(lexer, isConst);
    case _lexer.TokenKind.INT:
      lexer.advance();
      return {
        kind: _kinds.INT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.FLOAT:
      lexer.advance();
      return {
        kind: _kinds.FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.STRING:
    case _lexer.TokenKind.BLOCK_STRING:
      return parseStringLiteral(lexer);
    case _lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds.NULL,
          loc: loc(lexer, token)
        };
      }
      lexer.advance();
      return {
        kind: _kinds.ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };
    case _lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }
      break;
  }
  throw unexpected(lexer);
}

function parseStringLiteral(lexer) {
  var token = lexer.token;
  lexer.advance();
  return {
    kind: _kinds.STRING,
    value: token.value,
    block: token.kind === _lexer.TokenKind.BLOCK_STRING,
    loc: loc(lexer, token)
  };
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}

/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */
function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds.LIST,
    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
    loc: loc(lexer, start)
  };
}

/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */
function parseObject(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.BRACE_L);
  var fields = [];
  while (!skip(lexer, _lexer.TokenKind.BRACE_R)) {
    fields.push(parseObjectField(lexer, isConst));
  }
  return {
    kind: _kinds.OBJECT,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectField[Const] : Name : Value[?Const]
 */
function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  return {
    kind: _kinds.OBJECT_FIELD,
    name: parseName(lexer),
    value: (expect(lexer, _lexer.TokenKind.COLON), parseValueLiteral(lexer, isConst)),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */
function parseDirectives(lexer, isConst) {
  var directives = [];
  while (peek(lexer, _lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer, isConst));
  }
  return directives;
}

/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */
function parseDirective(lexer, isConst) {
  var start = lexer.token;
  expect(lexer, _lexer.TokenKind.AT);
  return {
    kind: _kinds.DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer, isConst),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
function parseTypeReference(lexer) {
  var start = lexer.token;
  var type = void 0;
  if (skip(lexer, _lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer);
    expect(lexer, _lexer.TokenKind.BRACKET_R);
    type = {
      kind: _kinds.LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }
  if (skip(lexer, _lexer.TokenKind.BANG)) {
    return {
      kind: _kinds.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }
  return type;
}

/**
 * NamedType : Name
 */
function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}

// Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - TypeExtension
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */
function parseTypeSystemDefinition(lexer) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);
      case 'scalar':
        return parseScalarTypeDefinition(lexer);
      case 'type':
        return parseObjectTypeDefinition(lexer);
      case 'interface':
        return parseInterfaceTypeDefinition(lexer);
      case 'union':
        return parseUnionTypeDefinition(lexer);
      case 'enum':
        return parseEnumTypeDefinition(lexer);
      case 'input':
        return parseInputObjectTypeDefinition(lexer);
      case 'extend':
        return parseTypeExtension(lexer);
      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

function peekDescription(lexer) {
  return peek(lexer, _lexer.TokenKind.STRING) || peek(lexer, _lexer.TokenKind.BLOCK_STRING);
}

/**
 * Description : StringValue
 */
function parseDescription(lexer) {
  if (peekDescription(lexer)) {
    return parseStringLiteral(lexer);
  }
}

/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */
function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}

/**
 * OperationTypeDefinition : OperationType : NamedType
 */
function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}

/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */
function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */
function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * ImplementsInterfaces : implements NamedType+
 */
function parseImplementsInterfaces(lexer) {
  var types = [];
  if (lexer.token.value === 'implements') {
    lexer.advance();
    do {
      types.push(parseNamedType(lexer));
    } while (peek(lexer, _lexer.TokenKind.NAME));
  }
  return types;
}

/**
 * FieldsDefinition : { FieldDefinition+ }
 */
function parseFieldsDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */
function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */
function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
    return [];
  }
  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
}

/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */
function parseInputValueDef(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  expect(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var defaultValue = void 0;
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */
function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? MemberTypesDefinition?
 */
function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseMemberTypesDefinition(lexer);
  return {
    kind: _kinds.UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * MemberTypesDefinition : = MemberTypes
 *
 * MemberTypes :
 *   - `|`? NamedType
 *   - MemberTypes | NamedType
 */
function parseMemberTypesDefinition(lexer) {
  var types = [];
  if (skip(lexer, _lexer.TokenKind.EQUALS)) {
    // Optional leading pipe
    skip(lexer, _lexer.TokenKind.PIPE);
    do {
      types.push(parseNamedType(lexer));
    } while (skip(lexer, _lexer.TokenKind.PIPE));
  }
  return types;
}

/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */
function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  return {
    kind: _kinds.ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */
function parseEnumValuesDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */
function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */
function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  return {
    kind: _kinds.INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */
function parseInputFieldsDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R) : [];
}

/**
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */
function parseTypeExtension(lexer) {
  var keywordToken = lexer.lookahead();

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'scalar':
        return parseScalarTypeExtension(lexer);
      case 'type':
        return parseObjectTypeExtension(lexer);
      case 'interface':
        return parseInterfaceTypeExtension(lexer);
      case 'union':
        return parseUnionTypeExtension(lexer);
      case 'enum':
        return parseEnumTypeExtension(lexer);
      case 'input':
        return parseInputObjectTypeExtension(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */
function parseScalarTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  if (directives.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}

/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */
function parseObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */
function parseInterfaceTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? MemberTypesDefinition
 *   - extend union Name Directives[Const]
 */
function parseUnionTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseMemberTypesDefinition(lexer);
  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}

/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */
function parseEnumTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}

/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */
function parseInputObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }
  return {
    kind: _kinds.INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */
function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'directive');
  expect(lexer, _lexer.TokenKind.AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds.DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}

/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */
function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  skip(lexer, _lexer.TokenKind.PIPE);
  var locations = [];
  do {
    locations.push(parseDirectiveLocation(lexer));
  } while (skip(lexer, _lexer.TokenKind.PIPE));
  return locations;
}

/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */
function parseDirectiveLocation(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  if (_directiveLocation.DirectiveLocation.hasOwnProperty(name.value)) {
    return name;
  }
  throw unexpected(lexer, start);
}

// Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */
function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
}

// Print a simplified form when appearing in JSON/util.inspect.
Loc.prototype.toJSON = Loc.prototype.inspect = function toJSON() {
  return { start: this.start, end: this.end };
};

/**
 * Determines if the next token is of a given kind
 */
function peek(lexer, kind) {
  return lexer.token.kind === kind;
}

/**
 * If the next token is of the given kind, return true after advancing
 * the lexer. Otherwise, do not change the parser state and return false.
 */
function skip(lexer, kind) {
  var match = lexer.token.kind === kind;
  if (match) {
    lexer.advance();
  }
  return match;
}

/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */
function expect(lexer, kind) {
  var token = lexer.token;
  if (token.kind === kind) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected ' + kind + ', found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * If the next token is a keyword with the given value, return that token after
 * advancing the lexer. Otherwise, do not change the parser state and return
 * false.
 */
function expectKeyword(lexer, value) {
  var token = lexer.token;
  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }
  throw (0, _error.syntaxError)(lexer.source, token.start, 'Expected "' + value + '", found ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */
function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return (0, _error.syntaxError)(lexer.source, token.start, 'Unexpected ' + (0, _lexer.getTokenDesc)(token));
}

/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function any(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */
function many(lexer, openKind, parseFn, closeKind) {
  expect(lexer, openKind);
  var nodes = [parseFn(lexer)];
  while (!skip(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }
  return nodes;
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = undefined;

var _invariant = __webpack_require__(62);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * 
                                                                                                                                                           */

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = exports.Source = function Source(body, name, locationOffset) {
  _classCallCheck(this, Source);

  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || { line: 1, column: 1 };
  !(this.locationOffset.line > 0) ? (0, _invariant2.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? (0, _invariant2.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _GraphQLError = __webpack_require__(30);

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError('Syntax Error: ' + description, undefined, source, [position]);
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;

var _GraphQLError = __webpack_require__(30);

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   */

exports.formatError = formatError;

var _invariant = __webpack_require__(62);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? (0, _invariant2.default)(0, 'Received null or undefined error.') : void 0;
  return _extends({}, error.extensions, {
    message: error.message || 'An unknown error occurred.',
    locations: error.locations,
    path: error.path
  });
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenKind = undefined;
exports.createLexer = createLexer;
exports.getTokenDesc = getTokenDesc;

var _error = __webpack_require__(63);

var _blockStringValue = __webpack_require__(158);

var _blockStringValue2 = _interopRequireDefault(_blockStringValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function createLexer(source, options) {
  var startOfFileToken = new Tok(SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;
  if (token.kind !== EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === COMMENT);
  }
  return token;
}

/**
 * The return type of createLexer.
 */


// Each kind of token.
var SOF = '<SOF>';
var EOF = '<EOF>';
var BANG = '!';
var DOLLAR = '$';
var PAREN_L = '(';
var PAREN_R = ')';
var SPREAD = '...';
var COLON = ':';
var EQUALS = '=';
var AT = '@';
var BRACKET_L = '[';
var BRACKET_R = ']';
var BRACE_L = '{';
var PIPE = '|';
var BRACE_R = '}';
var NAME = 'Name';
var INT = 'Int';
var FLOAT = 'Float';
var STRING = 'String';
var BLOCK_STRING = 'BlockString';
var COMMENT = 'Comment';

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = exports.TokenKind = {
  SOF: SOF,
  EOF: EOF,
  BANG: BANG,
  DOLLAR: DOLLAR,
  PAREN_L: PAREN_L,
  PAREN_R: PAREN_R,
  SPREAD: SPREAD,
  COLON: COLON,
  EQUALS: EQUALS,
  AT: AT,
  BRACKET_L: BRACKET_L,
  BRACKET_R: BRACKET_R,
  BRACE_L: BRACE_L,
  PIPE: PIPE,
  BRACE_R: BRACE_R,
  NAME: NAME,
  INT: INT,
  FLOAT: FLOAT,
  STRING: STRING,
  BLOCK_STRING: BLOCK_STRING,
  COMMENT: COMMENT
};

/**
 * A helper function to describe a token as a string for debugging
 */
function getTokenDesc(token) {
  var value = token.value;
  return value ? token.kind + ' "' + value + '"' : token.kind;
}

var charCodeAt = String.prototype.charCodeAt;
var slice = String.prototype.slice;

/**
 * Helper function for constructing the Token object.
 */
function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
}

// Print a simplified form when appearing in JSON/util.inspect.
Tok.prototype.toJSON = Tok.prototype.inspect = function toJSON() {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
};

function printCharCode(code) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    '"\\u' + ('00' + code.toString(16).toUpperCase()).slice(-4) + '"'
  );
}

/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace and comments until it finds the next lexable
 * token, then lexes punctuators immediately or calls the appropriate helper
 * function for more complicated tokens.
 */
function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;

  var position = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + position - lexer.lineStart;

  if (position >= bodyLength) {
    return new Tok(EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = charCodeAt.call(body, position);

  // SourceCharacter
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    throw (0, _error.syntaxError)(source, position, 'Cannot contain the invalid character ' + printCharCode(code) + '.');
  }

  switch (code) {
    // !
    case 33:
      return new Tok(BANG, position, position + 1, line, col, prev);
    // #
    case 35:
      return readComment(source, position, line, col, prev);
    // $
    case 36:
      return new Tok(DOLLAR, position, position + 1, line, col, prev);
    // (
    case 40:
      return new Tok(PAREN_L, position, position + 1, line, col, prev);
    // )
    case 41:
      return new Tok(PAREN_R, position, position + 1, line, col, prev);
    // .
    case 46:
      if (charCodeAt.call(body, position + 1) === 46 && charCodeAt.call(body, position + 2) === 46) {
        return new Tok(SPREAD, position, position + 3, line, col, prev);
      }
      break;
    // :
    case 58:
      return new Tok(COLON, position, position + 1, line, col, prev);
    // =
    case 61:
      return new Tok(EQUALS, position, position + 1, line, col, prev);
    // @
    case 64:
      return new Tok(AT, position, position + 1, line, col, prev);
    // [
    case 91:
      return new Tok(BRACKET_L, position, position + 1, line, col, prev);
    // ]
    case 93:
      return new Tok(BRACKET_R, position, position + 1, line, col, prev);
    // {
    case 123:
      return new Tok(BRACE_L, position, position + 1, line, col, prev);
    // |
    case 124:
      return new Tok(PIPE, position, position + 1, line, col, prev);
    // }
    case 125:
      return new Tok(BRACE_R, position, position + 1, line, col, prev);
    // A-Z _ a-z
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, position, line, col, prev);
    // - 0-9
    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, position, code, line, col, prev);
    // "
    case 34:
      if (charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
        return readBlockString(source, position, line, col, prev);
      }
      return readString(source, position, line, col, prev);
  }

  throw (0, _error.syntaxError)(source, position, unexpectedCharacterMessage(code));
}

/**
 * Report a message that an unexpected character was encountered.
 */
function unexpectedCharacterMessage(code) {
  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return 'Cannot parse the unexpected character ' + printCharCode(code) + '.';
}

/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * or commented character, then returns the position of that character for
 * lexing.
 */
function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;
  while (position < bodyLength) {
    var code = charCodeAt.call(body, position);
    // tab | space | comma | BOM
    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (charCodeAt.call(body, position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }
  return position;
}

/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */
function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code = void 0;
  var position = start;

  do {
    code = charCodeAt.call(body, ++position);
  } while (code !== null && (
  // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(COMMENT, start, position, line, col, prev, slice.call(body, start + 1, position));
}

/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */
function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = charCodeAt.call(body, ++position);
  }

  if (code === 48) {
    // 0
    code = charCodeAt.call(body, ++position);
    if (code >= 48 && code <= 57) {
      throw (0, _error.syntaxError)(source, position, 'Invalid number, unexpected digit after 0: ' + printCharCode(code) + '.');
    }
  } else {
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 46) {
    // .
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    position = readDigits(source, position, code);
    code = charCodeAt.call(body, position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;

    code = charCodeAt.call(body, ++position);
    if (code === 43 || code === 45) {
      // + -
      code = charCodeAt.call(body, ++position);
    }
    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? FLOAT : INT, start, position, line, col, prev, slice.call(body, start, position));
}

/**
 * Returns the new position in the source after reading digits.
 */
function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;
  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = charCodeAt.call(body, ++position);
    } while (code >= 48 && code <= 57); // 0 - 9
    return position;
  }
  throw (0, _error.syntaxError)(source, position, 'Invalid number, expected digit but got: ' + printCharCode(code) + '.');
}

/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */
function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null &&
  // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += slice.call(body, chunkStart, position);
      return new Tok(STRING, start, position + 1, line, col, prev, value);
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    ++position;
    if (code === 92) {
      // \
      value += slice.call(body, chunkStart, position - 1);
      code = charCodeAt.call(body, position);
      switch (code) {
        case 34:
          value += '"';
          break;
        case 47:
          value += '/';
          break;
        case 92:
          value += '\\';
          break;
        case 98:
          value += '\b';
          break;
        case 102:
          value += '\f';
          break;
        case 110:
          value += '\n';
          break;
        case 114:
          value += '\r';
          break;
        case 116:
          value += '\t';
          break;
        case 117:
          // u
          var charCode = uniCharCode(charCodeAt.call(body, position + 1), charCodeAt.call(body, position + 2), charCodeAt.call(body, position + 3), charCodeAt.call(body, position + 4));
          if (charCode < 0) {
            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + ('\\u' + body.slice(position + 1, position + 5) + '.'));
          }
          value += String.fromCharCode(charCode);
          position += 4;
          break;
        default:
          throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: \\' + String.fromCharCode(code) + '.');
      }
      ++position;
      chunkStart = position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}

/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */
function readBlockString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && (code = charCodeAt.call(body, position)) !== null) {
    // Closing Triple-Quote (""")
    if (code === 34 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34) {
      rawValue += slice.call(body, chunkStart, position);
      return new Tok(BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockStringValue2.default)(rawValue));
    }

    // SourceCharacter
    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0, _error.syntaxError)(source, position, 'Invalid character within String: ' + printCharCode(code) + '.');
    }

    // Escape Triple-Quote (\""")
    if (code === 92 && charCodeAt.call(body, position + 1) === 34 && charCodeAt.call(body, position + 2) === 34 && charCodeAt.call(body, position + 3) === 34) {
      rawValue += slice.call(body, chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}

/**
 * Converts four hexidecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */
function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}

/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */
function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}

/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */
function readName(source, position, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var end = position + 1;
  var code = 0;
  while (end !== bodyLength && (code = charCodeAt.call(body, end)) !== null && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++end;
  }
  return new Tok(NAME, position, end, line, col, prev, slice.call(body, position, end));
}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockStringValue;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * Coffeescript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function blockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g);

  // Remove common indentation from all lines but first.
  var commonIndent = null;
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);
    if (indent < line.length && (commonIndent === null || indent < commonIndent)) {
      commonIndent = indent;
      if (commonIndent === 0) {
        break;
      }
    }
  }

  if (commonIndent) {
    for (var _i = 1; _i < lines.length; _i++) {
      lines[_i] = lines[_i].slice(commonIndent);
    }
  }

  // Remove leading and trailing blank lines.
  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }
  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  }

  // Return a string of the lines joined with U+000A.
  return lines.join('\n');
}

function leadingWhitespace(str) {
  var i = 0;
  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }
  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Name

var NAME = exports.NAME = 'Name';

// Document

var DOCUMENT = exports.DOCUMENT = 'Document';
var OPERATION_DEFINITION = exports.OPERATION_DEFINITION = 'OperationDefinition';
var VARIABLE_DEFINITION = exports.VARIABLE_DEFINITION = 'VariableDefinition';
var VARIABLE = exports.VARIABLE = 'Variable';
var SELECTION_SET = exports.SELECTION_SET = 'SelectionSet';
var FIELD = exports.FIELD = 'Field';
var ARGUMENT = exports.ARGUMENT = 'Argument';

// Fragments

var FRAGMENT_SPREAD = exports.FRAGMENT_SPREAD = 'FragmentSpread';
var INLINE_FRAGMENT = exports.INLINE_FRAGMENT = 'InlineFragment';
var FRAGMENT_DEFINITION = exports.FRAGMENT_DEFINITION = 'FragmentDefinition';

// Values

var INT = exports.INT = 'IntValue';
var FLOAT = exports.FLOAT = 'FloatValue';
var STRING = exports.STRING = 'StringValue';
var BOOLEAN = exports.BOOLEAN = 'BooleanValue';
var NULL = exports.NULL = 'NullValue';
var ENUM = exports.ENUM = 'EnumValue';
var LIST = exports.LIST = 'ListValue';
var OBJECT = exports.OBJECT = 'ObjectValue';
var OBJECT_FIELD = exports.OBJECT_FIELD = 'ObjectField';

// Directives

var DIRECTIVE = exports.DIRECTIVE = 'Directive';

// Types

var NAMED_TYPE = exports.NAMED_TYPE = 'NamedType';
var LIST_TYPE = exports.LIST_TYPE = 'ListType';
var NON_NULL_TYPE = exports.NON_NULL_TYPE = 'NonNullType';

// Type System Definitions

var SCHEMA_DEFINITION = exports.SCHEMA_DEFINITION = 'SchemaDefinition';
var OPERATION_TYPE_DEFINITION = exports.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition';

// Type Definitions

var SCALAR_TYPE_DEFINITION = exports.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition';
var OBJECT_TYPE_DEFINITION = exports.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition';
var FIELD_DEFINITION = exports.FIELD_DEFINITION = 'FieldDefinition';
var INPUT_VALUE_DEFINITION = exports.INPUT_VALUE_DEFINITION = 'InputValueDefinition';
var INTERFACE_TYPE_DEFINITION = exports.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition';
var UNION_TYPE_DEFINITION = exports.UNION_TYPE_DEFINITION = 'UnionTypeDefinition';
var ENUM_TYPE_DEFINITION = exports.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition';
var ENUM_VALUE_DEFINITION = exports.ENUM_VALUE_DEFINITION = 'EnumValueDefinition';
var INPUT_OBJECT_TYPE_DEFINITION = exports.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition';

// Type Extensions

var SCALAR_TYPE_EXTENSION = exports.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension';
var OBJECT_TYPE_EXTENSION = exports.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension';
var INTERFACE_TYPE_EXTENSION = exports.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension';
var UNION_TYPE_EXTENSION = exports.UNION_TYPE_EXTENSION = 'UnionTypeExtension';
var ENUM_TYPE_EXTENSION = exports.ENUM_TYPE_EXTENSION = 'EnumTypeExtension';
var INPUT_OBJECT_TYPE_EXTENSION = exports.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension';

// Directive Definitions

var DIRECTIVE_DEFINITION = exports.DIRECTIVE_DEFINITION = 'DirectiveDefinition';

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = exports.DirectiveLocation = {
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
};

/**
 * The enum type representing the directive location values.
 */

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transport_networkInterface__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transport_batchedNetworkInterface__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_ObservableQuery__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_readFromStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_writeToStore__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__queries_networkStatus__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__queries_queryTransform__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__errors_ApolloError__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ApolloClient__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_storeUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_fragmentMatcher__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createNetworkInterface", function() { return __WEBPACK_IMPORTED_MODULE_0__transport_networkInterface__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createBatchingNetworkInterface", function() { return __WEBPACK_IMPORTED_MODULE_1__transport_batchedNetworkInterface__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createApolloStore", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createApolloReducer", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "readQueryFromStore", function() { return __WEBPACK_IMPORTED_MODULE_5__data_readFromStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "writeQueryToStore", function() { return __WEBPACK_IMPORTED_MODULE_6__data_writeToStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return __WEBPACK_IMPORTED_MODULE_9__queries_queryTransform__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return __WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return __WEBPACK_IMPORTED_MODULE_8__queries_networkStatus__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return __WEBPACK_IMPORTED_MODULE_10__errors_ApolloError__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return __WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return __WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return __WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return __WEBPACK_IMPORTED_MODULE_12__data_storeUtils__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IntrospectionFragmentMatcher", function() { return __WEBPACK_IMPORTED_MODULE_13__data_fragmentMatcher__["b"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__, "print")) __webpack_require__.d(__webpack_exports__, "printAST", function() { return __WEBPACK_IMPORTED_MODULE_2_graphql_language_printer__["print"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPFetchNetworkInterface", function() { return __WEBPACK_IMPORTED_MODULE_0__transport_networkInterface__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPBatchedNetworkInterface", function() { return __WEBPACK_IMPORTED_MODULE_1__transport_batchedNetworkInterface__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return __WEBPACK_IMPORTED_MODULE_4__core_ObservableQuery__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return __WEBPACK_IMPORTED_MODULE_11__ApolloClient__["a"]; });















/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_11__ApolloClient__["a" /* default */]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;
/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['name', 'directives'],
  ObjectTypeDefinition: ['name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['name', 'directives', 'fields'],
  UnionTypeDefinition: ['name', 'directives', 'types'],
  EnumTypeDefinition: ['name', 'directives', 'values'],
  EnumValueDefinition: ['name', 'directives'],
  InputObjectTypeDefinition: ['name', 'directives', 'fields'],

  TypeExtensionDefinition: ['definition'],

  DirectiveDefinition: ['name', 'arguments', 'locations']
};

var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor, keyMap) {
  var visitorKeys = keyMap || QueryDocumentKeys;

  var stack = void 0;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var parent = void 0;
  var path = [];
  var ancestors = [];
  var newRoot = root;

  do {
    index++;
    var isLeaving = index === keys.length;
    var key = void 0;
    var node = void 0;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path.pop();
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (!isLeaving) {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return maybeNode && typeof maybeNode.kind === 'string';
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneDeep;
function cloneDeep(value) {
    if (Array.isArray(value)) {
        return value.map(function (item) { return cloneDeep(item); });
    }
    if (value !== null && typeof value === 'object') {
        var nextValue = {};
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                nextValue[key] = cloneDeep(value[key]);
            }
        }
        return nextValue;
    }
    return value;
}
//# sourceMappingURL=cloneDeep.js.map

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTPBatchedNetworkInterface; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createBatchingNetworkInterface;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networkInterface__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_queryTransform__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__batching__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_assign__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var HTTPBatchedNetworkInterface = (function (_super) {
    __extends(HTTPBatchedNetworkInterface, _super);
    function HTTPBatchedNetworkInterface(_a) {
        var uri = _a.uri, _b = _a.batchInterval, batchInterval = _b === void 0 ? 10 : _b, _c = _a.batchMax, batchMax = _c === void 0 ? 0 : _c, fetchOpts = _a.fetchOpts;
        var _this = _super.call(this, uri, fetchOpts) || this;
        if (typeof batchInterval !== 'number') {
            throw new Error("batchInterval must be a number, got " + batchInterval);
        }
        if (typeof batchMax !== 'number') {
            throw new Error("batchMax must be a number, got " + batchMax);
        }
        _this.batcher = new __WEBPACK_IMPORTED_MODULE_3__batching__["a" /* QueryBatcher */]({
            batchInterval: batchInterval,
            batchMax: batchMax,
            batchFetchFunction: _this.batchQuery.bind(_this),
        });
        return _this;
    }
    HTTPBatchedNetworkInterface.prototype.query = function (request) {
        return this.batcher.enqueueRequest(request);
    };
    HTTPBatchedNetworkInterface.prototype.batchQuery = function (requests) {
        var _this = this;
        var options = __assign({}, this._opts);
        var middlewarePromise = this.applyBatchMiddlewares({
            requests: requests,
            options: options,
        });
        return new Promise(function (resolve, reject) {
            middlewarePromise
                .then(function (batchRequestAndOptions) {
                batchRequestAndOptions.requests.forEach(function (r) {
                    if (r.query)
                        r.query = Object(__WEBPACK_IMPORTED_MODULE_2__queries_queryTransform__["b" /* removeConnectionDirectiveFromDocument */])(r.query);
                });
                return _this.batchedFetchFromRemoteEndpoint(batchRequestAndOptions)
                    .then(function (result) {
                    var httpResponse = result;
                    if (!httpResponse.ok) {
                        return _this.applyBatchAfterwares({
                            responses: [httpResponse],
                            options: batchRequestAndOptions.options,
                        }).then(function () {
                            var httpError = new Error("Network request failed with status " + httpResponse.status + " - \"" + httpResponse.statusText + "\"");
                            httpError.response = httpResponse;
                            throw httpError;
                        });
                    }
                    return result.json();
                })
                    .then(function (responses) {
                    if (typeof responses.map !== 'function') {
                        throw new Error('BatchingNetworkInterface: server response is not an array');
                    }
                    _this.applyBatchAfterwares({
                        responses: responses,
                        options: batchRequestAndOptions.options,
                    })
                        .then(function (responseAndOptions) {
                        resolve(responseAndOptions.responses);
                    })
                        .catch(function (error) {
                        reject(error);
                    });
                });
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    HTTPBatchedNetworkInterface.prototype.applyBatchMiddlewares = function (_a) {
        var _this = this;
        var requests = _a.requests, options = _a.options;
        return new Promise(function (resolve, reject) {
            var queue = function (funcs, scope) {
                var next = function () {
                    if (funcs.length > 0) {
                        var f = funcs.shift();
                        if (f) {
                            f.applyBatchMiddleware.apply(scope, [
                                { requests: requests, options: options },
                                next,
                            ]);
                        }
                    }
                    else {
                        resolve({
                            requests: requests,
                            options: options,
                        });
                    }
                };
                next();
            };
            queue(_this._middlewares.slice(), _this);
        });
    };
    HTTPBatchedNetworkInterface.prototype.applyBatchAfterwares = function (_a) {
        var _this = this;
        var responses = _a.responses, options = _a.options;
        return new Promise(function (resolve, reject) {
            var responseObject = { responses: responses, options: options };
            var queue = function (funcs, scope) {
                var next = function () {
                    if (funcs.length > 0) {
                        var f = funcs.shift();
                        if (f) {
                            f.applyBatchAfterware.apply(scope, [responseObject, next]);
                        }
                    }
                    else {
                        resolve(responseObject);
                    }
                };
                next();
            };
            queue(_this._afterwares.slice(), _this);
        });
    };
    HTTPBatchedNetworkInterface.prototype.use = function (middlewares) {
        var _this = this;
        middlewares.map(function (middleware) {
            if (typeof middleware.applyBatchMiddleware === 'function') {
                _this._middlewares.push(middleware);
            }
            else {
                throw new Error('Batch middleware must implement the applyBatchMiddleware function');
            }
        });
        return this;
    };
    HTTPBatchedNetworkInterface.prototype.useAfter = function (afterwares) {
        var _this = this;
        afterwares.map(function (afterware) {
            if (typeof afterware.applyBatchAfterware === 'function') {
                _this._afterwares.push(afterware);
            }
            else {
                throw new Error('Batch afterware must implement the applyBatchAfterware function');
            }
        });
        return this;
    };
    HTTPBatchedNetworkInterface.prototype.batchedFetchFromRemoteEndpoint = function (batchRequestAndOptions) {
        var options = {};
        Object(__WEBPACK_IMPORTED_MODULE_4__util_assign__["a" /* assign */])(options, batchRequestAndOptions.options);
        var printedRequests = batchRequestAndOptions.requests.map(function (request) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__networkInterface__["d" /* printRequest */])(request);
        });
        return fetch(this._uri, __assign({}, this._opts, { body: JSON.stringify(printedRequests), method: 'POST' }, options, { headers: __assign({ Accept: '*/*', 'Content-Type': 'application/json' }, options.headers) }));
    };
    return HTTPBatchedNetworkInterface;
}(__WEBPACK_IMPORTED_MODULE_1__networkInterface__["a" /* BaseNetworkInterface */]));

function createBatchingNetworkInterface(options) {
    if (!options) {
        throw new Error('You must pass an options argument to createNetworkInterface.');
    }
    return new HTTPBatchedNetworkInterface({
        uri: options.uri,
        batchInterval: options.batchInterval,
        batchMax: options.batchMax,
        fetchOpts: options.opts || {},
    });
}
//# sourceMappingURL=batchedNetworkInterface.js.map

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryBatcher; });
var QueryBatcher = (function () {
    function QueryBatcher(_a) {
        var batchInterval = _a.batchInterval, _b = _a.batchMax, batchMax = _b === void 0 ? 0 : _b, batchFetchFunction = _a.batchFetchFunction;
        this.queuedRequests = [];
        this.queuedRequests = [];
        this.batchInterval = batchInterval;
        this.batchMax = batchMax;
        this.batchFetchFunction = batchFetchFunction;
    }
    QueryBatcher.prototype.enqueueRequest = function (request) {
        var fetchRequest = {
            request: request,
        };
        this.queuedRequests.push(fetchRequest);
        fetchRequest.promise = new Promise(function (resolve, reject) {
            fetchRequest.resolve = resolve;
            fetchRequest.reject = reject;
        });
        if (this.queuedRequests.length === 1) {
            this.scheduleQueueConsumption();
        }
        if (this.queuedRequests.length === this.batchMax) {
            this.consumeQueue();
        }
        return fetchRequest.promise;
    };
    QueryBatcher.prototype.consumeQueue = function () {
        var requests = this.queuedRequests.map(function (queuedRequest) { return queuedRequest.request; });
        var promises = [];
        var resolvers = [];
        var rejecters = [];
        this.queuedRequests.forEach(function (fetchRequest, index) {
            promises.push(fetchRequest.promise);
            resolvers.push(fetchRequest.resolve);
            rejecters.push(fetchRequest.reject);
        });
        this.queuedRequests = [];
        var batchedPromise = this.batchFetchFunction(requests);
        batchedPromise
            .then(function (results) {
            results.forEach(function (result, index) {
                resolvers[index](result);
            });
        })
            .catch(function (error) {
            rejecters.forEach(function (rejecter, index) {
                rejecters[index](error);
            });
        });
        return promises;
    };
    QueryBatcher.prototype.scheduleQueueConsumption = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.queuedRequests.length) {
                _this.consumeQueue();
            }
        }, this.batchInterval);
    };
    return QueryBatcher;
}());

//# sourceMappingURL=batching.js.map

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shouldInclude;
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    if (!selection.directives) {
        return true;
    }
    var res = true;
    selection.directives.forEach(function (directive) {
        if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
            return;
        }
        var directiveArguments = directive.arguments || [];
        var directiveName = directive.name.value;
        if (directiveArguments.length !== 1) {
            throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
        }
        var ifArgument = directiveArguments[0];
        if (!ifArgument.name || ifArgument.name.value !== 'if') {
            throw new Error("Invalid argument for the @" + directiveName + " directive.");
        }
        var ifValue = directiveArguments[0].value;
        var evaledValue = false;
        if (!ifValue || ifValue.kind !== 'BooleanValue') {
            if (ifValue.kind !== 'Variable') {
                throw new Error("Argument for the @" + directiveName + " directive must be a variable or a bool ean value.");
            }
            else {
                evaledValue = variables[ifValue.name.value];
                if (evaledValue === undefined) {
                    throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                }
            }
        }
        else {
            evaledValue = ifValue.value;
        }
        if (directiveName === 'skip') {
            evaledValue = !evaledValue;
        }
        if (!evaledValue) {
            res = false;
        }
    });
    return res;
}
//# sourceMappingURL=directives.js.map

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utilities_1 = __webpack_require__(168);
exports.filter = utilities_1.filter;
exports.check = utilities_1.check;
exports.propType = utilities_1.propType;
var graphql_1 = __webpack_require__(71);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = graphql_1.graphql;
//# sourceMappingURL=index.js.map

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var graphql_1 = __webpack_require__(71);
function filter(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        return root[info.resultKey];
    };
    return graphql_1.graphql(resolver, doc, data);
}
exports.filter = filter;
function check(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        if (!{}.hasOwnProperty.call(root, info.resultKey)) {
            throw new Error(info.resultKey + " missing on " + root);
        }
        return root[info.resultKey];
    };
    graphql_1.graphql(resolver, doc, data, {}, {}, {
        fragmentMatcher: function () { return false; },
    });
}
exports.check = check;
var ANONYMOUS = '<<anonymous>>';
function PropTypeError(message) {
    this.message = message;
    this.stack = '';
}
PropTypeError.prototype = Error.prototype;
var reactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context',
};
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (props[propName] == null) {
            var locationName = reactPropTypeLocationNames[location];
            if (isRequired) {
                if (props[propName] === null) {
                    return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required " +
                        ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required in " +
                    ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
        }
        else {
            return validate(props, propName, componentName, location, propFullName);
        }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function propType(doc) {
    return createChainableTypeChecker(function (props, propName) {
        var prop = props[propName];
        try {
            check(doc, prop);
            return null;
        }
        catch (e) {
            return e;
        }
    });
}
exports.propType = propType;
//# sourceMappingURL=utilities.js.map

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function checkDocument(doc) {
    if (doc.kind !== 'Document') {
        throw new Error("Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
    }
    var numOpDefinitions = doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition';
    }).length;
    if (numOpDefinitions > 1) {
        throw new Error('Queries must have exactly one operation definition.');
    }
}
function getFragmentDefinitions(doc) {
    var fragmentDefinitions = doc.definitions.filter(function (definition) {
        if (definition.kind === 'FragmentDefinition') {
            return true;
        }
        else {
            return false;
        }
    });
    return fragmentDefinitions;
}
exports.getFragmentDefinitions = getFragmentDefinitions;
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
exports.createFragmentMap = createFragmentMap;
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' || operation === 'mutation' || operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw new Error('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}
exports.getMainDefinition = getMainDefinition;
//# sourceMappingURL=getFromAST.js.map

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var storeUtils_1 = __webpack_require__(72);
function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = storeUtils_1.argumentsObjectFromField(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
exports.getDirectiveInfoFromField = getDirectiveInfoFromField;
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    if (!selection.directives) {
        return true;
    }
    var res = true;
    selection.directives.some(function (directive) {
        if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
            return;
        }
        var directiveArguments = directive.arguments;
        var directiveName = directive.name.value;
        if (directiveArguments.length !== 1) {
            throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
        }
        var ifArgument = directive.arguments[0];
        if (!ifArgument.name || ifArgument.name.value !== 'if') {
            throw new Error("Invalid argument for the @" + directiveName + " directive.");
        }
        var ifValue = directive.arguments[0].value;
        var evaledValue = false;
        if (!ifValue || ifValue.kind !== 'BooleanValue') {
            if (ifValue.kind !== 'Variable') {
                throw new Error("Argument for the @" + directiveName + " directive must be a variable or a bool ean value.");
            }
            else {
                evaledValue = variables[ifValue.name.value];
                if (evaledValue === undefined) {
                    throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                }
            }
        }
        else {
            evaledValue = ifValue.value;
        }
        if (directiveName === 'skip') {
            evaledValue = !evaledValue;
        }
        if (!evaledValue) {
            res = false;
            return true;
        }
        return false;
    });
    return res;
}
exports.shouldInclude = shouldInclude;
//# sourceMappingURL=directives.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = replaceQueryResults;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__writeToStore__ = __webpack_require__(11);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function replaceQueryResults(state, _a, config) {
    var variables = _a.variables, document = _a.document, newResult = _a.newResult;
    var clonedState = __assign({}, state);
    return Object(__WEBPACK_IMPORTED_MODULE_0__writeToStore__["b" /* writeResultToStore */])({
        result: newResult,
        dataId: 'ROOT_QUERY',
        variables: variables,
        document: document,
        store: clonedState,
        dataIdFromObject: config.dataIdFromObject,
        fragmentMatcherFunction: config.fragmentMatcher,
    });
}
//# sourceMappingURL=replaceQueryResults.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transport_networkInterface__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_core__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_fragmentMatcher__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_QueryManager__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_environment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_storeUtils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_proxy__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__version__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__version___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__version__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};









var DEFAULT_REDUX_ROOT_KEY = 'apollo';
function defaultReduxRootSelector(state) {
    return state[DEFAULT_REDUX_ROOT_KEY];
}
function defaultDataIdFromObject(result) {
    if (result.__typename) {
        if (result.id !== undefined) {
            return result.__typename + ":" + result.id;
        }
        if (result._id !== undefined) {
            return result.__typename + ":" + result._id;
        }
    }
    return null;
}
var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.middleware = function () {
            return function (store) {
                _this.setStore(store);
                return function (next) { return function (action) {
                    var previousApolloState = _this.queryManager.selectApolloState(store);
                    var returnValue = next(action);
                    var newApolloState = _this.queryManager.selectApolloState(store);
                    if (newApolloState !== previousApolloState) {
                        _this.queryManager.broadcastNewStore(store.getState());
                    }
                    if (_this.devToolsHookCb) {
                        _this.devToolsHookCb({
                            action: action,
                            state: {
                                queries: _this.queryManager.queryStore.getStore(),
                                mutations: _this.queryManager.mutationStore.getStore(),
                            },
                            dataWithOptimisticResults: _this.queryManager.getDataWithOptimisticResults(),
                        });
                    }
                    return returnValue;
                }; };
            };
        };
        var dataIdFromObject = options.dataIdFromObject;
        var networkInterface = options.networkInterface, reduxRootSelector = options.reduxRootSelector, initialState = options.initialState, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.addTypename, addTypename = _c === void 0 ? true : _c, customResolvers = options.customResolvers, connectToDevTools = options.connectToDevTools, fragmentMatcher = options.fragmentMatcher, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d;
        if (typeof reduxRootSelector === 'function') {
            this.reduxRootSelector = reduxRootSelector;
        }
        else if (typeof reduxRootSelector !== 'undefined') {
            throw new Error('"reduxRootSelector" must be a function.');
        }
        if (typeof fragmentMatcher === 'undefined') {
            this.fragmentMatcher = new __WEBPACK_IMPORTED_MODULE_2__data_fragmentMatcher__["a" /* HeuristicFragmentMatcher */]();
        }
        else {
            this.fragmentMatcher = fragmentMatcher;
        }
        var createQuery = function (getResult) {
            return function (request) {
                return new Promise(function (resolve, reject) {
                    var resolved = false;
                    var subscription = getResult(request).subscribe({
                        next: function (data) {
                            if (!resolved) {
                                resolve(data);
                                resolved = true;
                            }
                            else {
                                console.warn('Apollo Client does not support multiple results from an Observable');
                            }
                        },
                        error: reject,
                        complete: function () { return subscription.unsubscribe(); },
                    });
                });
            };
        };
        if (networkInterface instanceof __WEBPACK_IMPORTED_MODULE_1_apollo_link_core__["ApolloLink"]) {
            var count_1 = 0;
            this.networkInterface = {
                query: createQuery(function (request) {
                    return Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_core__["execute"])(networkInterface, request);
                }),
                subscribe: function (request, handler) {
                    if (!_this.subscriptionMap) {
                        _this.subscriptionMap = new Map();
                    }
                    var subscription = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_core__["execute"])(networkInterface, request).subscribe({
                        next: function (data) { return handler(undefined, data); },
                        error: function (error) { return handler([error]); },
                        complete: handler,
                    });
                    var id = count_1.toString();
                    _this.subscriptionMap.set(id, subscription);
                    count_1++;
                    return id;
                },
                unsubscribe: function (id) {
                    if (_this.subscriptionMap) {
                        var subscription = _this.subscriptionMap.get(id);
                        if (subscription) {
                            subscription.unsubscribe();
                        }
                    }
                },
            };
        }
        else {
            this.networkInterface = networkInterface
                ? networkInterface
                : Object(__WEBPACK_IMPORTED_MODULE_0__transport_networkInterface__["c" /* createNetworkInterface */])({ uri: '/graphql' });
        }
        this.initialState = initialState ? initialState : {};
        this.addTypename = addTypename;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.dataId = dataIdFromObject =
            dataIdFromObject || defaultDataIdFromObject;
        this.dataIdFromObject = this.dataId;
        this.fieldWithArgs = __WEBPACK_IMPORTED_MODULE_6__data_storeUtils__["a" /* getStoreKeyName */];
        this.queryDeduplication = queryDeduplication;
        this.ssrMode = ssrMode;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.reducerConfig = {
            dataIdFromObject: dataIdFromObject,
            customResolvers: customResolvers,
            addTypename: addTypename,
            fragmentMatcher: this.fragmentMatcher.match,
        };
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.setStore = this.setStore.bind(this);
        this.resetStore = this.resetStore.bind(this);
        var defaultConnectToDevTools = !Object(__WEBPACK_IMPORTED_MODULE_5__util_environment__["b" /* isProduction */])() &&
            typeof window !== 'undefined' &&
            !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined'
            ? defaultConnectToDevTools
            : connectToDevTools) {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && !Object(__WEBPACK_IMPORTED_MODULE_5__util_environment__["b" /* isProduction */])()) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (navigator.userAgent.indexOf('Chrome') > -1) {
                        console.debug('Download the Apollo DevTools ' +
                            'for a better development experience: ' +
                            'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                    }
                }
            }
        }
        this.version = __WEBPACK_IMPORTED_MODULE_8__version__["version"];
    }
    ApolloClient.prototype.watchQuery = function (options) {
        this.initStore();
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = __assign({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        this.initStore();
        if (options.fetchPolicy === 'cache-and-network') {
            throw new Error('cache-and-network fetchPolicy can only be used with watchQuery');
        }
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = __assign({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        this.initStore();
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        this.initStore();
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options) {
        return this.initProxy().readQuery(options);
    };
    ApolloClient.prototype.readFragment = function (options) {
        return this.initProxy().readFragment(options);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        return this.initProxy().writeQuery(options);
    };
    ApolloClient.prototype.writeFragment = function (options) {
        return this.initProxy().writeFragment(options);
    };
    ApolloClient.prototype.reducer = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* createApolloReducer */])(this.reducerConfig);
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.initStore = function () {
        var _this = this;
        if (this.store) {
            return;
        }
        if (this.reduxRootSelector) {
            throw new Error('Cannot initialize the store because "reduxRootSelector" is provided. ' +
                'reduxRootSelector should only be used when the store is created outside of the client. ' +
                'This may lead to unexpected results when querying the store internally. ' +
                "Please remove that option from ApolloClient constructor.");
        }
        this.setStore(Object(__WEBPACK_IMPORTED_MODULE_3__store__["b" /* createApolloStore */])({
            reduxRootKey: DEFAULT_REDUX_ROOT_KEY,
            initialState: this.initialState,
            config: this.reducerConfig,
            logger: function (store) { return function (next) { return function (action) {
                var result = next(action);
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: action,
                        state: {
                            queries: _this.queryManager.queryStore.getStore(),
                            mutations: _this.queryManager.mutationStore.getStore(),
                        },
                        dataWithOptimisticResults: _this.queryManager.getDataWithOptimisticResults(),
                    });
                }
                return result;
            }; }; },
        }));
    };
    ApolloClient.prototype.resetStore = function () {
        return this.queryManager ? this.queryManager.resetStore() : null;
    };
    ApolloClient.prototype.getInitialState = function () {
        this.initStore();
        return this.queryManager.getInitialState();
    };
    ApolloClient.prototype.setStore = function (store) {
        var reduxRootSelector;
        if (this.reduxRootSelector) {
            reduxRootSelector = this.reduxRootSelector;
        }
        else {
            reduxRootSelector = defaultReduxRootSelector;
        }
        if (typeof reduxRootSelector(store.getState()) === 'undefined') {
            throw new Error('Existing store does not use apolloReducer. Please make sure the store ' +
                'is properly configured and "reduxRootSelector" is correctly specified.');
        }
        this.store = store;
        this.queryManager = new __WEBPACK_IMPORTED_MODULE_4__core_QueryManager__["a" /* QueryManager */]({
            networkInterface: this.networkInterface,
            reduxRootSelector: reduxRootSelector,
            store: store,
            addTypename: this.addTypename,
            reducerConfig: this.reducerConfig,
            queryDeduplication: this.queryDeduplication,
            fragmentMatcher: this.fragmentMatcher,
            ssrMode: this.ssrMode,
        });
    };
    ApolloClient.prototype.initProxy = function () {
        if (!this.proxy) {
            this.initStore();
            this.proxy = new __WEBPACK_IMPORTED_MODULE_7__data_proxy__["a" /* ReduxDataProxy */](this.store, this.reduxRootSelector || defaultReduxRootSelector, this.fragmentMatcher, this.reducerConfig);
        }
        return this.proxy;
    };
    return ApolloClient;
}());
/* harmony default export */ __webpack_exports__["a"] = (ApolloClient);
//# sourceMappingURL=ApolloClient.js.map

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __webpack_require__(76);
exports.execute = link_1.execute;
exports.ApolloLink = link_1.ApolloLink;
var linkUtils_1 = __webpack_require__(77);
exports.makePromise = linkUtils_1.makePromise;
var zen_observable_ts_1 = __webpack_require__(37);
exports.Observable = zen_observable_ts_1.default;
__export(__webpack_require__(37));
exports.default = link_1.ApolloLink;
//# sourceMappingURL=index.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warnOnceInDevelopment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(6);

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__environment__["b" /* isProduction */])()) {
        return;
    }
    if (!haveWarned[msg]) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__environment__["c" /* isTest */])()) {
            haveWarned[msg] = true;
        }
        switch (type) {
            case 'error':
                console.error(msg);
                break;
            default:
                console.warn(msg);
        }
    }
}
//# sourceMappingURL=warnOnce.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transport_Deduplicator__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isEqual__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_assign__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__types__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queries_store__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__queries_networkStatus__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__queries_queryTransform__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_resultReducers__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_fragmentMatcher__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_environment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__util_maybeDeepFreeze__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql_language_printer__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_graphql_language_printer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data_readFromStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mutations_store__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__scheduler_scheduler__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__util_Observable__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ObservableQuery__ = __webpack_require__(34);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





















var QueryManager = (function () {
    function QueryManager(_a) {
        var networkInterface = _a.networkInterface, store = _a.store, reduxRootSelector = _a.reduxRootSelector, _b = _a.reducerConfig, reducerConfig = _b === void 0 ? {} : _b, fragmentMatcher = _a.fragmentMatcher, _c = _a.addTypename, addTypename = _c === void 0 ? true : _c, _d = _a.queryDeduplication, queryDeduplication = _d === void 0 ? false : _d, _e = _a.ssrMode, ssrMode = _e === void 0 ? false : _e;
        var _this = this;
        this.mutationStore = new __WEBPACK_IMPORTED_MODULE_15__mutations_store__["a" /* MutationStore */]();
        this.queryStore = new __WEBPACK_IMPORTED_MODULE_4__queries_store__["a" /* QueryStore */]();
        this.idCounter = 1;
        this.lastRequestId = {};
        this.disableBroadcasting = false;
        this.networkInterface = networkInterface;
        this.deduplicator = new __WEBPACK_IMPORTED_MODULE_0__transport_Deduplicator__["a" /* Deduplicator */](networkInterface);
        this.store = store;
        this.reduxRootSelector = reduxRootSelector;
        this.reducerConfig = reducerConfig;
        this.pollingTimers = {};
        this.queryListeners = {};
        this.queryDocuments = {};
        this.addTypename = addTypename;
        this.queryDeduplication = queryDeduplication;
        this.ssrMode = ssrMode;
        if (typeof fragmentMatcher === 'undefined') {
            this.fragmentMatcher = new __WEBPACK_IMPORTED_MODULE_10__data_fragmentMatcher__["a" /* HeuristicFragmentMatcher */]();
        }
        else {
            this.fragmentMatcher = fragmentMatcher;
        }
        this.scheduler = new __WEBPACK_IMPORTED_MODULE_16__scheduler_scheduler__["a" /* QueryScheduler */]({
            queryManager: this,
        });
        this.fetchQueryPromises = {};
        this.observableQueries = {};
        this.queryIdsByName = {};
        if (this.store['subscribe']) {
            var currentStoreData_1;
            this.store['subscribe'](function () {
                var previousStoreData = currentStoreData_1 || {};
                var previousStoreHasData = Object.keys(previousStoreData).length;
                currentStoreData_1 = _this.getApolloState();
                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isEqual__["a" /* isEqual */])(previousStoreData, currentStoreData_1) &&
                    previousStoreHasData) {
                    return;
                }
                _this.broadcastQueries();
            });
        }
    }
    QueryManager.prototype.broadcastNewStore = function (store) {
        this.broadcastQueries();
    };
    QueryManager.prototype.mutate = function (_a) {
        var _this = this;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, updateWithProxyFn = _a.update;
        if (!mutation) {
            throw new Error('mutation option is required. You must specify your GraphQL document in the mutation option.');
        }
        var mutationId = this.generateQueryId();
        if (this.addTypename) {
            mutation = Object(__WEBPACK_IMPORTED_MODULE_8__queries_queryTransform__["a" /* addTypenameToDocument */])(mutation);
        }
        variables = Object(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["c" /* getDefaultValues */])(Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["f" /* getMutationDefinition */])(mutation)), variables);
        var mutationString = Object(__WEBPACK_IMPORTED_MODULE_13_graphql_language_printer__["print"])(mutation);
        var request = {
            query: mutation,
            variables: variables,
            operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(mutation),
        };
        this.queryDocuments[mutationId] = mutation;
        var generateUpdateQueriesInfo = function () {
            var ret = {};
            if (updateQueriesByName) {
                Object.keys(updateQueriesByName).forEach(function (queryName) {
                    return (_this.queryIdsByName[queryName] || []).forEach(function (queryId) {
                        ret[queryId] = {
                            reducer: updateQueriesByName[queryName],
                            query: _this.queryStore.get(queryId),
                        };
                    });
                });
            }
            return ret;
        };
        this.store.dispatch({
            type: 'APOLLO_MUTATION_INIT',
            mutationString: mutationString,
            mutation: mutation,
            variables: variables || {},
            operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(mutation),
            mutationId: mutationId,
            optimisticResponse: optimisticResponse,
            extraReducers: this.getExtraReducers(),
            updateQueries: generateUpdateQueriesInfo(),
            update: updateWithProxyFn,
        });
        this.mutationStore.initMutation(mutationId, mutationString, variables);
        return new Promise(function (resolve, reject) {
            _this.networkInterface
                .query(request)
                .then(function (result) {
                if (result.errors) {
                    var error = new __WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__["a" /* ApolloError */]({
                        graphQLErrors: result.errors,
                    });
                    _this.store.dispatch({
                        type: 'APOLLO_MUTATION_ERROR',
                        error: error,
                        mutationId: mutationId,
                    });
                    _this.mutationStore.markMutationError(mutationId, error);
                    delete _this.queryDocuments[mutationId];
                    reject(error);
                    return;
                }
                _this.store.dispatch({
                    type: 'APOLLO_MUTATION_RESULT',
                    result: result,
                    mutationId: mutationId,
                    document: mutation,
                    operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(mutation),
                    variables: variables || {},
                    extraReducers: _this.getExtraReducers(),
                    updateQueries: generateUpdateQueriesInfo(),
                    update: updateWithProxyFn,
                });
                _this.mutationStore.markMutationResult(mutationId);
                var reducerError = _this.getApolloState().reducerError;
                if (reducerError && reducerError.mutationId === mutationId) {
                    reject(reducerError.error);
                    return;
                }
                if (typeof refetchQueries[0] === 'string') {
                    refetchQueries.forEach(function (name) {
                        _this.refetchQueryByName(name);
                    });
                }
                else {
                    refetchQueries.forEach(function (pureQuery) {
                        _this.query({
                            query: pureQuery.query,
                            variables: pureQuery.variables,
                            fetchPolicy: 'network-only',
                        });
                    });
                }
                delete _this.queryDocuments[mutationId];
                resolve(result);
            })
                .catch(function (err) {
                _this.store.dispatch({
                    type: 'APOLLO_MUTATION_ERROR',
                    error: err,
                    mutationId: mutationId,
                });
                delete _this.queryDocuments[mutationId];
                reject(new __WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__["a" /* ApolloError */]({
                    networkError: err,
                }));
            });
        });
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
        var _this = this;
        var _a = options.variables, variables = _a === void 0 ? {} : _a, _b = options.metadata, metadata = _b === void 0 ? null : _b, _c = options.fetchPolicy, fetchPolicy = _c === void 0 ? 'cache-first' : _c;
        var queryDoc = this.transformQueryDocument(options).queryDoc;
        var queryString = Object(__WEBPACK_IMPORTED_MODULE_13_graphql_language_printer__["print"])(queryDoc);
        var storeResult;
        var needToFetch = fetchPolicy === 'network-only';
        if (fetchType !== __WEBPACK_IMPORTED_MODULE_3__types__["a" /* FetchType */].refetch && fetchPolicy !== 'network-only') {
            var _d = Object(__WEBPACK_IMPORTED_MODULE_14__data_readFromStore__["a" /* diffQueryAgainstStore */])({
                query: queryDoc,
                store: this.reduxRootSelector(this.store.getState()).data,
                variables: variables,
                returnPartialData: true,
                fragmentMatcherFunction: this.fragmentMatcher.match,
                config: this.reducerConfig,
            }), isMissing = _d.isMissing, result = _d.result;
            needToFetch = isMissing || fetchPolicy === 'cache-and-network';
            storeResult = result;
        }
        var shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
        var requestId = this.generateRequestId();
        this.queryDocuments[queryId] = queryDoc;
        this.queryStore.initQuery({
            queryId: queryId,
            queryString: queryString,
            document: queryDoc,
            storePreviousVariables: shouldFetch,
            variables: variables,
            isPoll: fetchType === __WEBPACK_IMPORTED_MODULE_3__types__["a" /* FetchType */].poll,
            isRefetch: fetchType === __WEBPACK_IMPORTED_MODULE_3__types__["a" /* FetchType */].refetch,
            metadata: metadata,
            fetchMoreForQueryId: fetchMoreForQueryId,
        });
        this.broadcastQueries();
        if (QueryManager.EMIT_REDUX_ACTIONS) {
            this.store.dispatch({
                type: 'APOLLO_QUERY_INIT',
                queryString: queryString,
                document: queryDoc,
                operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(queryDoc),
                variables: variables,
                fetchPolicy: fetchPolicy,
                queryId: queryId,
                requestId: requestId,
                storePreviousVariables: shouldFetch,
                isPoll: fetchType === __WEBPACK_IMPORTED_MODULE_3__types__["a" /* FetchType */].poll,
                isRefetch: fetchType === __WEBPACK_IMPORTED_MODULE_3__types__["a" /* FetchType */].refetch,
                fetchMoreForQueryId: fetchMoreForQueryId,
                metadata: metadata,
            });
        }
        this.lastRequestId[queryId] = requestId;
        var shouldDispatchClientResult = !shouldFetch || fetchPolicy === 'cache-and-network';
        if (shouldDispatchClientResult) {
            this.queryStore.markQueryResultClient(queryId, !shouldFetch);
            this.broadcastQueries();
            if (QueryManager.EMIT_REDUX_ACTIONS) {
                this.store.dispatch({
                    type: 'APOLLO_QUERY_RESULT_CLIENT',
                    result: { data: storeResult },
                    variables: variables,
                    document: queryDoc,
                    operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(queryDoc),
                    complete: !shouldFetch,
                    queryId: queryId,
                    requestId: requestId,
                });
            }
        }
        if (shouldFetch) {
            var networkResult = this.fetchRequest({
                requestId: requestId,
                queryId: queryId,
                document: queryDoc,
                options: options,
                fetchMoreForQueryId: fetchMoreForQueryId,
            }).catch(function (error) {
                if (Object(__WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__["b" /* isApolloError */])(error)) {
                    throw error;
                }
                else {
                    if (requestId >= (_this.lastRequestId[queryId] || 1)) {
                        if (QueryManager.EMIT_REDUX_ACTIONS) {
                            _this.store.dispatch({
                                type: 'APOLLO_QUERY_ERROR',
                                error: error,
                                queryId: queryId,
                                requestId: requestId,
                                fetchMoreForQueryId: fetchMoreForQueryId,
                            });
                        }
                        _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                        _this.broadcastQueries();
                    }
                    _this.removeFetchQueryPromise(requestId);
                    throw new __WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__["a" /* ApolloError */]({
                        networkError: error,
                    });
                }
            });
            if (fetchPolicy !== 'cache-and-network') {
                return networkResult;
            }
        }
        return Promise.resolve({ data: storeResult });
    };
    QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
        var _this = this;
        var previouslyHadError = false;
        return function (queryStoreValue) {
            if (!queryStoreValue) {
                return;
            }
            queryStoreValue = _this.queryStore.get(queryId);
            var storedQuery = _this.observableQueries[queryId];
            var observableQuery = storedQuery ? storedQuery.observableQuery : null;
            var fetchPolicy = observableQuery
                ? observableQuery.options.fetchPolicy
                : options.fetchPolicy;
            if (fetchPolicy === 'standby') {
                return;
            }
            var lastResult = observableQuery
                ? observableQuery.getLastResult()
                : null;
            var shouldNotifyIfLoading = queryStoreValue.previousVariables ||
                fetchPolicy === 'cache-only' ||
                fetchPolicy === 'cache-and-network';
            var networkStatusChanged = lastResult &&
                queryStoreValue.networkStatus !== lastResult.networkStatus;
            if (!Object(__WEBPACK_IMPORTED_MODULE_5__queries_networkStatus__["b" /* isNetworkRequestInFlight */])(queryStoreValue.networkStatus) ||
                (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                shouldNotifyIfLoading) {
                if ((queryStoreValue.graphQLErrors &&
                    queryStoreValue.graphQLErrors.length > 0) ||
                    queryStoreValue.networkError) {
                    var apolloError_1 = new __WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__["a" /* ApolloError */]({
                        graphQLErrors: queryStoreValue.graphQLErrors,
                        networkError: queryStoreValue.networkError,
                    });
                    previouslyHadError = true;
                    if (observer.error) {
                        try {
                            observer.error(apolloError_1);
                        }
                        catch (e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }
                    }
                    else {
                        setTimeout(function () {
                            throw apolloError_1;
                        }, 0);
                        if (!Object(__WEBPACK_IMPORTED_MODULE_11__util_environment__["b" /* isProduction */])()) {
                            console.info('An unhandled error was thrown because no error handler is registered ' +
                                'for the query ' +
                                queryStoreValue.queryString);
                        }
                    }
                }
                else {
                    try {
                        var _a = Object(__WEBPACK_IMPORTED_MODULE_14__data_readFromStore__["a" /* diffQueryAgainstStore */])({
                            store: _this.getDataWithOptimisticResults(),
                            query: _this.queryDocuments[queryId],
                            variables: queryStoreValue.previousVariables || queryStoreValue.variables,
                            config: _this.reducerConfig,
                            fragmentMatcherFunction: _this.fragmentMatcher.match,
                            previousResult: lastResult && lastResult.data,
                        }), data = _a.result, isMissing = _a.isMissing;
                        var resultFromStore = void 0;
                        if (isMissing && fetchPolicy !== 'cache-only') {
                            resultFromStore = {
                                data: lastResult && lastResult.data,
                                loading: Object(__WEBPACK_IMPORTED_MODULE_5__queries_networkStatus__["b" /* isNetworkRequestInFlight */])(queryStoreValue.networkStatus),
                                networkStatus: queryStoreValue.networkStatus,
                                stale: true,
                            };
                        }
                        else {
                            resultFromStore = {
                                data: data,
                                loading: Object(__WEBPACK_IMPORTED_MODULE_5__queries_networkStatus__["b" /* isNetworkRequestInFlight */])(queryStoreValue.networkStatus),
                                networkStatus: queryStoreValue.networkStatus,
                                stale: false,
                            };
                        }
                        if (observer.next) {
                            var isDifferentResult = !(lastResult &&
                                resultFromStore &&
                                lastResult.networkStatus === resultFromStore.networkStatus &&
                                lastResult.stale === resultFromStore.stale &&
                                lastResult.data === resultFromStore.data);
                            if (isDifferentResult || previouslyHadError) {
                                try {
                                    observer.next(Object(__WEBPACK_IMPORTED_MODULE_12__util_maybeDeepFreeze__["a" /* default */])(resultFromStore));
                                }
                                catch (e) {
                                    setTimeout(function () {
                                        throw e;
                                    }, 0);
                                }
                            }
                        }
                        previouslyHadError = false;
                    }
                    catch (error) {
                        previouslyHadError = true;
                        if (observer.error) {
                            observer.error(new __WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__["a" /* ApolloError */]({
                                networkError: error,
                            }));
                        }
                        return;
                    }
                }
            }
        };
    };
    QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
        if (shouldSubscribe === void 0) { shouldSubscribe = true; }
        if (options.returnPartialData) {
            throw new Error('returnPartialData option is no longer supported since Apollo Client 1.0.');
        }
        if (options.forceFetch) {
            throw new Error('forceFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.');
        }
        if (options.noFetch) {
            throw new Error('noFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.');
        }
        if (options.fetchPolicy === 'standby') {
            throw new Error('client.watchQuery cannot be called with fetchPolicy set to "standby"');
        }
        var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["i" /* getQueryDefinition */])(options.query);
        if (queryDefinition.variableDefinitions &&
            queryDefinition.variableDefinitions.length) {
            var defaultValues = Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["c" /* getDefaultValues */])(queryDefinition);
            options.variables = Object(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* assign */])({}, defaultValues, options.variables);
        }
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var transformedOptions = __assign({}, options);
        var observableQuery = new __WEBPACK_IMPORTED_MODULE_19__ObservableQuery__["a" /* ObservableQuery */]({
            scheduler: this.scheduler,
            options: transformedOptions,
            shouldSubscribe: shouldSubscribe,
        });
        return observableQuery;
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
        if (!options.query) {
            throw new Error('query option is required. You must specify your GraphQL document in the query option.');
        }
        if (options.query.kind !== 'Document') {
            throw new Error('You must wrap the query string in a "gql" tag.');
        }
        if (options.returnPartialData) {
            throw new Error('returnPartialData option only supported on watchQuery.');
        }
        if (options.pollInterval) {
            throw new Error('pollInterval option only supported on watchQuery.');
        }
        if (options.forceFetch) {
            throw new Error('forceFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.');
        }
        if (options.noFetch) {
            throw new Error('noFetch option is no longer supported since Apollo Client 1.0. Use fetchPolicy instead.');
        }
        if (typeof options.notifyOnNetworkStatusChange !== 'undefined') {
            throw new Error('Cannot call "query" with "notifyOnNetworkStatusChange" option. Only "watchQuery" has that option.');
        }
        options.notifyOnNetworkStatusChange = false;
        var requestId = this.idCounter;
        var resPromise = new Promise(function (resolve, reject) {
            _this.addFetchQueryPromise(requestId, resPromise, resolve, reject);
            return _this.watchQuery(options, false)
                .result()
                .then(function (result) {
                _this.removeFetchQueryPromise(requestId);
                resolve(result);
            })
                .catch(function (error) {
                _this.removeFetchQueryPromise(requestId);
                reject(error);
            });
        });
        return resPromise;
    };
    QueryManager.prototype.generateQueryId = function () {
        var queryId = this.idCounter.toString();
        this.idCounter++;
        return queryId;
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.queryStore.stopQuery(queryId);
        this.broadcastQueries();
        if (QueryManager.EMIT_REDUX_ACTIONS) {
            this.store.dispatch({
                type: 'APOLLO_QUERY_STOP',
                queryId: queryId,
            });
        }
    };
    QueryManager.prototype.getApolloState = function () {
        return this.reduxRootSelector(this.store.getState());
    };
    QueryManager.prototype.selectApolloState = function (store) {
        return this.reduxRootSelector(store.getState());
    };
    QueryManager.prototype.getInitialState = function () {
        return { data: this.getApolloState().data };
    };
    QueryManager.prototype.getDataWithOptimisticResults = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_6__store__["c" /* getDataWithOptimisticResults */])(this.getApolloState());
    };
    QueryManager.prototype.addQueryListener = function (queryId, listener) {
        this.queryListeners[queryId] = this.queryListeners[queryId] || [];
        this.queryListeners[queryId].push(listener);
    };
    QueryManager.prototype.addFetchQueryPromise = function (requestId, promise, resolve, reject) {
        this.fetchQueryPromises[requestId.toString()] = {
            promise: promise,
            resolve: resolve,
            reject: reject,
        };
    };
    QueryManager.prototype.removeFetchQueryPromise = function (requestId) {
        delete this.fetchQueryPromises[requestId.toString()];
    };
    QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
        this.observableQueries[queryId] = { observableQuery: observableQuery };
        var queryDef = Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["i" /* getQueryDefinition */])(observableQuery.options.query);
        if (queryDef.name && queryDef.name.value) {
            var queryName = queryDef.name.value;
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName] || [];
            this.queryIdsByName[queryName].push(observableQuery.queryId);
        }
    };
    QueryManager.prototype.removeObservableQuery = function (queryId) {
        var observableQuery = this.observableQueries[queryId].observableQuery;
        var definition = Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["i" /* getQueryDefinition */])(observableQuery.options.query);
        var queryName = definition.name ? definition.name.value : null;
        delete this.observableQueries[queryId];
        if (queryName) {
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName].filter(function (val) {
                return !(observableQuery.queryId === val);
            });
        }
    };
    QueryManager.prototype.resetStore = function () {
        var _this = this;
        Object.keys(this.fetchQueryPromises).forEach(function (key) {
            var reject = _this.fetchQueryPromises[key].reject;
            reject(new Error('Store reset while query was in flight.'));
        });
        this.queryStore.reset(Object.keys(this.observableQueries));
        this.store.dispatch({
            type: 'APOLLO_STORE_RESET',
            observableQueryIds: Object.keys(this.observableQueries),
        });
        this.mutationStore.reset();
        var observableQueryPromises = [];
        Object.keys(this.observableQueries).forEach(function (queryId) {
            var storeQuery = _this.queryStore.get(queryId);
            var fetchPolicy = _this.observableQueries[queryId].observableQuery
                .options.fetchPolicy;
            if (fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby') {
                observableQueryPromises.push(_this.observableQueries[queryId].observableQuery.refetch());
            }
        });
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.startQuery = function (queryId, options, listener) {
        this.addQueryListener(queryId, listener);
        this.fetchQuery(queryId, options)
            .catch(function (error) { return undefined; });
        return queryId;
    };
    QueryManager.prototype.startGraphQLSubscription = function (options) {
        var _this = this;
        var query = options.query;
        var transformedDoc = query;
        if (this.addTypename) {
            transformedDoc = Object(__WEBPACK_IMPORTED_MODULE_8__queries_queryTransform__["a" /* addTypenameToDocument */])(transformedDoc);
        }
        var variables = Object(__WEBPACK_IMPORTED_MODULE_2__util_assign__["a" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["c" /* getDefaultValues */])(Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["g" /* getOperationDefinition */])(query)), options.variables);
        var request = {
            query: transformedDoc,
            variables: variables,
            operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(transformedDoc),
        };
        var subId;
        var observers = [];
        return new __WEBPACK_IMPORTED_MODULE_17__util_Observable__["a" /* Observable */](function (observer) {
            observers.push(observer);
            if (observers.length === 1) {
                var handler = function (error, result) {
                    if (error) {
                        observers.forEach(function (obs) {
                            if (obs.error) {
                                obs.error(error);
                            }
                        });
                    }
                    else {
                        _this.store.dispatch({
                            type: 'APOLLO_SUBSCRIPTION_RESULT',
                            document: transformedDoc,
                            operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(transformedDoc),
                            result: { data: result },
                            variables: variables,
                            subscriptionId: subId,
                            extraReducers: _this.getExtraReducers(),
                        });
                        observers.forEach(function (obs) {
                            if (obs.next) {
                                obs.next(result);
                            }
                        });
                    }
                };
                subId = _this
                    .networkInterface.subscribe(request, handler);
            }
            return {
                unsubscribe: function () {
                    observers = observers.filter(function (obs) { return obs !== observer; });
                    if (observers.length === 0) {
                        _this.networkInterface.unsubscribe(subId);
                    }
                },
                _networkSubscriptionId: subId,
            };
        });
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        delete this.queryListeners[queryId];
        delete this.queryDocuments[queryId];
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.removeQuery(queryId);
        this.stopQueryInStore(queryId);
    };
    QueryManager.prototype.getCurrentQueryResult = function (observableQuery, isOptimistic) {
        if (isOptimistic === void 0) { isOptimistic = false; }
        var _a = this.getQueryParts(observableQuery), variables = _a.variables, document = _a.document;
        var lastResult = observableQuery.getLastResult();
        var queryOptions = observableQuery.options;
        var readOptions = {
            store: isOptimistic
                ? this.getDataWithOptimisticResults()
                : this.getApolloState().data,
            query: document,
            variables: variables,
            config: this.reducerConfig,
            previousResult: lastResult ? lastResult.data : undefined,
            fragmentMatcherFunction: this.fragmentMatcher.match,
        };
        try {
            var data = Object(__WEBPACK_IMPORTED_MODULE_14__data_readFromStore__["b" /* readQueryFromStore */])(readOptions);
            return Object(__WEBPACK_IMPORTED_MODULE_12__util_maybeDeepFreeze__["a" /* default */])({ data: data, partial: false });
        }
        catch (e) {
            return Object(__WEBPACK_IMPORTED_MODULE_12__util_maybeDeepFreeze__["a" /* default */])({ data: {}, partial: true });
        }
    };
    QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable, isOptimistic) {
        if (isOptimistic === void 0) { isOptimistic = false; }
        var observableQuery;
        if (typeof queryIdOrObservable === 'string') {
            if (!this.observableQueries[queryIdOrObservable]) {
                throw new Error("ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            }
            observableQuery = this.observableQueries[queryIdOrObservable]
                .observableQuery;
        }
        else {
            observableQuery = queryIdOrObservable;
        }
        var _a = this.getQueryParts(observableQuery), variables = _a.variables, document = _a.document;
        var data = this.getCurrentQueryResult(observableQuery, isOptimistic).data;
        return {
            previousResult: data,
            variables: variables,
            document: document,
        };
    };
    QueryManager.prototype.getQueryParts = function (observableQuery) {
        var queryOptions = observableQuery.options;
        var transformedDoc = observableQuery.options.query;
        if (this.addTypename) {
            transformedDoc = Object(__WEBPACK_IMPORTED_MODULE_8__queries_queryTransform__["a" /* addTypenameToDocument */])(transformedDoc);
        }
        return {
            variables: queryOptions.variables,
            document: transformedDoc,
        };
    };
    QueryManager.prototype.transformQueryDocument = function (options) {
        var queryDoc = options.query;
        if (this.addTypename) {
            queryDoc = Object(__WEBPACK_IMPORTED_MODULE_8__queries_queryTransform__["a" /* addTypenameToDocument */])(queryDoc);
        }
        return {
            queryDoc: queryDoc,
        };
    };
    QueryManager.prototype.getExtraReducers = function () {
        var _this = this;
        return Object.keys(this.observableQueries)
            .map(function (obsQueryId) {
            var query = _this.observableQueries[obsQueryId].observableQuery;
            var queryOptions = query.options;
            if (queryOptions.reducer) {
                return Object(__WEBPACK_IMPORTED_MODULE_9__data_resultReducers__["a" /* createStoreReducer */])(queryOptions.reducer, _this.addTypename
                    ? Object(__WEBPACK_IMPORTED_MODULE_8__queries_queryTransform__["a" /* addTypenameToDocument */])(queryOptions.query)
                    : queryOptions.query, query.variables || {}, _this.reducerConfig);
            }
            return null;
        })
            .filter(function (reducer) { return reducer !== null; });
    };
    QueryManager.prototype.fetchRequest = function (_a) {
        var _this = this;
        var requestId = _a.requestId, queryId = _a.queryId, document = _a.document, options = _a.options, fetchMoreForQueryId = _a.fetchMoreForQueryId;
        var variables = options.variables;
        var request = {
            query: document,
            variables: variables,
            operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(document),
        };
        var retPromise = new Promise(function (resolve, reject) {
            _this.addFetchQueryPromise(requestId, retPromise, resolve, reject);
            _this.deduplicator
                .query(request, _this.queryDeduplication)
                .then(function (result) {
                var extraReducers = _this.getExtraReducers();
                if (requestId >= (_this.lastRequestId[queryId] || 1)) {
                    _this.disableBroadcasting = true;
                    _this.store.dispatch({
                        type: 'APOLLO_QUERY_RESULT',
                        document: document,
                        variables: variables ? variables : {},
                        operationName: Object(__WEBPACK_IMPORTED_MODULE_7__queries_getFromAST__["h" /* getOperationName */])(document),
                        result: result,
                        queryId: queryId,
                        requestId: requestId,
                        fetchMoreForQueryId: fetchMoreForQueryId,
                        extraReducers: extraReducers,
                    });
                    _this.disableBroadcasting = false;
                    var reducerError = _this.getApolloState().reducerError;
                    if (!reducerError || reducerError.queryId !== queryId) {
                        _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                        _this.broadcastQueries();
                    }
                }
                _this.removeFetchQueryPromise(requestId);
                if (result.errors) {
                    throw new __WEBPACK_IMPORTED_MODULE_18__errors_ApolloError__["a" /* ApolloError */]({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            })
                .then(function (result) {
                var resultFromStore;
                if (fetchMoreForQueryId) {
                    resultFromStore = result.data;
                }
                else {
                    try {
                        resultFromStore = Object(__WEBPACK_IMPORTED_MODULE_14__data_readFromStore__["b" /* readQueryFromStore */])({
                            store: _this.getApolloState().data,
                            variables: variables,
                            query: document,
                            config: _this.reducerConfig,
                            fragmentMatcherFunction: _this.fragmentMatcher.match,
                        });
                    }
                    catch (e) { }
                }
                var reducerError = _this.getApolloState().reducerError;
                if (reducerError && reducerError.queryId === queryId) {
                    return Promise.reject(reducerError.error);
                }
                _this.removeFetchQueryPromise(requestId);
                resolve({
                    data: resultFromStore,
                    loading: false,
                    networkStatus: __WEBPACK_IMPORTED_MODULE_5__queries_networkStatus__["a" /* NetworkStatus */].ready,
                    stale: false,
                });
                return Promise.resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return retPromise;
    };
    QueryManager.prototype.refetchQueryByName = function (queryName) {
        var _this = this;
        var refetchedQueries = this.queryIdsByName[queryName];
        if (refetchedQueries === undefined) {
            console.warn("Warning: unknown query with name " + queryName + " asked to refetch");
            return;
        }
        else {
            return Promise.all(refetchedQueries.map(function (queryId) {
                return _this.observableQueries[queryId].observableQuery.refetch();
            }));
        }
    };
    QueryManager.prototype.broadcastQueries = function () {
        var _this = this;
        if (this.disableBroadcasting) {
            return;
        }
        Object.keys(this.queryListeners).forEach(function (queryId) {
            var listeners = _this.queryListeners[queryId];
            if (listeners) {
                listeners.forEach(function (listener) {
                    if (listener) {
                        var queryStoreValue = _this.queryStore.get(queryId);
                        listener(queryStoreValue);
                    }
                });
            }
        });
    };
    QueryManager.prototype.generateRequestId = function () {
        var requestId = this.idCounter;
        this.idCounter++;
        return requestId;
    };
    QueryManager.EMIT_REDUX_ACTIONS = true;
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deduplicator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__);

var Deduplicator = (function () {
    function Deduplicator(networkInterface) {
        this.networkInterface = networkInterface;
        this.inFlightRequestPromises = {};
    }
    Deduplicator.prototype.query = function (request, deduplicate) {
        var _this = this;
        if (deduplicate === void 0) { deduplicate = true; }
        if (!deduplicate) {
            return this.networkInterface.query(request);
        }
        var key = this.getKey(request);
        if (!this.inFlightRequestPromises[key]) {
            this.inFlightRequestPromises[key] = this.networkInterface.query(request);
        }
        return this.inFlightRequestPromises[key]
            .then(function (res) {
            delete _this.inFlightRequestPromises[key];
            return res;
        })
            .catch(function (err) {
            delete _this.inFlightRequestPromises[key];
            throw err;
        });
    };
    Deduplicator.prototype.getKey = function (request) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(request.query) + "|" + JSON.stringify(request.variables) + "|" + request.operationName;
    };
    return Deduplicator;
}());

//# sourceMappingURL=Deduplicator.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isEqual__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__networkStatus__ = __webpack_require__(12);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var QueryStore = (function () {
    function QueryStore() {
        this.store = {};
    }
    QueryStore.prototype.getStore = function () {
        return this.store;
    };
    QueryStore.prototype.get = function (queryId) {
        return this.store[queryId];
    };
    QueryStore.prototype.initQuery = function (query) {
        var previousQuery = this.store[query.queryId];
        if (previousQuery && previousQuery.queryString !== query.queryString) {
            throw new Error('Internal Error: may not update existing query string in store');
        }
        var isSetVariables = false;
        var previousVariables = null;
        if (query.storePreviousVariables &&
            previousQuery &&
            previousQuery.networkStatus !== __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].loading) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_isEqual__["a" /* isEqual */])(previousQuery.variables, query.variables)) {
                isSetVariables = true;
                previousVariables = previousQuery.variables;
            }
        }
        var networkStatus;
        if (isSetVariables) {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].setVariables;
        }
        else if (query.isPoll) {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].poll;
        }
        else if (query.isRefetch) {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].refetch;
        }
        else {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].loading;
        }
        this.store[query.queryId] = {
            queryString: query.queryString,
            document: query.document,
            variables: query.variables,
            previousVariables: previousVariables,
            networkError: null,
            graphQLErrors: [],
            networkStatus: networkStatus,
            metadata: query.metadata,
        };
        if (typeof query.fetchMoreForQueryId === 'string') {
            this.store[query.fetchMoreForQueryId].networkStatus =
                __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].fetchMore;
        }
    };
    QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
        if (!this.store[queryId]) {
            return;
        }
        this.store[queryId].networkError = null;
        this.store[queryId].graphQLErrors =
            result.errors && result.errors.length ? result.errors : [];
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].ready;
        if (typeof fetchMoreForQueryId === 'string') {
            this.store[fetchMoreForQueryId].networkStatus = __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].ready;
        }
    };
    QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
        if (!this.store[queryId]) {
            return;
        }
        this.store[queryId].networkError = error;
        this.store[queryId].networkStatus = __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].error;
        if (typeof fetchMoreForQueryId === 'string') {
            this.markQueryError(fetchMoreForQueryId, error, undefined);
        }
    };
    QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
        if (!this.store[queryId]) {
            return;
        }
        this.store[queryId].networkError = null;
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = complete
            ? __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].ready
            : __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].loading;
    };
    QueryStore.prototype.stopQuery = function (queryId) {
        delete this.store[queryId];
    };
    QueryStore.prototype.reset = function (observableQueryIds) {
        var _this = this;
        this.store = Object.keys(this.store)
            .filter(function (queryId) {
            return observableQueryIds.indexOf(queryId) > -1;
        })
            .reduce(function (res, key) {
            res[key] = __assign({}, _this.store[key], { networkStatus: __WEBPACK_IMPORTED_MODULE_1__networkStatus__["a" /* NetworkStatus */].loading });
            return res;
        }, {});
    };
    return QueryStore;
}());

//# sourceMappingURL=store.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStoreReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__readFromStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__writeToStore__ = __webpack_require__(11);


function createStoreReducer(resultReducer, document, variables, config) {
    return function (store, action) {
        var _a = Object(__WEBPACK_IMPORTED_MODULE_0__readFromStore__["a" /* diffQueryAgainstStore */])({
            store: store,
            query: document,
            variables: variables,
            returnPartialData: true,
            fragmentMatcherFunction: config.fragmentMatcher,
            config: config,
        }), result = _a.result, isMissing = _a.isMissing;
        if (isMissing) {
            return store;
        }
        var nextResult;
        try {
            nextResult = resultReducer(result, action, variables);
        }
        catch (err) {
            console.warn('Unhandled error in result reducer', err);
            throw err;
        }
        if (result !== nextResult) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__writeToStore__["b" /* writeResultToStore */])({
                dataId: 'ROOT_QUERY',
                result: nextResult,
                store: store,
                document: document,
                variables: variables,
                dataIdFromObject: config.dataIdFromObject,
                fragmentMatcherFunction: config.fragmentMatcher,
            });
        }
        return store;
    };
}
//# sourceMappingURL=resultReducers.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MutationStore; });
var MutationStore = (function () {
    function MutationStore() {
        this.store = {};
    }
    MutationStore.prototype.getStore = function () {
        return this.store;
    };
    MutationStore.prototype.get = function (mutationId) {
        return this.store[mutationId];
    };
    MutationStore.prototype.initMutation = function (mutationId, mutationString, variables) {
        this.store[mutationId] = {
            mutationString: mutationString,
            variables: variables || {},
            loading: true,
            error: null,
        };
    };
    MutationStore.prototype.markMutationError = function (mutationId, error) {
        this.store[mutationId].loading = false;
        this.store[mutationId].error = error;
    };
    MutationStore.prototype.markMutationResult = function (mutationId) {
        this.store[mutationId].loading = false;
        this.store[mutationId].error = null;
    };
    MutationStore.prototype.reset = function () {
        this.store = {};
    };
    return MutationStore;
}());

//# sourceMappingURL=store.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_types__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ObservableQuery__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__queries_networkStatus__ = __webpack_require__(12);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var QueryScheduler = (function () {
    function QueryScheduler(_a) {
        var queryManager = _a.queryManager;
        this.queryManager = queryManager;
        this.pollingTimers = {};
        this.inFlightQueries = {};
        this.registeredQueries = {};
        this.intervalQueries = {};
    }
    QueryScheduler.prototype.checkInFlight = function (queryId) {
        var query = this.queryManager.queryStore.get(queryId);
        return (query &&
            query.networkStatus !== __WEBPACK_IMPORTED_MODULE_2__queries_networkStatus__["a" /* NetworkStatus */].ready &&
            query.networkStatus !== __WEBPACK_IMPORTED_MODULE_2__queries_networkStatus__["a" /* NetworkStatus */].error);
    };
    QueryScheduler.prototype.fetchQuery = function (queryId, options, fetchType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.queryManager
                .fetchQuery(queryId, options, fetchType)
                .then(function (result) {
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    QueryScheduler.prototype.startPollingQuery = function (options, queryId, listener) {
        if (!options.pollInterval) {
            throw new Error('Attempted to start a polling query without a polling interval.');
        }
        if (this.queryManager.ssrMode) {
            return queryId;
        }
        this.registeredQueries[queryId] = options;
        if (listener) {
            this.queryManager.addQueryListener(queryId, listener);
        }
        this.addQueryOnInterval(queryId, options);
        return queryId;
    };
    QueryScheduler.prototype.stopPollingQuery = function (queryId) {
        delete this.registeredQueries[queryId];
    };
    QueryScheduler.prototype.fetchQueriesOnInterval = function (interval) {
        var _this = this;
        this.intervalQueries[interval] = this.intervalQueries[interval].filter(function (queryId) {
            if (!_this.registeredQueries.hasOwnProperty(queryId)) {
                return false;
            }
            if (_this.checkInFlight(queryId)) {
                return true;
            }
            var queryOptions = _this.registeredQueries[queryId];
            var pollingOptions = __assign({}, queryOptions);
            pollingOptions.fetchPolicy = 'network-only';
            _this.fetchQuery(queryId, pollingOptions, __WEBPACK_IMPORTED_MODULE_0__core_types__["a" /* FetchType */].poll);
            return true;
        });
        if (this.intervalQueries[interval].length === 0) {
            clearInterval(this.pollingTimers[interval]);
            delete this.intervalQueries[interval];
        }
    };
    QueryScheduler.prototype.addQueryOnInterval = function (queryId, queryOptions) {
        var _this = this;
        var interval = queryOptions.pollInterval;
        if (!interval) {
            throw new Error("A poll interval is required to start polling query with id '" + queryId + "'.");
        }
        if (this.intervalQueries.hasOwnProperty(interval.toString()) &&
            this.intervalQueries[interval].length > 0) {
            this.intervalQueries[interval].push(queryId);
        }
        else {
            this.intervalQueries[interval] = [queryId];
            this.pollingTimers[interval] = setInterval(function () {
                _this.fetchQueriesOnInterval(interval);
            }, interval);
        }
    };
    QueryScheduler.prototype.registerPollingQuery = function (queryOptions) {
        if (!queryOptions.pollInterval) {
            throw new Error('Attempted to register a non-polling query with the scheduler.');
        }
        return new __WEBPACK_IMPORTED_MODULE_1__core_ObservableQuery__["a" /* ObservableQuery */]({
            scheduler: this,
            options: queryOptions,
        });
    };
    return QueryScheduler;
}());

//# sourceMappingURL=scheduler.js.map

/***/ }),
/* 181 */
/***/ (function(module, exports) {

exports.version = "1.9.3"

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

module.exports = pick;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visit = visit;
exports.visitInParallel = visitInParallel;
exports.visitWithTypeInfo = visitWithTypeInfo;
exports.getVisitFn = getVisitFn;


/**
 * A visitor is comprised of visit functions, which are called on each node
 * during the visitor's traversal.
 */


/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var QueryDocumentKeys = exports.QueryDocumentKeys = {
  Name: [],

  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],

  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name',
  // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],

  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],

  Directive: ['name', 'arguments'],

  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],

  SchemaDefinition: ['directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],

  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],

  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields'],

  DirectiveDefinition: ['description', 'name', 'arguments', 'locations']
};

/**
 * A KeyMap describes each the traversable properties of each kind of node.
 */
var BREAK = exports.BREAK = {};

/**
 * visit() will walk through an AST using a depth first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */
function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;

  /* eslint-disable no-undef-init */
  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};
          for (var k in node) {
            if (node.hasOwnProperty(k)) {
              clone[k] = node[k];
            }
          }
          node = clone;
        }
        var editOffset = 0;
        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];
          if (inArray) {
            editKey -= editOffset;
          }
          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;
      if (node === null || node === undefined) {
        continue;
      }
      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;
    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error('Invalid AST Node: ' + JSON.stringify(node));
      }
      var visitFn = getVisitFn(visitor, node.kind, isLeaving);
      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);
          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      stack = { inArray: inArray, index: index, keys: keys, edits: edits, prev: stack };
      inArray = Array.isArray(node);
      keys = inArray ? node : visitorKeys[node.kind] || [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}

function isNode(maybeNode) {
  return Boolean(maybeNode && typeof maybeNode.kind === 'string');
}

/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */
function visitInParallel(visitors) {
  var skipping = new Array(visitors.length);

  return {
    enter: function enter(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */false);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      }
    },
    leave: function leave(node) {
      for (var i = 0; i < visitors.length; i++) {
        if (!skipping[i]) {
          var fn = getVisitFn(visitors[i], node.kind, /* isLeaving */true);
          if (fn) {
            var result = fn.apply(visitors[i], arguments);
            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          }
        } else if (skipping[i] === node) {
          skipping[i] = null;
        }
      }
    }
  };
}

/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */
function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */false);
      if (fn) {
        var result = fn.apply(visitor, arguments);
        if (result !== undefined) {
          typeInfo.leave(node);
          if (isNode(result)) {
            typeInfo.enter(result);
          }
        }
        return result;
      }
    },
    leave: function leave(node) {
      var fn = getVisitFn(visitor, node.kind, /* isLeaving */true);
      var result = void 0;
      if (fn) {
        result = fn.apply(visitor, arguments);
      }
      typeInfo.leave(node);
      return result;
    }
  };
}

/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */
function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];
  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }
    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;
    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;
    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }
      var specificKindVisitor = specificVisitor[kind];
      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDirectiveInfoFromField;
/* harmony export (immutable) */ __webpack_exports__["c"] = shouldInclude;
/* unused harmony export flattenSelections */
/* unused harmony export getDirectiveNames */
/* harmony export (immutable) */ __webpack_exports__["b"] = hasDirectives;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storeUtils__ = __webpack_require__(40);

function getDirectiveInfoFromField(field, variables) {
    if (field.directives && field.directives.length) {
        var directiveObj_1 = {};
        field.directives.forEach(function (directive) {
            directiveObj_1[directive.name.value] = Object(__WEBPACK_IMPORTED_MODULE_0__storeUtils__["a" /* argumentsObjectFromField */])(directive, variables);
        });
        return directiveObj_1;
    }
    return null;
}
function shouldInclude(selection, variables) {
    if (variables === void 0) { variables = {}; }
    if (!selection.directives) {
        return true;
    }
    var res = true;
    selection.directives.forEach(function (directive) {
        if (directive.name.value !== 'skip' && directive.name.value !== 'include') {
            return;
        }
        var directiveArguments = directive.arguments || [];
        var directiveName = directive.name.value;
        if (directiveArguments.length !== 1) {
            throw new Error("Incorrect number of arguments for the @" + directiveName + " directive.");
        }
        var ifArgument = directiveArguments[0];
        if (!ifArgument.name || ifArgument.name.value !== 'if') {
            throw new Error("Invalid argument for the @" + directiveName + " directive.");
        }
        var ifValue = directiveArguments[0].value;
        var evaledValue = false;
        if (!ifValue || ifValue.kind !== 'BooleanValue') {
            if (ifValue.kind !== 'Variable') {
                throw new Error("Argument for the @" + directiveName + " directive must be a variable or a bool ean value.");
            }
            else {
                evaledValue = variables[ifValue.name.value];
                if (evaledValue === undefined) {
                    throw new Error("Invalid variable referenced in @" + directiveName + " directive.");
                }
            }
        }
        else {
            evaledValue = ifValue.value;
        }
        if (directiveName === 'skip') {
            evaledValue = !evaledValue;
        }
        if (!evaledValue) {
            res = false;
        }
    });
    return res;
}
function flattenSelections(selection) {
    if (!selection.selectionSet ||
        !(selection.selectionSet.selections.length > 0))
        return [selection];
    return [selection].concat(selection.selectionSet.selections
        .map(function (selectionNode) {
        return [selectionNode].concat(flattenSelections(selectionNode));
    })
        .reduce(function (selections, selected) { return selections.concat(selected); }, []));
}
var added = new Map();
function getDirectiveNames(doc) {
    var cached = added.get(doc);
    if (cached)
        return cached;
    var directives = doc.definitions
        .filter(function (definition) {
        return definition.selectionSet && definition.selectionSet.selections;
    })
        .map(function (x) { return flattenSelections(x); })
        .reduce(function (selections, selected) { return selections.concat(selected); }, [])
        .filter(function (selection) {
        return selection.directives && selection.directives.length > 0;
    })
        .map(function (selection) { return selection.directives; })
        .reduce(function (directives, directive) { return directives.concat(directive); }, [])
        .map(function (directive) { return directive.name.value; });
    added.set(doc, directives);
    return directives;
}
function hasDirectives(names, doc) {
    return getDirectiveNames(doc).some(function (name) { return names.indexOf(name) > -1; });
}
//# sourceMappingURL=directives.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFragmentQueryDocument;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw new Error("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        if (fragments.length !== 1) {
            throw new Error("Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
        }
        actualFragmentName = fragments[0].name.value;
    }
    var query = __assign({}, document, { definitions: [
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ].concat(document.definitions) });
    return query;
}
//# sourceMappingURL=fragments.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export removeDirectivesFromDocument */
/* harmony export (immutable) */ __webpack_exports__["a"] = addTypenameToDocument;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeConnectionDirectiveFromDocument;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_cloneDeep__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getFromAST__ = __webpack_require__(79);


var TYPENAME_FIELD = {
    kind: 'Field',
    name: {
        kind: 'Name',
        value: '__typename',
    },
};
function addTypenameToSelectionSet(selectionSet, isRoot) {
    if (isRoot === void 0) { isRoot = false; }
    if (selectionSet.selections) {
        if (!isRoot) {
            var alreadyHasThisField = selectionSet.selections.some(function (selection) {
                return (selection.kind === 'Field' &&
                    selection.name.value === '__typename');
            });
            if (!alreadyHasThisField) {
                selectionSet.selections.push(TYPENAME_FIELD);
            }
        }
        selectionSet.selections.forEach(function (selection) {
            if (selection.kind === 'Field') {
                if (selection.name.value.lastIndexOf('__', 0) !== 0 &&
                    selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
            else if (selection.kind === 'InlineFragment') {
                if (selection.selectionSet) {
                    addTypenameToSelectionSet(selection.selectionSet);
                }
            }
        });
    }
}
function removeDirectivesFromSelectionSet(directives, selectionSet) {
    if (!selectionSet.selections)
        return selectionSet;
    var agressiveRemove = directives.some(function (dir) { return dir.remove; });
    selectionSet.selections = selectionSet.selections
        .map(function (selection) {
        if (selection.kind !== 'Field' ||
            !selection ||
            !selection.directives)
            return selection;
        var remove;
        selection.directives = selection.directives.filter(function (directive) {
            var shouldKeep = !directives.some(function (dir) {
                if (dir.name && dir.name === directive.name.value)
                    return true;
                if (dir.test && dir.test(directive))
                    return true;
                return false;
            });
            if (!remove && !shouldKeep && agressiveRemove)
                remove = true;
            return shouldKeep;
        });
        return remove ? null : selection;
    })
        .filter(function (x) { return !!x; });
    selectionSet.selections.forEach(function (selection) {
        if ((selection.kind === 'Field' || selection.kind === 'InlineFragment') &&
            selection.selectionSet) {
            removeDirectivesFromSelectionSet(directives, selection.selectionSet);
        }
    });
    return selectionSet;
}
function removeDirectivesFromDocument(directives, doc) {
    var docClone = Object(__WEBPACK_IMPORTED_MODULE_0__util_cloneDeep__["a" /* cloneDeep */])(doc);
    docClone.definitions.forEach(function (definition) {
        removeDirectivesFromSelectionSet(directives, definition.selectionSet);
    });
    var operation = Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["h" /* getOperationDefinitionOrDie */])(docClone);
    var fragments = Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["b" /* createFragmentMap */])(Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["d" /* getFragmentDefinitions */])(docClone));
    var isNotEmpty = function (op) {
        return op.selectionSet.selections.filter(function (selectionSet) {
            return !(selectionSet &&
                selectionSet.kind === 'FragmentSpread' &&
                !isNotEmpty(fragments[selectionSet.name.value]));
        }).length > 0;
    };
    return isNotEmpty(operation) ? docClone : null;
}
var added = new Map();
function addTypenameToDocument(doc) {
    Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["a" /* checkDocument */])(doc);
    var cached = added.get(doc);
    if (cached)
        return cached;
    var docClone = Object(__WEBPACK_IMPORTED_MODULE_0__util_cloneDeep__["a" /* cloneDeep */])(doc);
    docClone.definitions.forEach(function (definition) {
        var isRoot = definition.kind === 'OperationDefinition';
        addTypenameToSelectionSet(definition.selectionSet, isRoot);
    });
    added.set(doc, docClone);
    return docClone;
}
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                console.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
var removed = new Map();
function removeConnectionDirectiveFromDocument(doc) {
    Object(__WEBPACK_IMPORTED_MODULE_1__getFromAST__["a" /* checkDocument */])(doc);
    var cached = removed.get(doc);
    if (cached)
        return cached;
    var docClone = removeDirectivesFromDocument([connectionRemoveConfig], doc);
    removed.set(doc, docClone);
    return docClone;
}
//# sourceMappingURL=transform.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tryFunctionOrLogError;
/* harmony export (immutable) */ __webpack_exports__["a"] = graphQLResultHasError;
function tryFunctionOrLogError(f) {
    try {
        return f();
    }
    catch (e) {
        if (console.error) {
            console.error(e);
        }
    }
}
function graphQLResultHasError(result) {
    return result.errors && result.errors.length;
}
//# sourceMappingURL=errorHandling.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEqual;
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    if (a != null &&
        typeof a === 'object' &&
        b != null &&
        typeof b === 'object') {
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                if (!Object.prototype.hasOwnProperty.call(b, key)) {
                    return false;
                }
                if (!isEqual(a[key], b[key])) {
                    return false;
                }
            }
        }
        for (var key in b) {
            if (!Object.prototype.hasOwnProperty.call(a, key)) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=isEqual.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = maybeDeepFreeze;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(41);

function deepFreeze(o) {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
        if (o.hasOwnProperty(prop) &&
            o[prop] !== null &&
            (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
            !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
        }
    });
    return o;
}
function maybeDeepFreeze(obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__environment__["a" /* isDevelopment */])() || Object(__WEBPACK_IMPORTED_MODULE_0__environment__["c" /* isTest */])()) {
        return deepFreeze(obj);
    }
    return obj;
}
//# sourceMappingURL=maybeDeepFreeze.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warnOnceInDevelopment;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(41);

var haveWarned = Object.create({});
function warnOnceInDevelopment(msg, type) {
    if (type === void 0) { type = 'warn'; }
    if (Object(__WEBPACK_IMPORTED_MODULE_0__environment__["b" /* isProduction */])()) {
        return;
    }
    if (!haveWarned[msg]) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__environment__["c" /* isTest */])()) {
            haveWarned[msg] = true;
        }
        switch (type) {
            case 'error':
                console.error(msg);
                break;
            default:
                console.warn(msg);
        }
    }
}
//# sourceMappingURL=warnOnce.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export empty */
/* unused harmony export from */
/* unused harmony export split */
/* unused harmony export concat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloLink; });
/* harmony export (immutable) */ __webpack_exports__["b"] = execute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zen_observable__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zen_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zen_observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linkUtils__ = __webpack_require__(83);


var passthrough = function (op, forward) { return (forward ? forward(op) : __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]()); };
var toLink = function (handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
};
var empty = function () {
    return new ApolloLink(function (op, forward) { return __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"](); });
};
var from = function (links) {
    if (links.length === 0)
        return empty();
    return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
};
var split = function (test, left, right) {
    if (right === void 0) { right = new ApolloLink(passthrough); }
    var leftLink = toLink(left);
    var rightLink = toLink(right);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(leftLink) && Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(rightLink)) {
        return new ApolloLink(function (operation) {
            return test(operation)
                ? leftLink.request(operation) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]()
                : rightLink.request(operation) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return test(operation)
                ? leftLink.request(operation, forward) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]()
                : rightLink.request(operation, forward) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
        });
    }
};
var concat = function (first, second) {
    var firstLink = toLink(first);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(firstLink)) {
        console.warn(new __WEBPACK_IMPORTED_MODULE_1__linkUtils__["a" /* LinkError */]("You are calling concat on a terminating link, which will have no effect", firstLink));
        return firstLink;
    }
    var nextLink = toLink(second);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["c" /* isTerminating */])(nextLink)) {
        return new ApolloLink(function (operation) {
            return firstLink.request(operation, function (op) { return nextLink.request(op) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"](); }) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
        });
    }
    else {
        return new ApolloLink(function (operation, forward) {
            return (firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]();
            }) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]());
        });
    }
};
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.prototype.split = function (test, left, right) {
        if (right === void 0) { right = new ApolloLink(passthrough); }
        return this.concat(split(test, left, right));
    };
    ApolloLink.prototype.concat = function (next) {
        return concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw new Error('request is not implemented');
    };
    ApolloLink.empty = empty;
    ApolloLink.from = from;
    ApolloLink.split = split;
    return ApolloLink;
}());

function execute(link, operation) {
    return (link.request(Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["b" /* createOperation */])(operation.context, Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["d" /* transformOperation */])(Object(__WEBPACK_IMPORTED_MODULE_1__linkUtils__["e" /* validateOperation */])(operation)))) || __WEBPACK_IMPORTED_MODULE_0_zen_observable__["of"]());
}
//# sourceMappingURL=link.js.map

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) { (function(fn, name) { if (true) { fn(exports, module); } else if (typeof self !== "undefined") { var e = name === "*" ? self : (name ? self[name] = {} : {}); fn(e, { exports: e }); } })(function(exports, module) { // === Symbol Support ===

function hasSymbol(name) {
  return typeof Symbol === "function" && Boolean(Symbol[name]);
}

function getSymbol(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
}

// Ponyfill Symbol.observable for interoperability with other libraries
if (typeof Symbol === "function" && !Symbol.observable) {
  Symbol.observable = Symbol("observable");
}

// === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];

  if (value == null)
    return undefined;

  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");

  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[getSymbol("species")];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function addMethods(target, methods) {
  Object.keys(methods).forEach(function(k) {
    var desc = Object.getOwnPropertyDescriptor(methods, k);
    desc.enumerable = false;
    Object.defineProperty(target, k, desc);
  });
}

function cleanupSubscription(subscription) {
  // Assert:  observer._observer is undefined

  var cleanup = subscription._cleanup;

  if (!cleanup)
    return;

  // Drop the reference to the cleanup function so that we won't call it
  // more than once
  subscription._cleanup = undefined;

  // Call the cleanup function
  cleanup();
}

function subscriptionClosed(subscription) {
  return subscription._observer === undefined;
}

function closeSubscription(subscription) {
  if (subscriptionClosed(subscription))
    return;

  subscription._observer = undefined;
  cleanupSubscription(subscription);
}

function cleanupFromSubscription(subscription) {
  return function() { subscription.unsubscribe() };
}

function Subscription(observer, subscriber) {
  // Assert: subscriber is callable

  // The observer must be an object
  if (Object(observer) !== observer)
    throw new TypeError("Observer must be an object");

  this._cleanup = undefined;
  this._observer = observer;

  var start = getMethod(observer, "start");

  if (start)
    start.call(observer, this);

  if (subscriptionClosed(this))
    return;

  observer = new SubscriptionObserver(this);

  try {
    // Call the subscriber function
    var cleanup$0 = subscriber.call(undefined, observer);

    // The return value must be undefined, null, a subscription object, or a function
    if (cleanup$0 != null) {
      if (typeof cleanup$0.unsubscribe === "function")
        cleanup$0 = cleanupFromSubscription(cleanup$0);
      else if (typeof cleanup$0 !== "function")
        throw new TypeError(cleanup$0 + " is not a function");

      this._cleanup = cleanup$0;
    }
  } catch (e) {
    // If an error occurs during startup, then attempt to send the error
    // to the observer
    observer.error(e);
    return;
  }

  // If the stream is already finished, then perform cleanup
  if (subscriptionClosed(this))
    cleanupSubscription(this);
}

addMethods(Subscription.prototype = {}, {
  get closed() { return subscriptionClosed(this) },
  unsubscribe: function() { closeSubscription(this) },
});

function SubscriptionObserver(subscription) {
  this._subscription = subscription;
}

addMethods(SubscriptionObserver.prototype = {}, {

  get closed() { return subscriptionClosed(this._subscription) },

  next: function(value) {
    var subscription = this._subscription;

    // If the stream is closed, then return undefined
    if (subscriptionClosed(subscription))
      return undefined;

    var observer = subscription._observer;
    var m = getMethod(observer, "next");

    // If the observer doesn't support "next", then return undefined
    if (!m)
      return undefined;

    // Send the next value to the sink
    return m.call(observer, value);
  },

  error: function(value) {
    var subscription = this._subscription;

    // If the stream is closed, throw the error to the caller
    if (subscriptionClosed(subscription))
      throw value;

    var observer = subscription._observer;
    subscription._observer = undefined;

    try {
      var m$0 = getMethod(observer, "error");

      // If the sink does not support "error", then throw the error to the caller
      if (!m$0)
        throw value;

      value = m$0.call(observer, value);
    } catch (e) {
      try { cleanupSubscription(subscription) }
      finally { throw e }
    }

    cleanupSubscription(subscription);
    return value;
  },

  complete: function(value) {
    var subscription = this._subscription;

    // If the stream is closed, then return undefined
    if (subscriptionClosed(subscription))
      return undefined;

    var observer = subscription._observer;
    subscription._observer = undefined;

    try {
      var m$1 = getMethod(observer, "complete");

      // If the sink does not support "complete", then return undefined
      value = m$1 ? m$1.call(observer, value) : undefined;
    } catch (e) {
      try { cleanupSubscription(subscription) }
      finally { throw e }
    }

    cleanupSubscription(subscription);
    return value;
  },

});

function Observable(subscriber) {
  // The stream subscriber must be a function
  if (typeof subscriber !== "function")
    throw new TypeError("Observable initializer must be a function");

  this._subscriber = subscriber;
}

addMethods(Observable.prototype, {

  subscribe: function(observer) { for (var args = [], __$0 = 1; __$0 < arguments.length; ++__$0) args.push(arguments[__$0]); 
    if (typeof observer === 'function') {
      observer = {
        next: observer,
        error: args[0],
        complete: args[1],
      };
    }

    return new Subscription(observer, this._subscriber);
  },

  forEach: function(fn) { var __this = this; 
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function")
        return Promise.reject(new TypeError(fn + " is not a function"));

      __this.subscribe({
        _subscription: null,

        start: function(subscription) {
          if (Object(subscription) !== subscription)
            throw new TypeError(subscription + " is not an object");

          this._subscription = subscription;
        },

        next: function(value) {
          var subscription = this._subscription;

          if (subscription.closed)
            return;

          try {
            return fn(value);
          } catch (err) {
            reject(err);
            subscription.unsubscribe();
          }
        },

        error: reject,
        complete: resolve,
      });
    });
  },

  map: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);

    return new C(function(observer) { return __this.subscribe({
      next: function(value) {
        if (observer.closed)
          return;

        try { value = fn(value) }
        catch (e) { return observer.error(e) }

        return observer.next(value);
      },

      error: function(e) { return observer.error(e) },
      complete: function(x) { return observer.complete(x) },
    }); });
  },

  filter: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);

    return new C(function(observer) { return __this.subscribe({
      next: function(value) {
        if (observer.closed)
          return;

        try { if (!fn(value)) return undefined }
        catch (e) { return observer.error(e) }

        return observer.next(value);
      },

      error: function(e) { return observer.error(e) },
      complete: function() { return observer.complete() },
    }); });
  },

  reduce: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;

    return new C(function(observer) { return __this.subscribe({

      next: function(value) {
        if (observer.closed)
          return;

        var first = !hasValue;
        hasValue = true;

        if (!first || hasSeed) {
          try { acc = fn(acc, value) }
          catch (e) { return observer.error(e) }
        } else {
          acc = value;
        }
      },

      error: function(e) { observer.error(e) },

      complete: function() {
        if (!hasValue && !hasSeed) {
          observer.error(new TypeError("Cannot reduce an empty sequence"));
          return;
        }

        observer.next(acc);
        observer.complete();
      },

    }); });
  },

  flatMap: function(fn) { var __this = this; 
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    var C = getSpecies(this);

    return new C(function(observer) {
      var completed = false;
      var subscriptions = [];

      // Subscribe to the outer Observable
      var outer = __this.subscribe({

        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (x) {
              observer.error(x);
              return;
            }
          }

          // Subscribe to the inner Observable
          Observable.from(value).subscribe({
            _subscription: null,

            start: function(s) { subscriptions.push(this._subscription = s) },
            next: function(value) { observer.next(value) },
            error: function(e) { observer.error(e) },

            complete: function() {
              var i = subscriptions.indexOf(this._subscription);

              if (i >= 0)
                subscriptions.splice(i, 1);

              closeIfDone();
            }
          });
        },

        error: function(e) {
          return observer.error(e);
        },

        complete: function() {
          completed = true;
          closeIfDone();
        }
      });

      function closeIfDone() {
        if (completed && subscriptions.length === 0)
          observer.complete();
      }

      return function() {
        subscriptions.forEach(function(s) { return s.unsubscribe(); });
        outer.unsubscribe();
      };
    });
  },

});

Object.defineProperty(Observable.prototype, getSymbol("observable"), {
  value: function() { return this },
  writable: true,
  configurable: true,
});

addMethods(Observable, {

  from: function(x) {
    var C = typeof this === "function" ? this : Observable;

    if (x == null)
      throw new TypeError(x + " is not an object");

    var method = getMethod(x, getSymbol("observable"));

    if (method) {
      var observable$0 = method.call(x);

      if (Object(observable$0) !== observable$0)
        throw new TypeError(observable$0 + " is not an object");

      if (observable$0.constructor === C)
        return observable$0;

      return new C(function(observer) { return observable$0.subscribe(observer); });
    }

    if (hasSymbol("iterator") && (method = getMethod(x, getSymbol("iterator")))) {
      return new C(function(observer) {
        for (var __$0 = (method.call(x))[Symbol.iterator](), __$1; __$1 = __$0.next(), !__$1.done;) { var item$0 = __$1.value; 
          observer.next(item$0);
          if (observer.closed)
            return;
        }

        observer.complete();
      });
    }

    if (Array.isArray(x)) {
      return new C(function(observer) {
        for (var i$0 = 0; i$0 < x.length; ++i$0) {
          observer.next(x[i$0]);
          if (observer.closed)
            return;
        }

        observer.complete();
      });
    }

    throw new TypeError(x + " is not observable");
  },

  of: function() { for (var items = [], __$0 = 0; __$0 < arguments.length; ++__$0) items.push(arguments[__$0]); 
    var C = typeof this === "function" ? this : Observable;

    return new C(function(observer) {
      for (var i$1 = 0; i$1 < items.length; ++i$1) {
        observer.next(items[i$1]);
        if (observer.closed)
          return;
      }

      observer.complete();
    });
  },

});

Object.defineProperty(Observable, getSymbol("species"), {
  get: function() { return this },
  configurable: true,
});

Object.defineProperty(Observable, "observableSymbol", {
  value: getSymbol("observable"),
});

exports.Observable = Observable;


}, "*");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_QueryManager__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_store__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__version__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__version___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__version__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var hasSuggestedDevtools = false;
var supportedDirectives = new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */](function (operation, forward) {
    operation.query = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["y" /* removeConnectionDirectiveFromDocument */])(operation.query);
    return forward(operation);
});
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.defaultOptions = {};
        this.resetStoreCallbacks = [];
        var link = options.link, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, connectToDevTools = options.connectToDevTools, _c = options.queryDeduplication, queryDeduplication = _c === void 0 ? true : _c, defaultOptions = options.defaultOptions;
        if (!link || !cache) {
            throw new Error("\n        In order to initialize Apollo Client, you must specify link & cache properties on the config object.\n        This is part of the required upgrade when migrating from Apollo Client 1.0 to Apollo Client 2.0.\n        For more information, please visit:\n          https://www.apollographql.com/docs/react/basics/setup.html\n        to help you get started.\n      ");
        }
        this.link = supportedDirectives.concat(link);
        this.cache = cache;
        this.store = new __WEBPACK_IMPORTED_MODULE_3__data_store__["a" /* DataStore */](cache);
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.ssrMode = ssrMode;
        this.defaultOptions = defaultOptions || {};
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        var defaultConnectToDevTools = !Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["v" /* isProduction */])() &&
            typeof window !== 'undefined' &&
            !window.__APOLLO_CLIENT__;
        if (typeof connectToDevTools === 'undefined'
            ? defaultConnectToDevTools
            : connectToDevTools && typeof window !== 'undefined') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && !Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["v" /* isProduction */])()) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self) {
                if (typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
                    if (navigator.userAgent.indexOf('Chrome') > -1) {
                        console.debug('Download the Apollo DevTools ' +
                            'for a better development experience: ' +
                            'https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm');
                    }
                }
            }
        }
        this.version = __WEBPACK_IMPORTED_MODULE_4__version__["version"];
    }
    ApolloClient.prototype.watchQuery = function (options) {
        this.initQueryManager();
        if (this.defaultOptions.watchQuery) {
            options = __assign({}, this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = __assign({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        this.initQueryManager();
        if (this.defaultOptions.query) {
            options = __assign({}, this.defaultOptions.query, options);
        }
        if (options.fetchPolicy === 'cache-and-network') {
            throw new Error('cache-and-network fetchPolicy can only be used with watchQuery');
        }
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = __assign({}, options, { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        this.initQueryManager();
        if (this.defaultOptions.mutate) {
            options = __assign({}, this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        this.initQueryManager();
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options) {
        return this.initProxy().readQuery(options);
    };
    ApolloClient.prototype.readFragment = function (options) {
        return this.initProxy().readFragment(options);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        var result = this.initProxy().writeQuery(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeFragment = function (options) {
        var result = this.initProxy().writeFragment(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.writeData = function (options) {
        var result = this.initProxy().writeData(options);
        this.queryManager.broadcastQueries();
        return result;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["c" /* execute */])(this.link, payload);
    };
    ApolloClient.prototype.initQueryManager = function () {
        var _this = this;
        if (this.queryManager)
            return;
        this.queryManager = new __WEBPACK_IMPORTED_MODULE_2__core_QueryManager__["a" /* QueryManager */]({
            link: this.link,
            store: this.store,
            queryDeduplication: this.queryDeduplication,
            ssrMode: this.ssrMode,
            onBroadcast: function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.queryStore.getStore(),
                            mutations: _this.queryManager.mutationStore.getStore(),
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            },
        });
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () {
            _this.queryManager
                ? _this.queryManager.resetStore()
                : Promise.resolve(null);
        })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function () {
        return this.queryManager
            ? this.queryManager.reFetchObservableQueries()
            : Promise.resolve(null);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.initProxy().extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.initProxy().restore(serializedState);
    };
    ApolloClient.prototype.initProxy = function () {
        if (!this.proxy) {
            this.initQueryManager();
            this.proxy = this.cache;
        }
        return this.proxy;
    };
    return ApolloClient;
}());
/* harmony default export */ __webpack_exports__["a"] = (ApolloClient);
//# sourceMappingURL=ApolloClient.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_dedup__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduler_scheduler__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_Observable__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_mutations__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_queries__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ObservableQuery__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__networkStatus__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__types__ = __webpack_require__(20);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};












var defaultQueryInfo = {
    listeners: [],
    invalidated: false,
    document: null,
    newData: null,
    lastRequestId: null,
    observableQuery: null,
    subscriptions: [],
};
var QueryManager = (function () {
    function QueryManager(_a) {
        var link = _a.link, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, store = _a.store, _c = _a.onBroadcast, onBroadcast = _c === void 0 ? function () { return undefined; } : _c, _d = _a.ssrMode, ssrMode = _d === void 0 ? false : _d;
        this.mutationStore = new __WEBPACK_IMPORTED_MODULE_7__data_mutations__["a" /* MutationStore */]();
        this.queryStore = new __WEBPACK_IMPORTED_MODULE_8__data_queries__["a" /* QueryStore */]();
        this.idCounter = 1;
        this.queries = new Map();
        this.fetchQueryPromises = new Map();
        this.queryIdsByName = {};
        this.link = link;
        this.deduplicator = __WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */].from([new __WEBPACK_IMPORTED_MODULE_2_apollo_link_dedup__["a" /* DedupLink */](), link]);
        this.queryDeduplication = queryDeduplication;
        this.dataStore = store;
        this.onBroadcast = onBroadcast;
        this.scheduler = new __WEBPACK_IMPORTED_MODULE_4__scheduler_scheduler__["a" /* QueryScheduler */]({ queryManager: this, ssrMode: ssrMode });
    }
    QueryManager.prototype.mutate = function (_a) {
        var _this = this;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueriesByName = _a.updateQueries, _b = _a.refetchQueries, refetchQueries = _b === void 0 ? [] : _b, updateWithProxyFn = _a.update, _c = _a.errorPolicy, errorPolicy = _c === void 0 ? 'none' : _c, _d = _a.context, context = _d === void 0 ? {} : _d;
        if (!mutation) {
            throw new Error('mutation option is required. You must specify your GraphQL document in the mutation option.');
        }
        var mutationId = this.generateQueryId();
        var cache = this.dataStore.getCache();
        (mutation = cache.transformDocument(mutation)),
            (variables = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["e" /* getDefaultValues */])(Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["j" /* getMutationDefinition */])(mutation)), variables));
        var mutationString = Object(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__["print"])(mutation);
        this.setQuery(mutationId, function () { return ({ document: mutation }); });
        var generateUpdateQueriesInfo = function () {
            var ret = {};
            if (updateQueriesByName) {
                Object.keys(updateQueriesByName).forEach(function (queryName) {
                    return (_this.queryIdsByName[queryName] || []).forEach(function (queryId) {
                        ret[queryId] = {
                            updater: updateQueriesByName[queryName],
                            query: _this.queryStore.get(queryId),
                        };
                    });
                });
            }
            return ret;
        };
        this.mutationStore.initMutation(mutationId, mutationString, variables);
        this.dataStore.markMutationInit({
            mutationId: mutationId,
            document: mutation,
            variables: variables || {},
            updateQueries: generateUpdateQueriesInfo(),
            update: updateWithProxyFn,
            optimisticResponse: optimisticResponse,
        });
        this.broadcastQueries();
        return new Promise(function (resolve, reject) {
            var storeResult;
            var error;
            var operation = _this.buildOperationForLink(mutation, variables, __assign({}, context, { optimisticResponse: optimisticResponse }));
            Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["c" /* execute */])(_this.link, operation).subscribe({
                next: function (result) {
                    if (result.errors && errorPolicy === 'none') {
                        error = new __WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__["a" /* ApolloError */]({
                            graphQLErrors: result.errors,
                        });
                        return;
                    }
                    _this.mutationStore.markMutationResult(mutationId);
                    _this.dataStore.markMutationResult({
                        mutationId: mutationId,
                        result: result,
                        document: mutation,
                        variables: variables || {},
                        updateQueries: generateUpdateQueriesInfo(),
                        update: updateWithProxyFn,
                    });
                    storeResult = result;
                },
                error: function (err) {
                    _this.mutationStore.markMutationError(mutationId, err);
                    _this.dataStore.markMutationComplete({
                        mutationId: mutationId,
                        optimisticResponse: optimisticResponse,
                    });
                    _this.broadcastQueries();
                    _this.setQuery(mutationId, function () { return ({ document: undefined }); });
                    reject(new __WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__["a" /* ApolloError */]({
                        networkError: err,
                    }));
                },
                complete: function () {
                    if (error) {
                        _this.mutationStore.markMutationError(mutationId, error);
                    }
                    _this.dataStore.markMutationComplete({
                        mutationId: mutationId,
                        optimisticResponse: optimisticResponse,
                    });
                    _this.broadcastQueries();
                    if (error) {
                        reject(error);
                        return;
                    }
                    if (typeof refetchQueries === 'function')
                        refetchQueries = refetchQueries(storeResult);
                    refetchQueries.forEach(function (refetchQuery) {
                        if (typeof refetchQuery === 'string') {
                            _this.refetchQueryByName(refetchQuery);
                            return;
                        }
                        _this.query({
                            query: refetchQuery.query,
                            variables: refetchQuery.variables,
                            fetchPolicy: 'network-only',
                        });
                    });
                    _this.setQuery(mutationId, function () { return ({ document: undefined }); });
                    if (errorPolicy === 'ignore' && storeResult && storeResult.errors) {
                        delete storeResult.errors;
                    }
                    resolve(storeResult);
                },
            });
        });
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, fetchType, fetchMoreForQueryId) {
        var _this = this;
        var _a = options.variables, variables = _a === void 0 ? {} : _a, _b = options.metadata, metadata = _b === void 0 ? null : _b, _c = options.fetchPolicy, fetchPolicy = _c === void 0 ? 'cache-first' : _c;
        var cache = this.dataStore.getCache();
        var query = cache.transformDocument(options.query);
        var storeResult;
        var needToFetch = fetchPolicy === 'network-only';
        if (fetchType !== __WEBPACK_IMPORTED_MODULE_11__types__["a" /* FetchType */].refetch && fetchPolicy !== 'network-only') {
            var _d = this.dataStore.getCache().diff({
                query: query,
                variables: variables,
                returnPartialData: true,
                optimistic: false,
            }), complete = _d.complete, result = _d.result;
            needToFetch = !complete || fetchPolicy === 'cache-and-network';
            storeResult = result;
        }
        var shouldFetch = needToFetch && fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby';
        if (Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["p" /* hasDirectives */])(['live'], query))
            shouldFetch = true;
        var requestId = this.generateRequestId();
        var cancel = this.updateQueryWatch(queryId, query, options);
        this.setQuery(queryId, function () { return ({
            document: query,
            lastRequestId: requestId,
            invalidated: true,
            cancel: cancel,
        }); });
        this.invalidate(true, fetchMoreForQueryId);
        this.queryStore.initQuery({
            queryId: queryId,
            queryString: Object(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__["print"])(query),
            document: query,
            storePreviousVariables: shouldFetch,
            variables: variables,
            isPoll: fetchType === __WEBPACK_IMPORTED_MODULE_11__types__["a" /* FetchType */].poll,
            isRefetch: fetchType === __WEBPACK_IMPORTED_MODULE_11__types__["a" /* FetchType */].refetch,
            metadata: metadata,
            fetchMoreForQueryId: fetchMoreForQueryId,
        });
        this.broadcastQueries();
        var shouldDispatchClientResult = !shouldFetch || fetchPolicy === 'cache-and-network';
        if (shouldDispatchClientResult) {
            this.queryStore.markQueryResultClient(queryId, !shouldFetch);
            this.invalidate(true, queryId, fetchMoreForQueryId);
            this.broadcastQueries();
        }
        if (shouldFetch) {
            var networkResult = this.fetchRequest({
                requestId: requestId,
                queryId: queryId,
                document: query,
                options: options,
                fetchMoreForQueryId: fetchMoreForQueryId,
            }).catch(function (error) {
                if (Object(__WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__["b" /* isApolloError */])(error)) {
                    throw error;
                }
                else {
                    var lastRequestId = _this.getQuery(queryId).lastRequestId;
                    if (requestId >= (lastRequestId || 1)) {
                        _this.queryStore.markQueryError(queryId, error, fetchMoreForQueryId);
                        _this.invalidate(true, queryId, fetchMoreForQueryId);
                        _this.broadcastQueries();
                    }
                    _this.removeFetchQueryPromise(requestId);
                    throw new __WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__["a" /* ApolloError */]({ networkError: error });
                }
            });
            if (fetchPolicy !== 'cache-and-network') {
                return networkResult;
            }
            else {
                networkResult.catch(function () { });
            }
        }
        return Promise.resolve({ data: storeResult });
    };
    QueryManager.prototype.queryListenerForObserver = function (queryId, options, observer) {
        var _this = this;
        var previouslyHadError = false;
        return function (queryStoreValue, newData) {
            _this.invalidate(false, queryId);
            if (!queryStoreValue)
                return;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            var fetchPolicy = observableQuery
                ? observableQuery.options.fetchPolicy
                : options.fetchPolicy;
            if (fetchPolicy === 'standby')
                return;
            var errorPolicy = observableQuery
                ? observableQuery.options.errorPolicy
                : options.errorPolicy;
            var lastResult = observableQuery
                ? observableQuery.getLastResult()
                : null;
            var lastError = observableQuery ? observableQuery.getLastError() : null;
            var shouldNotifyIfLoading = (!newData && queryStoreValue.previousVariables != null) ||
                fetchPolicy === 'cache-only' ||
                fetchPolicy === 'cache-and-network';
            var networkStatusChanged = Boolean(lastResult &&
                queryStoreValue.networkStatus !== lastResult.networkStatus);
            var errorStatusChanged = errorPolicy &&
                (lastError && lastError.graphQLErrors) !==
                    queryStoreValue.graphQLErrors &&
                errorPolicy !== 'none';
            if (!Object(__WEBPACK_IMPORTED_MODULE_10__networkStatus__["b" /* isNetworkRequestInFlight */])(queryStoreValue.networkStatus) ||
                (networkStatusChanged && options.notifyOnNetworkStatusChange) ||
                shouldNotifyIfLoading) {
                if (((!errorPolicy || errorPolicy === 'none') &&
                    queryStoreValue.graphQLErrors &&
                    queryStoreValue.graphQLErrors.length > 0) ||
                    queryStoreValue.networkError) {
                    var apolloError_1 = new __WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__["a" /* ApolloError */]({
                        graphQLErrors: queryStoreValue.graphQLErrors,
                        networkError: queryStoreValue.networkError,
                    });
                    previouslyHadError = true;
                    if (observer.error) {
                        try {
                            observer.error(apolloError_1);
                        }
                        catch (e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }
                    }
                    else {
                        setTimeout(function () {
                            throw apolloError_1;
                        }, 0);
                        if (!Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["v" /* isProduction */])()) {
                            console.info('An unhandled error was thrown because no error handler is registered ' +
                                'for the query ' +
                                queryStoreValue.queryString);
                        }
                    }
                    return;
                }
                try {
                    var data = void 0;
                    var isMissing = void 0;
                    if (newData) {
                        _this.setQuery(queryId, function () { return ({ newData: null }); });
                        data = newData.result;
                        isMissing = !newData.complete ? !newData.complete : false;
                    }
                    else {
                        if (lastResult && lastResult.data && !errorStatusChanged) {
                            data = lastResult.data;
                            isMissing = false;
                        }
                        else {
                            var document_1 = _this.getQuery(queryId).document;
                            var readResult = _this.dataStore.getCache().diff({
                                query: document_1,
                                variables: queryStoreValue.previousVariables ||
                                    queryStoreValue.variables,
                                optimistic: true,
                            });
                            data = readResult.result;
                            isMissing = !readResult.complete;
                        }
                    }
                    var resultFromStore = void 0;
                    if (isMissing && fetchPolicy !== 'cache-only') {
                        resultFromStore = {
                            data: lastResult && lastResult.data,
                            loading: Object(__WEBPACK_IMPORTED_MODULE_10__networkStatus__["b" /* isNetworkRequestInFlight */])(queryStoreValue.networkStatus),
                            networkStatus: queryStoreValue.networkStatus,
                            stale: true,
                        };
                    }
                    else {
                        resultFromStore = {
                            data: data,
                            loading: Object(__WEBPACK_IMPORTED_MODULE_10__networkStatus__["b" /* isNetworkRequestInFlight */])(queryStoreValue.networkStatus),
                            networkStatus: queryStoreValue.networkStatus,
                            stale: false,
                        };
                    }
                    if (errorPolicy === 'all' &&
                        queryStoreValue.graphQLErrors &&
                        queryStoreValue.graphQLErrors.length > 0) {
                        resultFromStore.errors = queryStoreValue.graphQLErrors;
                    }
                    if (observer.next) {
                        var isDifferentResult = !(lastResult &&
                            resultFromStore &&
                            lastResult.networkStatus === resultFromStore.networkStatus &&
                            lastResult.stale === resultFromStore.stale &&
                            lastResult.data === resultFromStore.data);
                        if (isDifferentResult || previouslyHadError) {
                            try {
                                observer.next(Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["x" /* maybeDeepFreeze */])(resultFromStore));
                            }
                            catch (e) {
                                setTimeout(function () {
                                    throw e;
                                }, 0);
                            }
                        }
                    }
                    previouslyHadError = false;
                }
                catch (error) {
                    previouslyHadError = true;
                    if (observer.error)
                        observer.error(new __WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__["a" /* ApolloError */]({ networkError: error }));
                    return;
                }
            }
        };
    };
    QueryManager.prototype.watchQuery = function (options, shouldSubscribe) {
        if (shouldSubscribe === void 0) { shouldSubscribe = true; }
        if (options.fetchPolicy === 'standby') {
            throw new Error('client.watchQuery cannot be called with fetchPolicy set to "standby"');
        }
        var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["m" /* getQueryDefinition */])(options.query);
        if (queryDefinition.variableDefinitions &&
            queryDefinition.variableDefinitions.length) {
            var defaultValues = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["e" /* getDefaultValues */])(queryDefinition);
            options.variables = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["c" /* assign */])({}, defaultValues, options.variables);
        }
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var transformedOptions = __assign({}, options);
        return new __WEBPACK_IMPORTED_MODULE_9__ObservableQuery__["a" /* ObservableQuery */]({
            scheduler: this.scheduler,
            options: transformedOptions,
            shouldSubscribe: shouldSubscribe,
        });
    };
    QueryManager.prototype.query = function (options) {
        var _this = this;
        if (!options.query) {
            throw new Error('query option is required. You must specify your GraphQL document in the query option.');
        }
        if (options.query.kind !== 'Document') {
            throw new Error('You must wrap the query string in a "gql" tag.');
        }
        if (options.returnPartialData) {
            throw new Error('returnPartialData option only supported on watchQuery.');
        }
        if (options.pollInterval) {
            throw new Error('pollInterval option only supported on watchQuery.');
        }
        if (typeof options.notifyOnNetworkStatusChange !== 'undefined') {
            throw new Error('Cannot call "query" with "notifyOnNetworkStatusChange" option. Only "watchQuery" has that option.');
        }
        options.notifyOnNetworkStatusChange = false;
        var requestId = this.idCounter;
        var resPromise = new Promise(function (resolve, reject) {
            _this.addFetchQueryPromise(requestId, resPromise, resolve, reject);
            return _this.watchQuery(options, false)
                .result()
                .then(function (result) {
                _this.removeFetchQueryPromise(requestId);
                resolve(result);
            })
                .catch(function (error) {
                _this.removeFetchQueryPromise(requestId);
                reject(error);
            });
        });
        return resPromise;
    };
    QueryManager.prototype.generateQueryId = function () {
        var queryId = this.idCounter.toString();
        this.idCounter++;
        return queryId;
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.queryStore.stopQuery(queryId);
        this.invalidate(true, queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.addQueryListener = function (queryId, listener) {
        this.setQuery(queryId, function (_a) {
            var _b = _a.listeners, listeners = _b === void 0 ? [] : _b;
            return ({
                listeners: listeners.concat([listener]),
                invalidate: false,
            });
        });
    };
    QueryManager.prototype.updateQueryWatch = function (queryId, document, options) {
        var _this = this;
        var cancel = this.getQuery(queryId).cancel;
        if (cancel)
            cancel();
        var previousResult = function () {
            var previousResult = null;
            var observableQuery = _this.getQuery(queryId).observableQuery;
            if (observableQuery) {
                var lastResult = observableQuery.getLastResult();
                if (lastResult) {
                    previousResult = lastResult.data;
                }
            }
            return previousResult;
        };
        return this.dataStore.getCache().watch({
            query: document,
            variables: options.variables,
            optimistic: true,
            previousResult: previousResult,
            callback: function (newData) {
                _this.setQuery(queryId, function () { return ({ invalidated: true, newData: newData }); });
            },
        });
    };
    QueryManager.prototype.addFetchQueryPromise = function (requestId, promise, resolve, reject) {
        this.fetchQueryPromises.set(requestId.toString(), {
            promise: promise,
            resolve: resolve,
            reject: reject,
        });
    };
    QueryManager.prototype.removeFetchQueryPromise = function (requestId) {
        this.fetchQueryPromises.delete(requestId.toString());
    };
    QueryManager.prototype.addObservableQuery = function (queryId, observableQuery) {
        this.setQuery(queryId, function () { return ({ observableQuery: observableQuery }); });
        var queryDef = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["m" /* getQueryDefinition */])(observableQuery.options.query);
        if (queryDef.name && queryDef.name.value) {
            var queryName = queryDef.name.value;
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName] || [];
            this.queryIdsByName[queryName].push(observableQuery.queryId);
        }
    };
    QueryManager.prototype.removeObservableQuery = function (queryId) {
        var _a = this.getQuery(queryId), observableQuery = _a.observableQuery, cancel = _a.cancel;
        if (cancel)
            cancel();
        if (!observableQuery)
            return;
        var definition = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["m" /* getQueryDefinition */])(observableQuery.options.query);
        var queryName = definition.name ? definition.name.value : null;
        this.setQuery(queryId, function () { return ({ observableQuery: null }); });
        if (queryName) {
            this.queryIdsByName[queryName] = this.queryIdsByName[queryName].filter(function (val) {
                return !(observableQuery.queryId === val);
            });
        }
    };
    QueryManager.prototype.resetStore = function () {
        this.fetchQueryPromises.forEach(function (_a) {
            var reject = _a.reject;
            reject(new Error('Store reset while query was in flight.'));
        });
        var resetIds = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (observableQuery)
                resetIds.push(queryId);
        });
        this.queryStore.reset(resetIds);
        this.mutationStore.reset();
        var dataStoreReset = this.dataStore.reset();
        var observableQueryPromises = this.getObservableQueryPromises();
        this.broadcastQueries();
        return dataStoreReset.then(function () { return Promise.all(observableQueryPromises); });
    };
    QueryManager.prototype.getObservableQueryPromises = function () {
        var _this = this;
        var observableQueryPromises = [];
        this.queries.forEach(function (_a, queryId) {
            var observableQuery = _a.observableQuery;
            if (!observableQuery)
                return;
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (fetchPolicy !== 'cache-only' && fetchPolicy !== 'standby') {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.setQuery(queryId, function () { return ({ newData: null }); });
            _this.invalidate(true, queryId);
        });
        return observableQueryPromises;
    };
    QueryManager.prototype.reFetchObservableQueries = function () {
        var observableQueryPromises = this.getObservableQueryPromises();
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.startQuery = function (queryId, options, listener) {
        this.addQueryListener(queryId, listener);
        this.fetchQuery(queryId, options)
            .catch(function () { return undefined; });
        return queryId;
    };
    QueryManager.prototype.startGraphQLSubscription = function (options) {
        var _this = this;
        var query = options.query;
        var cache = this.dataStore.getCache();
        var transformedDoc = cache.transformDocument(query);
        var variables = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["e" /* getDefaultValues */])(Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["k" /* getOperationDefinition */])(query)), options.variables);
        var sub;
        var observers = [];
        return new __WEBPACK_IMPORTED_MODULE_6__util_Observable__["a" /* Observable */](function (observer) {
            observers.push(observer);
            if (observers.length === 1) {
                var handler = {
                    next: function (result) {
                        _this.dataStore.markSubscriptionResult(result, transformedDoc, variables);
                        _this.broadcastQueries();
                        observers.forEach(function (obs) {
                            if (obs.next)
                                obs.next(result);
                        });
                    },
                    error: function (error) {
                        observers.forEach(function (obs) {
                            if (obs.error)
                                obs.error(error);
                        });
                    },
                };
                var operation = _this.buildOperationForLink(transformedDoc, variables);
                sub = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["c" /* execute */])(_this.link, operation).subscribe(handler);
            }
            return function () {
                observers = observers.filter(function (obs) { return obs !== observer; });
                if (observers.length === 0 && sub) {
                    sub.unsubscribe();
                }
            };
        });
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.removeQuery(queryId);
        this.stopQueryInStore(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        var subscriptions = this.getQuery(queryId).subscriptions;
        subscriptions.forEach(function (x) { return x.unsubscribe(); });
        this.queries.delete(queryId);
    };
    QueryManager.prototype.getCurrentQueryResult = function (observableQuery) {
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        var lastResult = observableQuery.getLastResult();
        var newData = this.getQuery(observableQuery.queryId).newData;
        if (newData) {
            return Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["x" /* maybeDeepFreeze */])({ data: newData.result, partial: false });
        }
        else {
            try {
                var data = this.dataStore.getCache().read({
                    query: query,
                    variables: variables,
                    previousResult: lastResult ? lastResult.data : undefined,
                    optimistic: true,
                });
                return Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["x" /* maybeDeepFreeze */])({ data: data, partial: false });
            }
            catch (e) {
                return Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["x" /* maybeDeepFreeze */])({ data: {}, partial: true });
            }
        }
    };
    QueryManager.prototype.getQueryWithPreviousResult = function (queryIdOrObservable) {
        var observableQuery;
        if (typeof queryIdOrObservable === 'string') {
            var foundObserveableQuery = this.getQuery(queryIdOrObservable).observableQuery;
            if (!foundObserveableQuery) {
                throw new Error("ObservableQuery with this id doesn't exist: " + queryIdOrObservable);
            }
            observableQuery = foundObserveableQuery;
        }
        else {
            observableQuery = queryIdOrObservable;
        }
        var _a = observableQuery.options, variables = _a.variables, query = _a.query;
        var data = this.getCurrentQueryResult(observableQuery).data;
        return {
            previousResult: data,
            variables: variables,
            document: query,
        };
    };
    QueryManager.prototype.broadcastQueries = function () {
        var _this = this;
        this.onBroadcast();
        this.queries.forEach(function (info, id) {
            if (!info.invalidated || !info.listeners)
                return;
            info.listeners
                .filter(function (x) { return !!x; })
                .forEach(function (listener) {
                listener(_this.queryStore.get(id), info.newData);
            });
        });
    };
    QueryManager.prototype.fetchRequest = function (_a) {
        var _this = this;
        var requestId = _a.requestId, queryId = _a.queryId, document = _a.document, options = _a.options, fetchMoreForQueryId = _a.fetchMoreForQueryId;
        var variables = options.variables, context = options.context, _b = options.errorPolicy, errorPolicy = _b === void 0 ? 'none' : _b;
        var operation = this.buildOperationForLink(document, variables, __assign({}, context, { forceFetch: !this.queryDeduplication }));
        var resultFromStore;
        var errorsFromStore;
        var retPromise = new Promise(function (resolve, reject) {
            _this.addFetchQueryPromise(requestId, retPromise, resolve, reject);
            var subscription = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["c" /* execute */])(_this.deduplicator, operation).subscribe({
                next: function (result) {
                    var lastRequestId = _this.getQuery(queryId).lastRequestId;
                    if (requestId >= (lastRequestId || 1)) {
                        try {
                            _this.dataStore.markQueryResult(result, document, variables, fetchMoreForQueryId, errorPolicy === 'ignore');
                        }
                        catch (e) {
                            reject(e);
                            return;
                        }
                        _this.queryStore.markQueryResult(queryId, result, fetchMoreForQueryId);
                        _this.invalidate(true, queryId, fetchMoreForQueryId);
                        _this.broadcastQueries();
                    }
                    if (result.errors && errorPolicy === 'none') {
                        reject(new __WEBPACK_IMPORTED_MODULE_5__errors_ApolloError__["a" /* ApolloError */]({
                            graphQLErrors: result.errors,
                        }));
                        return;
                    }
                    else if (errorPolicy === 'all') {
                        errorsFromStore = result.errors;
                    }
                    if (fetchMoreForQueryId) {
                        resultFromStore = result.data;
                    }
                    else {
                        try {
                            resultFromStore = _this.dataStore.getCache().read({
                                variables: variables,
                                query: document,
                                optimistic: false,
                            });
                        }
                        catch (e) { }
                    }
                },
                error: function (error) {
                    _this.removeFetchQueryPromise(requestId);
                    _this.setQuery(queryId, function (_a) {
                        var subscriptions = _a.subscriptions;
                        return ({
                            subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                        });
                    });
                    reject(error);
                },
                complete: function () {
                    _this.removeFetchQueryPromise(requestId);
                    _this.setQuery(queryId, function (_a) {
                        var subscriptions = _a.subscriptions;
                        return ({
                            subscriptions: subscriptions.filter(function (x) { return x !== subscription; }),
                        });
                    });
                    resolve({
                        data: resultFromStore,
                        errors: errorsFromStore,
                        loading: false,
                        networkStatus: __WEBPACK_IMPORTED_MODULE_10__networkStatus__["a" /* NetworkStatus */].ready,
                        stale: false,
                    });
                },
            });
            _this.setQuery(queryId, function (_a) {
                var subscriptions = _a.subscriptions;
                return ({
                    subscriptions: subscriptions.concat([subscription]),
                });
            });
        });
        return retPromise;
    };
    QueryManager.prototype.refetchQueryByName = function (queryName) {
        var _this = this;
        var refetchedQueries = this.queryIdsByName[queryName];
        if (refetchedQueries === undefined)
            return;
        return Promise.all(refetchedQueries
            .map(function (id) { return _this.getQuery(id).observableQuery; })
            .filter(function (x) { return !!x; })
            .map(function (x) { return x.refetch(); }));
    };
    QueryManager.prototype.generateRequestId = function () {
        var requestId = this.idCounter;
        this.idCounter++;
        return requestId;
    };
    QueryManager.prototype.getQuery = function (queryId) {
        return this.queries.get(queryId) || __assign({}, defaultQueryInfo);
    };
    QueryManager.prototype.setQuery = function (queryId, updater) {
        var prev = this.getQuery(queryId);
        var newInfo = __assign({}, prev, updater(prev));
        this.queries.set(queryId, newInfo);
    };
    QueryManager.prototype.invalidate = function (invalidated, queryId, fetchMoreForQueryId) {
        if (queryId)
            this.setQuery(queryId, function () { return ({ invalidated: invalidated }); });
        if (fetchMoreForQueryId) {
            this.setQuery(fetchMoreForQueryId, function () { return ({ invalidated: invalidated }); });
        }
    };
    QueryManager.prototype.buildOperationForLink = function (document, variables, extraContext) {
        var cache = this.dataStore.getCache();
        return {
            query: cache.transformForLink
                ? cache.transformForLink(document)
                : document,
            variables: variables,
            operationName: Object(__WEBPACK_IMPORTED_MODULE_3_apollo_utilities__["l" /* getOperationName */])(document) || undefined,
            context: __assign({}, extraContext, { cache: cache }),
        };
    };
    return QueryManager;
}());

//# sourceMappingURL=QueryManager.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dedupLink__ = __webpack_require__(196);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dedupLink__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DedupLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(15);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DedupLink = (function (_super) {
    __extends(DedupLink, _super);
    function DedupLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inFlightRequestObservables = new Map();
        _this.subscribers = new Map();
        return _this;
    }
    DedupLink.prototype.request = function (operation, forward) {
        var _this = this;
        if (operation.getContext().forceFetch) {
            return forward(operation);
        }
        var key = operation.toKey();
        var cleanup = function (key) {
            _this.inFlightRequestObservables.delete(key);
            var prev = _this.subscribers.get(key);
            return prev;
        };
        if (!this.inFlightRequestObservables.get(key)) {
            var singleObserver_1 = forward(operation);
            var subscription_1;
            var sharedObserver = new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["b" /* Observable */](function (observer) {
                var prev = _this.subscribers.get(key);
                if (!prev)
                    prev = { next: [], error: [], complete: [] };
                _this.subscribers.set(key, {
                    next: prev.next.concat([observer.next.bind(observer)]),
                    error: prev.error.concat([observer.error.bind(observer)]),
                    complete: prev.complete.concat([observer.complete.bind(observer)]),
                });
                if (!subscription_1) {
                    subscription_1 = singleObserver_1.subscribe({
                        next: function (result) {
                            var prev = cleanup(key);
                            _this.subscribers.delete(key);
                            if (prev) {
                                prev.next.forEach(function (next) { return next(result); });
                                prev.complete.forEach(function (complete) { return complete(); });
                            }
                        },
                        error: function (error) {
                            var prev = cleanup(key);
                            _this.subscribers.delete(key);
                            if (prev)
                                prev.error.forEach(function (err) { return err(error); });
                        },
                    });
                }
                return function () {
                    if (subscription_1)
                        subscription_1.unsubscribe();
                    _this.inFlightRequestObservables.delete(key);
                };
            });
            this.inFlightRequestObservables.set(key, sharedObserver);
        }
        return this.inFlightRequestObservables.get(key);
    };
    return DedupLink;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */]));

//# sourceMappingURL=dedupLink.js.map

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_types__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ObservableQuery__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_networkStatus__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var QueryScheduler = (function () {
    function QueryScheduler(_a) {
        var queryManager = _a.queryManager, ssrMode = _a.ssrMode;
        this.inFlightQueries = {};
        this.registeredQueries = {};
        this.intervalQueries = {};
        this.pollingTimers = {};
        this.ssrMode = false;
        this.queryManager = queryManager;
        this.ssrMode = ssrMode || false;
    }
    QueryScheduler.prototype.checkInFlight = function (queryId) {
        var query = this.queryManager.queryStore.get(queryId);
        return (query &&
            query.networkStatus !== __WEBPACK_IMPORTED_MODULE_2__core_networkStatus__["a" /* NetworkStatus */].ready &&
            query.networkStatus !== __WEBPACK_IMPORTED_MODULE_2__core_networkStatus__["a" /* NetworkStatus */].error);
    };
    QueryScheduler.prototype.fetchQuery = function (queryId, options, fetchType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.queryManager
                .fetchQuery(queryId, options, fetchType)
                .then(function (result) {
                resolve(result);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    QueryScheduler.prototype.startPollingQuery = function (options, queryId, listener) {
        if (!options.pollInterval) {
            throw new Error('Attempted to start a polling query without a polling interval.');
        }
        if (this.ssrMode)
            return queryId;
        this.registeredQueries[queryId] = options;
        if (listener) {
            this.queryManager.addQueryListener(queryId, listener);
        }
        this.addQueryOnInterval(queryId, options);
        return queryId;
    };
    QueryScheduler.prototype.stopPollingQuery = function (queryId) {
        delete this.registeredQueries[queryId];
    };
    QueryScheduler.prototype.fetchQueriesOnInterval = function (interval) {
        var _this = this;
        this.intervalQueries[interval] = this.intervalQueries[interval].filter(function (queryId) {
            if (!(_this.registeredQueries.hasOwnProperty(queryId) &&
                _this.registeredQueries[queryId].pollInterval === interval)) {
                return false;
            }
            if (_this.checkInFlight(queryId)) {
                return true;
            }
            var queryOptions = _this.registeredQueries[queryId];
            var pollingOptions = __assign({}, queryOptions);
            pollingOptions.fetchPolicy = 'network-only';
            _this.fetchQuery(queryId, pollingOptions, __WEBPACK_IMPORTED_MODULE_0__core_types__["a" /* FetchType */].poll).catch(function () { });
            return true;
        });
        if (this.intervalQueries[interval].length === 0) {
            clearInterval(this.pollingTimers[interval]);
            delete this.intervalQueries[interval];
        }
    };
    QueryScheduler.prototype.addQueryOnInterval = function (queryId, queryOptions) {
        var _this = this;
        var interval = queryOptions.pollInterval;
        if (!interval) {
            throw new Error("A poll interval is required to start polling query with id '" + queryId + "'.");
        }
        if (this.intervalQueries.hasOwnProperty(interval.toString()) &&
            this.intervalQueries[interval].length > 0) {
            this.intervalQueries[interval].push(queryId);
        }
        else {
            this.intervalQueries[interval] = [queryId];
            this.pollingTimers[interval] = setInterval(function () {
                _this.fetchQueriesOnInterval(interval);
            }, interval);
        }
    };
    QueryScheduler.prototype.registerPollingQuery = function (queryOptions) {
        if (!queryOptions.pollInterval) {
            throw new Error('Attempted to register a non-polling query with the scheduler.');
        }
        return new __WEBPACK_IMPORTED_MODULE_1__core_ObservableQuery__["a" /* ObservableQuery */]({
            scheduler: this,
            options: queryOptions,
        });
    };
    return QueryScheduler;
}());

//# sourceMappingURL=scheduler.js.map

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MutationStore; });
var MutationStore = (function () {
    function MutationStore() {
        this.store = {};
    }
    MutationStore.prototype.getStore = function () {
        return this.store;
    };
    MutationStore.prototype.get = function (mutationId) {
        return this.store[mutationId];
    };
    MutationStore.prototype.initMutation = function (mutationId, mutationString, variables) {
        this.store[mutationId] = {
            mutationString: mutationString,
            variables: variables || {},
            loading: true,
            error: null,
        };
    };
    MutationStore.prototype.markMutationError = function (mutationId, error) {
        this.store[mutationId].loading = false;
        this.store[mutationId].error = error;
    };
    MutationStore.prototype.markMutationResult = function (mutationId) {
        this.store[mutationId].loading = false;
        this.store[mutationId].error = null;
    };
    MutationStore.prototype.reset = function () {
        this.store = {};
    };
    return MutationStore;
}());

//# sourceMappingURL=mutations.js.map

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__ = __webpack_require__(14);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var QueryStore = (function () {
    function QueryStore() {
        this.store = {};
    }
    QueryStore.prototype.getStore = function () {
        return this.store;
    };
    QueryStore.prototype.get = function (queryId) {
        return this.store[queryId];
    };
    QueryStore.prototype.initQuery = function (query) {
        var previousQuery = this.store[query.queryId];
        if (previousQuery && previousQuery.queryString !== query.queryString) {
            throw new Error('Internal Error: may not update existing query string in store');
        }
        var isSetVariables = false;
        var previousVariables = null;
        if (query.storePreviousVariables &&
            previousQuery &&
            previousQuery.networkStatus !== __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].loading) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["q" /* isEqual */])(previousQuery.variables, query.variables)) {
                isSetVariables = true;
                previousVariables = previousQuery.variables;
            }
        }
        var networkStatus;
        if (isSetVariables) {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].setVariables;
        }
        else if (query.isPoll) {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].poll;
        }
        else if (query.isRefetch) {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].refetch;
        }
        else {
            networkStatus = __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].loading;
        }
        var graphQLErrors = [];
        if (previousQuery && previousQuery.graphQLErrors) {
            graphQLErrors = previousQuery.graphQLErrors;
        }
        this.store[query.queryId] = {
            queryString: query.queryString,
            document: query.document,
            variables: query.variables,
            previousVariables: previousVariables,
            networkError: null,
            graphQLErrors: graphQLErrors,
            networkStatus: networkStatus,
            metadata: query.metadata,
        };
        if (typeof query.fetchMoreForQueryId === 'string') {
            this.store[query.fetchMoreForQueryId].networkStatus =
                __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].fetchMore;
        }
    };
    QueryStore.prototype.markQueryResult = function (queryId, result, fetchMoreForQueryId) {
        if (!this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].graphQLErrors =
            result.errors && result.errors.length ? result.errors : [];
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].ready;
        if (typeof fetchMoreForQueryId === 'string') {
            this.store[fetchMoreForQueryId].networkStatus = __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].ready;
        }
    };
    QueryStore.prototype.markQueryError = function (queryId, error, fetchMoreForQueryId) {
        if (!this.store[queryId])
            return;
        this.store[queryId].networkError = error;
        this.store[queryId].networkStatus = __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].error;
        if (typeof fetchMoreForQueryId === 'string') {
            this.markQueryError(fetchMoreForQueryId, error, undefined);
        }
    };
    QueryStore.prototype.markQueryResultClient = function (queryId, complete) {
        if (!this.store[queryId])
            return;
        this.store[queryId].networkError = null;
        this.store[queryId].previousVariables = null;
        this.store[queryId].networkStatus = complete
            ? __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].ready
            : __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].loading;
    };
    QueryStore.prototype.stopQuery = function (queryId) {
        delete this.store[queryId];
    };
    QueryStore.prototype.reset = function (observableQueryIds) {
        var _this = this;
        this.store = Object.keys(this.store)
            .filter(function (queryId) {
            return observableQueryIds.indexOf(queryId) > -1;
        })
            .reduce(function (res, key) {
            res[key] = __assign({}, _this.store[key], { networkStatus: __WEBPACK_IMPORTED_MODULE_1__core_networkStatus__["a" /* NetworkStatus */].loading });
            return res;
        }, {});
    };
    return QueryStore;
}());

//# sourceMappingURL=queries.js.map

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(1);

var DataStore = (function () {
    function DataStore(initialCache) {
        this.cache = initialCache;
    }
    DataStore.prototype.getCache = function () {
        return this.cache;
    };
    DataStore.prototype.markQueryResult = function (result, document, variables, fetchMoreForQueryId, ignoreErrors) {
        if (ignoreErrors === void 0) { ignoreErrors = false; }
        var writeWithErrors = !Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["o" /* graphQLResultHasError */])(result);
        if (ignoreErrors && Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["o" /* graphQLResultHasError */])(result) && result.data) {
            writeWithErrors = true;
        }
        if (!fetchMoreForQueryId && writeWithErrors) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_QUERY',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markSubscriptionResult = function (result, document, variables) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["o" /* graphQLResultHasError */])(result)) {
            this.cache.write({
                result: result.data,
                dataId: 'ROOT_SUBSCRIPTION',
                query: document,
                variables: variables,
            });
        }
    };
    DataStore.prototype.markMutationInit = function (mutation) {
        var _this = this;
        if (mutation.optimisticResponse) {
            var optimistic_1;
            if (typeof mutation.optimisticResponse === 'function') {
                optimistic_1 = mutation.optimisticResponse(mutation.variables);
            }
            else {
                optimistic_1 = mutation.optimisticResponse;
            }
            var changeFn_1 = function () {
                _this.markMutationResult({
                    mutationId: mutation.mutationId,
                    result: { data: optimistic_1 },
                    document: mutation.document,
                    variables: mutation.variables,
                    updateQueries: mutation.updateQueries,
                    update: mutation.update,
                });
            };
            this.cache.recordOptimisticTransaction(function (c) {
                var orig = _this.cache;
                _this.cache = c;
                try {
                    changeFn_1();
                }
                finally {
                    _this.cache = orig;
                }
            }, mutation.mutationId);
        }
    };
    DataStore.prototype.markMutationResult = function (mutation) {
        var _this = this;
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["o" /* graphQLResultHasError */])(mutation.result)) {
            var cacheWrites_1 = [];
            cacheWrites_1.push({
                result: mutation.result.data,
                dataId: 'ROOT_MUTATION',
                query: mutation.document,
                variables: mutation.variables,
            });
            if (mutation.updateQueries) {
                Object.keys(mutation.updateQueries)
                    .filter(function (id) { return mutation.updateQueries[id]; })
                    .forEach(function (queryId) {
                    var _a = mutation.updateQueries[queryId], query = _a.query, updater = _a.updater;
                    var _b = _this.cache.diff({
                        query: query.document,
                        variables: query.variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _b.result, complete = _b.complete;
                    if (!complete) {
                        return;
                    }
                    var nextQueryResult = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["C" /* tryFunctionOrLogError */])(function () {
                        return updater(currentQueryResult, {
                            mutationResult: mutation.result,
                            queryName: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["l" /* getOperationName */])(query.document) || undefined,
                            queryVariables: query.variables,
                        });
                    });
                    if (nextQueryResult) {
                        cacheWrites_1.push({
                            result: nextQueryResult,
                            dataId: 'ROOT_QUERY',
                            query: query.document,
                            variables: query.variables,
                        });
                    }
                });
            }
            this.cache.performTransaction(function (c) {
                cacheWrites_1.forEach(function (write) { return c.write(write); });
            });
            var update_1 = mutation.update;
            if (update_1) {
                this.cache.performTransaction(function (c) {
                    Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["C" /* tryFunctionOrLogError */])(function () { return update_1(c, mutation.result); });
                });
            }
        }
    };
    DataStore.prototype.markMutationComplete = function (_a) {
        var mutationId = _a.mutationId, optimisticResponse = _a.optimisticResponse;
        if (!optimisticResponse)
            return;
        this.cache.removeOptimistic(mutationId);
    };
    DataStore.prototype.markUpdateQueryResult = function (document, variables, newResult) {
        this.cache.write({
            result: newResult,
            dataId: 'ROOT_QUERY',
            variables: variables,
            query: document,
        });
    };
    DataStore.prototype.reset = function () {
        return this.cache.reset();
    };
    return DataStore;
}());

//# sourceMappingURL=store.js.map

/***/ }),
/* 201 */
/***/ (function(module, exports) {

exports.version = "2.2.0"

/***/ }),
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__httpLink__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__httpLink__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createHttpLink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
var parseAndCheckResponse = function (request) { return function (response) {
    return response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            return Promise.reject(parseError);
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            throwServerError(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!result.hasOwnProperty('data') && !result.hasOwnProperty('errors')) {
            throwServerError(response, result, "Server response was missing for query '" + request.operationName + "'.");
        }
        return result;
    });
}; };
var checkFetcher = function (fetcher) {
    if (fetcher.use) {
        throw new Error("\n      It looks like you're using apollo-fetch! Apollo Link now uses native fetch\n      implementation, so apollo-fetch is not needed. If you want to use your existing\n      apollo-fetch middleware, please check this guide to upgrade:\n        https://github.com/apollographql/apollo-link/blob/master/docs/implementation.md\n    ");
    }
};
var warnIfNoFetch = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        var library = 'unfetch';
        if (typeof window === 'undefined')
            library = 'node-fetch';
        throw new Error("fetch is not found globally and no fetcher passed, to fix pass a fetch for\n      your environment like https://www.npmjs.com/package/" + library + ".\n\n      For example:\n        import fetch from '" + library + "';\n        import { createHttpLink } from 'apollo-link-http';\n\n        const link = createHttpLink({ uri: '/graphql', fetch: fetch });\n      ");
    }
};
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var uri = linkOptions.uri, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, requestOptions = __rest(linkOptions, ["uri", "fetch", "includeExtensions"]);
    warnIfNoFetch(fetcher);
    if (fetcher)
        checkFetcher(fetcher);
    if (!fetcher)
        fetcher = fetch;
    if (!uri)
        uri = '/graphql';
    return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */](function (operation) {
        return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["b" /* Observable */](function (observer) {
            var _a = operation.getContext(), headers = _a.headers, credentials = _a.credentials, _b = _a.fetchOptions, fetchOptions = _b === void 0 ? {} : _b, contextURI = _a.uri, _c = _a.http, httpOptions = _c === void 0 ? {} : _c;
            var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
            var http = __assign({}, defaultHttpOptions, httpOptions);
            var body = { operationName: operationName, variables: variables };
            if (includeExtensions || http.includeExtensions)
                body.extensions = extensions;
            if (http.includeQuery)
                body.query = Object(__WEBPACK_IMPORTED_MODULE_1_graphql_language_printer__["print"])(query);
            var serializedBody;
            try {
                serializedBody = JSON.stringify(body);
            }
            catch (e) {
                var parseError = new Error("Network request failed. Payload is not serializable: " + e.message);
                parseError.parseError = e;
                throw parseError;
            }
            var options = fetchOptions;
            if (requestOptions.fetchOptions)
                options = __assign({}, requestOptions.fetchOptions, options);
            var fetcherOptions = __assign({ method: 'POST' }, options, { headers: {
                    accept: '*/*',
                    'content-type': 'application/json',
                }, body: serializedBody });
            if (requestOptions.credentials)
                fetcherOptions.credentials = requestOptions.credentials;
            if (credentials)
                fetcherOptions.credentials = credentials;
            if (requestOptions.headers)
                fetcherOptions.headers = __assign({}, fetcherOptions.headers, requestOptions.headers);
            if (headers)
                fetcherOptions.headers = __assign({}, fetcherOptions.headers, headers);
            var _d = createSignalIfSupported(), controller = _d.controller, signal = _d.signal;
            if (controller)
                fetcherOptions.signal = signal;
            fetcher(contextURI || uri, fetcherOptions)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(parseAndCheckResponse(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
var HttpLink = (function (_super) {
    __extends(HttpLink, _super);
    function HttpLink(opts) {
        return _super.call(this, createHttpLink(opts).request) || this;
    }
    return HttpLink;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */]));

//# sourceMappingURL=httpLink.js.map

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inMemoryCache__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__inMemoryCache__["a"]; });
/* unused harmony reexport defaultDataIdFromObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__readFromStore__ = __webpack_require__(86);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__writeToStore__ = __webpack_require__(85);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fragmentMatcher__ = __webpack_require__(84);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectCache__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recordingCache__ = __webpack_require__(88);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultDataIdFromObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_cache__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fragmentMatcher__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__writeToStore__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__readFromStore__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objectCache__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recordingCache__ = __webpack_require__(88);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







var defaultConfig = {
    fragmentMatcher: new __WEBPACK_IMPORTED_MODULE_2__fragmentMatcher__["a" /* HeuristicFragmentMatcher */](),
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    storeFactory: __WEBPACK_IMPORTED_MODULE_5__objectCache__["b" /* defaultNormalizedCacheFactory */],
};
function defaultDataIdFromObject(result) {
    if (result.__typename) {
        if (result.id !== undefined) {
            return result.__typename + ":" + result.id;
        }
        if (result._id !== undefined) {
            return result.__typename + ":" + result._id;
        }
    }
    return null;
}
var InMemoryCache = (function (_super) {
    __extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.optimistic = [];
        _this.watches = [];
        _this.silenceBroadcast = false;
        _this.config = __assign({}, defaultConfig, config);
        if (_this.config.customResolvers)
            _this.config.cacheResolvers = _this.config.customResolvers;
        _this.addTypename = _this.config.addTypename ? true : false;
        _this.data = _this.config.storeFactory();
        return _this;
    }
    InMemoryCache.prototype.restore = function (data) {
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        if (optimistic && this.optimistic.length > 0) {
            var patches = this.optimistic.map(function (opt) { return opt.data; });
            return Object.assign.apply(Object, [{}, this.data.toObject()].concat(patches));
        }
        return this.data.toObject();
    };
    InMemoryCache.prototype.read = function (query) {
        if (query.rootId && this.data.get(query.rootId) === undefined) {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_4__readFromStore__["b" /* readQueryFromStore */])({
            store: this.config.storeFactory(this.extract(query.optimistic)),
            query: this.transformDocument(query.query),
            variables: query.variables,
            rootId: query.rootId,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            previousResult: query.previousResult,
            config: this.config,
        });
    };
    InMemoryCache.prototype.write = function (write) {
        Object(__WEBPACK_IMPORTED_MODULE_3__writeToStore__["a" /* writeResultToStore */])({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.diff = function (query) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__readFromStore__["a" /* diffQueryAgainstStore */])({
            store: this.config.storeFactory(this.extract(query.optimistic)),
            query: this.transformDocument(query.query),
            variables: query.variables,
            returnPartialData: query.returnPartialData,
            previousResult: query.previousResult,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            config: this.config,
        });
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        this.watches.push(watch);
        return function () {
            _this.watches = _this.watches.filter(function (c) { return c !== watch; });
        };
    };
    InMemoryCache.prototype.evict = function (query) {
        throw new Error("eviction is not implemented on InMemory Cache");
    };
    InMemoryCache.prototype.reset = function () {
        this.data.clear();
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (id) {
        var _this = this;
        var toPerform = this.optimistic.filter(function (item) { return item.id !== id; });
        this.optimistic = [];
        toPerform.forEach(function (change) {
            _this.recordOptimisticTransaction(change.transaction, change.id);
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.performTransaction = function (transaction) {
        var alreadySilenced = this.silenceBroadcast;
        this.silenceBroadcast = true;
        transaction(this);
        if (!alreadySilenced) {
            this.silenceBroadcast = false;
        }
        this.broadcastWatches();
    };
    InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
        var _this = this;
        this.silenceBroadcast = true;
        var patch = Object(__WEBPACK_IMPORTED_MODULE_6__recordingCache__["a" /* record */])(this.extract(true), function (recordingCache) {
            var dataCache = _this.data;
            _this.data = recordingCache;
            _this.performTransaction(transaction);
            _this.data = dataCache;
        });
        this.optimistic.push({
            id: id,
            transaction: transaction,
            data: patch,
        });
        this.silenceBroadcast = false;
        this.broadcastWatches();
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename)
            return Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["a" /* addTypenameToDocument */])(document);
        return document;
    };
    InMemoryCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    InMemoryCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: this.transformDocument(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName)),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    InMemoryCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: this.transformDocument(options.query),
            variables: options.variables,
        });
    };
    InMemoryCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            query: this.transformDocument(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName)),
            variables: options.variables,
        });
    };
    InMemoryCache.prototype.broadcastWatches = function () {
        var _this = this;
        if (this.silenceBroadcast)
            return;
        this.watches.forEach(function (c) {
            var newData = _this.diff({
                query: c.query,
                variables: c.variables,
                previousResult: c.previousResult && c.previousResult(),
                optimistic: c.optimistic,
            });
            c.callback(newData);
        });
    };
    return InMemoryCache;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_cache__["a" /* ApolloCache */]));

//# sourceMappingURL=inMemoryCache.js.map

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(212);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(211);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var ApolloCache = (function () {
    function ApolloCache() {
    }
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName),
        });
    };
    ApolloCache.prototype.writeData = function (_a) {
        var id = _a.id, data = _a.data;
        if (id) {
            var typenameResult = null;
            try {
                typenameResult = this.read({
                    rootId: id,
                    optimistic: false,
                    query: __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* justTypenameQuery */],
                });
            }
            catch (e) {
            }
            var __typename = (typenameResult && typenameResult.__typename) || '__ClientData';
            var dataToWrite = __assign({ __typename: __typename }, data);
            this.writeFragment({
                id: id,
                fragment: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* fragmentFromPojo */])(dataToWrite, __typename),
                data: dataToWrite,
            });
        }
        else {
            this.writeQuery({ query: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* queryFromPojo */])(data), data: data });
        }
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = queryFromPojo;
/* harmony export (immutable) */ __webpack_exports__["a"] = fragmentFromPojo;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return justTypenameQuery; });
function queryFromPojo(obj) {
    var op = {
        kind: 'OperationDefinition',
        operation: 'query',
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [op],
    };
    return out;
}
function fragmentFromPojo(obj, typename) {
    var frag = {
        kind: 'FragmentDefinition',
        typeCondition: {
            kind: 'NamedType',
            name: {
                kind: 'Name',
                value: typename || '__FakeType',
            },
        },
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [frag],
    };
    return out;
}
function selectionSetFromObj(obj) {
    if (typeof obj === 'number' ||
        typeof obj === 'boolean' ||
        typeof obj === 'string' ||
        typeof obj === 'undefined' ||
        obj === null) {
        return null;
    }
    if (Array.isArray(obj)) {
        return selectionSetFromObj(obj[0]);
    }
    var selections = [];
    Object.keys(obj).forEach(function (key) {
        var field = {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: key,
            },
        };
        var nestedSelSet = selectionSetFromObj(obj[key]);
        if (nestedSelSet) {
            field.selectionSet = nestedSelSet;
        }
        selections.push(field);
    });
    var selectionSet = {
        kind: 'SelectionSet',
        selections: selections,
    };
    return selectionSet;
}
var justTypenameQuery = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: null,
            variableDefinitions: null,
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: null,
                        name: {
                            kind: 'Name',
                            value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null,
                    },
                ],
            },
        },
    ],
};
//# sourceMappingURL=utils.js.map

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cache__ = __webpack_require__(213);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cache */
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));
//# sourceMappingURL=Cache.js.map

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities__ = __webpack_require__(215);
/* unused harmony reexport filter */
/* unused harmony reexport check */
/* unused harmony reexport propType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql__ = __webpack_require__(87);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__graphql__["a" /* graphql */]);
//# sourceMappingURL=index.js.map

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export filter */
/* unused harmony export check */
/* unused harmony export propType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql__ = __webpack_require__(87);

function filter(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        return root[info.resultKey];
    };
    return Object(__WEBPACK_IMPORTED_MODULE_0__graphql__["a" /* graphql */])(resolver, doc, data);
}
function check(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        if (!{}.hasOwnProperty.call(root, info.resultKey)) {
            throw new Error(info.resultKey + " missing on " + root);
        }
        return root[info.resultKey];
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__graphql__["a" /* graphql */])(resolver, doc, data, {}, {}, {
        fragmentMatcher: function () { return false; },
    });
}
var ANONYMOUS = '<<anonymous>>';
function PropTypeError(message) {
    this.message = message;
    this.stack = '';
}
PropTypeError.prototype = Error.prototype;
var reactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context',
};
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (props[propName] == null) {
            var locationName = reactPropTypeLocationNames[location];
            if (isRequired) {
                if (props[propName] === null) {
                    return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required " +
                        ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required in " +
                    ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
        }
        else {
            return validate(props, propName, componentName, location, propFullName);
        }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function propType(doc) {
    return createChainableTypeChecker(function (props, propName) {
        var prop = props[propName];
        try {
            check(doc, prop);
            return null;
        }
        catch (e) {
            return e;
        }
    });
}
//# sourceMappingURL=utilities.js.map

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _grommet = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"grommet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _grommet.App,
        null,
        _react2.default.createElement(
          _grommet.Article,
          null,
          _react2.default.createElement(
            _grommet.Header,
            { fixed: false,
              float: false,
              size: 'medium',
              splash: false },
            _react2.default.createElement(
              _grommet.Title,
              null,
              'Budget Badger'
            ),
            _react2.default.createElement(_grommet.Box, { flex: true,
              justify: 'end',
              direction: 'row',
              responsive: false })
          ),
          _react2.default.createElement(_grommet.Section, null),
          _react2.default.createElement(
            _grommet.Footer,
            { justify: 'between',
              size: 'medium' },
            _react2.default.createElement(
              _grommet.Title,
              null,
              'Budget Badger'
            ),
            _react2.default.createElement(
              _grommet.Box,
              { direction: 'row',
                align: 'center',
                pad: { "between": "medium" } },
              _react2.default.createElement(
                _grommet.Paragraph,
                { margin: 'none' },
                '\xA9 2018 Turba Priami'
              ),
              _react2.default.createElement(
                _grommet.Menu,
                { direction: 'row',
                  size: 'small',
                  dropAlign: { "right": "right" } },
                _react2.default.createElement(
                  _grommet.Anchor,
                  { href: '#' },
                  'Support'
                ),
                _react2.default.createElement(
                  _grommet.Anchor,
                  { href: '#' },
                  'Contact'
                ),
                _react2.default.createElement(
                  _grommet.Anchor,
                  { href: '#' },
                  'About'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

/***/ })
/******/ ]);