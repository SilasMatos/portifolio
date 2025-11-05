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

]