# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Não lançado]

## [0.5.0] - 2025-06-18

### Adicionado
- **Edição de Notas:** Implementada a funcionalidade de editar o conteúdo de uma nota com um duplo clique.
- **Seleção de Cores:** Adicionado um seletor de cores para permitir que o usuário escolha a cor de fundo de novas notas.

### Alterado
- **Refatoração da UI/UX:** Interface completamente redesenhada para um visual mais moderno e amigável, com nova tipografia, paleta de cores e layout responsivo.
- **Refatoração de Código:** O `script.js` foi reestruturado para uma arquitetura modular, melhorando a organização e a manutenibilidade.
- **Renomeação do Projeto:** O nome do projeto foi alterado de "MindBoard" para "Notix" em todos os arquivos relevantes.
- **Persistência de Dados:** A chave do `localStorage` foi atualizada para `notix-notes`, e agora salva o conteúdo e a cor da nota.

## [0.4.0] - 2025-06-17

### Adicionado
- Persistência de dados com localStorage:
    - As notas criadas são salvas automaticamente no navegador.
    - As notas permanecem no quadro mesmo após recarregar a página.
    - Funções `saveNotes()` e `loadNotes()` implementadas em `script.js`.
    - Notas são salvas ao adicionar ou remover e carregadas ao abrir a aplicação.

## [0.3.0] - 2025-06-15

### Adicionado
- Funcionalidade de deletar notas:
    - Adicionado um botão 'X' (`<button class="delete-btn">`) a cada nota criada (`script.js`).
    - Implementada a lógica para que o clique no botão 'X' remova a nota correspondente do quadro (`script.js`).
    - Estilizado o botão de deletar para posicionamento no canto da nota, com visual e efeitos de hover (`style.css`).

## [0.2.0] - 2025-06-15

### Adicionado
- Funcionalidade de criar notas:
    - Interface (`<textarea>`, `<button>`) para entrada de texto no `index.html`.
    - Quadro (`<div id="notes-board">`) para exibição das notas no `index.html`.
    - Lógica JavaScript (`script.js`) para:
        - Capturar o texto do `<textarea>`.
        - Criar um novo elemento `<div>` com a classe `.note`.
        - Adicionar o texto da nota ao novo elemento.
        - Anexar o elemento da nota ao `notes-board`.
        - Limpar o `<textarea>` após a adição da nota.
    - Estilização básica (`style.css`) para a área de entrada, botão, quadro de notas e as próprias notas (fundo amarelo, sombra, etc.).

## [0.1.0] - 2025-06-15

### Adicionado
- Estrutura inicial do projeto com diretórios: `src/`, `docs/`, `docs/evidencias/`.
- Arquivos base do projeto: `.gitignore` (padrão para projetos web), `README.md` (com descrição inicial, funcionalidades e como contribuir), `CHANGELOG.md` (inicial).
