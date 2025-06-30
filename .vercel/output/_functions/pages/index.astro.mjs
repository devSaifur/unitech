import { j as createAstro, k as createComponent, m as maybeRenderHead, n as addAttribute, q as renderSlot, r as renderTemplate, v as renderComponent, w as renderHead, x as renderScript, u as unescapeHTML } from '../chunks/astro/server_D-Zr5hmc.mjs';
/* empty css                                 */
import '../chunks/index_CCxZAn8N.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DTm_VplL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$d = createAstro("https://agency-template.vbartalis.dev");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/Container.astro", void 0);

const $$Astro$c = createAstro("https://agency-template.vbartalis.dev");
const $$Navitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navitem;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="duration-300 font-medium ease-linear hover:text-primary py-3"> ${text} </a> </li>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/Navitem.astro", void 0);

const $$Astro$b = createAstro("https://agency-template.vbartalis.dev");
const $$BtnLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BtnLink;
  const { href, text, className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  const getTextColor = (variant2) => {
    if (variant2 === "primary") {
      return "text-white";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> <span${addAttribute(`relative ${getTextColor(variant)} z-10`, "class")}> ${text} </span> </a>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/BtnLink.astro", void 0);

const Logo = new Proxy({"src":"/_astro/logo.dNnf3fu0.avif","width":625,"height":625,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/logos/logo.avif";
							}
							
							return target[name];
						}
					});

const LogoDark = new Proxy({"src":"/_astro/logo-dark.DnhMeH5-.avif","width":625,"height":625,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/logos/logo-dark.avif";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      href: "#",
      text: "Home"
    },
    {
      href: "#services",
      text: "Services"
    },
    {
      href: "#features",
      text: "Features"
    },
    {
      href: "#faq",
      text: "FAQ"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-0 z-50 py-6"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <nav class="relative flex w-full justify-between gap-6"> <!-- logo --> <div class="relative inline-flex min-w-max"> <a href="/" class="relative flex items-center gap-3"> <div class="relative flex w-20 overflow-hidden rounded-xl dark:bg-black/90"> ${renderComponent($$result2, "Image", $$Image, { "src": Logo, "alt": "Unitech Builder Logo", "class": "h-full w-full object-cover dark:hidden" })} ${renderComponent($$result2, "Image", $$Image, { "src": LogoDark, "alt": "Unitech Builder Logo", "class": "hidden h-full w-full object-cover dark:inline-flex" })} </div> <div class="text-heading-1 inline-flex text-lg font-semibold">
Unitech Builder
</div> </a> </div> <div data-nav-overlay aria-hidden="true" class="bg-box-bg bg-opacity-50 fixed inset-0 hidden backdrop-blur-xl backdrop-filter lg:!hidden"></div> <div data-navbar class="bg-body border-x-box-border absolute top-full flex h-0 w-full flex-col gap-x-4 gap-y-6 overflow-hidden border-x duration-300 ease-linear lg:relative lg:top-0 lg:!h-auto lg:scale-y-100 lg:flex-row lg:items-center lg:justify-between lg:border-x-0 lg:bg-transparent"> <ul class="border-box-border text-heading-2 flex w-full flex-col gap-x-8 gap-y-4 border-t px-6 pt-6 text-lg lg:flex-row lg:items-center lg:justify-center lg:border-t-0 lg:px-0 lg:pt-0"> ${navItems.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item })}`;
  })} </ul> <div class="border-box-bg flex w-full items-center border-b px-6 pb-6 sm:w-max lg:min-w-max lg:border-0 lg:px-0 lg:pb-0"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "Get Started", "href": "#cta", "className": "flex w-full justify-center sm:w-max", "variant": "primary" })} </div> </div> <div class="flex min-w-max items-center gap-x-3"> <button data-switch-theme class="text-heading-2 border-box-border relative flex rounded-full border p-2 outline-none hover:bg-slate-200 lg:p-3 dark:hover:bg-slate-800"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-6 w-6 dark:flex"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> <span class="sr-only">switch theme</span> </button> <button data-toggle-nav data-open-nav="false" class="relative flex h-auto w-7 flex-col outline-none lg:invisible lg:hidden"> <span id="line1" class="bg-heading-2 h-0.5 w-6 rounded-full transition-all duration-300 ease-linear"></span> <span id="line2" class="rounded-ful bg-heading-2 mt-1 h-0.5 w-6 origin-center transition-all duration-300 ease-linear"></span> <span id="line3" class="rounded-ful bg-heading-2 mt-1 h-0.5 w-6 transition-all duration-300 ease-linear"></span> <span class="sr-only">togglenav</span> </button> </div> </nav> ` })} </header>`;
}, "/home/saifur/Documents/works/agency-template-master/src/layouts/Navbar.astro", void 0);

const $$GroupFooterNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 h-max"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/blocks/GroupFooterNav.astro", void 0);

const $$Astro$a = createAstro("https://agency-template.vbartalis.dev");
const $$FooterNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FooterNav;
  const { title, navItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="space-y-6"> <h2 class="capitalze font-semibold text-heading-1 text-xl"> ${title} </h2> <ul class="space-y-3 font-medium md:text-lg text-heading-3"> ${navItems.map((navItem) => renderTemplate`<li> <a${addAttribute(navItem.itemLink, "href")} class="transition hover:text-primary"> ${navItem.itemText} </a> </li>`)} </ul> </nav>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/FooterNav.astro", void 0);

const $$Astro$9 = createAstro("https://agency-template.vbartalis.dev");
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`md:text-lg text-heading-3 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/Paragraph.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerNav1 = [
    {
      itemText: "Marketing",
      itemLink: "#"
    },
    {
      itemText: "Analylitics",
      itemLink: "#"
    },
    {
      itemText: "Commerce",
      itemLink: "#"
    },
    {
      itemText: "Insights",
      itemLink: "#"
    }
  ];
  const footerSupport = [
    {
      itemText: "Pricing",
      itemLink: "#"
    },
    {
      itemText: "Guides",
      itemLink: "#"
    },
    {
      itemText: "FAQ",
      itemLink: "#"
    },
    {
      itemText: "Contact",
      itemLink: "#"
    }
  ];
  const footerCompany = [
    {
      itemText: "About",
      itemLink: "#"
    },
    {
      itemText: "Blog",
      itemLink: "#"
    },
    {
      itemText: "Jobs",
      itemLink: "#"
    },
    {
      itemText: "Parteners",
      itemLink: "#"
    },
    {
      itemText: "Jobs",
      itemLink: "#"
    }
  ];
  const footerLegal = [
    {
      itemText: "Claim",
      itemLink: "#"
    },
    {
      itemText: "Privacy",
      itemLink: "#"
    },
    {
      itemText: "Terms",
      itemLink: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative mt-16"> <span class="via-primary absolute bottom-1/3 left-1/3 h-20 w-20 rounded-full bg-gradient-to-br from-sky-500 from-0% via-80% to-green-600 to-110%"></span> <span class="to-primary absolute top-2/4 right-1 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-400 from-0% via-green-600 via-sky-700 via-60% via-85% to-100%"></span> <span class="via-primary absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-sky-500 from-0% via-80% to-green-600 to-110%"></span> <span class="via-primary absolute top-1/3 right-1/3 h-20 w-20 rounded-full bg-gradient-to-br from-green-500 from-0% via-80% to-sky-600 to-110%"></span> <span class="via-primary absolute top-1/3 left-0 h-40 w-40 rounded-full bg-gradient-to-br from-green-500 from-0% via-80% to-sky-600 to-110%"></span> <footer class="relative rounded-t-3xl bg-gradient-to-tr from-slate-100/85 to-zinc-200/85 pt-28 backdrop-blur-md dark:from-slate-800/85 dark:to-zinc-800/85"> ${renderComponent($$result, "Container", $$Container, { "className": "relative overflow-auto pb-8" }, { "default": ($$result2) => renderTemplate` <div class="relative grid grid-cols-2 gap-8 lg:grid-cols-3 lg:items-stretch"> <div class="col-span-2 flex h-auto flex-col lg:col-span-1"> <div class="h-full"> <a href="#" class="relative flex items-center gap-3"> <div class="text-heading-1 inline-flex text-lg font-semibold">
Unitech Builder
</div> </a> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              maiores nam doloribus id magni
` })} </div> <!-- social links --> <div class="text-heading-3 mt-8 flex min-h-max items-center gap-4"> <a href="https://www.facebook.com/profile.php?id=61575209140653" class="hover:text-heading-1 transition hover:scale-105" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path> </svg> <span class="sr-only">social link</span> </a> </div> </div> ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Company", "navItems": footerCompany })} ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Solutions", "navItems": footerNav1 })} ` })} ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Support", "navItems": footerSupport })} ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Ressources", "navItems": footerLegal })} ` })} </div> ` })} <div class="relative py-2"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="text-heading-3 flex items-center justify-between gap-6 md:text-lg"> <div>
&copy; <span id="year"></span> Unitech Builder. All right reserved
</div> </div> ` })} </div> </footer> </div>`;
}, "/home/saifur/Documents/works/agency-template-master/src/layouts/Footer.astro", void 0);

