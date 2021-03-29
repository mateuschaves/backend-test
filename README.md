# NodeJS API 

# Instalação

```bash
$ yarn install
```


## Tecnologias

:white_check_mark: Express\
:white_check_mark: Express validator\
:white_check_mark: Docker\
:white_check_mark: Docker compose

## Executando

```bash
# development mode
$ yarn dev

# build and start
$ yarn start

# tests
$ yarn test
```

## Executando com o Docker

```bash

# build and start
$ docker-compose up
```

### Design Patten

#### Chain of Responsibility

Utilizando esse design pattern, nós conseguimos isolar cada condição em uma função separada diminuindo o acoplamento e facilitando a manutenção e legibilidade do código.