import{_ as t,z as r,A as o,X as a,C as s,D as n,a6 as p}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-math",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-math","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math sin --degrees</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--degrees</code>: Use degrees instead of radians</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply the sine to π/2</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>math pi<span class="token punctuation">)</span> / <span class="token number">2</span> <span class="token operator">|</span> math sin
</code></pre></div><p>Apply the sine to a list of angles in degrees</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">90</span> <span class="token number">180</span> <span class="token number">270</span> <span class="token number">360</span><span class="token punctuation">]</span> <span class="token operator">|</span> math sin <span class="token parameter variable">-d</span> <span class="token operator">|</span> math round <span class="token parameter variable">--precision</span> <span class="token number">4</span>
</code></pre></div>`,9);function m(e,u){return r(),o("div",null,[a("h1",i,[l,s(),a("code",null,n(e.$frontmatter.title),1),s(" for math")]),a("div",d,n(e.$frontmatter.math),1),h])}const g=t(c,[["render",m],["__file","math_sin.html.vue"]]);export{g as default};