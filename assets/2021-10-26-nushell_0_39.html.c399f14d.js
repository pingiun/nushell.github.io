import{_ as o,z as n,A as r,W as i,X as e,C as a,T as s,a6 as l,Q as h}from"./framework.3d018c9f.js";const d={},c=e("h1",{id:"nushell-0-39",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-39","aria-hidden":"true"},"#"),a(" Nushell 0.39")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.39 of Nu. This release is a bugfix release of 0.38.",-1),f=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),g={href:"https://github.com/nushell/nushell/releases/tag/0.39.0",target:"_blank",rel:"noopener noreferrer"},_={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"cargo install nu",-1),w=l('<p>If you want all the goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s New</h1><ul><li>History file is now removed when the history is cleared (fdncred)</li><li>HTML selector has a regression fixed (lucassmmg)</li><li>Unused dependencies were removed (lucassmmg)</li><li>Updated clippy warnings were fixed (jt)</li></ul><h1 id="engine-q-progress" tabindex="-1"><a class="header-anchor" href="#engine-q-progress" aria-hidden="true">#</a> Engine-q progress</h1><p>You&#39;ll notice that this release is pretty light, only a set of fixes on 0.38. This is because our energy is now largely focused on engine-q. We&#39;re excited to get this in front of you.</p><p>Just to tease a little of what will be possible, this week we added support for processing streams in parallel in engine-q using a new <code>par-each</code> command. We&#39;ll talk more about this as it develops.</p><h1 id="looking-forward" tabindex="-1"><a class="header-anchor" href="#looking-forward" aria-hidden="true">#</a> Looking forward</h1>',8),b={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"};function y(x,k){const t=h("ExternalLinkIcon");return n(),r("div",null,[c,u,p,i(" more "),f,e("p",null,[a("Nu 0.39 is available as "),e("a",g,[a("pre-built binaries"),s(t)]),a(" or from "),e("a",_,[a("crates.io"),s(t)]),a(". If you have Rust installed you can install it using "),m,a(".")]),w,e("p",null,[a("We're excited about what the new engine changes will bring in terms of performance, correctness, and new capabilities. If you're interested in helping out, come "),e("a",b,[a("join us on the discord"),s(t)]),a("!")])])}const v=o(d,[["render",y],["__file","2021-10-26-nushell_0_39.html.vue"]]);export{v as default};