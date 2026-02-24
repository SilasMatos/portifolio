export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
  status: 'completed' | 'development'
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Kanban',
    description: 'Um quadro Kanban com funcionalidade de arrastar e soltar.',
    tags: ['React', 'Tailwind', 'TypeScript'],
    image: '/assets/projects/kanban.png',
    link: 'https://kanban-project-one-delta.vercel.app/',
    status: 'completed'
  },

  {
    id: 2,
    title: 'Swap Book',
    description: 'Uma plataforma de troca de livros onde usuários podem cadastrar, buscar e trocar livros com outros usuários. ',
    tags: ['React', 'Node js', 'MongoDB',],
    image: '/assets/projects/SWAP.png',
    link: 'https://swap-book.vercel.app/',
    status: 'completed'
  },
  {
    id: 3,
    title: 'Tech Store',
    description: 'Uma loja online de tecnologia com carrinho de compras',
    tags: ['React', 'Node js', 'Redux', 'PostgreSQL',],
    image: '/assets/projects/tech-store.png',
    link: 'https://tech-storie-cli.vercel.app/login',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Monli',
    description: 'Sistema de gerenciamento e controle financeiro pessoal.',
    tags: ['Next.js', 'TypeScript', 'Nest js', 'Tailwind'],
    image: '/assets/projects/monli.jpeg',
    link: '#',
    status: 'development'
  },
  {
    id: 5,
    title: 'Better Auth App',
    description: 'Projeto de autenticação utilizando Elysia, Bun e React com TanStack Router.',
    tags: ['Elysia', 'TypeScript', 'Bun', 'TanStack Router', 'React', 'Drizzle ORM'],
    image: '/assets/projects/betterauth.png',
    link: 'https://github.com/SilasMatos/better-auth-elysia',
    status: 'completed'
  },
  {
    id: 6,
      title: 'Webhook Service',
    description: 'Projeto de geração de webhooks utilizando Fastify e React.',
    tags: ['Fastify', 'TypeScript', 'pnpm', 'Docker', 'React', 'Drizzle ORM', 'PostgreSQL'],
    image: '/assets/projects/monli.jpeg',
    link: 'https://github.com/SilasMatos/node-react-webhooks',
    status: 'completed'
  },
  {
    id: 7,
title: 'Planeat',
    description: 'Aplicativo de planejamento de refeições com integração de API de receitas.',
    tags: ['React', 'TypeScript', 'TanStack', 'Zod', 'Drizzle ORM', 'Elysia', 'Bun'],
    image: '/assets/projects/planeat.png',
  link: 'https://github.com/SilasMatos/planeat',
    status: 'development'

    
  },
  {
    id: 8,
    title: 'Nba stats scraper',
    description: 'Projeto de coleta e analise de dados de estatísticas da NBA utilizando Python e Selenium.',
    tags: [`Python`, 'Selenium'],
    image: '/assets/projects/nba.png',
    link: 'https://github.com/SilasMatos/nba-stats-scraper'
    ,status: 'completed'
  }



]