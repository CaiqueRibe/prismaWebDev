import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   //   UNIQUE IDS DEFINED IN SCHEMA (MODEL)
   //    const users = await prisma.user.findUnique({
   //       where: {
   //          email: "kyle@test.com",
   //          age_name:{
   //             age: 25,
   //             name: "Kyle",
   //          }
   //       },
   //     //   include... or, select ...
   //    })
   // --------------------------------------------------------------------
   // FIND ANY PROPERTY
   //    const user = await prisma.user.findFirst({
   //       where: {
   //          name: "Sally",
   //       },
   //    })
   //    console.log(user)
   // --------------------------------------------------------------------
   //    CREATING TWO USERS
   await prisma.user.createMany({
      data: [
         {
            name: "Kyle",
            age: 25,
            email: "kyle@teste123.com",
         },
         {
            name: "Kyle",
            age: 13,
            email: "kyle@teste123.com",
         },
      ],
   })
   // THIS WILL RETURN ALL KYLES
   const users = await prisma.user.findMany({
      where: {
         name: "Kyle",
      },
      //   distinct: ["name"], // only get the first sally
      //   distinct: ["name", "age"], // only get the first sally
      take: 2, // pagination // returns two kyles
      skip: 1, // pagination // returns the second kyle
      orderBy: {
         age: "desc", // or "asc"
      },
   })
   console.log(users)
}

main()
   .catch((e) => {
      console.log(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
