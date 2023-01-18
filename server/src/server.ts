import Fastify from "fastify";
import cors from "@fastify/cors" 
import { PrismaClient} from "@prisma/client"

const app = Fastify();
const prisma = new PrismaClient()

app.register(cors)

app.get("/habits", () =>{
    const habits = prisma.habits.findMany()
    
    return habits
})

app.listen({
    port: 7000,
}).then(() => {
    console.log("Server running!");
})