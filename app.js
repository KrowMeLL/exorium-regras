const $ = selector => document.querySelector(selector);
const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const norm = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const icons = {
  inicio:'<path d="m3 10 9-7 9 7v10H3zM9 20v-7h6v7"/>',
  gerais:'<path d="M5 3h14v18H5zM8 7h8M8 11h8M8 15h5"/>',
  'carta-magna':'<path d="M12 5C8 2 4 3 2 4v16c3-2 7-1 10 1 3-2 7-3 10-1V4c-2-1-6-2-10 1v16M5 8h4M5 12h4M15 8h4M15 12h4"/>',
  discord:'<path d="M5 5h14l3 13-6 2-2-3h-4l-2 3-6-2zM8 11h.01M16 11h.01"/>'
};
const navItems = [['inicio','Visão Geral'],['gerais','Regras Gerais'],['carta-magna','Carta Magna'],['discord','Discord']];
const icon = id => `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[id]}</svg>`;
$('#nav').innerHTML=navItems.map(([id,label])=>`<a href="#${id}" data-page="${id}">${icon(id)}<span>${label}</span></a>`).join('');

function home(){
  return `<section class="hero"><div class="hero-copy"><h1>Regulamento<br>do Servidor</h1></div><img class="hero-mark" src="logo.webp" width="220" height="240" alt="Logo da Exorium Network"></section><div class="section-head"><h2>Acesso rápido</h2></div><div class="card-grid">${navItems.slice(1).map(([id,label])=>`<a class="category-card" href="#${id}"><span class="card-icon">${icon(id)}</span><h3>${label}</h3><span class="chevron" aria-hidden="true">↗</span></a>`).join('')}</div>`;
}

function modsMarkup(){
  return `<div class="allowed-grid" id="mods-permitidos"><section class="allowed-panel"><h2>Clients Permitidos</h2><ul class="allowed-list">${allowedClients.map(name=>`<li>${esc(name)}</li>`).join('')}</ul></section><section class="allowed-panel"><h2>Mods Permitidos</h2><ul class="allowed-list">${allowedMods.map(name=>`<li>${esc(name)}${name==='Litematica'?'<strong class="restriction">Printer não é permitido.</strong>':''}</li>`).join('')}</ul></section></div><div class="callout">Mesmo nos clients e mods permitidos, continuam proibidos cheats, automações não autorizadas e recursos que ofereçam vantagens vedadas pelo regulamento.</div>`;
}

function policyMarkup(rule,open=false){
  const note=penaltyNotes[rule[0]];
  return `<details class="rule policy-rule" id="art-${rule[0]}"${open?' open':''}><summary><span class="rule-title">${esc(rule[1])}</span></summary><div class="rule-body">${rule.slice(2).map(paragraph=>`<p>${esc(paragraph)}</p>`).join('')}${note?`<p class="table-note">${esc(readableText(note))}</p>`:''}<a class="rule-anchor" href="#art-${rule[0]}">Link para esta orientação</a></div></details>`;
}

function generalPage(article,expandAll=false){
  const labels={gerais:'Princípios e responsabilidades',punicoes:'Aplicação das punições',recursos:'Denúncias, recursos e disposições gerais'};
  return `<div class="page-intro"><h1>Regras Gerais</h1></div><a class="text-link" href="#carta-magna">Consultar infrações e punições <span aria-hidden="true">↗</span></a><div class="toolbar"><button class="text-button" id="expand">Expandir todos</button></div>${policyChapters.map(chapter=>`<section class="article-group" id="grupo-${chapter.id}"><div class="group-heading"><h2>${labels[chapter.id]}</h2></div>${chapter.rules.map(rule=>policyMarkup(rule,expandAll||String(rule[0])===String(article||1))).join('')}</section>`).join('')}<div class="section-head"><h2>Mods e clients permitidos</h2></div>${modsMarkup()}`;
}

// Mantém os prazos da tabela original, separando nome da penalidade e duração.
function splitPenalty(value){
  const match=value.match(/^\/(warn|mute|jail|ban)(?:\s+(.+))?$/);
  if(match){
    const names={warn:'Advertência',mute:'Silenciamento',jail:'Prisão',ban:'Banimento'};
    const duration=match[1]==='warn'?'Sem duração de bloqueio':(match[2]||'Definido pela administração');
    return [names[match[1]],duration.replace(/(\d+)h\b/g,'$1 horas').replace(/(\d+) min\b/g,'$1 minutos').replace(/^1 horas$/,'1 hora').replace(/^permanente$/,'Permanente')];
  }
  if(value==='Prisão ampliada')return ['Prisão ampliada','Definido pela administração'];
  if(value==='Conforme gravidade')return ['Conforme gravidade','Definido pela administração'];
  if(value==='Prorrogação ou /ban permanente')return ['Prorrogação do banimento ou banimento permanente','Prorrogação a definir ou permanente'];
  return [readableText(value),'Não especificado no regulamento'];
}

