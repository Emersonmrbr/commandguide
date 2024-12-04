 # Guia Essencial de Comandos Git

 Este guia aborda os comandos mais importantes para o uso do Git, explicando suas funções e como utilizá-los em um projeto.

 # Guia Essencial de Comandos Git

Este guia aborda os comandos mais importantes para o uso do Git, explicando suas funções e como utilizá-los em um projeto.

## Índice
- [Comandos Básicos](#comandos-básicos)
  - [Obter versão instalada do Git](#obter-versão-instalada-do-git)
  - [Obter ajuda sobre comandos do Git](#obter-ajuda-sobre-comandos-do-git)
  - [Listar configurações globais](#listar-configurações-globais)
  - [Configurações iniciais de usuário](#configurações-iniciais-de-usuário)
  - [Definir o VSCode como editor padrão](#definir-o-vscode-como-editor-padrão)
- [Trabalhando com Repositórios](#trabalhando-com-repositórios)
  - [Inicializar um repositório Git](#inicializar-um-repositório-git)
  - [Verificar o estado do repositório](#verificar-o-estado-do-repositório)
- [Gerenciamento de Arquivos e Commits](#gerenciamento-de-arquivos-e-commits)
  - [Adicionar arquivos ao índice](#adicionar-arquivos-ao-índice)
  - [Adicionar todos os arquivos modificados](#adicionar-todos-os-arquivos-modificados)
  - [Criar um commit com uma mensagem descritiva](#criar-um-commit-com-uma-mensagem-descritiva)
- [Histórico de Commits](#histórico-de-commits)
  - [Visualizar histórico de commits](#visualizar-histórico-de-commits)
  - [Filtrar histórico pelo autor](#filtrar-histórico-pelo-autor)
  - [Exibir os últimos N commits](#exibir-os-últimos-n-commits)
  - [Exibir histórico de um arquivo específico](#exibir-histórico-de-um-arquivo-específico)
  - [Visualizar contagem de commits por autor](#visualizar-contagem-de-commits-por-autor)
  - [Exibir histórico em formato gráfico](#exibir-histórico-em-formato-gráfico)
  - [Exibir histórico em uma linha por commit](#exibir-histórico-em-uma-linha-por-commit)
- [Comparando Mudanças](#comparando-mudanças)
  - [Mostrar diferenças entre arquivos ou commits](#mostrar-diferenças-entre-arquivos-ou-commits)
  - [Comparar a área de stage com o último commit](#comparar-a-área-de-stage-com-o-último-commit)
  - [Comparar dois commits específicos](#comparar-dois-commits-específicos)
  - [Comparar duas branches](#comparar-duas-branches)
  - [Exibir apenas os nomes dos arquivos modificados](#exibir-apenas-os-nomes-dos-arquivos-modificados)
- [Navegação e Gerenciamento de Branches](#navegação-e-gerenciamento-de-branches)
  - [Mudar para uma branch específica](#mudar-para-uma-branch-específica)
  - [Criar e mudar para uma nova branch](#criar-e-mudar-para-uma-nova-branch)
  - [Comando alternativo para mudar de branch](#comando-alternativo-para-mudar-de-branch)
  - [Voltar para um estado anterior do repositório](#voltar-para-um-estado-anterior-do-repositório)
  - [Reverter um arquivo para o estado do último commit](#reverter-um-arquivo-para-o-estado-do-último-commit)
- [Trabalhando com Repositórios Remotos](#trabalhando-com-repositórios-remotos)
  - [Vincular um repositório local a um repositório remoto](#vincular-um-repositório-local-a-um-repositório-remoto)
  - [Renomear uma branch](#renomear-uma-branch)
  - [Enviar alterações para o repositório remoto](#enviar-alterações-para-o-repositório-remoto)
  - [Clonar um repositório existente](#clonar-um-repositório-existente)
  - [Atualizar o repositório local com o remoto](#atualizar-o-repositório-local-com-o-remoto)
- [Comando `fork`](#comando-fork)

---

## :dart: Comandos Básicos

### Obter versão instalada do Git


 ## :dart: Comandos Básicos

 ### Obter versão instalada do Git
 ```bash
 git --version
 ```
 Exibe a versão do Git instalada no sistema. Útil para verificar a versão atual e confirmar que o Git está corretamente instalado.

 ### Obter ajuda sobre comandos do Git
 ```bash
 git --help
 ```
 Mostra uma lista de comandos disponíveis no Git e abre o manual de ajuda, detalhando o uso de cada comando. Pode ser seguido de um comando específico, como `git help commit`, para exibir ajuda sobre esse comando específico.

 ### Listar configurações globais
 ```bash
 git config --global --list
 ```
 Exibe todas as configurações globais do Git definidas no sistema, como nome de usuário e email. Esse comando ajuda a confirmar que as configurações globais foram aplicadas corretamente.

 ### Configurações iniciais de usuário
 Define o nome e email que aparecerão em todos os commits feitos a partir desse sistema:
 ```bash
 git config --global user.name "Seu Nome"
 git config --global user.email "seuemail@exemplo.com"
 ```
 Essas configurações são importantes para rastrear a autoria dos commits. Elas serão associadas aos commits sempre que você usar o Git nesse computador.

 ### Definir o VSCode como editor padrão
 ```bash
 git config --global core.editor "code --wait"
 ```
 Define o VSCode como editor padrão para editar mensagens de commit e outros conteúdos quando o Git solicitar uma edição. O argumento `--wait` instrui o Git a aguardar o fechamento do editor antes de prosseguir.

 ## Trabalhando com Repositórios

 ### Inicializar um repositório Git
 Para iniciar o versionamento de um projeto, execute:
 ```bash
 git init
 ```
 Este comando cria um novo repositório Git no diretório atual, configurando um diretório `.git` que armazena todos os arquivos e informações de controle de versão.

 ### Verificar o estado do repositório
 ```bash
 git status
 ```
 Exibe o status dos arquivos no repositório, listando os arquivos que foram modificados, adicionados ou removidos, mas ainda não foram preparados para o commit. Este comando é essencial para acompanhar o que mudou no repositório.

 ## Gerenciamento de Arquivos e Commits

 ### Adicionar arquivos ao índice
 ```bash
 git add <arquivo>
 ```
 Prepara o arquivo especificado para o próximo commit, movendo-o para a área de stage. Somente arquivos no stage serão incluídos no próximo commit.

 ### Adicionar todos os arquivos modificados
 ```bash
 git add .
 ```
 Prepara todos os arquivos novos ou modificados para o próximo commit, sem a necessidade de especificá-los individualmente.

 ### Criar um commit com uma mensagem descritiva
 ```bash
 git commit -m "Mensagem que descreve as alterações"
 ```
 Registra as alterações no repositório, armazenando uma mensagem descritiva para facilitar o rastreamento do histórico. A mensagem deve resumir o propósito e a natureza das mudanças feitas.

 ## Histórico de Commits

 ### Visualizar histórico de commits
 ```bash
 git log
 ```
 Exibe todos os commits realizados no repositório, incluindo o autor, data, mensagem e identificador do commit. Permite revisar o histórico de alterações e entender a evolução do projeto.

 #### Filtrar histórico pelo autor
 ```bash
 git log --author="Nome do Autor"
 ```
 Exibe apenas os commits feitos por um autor específico, facilitando a revisão do trabalho individual dentro do histórico.

 #### Exibir os últimos N commits
 ```bash
 git log -n <N>
 ```
 Limita a exibição aos N commits mais recentes, tornando mais rápido revisar os últimos trabalhos realizados.

 #### Exibir histórico de um arquivo específico
 ```bash
 git log <arquivo>
 ```
 Mostra apenas o histórico de commits que modificaram o arquivo especificado, permitindo acompanhar as mudanças feitas em um arquivo específico ao longo do tempo.

 #### Visualizar contagem de commits por autor
 ```bash
 git shortlog -sn
 ```
 Exibe o número de commits de cada autor no repositório, ajudando a identificar a contribuição individual de cada desenvolvedor.

 #### Exibir histórico em formato gráfico (com branches)
 ```bash
 git log --graph
 ```
 Apresenta o histórico de commits com uma visualização gráfica dos branches e merges, facilitando a compreensão da estrutura do repositório.

 #### Exibir histórico em uma linha por commit
 ```bash
 git log --oneline
 ```
 Resume o histórico de commits em uma linha por commit, mostrando apenas o hash abreviado e a mensagem, útil para uma visão geral rápida.

 ## Comparando Mudanças

 ### Mostrar diferenças entre arquivos ou commits
 ```bash
 git diff
 ```
 Exibe as diferenças entre o estado atual do repositório e as últimas alterações commitadas, comparando o working directory com o último commit.

 #### Comparar a área de stage com o último commit
 ```bash
 git diff --staged
 ```
 Mostra as diferenças entre os arquivos preparados (staged) e o último commit. Útil para revisar as mudanças antes de confirmar um commit.

 #### Comparar dois commits específicos
 ```bash
 git diff <commit1> <commit2>
 ```
 Compara as mudanças entre dois commits específicos, fornecendo um histórico detalhado das alterações feitas.

 #### Comparar duas branches
 ```bash
 git diff <branch1> <branch2>
 ```
 Exibe as diferenças entre duas branches, permitindo avaliar as mudanças antes de mesclar branches.

 #### Exibir apenas os nomes dos arquivos modificados
 ```bash
 git diff --name-only
 ```
 Lista apenas os nomes dos arquivos que foram modificados, útil para uma visão rápida dos arquivos alterados sem detalhes das mudanças.

 ## Navegação e Gerenciamento de Branches

 ### Mudar para uma branch específica
 ```bash
 git checkout <nome-branch>
 ```
 Altera para a branch especificada, permitindo que você trabalhe em diferentes versões do projeto.

 #### Criar e mudar para uma nova branch
 ```bash
 git checkout -b <nome-branch>
 ```
 Cria uma nova branch com o nome fornecido e muda para ela, útil para começar a desenvolver uma nova funcionalidade separada.

 ### Comando alternativo para mudar de branch
 ```bash
 git switch <nome-branch>
 ```
 Alternativa mais simples para mudar de branch, sem suporte para criação de nova branch.

 #### Voltar para um estado anterior do repositório (commit específico)
 ```bash
 git checkout <hash-commit>
 ```
 Muda o repositório para um estado específico do passado (detached HEAD). Útil para revisitar versões anteriores do projeto.

 #### Reverter um arquivo para o estado do último commit
 ```bash
 git checkout -- <nome-arquivo>
 ```
 Desfaz as alterações no arquivo especificado, revertendo-o para o estado do último commit.

 ## Trabalhando com Repositórios Remotos

 ### Vincular um repositório local a um repositório remoto
 ```bash
 git remote add origin git@github.com:usuario/nome_repositorio.git
 ```
 Associa o repositório local a um repositório remoto no GitHub ou outro serviço, permitindo enviar e receber alterações.

 ### Renomear uma branch
 ```bash
 git branch -M <novo-nome>
 ```
 Altera o nome da branch atual. Isso é útil para renomear a branch principal para `main` ou outro nome padrão.

 ### Enviar alterações para o repositório remoto
 ```bash
 git push -u origin <branch>
 ```
 Envia as alterações da branch atual para o repositório remoto, configurando a branch de rastreamento padrão com `-u`.

 ### Clonar um repositório existente
 ```bash
 git clone git@github.com:usuario/nome_repositorio.git
 ```
 Baixa uma cópia completa de um repositório remoto para o seu sistema local, incluindo histórico e branches.

 ### Atualizar o repositório local com as mudanças do repositório remoto
 ```bash
 git pull
 ```
 Atualiza a branch atual com as alterações do repositório remoto. Este comando combina `fetch` (baixar mudanças) e `merge` (integrar mudanças).

 #### Baixar e mesclar atualizações manualmente
 ```bash
 git fetch
 git merge
 ```
 `fetch` baixa as atualizações sem aplicá-las, e `merge` integra as atualizações à branch atual.

 **Quando usar?**
 - Antes de iniciar um novo trabalho em uma branch.
 - Após a clonagem, para sincronizar seu trabalho local.
 - Antes de fazer um commit para evitar conflitos.

 ### Enviar alterações locais para o repositório remoto
 ```bash
 git push origin nome-branch
 ```
 Publica os commits da sua branch local no repositório remoto correspondente, permitindo que outros vejam e integrem suas alterações.

 **Quando usar?**
 - Após concluir uma funcionalidade ou correção.
 - Para compartilhar seu trabalho e colaborar com outros.

 ### Comando `fork`

 O `fork` não é um comando Git propriamente dito, mas sim uma funcionalidade oferecida por plataformas como o GitHub, GitLab e Bitbucket. O `fork` permite criar uma cópia de um repositório de outro usuário na sua conta, mantendo o vínculo com o repositório original.

 **Quando usar?**
 - Quando você deseja contribuir para um projeto de terceiros sem acesso direto de escrita.
 - Para iniciar uma versão personalizada de um projeto, mantendo uma conexão com o repositório original para possíveis futuras sincronizações.

 **Passos comuns após realizar o fork:**
 1. Realize o `fork` no site da plataforma (como GitHub).
 2. Clone o repositório para o seu ambiente local:
 ```bash
 git clone git@github.com:seu-usuario/nome_repositorio.git
 ```
 3. Adicione o repositório original como um repositório remoto com um nome, geralmente `upstream`, para que você possa buscar e integrar as mudanças do repositório original:
 ```bash
 git remote add upstream git@github.com:usuario-original/nome_repositorio.git
 ```
 4. Quando necessário, sincronize as mudanças do repositório original com o seu repositório forkado:
 ```bash
 git fetch upstream
 git merge upstream/main
 ```
 Esse processo mantém seu repositório atualizado com as alterações mais recentes do projeto original.

 ---

 Este guia serve como uma referência rápida para comandos essenciais do Git. Siga-o para configurar, gerenciar e colaborar em projetos de maneira eficiente.
