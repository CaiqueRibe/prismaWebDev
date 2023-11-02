import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   const user = await prisma.user.findMany({
      where: {
         name: {
            equals: "Sally",
            not: "Sally",
            in: ["Sally", "Kyle"],
            notIn: ["Sally", "Kyle"],
         },
         age: {
            lt: 20,
            gt: 20,
            gte: 20,
         },
         email: {
            contains: "test",
            endsWith: ".com",
            startsWith: "kyle",
         },
         AND: [{ name: "Sally" }, { age: 32 }],
         OR: [{ name: "Sally" }, { age: 25 }],
         NOT: [{ name: "Sally" }, { age: 25 }],
      },
   })
   console.log(user.length)
}

main()
   .catch((e) => {
      console.log(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
