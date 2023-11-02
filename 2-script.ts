import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
   // const user = await prisma.user.create({ data: { name: "Fernando" } })
   // console.log(user)
   // const user = await prisma.user.delete({ where: { id: 1 } })
   // console.log(user)
   // const users = await prisma.user.findMany()
   // console.log(users)
   // await prisma.user.deleteMany()

   // const user = await prisma.user.create({
   // const users = await prisma.user.createMany({
   //    data: [
   //       {
   //          name: "Kyle",
   //          email: "kyle@test.com",
   //          age: 25,
   //       },
   //       {
   //          name: "Sally",
   //          email: "Sally@test.com",
   //          age: 32,
   //          // userPreference: {
   //          //    create: {
   //          //       emailUpdates: true,
   //          //    },
   //          // },
   //       },
   //    ],
   //    // include: {
   //    // userPreference: true,
   //    // },
   //    // select: { // select cant be usued inside createMany
   //    //    // do a select or a include but not both
   //    //    name: true,
   //    //    // userPreference: true,
   //    //    userPreference: { select: { id: true } },
   //    // },
   // })
   // console.log(user)

   const user = await prisma.user.findUnique({
      // where: { email: "kyle@test.com" },
      where: {
         age_name: {
            age: 25,
            name: "Kyle",
         },
      },
   })
   console.log(user)
}

main()
   .catch((e) => {
      console.log(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
