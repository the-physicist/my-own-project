![Logo](./assets/img/repository-cover.png)

# Sextou Flix

Não consegue escolher um filme para assistir? Deixe que eu escolho por você então! Projeto destinado a todes amantes da sétima arte que não conseguem escolher um filme para assistir.

## Instalando

Clone o projeto

```bash
  git clone the-physicist/sextou-flix
```

Entre no diretório do projeto

```bash
  cd sextou-flix
```

Adicione a `chave` da sua API no arquivo `./assets/js/modules/apiService.js`. Troque o `xxxxxxxxxxxxxxx` no exemplo abaixo pela sua chave.

```js
export const API_KEY = `api_key=xxxxxxxxxxxxxxx`;`
```

Execute o arquivo `index.html` em seu navegador favorito usando um servidor (_Live Preview_ do VSCode, por exemplo).

## Aprendizados

### 01/10/2023

- Retomada do Projeto;
- Modularização e reestruturação lógica do projeto;

### 25/03/2022

- Resolução do bug de 'variável somente em modo leitura' e problemas de escopo global;
- Depurar usando a aba 'Redes' da ferramenta DEVTools;

### 22/03/2022

- Criação de um arquivo CHANGELOG;
- Experiência lendo documentação de API;

### 19/03/2022

- Comunicação com API externa;
- Entender melhor sobre o gradient-color;

## Roadmap

- [ ] Temas dark e light
- [ ] Colocar borda e mudar a cor dos botões de gênero.
- [ ] Criar uma logo para o projeto.

# Changelog

Abaixo encontra-se as últimas três atualizações do projeto. Todas as outras alterações significativas deste projeto serão documentadas no [CHANGELOG](https://github.com/the-physicist/my-own-project/blob/main/sextou-flix/CHANGELOG.md).

O formato é baseado no [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [Não publicado]

- Estilização dos botões.

## [0.0.4] - 2023-10-01

### Adicionado

- Tudo agora será documentado em Português.
- Alterada a documentação do projeto.
- Novas regras de negócios para o projeto.
- Reestruturado e modularizado o projeto.

## [0.0.3] - 2022-03-22

### Adicionado

- Adicionado o arquivo CHANGELOG para documentar todas as alterações.
- Adicionada a LICENÇA do projeto.
- Criado o README no GitHub.
- Início da documentação.

## [0.0.2] - 2022-03-21

### Adicionado

- Adicionada a seção 'Filmes Por Gênero'.
- Criado botões para cada gênero.

## [0.0.1] - 2022-03-19

### Adicionado

- Definido um gradiente como background baseado nas cores da Netflix.
- Realizada a primeira comunicação com a API.
- Adicionada a seção 'Filmes Populares'.
- Adicionado os botões principais no layout.

[não publicado]: https://github.com/the-physicist/sextou-flix/compare/v0.0.4...HEAD
[0.0.4]: https://github.com/the-physicist/sextou-flix/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/the-physicist/sextou-flix/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/the-physicist/sextou-flix/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/the-physicist/sextou-flix/releases/tag/v0.0.1

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Marcos Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
