(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{484:function(e,r,t){e.exports=t.p+"assets/img/0_61_help_menu.09bc458e.png"},485:function(e,r,t){e.exports=t.p+"assets/img/0_61_completion_descriptions.b7f3abef.png"},555:function(e,r,t){"use strict";t.r(r);var n=t(35),l=Object(n.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"nushell-0-61"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-61"}},[e._v("#")]),e._v(" Nushell 0.61")]),e._v(" "),n("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),n("p",[e._v("Today, we're releasing version 0.61 of Nu. This release includes UI improvements, many bugfixes, improved glob support, and more.")]),e._v(" "),n("h1",{attrs:{id:"where-to-get-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),n("p",[e._v("Nu 0.61 is available as "),n("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.61.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),n("OutboundLink")],1),e._v(" or from "),n("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),n("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),n("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),n("p",[e._v("If you want all the built-in goodies, you can install "),n("code",[e._v("cargo install nu --all-features")]),e._v(".")]),e._v(" "),n("p",[e._v("As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use "),n("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),n("h1",{attrs:{id:"help-menu-elferherrera"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#help-menu-elferherrera"}},[e._v("#")]),e._v(" Help Menu (elferherrera)")]),e._v(" "),n("p",[n("img",{attrs:{src:t(484),alt:"Help menu"}})]),e._v(" "),n("p",[e._v("In 0.61, you can now use "),n("code",[e._v("<ctrl+q>")]),e._v(" to ask a question/query in Nushell. Currently, this will search through the commands and show you commands that mention the word you type.")]),e._v(" "),n("p",[e._v("Tab lets you move between the available commands.")]),e._v(" "),n("p",[e._v("You can use up/down to pick the example you'd like to use. Pressing enter will select the example and insert it into the input for you.")]),e._v(" "),n("h1",{attrs:{id:"completion-descriptions-elferherrera-fdncred-jt"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#completion-descriptions-elferherrera-fdncred-jt"}},[e._v("#")]),e._v(" Completion descriptions (elferherrera, fdncred, jt)")]),e._v(" "),n("p",[n("img",{attrs:{src:t(485),alt:"Completion descriptions"}})]),e._v(" "),n("p",[e._v("Completions now show you a description of the command you're completing, if it's available.")]),e._v(" "),n("h1",{attrs:{id:"introducing-env-nu-kubouch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introducing-env-nu-kubouch"}},[e._v("#")]),e._v(" Introducing 'env.nu' (kubouch)")]),e._v(" "),n("p",[e._v("Just as we added 'config.nu' with 0.60, we're now adding a new additional startup file called 'env.nu'. The job of this file is to set up the environment that you'll run Nushell in. As a result, you're able to set up important environment variables like "),n("code",[e._v("$env.NU_LIB_DIRS")]),e._v(" before 'config.nu' begins to run, let you take full advantage of the new library directories you've configured.")]),e._v(" "),n("h1",{attrs:{id:"features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("input")]),e._v(" can now "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5017",target:"_blank",rel:"noopener noreferrer"}},[e._v("suppress output"),n("OutboundLink")],1),e._v(" (dev-msp)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4956",target:"_blank",rel:"noopener noreferrer"}},[e._v("Termux/Android target support for new engine"),n("OutboundLink")],1),e._v(" (dscottboggs)")]),e._v(" "),n("li",[n("code",[e._v("open")]),e._v(" can now use "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5049",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("from ...")]),e._v(" named custom commands"),n("OutboundLink")],1),e._v(" (neosam)")]),e._v(" "),n("li",[e._v("New "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5054",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("sort")]),e._v(" command for easier sorting"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[n("code",[e._v("date to-record")]),e._v(" for "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5058",target:"_blank",rel:"noopener noreferrer"}},[e._v("working with structured dates"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("New "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5061",target:"_blank",rel:"noopener noreferrer"}},[e._v("starts-with operator"),n("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),n("li",[e._v("Can now create "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5085",target:"_blank",rel:"noopener noreferrer"}},[e._v("generic menus for repl interactions"),n("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),n("li",[e._v("New "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5087",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("glob")]),e._v(" command for fancier globbing"),n("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5111",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unary "),n("code",[e._v("not")]),e._v(" support"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Startup and pre-prompt setup should now be "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5115",target:"_blank",rel:"noopener noreferrer"}},[e._v("significantly faster"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5149",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("0b[...]")]),e._v(" support for binary literals"),n("OutboundLink")],1),e._v(" (merkrafter)")])]),e._v(" "),n("h1",{attrs:{id:"improvements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),n("ul",[n("li",[e._v("Parser improvements by uasi, jt, rgwood")]),e._v(" "),n("li",[e._v("Error improvements by jmoore34, jt, rgwood")]),e._v(" "),n("li",[e._v("Documentation updates by hustcer, vishalsodani, fdncred, futile, kubouch, stormasm, Hofer-Julian, herlon214, rgwood, michel-slm")]),e._v(" "),n("li",[e._v("General code cleanliness fixes by stormasm, bowlofeggs, rgwood, sholderbach, fdncred, herlon214, elferherrera, boyvanduuren, jt")]),e._v(" "),n("li",[e._v("Multiple improvements to known external commands (filaretov, jt)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5167",target:"_blank",rel:"noopener noreferrer"}},[e._v("Use recent miette"),n("OutboundLink")],1),e._v(" (zkat)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5153",target:"_blank",rel:"noopener noreferrer"}},[e._v("Improved logic to path expansion"),n("OutboundLink")],1),e._v(" (strega-nil-ms)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5141",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("ls")]),e._v(" now outputs date in local time"),n("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5137",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("$in")]),e._v(" should now work in more places"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5136",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("each")]),e._v(" now also pipes each item as input to the block"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Add ability to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5133",target:"_blank",rel:"noopener noreferrer"}},[e._v("opt-in to normal strings in "),n("code",[e._v("str replace")]),n("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),n("li",[n("code",[e._v("touch")]),e._v(" now "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5119",target:"_blank",rel:"noopener noreferrer"}},[e._v("includes all common flags"),n("OutboundLink")],1),e._v(" (rybertm)")]),e._v(" "),n("li",[n("code",[e._v("=~")]),e._v(" and "),n("code",[e._v("=!")]),e._v(" now "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5117",target:"_blank",rel:"noopener noreferrer"}},[e._v("use regex"),n("OutboundLink")],1),e._v(" (rgwood)")]),e._v(" "),n("li",[n("code",[e._v("describe")]),e._v(" should now be "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5116",target:"_blank",rel:"noopener noreferrer"}},[e._v("more precise"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("completions now "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5108",target:"_blank",rel:"noopener noreferrer"}},[e._v("give priority to non-hidden folders"),n("OutboundLink")],1),e._v(" (herlon214)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5105",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugins are now loaded for scripts and commands"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5097",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("input")]),e._v(" now trims the newline"),n("OutboundLink")],1),e._v(" (rgwood)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5100",target:"_blank",rel:"noopener noreferrer"}},[e._v("regex "),n("code",[e._v("find")]),e._v(" now works with records"),n("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),n("li",[e._v("Fixes to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5095",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("format")]),e._v(" for non-basic datatypes"),n("OutboundLink")],1),e._v(" (rgwood)")]),e._v(" "),n("li",[e._v("Added "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5090",target:"_blank",rel:"noopener noreferrer"}},[e._v("raw string support via backticks"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Switched to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5001",target:"_blank",rel:"noopener noreferrer"}},[e._v("levenshtein distance sorting for completions"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Improvements to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5041",target:"_blank",rel:"noopener noreferrer"}},[e._v("line editor state handling"),n("OutboundLink")],1),e._v(" (sholderbach)")]),e._v(" "),n("li",[e._v("Treat "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5026",target:"_blank",rel:"noopener noreferrer"}},[e._v("prompt indicators as commands"),n("OutboundLink")],1),e._v(" (elferherrera)")]),e._v(" "),n("li",[e._v("Added "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5040",target:"_blank",rel:"noopener noreferrer"}},[e._v("record, list, and table to signature types"),n("OutboundLink")],1),e._v(" (kubouch)")]),e._v(" "),n("li",[e._v("Improvements to "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5016",target:"_blank",rel:"noopener noreferrer"}},[e._v("default git completions"),n("OutboundLink")],1),e._v(" (naufraghi)")]),e._v(" "),n("li",[e._v("Prompts "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5052",target:"_blank",rel:"noopener noreferrer"}},[e._v("can now be simple strings"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Sets "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5084",target:"_blank",rel:"noopener noreferrer"}},[e._v("LAST_EXIT_CODE on parse errors"),n("OutboundLink")],1),e._v(" (rgwood)")]),e._v(" "),n("li",[e._v("Passed "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5009",target:"_blank",rel:"noopener noreferrer"}},[e._v("more metadata through filter commands"),n("OutboundLink")],1),e._v(" (rrcwang)")]),e._v(" "),n("li",[n("code",[e._v("last")]),e._v(" now returns a "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5060",target:"_blank",rel:"noopener noreferrer"}},[e._v("simple value for single items"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Fixed "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5003",target:"_blank",rel:"noopener noreferrer"}},[e._v("loops not terminating with ctrl-c"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Added "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4986",target:"_blank",rel:"noopener noreferrer"}},[e._v("bounded channels for backpressure"),n("OutboundLink")],1),e._v(" (b333z)")]),e._v(" "),n("li",[e._v("Added "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4985",target:"_blank",rel:"noopener noreferrer"}},[e._v("streaming support to "),n("code",[e._v("save")]),n("OutboundLink")],1),e._v(" (b333z)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4984",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support for passing binary data into run-external"),n("OutboundLink")],1),e._v(" (b333z)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4968",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fix for alias imports"),n("OutboundLink")],1),e._v(" (filaretov, jt)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4983",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fix for "),n("code",[e._v("ls")]),e._v(" when file is a socket on macOS"),n("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4974",target:"_blank",rel:"noopener noreferrer"}},[e._v("Better tilde expansion"),n("OutboundLink")],1),e._v(" (filaretov)")]),e._v(" "),n("li",[e._v("Added "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4978",target:"_blank",rel:"noopener noreferrer"}},[e._v("keywords to help messages"),n("OutboundLink")],1),e._v(" (kubouch)")]),e._v(" "),n("li",[e._v("Removed "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4979",target:"_blank",rel:"noopener noreferrer"}},[e._v("is_private from "),n("code",[e._v("$nu.scope.commands")]),n("OutboundLink")],1),e._v(" (kubouch)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4959",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fix for "),n("code",[e._v("path join")]),e._v(" on streams"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4960",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fixes to environment defaults"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4964",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding escapes to "),n("code",[e._v("to nuon")]),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Improvements to the "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4951",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("reject")]),e._v(" command"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Fix to the "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4947",target:"_blank",rel:"noopener noreferrer"}},[e._v("precedence parser"),n("OutboundLink")],1),e._v(" (jt)")]),e._v(" "),n("li",[e._v("Calling out through "),n("code",[e._v("cmd.exe")]),e._v(" "),n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/4903",target:"_blank",rel:"noopener noreferrer"}},[e._v("no longer uses AutoRun"),n("OutboundLink")],1),e._v(" (LebsterFace)")])]),e._v(" "),n("h1",{attrs:{id:"breaking-changes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5120",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("str find-replace")]),e._v(" is now "),n("code",[e._v("str replace")]),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/nushell/nushell/pull/5123",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("keep")]),e._v(" is now "),n("code",[e._v("take")]),n("OutboundLink")],1)])]),e._v(" "),n("h1",{attrs:{id:"looking-ahead"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#looking-ahead"}},[e._v("#")]),e._v(" Looking ahead")]),e._v(" "),n("p",[e._v("The 0.61 release, despite slowing down a little to recoup from the 0.60 release, is one of our largest releases. We averaged over 7 PRs/day over the last three weeks, as many new people joined on and more took an interest in Nushell.")]),e._v(" "),n("p",[e._v("Areas of upcoming focus will be on improving dataframe support, adding IDE support, and exploring new ways of working with Nushell.")])])}),[],!1,null,null,null);r.default=l.exports}}]);