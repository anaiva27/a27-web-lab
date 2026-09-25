(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ExpertiseCards/ExpertiseCards.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "ExpertiseCards-module__szYjCa__card",
  "cardDescription": "ExpertiseCards-module__szYjCa__cardDescription",
  "cardImg": "ExpertiseCards-module__szYjCa__cardImg",
  "cardInfo": "ExpertiseCards-module__szYjCa__cardInfo",
  "cardInner": "ExpertiseCards-module__szYjCa__cardInner",
  "cardTitle": "ExpertiseCards-module__szYjCa__cardTitle",
  "stickyCards": "ExpertiseCards-module__szYjCa__stickyCards",
});
}),
"[project]/src/components/ExpertiseCards/ExpertiseCards.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpertiseCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ExpertiseCards/ExpertiseCards.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const EXPERTISE = [
    {
        tagline: "Characters people fall for and never forget",
        title: "Illustration",
        description: "Hand-drawn worlds, casts of oddballs, and cover art with teeth. We make the loud, strange visuals that stop a thumb mid-scroll and hold it there.",
        image: "/images/expertise/expertise_card_1.jpg",
        color: "var(--base-300)"
    },
    {
        tagline: "Mascots with a pulse and a bit of an attitude",
        title: "Character Design",
        description: "Original creatures, mascots, and casts built to carry a brand. Each one gets its own face, mood, and reason to exist, ready to run wild anywhere.",
        image: "/images/expertise/expertise_card_2.jpg",
        color: "var(--base-500)"
    },
    {
        tagline: "Drawings that refuse to sit still",
        title: "Animation & Motion",
        description: "Loops, idents, and animated bumpers that give still art a heartbeat. Playful movement tuned for late-night channels, socials, and anything that flickers.",
        image: "/images/expertise/expertise_card_3.jpg",
        color: "var(--base-700)"
    },
    {
        tagline: "Whole universes from one weird doodle",
        title: "Worldbuilding",
        description: "We take a single strange idea and grow it into a full illustrated world, complete with rules, residents, and enough chaos to keep people digging.",
        image: "/images/expertise/expertise_card_4.jpg",
        color: "var(--base-800)"
    }
];
function ExpertiseCards() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cardInnerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])({
        "ExpertiseCards.useLenis": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
        }
    }["ExpertiseCards.useLenis"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ExpertiseCards.useGSAP": ()=>{
            const cards = cardRefs.current.filter(Boolean);
            const inners = cardInnerRefs.current.filter(Boolean);
            cards.forEach({
                "ExpertiseCards.useGSAP": (card, index)=>{
                    if (index >= cards.length - 1) return;
                    const cardInner = inners[index];
                    if (!cardInner) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cardInner, {
                        y: "0%",
                        z: 0,
                        rotationX: 0
                    }, {
                        y: "-50%",
                        z: -250,
                        rotationX: 45,
                        scrollTrigger: {
                            trigger: cards[index + 1],
                            start: "top 85%",
                            end: "top -75%",
                            scrub: true,
                            pin: card,
                            pinSpacing: false
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cardInner, {
                        "--after-opacity": 1,
                        scrollTrigger: {
                            trigger: cards[index + 1],
                            start: "top 75%",
                            end: "top -25%",
                            scrub: true
                        }
                    });
                }
            }["ExpertiseCards.useGSAP"]);
        }
    }["ExpertiseCards.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stickyCards,
        ref: sectionRef,
        children: EXPERTISE.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                ref: (el)=>{
                    cardRefs.current[index] = el;
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardInner,
                    style: {
                        backgroundColor: item.color
                    },
                    ref: (el)=>{
                        cardInnerRefs.current[index] = el;
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardInfo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mono sm",
                                children: item.tagline
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTitle,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardDescription,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardImg,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            }, item.title, false, {
                fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
                lineNumber: 106,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ExpertiseCards/ExpertiseCards.js",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(ExpertiseCards, "d0rrHcBTTisoxepKziE7NdcxAxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ExpertiseCards;
var _c;
__turbopack_context__.k.register(_c, "ExpertiseCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Callout/Callout.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "callout": "Callout-module__1J1nfW__callout",
  "label": "Callout-module__1J1nfW__label",
  "v1": "Callout-module__1J1nfW__v1",
  "v2": "Callout-module__1J1nfW__v2",
  "v3": "Callout-module__1J1nfW__v3",
  "v4": "Callout-module__1J1nfW__v4",
});
}),
"[project]/src/components/Callout/Callout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Callout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Callout/Callout.module.css [app-client] (css module)");
;
;
const VARIANTS = {
    1: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v1,
    2: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v2,
    3: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v3,
    4: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v4
};
function Callout({ label, variant = 3, rotation = 0, top, right, bottom, left, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-callout": "",
        "data-rotation": rotation,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].callout} ${VARIANTS[variant] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v3} ${className}`.trim(),
        style: {
            "--callout-rotation": `${rotation}deg`,
            top,
            right,
            bottom,
            left
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/Callout/Callout.js",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Callout/Callout.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Callout;
var _c;
__turbopack_context__.k.register(_c, "Callout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExpertiseServices/ExpertiseServices.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "callout": "ExpertiseServices-module__aK0i3G__callout",
  "expertise": "ExpertiseServices-module__aK0i3G__expertise",
  "header": "ExpertiseServices-module__aK0i3G__header",
  "headerInner": "ExpertiseServices-module__aK0i3G__headerInner",
  "imageOne": "ExpertiseServices-module__aK0i3G__imageOne",
  "imageTwo": "ExpertiseServices-module__aK0i3G__imageTwo",
  "list": "ExpertiseServices-module__aK0i3G__list",
  "row": "ExpertiseServices-module__aK0i3G__row",
  "service": "ExpertiseServices-module__aK0i3G__service",
  "services": "ExpertiseServices-module__aK0i3G__services",
  "spacer": "ExpertiseServices-module__aK0i3G__spacer",
});
}),
"[project]/src/components/ExpertiseServices/ExpertiseServices.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpertiseServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Callout/Callout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ExpertiseServices/ExpertiseServices.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const DESKTOP_BREAKPOINT = 900;
const SERVICES = [
    {
        title: "Illustration",
        items: [
            "Editorial & Cover Art",
            "Poster & Print Series",
            "Spot Illustrations & Icons",
            "Album & Merch Artwork",
            "Custom Commissions"
        ]
    },
    {
        title: "Character Design",
        items: [
            "Original Characters & Casts",
            "Mascots & Brand Creatures",
            "Turnarounds & Expression Sheets",
            "Character Bibles",
            "Sticker & Emote Packs"
        ]
    },
    {
        title: "Animation & Motion",
        items: [
            "Looping Idents & Bumpers",
            "Character Rigs & Movement",
            "Animated Stickers & GIFs",
            "Social Cutdowns",
            "Title & Transition Sequences"
        ]
    },
    {
        title: "Worldbuilding",
        items: [
            "Illustrated Universes",
            "Environment & Set Design",
            "Lore & Story Development",
            "Props & Visual Systems",
            "Scene & Panel Layouts"
        ]
    },
    {
        title: "Brand Art",
        items: [
            "Visual Identity & Wordmarks",
            "Murals & Wall Art",
            "Packaging & Label Art",
            "Zines & Lookbooks",
            "Launch & Campaign Visuals"
        ]
    }
];
function ExpertiseServices() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const servicesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])({
        "ExpertiseServices.useLenis": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
        }
    }["ExpertiseServices.useLenis"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpertiseServices.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setWindowWidth(window.innerWidth);
            }
        }
    }["ExpertiseServices.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ExpertiseServices.useGSAP": ()=>{
            if (scrollTriggerRef.current) {
                scrollTriggerRef.current.kill();
                scrollTriggerRef.current = null;
            }
            const handleResize = {
                "ExpertiseServices.useGSAP.handleResize": ()=>{
                    setWindowWidth(window.innerWidth);
                }
            }["ExpertiseServices.useGSAP.handleResize"];
            window.addEventListener("resize", handleResize);
            const timeoutId = setTimeout({
                "ExpertiseServices.useGSAP.timeoutId": ()=>{
                    if (windowWidth > DESKTOP_BREAKPOINT) {
                        const expertiseSection = sectionRef.current;
                        const expertiseHeader = headerRef.current;
                        const services = servicesRef.current;
                        if (expertiseSection && expertiseHeader && services) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                            scrollTriggerRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: expertiseSection,
                                start: "top top",
                                endTrigger: services,
                                end: "bottom bottom",
                                pin: expertiseHeader,
                                pinSpacing: false,
                                onEnter: {
                                    "ExpertiseServices.useGSAP.timeoutId": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(expertiseHeader, {
                                            duration: 0.1,
                                            ease: "power1.out"
                                        });
                                    }
                                }["ExpertiseServices.useGSAP.timeoutId"]
                            });
                        }
                    }
                }
            }["ExpertiseServices.useGSAP.timeoutId"], 100);
            return ({
                "ExpertiseServices.useGSAP": ()=>{
                    window.removeEventListener("resize", handleResize);
                    clearTimeout(timeoutId);
                    if (scrollTriggerRef.current) {
                        scrollTriggerRef.current.kill();
                    }
                }
            })["ExpertiseServices.useGSAP"];
        }
    }["ExpertiseServices.useGSAP"], {
        dependencies: [
            windowWidth
        ],
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expertise,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                ref: headerRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `container pad ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInner}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: [
                                        "The Things We Nail",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].callout,
                                            label: "Dead on",
                                            variant: 1,
                                            rotation: -20,
                                            top: "0.25em",
                                            left: "-0.1em"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageOne,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/expertise/expertise_service_1.jpg",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageTwo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/expertise/expertise_service_2.jpg",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].services,
                ref: servicesRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spacer
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                        children: SERVICES.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].service,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, this),
                                    service.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, service.title, true, {
                                fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExpertiseServices/ExpertiseServices.js",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(ExpertiseServices, "q/gnIcaiiXsYXZCajlmo2qSFWxA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ExpertiseServices;
var _c;
__turbopack_context__.k.register(_c, "ExpertiseServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectionFooter/SectionFooter.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "SectionFooter-module__n3Ensq__footer",
  "inner": "SectionFooter-module__n3Ensq__inner",
});
}),
"[project]/src/components/SectionFooter/SectionFooter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SectionFooter/SectionFooter.module.css [app-client] (css module)");
;
;
function SectionFooter({ left, right }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono sm",
                    children: left
                }, void 0, false, {
                    fileName: "[project]/src/components/SectionFooter/SectionFooter.js",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono sm",
                    children: right
                }, void 0, false, {
                    fileName: "[project]/src/components/SectionFooter/SectionFooter.js",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionFooter/SectionFooter.js",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SectionFooter/SectionFooter.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SectionFooter;
var _c;
__turbopack_context__.k.register(_c, "SectionFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/work/expertise.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "callout": "expertise-module__gzpxYW__callout",
  "hero": "expertise-module__gzpxYW__hero",
  "page": "expertise-module__gzpxYW__page",
  "sectionFooter": "expertise-module__gzpxYW__sectionFooter",
});
}),
"[project]/src/components/Copy/Copy.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "char": "Copy-module__1LON9q__char",
  "line": "Copy-module__1LON9q__line",
  "word": "Copy-module__1LON9q__word",
});
}),
"[project]/src/components/Copy/Copy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Copy/Copy.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
function detachCallouts(roots) {
    const entries = [];
    roots.forEach((root)=>{
        root.querySelectorAll("[data-callout]").forEach((callout)=>{
            entries.push({
                callout,
                parent: callout.parentNode
            });
            callout.remove();
        });
    });
    return entries;
}
function restoreCallouts(entries) {
    entries.forEach(({ callout, parent })=>{
        if (parent) parent.appendChild(callout);
    });
}
function prepareCallouts(entries) {
    const callouts = entries.map(({ callout })=>callout);
    if (!callouts.length) return callouts;
    callouts.forEach((callout)=>{
        const rotation = Number(callout.dataset.rotation) || 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(callout, {
            scale: 0,
            rotation,
            transformOrigin: "center center"
        });
    });
    return callouts;
}
function Copy({ children, variant = "slide", splitType = "lines", animateOnScroll = true, delay = 0, stagger = 0.1 }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])({
        "Copy.useLenis": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
        }
    }["Copy.useLenis"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Copy.useGSAP": ()=>{
            const container = containerRef.current;
            if (!container) return;
            let cancelled = false;
            let hasPlayed = false;
            const splits = [];
            const triggers = [];
            const tweens = [];
            let calloutEntries = [];
            const getElements = {
                "Copy.useGSAP.getElements": ()=>{
                    if (container.hasAttribute("data-copy-wrapper")) {
                        return Array.from(container.children);
                    }
                    return [
                        container
                    ];
                }
            }["Copy.useGSAP.getElements"];
            const play = {
                "Copy.useGSAP.play": (tl)=>{
                    if (hasPlayed) return;
                    hasPlayed = true;
                    // play() — not play(0) — so timeline `delay` is respected
                    // (route heroes depend on that to wait out the page transition)
                    tl.play();
                }
            }["Copy.useGSAP.play"];
            document.fonts.ready.then({
                "Copy.useGSAP": ()=>{
                    if (cancelled || !containerRef.current) return;
                    const elements = getElements();
                    calloutEntries = detachCallouts(elements);
                    const callouts = prepareCallouts(calloutEntries);
                    if (variant === "slide") {
                        const type = splitType === "words" ? "words" : "lines";
                        const allTargets = [];
                        elements.forEach({
                            "Copy.useGSAP": (element)=>{
                                const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                                    type,
                                    mask: type,
                                    linesClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line,
                                    wordsClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].word
                                });
                                splits.push(split);
                                allTargets.push(...type === "words" ? split.words : split.lines);
                            }
                        }["Copy.useGSAP"]);
                        restoreCallouts(calloutEntries);
                        prepareCallouts(calloutEntries);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allTargets, {
                            yPercent: 100
                        });
                        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                            delay,
                            paused: animateOnScroll
                        });
                        tl.to(allTargets, {
                            yPercent: 0,
                            duration: 0.75,
                            ease: "power3.out",
                            stagger
                        });
                        if (callouts.length) {
                            tl.to(callouts, {
                                scale: 1,
                                duration: 1,
                                ease: "elastic.out(1, 0.45)",
                                stagger: 0.08
                            }, "-=0.55");
                        }
                        tweens.push(tl);
                        if (animateOnScroll) {
                            triggers.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: container,
                                start: "top 90%",
                                once: true,
                                onEnter: {
                                    "Copy.useGSAP": ()=>play(tl)
                                }["Copy.useGSAP"],
                                onEnterBack: {
                                    "Copy.useGSAP": ()=>play(tl)
                                }["Copy.useGSAP"],
                                onRefresh: {
                                    "Copy.useGSAP": (self)=>{
                                        if (self.progress > 0) play(tl);
                                    }
                                }["Copy.useGSAP"]
                            }));
                            requestAnimationFrame({
                                "Copy.useGSAP": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
                            }["Copy.useGSAP"]);
                        }
                    }
                    if (variant === "scramble") {
                        const allChars = [];
                        elements.forEach({
                            "Copy.useGSAP": (element)=>{
                                const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                                    type: "chars",
                                    charsClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].char
                                });
                                splits.push(split);
                                allChars.push(...split.chars);
                            }
                        }["Copy.useGSAP"]);
                        restoreCallouts(calloutEntries);
                        prepareCallouts(calloutEntries);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allChars, {
                            opacity: 0
                        });
                        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                            delay,
                            paused: animateOnScroll
                        });
                        tl.to(allChars, {
                            duration: 0.05,
                            opacity: 1,
                            ease: "power2.inOut",
                            stagger: {
                                amount: 0.5,
                                each: 0.1,
                                from: "random"
                            }
                        });
                        if (callouts.length) {
                            tl.to(callouts, {
                                scale: 1,
                                duration: 1,
                                ease: "elastic.out(1, 0.45)",
                                stagger: 0.08
                            }, "-=0.35");
                        }
                        tweens.push(tl);
                        if (animateOnScroll) {
                            triggers.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: container,
                                start: "top 85%",
                                once: true,
                                onEnter: {
                                    "Copy.useGSAP": ()=>play(tl)
                                }["Copy.useGSAP"],
                                onEnterBack: {
                                    "Copy.useGSAP": ()=>play(tl)
                                }["Copy.useGSAP"],
                                onRefresh: {
                                    "Copy.useGSAP": (self)=>{
                                        if (self.progress > 0) play(tl);
                                    }
                                }["Copy.useGSAP"]
                            }));
                            requestAnimationFrame({
                                "Copy.useGSAP": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
                            }["Copy.useGSAP"]);
                        }
                    }
                }
            }["Copy.useGSAP"]);
            return ({
                "Copy.useGSAP": ()=>{
                    cancelled = true;
                    tweens.forEach({
                        "Copy.useGSAP": (tween)=>tween.kill()
                    }["Copy.useGSAP"]);
                    triggers.forEach({
                        "Copy.useGSAP": (trigger)=>trigger.kill()
                    }["Copy.useGSAP"]);
                    const liveEntries = calloutEntries.length > 0 ? calloutEntries : detachCallouts(getElements());
                    liveEntries.forEach({
                        "Copy.useGSAP": ({ callout })=>{
                            if (callout.parentNode) callout.remove();
                        }
                    }["Copy.useGSAP"]);
                    splits.forEach({
                        "Copy.useGSAP": (split)=>split.revert()
                    }["Copy.useGSAP"]);
                    restoreCallouts(liveEntries);
                    liveEntries.forEach({
                        "Copy.useGSAP": ({ callout })=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(callout, {
                                clearProps: "transform"
                            });
                        }
                    }["Copy.useGSAP"]);
                }
            })["Copy.useGSAP"];
        }
    }["Copy.useGSAP"], {
        scope: containerRef,
        dependencies: [
            variant,
            splitType,
            animateOnScroll,
            delay,
            stagger
        ]
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(children) === 1) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: containerRef
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-copy-wrapper": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Copy/Copy.js",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s(Copy, "FWzQ2RVGc1S2BQDHn89KE7Af9qM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Copy;
var _c;
__turbopack_context__.k.register(_c, "Copy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/work/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpertisePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExpertiseCards/ExpertiseCards.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExpertiseServices/ExpertiseServices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Callout/Callout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionFooter/SectionFooter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$work$2f$expertise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/work/expertise.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Copy/Copy.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ExpertisePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$work$2f$expertise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$work$2f$expertise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        animateOnScroll: false,
                        delay: 1.125,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: [
                                "Our Bag Of Tricks",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$work$2f$expertise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].callout,
                                    label: "Open sesame",
                                    rotation: 20,
                                    variant: 3,
                                    top: "0em",
                                    right: "0.25em"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.jsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/work/page.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/page.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$work$2f$expertise$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionFooter,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            left: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "scramble",
                                animateOnScroll: false,
                                delay: 1.25,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "The Toolkit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.jsx",
                                    lineNumber: 32,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/page.jsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this),
                            right: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "scramble",
                                animateOnScroll: false,
                                delay: 1.25,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Pick A Weapon"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/page.jsx",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/page.jsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/work/page.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/page.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/page.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseCards$2f$ExpertiseCards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/work/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExpertiseServices$2f$ExpertiseServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/work/page.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/page.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = ExpertisePage;
var _c;
__turbopack_context__.k.register(_c, "ExpertisePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1jnyv3x._.js.map