const $$Astro$8 = createAstro("https://agency-template.vbartalis.dev");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="Unitech Builder" content="Unitech Builder"><title>Unitech Builder</title><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/style/custom.css">${renderHead()}</head> <body class="bg-body overflow-hidden overflow-y-auto"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/home/saifur/Documents/works/agency-template-master/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/home/saifur/Documents/works/agency-template-master/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")} </body></html>`;
}, "/home/saifur/Documents/works/agency-template-master/src/layouts/Layout.astro", void 0);

const $$ByNumber = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative mt-12 md:mt-16"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="mx-auto p-5 sm:p-6 py-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg hover:bg-slate-200 dark:hover:bg-slate-800 border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6 lg:gap-12"> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
12+
</h2> <p class="mt-2 text-heading-3">Created projects</p> </div> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
200+
</h2> <p class="mt-2 text-heading-3">Projects</p> </div> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
120
</h2> <p class="mt-2 text-heading-3">Happy Client</p> </div> <div class="text-center"> <h2 class="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
5+
</h2> <p class="mt-2 text-heading-3">Years</p> </div> </div> ` })} </section>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/sections/ByNumber.astro", void 0);

const myHeroImage = new Proxy({"src":"/_astro/hero.E0HuXa_0.avif","width":717,"height":538,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/hero.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://agency-template.vbartalis.dev");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const { className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear cursor-pointer
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/Button.astro", void 0);

const $$CtaButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "primary", "className": "min-w-max text-white " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="flex relative z-[5] text-center"> Get Started Today</span> ` })}`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/CtaButton.astro", void 0);

const $$ByResult = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-heading-3 relative flex flex-col gap-2 font-medium md:flex-row lg:gap-5"> <div class="mx-auto flex items-center"> <span class="text-primary mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full font-bold">&checkmark;</span> <div>Keep Maintained</div> </div> <div class="mx-auto flex items-center"> <span class="text-primary mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full font-bold">&checkmark;</span>
Fix Issues
</div> <div class="mx-auto flex items-center"> <span class="text-primary mr-3 inline-flex h-8 w-8 items-center justify-center font-bold">&checkmark;</span>Improve quality
</div> </section>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/sections/ByResult.astro", void 0);

const $$GradientText = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/GradientText.astro", void 0);

const $$Astro$6 = createAstro("https://agency-template.vbartalis.dev");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative pt-32 lg:pt-36 ${className}`, "class")}> ${renderComponent($$result, "Container", $$Container, { "className": "flex flex-col gap-10 lg:flex-row lg:gap-12" }, { "default": ($$result2) => renderTemplate` <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8"> <h1 class="text-heading-1 text-3xl/tight font-bold sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight">
Let's build together with
${renderComponent($$result2, "GradientText", $$GradientText, {}, { "default": ($$result3) => renderTemplate`Unitech Builder` })} </h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Exceptional property maintenance and outstanding support. We're the
        trusted choice for many, dedicated to your property's best.
` })} <div class="mt-16 flex w-full flex-col"> <div class="mb-5"> ${renderComponent($$result2, "CtaButton", $$CtaButton, {})} </div> <div class="mt-3 lg:mt-8"> ${renderComponent($$result2, "ByResult", $$ByResult, {})} </div> </div> </div> <div class="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none"> ${renderComponent($$result2, "Image", $$Image, { "src": myHeroImage, "alt": "Hero image", "class": "my-class", "width": "2350", "height": "2359", "class": "max-h-96 rounded-3xl object-cover lg:absolute lg:h-full lg:max-h-none lg:w-full" })} <!-- https://unsplash.com/photos/man-in-gray-hoodie-sitting-on-brown-wooden-chair-on-green-grass-field-during-daytime-3faX71BaNe0?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash --> </div> ` })} ${renderComponent($$result, "ByNumber", $$ByNumber, {})} <!-- <ByResult /> --> </section>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/sections/Hero.astro", void 0);

