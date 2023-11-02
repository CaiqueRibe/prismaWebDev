<img src="image.png" alt="Alt text" width="600">

# Learn Prisma In 60 Minutes

https://www.youtube.com/watch?v=RebA5J-rlwg&ab_channel=WebDevSimplified

Prisma is an incredibly popular ORM and for good reason. It is feature rich, type safe, and built on modern JavaScript concepts. The only downside is it is quite complicated to learn at first which is where this video comes in. I will be teaching you everything you need to know to get up and running with Prisma in just 60 minutes.

**Project** --> Backend APP or service to manage users
**Channel** --> Web Dev Simplified 1,43 mi de inscritos
**Date Created** --> 5 de jul. de 2022

### npm Commands

npm init -y<br>
npm i --save-dev prisma typescript ts-node @types/node nodemon<br>
npx prisma init --datasource-provider postgresql<br>
npx prisma migrate dev --name init<br>
npm i @prisma/client<br>
npx prisma generate<br>

### Observations

-  Prisma
-  mysql
-  node
-  ts

### Components

-  prisma schema
-  db test
-  scripts

### Notes

ctrl + , (open settings)

-  edit with JSON
-  added

```
"[prisma]": {
  "editor.defaultFormatter": "Prisma.prisma",
  "editor.formatOnSave": true
},
```

after creating all the models needs

-  went to on to migrate
-  npx prisma migrate dev (if you run this without especying a name itll ask you for one)
   -  got an error becase of the existing data on the table
      -  went on to run deleteMany()
      -  then ran migrate again

after the migrate

-  moved on from the schema file
   -  went on to JS file
      -  reran generate to correctly populate everything

# TimeStamps

00:00 - Introduction<br>
01:12 - Project Setup<br>
02:35 - Prisma Setup<br>
06:38 - Basic Prisma Model Setup<br>
07:56 - Prisma Migration Basics<br>
09:11 - Prisma Client Basics<br>
14:10 - Datasources and Generators<br>
15:12 - Model Fields<br>
19:19 - Model Relationships<br>
26:16 - Model Attributes<br>
29:55 - Enums<br>
32:40 - Client Create Operations<br>
40:15 - Client Read Operations<br>
45:11 - Advanced Filtering<br>
49:28 - Relationship Filtering<br>
52:07 - Client Update Operations<br>
55:02 - Connect Existing Relationships<br>
57:52 - Client Delete Operations<br>
