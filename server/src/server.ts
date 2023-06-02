import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // Todas URLs de frond-end poderão acessar o back-end
  // origin: ['http://localhost:3000'], // Adicionar as URLs de desenvolvimento e produção
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('🚀 HTTP server running on http://localhost:3333'))
