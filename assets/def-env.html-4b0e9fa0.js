import{_ as s,p as o,q as r,Q as e,t,v as n,a1 as c}from"./framework-344bb0e4.js";const i={},d={id:"frontmatter-title-for-core",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; def-env (def_name) (params) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li><li><code>block</code>: body of the definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set environment variable by call a custom command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def-env foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env BAR <span class="token operator">=</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> foo<span class="token punctuation">;</span> <span class="token variable">$env</span>.BAR
</code></pre></div>`,9);function u(a,m){return o(),r("div",null,[e("h1",d,[l,t(),e("code",null,n(a.$frontmatter.title),1),t(" for core")]),e("div",p,n(a.$frontmatter.core),1),h])}const _=s(i,[["render",u],["__file","def-env.html.vue"]]);export{_ as default};