const $$Astro$5 = createAstro("https://agency-template.vbartalis.dev");
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Service;
  const { title, features, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-5 sm:p-6 lg:p-8 relative overflow-hidden rounded-3xl shadow-md shadow-slate-700 dark:shadow-slate-900
  bg-gradient-to-tr from-slate-100/70 to-zinc-200/60 dark:from-slate-800/10 dark:to-zinc-800/10 backdrop-blur-md hover:bg-black/10 hover:dark:bg-slate-700/10"> <div class="rounded-xl p-3 text-heading-1 w-max relative bg-slate-200 dark:bg-slate-800"> ${renderSlot($$result, $$slots["default"], renderTemplate`${unescapeHTML(icon)}`)} </div> <div class="mt-6 space-y-4 relative"> <h2 class="text-lg md:text-xl font-semibold text-heading-2"> ${title} </h2> ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate` <div class="mt-8 space-y-4 text-heading-3 font-medium list-outside list-disc"> ${features.map((feature) => {
    return renderTemplate`<div class="flex items-center font-medium"> <span class="font-bold rounded-full w-8 h-8 mr-3 inline-flex justify-center items-center text-primary dark:text-white">
&checkmark;
</span> ${feature} </div>`;
  })} </div> ` })} </div> <!-- <span
    class="absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full"
  ></span> --> </div>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/cards/Service.astro", void 0);

const $$Astro$4 = createAstro("https://agency-template.vbartalis.dev");
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Title;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(`text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/shared/Title.astro", void 0);

