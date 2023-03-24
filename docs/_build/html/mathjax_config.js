/**
 * Configuring MathJax
 */
// Latex extension list http://docs.mathjax.org/en/latest/input/tex/extensions/index.html
MathJax = {
    loader: {
        load: ['ui/menu', '[tex]/all-packages', '[tex]/physics',
            '[tex]/ams', '[tex]/gensymb', '[tex]/noundefined',
            '[tex]/noerrors', '[tex]/boldsymbol', '[tex]/textcomp', '[tex]/textmacros'
        ]
    },
    tex: {
        packages: { '[+]': ['physics', 'ams', 'gensymb', 'noundefined', 'textcomp', 'bbox', 'boldsymbol', 'textmacros'] },
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [["$$", "$$"], ["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true,
        noundefined: {
            color: 'red',
            background: '',
            size: ''
        },
        macros: {
            RR: "{\\bf R}",
            bold: ["{\\bf #1}", 1],
            text: ["{#1}", 1],
            textalpha: "{\\alpha}",
            textbeta: "{\\beta}",
            textgamma: "{\\gamma}",
            textdelta: "{\\delta}",
            xspace: "{}",
            mbox: ["{#1}", 1],
            Alpha: "\\mbox{A}",
            Beta: "\\mbox{B}",
            Epsilon: "\\mbox{E}",
            Zeta: "\\mbox{Z}",
            Eta: "\\mbox{H}",
            Iota: "\\mbox{I}",
            Kappa: "\\mbox{K}",
            Mu: "\\mbox{M}",
            Nu: "\\mbox{N}",
            Omicron: "\\mbox{O}",
            Rho: "\\mbox{P}",
            Tau: "\\mbox{T}",
            Chi: "\\mbox{X}",
            and: "\\mbox{&}",
            or: "\\lor",
            exist: "\\exists",
            empty: "\\emptyset",
            P: "\\mbox{P}",
            tan: "\\operatorname{tg}",   // tangent
            tg: "\\operatorname{tg}",    // tangent
            cot: "\\operatorname{ctg}",  // cotangent
            ctg: "\\operatorname{ctg}",  // cotangent
            csc: "\\operatorname{cosec}",     // cosecant
            cosec: "\\operatorname{cosec}",   // cosecant
            arctan: "\\operatorname{arctg}",  // arctangent
            arctg: "\\operatorname{arctg}",   // arctangent
            arccot: "\\operatorname{arcctg}",      // arc cotangent
            arcctg: "\\operatorname{arcctg}",      // arc cotangent
            arcsec: "\\operatorname{arcsec}",      // arc secant
            arccsc: "\\operatorname{arccosec}",    // arc cosecant
            arccosec: "\\operatorname{arccosec}",  // arc cosecant
            sh: "\\operatorname{sh}",     // hyperbolic sine
            ch: "\\operatorname{ch}",     // hyperbolic cosine
            th: "\\operatorname{th}",     // hyperbolic tangent
            cth: "\\operatorname{cth}",   // hyperbolic cotangent
            sinh: "\\operatorname{sh}",   // hyperbolic синус
            cosh: "\\operatorname{ch}",   // hyperbolic cosine
            tanh: "\\operatorname{th}",   // hyperbolic tangent
            coth: "\\operatorname{cth}",  // hyperbolic cotangent
            sgn: "\\operatorname{sgn}",
            mod: "\\operatorname{mod}",
            ge: "\\geqslant",
            le: "\\leqslant",
            geq: "\\geqslant",
            leq: "\\leqslant",
            N: "\\mathbb{N}",
            R: "\\mathbb{R}",
            Q: "\\mathbb{Q}",
            Z: "\\mathbb{Z}",
            C: "\\mathbb{C}",
            H: "\\mathbb{H}",
            P: "\\mathbb{P}",
            dmtr: "\\unicode{x2300}", // diameter sign
            deg: "\\unicode{xb0}",    // degree sign
            celdeg: "\\unicode{x2103}"   // degree Celsius sign
        }
    },
};