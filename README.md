# Daniel Soares – Portfólio ✨

Um portfólio pessoal desenvolvido com **Next.js 15** + **TypeScript**, onde apresento meus projetos, stack de tecnologias e trajetória profissional.  
A interface utiliza **Tailwind CSS 3** com componentes do **shadcn/ui** (baseados em Radix UI) e animações do **Framer Motion**, proporcionando uma experiência acessível e fluida.

---

## ✨ Funcionalidades

| Experiência do Usuário | Experiência de Desenvolvimento |
| ---------------------- | ------------------------------ |
| 🔄 **Modo claro/escuro** (next-themes) | **App Router** com diretório `app/` (_Next.js 15_) |
| 📱 **Responsivo** para todos os tamanhos de tela | **Formulários tipados** com React-Hook-Form + Zod |
| 🏷️ Cartões de projeto e blog com filtros e busca | **pnpm + eslint + prettier** configurados |
| 📊 Gráficos animados (Recharts) e carrosséis (Embla) | **Componentes atômicos** e estrutura modular |

> **Próximos passos**  
> - i18n (pt-BR / en) • Integração com CMS • 100/100 no Lighthouse

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilização**: Tailwind CSS 3, class-variance-authority, tailwind-merge
- **UI Kit**: shadcn/ui, Radix UI, ícones Lucide-React
- **Estado & Formulários**: React-Hook-Form, Zod
- **Utilitários**: clsx, date-fns, next-themes, Embla Carousel, Recharts, Framer Motion
- **Ferramentas**: pnpm, ESLint, Prettier, Husky + lint-staged

---

## 🚀 Primeiros Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/daniSoares08/portfolio-daniel-next.git
   cd portfolio-daniel-next
    ```

2. **Instale as dependências**

   ```bash
   pnpm install          # ou npm install / yarn
   ```

3. **Execute em modo desenvolvimento**

   ```bash
   pnpm dev              # http://localhost:3000
   ```

4. **Build e produção**

   ```bash
   pnpm build && pnpm start
   ```

> **Pré-requisitos:** Node 18+ e pnpm (`corepack enable`)

---

## 📂 Estrutura do Projeto (nível alto)

```
app/               # Páginas e layouts usando App Router
 ├─ (marketing)/   # Landing pages
 ├─ dashboard/     # Área protegida para CMS
components/        # Componentes reutilizáveis
hooks/             # Hooks personalizados
lib/               # Utilitários (clientes de API, helpers...)
public/            # Arquivos estáticos (imagens, favicons)
styles/            # CSS global e configurações do Tailwind
```

---

## 🔧 Scripts Úteis

| Script       | Descrição                            |
| ------------ | ------------------------------------ |
| `pnpm dev`   | Inicia o servidor de desenvolvimento |
| `pnpm build` | Gera build de produção               |
| `pnpm start` | Inicia o app com o build pronto      |
| `pnpm lint`  | Verifica e corrige código com ESLint |

---

## 🤝 Contribuindo

1. Faça um fork do repositório e crie sua branch: `git checkout -b feat/nova-funcionalidade`
2. Faça seus commits (garanta que `pnpm lint` passe)
3. Envie o PR 🚀

---

## 👋 Contato

**Daniel Campos Soares** – [LinkedIn](https://www.linkedin.com/in/danielsoares08/) • [campossoares.daniel@gmail.com](mailto:campossoares.daniel@gmail.com)


