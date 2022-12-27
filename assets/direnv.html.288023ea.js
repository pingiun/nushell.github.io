import{_ as s,z as t,A as o,X as e,C as n,T as r,a6 as i,Q as l}from"./framework.3d018c9f.js";const c={},p=e("h1",{id:"direnv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#direnv","aria-hidden":"true"},"#"),n(" Direnv")],-1),d={href:"https://direnv.net",target:"_blank",rel:"noopener noreferrer"},u=i(`<hr><h3 id="configuring-direnv" tabindex="-1"><a class="header-anchor" href="#configuring-direnv" aria-hidden="true">#</a> Configuring direnv</h3><p>To make direnv work with nushell the way it does with other shells requires us to use the hooks functionality in nushell:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
  hooks: <span class="token punctuation">{</span>
    pre_prompt: <span class="token punctuation">[</span><span class="token punctuation">{</span>
      code: <span class="token string">&quot;
        let direnv = (direnv export json | from json)
        let direnv = if (<span class="token variable">$direnv</span> | length) == 1 { <span class="token variable">$direnv</span> } else { {} }
        <span class="token variable">$direnv</span> | load-env
      &quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>With that configuration in place, direnv should now work with nushell.</p>`,5);function h(v,k){const a=l("ExternalLinkIcon");return t(),o("div",null,[p,e("p",null,[n("Many people use "),e("a",d,[n("direnv"),r(a)]),n(" to load an environment upon entering a directory as well as unloading it when exiting the directory. Configuring direnv to work with nushell requires nushell version 0.66 or later.")]),u])}const f=s(c,[["render",h],["__file","direnv.html.vue"]]);export{f as default};