# note-app-backend

## Stack

- Node.js (Express.js)
- Typescript
- MongoDB
- Jest
- Docker

## Main structure of project (src folder)

- `index.ts`: main file to run project.
- `shared`: contains infrastructure layer (init application, router, database model), common library.
- `modules`: contains all feature of application as modules.
- `modules/<module-name>/infra`: contains infrastructure layer of module (router, schema of request).
- `modules/<module-name>/useCases`: layer to implement all use cases of module.
- `modules/<module-name>/repos`: layer to implement certain logic involving the database.
- `modules/<module-name>/domain`: layer to implement business logic of domain

## Setup and Development

```sh
# install dependencies
npm install

# copy, and fill secret key
cp .env.example .env

# start app local
docker-compose up --build
```

Starts the development server and makes your application accessible at
`localhost:8000`. Changes in the application code will be hot-reloaded.
