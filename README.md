# todo-app
Todo app with React/Node + GraphQL, Apollo, sequelize, material-ui

CREATE DB: ( have to have a PostgresDB instance running (locally or Docker))
    -> Locally: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
        -> open SQL Shell (pqsql) and login
        -> Usefull shell commands:
            - \dt -> get all the DBs
            - \c <DB_name> -> select a DB
            - TABLE "<NAME" -> view contents of a table

    -> Docker: docker run --name postgres-dev -e POSTGRES_PASSWORD=admin -p 5432:5432 -d  --rm postgres


CREATE Models & Migrations:

-> npx sequelize-cli model:generate --name Todos --attributes content:text,userId:integer,status:string

-> npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string

DB CREATE
npx sequelize-cli db:create / node run db:create

DB MIGRATE:
npx sequelize-cli db:migrate

DB CREATE SEEDS ( npm run db:g:seed creates seeders in the root folder)
npx sequelize-cli seed:generate --name <SEED_NAME>

DB RUN SEEDS
npx sequelize-cli db:seed:all
npx sequelize-cli db:seed --seed <SEED_NAME>.js

