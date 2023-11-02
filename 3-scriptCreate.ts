import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient({ log: ["query"] })

async function main() {
   //    await prisma.user.deleteMany()
   //    const user = await prisma.user.create({
   //       data: {
   //          name: "Kyle",
   //          email: "Kyle@test.com",
   //          age: 27,
   //          userPrefrence: {
   //             create: {
   //                emailUpdates: true,
   //             },
   //          },
   //       },
   //       include: {
   //          userPrefrence: true,
   //       },
   //    })
   //    console.log(user));
   // }
   // --------------------------------------------------------------------
   //    await prisma.user.deleteMany()
   //    const user = await prisma.user.create({
   //       data: {
   //          name: "Kyle",
   //          email: "Kyle@test.com",
   //          age: 27,
   //          userPrefrence: {
   //             create: {
   //                emailUpdates: true,
   //             },
   //          },
   //       },
   //       select: {
   //          name: true,
   //          // userPreference: true,
   //          userPreference: { select: { id: true } },
   //       },
   //    })
   //    console.log(user)
   //    --------------------------------------------------------------------
   //    const users = await prisma.user.createMany({
   //       data: [
   //          {
   //             name: "Kyle",
   //             email: "kyle@test.com",
   //             age: 25,
   //          },
   //          {
   //             name: "Sally",
   //             email: "Sally@test.com",
   //             age: 32,
   //             userPreference: {
   //                create: {
   //                   emailUpdates: true,
   //                },
   //             },
   //          },
   //       ],
   //    })
}

main()
   .catch((e) => {
      console.log(e.message)
   })
   .finally(async () => {
      await prisma.$disconnect()
   })
