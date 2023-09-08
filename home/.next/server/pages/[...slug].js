/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[...slug]";
exports.ids = ["pages/[...slug]"];
exports.modules = {

/***/ "./pages/[...slug].js":
/*!****************************!*\
  !*** ./pages/[...slug].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nextjs_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-shared */ \"../shared/index.js\");\n/* harmony import */ var nextjs_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_shared__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,nextjs_shared__WEBPACK_IMPORTED_MODULE_0__.createFederatedCatchAll)());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdEO0FBRXhELGlFQUFlQSxzRUFBdUJBLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vcGFnZXMvWy4uLnNsdWddLmpzP2E2MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwgfSBmcm9tIFwibmV4dGpzLXNoYXJlZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGZWRlcmF0ZWRDYXRjaEFsbCgpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUZlZGVyYXRlZENhdGNoQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...slug].js\n");

/***/ }),

/***/ "../shared/index.js":
/*!**************************!*\
  !*** ../shared/index.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const React = __webpack_require__(/*! react */ \"react\");\nconst createMatcher = __webpack_require__(/*! feather-route-matcher */ \"feather-route-matcher\");\nconst { injectScript } = __webpack_require__(/*! @module-federation/nextjs-mf/utils */ \"@module-federation/nextjs-mf/utils\");\nconst remoteVars = process.env.REMOTES || {};\nconst remotes = Object.entries(remoteVars).reduce((acc, item) => {\n  const [key, value] = item;\n  if (typeof value !== \"string\") {\n    acc[key] = {\n      global: value,\n    };\n    return acc;\n  }\n  const [global, url] = value.split(\"@\");\n\n  acc[key] = {\n    url,\n    global,\n  };\n  return acc;\n}, {});\n\nasync function matchFederatedPage(path) {\n  const maps = await Promise.all(\n    Object.keys(remotes).map(async (remote) => {\n      const foundContainer = injectScript(remote);\n      const container = await foundContainer;\n\n      return container\n        .get(\"./pages-map\")\n        .then((factory) => ({ remote, config: factory().default }))\n        .catch(() => null);\n    })\n  );\n\n  const config = {};\n\n  for (const map of maps) {\n    if (!map) continue;\n\n    for (let [path, mod] of Object.entries(map.config)) {\n      config[path] = {\n        remote: map.remote,\n        module: mod,\n      };\n    }\n  }\n\n  console.log(config);\n  const matcher = createMatcher.default(config);\n  return matcher(path);\n}\n\nmodule.exports = {\n  matchFederatedPage,\n  createFederatedCatchAll() {\n    const FederatedCatchAll = (initialProps) => {\n      const [lazyProps, setProps] = React.useState({});\n\n      const { FederatedPage, render404, renderError, needsReload, ...props } = {\n        ...lazyProps,\n        ...initialProps,\n      };\n      React.useEffect(() => {\n        if (needsReload) {\n          const runUnderlayingGIP = async () => {\n            const federatedProps = await FederatedCatchAll.getInitialProps(\n              props\n            );\n            setProps(federatedProps);\n          };\n          runUnderlayingGIP();\n        }\n      }, []);\n\n      if (render404) {\n        // TODO: Render 404 page\n        return React.createElement(\"h1\", {}, \"404 Not Found\");\n      }\n      if (renderError) {\n        // TODO: Render error page\n        return React.createElement(\"h1\", {}, \"Oops, something went wrong.\");\n      }\n\n      if (FederatedPage) {\n        return React.createElement(FederatedPage, props);\n      }\n\n      return null;\n    };\n\n    FederatedCatchAll.getInitialProps = async (ctx) => {\n      // Bot marks \"req, res, AppTree\" as unused but those are vital to not get circular-dependency error\n      const { err, req, res, AppTree, ...props } = ctx;\n      if (err) {\n        // TODO: Run getInitialProps for error page\n        return { renderError: true, ...props };\n      }\n      if (true) {\n        return { needsReload: true, ...props };\n      }\n\n      console.log(\"in browser\");\n      const matchedPage = await matchFederatedPage(ctx.asPath);\n\n      try {\n        console.log(\"matchedPage\", matchedPage);\n        const remote = matchedPage?.value?.remote;\n        const mod = matchedPage?.value?.module;\n\n        if (!remote || !mod) {\n          // TODO: Run getInitialProps for 404 page\n          return { render404: true, ...props };\n        }\n\n        console.log(\"loading exposed module\", mod, \"from remote\", remote);\n        const container = await injectScript(remote);\n        const FederatedPage = await container\n          .get(mod)\n          .then((factory) => factory().default);\n        console.log(\"FederatedPage\", FederatedPage);\n        if (!FederatedPage) {\n          // TODO: Run getInitialProps for 404 page\n          return { render404: true, ...props };\n        }\n\n        const modifiedContext = {\n          ...ctx,\n          query: matchedPage.params,\n        };\n        const federatedPageProps =\n          (await FederatedPage.getInitialProps?.(modifiedContext)) || {};\n        return { ...federatedPageProps, FederatedPage };\n      } catch (err) {\n        console.log(\"err\", err);\n        // TODO: Run getInitialProps for error page\n        return { renderError: true, ...props };\n      }\n    };\n\n    return FederatedCatchAll;\n  },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2hhcmVkL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGNBQWMsbUJBQU8sQ0FBQyxvQkFBTztBQUM3QixzQkFBc0IsbUJBQU8sQ0FBQyxvREFBdUI7QUFDckQsUUFBUSxlQUFlLEVBQUUsbUJBQU8sQ0FBQyw4RUFBb0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsbUNBQW1DO0FBQ2pFO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7O0FBRXJELGNBQWMsK0RBQStEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFVBQVUsSUFBZ0I7QUFDMUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS8uLi9zaGFyZWQvaW5kZXguanM/MDA0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGNyZWF0ZU1hdGNoZXIgPSByZXF1aXJlKFwiZmVhdGhlci1yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3QgeyBpbmplY3RTY3JpcHQgfSA9IHJlcXVpcmUoXCJAbW9kdWxlLWZlZGVyYXRpb24vbmV4dGpzLW1mL3V0aWxzXCIpO1xuY29uc3QgcmVtb3RlVmFycyA9IHByb2Nlc3MuZW52LlJFTU9URVMgfHwge307XG5jb25zdCByZW1vdGVzID0gT2JqZWN0LmVudHJpZXMocmVtb3RlVmFycykucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcbiAgY29uc3QgW2tleSwgdmFsdWVdID0gaXRlbTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIGFjY1trZXldID0ge1xuICAgICAgZ2xvYmFsOiB2YWx1ZSxcbiAgICB9O1xuICAgIHJldHVybiBhY2M7XG4gIH1cbiAgY29uc3QgW2dsb2JhbCwgdXJsXSA9IHZhbHVlLnNwbGl0KFwiQFwiKTtcblxuICBhY2Nba2V5XSA9IHtcbiAgICB1cmwsXG4gICAgZ2xvYmFsLFxuICB9O1xuICByZXR1cm4gYWNjO1xufSwge30pO1xuXG5hc3luYyBmdW5jdGlvbiBtYXRjaEZlZGVyYXRlZFBhZ2UocGF0aCkge1xuICBjb25zdCBtYXBzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgT2JqZWN0LmtleXMocmVtb3RlcykubWFwKGFzeW5jIChyZW1vdGUpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kQ29udGFpbmVyID0gaW5qZWN0U2NyaXB0KHJlbW90ZSk7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBhd2FpdCBmb3VuZENvbnRhaW5lcjtcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lclxuICAgICAgICAuZ2V0KFwiLi9wYWdlcy1tYXBcIilcbiAgICAgICAgLnRoZW4oKGZhY3RvcnkpID0+ICh7IHJlbW90ZSwgY29uZmlnOiBmYWN0b3J5KCkuZGVmYXVsdCB9KSlcbiAgICAgICAgLmNhdGNoKCgpID0+IG51bGwpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3QgY29uZmlnID0ge307XG5cbiAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xuICAgIGlmICghbWFwKSBjb250aW51ZTtcblxuICAgIGZvciAobGV0IFtwYXRoLCBtb2RdIG9mIE9iamVjdC5lbnRyaWVzKG1hcC5jb25maWcpKSB7XG4gICAgICBjb25maWdbcGF0aF0gPSB7XG4gICAgICAgIHJlbW90ZTogbWFwLnJlbW90ZSxcbiAgICAgICAgbW9kdWxlOiBtb2QsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKGNvbmZpZyk7XG4gIGNvbnN0IG1hdGNoZXIgPSBjcmVhdGVNYXRjaGVyLmRlZmF1bHQoY29uZmlnKTtcbiAgcmV0dXJuIG1hdGNoZXIocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYXRjaEZlZGVyYXRlZFBhZ2UsXG4gIGNyZWF0ZUZlZGVyYXRlZENhdGNoQWxsKCkge1xuICAgIGNvbnN0IEZlZGVyYXRlZENhdGNoQWxsID0gKGluaXRpYWxQcm9wcykgPT4ge1xuICAgICAgY29uc3QgW2xhenlQcm9wcywgc2V0UHJvcHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xuXG4gICAgICBjb25zdCB7IEZlZGVyYXRlZFBhZ2UsIHJlbmRlcjQwNCwgcmVuZGVyRXJyb3IsIG5lZWRzUmVsb2FkLCAuLi5wcm9wcyB9ID0ge1xuICAgICAgICAuLi5sYXp5UHJvcHMsXG4gICAgICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAgIH07XG4gICAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobmVlZHNSZWxvYWQpIHtcbiAgICAgICAgICBjb25zdCBydW5VbmRlcmxheWluZ0dJUCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZlZGVyYXRlZFByb3BzID0gYXdhaXQgRmVkZXJhdGVkQ2F0Y2hBbGwuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBwcm9wc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldFByb3BzKGZlZGVyYXRlZFByb3BzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJ1blVuZGVybGF5aW5nR0lQKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIFtdKTtcblxuICAgICAgaWYgKHJlbmRlcjQwNCkge1xuICAgICAgICAvLyBUT0RPOiBSZW5kZXIgNDA0IHBhZ2VcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7fSwgXCI0MDQgTm90IEZvdW5kXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlbmRlckVycm9yKSB7XG4gICAgICAgIC8vIFRPRE86IFJlbmRlciBlcnJvciBwYWdlXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge30sIFwiT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcuXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoRmVkZXJhdGVkUGFnZSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGZWRlcmF0ZWRQYWdlLCBwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBGZWRlcmF0ZWRDYXRjaEFsbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgICAvLyBCb3QgbWFya3MgXCJyZXEsIHJlcywgQXBwVHJlZVwiIGFzIHVudXNlZCBidXQgdGhvc2UgYXJlIHZpdGFsIHRvIG5vdCBnZXQgY2lyY3VsYXItZGVwZW5kZW5jeSBlcnJvclxuICAgICAgY29uc3QgeyBlcnIsIHJlcSwgcmVzLCBBcHBUcmVlLCAuLi5wcm9wcyB9ID0gY3R4O1xuICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciBlcnJvciBwYWdlXG4gICAgICAgIHJldHVybiB7IHJlbmRlckVycm9yOiB0cnVlLCAuLi5wcm9wcyB9O1xuICAgICAgfVxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgbmVlZHNSZWxvYWQ6IHRydWUsIC4uLnByb3BzIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiaW4gYnJvd3NlclwiKTtcbiAgICAgIGNvbnN0IG1hdGNoZWRQYWdlID0gYXdhaXQgbWF0Y2hGZWRlcmF0ZWRQYWdlKGN0eC5hc1BhdGgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1hdGNoZWRQYWdlXCIsIG1hdGNoZWRQYWdlKTtcbiAgICAgICAgY29uc3QgcmVtb3RlID0gbWF0Y2hlZFBhZ2U/LnZhbHVlPy5yZW1vdGU7XG4gICAgICAgIGNvbnN0IG1vZCA9IG1hdGNoZWRQYWdlPy52YWx1ZT8ubW9kdWxlO1xuXG4gICAgICAgIGlmICghcmVtb3RlIHx8ICFtb2QpIHtcbiAgICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciA0MDQgcGFnZVxuICAgICAgICAgIHJldHVybiB7IHJlbmRlcjQwNDogdHJ1ZSwgLi4ucHJvcHMgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9hZGluZyBleHBvc2VkIG1vZHVsZVwiLCBtb2QsIFwiZnJvbSByZW1vdGVcIiwgcmVtb3RlKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gYXdhaXQgaW5qZWN0U2NyaXB0KHJlbW90ZSk7XG4gICAgICAgIGNvbnN0IEZlZGVyYXRlZFBhZ2UgPSBhd2FpdCBjb250YWluZXJcbiAgICAgICAgICAuZ2V0KG1vZClcbiAgICAgICAgICAudGhlbigoZmFjdG9yeSkgPT4gZmFjdG9yeSgpLmRlZmF1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZlZGVyYXRlZFBhZ2VcIiwgRmVkZXJhdGVkUGFnZSk7XG4gICAgICAgIGlmICghRmVkZXJhdGVkUGFnZSkge1xuICAgICAgICAgIC8vIFRPRE86IFJ1biBnZXRJbml0aWFsUHJvcHMgZm9yIDQwNCBwYWdlXG4gICAgICAgICAgcmV0dXJuIHsgcmVuZGVyNDA0OiB0cnVlLCAuLi5wcm9wcyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZWRDb250ZXh0ID0ge1xuICAgICAgICAgIC4uLmN0eCxcbiAgICAgICAgICBxdWVyeTogbWF0Y2hlZFBhZ2UucGFyYW1zLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmZWRlcmF0ZWRQYWdlUHJvcHMgPVxuICAgICAgICAgIChhd2FpdCBGZWRlcmF0ZWRQYWdlLmdldEluaXRpYWxQcm9wcz8uKG1vZGlmaWVkQ29udGV4dCkpIHx8IHt9O1xuICAgICAgICByZXR1cm4geyAuLi5mZWRlcmF0ZWRQYWdlUHJvcHMsIEZlZGVyYXRlZFBhZ2UgfTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xuICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciBlcnJvciBwYWdlXG4gICAgICAgIHJldHVybiB7IHJlbmRlckVycm9yOiB0cnVlLCAuLi5wcm9wcyB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRmVkZXJhdGVkQ2F0Y2hBbGw7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../shared/index.js\n");

/***/ }),

/***/ "@module-federation/nextjs-mf/utils":
/*!*****************************************************!*\
  !*** external "@module-federation/nextjs-mf/utils" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@module-federation/nextjs-mf/utils");

/***/ }),

/***/ "feather-route-matcher":
/*!****************************************!*\
  !*** external "feather-route-matcher" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("feather-route-matcher");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[...slug].js"));
module.exports = __webpack_exports__;

})();