function prisonProgression(start=1){
  const rows=[];
  if(start<=1)rows.push(['1ª reincidência após a primeira prisão','Prisão ampliada','Definido pela administração']);
  if(start<=2)rows.push(['2ª reincidência após a primeira prisão','Prisão novamente ampliada','Definido pela administração']);
  rows.push(['3ª reincidência após a primeira prisão','Banimento','Definido pela administração']);
  return rows;
}

function penaltySections(rule){
  const id=rule[0];
  if(String(id).startsWith('d'))return [{rows:[['Conforme gravidade e reincidência','Advertência, restrição de comunicação, expulsão ou banimento','Sem prazo fixo; informado pela equipe']]}];
  const refs=rulePenalties[id];
  if(!refs)return [{rows:articlePolicyRows[id]||[['Não se aplica','Artigo sem punição autônoma','Não se aplica']]}];
  if(id===24)return [{title:'Uso de cheats ou ferramentas não autorizadas',rows:[['Primeira ocorrência',...splitPenalty(penaltyGroups[2].rows[0][1])],['Reincidência',...splitPenalty(penaltyGroups[2].rows[1][1])]]}];
  return refs.map(([groupIndex,rowIndex])=>{
    const source=penaltyGroups[groupIndex].rows[rowIndex];
    const rows=[['Primeira ocorrência',...splitPenalty(source[1])]];
    if(source[2]){
      const incidence=groupIndex===1||source[1].startsWith('/jail')?'1ª reincidência após a primeira prisão':'Repetição na mesma categoria';
      rows.push([incidence,...splitPenalty(source[2])]);
    }
    if(groupIndex===0&&rowIndex<4){
      rows.push(['Nova ocorrência após o silenciamento','Prisão',rowIndex<2?'1 hora':'2 horas'],...prisonProgression());
    }else if(groupIndex===0&&rowIndex<9){
      rows.push(...prisonProgression());
    }else if(groupIndex===1||(groupIndex===0&&rowIndex===9)){
      rows.push(...prisonProgression(2));
    }
    return {title:refs.length>1?source[0]:'',rows};
  });
}

