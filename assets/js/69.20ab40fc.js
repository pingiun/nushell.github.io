(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{581:function(e,t,r){"use strict";r.r(t);var s=r(34),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"how-to-configure-3rd-party-prompts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-configure-3rd-party-prompts"}},[e._v("#")]),e._v(" How to configure 3rd party prompts")]),e._v(" "),r("h2",{attrs:{id:"nerdfonts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nerdfonts"}},[e._v("#")]),e._v(" nerdfonts")]),e._v(" "),r("p",[e._v("nerdfonts are not required but they make the presentation much better.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://www.nerdfonts.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("site"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"oh-my-posh"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-posh"}},[e._v("#")]),e._v(" oh-my-posh")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("site"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/JanDeDobbeleer/oh-my-posh",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("If you like "),r("a",{attrs:{href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("oh-my-posh"),r("OutboundLink")],1),e._v(", you can use oh-my-posh with Nushell with a few steps. It works great with Nushell. How to setup oh-my-posh with Nushell:")]),e._v(" "),r("ol",[r("li",[e._v("Install Oh My Posh and download oh-my-posh's themes following "),r("a",{attrs:{href:"https://ohmyposh.dev/docs/linux#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Download and install a "),r("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("nerd font"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Set the PROMPT_COMMAND in ~/.config/nushell/config.nu(or the path output by "),r("code",[e._v("$nu.config-path")]),e._v("), change "),r("code",[e._v("M365Princess.omp.json")]),e._v(" to whatever you like "),r("a",{attrs:{href:"https://ohmyposh.dev/docs/themes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Themes demo"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" let-env PROMPT_COMMAND "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" oh-my-posh --config ~/.poshthemes/M365Princess.omp.json "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),r("p",[e._v("For MacOS users:")]),e._v(" "),r("ol",[r("li",[e._v("You can install oh-my-posh by "),r("code",[e._v("brew")]),e._v(", just following the "),r("a",{attrs:{href:"https://ohmyposh.dev/docs/macos",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide here"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Download and install a "),r("a",{attrs:{href:"https://github.com/ryanoasis/nerd-fonts",target:"_blank",rel:"noopener noreferrer"}},[e._v("nerd font"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[e._v("Set the PROMPT_COMMAND in the file output by "),r("code",[e._v("$nu.config-path")]),e._v(", here is a code snippet:")])]),e._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("let")]),e._v(" posh-dir "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("brew --prefix oh-my-posh "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" str trim"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("let")]),e._v(" posh-theme "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("$'($posh-dir)/share/oh-my-posh/themes/'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Change the theme names to: zash/space/robbyrussel/powerline/powerlevel10k_lean/")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# material/half-life/lambda Or double lines theme: amro/pure/spaceship, etc.")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# For more [Themes demo](https://ohmyposh.dev/docs/themes)")]),e._v("\nlet-env PROMPT_COMMAND "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" oh-my-posh prompt print primary --config "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("$'($posh-theme)/zash.omp.json'")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Optional")]),e._v("\nlet-env PROMPT_INDICATOR "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" $"),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"(ansi y)$> (ansi reset)"')]),e._v("\n")])])]),r("h2",{attrs:{id:"starship"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starship"}},[e._v("#")]),e._v(" Starship")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://starship.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("site"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/starship/starship",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo"),r("OutboundLink")],1)]),e._v(" "),r("ol",[r("li",[e._v("Follow the links above and install Starship.")]),e._v(" "),r("li",[e._v("Install nerdfonts depending on your preferences.")]),e._v(" "),r("li",[e._v("Use the config example below. Make sure to set the "),r("code",[e._v("STARSHIP_SHELL")]),e._v(" environment variable.")])]),e._v(" "),r("p",[e._v("Here's an example config section for Starship:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('let-env STARSHIP_SHELL = "nu"\n\ndef create_left_prompt [] {\n    starship prompt --cmd-duration $env.CMD_DURATION_MS $\'--status=($env.LAST_EXIT_CODE)\'\n}\n\n# Use nushell functions to define your right and left prompt\nlet-env PROMPT_COMMAND = { create_left_prompt }\nlet-env PROMPT_COMMAND_RIGHT = ""\n\n# The prompt indicators are environmental variables that represent\n# the state of the prompt\nlet-env PROMPT_INDICATOR = ""\nlet-env PROMPT_INDICATOR_VI_INSERT = ": "\nlet-env PROMPT_INDICATOR_VI_NORMAL = "〉"\nlet-env PROMPT_MULTILINE_INDICATOR = "::: "\n')])])]),r("p",[e._v("Now restart Nu.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("nushell on 📙 main is 📦 v0.60.0 via 🦀 v1.59.0\n❯\n")])])]),r("p",[e._v("You can learn more about configuring Starship in the "),r("a",{attrs:{href:"https://github.com/starship/starship#step-2-setup-your-shell-to-use-starship",target:"_blank",rel:"noopener noreferrer"}},[e._v("official starship configuration documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("An alternate way to enable Starship is described in the "),r("a",{attrs:{href:"https://starship.rs/#nushell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Starship Quick Install"),r("OutboundLink")],1),e._v(" instructions.")]),e._v(" "),r("h2",{attrs:{id:"purs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#purs"}},[e._v("#")]),e._v(" Purs")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/xcambar/purs",target:"_blank",rel:"noopener noreferrer"}},[e._v("repo"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);