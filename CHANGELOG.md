# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Não lançado]

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
