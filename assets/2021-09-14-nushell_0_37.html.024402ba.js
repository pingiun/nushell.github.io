import{_ as a,r as i,o as r,c as l,f as h,a as e,b as o,d as t,e as s}from"./app.d1ec1d20.js";const d="/assets/0_37_find.e7220444.png",c="/assets/eq_git_branch_completion.3a9b726e.gif",u={},p=e("h1",{id:"nushell-0-37",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-37","aria-hidden":"true"},"#"),t(" Nushell 0.37")],-1),_=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),g=e("p",null,[t("Today, we're releasing 0.37 of Nu. This release adds a new "),e("code",null,"find"),t(" function, improvements to the current engine, and updates on the upcoming engine.")],-1),m=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),t(" Where to get it")],-1),f=t("Nu 0.37 is available as "),w={href:"https://github.com/nushell/nushell/releases/tag/0.37.0",target:"_blank",rel:"noopener noreferrer"},b=t("pre-built binaries"),k=t(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=t("crates.io"),x=t(". If you have Rust installed you can install it using "),N=e("code",null,"cargo install nu",-1),T=t("."),I=s('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><h2 id="finding-data-in-tables" tabindex="-1"><a class="header-anchor" href="#finding-data-in-tables" aria-hidden="true">#</a> <code>find</code>ing data in tables</h2><p><img src="'+d+'" alt="Screenshot showing using the new find command to find the phrase toml in a table"></p><p>In 0.37, you now have access to a new <code>find</code> command, which can help you quickly look for data across all columns in a table.</p><p>You can still reach your system&#39;s <code>find</code> command using <code>^</code> by typing <code>^find</code>.</p><h2 id="additional-improvements" tabindex="-1"><a class="header-anchor" href="#additional-improvements" aria-hidden="true">#</a> Additional improvements</h2>',8),q=t("fdncred added more "),A={href:"https://github.com/nushell/nushell/pull/3973",target:"_blank",rel:"noopener noreferrer"},E=t("support for ansi art"),V=t(", and "),B={href:"https://github.com/nushell/nushell/pull/3975",target:"_blank",rel:"noopener noreferrer"},L=t("more chars"),W=t("aminya removed shelling out in "),C={href:"https://github.com/nushell/nushell/pull/3974",target:"_blank",rel:"noopener noreferrer"},M=t("some cases where it's not needed"),O=t("jt made "),P={href:"https://github.com/nushell/nushell/pull/3983",target:"_blank",rel:"noopener noreferrer"},S=t("sys/ps/fetch/post core commands"),j=t(", moving them from plugins to internal commands. This allows for future capability to have nushell download its own extensions."),z=t("andrasio began adding "),R={href:"https://github.com/nushell/nushell/pull/3986",target:"_blank",rel:"noopener noreferrer"},D=t("support for creating errors inside of nushell code"),Y=t(", extended "),F={href:"https://github.com/nushell/nushell/pull/3988",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"tags",-1),H=t(" to support basic command reflection"),J=t("lily-mara added "),K={href:"https://github.com/nushell/nushell/pull/3987",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"into filesize",-1),U=t("tw4452852 added "),X={href:"https://github.com/nushell/nushell/pull/3992",target:"_blank",rel:"noopener noreferrer"},Z=t("support to append when calling "),$=e("code",null,"save",-1),ee=t("Pantoshire improved "),te={href:"https://github.com/nushell/nushell/pull/3995",target:"_blank",rel:"noopener noreferrer"},ne=t("errors when bash-style alias was mistakingly used"),oe=t("tranzystorek-io did a lot of "),se={href:"https://github.com/nushell/nushell/pull/3996",target:"_blank",rel:"noopener noreferrer"},ae=t("general code improvements"),ie=t("kubouch did some fixes to p"),re={href:"https://github.com/nushell/nushell/pull/3998",target:"_blank",rel:"noopener noreferrer"},le=t("aths and the "),he=e("code",null,"source",-1),de=t(" command"),ce=t("elferherrera updated the "),ue={href:"https://github.com/nushell/nushell/pull/4003",target:"_blank",rel:"noopener noreferrer"},pe=t("prompt environment variable to PROMPT_COMMAND"),_e=t(" to show that it is nushell code that gets run"),ge=s('<h2 id="engine-q" tabindex="-1"><a class="header-anchor" href="#engine-q" aria-hidden="true">#</a> Engine-q</h2><p>We&#39;ve been hard at work on the upcoming set of engine updates for Nushell (codenamed &#39;engine-q&#39;). These updates address some fundamental flaws in the current Nushell engine design and should help set us up for a strong engine in the future.</p><p>In this section we&#39;ll talk a bit about the design of this engine and show some fun tricks it&#39;s able to do.</p><h3 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h3><p>The current Nushell code uses a single concept for the scope that&#39;s shared between the parser and the evaluation engine. This is how definitions could be added by the parser into the scope that the engine could find them. This scope used locks to maintain thread safety. This meant that each variable lookup had the additional cost of unlocking the lock around the scope. The way this was set up also had subtle bugs with how the scope was handled, including corner cases where variables would be visible in scopes where they shouldn&#39;t be.</p><p>In addition, there wasn&#39;t an easy way to do a speculative parse of content like you might with syntax highlighting or completions.</p><h3 id="new-design" tabindex="-1"><a class="header-anchor" href="#new-design" aria-hidden="true">#</a> New design</h3>',7),me=t("In the new design, both the parser and the engine have received a pretty thorough rework. The parser now uses an "),fe={href:"https://en.wikipedia.org/wiki/String_interning",target:"_blank",rel:"noopener noreferrer"},we=t("interning system"),be=t(" for its definitions, allowing the resulting parse tree to be simpler. It also has a change delta system where the parser can create a temporary working set to use, and this working set can optionally merge into the permanent state. We've also building in a lot of additional fun additions -- like typechecking! -- so you can get additional benefits from information the parser knows."),ke=s('<p>Likewise, the engine has been rewritten to use proper scoping, a simpler value system, and more.</p><p>As you can see, we&#39;re taking full advantage of the opportunity to fix long-standing issues we wished we could fix over the last couple of years working on Nu.</p><p>Oh, there is one more thing.</p><p><img src="'+c+'" alt="Animated gif showing off dynaming git branch completions"></p><p>A big motivator for the rewrite was to make it easier to add dynamic custom completions, like the kind you use when completing a git branch while doing <code>git checkout</code>. The above gif shows a very early prototype of how we might implement this using the engine-q system. It works by running actually nushell code at completion time, getting the list of git branches as a list, and handing that list back to the completion system.</p><p>The demo took less than two hours to implement using the capabilities of the new engine, and we&#39;re excited to see how we can make this more general and offer the ability for folks to create their own completions in nushell code.</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>Engine-q offers some huge improvements to both the internals of Nushell as well as a way to finally check off tasks we know we&#39;ve wanted for a long time (like git completions). If you&#39;re interested in helping out with the engine-q work, we&#39;d love to have the help. The best place is to join us on the discord and on the engine-q repo.</p>',8);function ye(ve,xe){const n=i("ExternalLinkIcon");return r(),l("div",null,[p,_,g,h(" more "),m,e("p",null,[f,e("a",w,[b,o(n)]),k,e("a",y,[v,o(n)]),x,N,T]),I,e("ul",null,[e("li",null,[q,e("a",A,[E,o(n)]),V,e("a",B,[L,o(n)])]),e("li",null,[W,e("a",C,[M,o(n)])]),e("li",null,[O,e("a",P,[S,o(n)]),j]),e("li",null,[z,e("a",R,[D,o(n)]),Y,e("a",F,[G,H,o(n)])]),e("li",null,[J,e("a",K,[Q,o(n)])]),e("li",null,[U,e("a",X,[Z,$,o(n)])]),e("li",null,[ee,e("a",te,[ne,o(n)])]),e("li",null,[oe,e("a",se,[ae,o(n)])]),e("li",null,[ie,e("a",re,[le,he,de,o(n)])]),e("li",null,[ce,e("a",ue,[pe,o(n)]),_e])]),ge,e("p",null,[me,e("a",fe,[we,o(n)]),be]),ke])}const Te=a(u,[["render",ye],["__file","2021-09-14-nushell_0_37.html.vue"]]);export{Te as default};