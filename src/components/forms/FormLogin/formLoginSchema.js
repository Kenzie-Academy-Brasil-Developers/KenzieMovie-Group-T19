import { z } from "zod"

export const formLoginSchema = z.object({
    email: z.string().min(1, "E-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z.string().min(8, "É necessário pelo menos oito caracteres")
    })