const plumbing = new Proxy({"src":"/_astro/plumb.UhePEofT.avif","width":717,"height":532,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/plumb.avif";
							}
							
							return target[name];
						}
					});

const arborists = new Proxy({"src":"/_astro/arborists.ddHT88xM.avif","width":768,"height":538,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/arborists.avif";
							}
							
							return target[name];
						}
					});

const lawn = new Proxy({"src":"/_astro/lawn.f3toGYLN.avif","width":640,"height":448,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/lawn.avif";
							}
							
							return target[name];
						}
					});

const interior = new Proxy({"src":"/_astro/interior.seoBgrE7.avif","width":768,"height":538,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/interior.avif";
							}
							
							return target[name];
						}
					});

const fixSupport = new Proxy({"src":"/_astro/fix-support.CHa8o359.webp","width":1353,"height":884,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/fix-support.webp";
							}
							
							return target[name];
						}
					});

const roofing = new Proxy({"src":"/_astro/roofing.CasO8Pla.webp","width":612,"height":408,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/roofing.webp";
							}
							
							return target[name];
						}
					});

const hvac = new Proxy({"src":"/_astro/hvac.BRc3w4JR.webp","width":612,"height":408,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/hvac.webp";
							}
							
							return target[name];
						}
					});

const electrical = new Proxy({"src":"/_astro/electrical.BP8isakO.avif","width":768,"height":538,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/electrical.avif";
							}
							
							return target[name];
						}
					});

const appliances = new Proxy({"src":"/_astro/appliances.CVQZ3pYN.avif","width":768,"height":538,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/appliances.avif";
							}
							
							return target[name];
						}
					});

const siding = new Proxy({"src":"/_astro/siding.EewxO6z7.webp","width":612,"height":408,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/siding.webp";
							}
							
							return target[name];
						}
					});

const drywall = new Proxy({"src":"/_astro/drywall.CDwXUreO.webp","width":612,"height":408,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/saifur/Documents/works/agency-template-master/src/assets/images/drywall.webp";
							}
							
							return target[name];
						}
					});

