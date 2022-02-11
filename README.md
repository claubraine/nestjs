- Caso não tenha
-> npm install -g @nestjs/cli
-> nest new nestjs
--> npm


-> extensões vscode
-> REST Client, eslint , prettier, Visual Studio IntelliCode, Peacock

-> npm run start
-> npm run start:dev
-> http://localhost:3000/


-> nest generate controller test

--------------------------------

-> nest g resource tweets
--> REST API
--> Y

-> criando arquivo api.http
--> GET http://localhost:3000/tweets


-> incluir "include": ["src/"] no arqquivo tsconfig.json

Configurar Docker
-> apagar pasta node_modules e dist

-> docker-compose up

-> http://localhost:8081/

-> cria um novo terminar - executando docker

-> docker-compose exec app sh
-> npm install @nestjs/mongoose mongoose mongodb

-> no arquivo app.modules.ts vão importar "MongooseModule"

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@db/analytics?authSource=admin', {
      useNewUrlParser: true
    }),
    TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})

-> docker-compose exec app sh
-> nest g service tweets/check-new-tweets
-> mudar service -> task (nome do arquivo)

-> nest g service tweets/check-new-tweets
-> npm install @nestjs/schedule

-> Se precisar outra forma de cron
-> docker-compose exec app sh
-> npm install --save-deb @types/cron

-> docker-compose exec app sh
-> npm install cache-manager-redis-store
-> npm install cache-manager
-> npm install @types/cache-manager --save-dev


-----------------------------
REDIS
-> docker-compose exec redis sh
--> redis-cli
---> keys '*'
---> get 'tweet-offset'
---> FLUSHALL           - limpar

------------------------------


-> docker-compose exec app sh
-> nest g resource mail-list
-> REST API
-> Y


-> docker-compose exec app sh
-> npm install bull @nestjs/bull
-> npm install @types/bull --save-dev



<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
