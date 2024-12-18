/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8336:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(4916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(3948);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/site/Toast.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const Toast_module = ({"toast":"toast--9Zx5dPC","toastContent":"toast-content--WnBN4n5"});
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 3 modules
var react_toastify_esm = __webpack_require__(4723);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(7905);
;// CONCATENATED MODULE: ./src/site/components/Header/Header.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const Header_module = ({"panel":"panel--2Rx-znk","panelTitle":"panel__title---xor4wk","logo":"logo--zt3s+5G","copy":"copy--uUpc3B+"});
// EXTERNAL MODULE: ./node_modules/react-github-corner/lib/GithubCorner.js
var GithubCorner = __webpack_require__(7792);
// EXTERNAL MODULE: ./node_modules/react-copy-to-clipboard/lib/index.js
var lib = __webpack_require__(4855);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/site/locales/en/app.json
const app_namespaceObject = JSON.parse('{"Fs":{"k":"header.libInfo","E":"header.projectPageGithub"},"Gu":{"T":"validate.title","x":"validate.insertCPF"},"R_":{"T":"generate.title","h":"generate.cpfGenerated"},"um":{"algorithm":"info.algorithm","disclaimer":"info.disclaimer","cpfByState":"info.cpfByState","codeByState":"info.codeByState","example":"info.example","stateCode1":"info.stateCode1","stateCode2":"info.stateCode2","stateCode3":"info.stateCode3","stateCode4":"info.stateCode4","stateCode5":"info.stateCode5","stateCode6":"info.stateCode6","stateCode7":"info.stateCode7","stateCode8":"info.stateCode8","stateCode9":"info.stateCode9","stateCode10":"info.stateCode10","disclaimerValidCPF":"info.disclaimerValidCPF"},"HC":{"qN":"donate.leaveStar","zP":"donate.contributePaypal","yu":"donate.contributeBitcoin"},"sY":{"Rp":"messages.copied","uN":"messages.cpfCopied","$n":"messages.validCPF","tO":"messages.invalidCPF","d1":"messages.walletCopied","uq":"messages.incomplete"}}');
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(6793);
;// CONCATENATED MODULE: ./src/site/components/Donate/Donation.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const Donation_module = ({"list":"list---SVKKax","blur":"blur--x8cnNT0","button":"button--dpXb0EL","buttonStar":"button--star--OqFQ3jx","buttonPaypal":"button--paypal--Xf0Wtkc","buttonBitcoin":"button--bitcoin--2DikXEU","buttonLitcoin":"button--litcoin--KkwCWPH"});
;// CONCATENATED MODULE: ./src/site/components/Donate/Code.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const Code_module = ({"codeBox":"code-box--wTf3+1I","code":"code--k-XXFFh","showCode":"show-code--s5yD-Bf","showQr":"showQR--Q5VvAB6","hideCode":"hide-code--RdClxl3","hideQr":"hideQR--mTTFWeq"});
;// CONCATENATED MODULE: ./src/site/components/Donate/img/BTCQR.png
/* harmony default export */ const BTCQR = (__webpack_require__.p + "img/8dc8709c5ac9f02634a3a49ff8f1e85f.png");
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/site/components/Donate/Donate.tsx










const Donate = () => {
  const {
    t
  } = (0,useTranslation/* useTranslation */.$)();
  const [isCodeVisible, setIsCodeVisible] = (0,react.useState)(false);
  const trackClick = _ref => {
    let {
      category,
      type
    } = _ref;
    return () => {
      if (true) {
        const pushData = async () => {
          const ReactGA = await __webpack_require__.e(/* import() */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));
          ReactGA.ga('send', 'event', category, 'click', type);
        };
        pushData();
      }
    };
  };
  const handleCopy = () => {
    (0,react_toastify_esm/* toast */.Am)(t(app_namespaceObject.sY.d1));
  };
  const toggleCodeVisibility = () => {
    setIsCodeVisible(!isCodeVisible);
  };
  const handleClick = trackInfo => () => {
    trackClick(trackInfo)();
    toggleCodeVisibility();
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "donation",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
      className: Donation_module.list + " " + (isCodeVisible ? Donation_module.blur : ''),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: Donation_module.button + " " + Donation_module.buttonStar,
          onClick: trackClick({
            category: 'Star',
            type: 'generate-validade-cpf'
          }),
          "aria-label": t(app_namespaceObject.HC.qN),
          "data-footnote": t(app_namespaceObject.HC.qN),
          href: "https://github.com/tiagoporto/gerador-validador-cpf/stargazers",
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
            width: "14",
            height: "16",
            viewBox: "0 0 14 16",
            version: "1.1",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
              d: "M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: Donation_module.button + " " + Donation_module.buttonPaypal,
          onClick: trackClick({
            category: 'Donate',
            type: 'Paypal generate-validade-cpf'
          }),
          "aria-label": t(app_namespaceObject.HC.zP),
          "data-footnote": t(app_namespaceObject.HC.zP),
          href: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "PayPal"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
          text: "14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp",
          onCopy: handleCopy,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
            className: Donation_module.button + " " + Donation_module.buttonBitcoin,
            onClick: handleClick({
              category: 'Donate',
              type: 'Bitcoin generate-validate-cpf'
            }),
            "aria-label": t(app_namespaceObject.HC.yu),
            "data-footnote": t(app_namespaceObject.HC.yu),
            children: "Bitcoin"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Code_module.codeBox,
      style: {
        display: isCodeVisible ? 'block' : 'none'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        role: "presentation",
        alt: "QRCode Bitcoin Wallet",
        src: BTCQR,
        onKeyPress: toggleCodeVisibility,
        onClick: toggleCodeVisibility,
        className: Code_module.code + " " + (isCodeVisible ? Code_module.showCode : Code_module.hideCode)
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/site/components/Donate/index.ts

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(1637);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js + 5 modules
var i18next = __webpack_require__(9216);
;// CONCATENATED MODULE: ./src/site/components/ChangeLocale/ChangeLocale.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const ChangeLocale_module = ({"box":"box--Jrqhdlw","button":"button--fKsrvE2","selected":"selected--be1YAQ2"});
;// CONCATENATED MODULE: ./src/site/components/ChangeLocale/ChangeLocale.tsx







const ChangeLocale = () => {
  const handleLocale = (locale, callback) => () => {
    i18next/* default.changeLanguage */.Z.changeLanguage(locale);
    window.history.replaceState({}, 'Gerador e Validador de CPF', "?lang=" + locale);
    callback && setTimeout(callback, 5);
  };
  const [locale, setLocale] = (0,react.useState)('');
  const [isLoading, setIsLoading] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    setLocale(i18next/* default.language */.Z.language);
  }, [i18next/* default.language */.Z.language]);
  (0,react.useEffect)(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const lang = searchParams.get('lang');
    if (lang) {
      handleLocale(lang, () => setIsLoading(false))();
    } else {
      setIsLoading(false);
    }
  }, []);

  // eslint-disable-next-line unicorn/no-null
  return isLoading ? null : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: ChangeLocale_module.box,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: ChangeLocale_module.button + " " + (locale === 'br' ? ChangeLocale_module.selected : ''),
      onClick: handleLocale('br'),
      children: "pt-br"
    }), ' ', "|", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      className: ChangeLocale_module.button + " " + (locale === 'en' ? ChangeLocale_module.selected : ''),
      onClick: handleLocale('en'),
      children: "en"
    })]
  });
};
;// CONCATENATED MODULE: ./src/site/components/ChangeLocale/index.ts

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/github.css
var github = __webpack_require__(7459);
;// CONCATENATED MODULE: ./src/site/components/Header/Header.tsx










