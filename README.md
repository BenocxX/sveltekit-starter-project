# SvelteKit Starter Project

## Developing

```
git clone https://github.com/BenocxX/sveltekit-starter-project/
cd sveltekit-starter-project
npm install
npm run dev
```

## Formatting

Note: files will be **automatically** formatted on commit via Husky pre-commit hook.

```
npm format
```

## Testing

#### Unit tests

Write your unit tests in `src/tests/unit/`

```
npm test:unit
```

#### End to End tests

Write your End to End tests in `src/tests/e2e/`

```
npm test
```

## CI/CD
I've setup a simple Github Action Workflow that Prettyfies the code, runs the unit tests and runs the E2E tests. I used a PAT, you might need to generate one and add it to the repo's secrets.
