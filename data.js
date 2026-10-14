const chapters = [
{id:'gerais',label:'Regras gerais',eyebrow:'01 · A comunidade',title:'Um bom jogo começa com respeito.',intro:'Estas regras valem para toda a Exorium Network, incluindo o Rankup Candy e os próximos modos de jogo.',rules:[
[1,'Finalidade','Este regulamento estabelece as normas de convivência, comunicação, jogabilidade e segurança da Exorium Network, para preservar a integridade competitiva, a igualdade entre jogadores e o funcionamento adequado dos servidores.'],
[2,'Aplicabilidade','As regras aplicam-se a todos os jogadores, independentemente de cargo, tempo de jogo, classificação, benefícios VIP ou investimentos realizados na Network.','Rankup, Factions e outros modos poderão possuir regras complementares, desde que não contrariem este regulamento.'],
[3,'Responsabilidade pela conta','Cada jogador é responsável pelas atividades realizadas por sua conta, inclusive quando permitir seu acesso por terceiros.','A alegação de que outra pessoa utilizou a conta não implica, por si só, o cancelamento de uma punição, ressalvadas situações comprovadas de comprometimento não autorizado.'],
[4,'Conhecimento das regras','O ingresso e a permanência no servidor pressupõem o cumprimento das regras divulgadas oficialmente. O desconhecimento do regulamento não afasta a aplicação das penalidades.']]},
{id:'punicoes',label:'Punições e reincidência',eyebrow:'02 · Como funciona',title:'Consequências claras. Jogo justo.',intro:'A penalidade depende da natureza da infração e do histórico da mesma categoria. Infrações graves podem resultar em banimento direto.',rules:[
[5,'Advertência · /warn','Aplicada uma única vez por categoria de infração leve, quando expressamente prevista. A repetição da conduta da mesma categoria resulta em silenciamento, sem novo aviso. A advertência fica registrada no histórico disciplinar.'],
[6,'Silenciamento · /mute','Aplicado às infrações de comunicação, inclusive mensagens privadas, placas, livros, nomes de itens e recursos equivalentes. A duração observa a gravidade e os prazos da tabela.','A repetição da mesma infração após o cumprimento do mute resulta em /jail. Usar outras contas ou recursos para contornar o silenciamento constitui infração autônoma.'],
[7,'Prisão · /jail','Aplicada diretamente às infrações de jogabilidade ou após reincidência de condutas punidas com /mute. A primeira reincidência após prisão amplia sua duração; a segunda amplia novamente; a terceira resulta em banimento.','A terceira reincidência corresponde à quarta ocorrência punível com prisão na mesma categoria. Durante a prisão, aplicam-se as restrições de movimentação, interação, mineração e demais atividades implementadas pelo sistema.'],
[8,'Banimento · /ban','Aplicado a infrações graves, tentativas de comprometimento da segurança e reincidências previstas. Pode ser temporário ou permanente, conforme a infração.','O banimento permanente é reservado às condutas de maior gravidade, especialmente quando afetam a segurança, a economia ou a integridade da Network. Contas alternativas usadas para evitar punições podem ser bloqueadas.'],
[29,'Contagem de reincidência','A reincidência exige nova ocorrência comprovada de infração da mesma categoria, após a aplicação de penalidade anterior. Infrações distintas só integram a mesma categoria quando sua equivalência estiver prevista na tabela.','O histórico permanece registrado pelo período de validade estabelecido pela administração. Uma mesma conduta não pode ser contabilizada artificialmente como múltiplas reincidências.'],
[30,'Progressão das punições','Infração leve: /warn único, seguido de /mute na repetição. Nova infração após /mute: /jail. Infrações de jogabilidade sujeitas à prisão: /jail direto.','Após a primeira prisão: primeira reincidência, prisão ampliada; segunda reincidência, prisão novamente ampliada; terceira reincidência, /ban. Infrações graves permitem /ban direto, independentemente do histórico.'],
[31,'Circunstâncias agravantes','Dentro dos limites da tabela, podem justificar agravamento: atuação coordenada, prejuízo coletivo relevante, uso de contas alternativas, ocultação deliberada de provas e obtenção de vantagens significativas.']]},
{id:'comunicacao',label:'Comunicação e convivência',eyebrow:'03 · Chat e convivência',title:'Respeite quem joga com você.',intro:'As regras de comunicação abrangem chat público, mensagens privadas e outros recursos de texto disponíveis na Network.',rules:[
[9,'Spam e flood','É proibido enviar mensagens repetitivas, sequências excessivas de caracteres, símbolos ou conteúdos sem finalidade comunicativa, de modo a prejudicar o funcionamento do chat.'],
[10,'Uso excessivo de letras maiúsculas','É proibida a utilização reiterada de mensagens inteiramente em letras maiúsculas, quando caracterizar perturbação deliberada do chat.'],
[11,'Divulgação e publicidade','É proibida a divulgação não autorizada de endereços de outros servidores, links comerciais, comunidades externas, serviços concorrentes ou convites com finalidade publicitária.','Links maliciosos, fraudulentos ou destinados à obtenção indevida de dados são infrações graves.'],
[12,'Ofensas e provocações','São proibidos ataques pessoais, insultos, provocações reiteradas e comportamentos destinados a constranger ou perturbar outros jogadores.'],
[13,'Discriminação e discurso de ódio','São proibidas manifestações discriminatórias, ameaças, incitação à violência e ataques dirigidos a características pessoais ou grupos protegidos.'],
[14,'Conteúdo impróprio','É proibida a publicação de conteúdos sexualmente explícitos, descrições obscenas, mensagens de assédio sexual ou conteúdos incompatíveis com o ambiente comunitário.'],
[15,'Assédio e perseguição','É proibido perseguir, intimidar ou constranger reiteradamente jogadores por mensagens públicas, privadas ou outros mecanismos da Network.'],
[16,'Personificação','É proibido apresentar-se falsamente como integrante da equipe, administrador ou representante oficial da Exorium Network.']]},
{id:'jogabilidade',label:'Jogabilidade e economia',eyebrow:'04 · Dentro do jogo',title:'Evolua com mérito.',intro:'Proteja a experiência dos outros jogadores e a economia do servidor. As infrações desta seção podem gerar prisão direta.',rules:[
[17,'Exploração de falhas · bugs','É proibido explorar intencionalmente falhas, erros de programação ou comportamentos não previstos dos sistemas para obter vantagens individuais ou coletivas.','Falhas identificadas devem ser comunicadas à equipe. Exploração para duplicação de itens, moedas ou benefícios econômicos pode resultar em banimento direto.'],
[18,'Automação não autorizada','É proibido utilizar macros, autoclickers, scripts, bots ou mecanismos que automatizem ações para obter vantagens não previstas pelas funcionalidades oficiais.','Sistemas de automação disponibilizados oficialmente pela Network são permitidos, desde que utilizados conforme suas regras.'],
[19,'Construções e estruturas irregulares','É proibido construir ou utilizar estruturas destinadas a causar lag, travamentos, sobrecarga artificial, bloqueio indevido de jogadores ou exploração de mecânicas não autorizadas.'],
[20,'Abuso de mecânicas de jogo','É proibido usar funcionalidades legítimas de maneira deliberadamente abusiva para impedir a jogabilidade de terceiros, obter benefícios indevidos ou contornar limitações do servidor.'],
[21,'Fraudes e negociações','São proibidas práticas fraudulentas para obter bens, moedas, itens, benefícios ou informações de outros jogadores por falsidade, engenharia social ou manipulação indevida dos sistemas.','Negociações fora dos sistemas oficiais, quando não autorizadas pela Network, não têm garantia de restituição de bens ou valores.'],
[22,'Economia e vantagens indevidas','É proibido manipular artificialmente a economia por exploração de falhas, geração irregular de recursos ou transferência de bens obtidos ilicitamente.'],
[23,'Interferência em eventos','É proibido prejudicar deliberadamente eventos oficiais, utilizar recursos não autorizados para obter vantagens ou impedir injustificadamente sua realização.']]},
{id:'graves',label:'Infrações graves',eyebrow:'05 · Segurança da Network',title:'Limites que protegem todos.',intro:'Condutas graves podem resultar em banimento direto. Sua aplicação exige evidências verificáveis.',rules:[
[24,'Programas ilícitos e trapaças','É proibido utilizar clientes modificados, cheats ou ferramentas que proporcionem vantagens competitivas não autorizadas, incluindo recursos de combate, movimentação, mineração, visão ou exploração incompatíveis com as mecânicas permitidas.'],
[25,'Ataques à infraestrutura','É proibido realizar ou tentar realizar ataques de negação de serviço, invasões, exploração de vulnerabilidades, interferência em sistemas ou qualquer ação destinada a comprometer a disponibilidade e a segurança da Network.'],
[26,'Comercialização não autorizada','É proibida a comercialização de contas, moedas, itens, benefícios ou serviços internos por dinheiro real, sem autorização expressa da administração.'],
[27,'Dados pessoais e privacidade','É proibido divulgar dados pessoais de terceiros sem autorização, praticar doxxing, realizar ameaças de exposição ou obter indevidamente informações privadas.'],
[28,'Evasão de punições','É proibido utilizar contas alternativas, identidades falsas, falhas ou recursos técnicos destinados a evitar sanções disciplinares aplicadas à conta principal.']]},
{id:'recursos',label:'Denúncias e recursos',eyebrow:'06 · Atendimento e transparência',title:'Toda situação merece contexto.',intro:'Apresente informações verificáveis à equipe pelos canais oficiais de atendimento da Exorium Network.',rules:[
[32,'Denúncias','Qualquer jogador pode denunciar infrações pelos canais oficiais, preferencialmente com vídeos, capturas de tela, registros de mensagens ou outros elementos verificáveis.','As provas devem identificar a conduta e seu contexto. Denúncias comprovadamente falsas, realizadas de má-fé, podem resultar em punição.'],
[33,'Recursos','O jogador pode solicitar revisão pelos canais oficiais. O pedido deve identificar a punição contestada e apresentar fundamentação ou provas pertinentes.','A análise caberá, preferencialmente, a integrante da equipe não envolvido na aplicação original. O recurso não suspende automaticamente a penalidade.'],
[34,'Atuação da equipe','A equipe deve fundamentar suas decisões nos fatos comprovados, na tabela de penalidades e no histórico disciplinar pertinente.'],
[35,'Restituição de vantagens indevidas','A aplicação de punições não impede a remoção de itens, moedas, progressos, benefícios ou recursos obtidos em decorrência de infrações.'],
[36,'Atualização do regulamento','A administração pode atualizar este regulamento para adequá-lo às necessidades técnicas e operacionais da Network, mediante divulgação oficial.'],
[37,'Vigência','Este regulamento entra em vigor na data de sua publicação nos canais oficiais da Exorium Network.']]}];
const penaltyGroups = [
{title:'Comunicação',note:'Nas quatro primeiras infrações, após o mute, a próxima repetição gera jail pelo dobro do silenciamento, respeitado o mínimo de 1 hora. Depois, aplica-se a progressão das prisões.',heads:['Infração','Primeira ocorrência','Repetição'],rows:[
['Spam e flood','/warn','/mute 30 min'],['Uso abusivo de CAPS','/warn','/mute 15 min'],['Provocações leves','/warn','/mute 1h'],['Linguagem vulgar reiterada','/warn','/mute 1h'],['Ofensas pessoais','/mute 2h','/jail 4h'],['Ofensas graves','/mute 12h','/jail 12h'],['Publicidade não autorizada','/mute 12h','/jail 24h'],['Conteúdo sexual impróprio','/mute 24h','/jail 24h'],['Assédio reiterado','/mute 24h','/jail 48h'],['Discriminação ou ódio','/jail 48h','Prisão ampliada'],['Ameaças graves ou exposição de dados','/ban 30 dias ou permanente','Conforme gravidade']]},
{title:'Jogabilidade',note:'A segunda reincidência amplia novamente a prisão; a terceira resulta em banimento. Quando a tabela não fixa o prazo, sua duração será estabelecida pela administração conforme o regulamento e o histórico.',heads:['Infração','Primeira punição','1ª reincidência'],rows:[
['Perturbação intencional de eventos','/jail 2h','/jail 6h'],['Abuso de mecânicas','/jail 4h','/jail 12h'],['Construções para causar lag','/jail 6h','/jail 18h'],['Macro ou autoclicker não autorizado','/jail 12h','/jail 36h'],['Automação irregular de farms','/jail 12h','/jail 36h'],['Exploração de bugs sem impacto econômico relevante','/jail 24h','/jail 72h'],['Fraude entre jogadores','/jail 24h','/jail 72h'],['Manipulação econômica indevida','/jail 48h','/jail 7 dias'],['Personificação de membro da equipe','/jail 24h','/jail 72h']]},
{title:'Banimento direto',note:'Detecções automatizadas de anticheat devem passar por validação técnica antes da aplicação de penalidades permanentes.',heads:['Infração','Penalidade'],rows:[
['Cheats, X-Ray, KillAura ou Fly não autorizado','/ban 15 dias'],['Reincidência no uso de cheats','/ban permanente'],['Duplicação intencional de itens ou moedas','/ban 30 dias ou permanente'],['Ataques à infraestrutura ou vulnerabilidades críticas','/ban permanente'],['Comercialização irregular por dinheiro real','/ban 30 dias'],['Divulgação maliciosa de dados pessoais','/ban 30 dias ou permanente'],['Malware ou links de roubo de contas','/ban permanente'],['Fraudes graves contra jogadores ou a Network','/ban 30 dias ou permanente'],['Evasão deliberada de banimento','Prorrogação ou /ban permanente']]}];