function penaltiesMarkup(rule){
  const tables=penaltySections(rule).map(section=>`<div class="penalty-section">${section.title?`<h4>${esc(section.title)}</h4>`:''}<div class="table-wrap" tabindex="0" role="region" aria-label="Punições do artigo ${esc(rule.number)}${section.title?' — '+esc(section.title):''}"><table><thead><tr><th scope="col">Incidência</th><th scope="col">Punição</th><th scope="col">Tempo</th></tr></thead><tbody>${section.rows.map(row=>`<tr>${row.map((value,i)=>`<${i?'td':'th scope="row"'}>${esc(value)}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table></div></div>`).join('');
  const note=String(rule[0]).startsWith('d')?'Os tempos de silenciamento e prisão do Minecraft não se aplicam automaticamente ao Discord.':rule[0]===24?penaltyGroups[2].note:penaltyNotes[rule[0]];
  return `<section class="punishment"><h3>Tabela de Punição</h3>${tables}${note?`<p class="table-note">${esc(readableText(note))}</p>`:''}</section>`;
}

function ruleMarkup(rule,open=false){
  return `<details class="rule" id="art-${rule[0]}"${open?' open':''}><summary><span class="rule-heading"><span class="art">Art. ${esc(rule.number)}</span><span class="article-dash" aria-hidden="true"> – </span><span class="rule-title">${esc(rule[1])}</span></span></summary><div class="rule-body"><section class="article-description"><h3>Descrição</h3>${rule.slice(2).map(paragraph=>`<p>${esc(paragraph)}</p>`).join('')}</section><section class="example"><h3>Exemplo</h3><p>${esc(articleExamples[rule[0]])}</p></section>${penaltiesMarkup(rule)}<a class="rule-anchor" href="#art-${rule[0]}">Link para este artigo</a></div></details>`;
}

function chapterMarkup(chapter,article,expandAll=false){
  return `<section class="article-group" id="grupo-${chapter.id}"><div class="group-heading"><h2>${esc(chapter.label)}</h2><span>Art. ${chapter.rules[0].number}–${chapter.rules[chapter.rules.length-1].number}</span></div>${chapter.rules.map(rule=>ruleMarkup(rule,expandAll||String(rule[0])===String(article))).join('')}</section>`;
}

function cartaPage(article,expandAll=false){
  return `<div class="page-intro"><h1>Carta Magna</h1></div><div class="article-index"><label for="chapter-jump">Ir para assunto</label><select id="chapter-jump"><option value="">Selecione um assunto</option>${minecraftChapters.map(chapter=>`<option value="grupo-${chapter.id}">${esc(chapter.label)}</option>`).join('')}</select><button class="text-button" id="expand">Expandir todos</button></div>${minecraftChapters.map(chapter=>chapterMarkup(chapter,article||minecraftRules[0][0],expandAll)).join('')}`;
}

function discordPage(article,expandAll=false){
  return `<div class="page-intro"><h1>Discord</h1></div><div class="toolbar"><button class="text-button" id="expand">Expandir todos</button></div>${discordChapter.rules.map((rule,i)=>ruleMarkup(rule,expandAll||(article?String(rule[0])===String(article):i===0))).join('')}`;
}

function closeMenu(){
  $('#sidebar').classList.remove('open');
  $('#menu').setAttribute('aria-expanded','false');
}

function render(){
  let hash;
  try{hash=decodeURIComponent(location.hash.slice(1))||'inicio';}catch{hash='inicio';}
  const article=/^art-(?:\d+|d\d+)$/.test(hash)?hash.slice(4):null;
  const articleChapter=chapters.find(chapter=>chapter.rules.some(rule=>String(rule[0])===article));
  const oldChapter=chapters.find(chapter=>chapter.id===hash&&!['gerais','mods','discord'].includes(hash));
  const group=chapters.find(chapter=>'grupo-'+chapter.id===hash);
  let page='inicio';
  if(articleChapter)page=articleChapter.id==='discord'?'discord':policyChapters.includes(articleChapter)?'gerais':'carta-magna';
  else if(hash==='mods'||hash==='mods-permitidos'||hash==='gerais')page='gerais';
  else if(policyChapters.includes(oldChapter)||policyChapters.includes(group))page='gerais';
  else if(oldChapter||group||hash==='carta-magna'||hash==='tabela')page='carta-magna';
  else if(hash==='discord')page='discord';
  const selectedArticle=article||(oldChapter?oldChapter.rules[0][0]:group?group.rules[0][0]:null);
  $('#search').value='';
  $('#content').innerHTML=page==='inicio'?home():page==='gerais'?generalPage(selectedArticle):page==='discord'?discordPage(selectedArticle):cartaPage(selectedArticle);
  $('#crumb').textContent=navItems.find(item=>item[0]===page)[1];
  document.title=`${$('#crumb').textContent} · Exorium Network`;
  document.querySelectorAll('#nav a').forEach(link=>{
    link.classList.toggle('active',link.dataset.page===page);
    if(link.dataset.page===page)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  });
  closeMenu();
  const expand=$('#expand');
  if(expand)expand.onclick=()=>{
    const details=[...document.querySelectorAll('.rule')];
    const open=details.some(item=>!item.open);
    details.forEach(item=>item.open=open);
    expand.textContent=open?'Recolher todos':'Expandir todos';
  };
  const jump=$('#chapter-jump');
  if(jump)jump.onchange=()=>{if(jump.value)location.hash=jump.value;};
  const target=article?'art-'+article:group?'grupo-'+group.id:oldChapter?'grupo-'+oldChapter.id:['mods','mods-permitidos'].includes(hash)?'mods-permitidos':null;
  if(target)requestAnimationFrame(()=>document.getElementById(target)?.scrollIntoView({block:'start'}));else window.scrollTo(0,0);
}

$('#search').addEventListener('input',event=>{
  const raw=event.target.value.trim(),query=norm(raw);
  if(!query){render();$('#search').focus();return;}
  const hits=chapters.flatMap(chapter=>chapter.rules.filter(rule=>{
    const text=rule.number===undefined?rule.join(' '):[rule.join(' '),`Art. ${rule.number}`,`Artigo ${rule.number}`,articleExamples[rule[0]],JSON.stringify(penaltySections(rule))].join(' ');
    return norm(text).includes(query);
  }).map(rule=>({chapter,rule})));
  const modHits=[...allowedClients,...allowedMods].filter(name=>norm(name).includes(query));
  $('#crumb').textContent='Busca';
  document.querySelectorAll('#nav a').forEach(link=>{link.classList.remove('active');link.removeAttribute('aria-current');});
  $('#content').innerHTML=`<section class="search-results"><h1>Resultados para “${esc(raw)}”</h1><p role="status">${hits.length+modHits.length} resultado(s)</p>${hits.map(({chapter,rule})=>`<a class="result" href="#art-${rule[0]}"><small>${chapter.id==='discord'?'Discord':rule.number===undefined?'Regras Gerais':'Carta Magna'}</small><h2>${rule.number===undefined?'':`Art. ${esc(rule.number)} – `}${esc(rule[1])}</h2></a>`).join('')}${modHits.map(name=>`<a class="result" href="#mods-permitidos"><small>Regras Gerais</small><h2>${esc(name)}${name==='Litematica'?' (Printer não é permitido)':''}</h2></a>`).join('')}${hits.length+modHits.length===0?'<div class="empty">Nenhuma regra encontrada. Tente “spam”, “macro” ou “recursos”.</div>':''}</section>`;
});
$('#menu').onclick=()=>{
  const open=$('#sidebar').classList.toggle('open');
  $('#menu').setAttribute('aria-expanded',String(open));
};
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeMenu();
    if(document.activeElement===$('#search')){$('#search').value='';render();}
  }
});
document.addEventListener('click',event=>{
  if(!event.target.closest('#sidebar')&&!event.target.closest('#menu'))closeMenu();
  const link=event.target.closest('a[href^="#"]');
  if(link&&link.getAttribute('href')===location.hash&&link.getAttribute('href')!=='#main'){event.preventDefault();render();}
});
window.addEventListener('hashchange',render);
render();
