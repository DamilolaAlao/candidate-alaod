# Wisp Take-Home Assessment

Thank you for taking the time to interview with us! This is a relatively quick assessment and should take up to two hours. Be prepared to talk about your decisions, and what you would add or change if you had more time.

**NOTE:** Make sure the project runs!

## Task
Modify the Create Account form for the Wisp Secure Patient Portal, refactoring and improving the code as you see fit.

### Basic requirements
- Try to match the look & feel (think branding) of our [marketing site](https://hellowisp.com/), in particular the existing [Login page](https://secure.hellowisp.com/account/login).
- Set up styling in your preferred manner (e.g., CSS, CSS in JS, Sass, etc.). The app should be responsive.
- Assume that the API route `/api/users/create` exists, and mock it in your code. The behavior of that endpoint is up to you.
- Include fields for username, email, password and phone number; all fields are required except phone number. 
  - See `User` type below (note that you'll want to include it in your code).
- Create and implement form field validation.
- If the form submit is successful, route to a new "Success!" page. The page itself can be extremely simple, for example, just displaying "Your account is now active." 
- If submit is unsuccessful, display appropriate user-facing error messaging.
- Write one test. Don’t worry about coverage, just give a good indication of your approach to testing.
- Please use [Typescript](https://www.typescriptlang.org/). The `User` model is given below.

```
type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
}
```

### If you have time, consider any or all of the following:
- Accessibility
- More extensive Jest testing
- Setting up Cypress and adding a test suite
- *Improving* the look & feel (taking inspiration from any new user page you've seen in the wild)

## Getting Started

This repo is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
