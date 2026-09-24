module.exports = [
"[project]/src/components/Preloader/Preloader.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "char": "Preloader-module__aFCmlq__char",
  "counter": "Preloader-module__aFCmlq__counter",
  "exitOverlay": "Preloader-module__aFCmlq__exitOverlay",
  "exitOverlayDark": "Preloader-module__aFCmlq__exitOverlayDark",
  "exitOverlays": "Preloader-module__aFCmlq__exitOverlays",
  "header": "Preloader-module__aFCmlq__header",
  "images": "Preloader-module__aFCmlq__images",
  "img": "Preloader-module__aFCmlq__img",
  "preloader": "Preloader-module__aFCmlq__preloader",
});
}),
"[project]/src/components/Preloader/Preloader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader,
    "isInitialLoad",
    ()=>isInitialLoad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/CustomEase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Preloader/Preloader.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomEase"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomEase"].get("hop")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomEase"].create("hop", "0.8, 0, 0.2, 1");
}
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomEase"].get("hop2")) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomEase"].create("hop2", "0.9, 0, 0.1, 1");
}
let isInitialLoad = true;
const IMAGES = [
    "/images/preloader/preloader_img_1.png",
    "/images/preloader/preloader_img_2.png",
    "/images/preloader/preloader_img_3.png",
    "/images/preloader/preloader_img_4.png",
    "/images/preloader/preloader_img_5.png",
    "/images/preloader/preloader_img_6.png"
];
const IMG_INIT_ROTATIONS = [
    7.5,
    -2.5,
    -10,
    12.5,
    -5,
    5
];
const EXIT_COLORS = [
    "var(--base-900)",
    "var(--base-800)",
    "var(--base-500)",
    "var(--base-400)"
];
const DARK_OVERLAY = "var(--base-1000)";
function shuffle(items) {
    const next = [
        ...items
    ];
    for(let i = next.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [next[i], next[j]] = [
            next[j],
            next[i]
        ];
    }
    return next;
}
function Preloader() {
    const preloaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const counterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const colorOverlaysRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const darkOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showPreloader, setShowPreloader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isInitialLoad);
    const [loaderAnimating, setLoaderAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            isInitialLoad = false;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!lenis) return;
        if (loaderAnimating) lenis.stop();
        else lenis.start();
    }, [
        lenis,
        loaderAnimating
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        if (!showPreloader) return;
        const root = preloaderRef.current;
        const title = titleRef.current;
        const counterEl = counterRef.current;
        if (!root || !title || !counterEl) return;
        setLoaderAnimating(true);
        let cancelled = false;
        let split = null;
        let tl = null;
        const run = async ()=>{
            try {
                await document.fonts.ready;
                await new Promise((r)=>setTimeout(r, 100));
            } catch  {
                await new Promise((r)=>setTimeout(r, 200));
            }
            if (cancelled || !preloaderRef.current) return;
            const imgs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(root.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].img}`));
            const colorOverlays = colorOverlaysRef.current.filter(Boolean);
            const darkOverlay = darkOverlayRef.current;
            // bottom → top: colors under, dark always on top
            const overlays = darkOverlay ? [
                ...colorOverlays,
                darkOverlay
            ] : colorOverlays;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imgs, {
                xPercent: -50,
                yPercent: -50,
                scale: 0,
                opacity: 1,
                rotate: (i)=>IMG_INIT_ROTATIONS[i]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(overlays, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
            });
            split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"].create(title, {
                type: "chars",
                charsClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].char,
                mask: "chars"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
                yPercent: 100
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(counterEl, {
                yPercent: 125,
                opacity: 1
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(title, {
                opacity: 1
            });
            const counter = {
                value: 0
            };
            tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                delay: 1,
                onComplete: ()=>{
                    setTimeout(()=>{
                        setLoaderAnimating(false);
                        setShowPreloader(false);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh(true);
                    }, 100);
                }
            });
            tl.to(imgs, {
                scale: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
                ease: "hop",
                stagger: 0.2
            });
            tl.to(split.chars, {
                yPercent: 0,
                duration: 1,
                ease: "hop2",
                stagger: {
                    each: 0.125,
                    from: "start"
                }
            }, 0.35);
            tl.to(counterEl, {
                yPercent: 0,
                duration: 1,
                ease: "hop2",
                onStart: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(counter, {
                        value: 100,
                        duration: 2,
                        delay: 0.5,
                        ease: "power2.inOut",
                        onUpdate: ()=>{
                            if (!counterRef.current) return;
                            counterRef.current.textContent = String(Math.round(counter.value)).padStart(3, "0");
                        }
                    });
                }
            }, "<");
            tl.to(counterEl, {
                yPercent: -100,
                duration: 0.75,
                ease: "hop2"
            }, 3.25);
            tl.to(split.chars, {
                yPercent: -100,
                duration: 0.75,
                ease: "hop2",
                stagger: {
                    each: 0.1,
                    from: "start"
                }
            }, 3.25);
            tl.to(imgs, {
                scale: 0,
                clipPath: "polygon(20% 20%, 80% 20%, 80% 80%, 20% 80%)",
                duration: 1,
                ease: "hop2",
                stagger: -0.075
            }, 3.5);
            // Cover with color layers under a fixed dark top layer, then peel upward
            // (dark first via negative stagger, then colors underneath)
            tl.call(()=>{
                const colors = shuffle([
                    ...EXIT_COLORS
                ]);
                colorOverlays.forEach((el, i)=>{
                    el.style.backgroundColor = colors[i];
                });
            }, null, 4.7);
            tl.set(overlays, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }, 4.7);
            tl.set(root, {
                backgroundColor: "transparent",
                pointerEvents: "none"
            }, 4.7);
            tl.to(overlays, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 1,
                ease: "hop2",
                stagger: -0.1
            }, 4.75);
        };
        run();
        return ()=>{
            cancelled = true;
            tl?.kill();
            split?.revert();
        };
    }, {
        scope: preloaderRef,
        dependencies: [
            showPreloader
        ]
    });
    if (!showPreloader) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].preloader,
        ref: preloaderRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].images,
                children: IMAGES.map((src)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].img,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/Preloader/Preloader.js",
                            lineNumber: 286,
                            columnNumber: 7
                        }, this)
                    }, src, false, {
                        fileName: "[project]/src/components/Preloader/Preloader.js",
                        lineNumber: 282,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Preloader/Preloader.js",
                lineNumber: 280,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: titleRef,
                        children: "A27 Web Lab"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Preloader/Preloader.js",
                        lineNumber: 295,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counter,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            ref: counterRef,
                            children: "000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Preloader/Preloader.js",
                            lineNumber: 297,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Preloader/Preloader.js",
                        lineNumber: 296,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Preloader/Preloader.js",
                lineNumber: 294,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exitOverlays,
                "aria-hidden": "true",
                children: [
                    EXIT_COLORS.map((color, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exitOverlay,
                            ref: (el)=>{
                                colorOverlaysRef.current[i] = el;
                            },
                            style: {
                                backgroundColor: color,
                                zIndex: i + 1
                            }
                        }, color, false, {
                            fileName: "[project]/src/components/Preloader/Preloader.js",
                            lineNumber: 306,
                            columnNumber: 6
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exitOverlay} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exitOverlayDark}`,
                        ref: darkOverlayRef,
                        style: {
                            backgroundColor: DARK_OVERLAY
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Preloader/Preloader.js",
                        lineNumber: 315,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Preloader/Preloader.js",
                lineNumber: 301,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Preloader/Preloader.js",
        lineNumber: 276,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/components/Copy/Copy.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "char": "Copy-module__1LON9q__char",
  "line": "Copy-module__1LON9q__line",
  "word": "Copy-module__1LON9q__word",
});
}),
"[project]/src/components/Copy/Copy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Copy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Copy/Copy.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(callout, {
            scale: 0,
            rotation,
            transformOrigin: "center center"
        });
    });
    return callouts;
}
function Copy({ children, variant = "slide", splitType = "lines", animateOnScroll = true, delay = 0, stagger = 0.1 }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        let cancelled = false;
        let hasPlayed = false;
        const splits = [];
        const triggers = [];
        const tweens = [];
        let calloutEntries = [];
        const getElements = ()=>{
            if (container.hasAttribute("data-copy-wrapper")) {
                return Array.from(container.children);
            }
            return [
                container
            ];
        };
        const play = (tl)=>{
            if (hasPlayed) return;
            hasPlayed = true;
            // play() — not play(0) — so timeline `delay` is respected
            // (route heroes depend on that to wait out the page transition)
            tl.play();
        };
        document.fonts.ready.then(()=>{
            if (cancelled || !containerRef.current) return;
            const elements = getElements();
            calloutEntries = detachCallouts(elements);
            const callouts = prepareCallouts(calloutEntries);
            if (variant === "slide") {
                const type = splitType === "words" ? "words" : "lines";
                const allTargets = [];
                elements.forEach((element)=>{
                    const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                        type,
                        mask: type,
                        linesClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                        wordsClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word
                    });
                    splits.push(split);
                    allTargets.push(...type === "words" ? split.words : split.lines);
                });
                restoreCallouts(calloutEntries);
                prepareCallouts(calloutEntries);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allTargets, {
                    yPercent: 100
                });
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
                    triggers.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: container,
                        start: "top 90%",
                        once: true,
                        onEnter: ()=>play(tl),
                        onEnterBack: ()=>play(tl),
                        onRefresh: (self)=>{
                            if (self.progress > 0) play(tl);
                        }
                    }));
                    requestAnimationFrame(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh());
                }
            }
            if (variant === "scramble") {
                const allChars = [];
                elements.forEach((element)=>{
                    const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
                        type: "chars",
                        charsClass: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].char
                    });
                    splits.push(split);
                    allChars.push(...split.chars);
                });
                restoreCallouts(calloutEntries);
                prepareCallouts(calloutEntries);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(allChars, {
                    opacity: 0
                });
                const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
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
                    triggers.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: container,
                        start: "top 85%",
                        once: true,
                        onEnter: ()=>play(tl),
                        onEnterBack: ()=>play(tl),
                        onRefresh: (self)=>{
                            if (self.progress > 0) play(tl);
                        }
                    }));
                    requestAnimationFrame(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh());
                }
            }
        });
        return ()=>{
            cancelled = true;
            tweens.forEach((tween)=>tween.kill());
            triggers.forEach((trigger)=>trigger.kill());
            const liveEntries = calloutEntries.length > 0 ? calloutEntries : detachCallouts(getElements());
            liveEntries.forEach(({ callout })=>{
                if (callout.parentNode) callout.remove();
            });
            splits.forEach((split)=>split.revert());
            restoreCallouts(liveEntries);
            liveEntries.forEach(({ callout })=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(callout, {
                    clearProps: "transform"
                });
            });
        };
    }, {
        scope: containerRef,
        dependencies: [
            variant,
            splitType,
            animateOnScroll,
            delay,
            stagger
        ]
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.count(children) === 1) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(children, {
            ref: containerRef
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        "data-copy-wrapper": "true",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Copy/Copy.js",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/HeroSpotlight/HeroSpotlight.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "hero": "HeroSpotlight-module__EcJk1a__hero",
  "heroBottom": "HeroSpotlight-module__EcJk1a__heroBottom",
  "heroInner": "HeroSpotlight-module__EcJk1a__heroInner",
  "heroTop": "HeroSpotlight-module__EcJk1a__heroTop",
  "intro": "HeroSpotlight-module__EcJk1a__intro",
  "introClip": "HeroSpotlight-module__EcJk1a__introClip",
  "introInner": "HeroSpotlight-module__EcJk1a__introInner",
  "reelImage": "HeroSpotlight-module__EcJk1a__reelImage",
  "reelImageActive": "HeroSpotlight-module__EcJk1a__reelImageActive",
  "videoDesktop": "HeroSpotlight-module__EcJk1a__videoDesktop",
  "videoMobile": "HeroSpotlight-module__EcJk1a__videoMobile",
  "videoPreview": "HeroSpotlight-module__EcJk1a__videoPreview",
});
}),
"[project]/src/components/HeroSpotlight/HeroSpotlight.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSpotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Copy/Copy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Preloader/Preloader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/HeroSpotlight/HeroSpotlight.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const DESKTOP_MIN = 1000;
const REEL_INTERVAL = 900;
const SCALE_START = 0.25;
const SCALE_END = 1;
const RADIUS_START = 1.2;
const RADIUS_END = 0.4;
const REEL_IMAGES = Array.from({
    length: 10
}, (_, i)=>`/images/showreel/showreel_img_${i + 1}.png`);
const BREAKPOINTS = [
    {
        maxWidth: 1100,
        translateY: -135,
        movMultiplier: 450
    },
    {
        maxWidth: 1200,
        translateY: -130,
        movMultiplier: 500
    },
    {
        maxWidth: 1300,
        translateY: -125,
        movMultiplier: 550
    },
    {
        maxWidth: 1400,
        translateY: -120,
        movMultiplier: 600
    }
];
function getInitialValues() {
    const width = window.innerWidth;
    for (const bp of BREAKPOINTS){
        if (width <= bp.maxWidth) {
            return {
                translateY: bp.translateY,
                movementMultiplier: bp.movMultiplier
            };
        }
    }
    return {
        translateY: -110,
        movementMultiplier: 650
    };
}
function isDesktop() {
    return window.innerWidth >= DESKTOP_MIN;
}
function ShowreelFrame() {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>{
            setIndex((current)=>(current + 1) % REEL_IMAGES.length);
        }, REEL_INTERVAL);
        return ()=>clearInterval(id);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].videoPreview,
        children: REEL_IMAGES.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: "",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reelImage} ${i === index ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].reelImageActive : ""}`
            }, src, false, {
                fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                lineNumber: 68,
                columnNumber: 5
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
        lineNumber: 66,
        columnNumber: 3
    }, this);
}
function HeroSpotlight() {
    const introRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const desktopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const videoContainer = desktopRef.current;
        const mobileContainer = mobileRef.current;
        const intro = introRef.current;
        if (!intro) return;
        const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
        const introDelay = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInitialLoad"] ? 6.5 : 1.15;
        mm.add(`(min-width: ${DESKTOP_MIN}px)`, ()=>{
            if (!videoContainer) return;
            const initial = getInitialValues();
            const state = {
                scrollProgress: 0,
                initialTranslateY: initial.translateY,
                currentTranslateY: initial.translateY,
                movementMultiplier: initial.movementMultiplier,
                scale: SCALE_START,
                borderRadius: RADIUS_START,
                targetMouseX: 0,
                currentMouseX: 0
            };
            stateRef.current = state;
            const applyProgress = (progress)=>{
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(0, 1, progress);
                state.scrollProgress = p;
                state.currentTranslateY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(state.initialTranslateY, 0, p);
                state.scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(SCALE_START, SCALE_END, p);
                state.borderRadius = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(RADIUS_START, RADIUS_END, p);
            };
            const syncBreakpointValues = ()=>{
                const next = getInitialValues();
                state.initialTranslateY = next.translateY;
                state.movementMultiplier = next.movementMultiplier;
                applyProgress(state.scrollProgress);
            };
            const handleMouseMove = (e)=>{
                if ((e.clientX / window.innerWidth - 0.5) * 2 > -0.35 && e.clientX > -100) {
                    state.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
                }
            };
            const handleResize = ()=>{
                syncBreakpointValues();
            };
            window.addEventListener("resize", handleResize);
            document.addEventListener("mousemove", handleMouseMove);
            const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: intro,
                start: "top bottom",
                end: "top 10%",
                scrub: true,
                invalidateOnRefresh: true,
                onUpdate: (self)=>applyProgress(self.progress),
                onRefresh: (self)=>{
                    syncBreakpointValues();
                    applyProgress(self.progress);
                }
            });
            applyProgress(st.progress);
            // Clip-path reveal keeps images at native resolution (scale-from-0
            // rasterizes the layer tiny and looks pixelated until it finishes).
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(videoContainer, {
                clipPath: "inset(50%)"
            });
            const introTween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(videoContainer, {
                clipPath: "inset(0%)",
                duration: 1.15,
                delay: introDelay,
                ease: "power3.out"
            });
            const tick = ()=>{
                if (!stateRef.current || !isDesktop()) {
                    rafRef.current = requestAnimationFrame(tick);
                    return;
                }
                const { scale: rawScale, targetMouseX, currentMouseX, currentTranslateY, borderRadius, movementMultiplier } = state;
                const scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(SCALE_START, SCALE_END, rawScale);
                state.scale = scale;
                const width = videoContainer.offsetWidth;
                const maxShift = width * (1 - scale) / 2;
                const mouseStrength = (1 - scale) / (1 - SCALE_START);
                let targetX = mouseStrength > 0.001 ? targetMouseX * (1 - scale) * movementMultiplier : 0;
                targetX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(-maxShift, maxShift, targetX);
                state.currentMouseX = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.clamp(-maxShift, maxShift, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(currentMouseX, targetX, 0.05));
                videoContainer.style.transform = `translateY(${currentTranslateY}%) translateX(${state.currentMouseX}px) scale(${scale})`;
                videoContainer.style.setProperty("--reel-radius", `${borderRadius}rem`);
                rafRef.current = requestAnimationFrame(tick);
            };
            rafRef.current = requestAnimationFrame(tick);
            return ()=>{
                window.removeEventListener("resize", handleResize);
                document.removeEventListener("mousemove", handleMouseMove);
                cancelAnimationFrame(rafRef.current);
                introTween.kill();
                st.kill();
                stateRef.current = null;
                videoContainer.style.transform = "";
                videoContainer.style.clipPath = "";
                videoContainer.style.removeProperty("--reel-radius");
            };
        });
        mm.add(`(max-width: ${DESKTOP_MIN - 1}px)`, ()=>{
            if (!mobileContainer) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(mobileContainer, {
                clipPath: "inset(50%)"
            });
            const introTween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(mobileContainer, {
                clipPath: "inset(0%)",
                duration: 1.15,
                delay: introDelay,
                ease: "power3.out"
            });
            return ()=>{
                introTween.kill();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(mobileContainer, {
                    clearProps: "clipPath"
                });
            };
        });
        return ()=>mm.revert();
    }, {
        scope: introRef
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onResize = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        window.addEventListener("resize", onResize);
        return ()=>window.removeEventListener("resize", onResize);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `container pad ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroInner}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroTop,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                animateOnScroll: false,
                                delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInitialLoad"] ? 6.4 : 1.125,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Hi, we are A27 Web Lab."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 276,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 277,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "We know you want more than just a website."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 278,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "You want more CLIENTS, SALES, ATTENTION."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 279,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 280,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "hero-p-accent",
                                        children: " WE MAKE WEBSITES THAT EARN IT."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 281,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                lineNumber: 272,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                            lineNumber: 271,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroBottom,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    animateOnScroll: false,
                                    delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInitialLoad"] ? 6.8 : 1.3,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "You can look amazing online and ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                                lineNumber: 290,
                                                columnNumber: 41
                                            }, this),
                                            "feel proud every time you see it."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 289,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                    lineNumber: 285,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    animateOnScroll: false,
                                    delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isInitialLoad"] ? 6.6 : 1.2,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: "A27 Web Lab"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                        lineNumber: 298,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                    lineNumber: 294,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                            lineNumber: 284,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                    lineNumber: 270,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                lineNumber: 269,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].intro,
                ref: introRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `container pad-media ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introInner}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introClip,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].videoDesktop,
                                ref: desktopRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShowreelFrame, {}, void 0, false, {
                                    fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                    lineNumber: 314,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                lineNumber: 310,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].videoMobile,
                                ref: mobileRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShowreelFrame, {}, void 0, false, {
                                    fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                    lineNumber: 321,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                                lineNumber: 317,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                        lineNumber: 309,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                    lineNumber: 308,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSpotlight/HeroSpotlight.js",
                lineNumber: 304,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/SectionNav/SectionNav.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "inner": "SectionNav-module__WuK_IG__inner",
  "nav": "SectionNav-module__WuK_IG__nav",
});
}),
"[project]/src/components/SectionNav/SectionNav.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SectionNav/SectionNav.module.css [app-ssr] (css module)");
;
;
function SectionNav({ left, right }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono sm",
                    children: left
                }, void 0, false, {
                    fileName: "[project]/src/components/SectionNav/SectionNav.js",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono sm",
                    children: right
                }, void 0, false, {
                    fileName: "[project]/src/components/SectionNav/SectionNav.js",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SectionNav/SectionNav.js",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SectionNav/SectionNav.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SectionFooter/SectionFooter.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "SectionFooter-module__n3Ensq__footer",
  "inner": "SectionFooter-module__n3Ensq__inner",
});
}),
"[project]/src/components/SectionFooter/SectionFooter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SectionFooter/SectionFooter.module.css [app-ssr] (css module)");
;
;
function SectionFooter({ left, right }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono sm",
                    children: left
                }, void 0, false, {
                    fileName: "[project]/src/components/SectionFooter/SectionFooter.js",
                    lineNumber: 7,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/Callout/Callout.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "callout": "Callout-module__1J1nfW__callout",
  "label": "Callout-module__1J1nfW__label",
  "v1": "Callout-module__1J1nfW__v1",
  "v2": "Callout-module__1J1nfW__v2",
  "v3": "Callout-module__1J1nfW__v3",
  "v4": "Callout-module__1J1nfW__v4",
});
}),
"[project]/src/components/Callout/Callout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Callout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Callout/Callout.module.css [app-ssr] (css module)");
;
;
const VARIANTS = {
    1: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].v1,
    2: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].v2,
    3: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].v3,
    4: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].v4
};
function Callout({ label, variant = 3, rotation = 0, top, right, bottom, left, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-callout": "",
        "data-rotation": rotation,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].callout} ${VARIANTS[variant] ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].v3} ${className}`.trim(),
        style: {
            "--callout-rotation": `${rotation}deg`,
            top,
            right,
            bottom,
            left
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
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
}),
"[project]/src/components/About/About.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "about": "About-module__S-Ka5a__about",
  "callout": "About-module__S-Ka5a__callout",
  "calloutPoke": "About-module__S-Ka5a__calloutPoke",
  "calloutReally": "About-module__S-Ka5a__calloutReally",
  "headline": "About-module__S-Ka5a__headline",
  "headlineWrap": "About-module__S-Ka5a__headlineWrap",
  "inner": "About-module__S-Ka5a__inner",
  "line": "About-module__S-Ka5a__line",
  "spot": "About-module__S-Ka5a__spot",
  "spotPanel": "About-module__S-Ka5a__spotPanel",
  "word": "About-module__S-Ka5a__word",
});
}),
"[project]/src/components/About/About.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionNav/SectionNav.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionFooter/SectionFooter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Callout/Callout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/About/About.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const DESKTOP_MIN = 1000;
const SPOTS = [
    {
        src: "/images/about/about_spot_1.jpg",
        alt: ""
    },
    {
        src: "/images/about/about_spot_2.jpg",
        alt: ""
    },
    {
        src: "/images/about/about_spot_3.jpg",
        alt: ""
    }
];
const COLLAPSED = {
    width: "0.45em",
    height: "0.45em",
    borderRadius: "0.04em"
};
const EXPANDED = {
    width: "16rem",
    height: "12rem",
    borderRadius: "0.4rem"
};
const FOLLOW_MAX = 28;
const FOLLOW_LERP = 0.1;
function isDesktop() {
    return window.innerWidth >= DESKTOP_MIN;
}
function Spot({ src, alt }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sizeTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const posRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        tx: 0,
        ty: 0
    });
    const tickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopFollowTick = ()=>{
        if (tickRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(tickRef.current);
            tickRef.current = null;
        }
    };
    const startFollowTick = ()=>{
        stopFollowTick();
        const panel = panelRef.current;
        if (!panel) return;
        tickRef.current = ()=>{
            const pos = posRef.current;
            pos.x += (pos.tx - pos.x) * FOLLOW_LERP;
            pos.y += (pos.ty - pos.y) * FOLLOW_LERP;
            if (Math.abs(pos.tx - pos.x) < 0.01) pos.x = pos.tx;
            if (Math.abs(pos.ty - pos.y) < 0.01) pos.y = pos.ty;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(panel, {
                x: pos.x,
                y: pos.y
            });
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(tickRef.current);
    };
    const reset = ()=>{
        const panel = panelRef.current;
        const img = imgRef.current;
        if (!panel || !img) return;
        stopFollowTick();
        sizeTweenRef.current?.kill();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf([
            panel,
            img
        ]);
        activeRef.current = false;
        posRef.current = {
            x: 0,
            y: 0,
            tx: 0,
            ty: 0
        };
        if (ref.current) ref.current.dataset.active = "false";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(panel, {
            clearProps: "width,height,borderRadius",
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(img, {
            clearProps: "opacity"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const panel = panelRef.current;
        if (!panel) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(panel, {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0
        });
        const onResize = ()=>{
            if (!isDesktop()) reset();
        };
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("resize", onResize);
            stopFollowTick();
        };
    }, []);
    const follow = (e)=>{
        if (!activeRef.current || !isDesktop() || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        let dx = e.clientX - cx;
        let dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > FOLLOW_MAX) {
            const scale = FOLLOW_MAX / dist;
            dx *= scale;
            dy *= scale;
        }
        posRef.current.tx = dx;
        posRef.current.ty = dy;
    };
    const expand = ()=>{
        if (!isDesktop()) return;
        const panel = panelRef.current;
        const img = imgRef.current;
        if (!panel || !img || !ref.current) return;
        sizeTweenRef.current?.kill();
        activeRef.current = true;
        ref.current.dataset.active = "true";
        posRef.current = {
            x: 0,
            y: 0,
            tx: 0,
            ty: 0
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(panel, {
            xPercent: -50,
            yPercent: -50,
            x: 0,
            y: 0
        });
        startFollowTick();
        sizeTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(panel, {
            width: EXPANDED.width,
            height: EXPANDED.height,
            borderRadius: EXPANDED.borderRadius,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
            force3D: false
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(img, {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto"
        });
    };
    const collapse = ()=>{
        if (!isDesktop()) return;
        const panel = panelRef.current;
        const img = imgRef.current;
        if (!panel || !img || !ref.current) return;
        sizeTweenRef.current?.kill();
        activeRef.current = false;
        posRef.current.tx = 0;
        posRef.current.ty = 0;
        stopFollowTick();
        sizeTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(panel, {
            width: COLLAPSED.width,
            height: COLLAPSED.height,
            borderRadius: COLLAPSED.borderRadius,
            x: 0,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            overwrite: "auto",
            force3D: false,
            onComplete: ()=>{
                if (activeRef.current) return;
                posRef.current = {
                    x: 0,
                    y: 0,
                    tx: 0,
                    ty: 0
                };
                if (ref.current) ref.current.dataset.active = "false";
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(panel, {
                    clearProps: "width,height,borderRadius",
                    xPercent: -50,
                    yPercent: -50,
                    x: 0,
                    y: 0
                });
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(img, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            overwrite: "auto"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spot,
        "data-active": "false",
        onMouseEnter: expand,
        onMouseMove: follow,
        onMouseLeave: collapse,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: panelRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spotPanel,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: imgRef,
                src: src,
                alt: alt,
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/components/About/About.js",
                lineNumber: 223,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/About/About.js",
            lineNumber: 222,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/About/About.js",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
function About() {
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const wrap = headlineRef.current;
        if (!wrap) return;
        const callouts = wrap.querySelectorAll("[data-callout]");
        if (!callouts.length) return;
        callouts.forEach((callout)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(callout, {
                scale: 0,
                rotation: Number(callout.dataset.rotation) || 0,
                transformOrigin: "center center"
            });
        });
        const tween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(callouts, {
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.45)",
            stagger: 0.1,
            delay: 0.35,
            paused: true
        });
        const trigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: wrap,
            start: "top 90%",
            once: true,
            onEnter: ()=>tween.play(),
            onRefresh: (self)=>{
                if (self.progress > 0) tween.play();
            }
        });
        requestAnimationFrame(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh());
        return ()=>{
            tween.kill();
            trigger.kill();
        };
    }, {
        scope: headlineRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].about,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                left: "Studio No. 01",
                right: "Lat 0° / Vibe 10"
            }, void 0, false, {
                fileName: "[project]/src/components/About/About.js",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container pad ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headlineWrap,
                    ref: headlineRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headline,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: "We draw the"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About/About.js",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
                                            children: "Things"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spot, {
                                            ...SPOTS[0]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
                                            children: "others"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About/About.js",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: "Are too"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About/About.js",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
                                            children: "Scared"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spot, {
                                            ...SPOTS[1]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
                                            children: "to"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About/About.js",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: "Even pitch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About/About.js",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].line,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
                                            children: "Out"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spot, {
                                            ...SPOTS[2]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].word,
                                            children: "loud"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About/About.js",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About/About.js",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/About/About.js",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].callout} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].calloutPoke}`,
                            label: "Poke these",
                            rotation: 15,
                            top: "0.75em",
                            right: "-0.1em",
                            variant: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/About/About.js",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].callout} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].calloutReally}`,
                            label: "Yes, really",
                            variant: 1,
                            rotation: -15,
                            top: "calc(0.9em * 4 + 0.25em)",
                            left: "0.5em"
                        }, void 0, false, {
                            fileName: "[project]/src/components/About/About.js",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/About/About.js",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/About/About.js",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                left: "Open For Trouble",
                right: "More Below"
            }, void 0, false, {
                fileName: "[project]/src/components/About/About.js",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/About/About.js",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FeaturedWork/FeaturedWork.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "FeaturedWork-module__1i6OJq__card",
  "col": "FeaturedWork-module__1i6OJq__col",
  "colMedia": "FeaturedWork-module__1i6OJq__colMedia",
  "colTop": "FeaturedWork-module__1i6OJq__colTop",
  "description": "FeaturedWork-module__1i6OJq__description",
  "sectionFooter": "FeaturedWork-module__1i6OJq__sectionFooter",
  "sectionNav": "FeaturedWork-module__1i6OJq__sectionNav",
  "stickyCards": "FeaturedWork-module__1i6OJq__stickyCards",
});
}),
"[project]/src/components/FeaturedWork/FeaturedWork.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedWork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionNav/SectionNav.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionFooter/SectionFooter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedWork/FeaturedWork.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const CARD_Y_OFFSET = 5;
const CARD_SCALE_STEP = 0.075;
const PROJECTS = [
    {
        name: "Ghost Signal",
        description: "A cast of characters and animated bumpers built for a late-night channel.",
        tags: [
            "Characters",
            "Animation"
        ],
        image: "/images/featured-work/featured_work_1.png",
        color: "var(--base-400)"
    },
    {
        name: "Stack House",
        description: "A full illustrated world wrapped around a weird little apartment brand.",
        tags: [
            "Illustration",
            "Worldbuilding"
        ],
        image: "/images/featured-work/featured_work_2.png",
        color: "var(--base-800)"
    },
    {
        name: "Wet Brain",
        description: "Cover art and a mascot for an app that had no business being this fun.",
        tags: [
            "Cover Art",
            "Mascot"
        ],
        image: "/images/featured-work/featured_work_3.png",
        color: "var(--base-600)"
    },
    {
        name: "Slow Burn",
        description: "A poster series and looping visuals for a music label that never sleeps.",
        tags: [
            "Posters",
            "Motion"
        ],
        image: "/images/featured-work/featured_work_4.png",
        color: "var(--base-900)"
    }
];
function FeaturedWork() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const section = sectionRef.current;
        const cards = cardsRef.current.filter(Boolean);
        if (!section || cards.length === 0) return;
        const totalCards = cards.length;
        const segmentSize = 1 / totalCards;
        // Match original init — only position + scale
        cards.forEach((card, i)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                xPercent: -50,
                yPercent: -50 + i * CARD_Y_OFFSET,
                scale: 1 - i * CARD_SCALE_STEP
            });
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: section,
            start: "top top",
            end: ()=>`+=${window.innerHeight * 4}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                const progress = self.progress;
                const activeIndex = Math.min(Math.floor(progress / segmentSize), totalCards - 1);
                const segProgress = (progress - activeIndex * segmentSize) / segmentSize;
                cards.forEach((card, i)=>{
                    if (i < activeIndex) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            yPercent: -250,
                            rotationX: 35
                        });
                    } else if (i === activeIndex) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            yPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(-50, -200, segProgress),
                            rotationX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.interpolate(0, 35, segProgress),
                            scale: 1
                        });
                    } else {
                        const behindIndex = i - activeIndex;
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                            yPercent: -50 + (behindIndex - segProgress) * CARD_Y_OFFSET,
                            rotationX: 0,
                            scale: 1 - (behindIndex - segProgress) * CARD_SCALE_STEP
                        });
                    }
                });
            }
        });
    }, {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stickyCards,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionNav,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    left: "The Good Stuff",
                    right: "04 / Chaos"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                    lineNumber: 128,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                lineNumber: 127,
                columnNumber: 4
            }, this),
            PROJECTS.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                    style: {
                        backgroundColor: project.color
                    },
                    ref: (el)=>{
                        cardsRef.current[i] = el;
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colTop,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mono ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tags} sm`,
                                            children: project.tags.join(" / ")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                                            lineNumber: 145,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                            children: project.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                                            lineNumber: 148,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                                    lineNumber: 144,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                                    lineNumber: 150,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                            lineNumber: 143,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].colMedia}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: project.image,
                                alt: project.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                                lineNumber: 153,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                            lineNumber: 152,
                            columnNumber: 6
                        }, this)
                    ]
                }, project.name, true, {
                    fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                    lineNumber: 135,
                    columnNumber: 5
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionFooter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    left: "Roll Through",
                    right: "Best In Show"
                }, void 0, false, {
                    fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                    lineNumber: 162,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
                lineNumber: 161,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeaturedWork/FeaturedWork.js",
        lineNumber: 123,
        columnNumber: 3
    }, this);
}
}),
"[project]/src/components/Testimonials/Testimonials.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "author": "Testimonials-module__5wb8fq__author",
  "avatar": "Testimonials-module__5wb8fq__avatar",
  "callout": "Testimonials-module__5wb8fq__callout",
  "card": "Testimonials-module__5wb8fq__card",
  "cards": "Testimonials-module__5wb8fq__cards",
  "dark": "Testimonials-module__5wb8fq__dark",
  "heading": "Testimonials-module__5wb8fq__heading",
  "light": "Testimonials-module__5wb8fq__light",
  "meta": "Testimonials-module__5wb8fq__meta",
  "name": "Testimonials-module__5wb8fq__name",
  "quote": "Testimonials-module__5wb8fq__quote",
  "sectionFooter": "Testimonials-module__5wb8fq__sectionFooter",
  "sectionNav": "Testimonials-module__5wb8fq__sectionNav",
  "stars": "Testimonials-module__5wb8fq__stars",
  "testimonials": "Testimonials-module__5wb8fq__testimonials",
});
}),
"[project]/src/components/Testimonials/Testimonials.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionNav/SectionNav.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionFooter/SectionFooter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Callout/Callout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Copy/Copy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Testimonials/Testimonials.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"]);
const DESKTOP_MIN = 1000;
const REST = [
    {
        x: -260,
        y: 16,
        r: -8
    },
    {
        x: -90,
        y: -12,
        r: 5
    },
    {
        x: 95,
        y: 10,
        r: -4
    },
    {
        x: 265,
        y: -8,
        r: 9
    }
];
const BIAS = [
    {
        x: 1.05,
        y: 6,
        r: -2
    },
    {
        x: 0.9,
        y: -5,
        r: 3
    },
    {
        x: 1.1,
        y: 7,
        r: -3
    },
    {
        x: 0.95,
        y: -4,
        r: 2
    }
];
const TESTIMONIALS = [
    {
        quote: "Blunt built our look faster than anyone we've worked with. Strange, confident, and completely ours.",
        name: "Ravi Menon",
        role: "Crumb, Founder",
        avatar: "/images/testimonials/testimonial_img_1.jpg",
        tone: "light"
    },
    {
        quote: "They gave our product a face and a mood. It feels alive now, and it knows exactly when to hold back.",
        name: "Cleo Baptiste",
        role: "Nettle, Head of Product",
        avatar: "/images/testimonials/testimonial_img_2.jpg",
        tone: "dark"
    },
    {
        quote: "We came in with a mess and left with a world. Hard to find people this quick who still make it fun.",
        name: "Otto Lindqvist",
        role: "Sludge, Co-Founder",
        avatar: "/images/testimonials/testimonial_img_3.jpg",
        tone: "light"
    },
    {
        quote: "From branding to social, they nailed every piece. Smooth process, loud results, would do it all again.",
        name: "Nadia Karim",
        role: "Bramble, CMO",
        avatar: "/images/testimonials/testimonial_img_4.jpg",
        tone: "dark"
    }
];
function getPoses(activeIndex) {
    if (activeIndex === null) return REST;
    return REST.map((pose, i)=>{
        if (i === activeIndex) {
            return {
                x: pose.x,
                y: pose.y,
                r: pose.r * 0.35
            };
        }
        const dir = i < activeIndex ? -1 : 1;
        const dist = Math.abs(i - activeIndex);
        const bias = BIAS[i];
        const push = (38 + dist * 28) * bias.x;
        return {
            x: pose.x + dir * push,
            y: pose.y + bias.y * dist * 0.55,
            r: pose.r + bias.r * dist * 1.15
        };
    });
}
function isDesktop() {
    return window.innerWidth >= DESKTOP_MIN;
}
function Testimonials() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardElsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLenis"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGSAP"])(()=>{
        const section = sectionRef.current;
        const cards = cardElsRef.current.filter(Boolean);
        if (!section || cards.length === 0) return;
        let activeIndex = null;
        let desktopBound = false;
        let introDone = false;
        const onEnter = [];
        let onCardLeave = null;
        let introTrigger = null;
        const clearHover = ()=>{
            cards.forEach((el, i)=>{
                if (onEnter[i]) el.removeEventListener("mouseenter", onEnter[i]);
                if (onCardLeave) el.removeEventListener("mouseleave", onCardLeave);
            });
            onEnter.length = 0;
            onCardLeave = null;
            activeIndex = null;
            desktopBound = false;
        };
        const moveTo = (poses)=>{
            if (!introDone) return;
            cards.forEach((el, i)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                    x: poses[i].x,
                    y: poses[i].y,
                    rotation: poses[i].r,
                    duration: 0.4,
                    ease: "power3.out",
                    overwrite: "auto",
                    force3D: true
                });
            });
        };
        const scatter = (index)=>{
            if (!desktopBound || !introDone) return;
            if (index === activeIndex) return;
            activeIndex = index;
            moveTo(getPoses(index));
        };
        const bindDesktopHover = ()=>{
            if (desktopBound || !introDone || !isDesktop()) return;
            const isOverCard = (node)=>{
                if (!node || !(node instanceof Element)) return false;
                return cards.some((card)=>card === node || card.contains(node));
            };
            onCardLeave = (e)=>{
                if (isOverCard(e.relatedTarget)) return;
                scatter(null);
            };
            cards.forEach((el, i)=>{
                onEnter[i] = ()=>scatter(i);
                el.addEventListener("mouseenter", onEnter[i]);
                el.addEventListener("mouseleave", onCardLeave);
            });
            desktopBound = true;
        };
        const setRestPose = (el, i, extras = {})=>{
            if (isDesktop()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    x: REST[i].x,
                    y: REST[i].y,
                    rotation: REST[i].r,
                    zIndex: i + 1,
                    xPercent: -50,
                    yPercent: -50,
                    force3D: true,
                    ...extras
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    xPercent: 0,
                    yPercent: 0,
                    clearProps: "zIndex",
                    ...extras
                });
            }
        };
        const INTRO_Y = Math.max(window.innerHeight * 0.75, 600);
        cards.forEach((el, i)=>{
            if (isDesktop()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    x: REST[i].x,
                    y: REST[i].y + INTRO_Y,
                    rotation: REST[i].r,
                    zIndex: i + 1,
                    xPercent: -50,
                    yPercent: -50,
                    force3D: true
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                    x: 0,
                    y: INTRO_Y,
                    rotation: 0,
                    xPercent: 0,
                    yPercent: 0
                });
            }
        });
        const playIntro = ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: ()=>{
                    introDone = true;
                    bindDesktopHover();
                }
            });
            cards.forEach((el, i)=>{
                tl.to(el, {
                    y: isDesktop() ? REST[i].y : 0,
                    duration: 0.9,
                    ease: "power3.out",
                    overwrite: "auto"
                }, i * 0.1);
            });
            return tl;
        };
        introTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: section,
            start: "top 75%",
            once: true,
            onEnter: ()=>playIntro()
        });
        const syncMode = ()=>{
            clearHover();
            if (!introDone) {
                cards.forEach((el, i)=>{
                    if (isDesktop()) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                            x: REST[i].x,
                            y: REST[i].y + INTRO_Y,
                            rotation: REST[i].r,
                            zIndex: i + 1,
                            xPercent: -50,
                            yPercent: -50,
                            force3D: true
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                            x: 0,
                            y: INTRO_Y,
                            rotation: 0,
                            xPercent: 0,
                            yPercent: 0
                        });
                    }
                });
                return;
            }
            cards.forEach((el, i)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(el);
                setRestPose(el, i);
            });
            if (isDesktop()) bindDesktopHover();
        };
        window.addEventListener("resize", syncMode);
        return ()=>{
            window.removeEventListener("resize", syncMode);
            clearHover();
            introTrigger?.kill();
            cards.forEach((el)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(el));
        };
    }, {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonials,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionNav,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionNav$2f$SectionNav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    left: "The Verdict",
                    right: "Five Stars, Mostly"
                }, void 0, false, {
                    fileName: "[project]/src/components/Testimonials/Testimonials.js",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                lineNumber: 300,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Copy$2f$Copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                splitType: "words",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                    children: [
                        "Proof We Play Well With Others",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Callout$2f$Callout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].callout,
                            label: "No edits",
                            variant: 3,
                            rotation: -15,
                            top: "-0.1em",
                            left: "-0.35em"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Testimonials/Testimonials.js",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Testimonials/Testimonials.js",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cards,
                children: TESTIMONIALS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"][item.tone]}`,
                        ref: (el)=>{
                            cardElsRef.current[i] = el;
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stars,
                                "aria-hidden": "true",
                                children: Array.from({
                                    length: 5
                                }).map((_, s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BsStarFill"], {}, s, false, {
                                        fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quote,
                                children: item.quote
                            }, void 0, false, {
                                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].author,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.avatar,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mono ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role} sm`,
                                                children: item.role
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                                lineNumber: 335,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/Testimonials/Testimonials.js",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionFooter,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionFooter$2f$SectionFooter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    left: "Unfiltered Praise",
                    right: "Proof In Ink"
                }, void 0, false, {
                    fileName: "[project]/src/components/Testimonials/Testimonials.js",
                    lineNumber: 349,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Testimonials/Testimonials.js",
                lineNumber: 348,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Testimonials/Testimonials.js",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Preloader/Preloader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSpotlight/HeroSpotlight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/About/About.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturedWork/FeaturedWork.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Testimonials/Testimonials.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Preloader$2f$Preloader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSpotlight$2f$HeroSpotlight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2f$About$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturedWork$2f$FeaturedWork$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2f$Testimonials$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_0cqh_5b._.js.map