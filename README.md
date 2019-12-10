# Next.js catch-all query demo

A demo app to explore if `ctx.asPath` contains `?catchAll=...` param for the `[catchAll].js` page component during SSR, which we're seeing in one internal project.

Currently, I cannot reproduce it in a plain Next.js app but this should be the repro:

1. Start the app via `yarn dev`
2. Visit `localhost:3000/xyz`, see that `asPath` is `/xyz`.
3. Stop the app, run `yarn build` and `yarn start`.
4. Visit `localhost:3000/xyz` again, see that `asPath` is `/xyz?catchAll=xyz`.