// Os identificadores dos artigos preservam os links publicados anteriormente.
// A numeração exibida é contínua, conforme a ordem das categorias.
let articleNumber = 0;
chapters.forEach(c => c.rules.forEach(r => { r.number = ++articleNumber; }));
const chapterDescriptions = ['Princípios e responsabilidades.','Advertências, prazos e reincidências.','Chat, respeito e convivência.','Mecânicas, negociações e economia.','Trapaças, privacidade e segurança.','Atendimento, provas e revisão.'];
chapters.forEach((c,i) => { c.description=chapterDescriptions[i]; });
chapters.find(c=>c.id==='comunicacao').label='Chat e convivência';
chapters.find(c=>c.id==='punicoes').label='Punições e reincidências';
const rulePenalties = {
  9:[[0,0]],10:[[0,1]],11:[[0,6],[2,6]],12:[[0,2],[0,4],[0,5]],13:[[0,9],[0,10]],14:[[0,3],[0,7]],15:[[0,8]],16:[[1,8]],
  17:[[1,5],[2,2]],18:[[1,3],[1,4]],19:[[1,2]],20:[[1,1]],21:[[1,6],[2,7]],22:[[1,7],[2,2]],23:[[1,0]],24:[[2,0],[2,1]],25:[[2,3]],26:[[2,4]],27:[[2,5]],28:[[2,8]]
};
const penaltyNotes = {
  9:'Após o mute: /jail de 1 hora. Nas reincidências após prisão, aplica-se a progressão geral.',
  10:'Após o mute: /jail de 1 hora. Nas reincidências após prisão, aplica-se a progressão geral.',
  12:'Para provocações leves, a repetição após o mute gera /jail de 2 horas. Ofensas pessoais e graves seguem os respectivos prazos acima.',
  14:'Para linguagem vulgar reiterada, a repetição após o mute gera /jail de 2 horas.',
  5:'Tipo: advertência (/warn). Aplicação: uma única vez por categoria de infração leve; sem duração de bloqueio.',
  6:'Tipo: silenciamento (/mute). Duração: conforme a infração, de 15 minutos a 24 horas na tabela vigente.',
  7:'Tipo: prisão (/jail). Duração: conforme a infração e a reincidência; consulte os prazos junto a cada artigo.',
  8:'Tipo: banimento (/ban). Duração: 15 dias, 30 dias ou permanente, conforme a infração; casos sem prazo fixado dependem da administração.',
  29:'O prazo de validade do histórico é definido pela administração; este regulamento não fixa um período numérico.',
  30:'A terceira reincidência após a primeira prisão gera /ban. Quando não houver prazo específico, a duração será definida pela administração.',
  31:'O agravamento deve respeitar os limites da tabela; não há acréscimo fixo de tempo para todas as situações.',
  32:'Denúncia falsa de má-fé: sujeita a punição, sem tipo ou duração específicos fixados neste regulamento.'
};
const allowedClients=['Salwyrr Client','Badlion Client','LabyMod','Feather Launcher','Lunar Client'];
const allowedMods=['Optifine','Sodium','Lithium','Indium','Mod Menu','MaLiLib','Litematica','Voxelmap','KronHUD','BetterPvP','Fabric API','OptiFabric'];
const modsChapter={id:'mods',label:'Mods e clients permitidos',eyebrow:'COMPATIBILIDADE · MINECRAFT',title:'Personalize sua experiência.',intro:'Consulte os clients e mods permitidos na Exorium Network.',description:'Clients autorizados e limites de uso.',rules:[]};
const discordChapter={id:'discord',label:'Regras do Discord',eyebrow:'COMUNIDADE · DISCORD',title:'A comunidade continua por aqui.',intro:'Estas regras abrangem os canais de texto, voz, perfis e interações no Discord da Exorium Network.',description:'Convivência nos canais de texto e voz.',rules:[
 ['d1','Respeito e convivência','Não são permitidos insultos, discriminação, discurso de ódio, ameaças, assédio ou perseguição a membros da comunidade.'],
 ['d2','Spam, flood e marcações','Não envie mensagens repetidas, correntes, menções em massa ou marcações insistentes da equipe. Utilize cada canal de acordo com sua finalidade.'],
 ['d3','Publicidade e links','A divulgação de servidores, comunidades, produtos ou serviços depende de autorização da equipe. Links fraudulentos, maliciosos ou destinados ao roubo de contas são proibidos.'],
 ['d4','Conteúdo e privacidade','Não publique conteúdo sexual explícito, violência gráfica ou dados pessoais de terceiros sem autorização. Não exponha conversas privadas para ameaçar ou constranger membros.'],
 ['d5','Canais de voz','Respeite quem participa da conversa. Não utilize gritos, ruídos intencionais, reprodução de áudio excessivo ou outros recursos para perturbar os canais.'],
 ['d6','Identidade, moderação e atendimento','Não se passe por integrante da equipe nem utilize contas alternativas para evitar medidas de moderação. Encaminhe denúncias e pedidos de revisão pelos canais de atendimento, com contexto e provas.']
 ]};
discordChapter.rules.forEach((r,i)=>{r.number='D'+(i+1);});
chapters.push(modsChapter,discordChapter);
const discordPenalty='Medidas aplicáveis: advertência, restrição de comunicação (timeout), expulsão ou banimento, conforme a gravidade e a reincidência. Duração: não há prazo específico definido para o Discord neste regulamento; a equipe deve informar o prazo ao aplicar a medida. Os tempos de /mute e /jail do Minecraft não se aplicam automaticamente ao Discord.';
