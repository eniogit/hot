FROM node:22.14.0

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install --global corepack@latest

RUN corepack enable pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

CMD [ "pnpm", "start" ]