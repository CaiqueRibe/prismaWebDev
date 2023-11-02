import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   const user = await prisma.user.update({
      where: {
         email: "kyle@test.com, ",
      },
      data: {
         userPreference: {
            connect: {
               id: "9b036344-88d6-4c5e-9058-69ce702e3038",
            },
            disconnect: true,
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
