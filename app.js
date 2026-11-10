const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand()}
const $=id=>document.getElementById(id);let history=[];
function show(name){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));$(name==='rules'?'rules-page':name).classList.add('active');document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===name))}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>show(b.dataset.page));
$('rules').onclick=()=>show('rules');$('theme').onclick=()=>document.body.classList.toggle('light');
document.querySelectorAll('[data-stake]').forEach(b=>b.onclick=()=>{let n=b.dataset.stake;$('message').textContent=`You selected Play ${n}. This is a virtual demo stake. The Bingo board will be added next.`;history.unshift(`Selected Play ${n} — ${new Date().toLocaleString()}`);$('history-list').innerHTML=history.map(x=>`<p>${x}</p>`).join('')});
if(tg?.initData){fetch('/api/me',{headers:{'X-Telegram-Init-Data':tg.initData}}).then(r=>r.json()).then(d=>{if(d.balance!==undefined){$('balance').textContent=Number(d.balance).toLocaleString();$('wallet-balance').textContent=Number(d.balance).toLocaleString()+' BR'}}).catch(()=>{})}
