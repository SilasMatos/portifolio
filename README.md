# Portfólio — Silas Matos

Portfólio pessoal desenvolvido com **Next.js**, showcasing minha trajetória como Desenvolvedor Full Stack com ênfase em Front-End.

## Sobre o Projeto

Este portfólio apresenta:

- **Hero Section** — apresentação animada com texto rotativo
- **Sobre Mim** — bio, foto de perfil e timeline interativa de experiências e formação acadêmica
- **Projetos** — galeria com os principais projetos desenvolvidos
- **Tecnologias** — stack técnico com ícones e descrições
- **Contato** — links e formas de entrar em contato

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) — framework React com App Router
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária
- [Framer Motion](https://www.framer.com/motion/) — animações e transições
- [React](https://react.dev/) — biblioteca de UI

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/SilasMatos/portifolio.git
cd portifolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx            # Página principal
│   ├── layout.tsx          # Layout raiz
│   └── _components/        # Seções da página
│       ├── HeroSection.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── MyTechnologies.tsx
│       └── Contacts.tsx
├── components/             # Componentes reutilizáveis
│   ├── Navbar.tsx
│   ├── Particles/
│   ├── RotatingText/
│   └── StarBorder/
└── constants/              # Dados estáticos
    ├── projects-data.ts
    └── technologies-data.ts
```

## Deploy

Projeto hospedado na [Vercel](https://vercel.com/).

---

Desenvolvido por **Silas Matos** © 2026
