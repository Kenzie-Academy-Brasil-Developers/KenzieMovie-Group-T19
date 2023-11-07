import { z } from "zod"

export const createAvaliationModalSchema = z.object({
    score: z.string().min(1, "Este campo é obrigatório."),
    description: z.string().min(1, "Este campo é obrigatório.")
});