const Header = () => {
  const {
    t
  } = (0,useTranslation/* useTranslation */.$)();
  const handleCopy = () => {
    (0,react_toastify_esm/* toast */.Am)(t(app_namespaceObject.sY.Rp));
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
    className: Header_module.panel,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ChangeLocale, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(GithubCorner/* default */.Z, {
      href: "https://github.com/tiagoporto/gerador-validador-cpf/",
      size: 80,
      bannerColor: "#fff",
      octoColor: "#155078",
      ariaLabel: t(app_namespaceObject.Fs.E)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h1", {
      className: Header_module.panelTitle,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Gerador e"
      }), " validador de", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("abbr", {
        title: "Cadastro de Pessoas F\xEDsicas",
        children: "CPF"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: t(app_namespaceObject.Fs.k)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
      text: "npm install gerador-validador-cpf --save",
      onCopy: handleCopy,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        className: Header_module.copy,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          className: "hljs",
          children: "npm install gerador-validador-cpf --save-dev"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Donate, {})]
  });
};
;// CONCATENATED MODULE: ./src/site/components/Header/index.ts

;// CONCATENATED MODULE: ./src/site/components/Footer/Footer.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const Footer_module = ({"footer":"footer--VcOJImz"});
;// CONCATENATED MODULE: ./src/site/components/Footer/Footer.tsx


