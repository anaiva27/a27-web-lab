(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/textAnimations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animateElement",
    ()=>animateElement,
    "animateElements",
    ()=>animateElements,
    "cleanupAnimations",
    ()=>cleanupAnimations,
    "initAnimations",
    ()=>initAnimations,
    "lineRevealAnimation",
    ()=>lineRevealAnimation,
    "revealAnimation",
    ()=>revealAnimation,
    "scrambleAnimation",
    ()=>scrambleAnimation,
    "scrambleText",
    ()=>scrambleText,
    "scrambleTextStaggered",
    ()=>scrambleTextStaggered
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"]);
const DESKTOP_MIN = 1200;
let splitInstances = [];
function getTextContent(element) {
    return element.textContent || element.innerText || "";
}
function isDesktop() {
    return window.innerWidth >= DESKTOP_MIN;
}
function scrambleText(elements, duration = 0.4) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    elements.forEach((char)=>{
        // Icons (e.g. SVG arrows) can't scramble glyphs — reveal with the stagger
        if (char.tagName === "svg" || char.tagName === "SVG") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(char, {
                opacity: 0
            }, {
                opacity: 1,
                duration: duration * 0.5,
                ease: "power2.out"
            });
            return;
        }
        const originalText = char.textContent;
        let iterations = 0;
        const maxIterations = Math.floor(Math.random() * 6) + 3;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(char, {
            opacity: 1
        });
        const scrambleInterval = setInterval(()=>{
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            iterations++;
            if (iterations >= maxIterations) {
                clearInterval(scrambleInterval);
                char.textContent = originalText;
            }
        }, 50);
        setTimeout(()=>{
            clearInterval(scrambleInterval);
            char.textContent = originalText;
        }, duration * 1000);
    });
}
function scrambleTextStaggered(elements, duration = 0.4) {
    elements.forEach((char, index)=>{
        setTimeout(()=>{
            scrambleText([
                char
            ], duration);
        }, index * 30);
    });
}
function scrambleAnimation(element, delay = 0) {
    const textContent = getTextContent(element);
    if (!textContent.trim()) return null;
    const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
        type: "chars"
    });
    splitInstances.push(split);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
        opacity: 0
    });
    setTimeout(()=>{
        scrambleTextStaggered(split.chars, 0.4);
    }, delay * 1000);
    return split;
}
function revealAnimation(element, delay = 0) {
    const textContent = getTextContent(element);
    if (!textContent.trim()) return null;
    const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
        type: "words",
        mask: "words"
    });
    splitInstances.push(split);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.words, {
        yPercent: 120
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(split.words, {
        duration: 0.75,
        yPercent: 0,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay
    });
    return split;
}
function lineRevealAnimation(element, delay = 0) {
    const textContent = getTextContent(element);
    if (!textContent.trim()) return null;
    const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(element, {
        type: "lines",
        mask: "lines"
    });
    splitInstances.push(split);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.lines, {
        yPercent: 120
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(split.lines, {
        duration: 0.8,
        yPercent: 0,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay
    });
    return split;
}
function initAnimations() {
    if (!isDesktop()) return;
    document.fonts.ready.then(()=>{
        const animatedElements = document.querySelectorAll("[data-animate-type]");
        const sectionsWithScrollElements = new Set();
        animatedElements.forEach((element)=>{
            const animationType = element.getAttribute("data-animate-type");
            const delay = parseFloat(element.getAttribute("data-animate-delay")) || 0;
            const animateOnScroll = element.getAttribute("data-animate-on-scroll") === "true";
            if (animateOnScroll) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(element, {
                    opacity: 0
                });
                const parentSection = element.closest("section");
                if (!parentSection) return;
                if (!sectionsWithScrollElements.has(parentSection)) {
                    sectionsWithScrollElements.add(parentSection);
                    const observer = new IntersectionObserver((entries)=>{
                        entries.forEach((entry)=>{
                            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                                const sectionElements = entry.target.querySelectorAll('[data-animate-on-scroll="true"]');
                                sectionElements.forEach((el)=>{
                                    const elAnimationType = el.getAttribute("data-animate-type");
                                    const elDelay = parseFloat(el.getAttribute("data-animate-delay")) || 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                                        opacity: 1
                                    });
                                    switch(elAnimationType){
                                        case "scramble":
                                            scrambleAnimation(el, elDelay);
                                            break;
                                        case "reveal":
                                            revealAnimation(el, elDelay);
                                            break;
                                        case "line-reveal":
                                            lineRevealAnimation(el, elDelay);
                                            break;
                                    }
                                });
                                observer.unobserve(entry.target);
                            }
                        });
                    }, {
                        threshold: [
                            0,
                            0.1,
                            0.3,
                            0.5,
                            0.7,
                            1.0
                        ],
                        rootMargin: "0px 0px -20% 0px"
                    });
                    observer.observe(parentSection);
                }
            } else {
                switch(animationType){
                    case "scramble":
                        scrambleAnimation(element, delay);
                        break;
                    case "reveal":
                        revealAnimation(element, delay);
                        break;
                    case "line-reveal":
                        lineRevealAnimation(element, delay);
                        break;
                }
            }
        });
    });
}
function cleanupAnimations() {
    splitInstances.forEach((split)=>{
        split.revert();
    });
    splitInstances = [];
}
function animateElement(selector, type, delay = 0) {
    if (!isDesktop()) return;
    const element = document.querySelector(selector);
    if (!element) return;
    switch(type){
        case "scramble":
            scrambleAnimation(element, delay);
            break;
        case "reveal":
            revealAnimation(element, delay);
            break;
        case "line-reveal":
            lineRevealAnimation(element, delay);
            break;
    }
}
function animateElements(selector, type, delay = 0, staggerDelay = 0.1) {
    if (!isDesktop()) return;
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    elements.forEach((element, index)=>{
        const totalDelay = delay + index * staggerDelay;
        switch(type){
            case "scramble":
                scrambleAnimation(element, totalDelay);
                break;
            case "reveal":
                revealAnimation(element, totalDelay);
                break;
            case "line-reveal":
                lineRevealAnimation(element, totalDelay);
                break;
        }
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Menu/Menu.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "Menu-module__88cxuq__arrow",
  "bar": "Menu-module__88cxuq__bar",
  "barOpen": "Menu-module__88cxuq__barOpen",
  "desktopLeft": "Menu-module__88cxuq__desktopLeft",
  "desktopRight": "Menu-module__88cxuq__desktopRight",
  "hamburger": "Menu-module__88cxuq__hamburger",
  "hamburgerLine": "Menu-module__88cxuq__hamburgerLine",
  "hamburgerOpen": "Menu-module__88cxuq__hamburgerOpen",
  "linkLabel": "Menu-module__88cxuq__linkLabel",
  "logo": "Menu-module__88cxuq__logo",
  "menuShell": "Menu-module__88cxuq__menuShell",
  "menuToggle": "Menu-module__88cxuq__menuToggle",
  "nav": "Menu-module__88cxuq__nav",
  "navHidden": "Menu-module__88cxuq__navHidden",
  "navInner": "Menu-module__88cxuq__navInner",
  "overlay": "Menu-module__88cxuq__overlay",
  "overlayNav": "Menu-module__88cxuq__overlayNav",
  "overlaySocial": "Menu-module__88cxuq__overlaySocial",
  "pill": "Menu-module__88cxuq__pill",
  "rightLink": "Menu-module__88cxuq__rightLink",
});
}),
"[project]/src/components/Menu/Menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ti/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$textAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/textAnimations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Menu/Menu.module.css [app-client] (css module)");
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
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const LEFT_LINKS = [
    {
        label: "about",
        href: "/about"
    },
    {
        label: "workX",
        href: "/workX"
    }
];
const RIGHT_LINKS = [
    {
        label: "work",
        href: "/work"
    },
    // { label: "careers", href: "/careers" },
    {
        label: "contact",
        href: "/contact"
    }
];
// const MOBILE_LINKS = [...LEFT_LINKS, ...RIGHT_LINKS];
const MOBILE_LINKS = [
    ...RIGHT_LINKS
];
const SOCIAL_LINKS = [
    {
        label: "Resume",
        href: "/"
    },
    {
        label: "LinkedIn",
        href: "/"
    }
];
function Menu() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const socialSplitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isMenuVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const closeMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "Menu.useRef[closeMenuRef]": ()=>{}
    }["Menu.useRef[closeMenuRef]"]);
    const menuTimelineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Menu.useGSAP": ()=>{
            const overlay = overlayRef.current;
            const social = socialRef.current;
            if (!overlay || !social) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(overlay, {
                scaleY: 0,
                transformOrigin: "top center"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(social, {
                opacity: 1,
                y: 20
            });
            splitsRef.current = [];
            socialSplitsRef.current = [];
            overlay.querySelectorAll("li a").forEach({
                "Menu.useGSAP": (link)=>{
                    const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(link, {
                        type: "words",
                        mask: "words"
                    });
                    splitsRef.current.push(split);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.words, {
                        yPercent: 120
                    });
                }
            }["Menu.useGSAP"]);
            social.querySelectorAll("a").forEach({
                "Menu.useGSAP": (link)=>{
                    const label = link.querySelector("span") || link;
                    const arrow = link.querySelector("svg");
                    const split = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(label, {
                        type: "chars"
                    });
                    socialSplitsRef.current.push({
                        arrow,
                        chars: split.chars
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(split.chars, {
                        opacity: 0
                    });
                    if (arrow) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(arrow, {
                        opacity: 0
                    });
                }
            }["Menu.useGSAP"]);
        }
    }["Menu.useGSAP"], {
        scope: navRef
    });
    function getWords() {
        return splitsRef.current.flatMap((split)=>split.words);
    }
    function getSocialRevealElements() {
        return socialSplitsRef.current.flatMap(({ arrow, chars })=>arrow ? [
                arrow,
                ...chars
            ] : chars);
    }
    function openMenu() {
        if (isAnimating.current || isOpenRef.current) return;
        isAnimating.current = true;
        isOpenRef.current = true;
        setIsOpen(true);
        menuTimelineRef.current?.kill();
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                isAnimating.current = false;
            }
        });
        menuTimelineRef.current = tl;
        tl.to(overlayRef.current, {
            scaleY: 1,
            duration: 0.5,
            ease: "power3.out"
        });
        tl.to(getWords(), {
            yPercent: 0,
            duration: 0.75,
            stagger: 0.05,
            ease: "power4.out"
        }, "-=0.3");
        tl.to(socialRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            onComplete: ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$textAnimations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrambleTextStaggered"])(getSocialRevealElements(), 0.4);
            }
        }, "-=1");
    }
    function closeMenu({ force = false } = {}) {
        if (!isOpenRef.current && !force) return;
        if (isAnimating.current && !force) return;
        menuTimelineRef.current?.kill();
        isAnimating.current = true;
        isOpenRef.current = false;
        setIsOpen(false);
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                isAnimating.current = false;
            }
        });
        menuTimelineRef.current = tl;
        tl.to(socialRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(getSocialRevealElements(), {
                    opacity: 0
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(socialRef.current, {
                    y: 20
                });
            }
        });
        tl.to(getWords(), {
            yPercent: 120,
            duration: 0.25,
            stagger: -0.025,
            ease: "power2.in"
        }, "<");
        tl.to(overlayRef.current, {
            scaleY: 0,
            duration: 0.5,
            ease: "power3.inOut"
        }, "-=0.2");
    }
    closeMenuRef.current = closeMenu;
    function toggleMenu() {
        if (isOpenRef.current) closeMenu();
        else openMenu();
    }
    function handleNavLinkClick() {
        closeMenu({
            force: true
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            if (isOpenRef.current) {
                closeMenuRef.current({
                    force: true
                });
            }
        }
    }["Menu.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            lastScrollY.current = window.scrollY;
            function handleScroll() {
                const currentScrollY = window.scrollY;
                const menu = navRef.current;
                if (!menu) return;
                if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                    if (isOpenRef.current) closeMenuRef.current({
                        force: true
                    });
                    if (isMenuVisible.current) {
                        menu.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navHidden);
                        isMenuVisible.current = false;
                    }
                } else if (currentScrollY < lastScrollY.current) {
                    if (!isMenuVisible.current) {
                        menu.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navHidden);
                        isMenuVisible.current = true;
                    }
                }
                lastScrollY.current = currentScrollY;
            }
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Menu.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
        ref: navRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navInner}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuShell,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barOpen : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                                children: "A27 Web Lab"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.js",
                                lineNumber: 240,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopRight,
                                children: RIGHT_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightLink,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.js",
                                                lineNumber: 270,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiLocationArrow"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.js",
                                                lineNumber: 271,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/src/components/Menu/Menu.js",
                                        lineNumber: 265,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.js",
                                lineNumber: 263,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuToggle,
                                onClick: toggleMenu,
                                "aria-expanded": isOpen,
                                "aria-label": isOpen ? "Close menu" : "Open menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburgerOpen : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburgerLine
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Menu/Menu.js",
                                            lineNumber: 288,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburgerLine
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Menu/Menu.js",
                                            lineNumber: 289,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Menu/Menu.js",
                                    lineNumber: 285,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.js",
                                lineNumber: 279,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Menu/Menu.js",
                        lineNumber: 239,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                        ref: overlayRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlayNav,
                                children: MOBILE_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            onClick: handleNavLinkClick,
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Menu/Menu.js",
                                            lineNumber: 301,
                                            columnNumber: 10
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/src/components/Menu/Menu.js",
                                        lineNumber: 300,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.js",
                                lineNumber: 298,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlaySocial,
                                ref: socialRef,
                                children: SOCIAL_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        onClick: handleNavLinkClick,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ti$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TiLocationArrow"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.js",
                                                lineNumber: 320,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].linkLabel,
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Menu/Menu.js",
                                                lineNumber: 324,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, link.label, true, {
                                        fileName: "[project]/src/components/Menu/Menu.js",
                                        lineNumber: 315,
                                        columnNumber: 9
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Menu/Menu.js",
                                lineNumber: 310,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Menu/Menu.js",
                        lineNumber: 294,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Menu/Menu.js",
                lineNumber: 238,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Menu/Menu.js",
            lineNumber: 237,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Menu/Menu.js",
        lineNumber: 233,
        columnNumber: 3
    }, this);
}
_s(Menu, "J4Woq56aAyUi03ASNC5u4jafHmY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer/Footer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottom": "Footer-module__Grjkva__bottom",
  "brand": "Footer-module__Grjkva__brand",
  "column": "Footer-module__Grjkva__column",
  "columnNav": "Footer-module__Grjkva__columnNav",
  "columns": "Footer-module__Grjkva__columns",
  "content": "Footer-module__Grjkva__content",
  "footer": "Footer-module__Grjkva__footer",
  "inner": "Footer-module__Grjkva__inner",
  "legal": "Footer-module__Grjkva__legal",
  "meta": "Footer-module__Grjkva__meta",
  "object": "Footer-module__Grjkva__object",
  "objectContainer": "Footer-module__Grjkva__objectContainer",
  "top": "Footer-module__Grjkva__top",
  "v1": "Footer-module__Grjkva__v1",
  "v2": "Footer-module__Grjkva__v2",
  "v3": "Footer-module__Grjkva__v3",
  "v4": "Footer-module__Grjkva__v4",
});
}),
"[project]/src/components/Footer/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/matter-js/build/matter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Footer/Footer.module.css [app-client] (css module)");
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
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const OBJECTS = [
    "Illustration",
    "Characters",
    "Motion",
    "Murals",
    "Comics",
    "Mascots",
    "Covers",
    "Posters",
    "Branding",
    "Type",
    "Zines",
    "Sketchbook",
    "Ink",
    "Storyboards",
    "Loops",
    "Key Art",
    "Doodles",
    "Packaging",
    "Editorial",
    "Stickers",
    "Worldbuilding",
    "Concepts",
    "Animation",
    "Chaos"
];
const NAV = [
    {
        title: "Studio",
        links: [
            {
                label: "About",
                href: "/about"
            },
            {
                label: "Work",
                href: "/work"
            },
            {
                label: "Expertise",
                href: "/expertise"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                label: "Careers",
                href: "/careers"
            },
            {
                label: "Contact",
                href: "/contact"
            }
        ]
    }
];
const SOCIAL = [
    {
        label: "Instagram",
        href: "/"
    },
    {
        label: "LinkedIn",
        href: "/"
    },
    {
        label: "X",
        href: "/"
    }
];
const PILL_VARIANTS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v1,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v2,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v3,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].v4
];
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
function evenlyDistributedVariants(count) {
    return Array.from({
        length: count
    }, (_, i)=>PILL_VARIANTS[i % PILL_VARIANTS.length]);
}
function distributeVariants(count) {
    return shuffle(evenlyDistributedVariants(count));
}
const CONFIG = {
    gravity: {
        x: 0,
        y: 1
    },
    restitution: 0.5,
    friction: 0.15,
    frictionAir: 0.02,
    density: 0.002,
    wallThickness: 200,
    mouseStiffness: 0.6
};
function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}
function Footer() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pillVariants, setPillVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Footer.useState": ()=>evenlyDistributedVariants(OBJECTS.length)
    }["Footer.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            setPillVariants(distributeVariants(OBJECTS.length));
        }
    }["Footer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])({
        "Footer.useLenis": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
        }
    }["Footer.useLenis"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Footer.useGSAP": ()=>{
            const section = sectionRef.current;
            const container = containerRef.current;
            if (!section || !container) return;
            let engine = null;
            let runner = null;
            let topWall = null;
            let topWallTimeout = null;
            let rafId = 0;
            const bodies = [];
            const cleanupFns = [];
            const initPhysics = {
                "Footer.useGSAP.initPhysics": ()=>{
                    if (engine) return;
                    engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.create();
                    engine.gravity.x = CONFIG.gravity.x;
                    engine.gravity.y = CONFIG.gravity.y;
                    engine.constraintIterations = 10;
                    engine.positionIterations = 20;
                    engine.velocityIterations = 16;
                    engine.timing.timeScale = 1;
                    const containerRect = container.getBoundingClientRect();
                    const wallThickness = CONFIG.wallThickness;
                    const walls = [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(containerRect.width / 2, containerRect.height + wallThickness / 2, containerRect.width + wallThickness * 2, wallThickness, {
                            isStatic: true
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(-wallThickness / 2, containerRect.height / 2, wallThickness, containerRect.height + wallThickness * 2, {
                            isStatic: true
                        }),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(containerRect.width + wallThickness / 2, containerRect.height / 2, wallThickness, containerRect.height + wallThickness * 2, {
                            isStatic: true
                        })
                    ];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].World.add(engine.world, walls);
                    const objects = container.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].object}`);
                    objects.forEach({
                        "Footer.useGSAP.initPhysics": (obj, index)=>{
                            const objRect = obj.getBoundingClientRect();
                            const startX = Math.random() * (containerRect.width - objRect.width) + objRect.width / 2;
                            const startY = -500 - index * 100;
                            const startRotation = (Math.random() - 0.5) * Math.PI;
                            const body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(startX, startY, objRect.width, objRect.height, {
                                restitution: CONFIG.restitution,
                                friction: CONFIG.friction,
                                frictionAir: CONFIG.frictionAir,
                                density: CONFIG.density
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setAngle(body, startRotation);
                            bodies.push({
                                body,
                                element: obj,
                                width: objRect.width,
                                height: objRect.height
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].World.add(engine.world, body);
                        }
                    }["Footer.useGSAP.initPhysics"]);
                    topWallTimeout = setTimeout({
                        "Footer.useGSAP.initPhysics": ()=>{
                            if (!engine) return;
                            topWall = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Bodies.rectangle(containerRect.width / 2, -wallThickness / 2, containerRect.width + wallThickness * 2, wallThickness, {
                                isStatic: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].World.add(engine.world, topWall);
                        }
                    }["Footer.useGSAP.initPhysics"], 3000);
                    const getBounds = {
                        "Footer.useGSAP.initPhysics.getBounds": (width, height)=>({
                                minX: width / 2,
                                maxX: containerRect.width - width / 2,
                                maxY: containerRect.height - height / 2
                            })
                    }["Footer.useGSAP.initPhysics.getBounds"];
                    const pointer = {
                        x: 0,
                        y: 0,
                        lastX: 0,
                        lastY: 0
                    };
                    const INTERACT_RADIUS = 140;
                    const scatterFromPointer = {
                        "Footer.useGSAP.initPhysics.scatterFromPointer": (clientX, clientY)=>{
                            const rect = container.getBoundingClientRect();
                            const x = clientX - rect.left;
                            const y = clientY - rect.top;
                            const moveX = x - pointer.lastX;
                            const moveY = y - pointer.lastY;
                            pointer.x = x;
                            pointer.y = y;
                            pointer.lastX = x;
                            pointer.lastY = y;
                            if (Math.hypot(moveX, moveY) < 0.5) return;
                            bodies.forEach({
                                "Footer.useGSAP.initPhysics.scatterFromPointer": ({ body })=>{
                                    const dx = body.position.x - x;
                                    const dy = body.position.y - y;
                                    const dist = Math.hypot(dx, dy) || 1;
                                    if (dist > INTERACT_RADIUS) return;
                                    const falloff = 1 - dist / INTERACT_RADIUS;
                                    const push = falloff * 0.9;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setVelocity(body, {
                                        x: clamp(body.velocity.x + dx / dist * push * 18 + moveX * 0.45, -20, 20),
                                        y: clamp(body.velocity.y + dy / dist * push * 18 + moveY * 0.45, -20, 20)
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setAngularVelocity(body, clamp(body.angularVelocity + moveX * 0.008 * falloff, -0.35, 0.35));
                                }
                            }["Footer.useGSAP.initPhysics.scatterFromPointer"]);
                        }
                    }["Footer.useGSAP.initPhysics.scatterFromPointer"];
                    const onMouseMove = {
                        "Footer.useGSAP.initPhysics.onMouseMove": (e)=>{
                            scatterFromPointer(e.clientX, e.clientY);
                        }
                    }["Footer.useGSAP.initPhysics.onMouseMove"];
                    const onTouchMove = {
                        "Footer.useGSAP.initPhysics.onTouchMove": (e)=>{
                            const touch = e.touches[0];
                            if (!touch) return;
                            scatterFromPointer(touch.clientX, touch.clientY);
                        }
                    }["Footer.useGSAP.initPhysics.onTouchMove"];
                    const onPointerEnter = {
                        "Footer.useGSAP.initPhysics.onPointerEnter": (e)=>{
                            const rect = container.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            pointer.x = pointer.lastX = x;
                            pointer.y = pointer.lastY = y;
                        }
                    }["Footer.useGSAP.initPhysics.onPointerEnter"];
                    // Pills are not interactive on mobile.
                    if (window.innerWidth >= 1000) {
                        section.addEventListener("mousemove", onMouseMove);
                        section.addEventListener("mouseenter", onPointerEnter);
                        section.addEventListener("touchmove", onTouchMove, {
                            passive: true
                        });
                        cleanupFns.push({
                            "Footer.useGSAP.initPhysics": ()=>{
                                section.removeEventListener("mousemove", onMouseMove);
                                section.removeEventListener("mouseenter", onPointerEnter);
                                section.removeEventListener("touchmove", onTouchMove);
                            }
                        }["Footer.useGSAP.initPhysics"]);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Events.on(engine, "afterUpdate", {
                        "Footer.useGSAP.initPhysics": ()=>{
                            bodies.forEach({
                                "Footer.useGSAP.initPhysics": ({ body, width, height })=>{
                                    const { minX, maxX, maxY } = getBounds(width, height);
                                    let { x, y } = body.position;
                                    let vx = body.velocity.x;
                                    let vy = body.velocity.y;
                                    let corrected = false;
                                    if (x < minX) {
                                        x = minX;
                                        vx = Math.abs(vx) * CONFIG.restitution;
                                        corrected = true;
                                    } else if (x > maxX) {
                                        x = maxX;
                                        vx = -Math.abs(vx) * CONFIG.restitution;
                                        corrected = true;
                                    }
                                    if (y > maxY) {
                                        y = maxY;
                                        vy = -Math.abs(vy) * CONFIG.restitution;
                                        corrected = true;
                                    }
                                    if (!corrected) return;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setPosition(body, {
                                        x,
                                        y
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Body.setVelocity(body, {
                                        x: vx,
                                        y: vy
                                    });
                                }
                            }["Footer.useGSAP.initPhysics"]);
                        }
                    }["Footer.useGSAP.initPhysics"]);
                    runner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Runner.create();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Runner.run(runner, engine);
                    const updatePositions = {
                        "Footer.useGSAP.initPhysics.updatePositions": ()=>{
                            bodies.forEach({
                                "Footer.useGSAP.initPhysics.updatePositions": ({ body, element, width, height })=>{
                                    const x = clamp(body.position.x - width / 2, 0, containerRect.width - width);
                                    const y = clamp(body.position.y - height / 2, -height * 3, containerRect.height - height);
                                    element.style.left = `${x}px`;
                                    element.style.top = `${y}px`;
                                    element.style.transform = `rotate(${body.angle}rad)`;
                                }
                            }["Footer.useGSAP.initPhysics.updatePositions"]);
                            rafId = requestAnimationFrame(updatePositions);
                        }
                    }["Footer.useGSAP.initPhysics.updatePositions"];
                    updatePositions();
                }
            }["Footer.useGSAP.initPhysics"];
            const trigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: section,
                start: "top bottom",
                once: true,
                onEnter: {
                    "Footer.useGSAP.trigger": ()=>{
                        initPhysics();
                    }
                }["Footer.useGSAP.trigger"]
            });
            return ({
                "Footer.useGSAP": ()=>{
                    trigger.kill();
                    clearTimeout(topWallTimeout);
                    cancelAnimationFrame(rafId);
                    cleanupFns.forEach({
                        "Footer.useGSAP": (fn)=>fn()
                    }["Footer.useGSAP"]);
                    if (runner) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Runner.stop(runner);
                    if (engine) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].World.clear(engine.world, false);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$matter$2d$js$2f$build$2f$matter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Engine.clear(engine);
                    }
                    engine = null;
                    runner = null;
                    topWall = null;
                    bodies.length = 0;
                }
            })["Footer.useGSAP"];
        }
    }["Footer.useGSAP"], {
        scope: sectionRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].objectContainer,
                ref: containerRef,
                children: OBJECTS.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].object} ${pillVariants[i]}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/Footer.js",
                            lineNumber: 405,
                            columnNumber: 7
                        }, this)
                    }, label, false, {
                        fileName: "[project]/src/components/Footer/Footer.js",
                        lineNumber: 401,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Footer/Footer.js",
                lineNumber: 396,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `container pad ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "A27 Web Lab"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.js",
                                            lineNumber: 414,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "An illustration studio making brands, characters, and worlds."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.js",
                                            lineNumber: 415,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.js",
                                    lineNumber: 413,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].columns,
                                    children: [
                                        NAV.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].column} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].columnNav}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mono sm",
                                                        children: group.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/Footer.js",
                                                        lineNumber: 426,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        children: group.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: link.href,
                                                                        children: link.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Footer/Footer.js",
                                                                        lineNumber: 431,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer/Footer.js",
                                                                    lineNumber: 430,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, link.href, false, {
                                                                fileName: "[project]/src/components/Footer/Footer.js",
                                                                lineNumber: 429,
                                                                columnNumber: 12
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/Footer.js",
                                                        lineNumber: 427,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, group.title, true, {
                                                fileName: "[project]/src/components/Footer/Footer.js",
                                                lineNumber: 422,
                                                columnNumber: 9
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].column,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mono sm",
                                                    children: "Connect"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer/Footer.js",
                                                    lineNumber: 440,
                                                    columnNumber: 9
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: SOCIAL.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: link.href,
                                                                    children: link.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer/Footer.js",
                                                                    lineNumber: 445,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Footer/Footer.js",
                                                                lineNumber: 444,
                                                                columnNumber: 12
                                                            }, this)
                                                        }, link.label, false, {
                                                            fileName: "[project]/src/components/Footer/Footer.js",
                                                            lineNumber: 443,
                                                            columnNumber: 11
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer/Footer.js",
                                                    lineNumber: 441,
                                                    columnNumber: 9
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer/Footer.js",
                                            lineNumber: 439,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.js",
                                    lineNumber: 420,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.js",
                            lineNumber: 412,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mono sm",
                                        children: "California · Remote"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer/Footer.js",
                                        lineNumber: 456,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/Footer.js",
                                    lineNumber: 455,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legal,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mono sm",
                                            children: [
                                                "© ",
                                                new Date().getFullYear(),
                                                " A27 Web Lab"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer/Footer.js",
                                            lineNumber: 460,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mono sm",
                                            children: "Developed by A27 Web Lab"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.js",
                                            lineNumber: 463,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mono sm",
                                            children: "All Rights Reserved"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer/Footer.js",
                                            lineNumber: 464,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer/Footer.js",
                                    lineNumber: 459,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/Footer.js",
                            lineNumber: 454,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/Footer.js",
                    lineNumber: 411,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer/Footer.js",
                lineNumber: 410,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer/Footer.js",
        lineNumber: 392,
        columnNumber: 3
    }, this);
}
_s(Footer, "QB/YuaUr4uGI8OdlT3bbTstRz4A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TransitionProvider/TransitionProvider.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "block": "TransitionProvider-module__ewkSjq__block",
  "grid": "TransitionProvider-module__ewkSjq__grid",
  "text": "TransitionProvider-module__ewkSjq__text",
});
}),
"[project]/src/components/TransitionProvider/TransitionProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransitionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-transition-router/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/CustomEase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionProvider$2f$TransitionProvider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/TransitionProvider/TransitionProvider.module.css [app-client] (css module)");
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
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomEase"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$CustomEase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomEase"].create("hop", "0.8, 0, 0.2, 1");
const ROWS = 4;
const BLOCK_COLORS = [
    "var(--base-900)",
    "var(--base-800)",
    "var(--base-500)",
    "var(--base-400)"
];
const TRANSITION_LINES = [
    "Hold That Thought",
    "Wet Paint Ahead",
    "Redrawing The Screen",
    "Give It A Sec",
    "Ink Still Wet",
    "Turning The Page",
    "Cooking Something Weird",
    "Don't Blink Now",
    "Loading The Chaos",
    "Mixing New Colors"
];
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
function TransitionProvider({ children }) {
    _s();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const splitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const lastColorsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const prepareColors = ()=>{
        let colors = shuffle(BLOCK_COLORS);
        const key = colors.join("|");
        if (BLOCK_COLORS.length > 1 && key === lastColorsRef.current) {
            colors = shuffle(BLOCK_COLORS);
        }
        lastColorsRef.current = colors.join("|");
        blocksRef.current.forEach((block, i)=>{
            if (block) block.style.backgroundColor = colors[i];
        });
        // Last block paints on top of the full-screen stack
        const topColor = colors[colors.length - 1];
        if (headingRef.current) {
            const darkText = topColor === "var(--base-500)" || topColor === "var(--base-800)" || topColor === "var(--base-900)";
            headingRef.current.style.color = darkText ? "var(--base-1000)" : "var(--base-100)";
        }
    };
    const prepareLine = ()=>{
        if (!headingRef.current) return;
        let nextLine = TRANSITION_LINES[Math.floor(Math.random() * TRANSITION_LINES.length)];
        if (TRANSITION_LINES.length > 1) {
            while(nextLine === lastLineRef.current){
                nextLine = TRANSITION_LINES[Math.floor(Math.random() * TRANSITION_LINES.length)];
            }
        }
        lastLineRef.current = nextLine;
        splitRef.current?.revert();
        headingRef.current.textContent = nextLine;
        splitRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplitText"].create(headingRef.current, {
            type: "words",
            wordsClass: "word",
            mask: "words"
        });
        wordsRef.current = splitRef.current.words;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(wordsRef.current, {
            y: "100%"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransitionProvider.useEffect": ()=>{
            prepareColors();
            prepareLine();
            return ({
                "TransitionProvider.useEffect": ()=>splitRef.current?.revert()
            })["TransitionProvider.useEffect"];
        }
    }["TransitionProvider.useEffect"], []);
    const animateIn = (onComplete)=>{
        prepareColors();
        prepareLine();
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete
        });
        tl.set(gridRef.current, {
            pointerEvents: "all"
        });
        tl.set(blocksRef.current, {
            transformOrigin: "left center",
            scaleX: 0
        });
        tl.set(wordsRef.current, {
            y: "100%"
        });
        tl.to(blocksRef.current, {
            scaleX: 1,
            duration: 1.25,
            ease: "hop",
            stagger: 0.075
        });
        tl.to(wordsRef.current, {
            y: "0%",
            duration: 1,
            ease: "power4.out",
            stagger: 0.1
        }, "-=0.6");
        return tl;
    };
    const animateOut = (onComplete)=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(gridRef.current, {
                    pointerEvents: "none"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                onComplete?.();
            }
        });
        tl.set(blocksRef.current, {
            transformOrigin: "right center",
            scaleX: 1
        });
        tl.to(wordsRef.current, {
            y: "100%",
            duration: 1,
            ease: "power4.out",
            stagger: 0.1
        });
        tl.to(blocksRef.current, {
            scaleX: 0,
            duration: 1.25,
            ease: "hop",
            stagger: -0.075
        }, "-=1");
        return tl;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$transition$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionRouter"], {
        auto: true,
        leave: (next)=>{
            const tl = animateIn(next);
            return ()=>tl.kill();
        },
        enter: (next)=>{
            const tl = animateOut(next);
            return ()=>tl.kill();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gridRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionProvider$2f$TransitionProvider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: Array.from({
                    length: ROWS
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionProvider$2f$TransitionProvider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].block,
                        ref: (el)=>{
                            blocksRef.current[i] = el;
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/TransitionProvider/TransitionProvider.js",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/TransitionProvider/TransitionProvider.js",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionProvider$2f$TransitionProvider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    ref: headingRef
                }, void 0, false, {
                    fileName: "[project]/src/components/TransitionProvider/TransitionProvider.js",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TransitionProvider/TransitionProvider.js",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TransitionProvider/TransitionProvider.js",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(TransitionProvider, "OIktaonlXa1N16vYDxms5h/dF9A=");
_c = TransitionProvider;
var _c;
__turbopack_context__.k.register(_c, "TransitionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClientLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Menu/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer/Footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionProvider$2f$TransitionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TransitionProvider/TransitionProvider.js [app-client] (ecmascript)");
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
const MOBILE_BREAKPOINT = 1000;
const LENIS_EASING = (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t));
_c = LENIS_EASING;
const LENIS_SHARED = {
    easing: LENIS_EASING,
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    infinite: false,
    wheelMultiplier: 1,
    orientation: "vertical",
    smoothWheel: true,
    syncTouch: true
};
const LENIS_MOBILE = {
    ...LENIS_SHARED,
    duration: 0.8,
    smoothTouch: true,
    touchMultiplier: 1.5,
    lerp: 0.09
};
const LENIS_DESKTOP = {
    ...LENIS_SHARED,
    duration: 1.2,
    smoothTouch: false,
    touchMultiplier: 2,
    lerp: 0.1
};
function ClientLayout({ children }) {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            const handleResize = {
                "ClientLayout.useEffect.handleResize": ()=>setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
            }["ClientLayout.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "ClientLayout.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["ClientLayout.useEffect"];
        }
    }["ClientLayout.useEffect"], []);
    const lenisOptions = isMobile ? LENIS_MOBILE : LENIS_DESKTOP;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionProvider$2f$TransitionProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
            root: true,
            options: lenisOptions,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/ClientLayout.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, pathname, false, {
                    fileName: "[project]/src/components/ClientLayout.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ClientLayout.js",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ClientLayout.js",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(ClientLayout, "9GPHwjuyESxvjX8EnzTshxHlfW8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = ClientLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "LENIS_EASING");
__turbopack_context__.k.register(_c1, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0f782x9._.js.map