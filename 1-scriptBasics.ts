import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// prisma.user.findFirst()

async function main() {
   const users = await prisma.user.findMany()
   console.log(users)

   // const user = await prisma.user.create({data:{name:"Alice"}})
   //  console.log(user);
}

main()
   .catch((e) => {
      console.log(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
