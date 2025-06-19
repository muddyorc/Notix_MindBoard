# Notix

Notix é um quadro de anotações digital com post-its virtuais, focado em simplicidade, usabilidade e acessibilidade. Permite criar, editar, mover, excluir e personalizar notas com cores, tudo salvo automaticamente no navegador.

## Funcionalidades Principais

- Criar notas rapidamente (botão ou atalho Ctrl+Enter)
- Editar notas com duplo clique
- Excluir notas com confirmação (modal customizado)
- Mudar a cor de cada nota
- Feedback visual para ações (toast, shake, etc.)
- Persistência automática das notas (localStorage)
- Interface responsiva e acessível (A11y, ARIA, labels)
- Contraste automático do texto para melhor leitura

## Como Usar

1. Digite sua anotação no campo de texto e clique em "Adicionar" ou pressione Ctrl+Enter.
2. Para mudar a cor da nota, escolha uma cor no seletor antes de adicionar.
3. Dê duplo clique em uma nota para editar seu conteúdo.
4. Para excluir, clique no "X" e confirme no modal.

## Acessibilidade

- Todos os botões possuem `aria-label`.
- O campo de texto possui `<label>` oculto para leitores de tela.
- Contraste do texto das notas é ajustado automaticamente.

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/SuaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: SuaFeature'`)
4. Faça um push para a branch (`git push origin feature/SuaFeature`)
5. Abra um Pull Request

## Licença

Este projeto é open source e está sob a licença MIT.
