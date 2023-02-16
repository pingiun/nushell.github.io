import{_ as o,p,q as r,Q as a,t as n,v as t,a1 as e}from"./framework-344bb0e4.js";const c={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=e(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; filter (closure)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>closure</code>: Predicate closure</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command works similar to &#39;where&#39; but allows reading the predicate closure from a variable. On the other hand, the &quot;row condition&quot; syntax is not supported.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Filter items of a list according to a condition</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> filter <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre></div><p>Filter rows of a table according to a condition</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> filter <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span>.a <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre></div><p>Filter rows of a table according to a stored condition</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> cond <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>x<span class="token operator">|</span> <span class="token variable">$x</span>.a <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>a: <span class="token number">1</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>a: <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> filter <span class="token variable">$cond</span>
</code></pre></div>`,13),k={id:"frontmatter-title-for-lazyframe",tabindex:"-1"},h=a("a",{class:"header-anchor",href:"#frontmatter-title-for-lazyframe","aria-hidden":"true"},"#",-1),m={class:"command-title"},f=e(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; filter </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Filter dataframe using an expression</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">6</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> filter <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">4</span><span class="token punctuation">)</span>
</code></pre></div>`,5);function b(s,g){return p(),r("div",null,[a("h1",l,[i,n(),a("code",null,t(s.$frontmatter.title),1),n(" for filters")]),a("div",u,t(s.$frontmatter.filters),1),d,a("h1",k,[h,n(),a("code",null,t(s.$frontmatter.title),1),n(" for lazyframe")]),a("div",m,t(s.$frontmatter.lazyframe),1),f])}const _=o(c,[["render",b],["__file","filter.html.vue"]]);export{_ as default};