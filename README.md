# Nextjs with Prisma, MongoDB and Zod

## some tutorial stuff

[mongodb with prisma in Nextjs](https://www.youtube.com/watch?v=szmyVU59-K0)

[mongodb with prisma](https://www.youtube.com/watch?v=b4nxOv91vWI)

[zod user input validation](https://www.youtube.com/watch?v=_K34O0NcKAM)

[zod docs](zod.dev)

## setup

```console
npm i -D prisma
```

add .env to .gitignore

set DATABASE_URL in .env (first create a db in Atlas)

in prisma/schema.prisma:

in datasource db: set provider = "mongodb"

generator client <-- DO WE NEED THIS??

add a model, e.g. User {}

```console
npx prisma db push
```

this will create a collection with the same name as your model

```console
npx prisma studio
```

this wil open on localhost:5555

we can select a collection and crud records (documents)

```console
npm i @prisma/client
npx prisma generate
```

IS PRISMA GENERATE NEEDED??

create /server/db/client.ts

copy code from [prisma docs](https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#solution)

## To do

validate user data with zod
