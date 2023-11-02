import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   const users = await prisma.user.findMany({
      where: {
         userPreference: {
            emailUpdates: true,
         },
         // EVERY SOME NONE
         writtenPosts: {
            every: {
               createdAt: new Date(),
               title: "Test",
            },
            none: {
               title: "Test",
            },
            some: {
               title: { startsWith: "Test" },
            },
         },
      },
   })
   console.log(users)

   const users2 = await prisma.post.findMany({
      where: {
         author: {
            is: {
               age: 25,
            },
            isNot: {
               age: 27,
            },
         },
      },
   })
}

main()
   .catch((e) => {
      console.log(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
