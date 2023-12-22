# Product Tracker

This is product tracker application built with mern stack.
It has authorization, mail sending when products supplies are empty, product creation with image, pagination and ...
Front-end application is named client back-end is named server.
Swagger documents are server on back-end url/docs

## Install

```git clone <URL_REPO> && cd <URL_REPO>```

Yarn

```yarn```

Npm 

```npm install```

Setup values of the env variables in 

(Front-end) /apps/client/.env

(Back-end) /apps/server/.env

### Run custom scripts
(Examples are only with yarn and nx, with npm use npm run then command)

### Client

#### Development

```yarn dev:client```

#### Production build

```yarn build:client```

### Server

#### Development

```yarn dev:server```

#### Production build

```yarn build:server```

### Examples with nx
(You must have globally installed nx)

```nx client serve```

```nx server serve```

```nx client build```

```nx server build```

Parallel tasks

```nx run-many --targets=serve```

```nx run-many --targets=build```

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```