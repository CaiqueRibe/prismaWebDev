import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   await prisma.user.deleteMany()
   const user = await prisma.user.delete({
      // must be on a unique field
      where: {
         email: "kyle@test.com",
         // name: "Kyle"
         age: {
            gt: 20,
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
