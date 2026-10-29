# Exorium Network — Regulamento do Servidor

Site estático no GitHub Pages, com quatro seções: Visão Geral, Regras Gerais, Carta Magna e Discord.

Carta Magna reúne apenas as 20 infrações do Minecraft, numeradas de 1 a 20 e organizadas por assunto. Cada artigo contém descrição da conduta proibida, exemplo e tabela com Incidência, Punição e Tempo. As seis regras do Discord seguem o mesmo formato. Regras Gerais preserva as 17 orientações sobre princípios, responsabilidade, aplicação de punições, reincidência, denúncias e recursos, além de 5 clients e 12 mods permitidos. Essas orientações não usam numeração de artigo ou tabelas de punição.

A navegação não apresenta subtítulos ou o quadro de comandos. As punições e os prazos são definidos em data.js, tendo como base o regulamento da Rede Square, com o Jail acrescentado como etapa entre o silenciamento e o banimento. As tabelas têm duas colunas, Incidência e Punição, e a punição já traz o tempo na frase: “Jail de 30 minutos”, “Jail de 2 horas”, “Silenciamento de 1 hora”, “Banimento de 7 dias”, “Banimento permanente”. A primeira e a segunda reincidências após o Jail aumentam sua duração em 30 minutos (Jails iniciais de até 6 horas) ou 1 hora (Jails iniciais superiores a 6 horas). A terceira reincidência gera banimento por 7, 15 ou 30 dias, conforme a infração. Nova ocorrência após banimento temporário gera banimento permanente. O Discord usa restrições de comunicação e banimentos próprios. Exemplos são ilustrativos.

Os identificadores dos artigos e os links das categorias anteriores continuam funcionando. A numeração visível acompanha a ordem dos assuntos. Há busca por texto, artigos, exemplos e penalidades, expansão de artigos e navegação interna por assunto.

## Arquivos
- index.html: estrutura, navegação e links externos.
- data.js: regras, exemplos, listas e penalidades originais.
- app.js: apresentação, busca, rotas e conversão de penalidades para tabelas.
- style.css: aparência e responsividade.
- regulamento.html: regulamento completo para leitura sem JavaScript. **Gerado** por gerar-regulamento.js; não editar à mão.
- gerar-regulamento.js: gera regulamento.html a partir de data.js.
- banner.webp e logo.webp: imagens fornecidas para o servidor.

Publicação: branch main, pasta raiz, GitHub Pages. Sem compilação ou dependências externas.

## Visual

A aparência acompanha a loja (exoriumnetwork.com.br): mesmos tokens de cor, as
fontes Kanit e Geist, painéis de vidro com desfoque e a arte do servidor ao
fundo. A camada de alinhamento fica no fim de `style.css`, depois das regras
originais, e não altera a estrutura.

## Punições

As tabelas usam **Jail** em vez de “Prisão”, com o tempo na própria frase. O
comando no servidor continua sendo `/jail`.

| Antes | Agora |
|---|---|
| `Prisão` + coluna `Tempo` com `30 minutos` | `Jail de 30 minutos` |
| `Silenciamento` + `1 hora` | `Silenciamento de 1 hora` |
| `Banimento` + `7 dias` | `Banimento de 7 dias` |
| `Banimento` + `Permanente` | `Banimento permanente` |

A fonte dos tempos continua em `data.js`. Para mudar uma punição, altere os
argumentos de `prisonRows`, `communicationRows`, `banRows` ou `discordRows` — a
frase é montada sozinha por `jailLabel` e `durationLabel`.

## Base das punições

Os prazos vêm do regulamento da Rede Square. O que a Exorium acrescenta é o
**Jail** entre o silenciamento e o banimento, em vez de pular direto para o ban:

```
Silenciamento  →  Jail  →  Jail (dobro)  →  Banimento
```

Infrações graves (racismo, golpe, hack, negar ScreenShare, divulgar IP de outro
servidor, compartilhar dado pessoal) mantêm **banimento direto**, sem Jail.

Onde a Rede Square não especificou prazo — criação de drama, uso indevido do
sistema de ajuda, free-kill, autoclick acima de 15 CPS — a Exorium aplica Jail.

Artigos acrescentados a partir da base: Chatfake, Respeito à equipe, Criação de
drama, Uso indevido do sistema de ajuda, Autoclick e limite de CPS, Free-kill,
Recusa de ScreenShare e Uso de VPN.

## Gerar o regulamento estático

`regulamento.html` é a versão sem JavaScript e **não deve ser editada à mão**.
Depois de alterar `data.js`, rode:

```
node gerar-regulamento.js
```

O script lê `data.js` e reescreve `regulamento.html` inteiro, então os dois não
saem de sincronia.
