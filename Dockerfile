FROM node:21-alpine AS base

# Setting Up PNPM
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"
RUN npm install --global pnpm
RUN SHELL=bash pnpm setup
RUN source /root/.bashrc

# Create Update Environment
FROM base AS package-filled-alpine
RUN apk add --no-cache libc6-compat
RUN apk update

# Create Installer Stage
FROM package-filled-alpine AS instaler
COPY --chown=nextjs:nodejs /package.json .
COPY --chown=nextjs:nodejs /pnpm-lock.yaml .

RUN pnpm install -P

# Create Final Runner Stage
FROM instaler AS runner
COPY --chown=nextjs:nodejs / .

# Run Build
RUN pnpm run build 

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

WORKDIR /

EXPOSE 3000

CMD pnpm run start