import{_ as s,o as r,c as n,a as e,t,d as o,e as i}from"./app.954e968d.js";const h={},l={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=o(),p={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; math eval (math expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>math expression</code>: the math expression to evaluate</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Evaluate math in the pipeline</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;10 / 4&#39;</span> <span class="token operator">|</span> math <span class="token builtin class-name">eval</span>
</code></pre></div>`,7);function _(a,u){return r(),n("div",null,[e("h1",l,[d,c,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),m])}var x=s(h,[["render",_],["__file","math_eval.html.vue"]]);export{x as default};