This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
front-end
├─ 📁.genaiscript
├─ 📁.github
│  ├─ 📁ISSUE_TEMPLATE
│  │  └─ 📄작업-등록-템플릿.md
│  ├─ 📁workflows
│  │  ├─ 📄git_deploy_otherBranch.yml
│  │  └─ 📄main.yml
│  └─ 📄pull_request_template.md
├─ 📁.next
├─ 📁.vscode
│  ├─ 📄settings.json
│  └─ 📄tasks.json
├─ 📁public
│  ├─ 📄next.svg
│  └─ 📄vercel.svg
├─ 📁src
│  ├─ 📁app
│  │  ├─ 📁(after-login)
│  │  │  ├─ 📁(quiz)
│  │  │  │  ├─ 📁main
│  │  │  │  │  └─ 📄page.tsx
│  │  │  │  ├─ 📁question-detail
│  │  │  │  │  ├─ 📁[...id]
│  │  │  │  │  │  └─ 📄page.tsx
│  │  │  │  │  └─ 📁_components
│  │  │  │  │     └─ 📄RatingRadio.tsx
│  │  │  │  ├─ 📁questions
│  │  │  │  │  ├─ 📁_components
│  │  │  │  │  │  ├─ 📄CustomPagination.tsx
│  │  │  │  │  │  ├─ 📄Filter.tsx
│  │  │  │  │  │  └─ 📄StarsRating.tsx
│  │  │  │  │  ├─ 📄loading.tsx
│  │  │  │  │  └─ 📄page.tsx
│  │  │  │  ├─ 📁quiz
│  │  │  │  │  └─ 📄page.tsx
│  │  │  │  └─ 📄layout.tsx
│  │  │  ├─ 📁test
│  │  │  │  ├─ 📁components
│  │  │  │  │  └─ 📄client-comp.tsx
│  │  │  │  ├─ 📄opengraph-image.tsx
│  │  │  │  └─ 📄page.tsx
│  │  │  └─ 📄layout.tsx
│  │  ├─ 📁api
│  │  │  ├─ 📁exam
│  │  │  │  └─ 📄route.ts
│  │  │  ├─ 📁mock
│  │  │  │  ├─ 📁exam
│  │  │  │  │  └─ 📄route.ts
│  │  │  │  └─ 📄route.ts
│  │  │  └─ 📁questions
│  │  │     ├─ 📁[...page]
│  │  │     │  └─ 📄route.ts
│  │  │     └─ 📄route.ts
│  │  ├─ 📄favicon.ico
│  │  ├─ 📄globals.css
│  │  ├─ 📄instrumentation.ts
│  │  ├─ 📄layout.tsx
│  │  └─ 📄page.tsx
│  ├─ 📁asset
│  │  └─ 📁icon
│  │     ├─ 📁icons
│  │     │  └─ 📄ic-star.svg
│  │     ├─ 📄icons.tsx
│  │     └─ 📄index.tsx
│  ├─ 📁components
│  │  ├─ 📁common
│  │  │  ├─ 📁Atoms
│  │  │  │  ├─ 📁buttons
│  │  │  │  │  └─ 📄index.tsx
│  │  │  │  └─ 📁icons
│  │  │  │     └─ 📄index.tsx
│  │  │  ├─ 📁Monocles
│  │  │  │  └─ 📄SearchInput.tsx
│  │  │  └─ 📁Organisms
│  │  ├─ 📁navigations
│  │  │  ├─ 📁components
│  │  │  │  ├─ 📄NavMenu.tsx
│  │  │  │  └─ 📄NavPopOver.tsx
│  │  │  └─ 📄Navigation.tsx
│  │  └─ 📁ui
│  │     ├─ 📄accordion.tsx
│  │     ├─ 📄button.tsx
│  │     ├─ 📄checkbox.tsx
│  │     ├─ 📄input.tsx
│  │     ├─ 📄label.tsx
│  │     ├─ 📄pagination.tsx
│  │     ├─ 📄popover.tsx
│  │     ├─ 📄radio-group.tsx
│  │     └─ 📄tooltip.tsx
│  ├─ 📁hooks
│  │  └─ 📄usePreventNavigation.tsx
│  ├─ 📁lib
│  │  ├─ 📁api
│  │  │  ├─ 📁interceptors
│  │  │  │  ├─ 📄auth.ts
│  │  │  │  └─ 📄base.ts
│  │  │  ├─ 📄client.ts
│  │  │  ├─ 📄instances.ts
│  │  │  └─ 📄types.ts
│  │  └─ 📄utils.ts
│  ├─ 📁providers
│  │  └─ 📄tanstack-query.tsx
│  ├─ 📁service
│  │  └─ 📄api.ts
│  └─ 📄middleware.ts
├─ 📄.eslintrc.json
├─ 📄.gitignore
├─ 📄.prettierrc
├─ 📄components.json
├─ 📄next.config.mjs
├─ 📄package.json
├─ 📄pnpm-lock.yaml
├─ 📄postcss.config.js
├─ 📄README.md
├─ 📄tailwind.config.ts
└─ 📄tsconfig.json
```