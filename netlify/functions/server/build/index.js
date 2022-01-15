var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/matthewalbrecht/Documents/ws/playground/cleanest-doodle/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_remix3 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZQDBXT7A.css";

// route-module:/Users/matthewalbrecht/Documents/ws/playground/cleanest-doodle/app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Lato:wght@400;700&display=swap"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "font-body"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "min-h-screen bg-gradient-to-b from-doodlesBg-1 via-doodlesBg-3  to-doodlesBg-5"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), true ? /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null) : null, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}

// route-module:/Users/matthewalbrecht/Documents/ws/playground/cleanest-doodle/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => IndexRoute,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route-module:/Users/matthewalbrecht/Documents/ws/playground/cleanest-doodle/app/routes/index.tsx
var getRandomNumber = (n) => Math.floor(Math.random() * n);
var loader = async () => {
  let count = await db.doodle.count();
  let leaderboardData = await db.doodle.findMany({
    orderBy: [{ votesFor: { _count: "desc" } }],
    take: 15,
    select: {
      tokenId: true,
      imageUrl: true,
      id: true,
      _count: {
        select: {
          votesFor: true,
          votesAgainst: true
        }
      }
    }
  });
  let newLeaderboardData = leaderboardData.map((dood) => __spreadProps(__spreadValues({}, dood), {
    winPct: dood._count.votesAgainst + dood._count.votesFor === 0 ? 0 : dood._count.votesFor / (dood._count.votesAgainst + dood._count.votesFor) * 100
  }));
  let data = {
    dood1: await db.doodle.findUnique({
      where: { tokenId: getRandomNumber(count) },
      select: { tokenId: true, imageUrl: true, id: true }
    }),
    dood2: await db.doodle.findUnique({
      where: { tokenId: getRandomNumber(count) },
      select: { tokenId: true, imageUrl: true, id: true }
    }),
    leaderboard: newLeaderboardData
  };
  return data;
};
var badRequest = (data) => (0, import_remix4.json)(data, { status: 400 });
var action = async ({ request }) => {
  const form = await request.formData();
  const selectedId = form.get("doodle-radio");
  const dood1Id = form.get("dood-1-id");
  const dood2Id = form.get("dood-2-id");
  if (typeof selectedId !== "string" || typeof dood1Id !== "string" || typeof dood2Id !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  await db.vote.create({
    data: {
      voteForId: selectedId,
      voteAgainstId: dood1Id === selectedId ? dood2Id : dood1Id
    }
  });
  return (0, import_remix4.redirect)("/");
};
function IndexRoute() {
  const submit = (0, import_remix4.useSubmit)();
  const data = (0, import_remix4.useLoaderData)();
  async function handleChange(e) {
    submit(e.currentTarget, { replace: true });
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("nav", {
    className: "py-4 flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-white divide-y-2 divide-white/50 space-y-2 font-display text-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Doodles"), /* @__PURE__ */ React.createElement("img", {
    className: "h-10",
    src: "images/doodles-logo.svg"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "block pt-1"
  }, "Cleanliness Rater")))), /* @__PURE__ */ React.createElement("main", {
    className: "mt-12 container mx-auto"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-5xl text-white text-center"
  }, "Which dood is", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-doodles-green via-doodles-orange to-doodles-pink"
  }, "cleaner?")), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post",
    onChange: handleChange
  }, (data == null ? void 0 : data.dood1) && data.dood2 && /* @__PURE__ */ React.createElement("div", {
    className: "m-16"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "dood-1-id",
    value: data.dood1.id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "dood-2-id",
    value: data.dood2.id
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-20 grid-cols-2"
  }, /* @__PURE__ */ React.createElement(DoodleRadio, {
    dood: data.dood1
  }), /* @__PURE__ */ React.createElement(DoodleRadio, {
    dood: data.dood2
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-20"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-doodles-green via-doodles-orange to-doodles-pink"
  }, "Leaderboards"), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-8 mx-auto max-w-md divide-y-2 divide-white/25"
  }, data.leaderboard.map((dood, index) => /* @__PURE__ */ React.createElement("li", {
    key: dood.tokenId,
    className: "py-4 flex justify-between items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-20 rounded-lg",
    src: `${dood.imageUrl}=s128`
  }), /* @__PURE__ */ React.createElement("span", {
    className: "ml-4 text-white"
  }, "Doodles #", dood.tokenId)), /* @__PURE__ */ React.createElement("p", {
    className: "text-white text-xl"
  }, dood.winPct, "%")))))));
}
function DoodleRadio({
  dood
}) {
  const inputId = `doodle-${dood.tokenId}`;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: inputId
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "doodle number ", dood.tokenId), /* @__PURE__ */ React.createElement("input", {
    id: inputId,
    type: "radio",
    className: "hidden peer",
    name: "doodle-radio",
    value: dood.id
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white hover:bg-white/95 p-4 rounded-lg peer-checked:p-2 peer-checked:border-8 peer-checked:border-doodles-green"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-auto rounded-lg",
    src: `${dood.imageUrl}=s512`
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "py-4 -mb-4 text-right leading-none text-xl font-bold text-indigo-900"
  }, "#", dood.tokenId))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXR0aGV3YWxicmVjaHQvRG9jdW1lbnRzL3dzL3BsYXlncm91bmQvY2xlYW5lc3QtZG9vZGxlL2FwcC9yb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hdHRoZXdhbGJyZWNodC9Eb2N1bWVudHMvd3MvcGxheWdyb3VuZC9jbGVhbmVzdC1kb29kbGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3V0aWxzL2RiLnNlcnZlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hdHRoZXdhbGJyZWNodC9Eb2N1bWVudHMvd3MvcGxheWdyb3VuZC9jbGVhbmVzdC1kb29kbGUvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hdHRoZXdhbGJyZWNodC9Eb2N1bWVudHMvd3MvcGxheWdyb3VuZC9jbGVhbmVzdC1kb29kbGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tYXR0aGV3YWxicmVjaHQvRG9jdW1lbnRzL3dzL3BsYXlncm91bmQvY2xlYW5lc3QtZG9vZGxlL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBTY3JpcHRzIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgTGl2ZVJlbG9hZCwgT3V0bGV0LCBMaW5rcyB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHRhaWx3aW5kVXJsIGZyb20gJy4vdGFpbHdpbmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogdGFpbHdpbmRVcmwsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVjb25uZWN0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWNvbm5lY3QnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOndnaHRANzAwJmZhbWlseT1MYXRvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnLFxuICAgIH0sXG4gIF07XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImZvbnQtYm9keVwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5SZW1peDogU28gZ3JlYXQsIGl0J3MgZnVubnkhPC90aXRsZT5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLWRvb2RsZXNCZy0xIHZpYS1kb29kbGVzQmctMyAgdG8tZG9vZGxlc0JnLTVcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IERvb2RsZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIGpzb24sXG4gIHJlZGlyZWN0LFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VTdWJtaXQsXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuXG4vKipcbiAqIHJldHVybnMgbnVtYmVyIGJldHdlZW4gMCAtIG5cbiAqL1xuY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG46IG51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgZG9vZDE6IFBpY2s8RG9vZGxlLCAnaWQnIHwgJ3Rva2VuSWQnIHwgJ2ltYWdlVXJsJz4gfCBudWxsO1xuICBkb29kMjogUGljazxEb29kbGUsICdpZCcgfCAndG9rZW5JZCcgfCAnaW1hZ2VVcmwnPiB8IG51bGw7XG4gIGxlYWRlcmJvYXJkOiAoUGljazxEb29kbGUsICd0b2tlbklkJyB8ICdpbWFnZVVybCcgfCAnaWQnPiAmIHtcbiAgICB3aW5QY3Q6IG51bWJlcjtcbiAgfSlbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gIGxldCBjb3VudCA9IGF3YWl0IGRiLmRvb2RsZS5jb3VudCgpO1xuICBsZXQgbGVhZGVyYm9hcmREYXRhID0gYXdhaXQgZGIuZG9vZGxlLmZpbmRNYW55KHtcbiAgICBvcmRlckJ5OiBbeyB2b3Rlc0ZvcjogeyBfY291bnQ6ICdkZXNjJyB9IH1dLFxuICAgIHRha2U6IDE1LFxuICAgIHNlbGVjdDoge1xuICAgICAgdG9rZW5JZDogdHJ1ZSxcbiAgICAgIGltYWdlVXJsOiB0cnVlLFxuICAgICAgaWQ6IHRydWUsXG4gICAgICBfY291bnQ6IHtcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgdm90ZXNGb3I6IHRydWUsXG4gICAgICAgICAgdm90ZXNBZ2FpbnN0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICBsZXQgbmV3TGVhZGVyYm9hcmREYXRhID0gbGVhZGVyYm9hcmREYXRhLm1hcCgoZG9vZCkgPT4gKHtcbiAgICAuLi5kb29kLFxuICAgIHdpblBjdDpcbiAgICAgIGRvb2QuX2NvdW50LnZvdGVzQWdhaW5zdCArIGRvb2QuX2NvdW50LnZvdGVzRm9yID09PSAwXG4gICAgICAgID8gMFxuICAgICAgICA6IChkb29kLl9jb3VudC52b3Rlc0ZvciAvXG4gICAgICAgICAgICAoZG9vZC5fY291bnQudm90ZXNBZ2FpbnN0ICsgZG9vZC5fY291bnQudm90ZXNGb3IpKSAqXG4gICAgICAgICAgMTAwLFxuICB9KSk7XG5cbiAgbGV0IGRhdGEgPSB7XG4gICAgZG9vZDE6IGF3YWl0IGRiLmRvb2RsZS5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IHRva2VuSWQ6IGdldFJhbmRvbU51bWJlcihjb3VudCkgfSxcbiAgICAgIHNlbGVjdDogeyB0b2tlbklkOiB0cnVlLCBpbWFnZVVybDogdHJ1ZSwgaWQ6IHRydWUgfSxcbiAgICB9KSxcbiAgICBkb29kMjogYXdhaXQgZGIuZG9vZGxlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgdG9rZW5JZDogZ2V0UmFuZG9tTnVtYmVyKGNvdW50KSB9LFxuICAgICAgc2VsZWN0OiB7IHRva2VuSWQ6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBpZDogdHJ1ZSB9LFxuICAgIH0pLFxuICAgIGxlYWRlcmJvYXJkOiBuZXdMZWFkZXJib2FyZERhdGEsXG4gIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIHRva2VuSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIHRva2VuSWQ6IHN0cmluZztcbiAgfTtcbn07XG4vLyBwaWNrIHR3byB1bmlxdWUgcmFuZG9tIG51bWJlcnMgYmV0d2VlbiAwLTk5OTlcbi8vIGdyYWIgdGhlIGltYWdlIHcvIHNpemUgc2V0IHRvIDUxMiBhcHBlbmQgPXM1MTIgdG8gaW1hZ2VVcmxcbi8vIHNlbmQgdGhhdCBpbmZvIHRocm91Z2ggdGhlIGxvYWRlclxuY29uc3QgYmFkUmVxdWVzdCA9IChkYXRhOiBBY3Rpb25EYXRhKSA9PiBqc29uKGRhdGEsIHsgc3RhdHVzOiA0MDAgfSk7XG4vLyB1cG9uIGNsaWNraW5nIG9uZSBvZiB0aGUgaW1hZ2VzIGl0IHNob3VsZCBzdWJtaXQgYSBmb3JtIHRoYXQgaW5jcmVtZW50cyB0aGUgcG9wdWxhcml0eUluZGV4IGJ5IDFcbi8vIGFuZCB0aGVuIGl0IHNob3VsZCBncmFiIHRoZSBuZXh0IHR3byByYW5kb20gZG9vZHNcbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3Qgc2VsZWN0ZWRJZCA9IGZvcm0uZ2V0KCdkb29kbGUtcmFkaW8nKTtcbiAgY29uc3QgZG9vZDFJZCA9IGZvcm0uZ2V0KCdkb29kLTEtaWQnKTtcbiAgY29uc3QgZG9vZDJJZCA9IGZvcm0uZ2V0KCdkb29kLTItaWQnKTtcblxuICBpZiAoXG4gICAgdHlwZW9mIHNlbGVjdGVkSWQgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIGRvb2QxSWQgIT09ICdzdHJpbmcnIHx8XG4gICAgdHlwZW9mIGRvb2QySWQgIT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgIGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCxcbiAgICB9KTtcbiAgfVxuXG4gIGF3YWl0IGRiLnZvdGUuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICB2b3RlRm9ySWQ6IHNlbGVjdGVkSWQsXG4gICAgICB2b3RlQWdhaW5zdElkOiBkb29kMUlkID09PSBzZWxlY3RlZElkID8gZG9vZDJJZCA6IGRvb2QxSWQsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZWRpcmVjdCgnLycpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhSb3V0ZSgpIHtcbiAgY29uc3Qgc3VibWl0ID0gdXNlU3VibWl0KCk7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgc3VibWl0KGUuY3VycmVudFRhcmdldCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZSBkaXZpZGUteS0yIGRpdmlkZS13aGl0ZS81MCBzcGFjZS15LTIgZm9udC1kaXNwbGF5IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RG9vZGxlczwvc3Bhbj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwXCIgc3JjPVwiaW1hZ2VzL2Rvb2RsZXMtbG9nby5zdmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBwdC0xXCI+Q2xlYW5saW5lc3MgUmF0ZXI8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTEyIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgV2hpY2ggZG9vZCBpc3snICd9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1kb29kbGVzLWdyZWVuIHZpYS1kb29kbGVzLW9yYW5nZSB0by1kb29kbGVzLXBpbmtcIj5cbiAgICAgICAgICAgIGNsZWFuZXI/XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAge2RhdGE/LmRvb2QxICYmIGRhdGEuZG9vZDIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTE2XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImRvb2QtMS1pZFwiIHZhbHVlPXtkYXRhLmRvb2QxLmlkfSAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkb29kLTItaWRcIiB2YWx1ZT17ZGF0YS5kb29kMi5pZH0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yMCBncmlkLWNvbHMtMlwiPlxuICAgICAgICAgICAgICAgIDxEb29kbGVSYWRpbyBkb29kPXtkYXRhLmRvb2QxfSAvPlxuICAgICAgICAgICAgICAgIDxEb29kbGVSYWRpbyBkb29kPXtkYXRhLmRvb2QyfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWRvb2RsZXMtZ3JlZW4gdmlhLWRvb2RsZXMtb3JhbmdlIHRvLWRvb2RsZXMtcGlua1wiPlxuICAgICAgICAgICAgTGVhZGVyYm9hcmRzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtOCBteC1hdXRvIG1heC13LW1kIGRpdmlkZS15LTIgZGl2aWRlLXdoaXRlLzI1XCI+XG4gICAgICAgICAgICB7ZGF0YS5sZWFkZXJib2FyZC5tYXAoKGRvb2QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17ZG9vZC50b2tlbklkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtkb29kLmltYWdlVXJsfT1zMTI4YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC00IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgRG9vZGxlcyAje2Rvb2QudG9rZW5JZH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj57ZG9vZC53aW5QY3R9JTwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb29kbGVSYWRpbyh7XG4gIGRvb2QsXG59OiB7XG4gIGRvb2Q6IFBpY2s8RG9vZGxlLCAndG9rZW5JZCcgfCAnaW1hZ2VVcmwnIHwgJ2lkJz47XG59KSB7XG4gIGNvbnN0IGlucHV0SWQgPSBgZG9vZGxlLSR7ZG9vZC50b2tlbklkfWA7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpbnB1dElkfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPmRvb2RsZSBudW1iZXIge2Rvb2QudG9rZW5JZH08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPXtpbnB1dElkfVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHBlZXJcIlxuICAgICAgICAgIG5hbWU9XCJkb29kbGUtcmFkaW9cIlxuICAgICAgICAgIHZhbHVlPXtkb29kLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGhvdmVyOmJnLXdoaXRlLzk1IHAtNCByb3VuZGVkLWxnIHBlZXItY2hlY2tlZDpwLTIgcGVlci1jaGVja2VkOmJvcmRlci04IHBlZXItY2hlY2tlZDpib3JkZXItZG9vZGxlcy1ncmVlblwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1hdXRvIHJvdW5kZWQtbGdcIiBzcmM9e2Ake2Rvb2QuaW1hZ2VVcmx9PXM1MTJgfSAvPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJweS00IC1tYi00IHRleHQtcmlnaHQgbGVhZGluZy1ub25lIHRleHQteGwgZm9udC1ib2xkIHRleHQtaW5kaWdvLTkwMFwiPlxuICAgICAgICAgICAgI3tkb29kLnRva2VuSWR9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxubGV0IGRiOiBQcmlzbWFDbGllbnQ7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuLy8gdGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBkZXZlbG9wbWVudCB3ZSBkb24ndCB3YW50IHRvIHJlc3RhcnRcbi8vIHRoZSBzZXJ2ZXIgd2l0aCBldmVyeSBjaGFuZ2UsIGJ1dCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gY3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24gdG8gdGhlIERCIHdpdGggZXZlcnkgY2hhbmdlIGVpdGhlci5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBkYi4kY29ubmVjdCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KCk7XG4gIH1cbiAgZGIgPSBnbG9iYWwuX19kYjtcbn1cblxuZXhwb3J0IHsgZGIgfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FB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O0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBc0ksaUJBR3BKLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLEtBQUssWUFBWSxJQUFJLENBQUMsTUFBTSxVQUMzQixvQ0FBQyxNQUFEO0FBQUEsSUFDRSxLQUFLLEtBQUs7QUFBQSxJQUNWLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEtBQUssR0FBRyxLQUFLO0FBQUEsTUFFZixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBa0IsYUFDdEIsS0FBSyxXQUduQixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBc0IsS0FBSyxRQUFPO0FBQUE7QUFVL0QscUJBQXFCO0FBQUEsRUFDbkI7QUFBQSxHQUdDO0FBQ0QsUUFBTSxVQUFVLFVBQVUsS0FBSztBQUMvQixTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxTQUFEO0FBQUEsSUFBTyxTQUFTO0FBQUEsS0FDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBVSxrQkFBZSxLQUFLLFVBQzlDLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLE9BQU8sS0FBSztBQUFBLE1BRWQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQW9CLEtBQUssR0FBRyxLQUFLO0FBQUEsTUFDaEQsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXVFLEtBQ2pGLEtBQUs7QUFBQTs7O0FIak1uQixvQkFBa0M7QUFDM0IsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLGdCQUFnQjtBQUFBLElBQ2QsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
