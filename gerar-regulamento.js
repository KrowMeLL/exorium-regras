/* Gera regulamento.html a partir de data.js.
   O regulamento estático é a versão sem JavaScript e precisa espelhar os
   mesmos artigos e punições. Rode `node gerar-regulamento.js` sempre que
   alterar data.js — assim os dois nunca saem de sincronia. */
const fs = require('fs'), vm = require('vm');
const ctx = { console, out: {} };
vm.createContext(ctx);
vm.runInContext(
  fs.readFileSync('data.js', 'utf8') +
  ';out.chapters=chapters;out.policyChapters=policyChapters;out.minecraftChapters=minecraftChapters;' +
  'out.discordChapter=discordChapter;out.sanctions=sanctions;out.articleExamples=articleExamples;' +
  'out.penaltyNotes=penaltyNotes;out.allowedClients=allowedClients;out.allowedMods=allowedMods;' +
  'out.readableText=readableText;', ctx);
const d = ctx.out;

const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function tables(rule) {
  const list = d.sanctions[rule[0]] || [];
  if (!list.length) return '';
  const body = list.map((sec) =>
    `<div class="penalty-section">${sec.title ? `<h4>${esc(sec.title)}</h4>` : ''}` +
    `<div class="table-wrap"><table><thead><tr><th scope="col">Incidência</th><th scope="col">Punição</th></tr></thead><tbody>` +
    sec.rows.map((r) => `<tr><th scope="row">${esc(r[0])}</th><td>${esc(r[1])}</td></tr>`).join('') +
    `</tbody></table></div></div>`).join('');
  const note = d.penaltyNotes[rule[0]];
  return `<section class="punishment"><h3>Tabela de Punição</h3>${body}` +
    (note ? `<p class="table-note">${esc(d.readableText(note))}</p>` : '') + `</section>`;
}

const article = (rule) =>
  `<section class="rule" id="art-${esc(rule[0])}"><h3 class="rule-heading">` +
  `<span class="art">Art. ${esc(rule.number)}</span> – <span class="rule-title">${esc(rule[1])}</span></h3>` +
  `<div class="rule-body"><section class="article-description"><h4>Descrição</h4>` +
  rule.slice(2).map((p) => `<p>${esc(p)}</p>`).join('') + `</section>` +
  (d.articleExamples[rule[0]] ? `<section class="example"><h4>Exemplo</h4><p>${esc(d.articleExamples[rule[0]])}</p></section>` : '') +
  tables(rule) + `</div></section>`;

const policy = (rule) =>
  `<section class="rule policy-rule" id="art-${esc(rule[0])}"><h3 class="rule-title">${esc(rule[1])}</h3>` +
  `<div class="rule-body">${rule.slice(2).map((p) => `<p>${esc(p)}</p>`).join('')}</div></section>`;

const chapterBlock = (c, render) =>
  `<section class="fallback-section" id="${esc(c.id)}"><div class="page-intro"><p class="eyebrow">${esc(c.eyebrow)}</p>` +
  `<h2>${esc(c.title)}</h2><p>${esc(c.intro)}</p></div>${c.rules.map(render).join('')}</section>`;

const lista = (titulo, itens) =>
  `<div class="allowed-panel"><h3>${esc(titulo)}</h3><ul class="allowed-list">` +
  itens.map((i) => `<li>${esc(i)}</li>`).join('') + `</ul></div>`;

const html =
`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">` +
`<meta name="viewport" content="width=device-width,initial-scale=1">` +
`<title>Regulamento completo · Exorium Network</title>` +
`<meta name="description" content="Regulamento completo da Exorium Network em texto, sem JavaScript.">` +
`<link rel="icon" href="logo.webp">` +
`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` +
`<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;700&family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet">` +
`<link rel="stylesheet" href="style.css">` +
`<style>main{max-width:1000px;margin:auto;padding:30px 20px 60px}.fallback-nav{display:flex;flex-wrap:wrap;gap:8px;margin:25px 0}` +
`.fallback-section{margin-top:44px;scroll-margin-top:20px}.rule{border:0;padding:22px 0;border-top:1px solid var(--line)}` +
`.rule-heading{font-size:17px;margin:0 0 14px}.rule-body h4{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ex-candy-soft);margin:18px 0 8px}` +
`.penalty-section h4{color:var(--text);font-size:14px;letter-spacing:0;text-transform:none}` +
`.allowed-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px}` +
`@media(max-width:760px){.allowed-grid{grid-template-columns:1fr}}</style></head><body><main>` +
`<a class="text-link" href="index.html">Voltar ao site</a>` +
`<h1>Regulamento completo</h1>` +
`<p>Versão em texto, para leitura sem JavaScript. O conteúdo é o mesmo do site.</p>` +
`<nav class="fallback-nav" aria-label="Seções do regulamento">` +
[...d.policyChapters, ...d.minecraftChapters, d.discordChapter]
  .map((c) => `<a class="text-link" href="#${esc(c.id)}">${esc(c.label)}</a>`).join(' · ') +
` · <a class="text-link" href="#permitidos">Mods e clients</a></nav>` +
d.policyChapters.map((c) => chapterBlock(c, policy)).join('') +
d.minecraftChapters.map((c) => chapterBlock(c, article)).join('') +
chapterBlock(d.discordChapter, article) +
`<section class="fallback-section" id="permitidos"><div class="page-intro"><p class="eyebrow">Modificações</p>` +
`<h2>Mods e clients permitidos</h2><p>Qualquer recurso fora destas listas depende de autorização da equipe.</p></div>` +
`<div class="allowed-grid">${lista('Clients permitidos', d.allowedClients)}${lista('Mods permitidos', d.allowedMods)}</div></section>` +
`<footer><span>© Exorium Network · Regulamento geral</span><a href="index.html">Voltar ao site</a></footer>` +
`</main></body></html>`;

fs.writeFileSync('regulamento.html', html);
console.log('regulamento.html gerado:', html.length, 'bytes');
