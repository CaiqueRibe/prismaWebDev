import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   const user = await prisma.user.update({
      // can do include or select here
      where: { email: "sallly@test3.com" },
      data: {
         email: "sallly@test3.com",
      },
      //   include: {}, select{},
   })
   console.log(user)
   //    --------------------------------------------------------------------
   const users = await prisma.user.updateMany({
      // cant do include or select here
      where: {
         name: "Sally",
      },
      data: {
         email: "New Sally",
      },
   })
   console.log(users)
   //    --------------------------------------------------------------------
   const users2 = await prisma.user.updateMany({
      // cant do include or select here
      where: {
         email: "Sally", // must be on a unique field
      },
      data: {
         age: {
            increment: 1,
            decrement: 1,
            multiply: 10,
            divide: 10,
         },
      },
   })
   console.log(users2)
}

main()
   .catch((e) => {
      console.log(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