const services = [
  {
    title: "Dependable Local Expertise",
    features: [
      "Deep understanding of your specific needs.",
      "Established reputation",
      "Quick response times within the local area."
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`
  },
  {
    title: "Comprehensive Service Range",
    features: [
      "Handles diverse maintenance tasks efficiently",
      "Reduces the need for multiple contractors",
      "Offers tailored solutions for various property types"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`
  },
  {
    title: "Quality and Professionalism",
    features: [
      "Skilled and trained maintenance personnel",
      "Commitment to high standards of workmanship",
      "Use of reliable materials and techniques"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>`
  },
  {
    title: "Proactive Property Care",
    features: [
      "Regular inspections to prevent issues",
      "Focus on long-term property preservation",
      "Helps avoid costly emergency repairs"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`
  },
  {
    title: "Transparent and Trustworthy",
    features: [
      "Clear communication and fair pricing",
      "Reliable service delivery as promised",
      "Focus on building lasting client relationships"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`
  },
  {
    title: "Enhanced Property Value",
    features: [
      "Well-maintained properties attract better tenants",
      "Regular upkeep preserves asset integrity",
      "Contributes to a positive property image"
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`
  }
];
const solutions = [
  {
    title: "Top-Tier plumbing services",
    painPoint: "At Unitech Builder, we understand that efficient plumbing is essential to your property's daily operations.",
    agitatepainPoint: "That's why we offer comprehensive plumbing services, backed by a commitment to quality and responsive customer care. Our expert team is dedicated to resolving your plumbing needs promptly and effectively, safeguarding your investment and providing you with peace of mind.",
    solution: "Choose Unitech Builder for a partnership built on reliability and excellence.",
    img: plumbing
  },
  {
    title: "Tree Services by Trusted Arborists",
    painPoint: "Unitech Builder provides professional and comprehensive tree care services designed to enhance the safety and aesthetics of your property.",
    agitatepainPoint: "Our team of certified arborists delivers expert tree management solutions, including precision pruning, safe tree removal, and responsive emergency services.",
    solution: "We utilize state-of-the-art equipment and advanced techniques to promote the long-term health and vitality of your trees.",
    img: arborists
  },
  {
    title: "Lawn Care and Maintenance Services",
    painPoint: "Unitech Builder delivers professional lawn care and maintenance services designed to elevate your property's aesthetic appeal.",
    agitatepainPoint: "Our expert team provides a comprehensive suite of services, including precision mowing, detailed edging, targeted fertilization, and effective weed control.",
    solution: "We are committed to fostering healthy, vibrant lawns through the application of environmentally friendly products and sustainable techniques.",
    img: lawn
  },
  {
    title: "Interior Design and Renovation",
    painPoint: "Unitech Builder's interior design and renovation services are tailored to meet your unique needs and style preferences.",
    agitatepainPoint: "Our team of experts works closely with you to create a space that reflects your personality and lifestyle.",
    solution: "From concept to completion, we handle every aspect of the project with precision and care, ensuring a beautiful and functional result.",
    img: interior
  },
  {
    title: "Fixing & Support",
    painPoint: "Our team of skilled professionals provides reliable fixing and support services to address a wide range of issues in your home or business.",
    agitatepainPoint: "From minor repairs to major renovations, we have the expertise and tools to get the job done right.",
    solution: "We offer prompt and efficient service to ensure your property is safe and functional.",
    img: fixSupport
  },
  {
    title: "Roofing Services",
    painPoint: "Unitech Builder offers top-tier roofing services that are designed to protect your property from the elements.",
    agitatepainPoint: "Our team of certified roofers and installers provides efficient and cost-effective solutions to keep your roof looking its best.",
    solution: "Committed to the highest standards of safety and workmanship, we meticulously utilize top-tier tools and materials sourced from our comprehensive inventory.",
    img: roofing
  },
  {
    title: "HVAC Services",
    painPoint: "We offer Heating, Ventilation, and Air Conditioning (HVAC) services to keep your home or business comfortable and energy-efficient.",
    agitatepainPoint: "Our experienced technicians install and maintain HVAC systems, ensuring a comfortable and healthy environment for your occupants.",
    solution: "We provide regular maintenance and emergency repair services to keep your HVAC system running smoothly year-round.",
    img: hvac
  },
  {
    title: "Electrical Services",
    painPoint: "Out top grade electrical expertise are ready to serve you with all your needs.",
    agitatepainPoint: "We have a team of experienced electricians who are ready to provide you with the best services for your electrical needs.",
    solution: "Our team is dedicated to providing you with the best service possible, ensuring that your electrical systems are safe and efficient.",
    img: electrical
  },
  {
    title: "Appliances Services",
    painPoint: "We offer offers top-tier appliances services, Our team of experts are ready to provide you with the best services for your appliances needs, from installation to repair.",
    agitatepainPoint: "Our team of experts are ready to provide you with the best services for your appliances needs, from installation to repair.",
    solution: "We are dedicated to providing you with the best service possible, ensuring that your appliances are running smoothly and efficiently.",
    img: appliances
  },
  {
    title: "Siding Services",
    painPoint: "Unitech Builder offers professional siding services to enhance the exterior of your property.",
    agitatepainPoint: "Our team of skilled professionals provides high-quality siding installation and repair services to protect your home from the elements.",
    solution: "We use durable materials and advanced techniques to ensure your siding is both functional and aesthetically pleasing.",
    img: siding
  },
  {
    title: "Drywall Services",
    painPoint: "Unitech Builder offers top-tier drywall services, Our team of experts are ready to provide you with the best services for your drywall needs, from installation to repair.",
    agitatepainPoint: "Our team of experts are ready to provide you with the best services for your drywall needs, from installation to repair.",
    solution: "We are dedicated to providing you with the best service possible, ensuring that your drywall is installed and repaired to the highest standards.",
    img: drywall
  }
];
const faqs = [
  {
    question: "How does Unitech Builder pay?",
    answer: "BSS pays on a weekly basis through direct deposit from Bank to Bank, Zelle, or CashApp."
  },
  {
    question: "Does Unitech Builder pay gas money?",
    answer: "Yes, Unitech Builder will pay for gas or travel fees for inspections based on the property distance."
  },
  {
    question: "After completing work order when will be the payment remitted?",
    answer: "Our payments are generally remitted within 7 days. For rush work orders or equipment rental issues, payment will be remitted immediately upon communication."
  },
  {
    question: "Does Unitech Builder pay for rental equipment?",
    answer: "Certainly! Unitech Builder will provide the equipment rental cost for work order completion."
  },
  {
    question: "Does Unitech Builder provide vehicles?",
    answer: "Unfortunately, Unitech Builder does not provide vehicles for work orders. Contractors are expected to have their own transportation."
  },
  {
    question: "Does Unitech Builder cover insurance?",
    answer: "Yes, BSS will cover the insurance for the co-workers."
  },
  {
    question: "What social media platforms do yo",
    answer: "We work with a wide range of social media platforms, including but not limited to Facebook, Instagram, Twitter, LinkedIn, Pinterest, and TikTok. Our strategies are adaptable to the platforms most relevant to your target audience."
  },
  {
    question: "Is the company only work for tenant occupied/rental properties?",
    answer: "No, our company works for both types of clients: Property preservation (vacant properties) and Maintenance (tenant occupied/rental properties)."
  }
];

const $$Astro$3 = createAstro("https://agency-template.vbartalis.dev");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  const { className } = Astro2.props;
  return renderTemplate`<!-- <section
  id="services"
  class=\`relative bg-gradient-to-br from-blue-100 to-sky-200 dark:from-indigo-800 dark:to-green-950  \${className}\`
> -->${maybeRenderHead()}<section id="features"${addAttribute(`relative  dark:bg-gradient-to-br dark:from-indigo-800 dark:to-green-950  ${className}`, "class")}> <span class="via-primary dark:via-primary absolute bottom-1/3 left-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-sky-200 from-0% via-80% to-green-400 to-110% dark:from-sky-500 dark:to-green-600"></span> <span class="to-primary dark:to-primary absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-200 from-0% via-sky-500 via-85% to-100% dark:from-yellow-400 dark:via-sky-700"></span> <span class="via-primary dark:via-primary absolute top-1/3 right-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-green-300 from-0% via-80% to-sky-400 to-110% dark:from-green-500 dark:to-sky-600"></span> <span class="via-primary dark:via-primary absolute top-1/3 right-3/4 h-40 w-40 rounded-full bg-gradient-to-br from-green-300 from-0% via-80% to-sky-400 to-110% dark:from-green-500 dark:to-sky-600"></span> ${renderComponent($$result, "Container", $$Container, { "className": "md:sapce-y-12 space-y-10" }, { "default": ($$result2) => renderTemplate` <div class="mx-auto max-w-3xl space-y-4 text-center"> ${renderComponent($$result2, "Title", $$Title, { "className": "" }, { "default": ($$result3) => renderTemplate`Why Choose Unitech Builder?` })} </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"> ${services.map((service) => {
    return renderTemplate`${renderComponent($$result2, "Service", $$Service, { "title": service.title, "features": service.features, "icon": service.icon })}`;
  })} </div> ` })} </section>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/sections/Services.astro", void 0);

const $$Astro$2 = createAstro("https://agency-template.vbartalis.dev");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="faq"${addAttribute(`${className}`, "class")}> ${renderComponent($$result, "Container", $$Container, { "className": "" }, { "default": ($$result2) => renderTemplate` <div class="text-center  max-w-3xl mx-auto"> ${renderComponent($$result2, "Title", $$Title, {}, { "default": ($$result3) => renderTemplate` Frequently Asked ${renderComponent($$result3, "GradientText", $$GradientText, {}, { "default": ($$result4) => renderTemplate`Questions` })}` })} </div> <div class="grid border rounded-3xl border-box-bg bg-box-bg shadow-lg divide-y divide-slate-200 dark:divide-slate-800 max-w-3xl mx-auto mt-8 overflow-hidden"> ${faqs.map((faq) => {
    return renderTemplate`<div class="py-5 px-5 hover:bg-slate-200 dark:hover:bg-slate-800"> <details class="group"> <summary class="flex justify-between items-center font-medium cursor-pointer list-none text-heading-1"> <span>${faq.question}</span> <span class="transition group-open:rotate-180 "> <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"> <path d="M6 9l6 6 6-6"></path> </svg> </span> </summary> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-3 group-open:animate-fadeIn" }, { "default": ($$result3) => renderTemplate`${faq.answer}` })} <!-- 
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  {faq.answer}
                </p>
              --> </details> </div>`;
  })} </div> ` })} </section>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/sections/FAQ.astro", void 0);

const $$Astro$1 = createAstro("https://agency-template.vbartalis.dev");
const $$CTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CTA;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="cta"${addAttribute(`pb-20 ${className}`, "class")}> ${renderComponent($$result, "Container", $$Container, {}, { "default": async ($$result2) => renderTemplate` <div class="relative w-full rounded-2xl bg-gradient-to-br from-slate-100 to-zinc-200 px-6 py-8 md:px-8 md:py-10 dark:from-slate-800 dark:to-zinc-800"> <div class="relative mx-auto max-w-xl text-center md:max-w-2xl"> <h1 class="text-heading-1 text-3xl/tight font-bold sm:text-4xl/tight md:text-5xl/tight">
Ready to
${renderComponent($$result2, "GradientText", $$GradientText, {}, { "default": async ($$result3) => renderTemplate` Transform ` })}
Your
${renderComponent($$result2, "GradientText", $$GradientText, {}, { "default": async ($$result3) => renderTemplate` Property for Better? ` })} </h1> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "pt-10 font-semibold" }, { "default": async ($$result3) => renderTemplate`
Contact us today!
` })} <div class="text-heading-3 mx-auto w-full max-w-md"> <div class="rounded-lg"> <div class="p-6 pb-4"> <p>Fill out the form below and we'll get back to you soon.</p> </div> <div class="p-6 pt-0"> <form action="api/contact" id="contactForm" method="POST" class="space-y-4"> <div class="space-y-4"> <label for="name" class="text-sm font-medium">Name</label> <input id="name" name="name" type="text" placeholder="Your full name" class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required> </div> <div class="space-y-4"> <label for="email" class="text-sm font-medium">Email</label> <input id="email" name="email" type="email" placeholder="your.email@example.com" class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required> </div> <div class="space-y-4"> <label for="phone" class="text-sm font-medium">Phone</label> <input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"> </div> <div class="space-y-4"> <label for="details" class="text-sm font-medium">Details</label> <textarea id="details" name="details" placeholder="Please provide any additional details or questions..." rows="4" class="w-full resize-none rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea> </div> <button type="submit" class="via-primary w-full cursor-pointer rounded-md bg-gradient-to-br from-indigo-600 from-20% via-30% to-green-600 px-4 py-2 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:outline-none">
Send Message
</button> </form> </div> </div> </div> </div> </div> ` })} </section> ${renderScript($$result, "/home/saifur/Documents/works/agency-template-master/src/components/sections/CTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/sections/CTA.astro", void 0);

const $$Astro = createAstro("https://agency-template.vbartalis.dev");
const $$Solutions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Solutions;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="services"${addAttribute(`flex flex-col ${className}`, "class")}> ${solutions.map((solution, index) => {
    const oddIndex = index % 2 === 0;
    const flexRow = oddIndex ? "midmd:flex-row-reverse" : "midmd:flex-row";
    const bgColor = oddIndex ? "bg-orange-100 dark:bg-gray-800 " : "bg-transparent";
    return renderTemplate`<div${addAttribute(`py-10 md:py-16 ${bgColor}`, "class")}> <div${addAttribute(`flex flex-col gap-10 lg:gap-12 ${flexRow} mx-auto w-full max-w-7xl`, "class")}> <div class="midmd:w-7/12 mx-auto flex w-11/12 max-w-md flex-1 flex-col lg:w-1/2"> ${renderComponent($$result, "Title", $$Title, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GradientText", $$GradientText, {}, { "default": ($$result3) => renderTemplate`${solution.title}` })} ` })} ${renderComponent($$result, "Paragraph", $$Paragraph, { "className": "mt-8 font-medium text-lg md:text-2xl" }, { "default": ($$result2) => renderTemplate`${solution.painPoint}` })} ${renderComponent($$result, "Paragraph", $$Paragraph, { "className": "mt-3 " }, { "default": ($$result2) => renderTemplate`${solution.agitatepainPoint}` })} ${renderComponent($$result, "Paragraph", $$Paragraph, { "className": "mt-3 font-medium" }, { "default": ($$result2) => renderTemplate`${solution.solution}` })} </div> <div class="midmd:max-w-none midmd:w-5/12 midmd:h-auto mx-auto flex w-11/12 max-w-md flex-1 lg:mx-0 lg:w-1/2 lg:pr-10 xl:pr-2"> <div class="midmd:h-full relative h-80 w-full sm:h-96"> ${renderComponent($$result, "Image", $$Image, { "src": solution.img, "alt": "banner image", "width": "1240", "height": "1385", "class": "absolute bottom-0 left-1/2 max-h-full w-auto -translate-x-1/2 rounded-3xl object-cover" })} </div> </div> </div> </div>`;
  })} </section>`;
}, "/home/saifur/Documents/works/agency-template-master/src/components/sections/Solutions.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to the Agency template" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col overflow-hidden"> ${renderComponent($$result2, "Hero", $$Hero, { "className": "py-10 md:py-16" })} ${renderComponent($$result2, "Solutions", $$Solutions, { "className": "pt-10 md:pt-16" })} ${renderComponent($$result2, "Services", $$Services, { "className": "py-10 md:py-16" })} ${renderComponent($$result2, "FAQ", $$FAQ, { "className": "py-10 md:py-16" })} ${renderComponent($$result2, "CTA", $$CTA, { "className": "py-10 md:py-16" })} <!-- Hero --> <!-- headline, subheading, image, cta button, results --> <!-- Problems/Solutions --> <!-- title, painpoint, aggitate pain, introduce solution, video  --> <!-- Benefits/Services --> <!-- benefit title, thanks to features, visual --> <!-- Testimonials/Brands --> <!-- reviews, partners --> <!-- Features --> <!-- ~10 features, more technical than emotional, in a list --> <!-- FAQ --> <!-- questions, answers, video --> <!-- CTA --> <!-- Question, button --> </main> ` })}`;
}, "/home/saifur/Documents/works/agency-template-master/src/pages/index.astro", void 0);

const $$file = "/home/saifur/Documents/works/agency-template-master/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
