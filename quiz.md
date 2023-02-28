## What is module?

- Module is a type attribute used in script tag on the html, it allows for developers to use import and export statements and code splitting (seperate files), export function, variables and etc

## What is the purpose of a bundler?

- Main use for bundlers is combine the files into one file to serve over the internet, to the client/user and it also minifiys the file or compresses so the load time is shorter too

## Why do we use compilers?

- we use compiliers because (need to confirm with chris), but sometimes a project would need rudy files, mdx files, js files, scss files or sass files, we needed convert these all into one main for example scss or sass files into css

## Why do we use IIFEs? Why we would tell our bundler to wrap modules in IIFEs?

- Why do we use IIFE (immediately invoked function expressions) is because IIFE prevents prevent pollution of the global JS scope.
- Best Thought: we would tell our bundlers to wrap modules in IIFE because it prevents pollution as mentioned above, and it would be immedaltey invoked and it has access to the window object

## Name 3 React-based frameworks and what bundlers they use.

### Next

- Turbopack (alpha)
- Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js 13.
- https://nextjs.org/docs/advanced-features/turbopack

### Gatsby

- Webpack
- https://www.gatsbyjs.com/docs/glossary/webpack/

### Remix

- Remix???
  https://remix.run/docs/en/v1/guides/migrating-react-router-app#replacing-the-bundler-with-remix
