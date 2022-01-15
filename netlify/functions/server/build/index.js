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
var tailwind_default = "/build/_assets/tailwind-GWUPGDIT.css";

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

// route-module:/Users/matthewalbrecht/Documents/ws/playground/cleanest-doodle/app/routes/leaderboards.tsx
var leaderboards_exports = {};
__export(leaderboards_exports, {
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

// route-module:/Users/matthewalbrecht/Documents/ws/playground/cleanest-doodle/app/routes/leaderboards.tsx
var loader = async () => {
  let leaderboardData = await db.doodle.findMany({
    orderBy: [{ votesFor: { _count: "desc" } }],
    take: 100,
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
    leaderboard: newLeaderboardData
  };
  return data;
};
function IndexRoute() {
  const submit = (0, import_remix4.useSubmit)();
  const data = (0, import_remix4.useLoaderData)();
  const transition = (0, import_remix4.useTransition)();
  console.log(transition.submission);
  async function handleChange(e) {
    submit(e.currentTarget, { replace: true });
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("nav", {
    className: "py-4 flex items-center justify-between px-12"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-white divide-y-2 divide-white/50 space-y-2 font-display text-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Doodles"), /* @__PURE__ */ React.createElement("img", {
    className: "h-10",
    src: "images/doodles-logo.svg"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "block pt-1"
  }, "Cleanliness Rater"))), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "text-2xl text-white hover:underline",
    to: "/leaderboards",
    prefetch: "intent"
  }, "Leaderboards"))), /* @__PURE__ */ React.createElement("main", {
    className: "mt-12 container mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-20"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl md:text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-doodles-green via-doodles-orange to-doodles-pink"
  }, "Leaderboards"), /* @__PURE__ */ React.createElement("ul", {
    className: "px-4 sm:px-0 mt-8 mx-auto max-w-md divide-y-2 divide-white/25"
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

// route-module:/Users/matthewalbrecht/Documents/ws/playground/cleanest-doodle/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => IndexRoute2,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
var getRandomNumber = (n) => Math.floor(Math.random() * n);
var loader2 = async () => {
  let count = await db.doodle.count();
  let data = {
    dood1: await db.doodle.findUnique({
      where: { tokenId: getRandomNumber(count) },
      select: { tokenId: true, imageUrl: true, id: true }
    }),
    dood2: await db.doodle.findUnique({
      where: { tokenId: getRandomNumber(count) },
      select: { tokenId: true, imageUrl: true, id: true }
    })
  };
  return data;
};
var badRequest = (data) => (0, import_remix5.json)(data, { status: 400 });
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
  return (0, import_remix5.redirect)("/");
};
function IndexRoute2() {
  const submit = (0, import_remix5.useSubmit)();
  const data = (0, import_remix5.useLoaderData)();
  const transition = (0, import_remix5.useTransition)();
  console.log(transition.submission);
  async function handleChange(e) {
    submit(e.currentTarget, { replace: true });
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", {
    className: "fixed top-0 left-0 w-full"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "py-4 flex items-center justify-between px-12"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl text-white divide-y-2 divide-white/50 space-y-2 font-display text-center"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Doodles"), /* @__PURE__ */ React.createElement("img", {
    className: "h-10",
    src: "images/doodles-logo.svg"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "block pt-1"
  }, "Cleanliness Rater"))), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "text-2xl text-white hover:underline",
    to: "/leaderboards",
    prefetch: "intent"
  }, "Leaderboards"))), /* @__PURE__ */ React.createElement("main", {
    className: "min-h-screen container mx-auto flex justify-center items-center flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl md:text-5xl text-white text-center"
  }, "Which dood is", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-doodles-green via-doodles-orange to-doodles-pink"
  }, "cleaner?")), (data == null ? void 0 : data.dood1) && data.dood2 && /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    onChange: handleChange
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-6 my-12 md:m-16"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "dood-1-id",
    value: data.dood1.id
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "dood-2-id",
    value: data.dood2.id
  }), /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-8 md:gap-20 grid-cols-2"
  }, /* @__PURE__ */ React.createElement(DoodleRadio, {
    dood: data.dood1
  }), /* @__PURE__ */ React.createElement(DoodleRadio, {
    dood: data.dood2
  }))))));
}
function DoodleRadio({
  dood
}) {
  const inputId = `doodle-${dood.tokenId}`;
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: inputId,
    className: "cursor-pointer"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "doodle number ", dood.tokenId), /* @__PURE__ */ React.createElement("input", {
    key: inputId,
    id: inputId,
    type: "radio",
    className: "hidden peer",
    name: "doodle-radio",
    value: dood.id
  }), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white md:hover:bg-white/95 p-2 sm:p-4 rounded-lg md:peer-checked:p-2 md:peer-checked:border-8 md:peer-checked:border-doodles-green"
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
  "routes/leaderboards": {
    id: "routes/leaderboards",
    parentId: "root",
    path: "leaderboards",
    index: void 0,
    caseSensitive: void 0,
    module: leaderboards_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXR0aGV3YWxicmVjaHQvRG9jdW1lbnRzL3dzL3BsYXlncm91bmQvY2xlYW5lc3QtZG9vZGxlL2FwcC9yb290LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL21hdHRoZXdhbGJyZWNodC9Eb2N1bWVudHMvd3MvcGxheWdyb3VuZC9jbGVhbmVzdC1kb29kbGUvYXBwL3JvdXRlcy9sZWFkZXJib2FyZHMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYXR0aGV3YWxicmVjaHQvRG9jdW1lbnRzL3dzL3BsYXlncm91bmQvY2xlYW5lc3QtZG9vZGxlL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbWF0dGhld2FsYnJlY2h0L0RvY3VtZW50cy93cy9wbGF5Z3JvdW5kL2NsZWFuZXN0LWRvb2RsZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvbWF0dGhld2FsYnJlY2h0L0RvY3VtZW50cy93cy9wbGF5Z3JvdW5kL2NsZWFuZXN0LWRvb2RsZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL21hdHRoZXdhbGJyZWNodC9Eb2N1bWVudHMvd3MvcGxheWdyb3VuZC9jbGVhbmVzdC1kb29kbGUvYXBwL3JvdXRlcy9sZWFkZXJib2FyZHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9tYXR0aGV3YWxicmVjaHQvRG9jdW1lbnRzL3dzL3BsYXlncm91bmQvY2xlYW5lc3QtZG9vZGxlL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9sZWFkZXJib2FyZHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sZWFkZXJib2FyZHNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsZWFkZXJib2FyZHNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBTY3JpcHRzIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgTGl2ZVJlbG9hZCwgT3V0bGV0LCBMaW5rcyB9IGZyb20gJ3JlbWl4JztcblxuaW1wb3J0IHRhaWx3aW5kVXJsIGZyb20gJy4vdGFpbHdpbmQuY3NzJztcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogdGFpbHdpbmRVcmwsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVjb25uZWN0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3ByZWNvbm5lY3QnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20nLFxuICAgICAgY3Jvc3NPcmlnaW46ICdhbm9ueW1vdXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21pYytOZXVlOndnaHRANzAwJmZhbWlseT1MYXRvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnLFxuICAgIH0sXG4gIF07XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImZvbnQtYm9keVwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDx0aXRsZT5SZW1peDogU28gZ3JlYXQsIGl0J3MgZnVubnkhPC90aXRsZT5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLWRvb2RsZXNCZy0xIHZpYS1kb29kbGVzQmctMyAgdG8tZG9vZGxlc0JnLTVcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyA8TGl2ZVJlbG9hZCAvPiA6IG51bGx9XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IERvb2RsZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIGpzb24sXG4gIExpbmssXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VTdWJtaXQsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuXG4vKipcbiAqIHJldHVybnMgbnVtYmVyIGJldHdlZW4gMCAtIG5cbiAqL1xuY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG46IG51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgbGVhZGVyYm9hcmQ6IChQaWNrPERvb2RsZSwgJ3Rva2VuSWQnIHwgJ2ltYWdlVXJsJyB8ICdpZCc+ICYge1xuICAgIHdpblBjdDogbnVtYmVyO1xuICB9KVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGxlYWRlcmJvYXJkRGF0YSA9IGF3YWl0IGRiLmRvb2RsZS5maW5kTWFueSh7XG4gICAgb3JkZXJCeTogW3sgdm90ZXNGb3I6IHsgX2NvdW50OiAnZGVzYycgfSB9XSxcbiAgICB0YWtlOiAxMDAsXG4gICAgc2VsZWN0OiB7XG4gICAgICB0b2tlbklkOiB0cnVlLFxuICAgICAgaW1hZ2VVcmw6IHRydWUsXG4gICAgICBpZDogdHJ1ZSxcbiAgICAgIF9jb3VudDoge1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICB2b3Rlc0ZvcjogdHJ1ZSxcbiAgICAgICAgICB2b3Rlc0FnYWluc3Q6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGxldCBuZXdMZWFkZXJib2FyZERhdGEgPSBsZWFkZXJib2FyZERhdGEubWFwKChkb29kKSA9PiAoe1xuICAgIC4uLmRvb2QsXG4gICAgd2luUGN0OlxuICAgICAgZG9vZC5fY291bnQudm90ZXNBZ2FpbnN0ICsgZG9vZC5fY291bnQudm90ZXNGb3IgPT09IDBcbiAgICAgICAgPyAwXG4gICAgICAgIDogKGRvb2QuX2NvdW50LnZvdGVzRm9yIC9cbiAgICAgICAgICAgIChkb29kLl9jb3VudC52b3Rlc0FnYWluc3QgKyBkb29kLl9jb3VudC52b3Rlc0ZvcikpICpcbiAgICAgICAgICAxMDAsXG4gIH0pKTtcblxuICBsZXQgZGF0YSA9IHtcbiAgICBsZWFkZXJib2FyZDogbmV3TGVhZGVyYm9hcmREYXRhLFxuICB9O1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4Um91dGUoKSB7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zb2xlLmxvZyh0cmFuc2l0aW9uLnN1Ym1pc3Npb24pO1xuICAvLyBzaG93IGNoZWNrYm94IG92ZXIgY2xpY2tlZCBvbmVcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICBzdWJtaXQoZS5jdXJyZW50VGFyZ2V0LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInB5LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTEyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LXdoaXRlIGRpdmlkZS15LTIgZGl2aWRlLXdoaXRlLzUwIHNwYWNlLXktMiBmb250LWRpc3BsYXkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RG9vZGxlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTBcIiBzcmM9XCJpbWFnZXMvZG9vZGxlcy1sb2dvLnN2Z1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBwdC0xXCI+Q2xlYW5saW5lc3MgUmF0ZXI8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBob3Zlcjp1bmRlcmxpbmVcIlxuICAgICAgICAgICAgdG89XCIvbGVhZGVyYm9hcmRzXCJcbiAgICAgICAgICAgIHByZWZldGNoPVwiaW50ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMZWFkZXJib2FyZHNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC0xMiBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tZG9vZGxlcy1ncmVlbiB2aWEtZG9vZGxlcy1vcmFuZ2UgdG8tZG9vZGxlcy1waW5rXCI+XG4gICAgICAgICAgICBMZWFkZXJib2FyZHNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJweC00IHNtOnB4LTAgbXQtOCBteC1hdXRvIG1heC13LW1kIGRpdmlkZS15LTIgZGl2aWRlLXdoaXRlLzI1XCI+XG4gICAgICAgICAgICB7ZGF0YS5sZWFkZXJib2FyZC5tYXAoKGRvb2QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17ZG9vZC50b2tlbklkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtkb29kLmltYWdlVXJsfT1zMTI4YH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC00IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgRG9vZGxlcyAje2Rvb2QudG9rZW5JZH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGxcIj57ZG9vZC53aW5QY3R9JTwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb29kbGVSYWRpbyh7XG4gIGRvb2QsXG59OiB7XG4gIGRvb2Q6IFBpY2s8RG9vZGxlLCAndG9rZW5JZCcgfCAnaW1hZ2VVcmwnIHwgJ2lkJz47XG59KSB7XG4gIGNvbnN0IGlucHV0SWQgPSBgZG9vZGxlLSR7ZG9vZC50b2tlbklkfWA7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtpbnB1dElkfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPmRvb2RsZSBudW1iZXIge2Rvb2QudG9rZW5JZH08L3NwYW4+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGtleT17aW5wdXRJZH1cbiAgICAgICAgICBpZD17aW5wdXRJZH1cbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBwZWVyXCJcbiAgICAgICAgICBuYW1lPVwiZG9vZGxlLXJhZGlvXCJcbiAgICAgICAgICB2YWx1ZT17ZG9vZC5pZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBtZDpob3ZlcjpiZy13aGl0ZS85NSBwLTIgc206cC00IHJvdW5kZWQtbGcgbWQ6cGVlci1jaGVja2VkOnAtMiBtZDpwZWVyLWNoZWNrZWQ6Ym9yZGVyLTggbWQ6cGVlci1jaGVja2VkOmJvcmRlci1kb29kbGVzLWdyZWVuXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWF1dG8gcm91bmRlZC1sZ1wiIHNyYz17YCR7ZG9vZC5pbWFnZVVybH09czUxMmB9IC8+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB5LTQgLW1iLTQgdGV4dC1yaWdodCBsZWFkaW5nLW5vbmUgdGV4dC14bCBmb250LWJvbGQgdGV4dC1pbmRpZ28tOTAwXCI+XG4gICAgICAgICAgICAje2Rvb2QudG9rZW5JZH1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgZGI6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYjogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIGRiLiRjb25uZWN0KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKTtcbiAgfVxuICBkYiA9IGdsb2JhbC5fX2RiO1xufVxuXG5leHBvcnQgeyBkYiB9O1xuIiwgImltcG9ydCB7IERvb2RsZSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQWN0aW9uRnVuY3Rpb24sXG4gIEZvcm0sXG4gIGpzb24sXG4gIExpbmssXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VTdWJtaXQsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IGRiIH0gZnJvbSAnfi91dGlscy9kYi5zZXJ2ZXInO1xuXG4vKipcbiAqIHJldHVybnMgbnVtYmVyIGJldHdlZW4gMCAtIG5cbiAqL1xuY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG46IG51bWJlcikgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgZG9vZDE6IFBpY2s8RG9vZGxlLCAnaWQnIHwgJ3Rva2VuSWQnIHwgJ2ltYWdlVXJsJz4gfCBudWxsO1xuICBkb29kMjogUGljazxEb29kbGUsICdpZCcgfCAndG9rZW5JZCcgfCAnaW1hZ2VVcmwnPiB8IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgY291bnQgPSBhd2FpdCBkYi5kb29kbGUuY291bnQoKTtcblxuICBsZXQgZGF0YSA9IHtcbiAgICBkb29kMTogYXdhaXQgZGIuZG9vZGxlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgdG9rZW5JZDogZ2V0UmFuZG9tTnVtYmVyKGNvdW50KSB9LFxuICAgICAgc2VsZWN0OiB7IHRva2VuSWQ6IHRydWUsIGltYWdlVXJsOiB0cnVlLCBpZDogdHJ1ZSB9LFxuICAgIH0pLFxuICAgIGRvb2QyOiBhd2FpdCBkYi5kb29kbGUuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyB0b2tlbklkOiBnZXRSYW5kb21OdW1iZXIoY291bnQpIH0sXG4gICAgICBzZWxlY3Q6IHsgdG9rZW5JZDogdHJ1ZSwgaW1hZ2VVcmw6IHRydWUsIGlkOiB0cnVlIH0sXG4gICAgfSksXG4gIH07XG4gIHJldHVybiBkYXRhO1xufTtcblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG59O1xuLy8gcGljayB0d28gdW5pcXVlIHJhbmRvbSBudW1iZXJzIGJldHdlZW4gMC05OTk5XG4vLyBncmFiIHRoZSBpbWFnZSB3LyBzaXplIHNldCB0byA1MTIgYXBwZW5kID1zNTEyIHRvIGltYWdlVXJsXG4vLyBzZW5kIHRoYXQgaW5mbyB0aHJvdWdoIHRoZSBsb2FkZXJcbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuLy8gdXBvbiBjbGlja2luZyBvbmUgb2YgdGhlIGltYWdlcyBpdCBzaG91bGQgc3VibWl0IGEgZm9ybSB0aGF0IGluY3JlbWVudHMgdGhlIHBvcHVsYXJpdHlJbmRleCBieSAxXG4vLyBhbmQgdGhlbiBpdCBzaG91bGQgZ3JhYiB0aGUgbmV4dCB0d28gcmFuZG9tIGRvb2RzXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHNlbGVjdGVkSWQgPSBmb3JtLmdldCgnZG9vZGxlLXJhZGlvJyk7XG4gIGNvbnN0IGRvb2QxSWQgPSBmb3JtLmdldCgnZG9vZC0xLWlkJyk7XG4gIGNvbnN0IGRvb2QySWQgPSBmb3JtLmdldCgnZG9vZC0yLWlkJyk7XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBzZWxlY3RlZElkICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBkb29kMUlkICE9PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiBkb29kMklkICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgfSk7XG4gIH1cblxuICBhd2FpdCBkYi52b3RlLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdm90ZUZvcklkOiBzZWxlY3RlZElkLFxuICAgICAgdm90ZUFnYWluc3RJZDogZG9vZDFJZCA9PT0gc2VsZWN0ZWRJZCA/IGRvb2QySWQgOiBkb29kMUlkLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVkaXJlY3QoJy8nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4Um91dGUoKSB7XG4gIGNvbnN0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zb2xlLmxvZyh0cmFuc2l0aW9uLnN1Ym1pc3Npb24pO1xuICAvLyBzaG93IGNoZWNrYm94IG92ZXIgY2xpY2tlZCBvbmVcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICBzdWJtaXQoZS5jdXJyZW50VGFyZ2V0LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGxcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0xMlwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZSBkaXZpZGUteS0yIGRpdmlkZS13aGl0ZS81MCBzcGFjZS15LTIgZm9udC1kaXNwbGF5IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkRvb2RsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTEwXCIgc3JjPVwiaW1hZ2VzL2Rvb2RsZXMtbG9nby5zdmdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgcHQtMVwiPkNsZWFubGluZXNzIFJhdGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGUgaG92ZXI6dW5kZXJsaW5lXCJcbiAgICAgICAgICAgIHRvPVwiL2xlYWRlcmJvYXJkc1wiXG4gICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGVhZGVyYm9hcmRzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGNvbnRhaW5lciBteC1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgV2hpY2ggZG9vZCBpc3snICd9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1kb29kbGVzLWdyZWVuIHZpYS1kb29kbGVzLW9yYW5nZSB0by1kb29kbGVzLXBpbmtcIj5cbiAgICAgICAgICAgIGNsZWFuZXI/XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICB7ZGF0YT8uZG9vZDEgJiYgZGF0YS5kb29kMiAmJiAoXG4gICAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTYgbXktMTIgbWQ6bS0xNlwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkb29kLTEtaWRcIiB2YWx1ZT17ZGF0YS5kb29kMS5pZH0gLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZG9vZC0yLWlkXCIgdmFsdWU9e2RhdGEuZG9vZDIuaWR9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtOCBtZDpnYXAtMjAgZ3JpZC1jb2xzLTJcIj5cbiAgICAgICAgICAgICAgICA8RG9vZGxlUmFkaW8gZG9vZD17ZGF0YS5kb29kMX0gLz5cbiAgICAgICAgICAgICAgICA8RG9vZGxlUmFkaW8gZG9vZD17ZGF0YS5kb29kMn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERvb2RsZVJhZGlvKHtcbiAgZG9vZCxcbn06IHtcbiAgZG9vZDogUGljazxEb29kbGUsICd0b2tlbklkJyB8ICdpbWFnZVVybCcgfCAnaWQnPjtcbn0pIHtcbiAgY29uc3QgaW5wdXRJZCA9IGBkb29kbGUtJHtkb29kLnRva2VuSWR9YDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lucHV0SWR9IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5kb29kbGUgbnVtYmVyIHtkb29kLnRva2VuSWR9PC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBrZXk9e2lucHV0SWR9XG4gICAgICAgICAgaWQ9e2lucHV0SWR9XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gcGVlclwiXG4gICAgICAgICAgbmFtZT1cImRvb2RsZS1yYWRpb1wiXG4gICAgICAgICAgdmFsdWU9e2Rvb2QuaWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgbWQ6aG92ZXI6Ymctd2hpdGUvOTUgcC0yIHNtOnAtNCByb3VuZGVkLWxnIG1kOnBlZXItY2hlY2tlZDpwLTIgbWQ6cGVlci1jaGVja2VkOmJvcmRlci04IG1kOnBlZXItY2hlY2tlZDpib3JkZXItZG9vZGxlcy1ncmVlblwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1hdXRvIHJvdW5kZWQtbGdcIiBzcmM9e2Ake2Rvb2QuaW1hZ2VVcmx9PXM1MTJgfSAvPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJweS00IC1tYi00IHRleHQtcmlnaHQgbGVhZGluZy1ub25lIHRleHQteGwgZm9udC1ib2xkIHRleHQtaW5kaWdvLTkwMFwiPlxuICAgICAgICAgICAgI3tkb29kLnRva2VuSWR9XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQzVJbEM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3BEMUM7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDaENqQztBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUlmLFdBQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO0FBQ3hDLFVBQUksTUFBTSxhQUFhLENBQUMsUUFBUSxlQUFlO0FBQUksZUFBTyxlQUFlLFNBQVMsR0FBRztBQUFBLFVBQ3BGLFlBQVk7QUFBQSxVQUNaLEtBQUssV0FBWTtBQUFFLG1CQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFHbkMsV0FBTyxLQUFLLFFBQVEsUUFBUSxTQUFVLEdBQUc7QUFDeEMsVUFBSSxNQUFNLGFBQWEsQ0FBQyxRQUFRLGVBQWU7QUFBSSxlQUFPLGVBQWUsU0FBUyxHQUFHO0FBQUEsVUFDcEYsWUFBWTtBQUFBLFVBQ1osS0FBSyxXQUFZO0FBQUUsbUJBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUduQyxXQUFPLEtBQUssVUFBVSxRQUFRLFNBQVUsR0FBRztBQUMxQyxVQUFJLE1BQU0sYUFBYSxDQUFDLFFBQVEsZUFBZTtBQUFJLGVBQU8sZUFBZSxTQUFTLEdBQUc7QUFBQSxVQUNwRixZQUFZO0FBQUEsVUFDWixLQUFLLFdBQVk7QUFBRSxtQkFBTyxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDbkNyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF1QztBQUN2QyxvQkFBMEM7Ozs7OztBQUluQyxJQUFNLFFBQXVCLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQTtBQUFBLElBRVI7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQTtBQUFBLElBRVI7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQTtBQUFBLElBRWY7QUFBQSxNQUNFLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFJRyxlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQUssV0FBVTtBQUFBLEtBQ3hCLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxTQUFELE1BQU8saUNBQ1Asb0NBQUMscUJBQUQsUUFFRixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxzQkFBRCxPQUNDLE9BQXlDLG9DQUFDLDBCQUFELFFBQWlCLE1BQzNELG9DQUFDLHVCQUFEO0FBQUE7OztBQ3JDUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxvQkFVTzs7O0FDWlA7QUFBQSxvQkFBNkI7QUFFN0IsSUFBSTtBQVNKLElBQUksT0FBdUM7QUFDekMsT0FBSyxJQUFJO0FBQ1QsS0FBRztBQUFBLE9BQ0U7QUFDTCxNQUFJLENBQUMsT0FBTyxNQUFNO0FBQ2hCLFdBQU8sT0FBTyxJQUFJO0FBQ2xCLFdBQU8sS0FBSztBQUFBO0FBRWQsT0FBSyxPQUFPO0FBQUE7OztBRE9QLElBQU0sU0FBUyxZQUFZO0FBQ2hDLE1BQUksa0JBQWtCLE1BQU0sR0FBRyxPQUFPLFNBQVM7QUFBQSxJQUM3QyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUTtBQUFBLElBQ2hDLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLElBQUk7QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGNBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU10QixNQUFJLHFCQUFxQixnQkFBZ0IsSUFBSSxDQUFDLFNBQVUsaUNBQ25ELE9BRG1EO0FBQUEsSUFFdEQsUUFDRSxLQUFLLE9BQU8sZUFBZSxLQUFLLE9BQU8sYUFBYSxJQUNoRCxJQUNDLEtBQUssT0FBTyxXQUNWLE1BQUssT0FBTyxlQUFlLEtBQUssT0FBTyxZQUMxQztBQUFBO0FBR1IsTUFBSSxPQUFPO0FBQUEsSUFDVCxhQUFhO0FBQUE7QUFFZixTQUFPO0FBQUE7QUFHTSxzQkFBc0I7QUFDbkMsUUFBTSxTQUFTO0FBQ2YsUUFBTSxPQUFPO0FBQ2IsUUFBTSxhQUFhO0FBQ25CLFVBQVEsSUFBSSxXQUFXO0FBR3ZCLDhCQUE0QixHQUFxQztBQUMvRCxXQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVM7QUFBQTtBQUdyQyxTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxVQUFELE1BQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUNQLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNaLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBVSxZQUMxQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBTyxLQUFJO0FBQUEsT0FFNUIsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWEsd0JBR2pDLG9DQUFDLG9CQUFEO0FBQUEsSUFDRSxXQUFVO0FBQUEsSUFDVixJQUFHO0FBQUEsSUFDSCxVQUFTO0FBQUEsS0FDVixtQkFLTCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBa0osaUJBR2hLLG9DQUFDLE1BQUQ7QUFBQSxJQUFJLFdBQVU7QUFBQSxLQUNYLEtBQUssWUFBWSxJQUFJLENBQUMsTUFBTSxVQUMzQixvQ0FBQyxNQUFEO0FBQUEsSUFDRSxLQUFLLEtBQUs7QUFBQSxJQUNWLFdBQVU7QUFBQSxLQUVWLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLEtBQUssR0FBRyxLQUFLO0FBQUEsTUFFZixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBa0IsYUFDdEIsS0FBSyxXQUduQixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBc0IsS0FBSyxRQUFPO0FBQUE7OztBRWhIL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxvQkFVTztBQU1QLElBQU0sa0JBQWtCLENBQUMsTUFBYyxLQUFLLE1BQU0sS0FBSyxXQUFXO0FBTzNELElBQU0sVUFBUyxZQUFZO0FBQ2hDLE1BQUksUUFBUSxNQUFNLEdBQUcsT0FBTztBQUU1QixNQUFJLE9BQU87QUFBQSxJQUNULE9BQU8sTUFBTSxHQUFHLE9BQU8sV0FBVztBQUFBLE1BQ2hDLE9BQU8sRUFBRSxTQUFTLGdCQUFnQjtBQUFBLE1BQ2xDLFFBQVEsRUFBRSxTQUFTLE1BQU0sVUFBVSxNQUFNLElBQUk7QUFBQTtBQUFBLElBRS9DLE9BQU8sTUFBTSxHQUFHLE9BQU8sV0FBVztBQUFBLE1BQ2hDLE9BQU8sRUFBRSxTQUFTLGdCQUFnQjtBQUFBLE1BQ2xDLFFBQVEsRUFBRSxTQUFTLE1BQU0sVUFBVSxNQUFNLElBQUk7QUFBQTtBQUFBO0FBR2pELFNBQU87QUFBQTtBQVNULElBQU0sYUFBYSxDQUFDLFNBQXFCLHdCQUFLLE1BQU0sRUFBRSxRQUFRO0FBR3ZELElBQU0sU0FBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxPQUFPLE1BQU0sUUFBUTtBQUUzQixRQUFNLGFBQWEsS0FBSyxJQUFJO0FBQzVCLFFBQU0sVUFBVSxLQUFLLElBQUk7QUFDekIsUUFBTSxVQUFVLEtBQUssSUFBSTtBQUV6QixNQUNFLE9BQU8sZUFBZSxZQUN0QixPQUFPLFlBQVksWUFDbkIsT0FBTyxZQUFZLFVBQ25CO0FBQ0EsV0FBTyxXQUFXO0FBQUEsTUFDaEIsV0FBVztBQUFBO0FBQUE7QUFJZixRQUFNLEdBQUcsS0FBSyxPQUFPO0FBQUEsSUFDbkIsTUFBTTtBQUFBLE1BQ0osV0FBVztBQUFBLE1BQ1gsZUFBZSxZQUFZLGFBQWEsVUFBVTtBQUFBO0FBQUE7QUFHdEQsU0FBTyw0QkFBUztBQUFBO0FBR0gsdUJBQXNCO0FBQ25DLFFBQU0sU0FBUztBQUNmLFFBQU0sT0FBTztBQUNiLFFBQU0sYUFBYTtBQUNuQixVQUFRLElBQUksV0FBVztBQUd2Qiw4QkFBNEIsR0FBcUM7QUFDL0QsV0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTO0FBQUE7QUFHckMsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsVUFBRDtBQUFBLElBQVEsV0FBVTtBQUFBLEtBQ2hCLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FDUCxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQVUsWUFDMUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQU8sS0FBSTtBQUFBLE9BRTVCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFhLHdCQUdqQyxvQ0FBQyxvQkFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBRztBQUFBLElBQ0gsVUFBUztBQUFBLEtBQ1YsbUJBS0wsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQThDLGlCQUM1QyxLQUNkLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUFpSCxjQUlsSSw4QkFBTSxVQUFTLEtBQUssU0FDbkIsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLFVBQVU7QUFBQSxLQUM1QixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFBTyxNQUFLO0FBQUEsSUFBUyxNQUFLO0FBQUEsSUFBWSxPQUFPLEtBQUssTUFBTTtBQUFBLE1BQ3hELG9DQUFDLFNBQUQ7QUFBQSxJQUFPLE1BQUs7QUFBQSxJQUFTLE1BQUs7QUFBQSxJQUFZLE9BQU8sS0FBSyxNQUFNO0FBQUEsTUFDeEQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTSxLQUFLO0FBQUEsTUFDeEIsb0NBQUMsYUFBRDtBQUFBLElBQWEsTUFBTSxLQUFLO0FBQUE7QUFBQTtBQVV4QyxxQkFBcUI7QUFBQSxFQUNuQjtBQUFBLEdBR0M7QUFDRCxRQUFNLFVBQVUsVUFBVSxLQUFLO0FBQy9CLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLFNBQUQ7QUFBQSxJQUFPLFNBQVM7QUFBQSxJQUFTLFdBQVU7QUFBQSxLQUNqQyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBVSxrQkFBZSxLQUFLLFVBQzlDLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLEtBQUs7QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxJQUNWLE1BQUs7QUFBQSxJQUNMLE9BQU8sS0FBSztBQUFBLE1BRWQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQW9CLEtBQUssR0FBRyxLQUFLO0FBQUEsTUFDaEQsb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXVFLEtBQ2pGLEtBQUs7QUFBQTs7O0FMckpuQixvQkFBa0M7QUFDM0IsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVWLHVCQUF1QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVYsZ0JBQWdCO0FBQUEsSUFDZCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
