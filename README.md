
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
  
  <p align="center">Events Organiser app. Built from NestJS starter.</p>

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

# re-seed the db then start app
$ npm run start:dev:db:seed

# start existing db container then start app
$ npm run start:dev:db

# start existing db container then start app
$ npm run start:dev:db

# destroy everything :(
$ npm run stop:dev:db:destroy

```

## TODO

- [x] Create simple CRUD endpoints.
- [x] Create Postgres DB and seeder scripts (entirely code defined in this repo).
- [ ] Add Image service + endpoints.
- [ ] Add endpoints and DB table to post messages (i.e. the feed) for an event.
- [ ] Add endpoints for RSVPs for an event.
- [ ] Add accounts + user management + relevant tools.
- [ ] (external) create UI.