const Footer = () => {
  const date = new Date();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("footer", {
    className: Footer_module.footer,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      children: ["\xA9 2014-", date.getFullYear(), " | Tiago Porto"]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/Footer/index.ts

;// CONCATENATED MODULE: ./src/site/components/GenerateSection/GenerateSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const GenerateSection_module = ({"generateButton":"generate-button--IXvRHkX","generateSection":"generate-section--4shAAIm","input":"input--RT6qw+C","center":"center--Q3GGVyC"});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5306);
;// CONCATENATED MODULE: ./src/lib/calcChecker.ts
const calcFirstChecker = firstNineDigits => {
  let sum = 0;
  for (let i = 0; i < 9; ++i) {
    sum += Number(firstNineDigits.charAt(i)) * (10 - i);
  }
  const lastSumChecker = sum % 11;
  return lastSumChecker < 2 ? 0 : 11 - lastSumChecker;
};
const calcSecondChecker = cpfWithChecker1 => {
  let sum = 0;
  for (let i = 0; i < 10; ++i) {
    sum += Number(cpfWithChecker1.charAt(i)) * (11 - i);
  }
  const lastSumChecker2 = sum % 11;
  return lastSumChecker2 < 2 ? 0 : 11 - lastSumChecker2;
};
;// CONCATENATED MODULE: ./src/lib/utils.ts
const generateFirstDigits = () => {
  let digits = '';
  for (let i = 0; i < 9; ++i) {
    digits += String(Math.floor(Math.random() * 10));
  }
  return digits;
};
const hasCPFLength = cpf => {
  if (cpf.length > 11 || cpf.length < 11) {
    return false;
  }
  return true;
};

// format option
// true   return 000.000.000-00
// false  return 00000000000
const formatCPF = (cpf, format) => {
  let digitsSeparator = '';
  let checkersSeparator = '';
  if (format) {
    digitsSeparator = '.';
    checkersSeparator = '-';
  }
  return cpf.slice(0, 3) + digitsSeparator + cpf.slice(3, 6) + digitsSeparator + cpf.slice(6, 9) + checkersSeparator + cpf.slice(9, 11);
};
const allDigitsAreEqual = digits => {
  for (let i = 0; i < 10; i++) {
    if (digits === Array.from({
      length: digits.length + 1
    }).join(String(i))) {
      return true;
    }
  }
  return false;
};
;// CONCATENATED MODULE: ./src/lib/CPF.ts





/**
 * @function Generate
 * @param  {string} [formatOption="default"] - 'digits' | 'checker' | 'default'
 * @returns {string}                  Valid and formatted CPF
 */
const generate = function (_temp) {
  let {
    format
  } = _temp === void 0 ? {} : _temp;
  let firstNineDigits = '';
  do {
    firstNineDigits = generateFirstDigits();
  } while (allDigitsAreEqual(firstNineDigits));
  const firstChecker = calcFirstChecker(firstNineDigits);
  const secondChecker = calcSecondChecker(firstNineDigits + firstChecker);
  const generatedCPF = "" + firstNineDigits + firstChecker + secondChecker;
  return formatCPF(generatedCPF, format);
};

/**
 * @function Validate
 * @param  {string} value  CPF number
 * @returns {boolean}                true = valid || false = invalid
 */
const validate = value => {
  if (typeof value !== 'string') {
    return false;
  }
  const cleanCPF = String(value).replace(/[\s.-]/g, '');
  const firstNineDigits = cleanCPF.slice(0, 9);
  const checker = cleanCPF.slice(9, 11);
  if (!hasCPFLength(cleanCPF) || allDigitsAreEqual(cleanCPF)) {
    return false;
  }
  const checker1 = calcFirstChecker(firstNineDigits);
  const checker2 = calcSecondChecker("" + firstNineDigits + checker1);
  return checker === "" + checker1 + checker2;
};
// EXTERNAL MODULE: ./node_modules/react-imask/esm/index.js + 2 modules
var esm = __webpack_require__(6681);
;// CONCATENATED MODULE: ./src/site/components/GenerateSection/GenerateSection.tsx








// @ts-expect-error: Missing types


const GenerateSection = () => {
  const [cpf, setCpf] = (0,react.useState)('');
  const {
    t
  } = (0,useTranslation/* useTranslation */.$)();
  const handleCopy = () => {
    (0,react_toastify_esm/* toast */.Am)(t(app_namespaceObject.sY.uN));
  };
  const generateNewCPF = type => () => {
    setCpf(generate());
    if (true) {
      const pushData = async () => {
        const ReactGA = await __webpack_require__.e(/* import() */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));
        ReactGA.ga('send', 'event', 'Generate', type, 'Generate CPF');
      };
      pushData();
    }
  };
  (0,react.useEffect)(() => {
    generateNewCPF('load')();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    className: GenerateSection_module.generateSection,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: GenerateSection_module.center,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: t(app_namespaceObject.R_.T)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)((lib_default()), {
        text: cpf,
        onCopy: handleCopy,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* IMaskInput */.o, {
          "aria-label": t(app_namespaceObject.R_.h),
          value: cpf,
          className: GenerateSection_module.input,
          type: "text",
          mask: '000.000.000-00',
          readOnly: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: generateNewCPF('click'),
        className: GenerateSection_module.generateButton,
        type: "button",
        children: t(app_namespaceObject.R_.T)
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/GenerateSection/index.ts

;// CONCATENATED MODULE: ./src/site/components/ValidateSection/ValidateSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const ValidateSection_module = ({"validateSection":"validate-section--7mmgxYp","center":"center--xx13cSP","validateSectionInput":"validate-section__input--x4G45x9","message":"message--ieCuZ0Q","messageValid":"message--valid--5Iu2qkY","messageInvalid":"message--invalid--C05suMY"});
;// CONCATENATED MODULE: ./src/site/components/ValidateSection/ValidateSection.tsx




// @ts-expect-error: Missing types




const enableAnalytics = async () => {
  const ReactGA = await __webpack_require__.e(/* import() */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));
  ReactGA.ga('send', 'event', 'Validate', 'type', 'Validate CPF');
};
const ValidateSection = () => {
  const {
    t
  } = (0,useTranslation/* useTranslation */.$)();
  const [validation, setValidation] = (0,react.useState)({
    tempCpf: '',
    cpf: '',
    isValid: false,
    message: ''
  });
  const {
    cpf,
    isValid,
    message,
    tempCpf
  } = validation;
  const updateValidationState = parameters => {
    setValidation(previousState => Object.assign({}, previousState, parameters));
  };
  const handleChangeCPF = cpf => {
    updateValidationState({
      tempCpf: cpf
    });
  };
  (0,react.useEffect)(() => {
    if (tempCpf.length === 14) {
       true && enableAnalytics();
      const isValid = validate(tempCpf);
      const message = isValid ? t(app_namespaceObject.sY.$n) : t(app_namespaceObject.sY.tO);
      updateValidationState({
        cpf: tempCpf,
        isValid,
        message
      });
    } else {
      const message = tempCpf ? t(app_namespaceObject.sY.uq) : '';
      updateValidationState({
        cpf: '',
        message
      });
    }
  }, [tempCpf]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    className: ValidateSection_module.validateSection,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: ValidateSection_module.center,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: t(app_namespaceObject.Gu.T)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* IMaskInput */.o, {
        "aria-label": t(app_namespaceObject.Gu.x),
        value: tempCpf,
        placeholder: t(app_namespaceObject.Gu.x),
        onAccept: handleChangeCPF,
        className: ValidateSection_module.validateSectionInput,
        type: "text",
        mask: '000.000.000-00',
        required: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: ValidateSection_module.validateSectionInput + " " + ValidateSection_module.message + " " + (isValid && cpf ? ValidateSection_module.messageValid : '') + " " + (!isValid && cpf ? ValidateSection_module.messageInvalid : ''),
        children: message || '...'
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/ValidateSection/index.ts

;// CONCATENATED MODULE: ./src/site/components/InfoSection/InfoSection.module.styl
// extracted by mini-css-extract-plugin
/* harmony default export */ const InfoSection_module = ({"center":"center--2xM-ouo","infoSection":"info-section--y67Wx1C","list":"list--LXt2NC2"});
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(9189);
;// CONCATENATED MODULE: ./src/site/components/InfoSection/InfoSection.tsx




const InfoSection = () => {
  const {
    t
  } = (0,useTranslation/* useTranslation */.$)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
    className: InfoSection_module.infoSection,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: InfoSection_module.center,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: t(app_namespaceObject.um.disclaimer)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* Trans */.c, {
        i18nKey: app_namespaceObject.um.algorithm,
        components: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "http://www.geradorcpf.com/algoritmo_do_cpf.htm",
          children: "mock"
        }, "link")]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* Trans */.c, {
          i18nKey: app_namespaceObject.um.disclaimerValidCPF,
          components: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/consultapublica.asp",
            children: "mock"
          }, "link")]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: t(app_namespaceObject.um.cpfByState)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("blockquote", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Trans/* Trans */.c, {
          i18nKey: app_namespaceObject.um.example,
          components: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {}, "strong")]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: t(app_namespaceObject.um.codeByState)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("ol", {
        className: InfoSection_module.list,
        children: Array.from({
          length: 10
        }).map((value, index) => /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          children: t(app_namespaceObject.um["stateCode" + (index + 1)])
        }, "item" + index))
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/site/components/InfoSection/index.ts

;// CONCATENATED MODULE: ./src/site/components/Main/Main.tsx




const Main = () => /*#__PURE__*/(0,jsx_runtime.jsxs)("main", {
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GenerateSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ValidateSection, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(InfoSection, {})]
});
;// CONCATENATED MODULE: ./src/site/components/Main/index.ts

;// CONCATENATED MODULE: ./src/site/App.tsx









const App = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(react.StrictMode, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Main, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {})]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_toastify_esm/* ToastContainer */.Ix, {
      className: Toast_module.toast,
      toastClassName: Toast_module.toastContent,
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: true,
      newestOnTop: true,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: false,
      draggable: false,
      pauseOnHover: false
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/context.js + 1 modules
var context = __webpack_require__(7031);
;// CONCATENATED MODULE: ./src/site/locales/en/app.json
const locales_en_app_namespaceObject = JSON.parse('{"app":{"title":"Gerador e validador de CPF Open-Source | Tiago Porto","description":"Gerador e validador de CPF, open-source JS lib to generate and validate CPF.","keywords":"cpf,gerar,gerador,generator,generates,validador,valida,validates,online"},"header":{"libInfo":"JS open-source lib to generate and validate CPF.","projectPageGithub":"Github project page"},"validate":{"title":"Validate","insertCPF":"Insert CPF"},"generate":{"title":"Generate","cpfGenerated":"Generated CPF"},"info":{"algorithm":"Implements the follow <0>algorithm</0>.","disclaimer":"Lib available to assist developers in software testing, doesn\'t have link with \\"Receita Federal do Brasil\\".","cpfByState":"The last digit before verifiers (last 2 digits), corresponds with the brasilian state were CPF was issued.","codeByState":"Code by brasilian states:","example":"Example: CPF <0>XXX.XXX.XX8-XX</0>, number 8 corresponds to São Paulo state.","stateCode1":"1. Distrito Federal, Goiás, Mato Grosso do Sul and Tocantins;","stateCode2":"2. Pará, Amazonas, Acre, Amapá, Rondônia and Roraima;","stateCode3":"3. Ceará, Maranhão and Piauí;","stateCode4":"4. Pernambuco, Rio Grande do Norte, Paraíba and Alagoas;","stateCode5":"5. Bahia and Sergipe;","stateCode6":"6. Minas Gerais;","stateCode7":"7. Rio de Janeiro and Espírito Santo;","stateCode8":"8. São Paulo;","stateCode9":"9. Paraná and Santa Catarina;","stateCode10":"0. Rio Grande do Sul.","disclaimerValidCPF":"Valid CPF doesn\'t mean is registered or is active. For those informations, check <0>Secretaria da Receita Federal do Brasil</0>."},"donate":{"leaveStar":"Leave a ★","contributePaypal":"Contribute (Paypal)","contributeBitcoin":"Contribute (bitcoin)"},"messages":{"copied":"Copied!","cpfCopied":"CPF Copied!","validCPF":"CPF Valid","invalidCPF":"CPF Invalid","walletCopied":"Wallet copied!","incomplete":"incomplete"}}');
;// CONCATENATED MODULE: ./src/site/locales/br/app.json
const br_app_namespaceObject = JSON.parse('{"app":{"title":"Gerador e validador de CPF Open-Source | Tiago Porto","description":"Gerador e validador de CPF, biblioteca JS open-source para gerar e validar CPF.","keywords":"cpf,gerar,gerador,generator,generates,validador,valida,validates,online"},"header":{"libInfo":"Lib JS open-source para gerar e validar CPF.","projectPageGithub":"Página do projeto no github"},"validate":{"title":"Validar","insertCPF":"Insira o CPF"},"generate":{"title":"Gerar","cpfGenerated":"CPF gerado"},"info":{"algorithm":"Utiliza o seguinte <0>algoritmo</0>.","disclaimer":"Lib disponível para auxiliar desenvolvedores em testes de software, não possui qualquer vínculo com a Receita Federal do Brasil.","cpfByState":"O CPF guarda o estado brasileiro de onde foi emitido, esse número corresponde ao último algarismo anterior aos dois dígitos verificadores.","codeByState":"Códigos correspondentes aos estados brasileiros:","example":"Exemplo: CPF <0>XXX.XXX.XX8-XX</0>, o número 8 corresponde ao estado de São Paulo.","stateCode1":"1. Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins;","stateCode2":"2. Pará, Amazonas, Acre, Amapá, Rondônia e Roraima;","stateCode3":"3. Ceará, Maranhão e Piauí;","stateCode4":"4. Pernambuco, Rio Grande do Norte, Paraíba e Alagoas;","stateCode5":"5. Bahia e Sergipe;","stateCode6":"6. Minas Gerais;","stateCode7":"7. Rio de Janeiro e Espírito Santo;","stateCode8":"8. São Paulo;","stateCode9":"9. Paraná e Santa Catarina;","stateCode10":"0. Rio Grande do Sul.","disclaimerValidCPF":"Um CPF válido não significa que ele exista no Cadastro Nacional de Pessoas Físicas, nem que esteja ativo ou com situação cadastral regular. Para conferir tais dados, consulte o site oficial da <0>Secretaria da Receita Federal do Brasil</0>."},"donate":{"leaveStar":"Deixe um ★","contributePaypal":"Contribua pelo Paypal","contributeBitcoin":"Contribua por bitcoin"},"messages":{"copied":"Copiado!","cpfCopied":"CPF copiado!","validCPF":"CPF Válido","invalidCPF":"CPF Inválido","walletCopied":"Wallet copiado!","incomplete":"incompleto"}}');
;// CONCATENATED MODULE: ./src/site/locales/index.ts
// eslint-disable-next-line import/no-webpack-loader-syntax

// eslint-disable-next-line import/no-webpack-loader-syntax

const i18nResources = {
  en: locales_en_app_namespaceObject,
  br: br_app_namespaceObject
};
;// CONCATENATED MODULE: ./src/site/index.tsx








const loadOnProd = async () => {
  const ReactGA = await __webpack_require__.e(/* import() | react-ga */ 516).then(__webpack_require__.bind(__webpack_require__, 1516));
  ReactGA.initialize('UA-32351360-4');
  ReactGA.pageview(window.location.pathname + window.location.search);
  const {
    registerServiceWorker
  } = await __webpack_require__.e(/* import() | serviceWorker */ 49).then(__webpack_require__.bind(__webpack_require__, 6946));
  registerServiceWorker();
};
 true && loadOnProd();
i18next/* default.use */.Z.use(context/* initReactI18next */.Db).init({
  resources: {
    en: {
      translation: i18nResources.en
    },
    br: {
      translation: i18nResources.br
    }
  },
  lng: 'br',
  fallbackLng: 'br'
});
react_dom.render(/*#__PURE__*/(0,jsx_runtime.jsx)(App, {}), document.querySelector('#root'));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 49 ? "serviceWorker" : chunkId) + "." + {"49":"3cffb75a419a474f6833","516":"52c39718501468b96f5b"}[chunkId] + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "gerador-validador-cpf:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgerador_validador_cpf"] = self["webpackChunkgerador_validador_cpf"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [863,547,986], () => (__webpack_require__(5743)))
/******/ 	__webpack_require__.O(undefined, [863,547,986], () => (__webpack_require__(4048)))
/******/ 	__webpack_require__.O(undefined, [863,547,986], () => (__webpack_require__(1532)))
/******/ 	__webpack_require__.O(undefined, [863,547,986], () => (__webpack_require__(189)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [863,547,986], () => (__webpack_require__(8336)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.3c94572fcee6d87c6ebc.js.map