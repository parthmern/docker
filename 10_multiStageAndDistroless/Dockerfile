# stage 1: build app dependencies and copy source
FROM node:18 AS builder

WORKDIR /app/deps

COPY app/package*.json ./
RUN npm ci --production

# not copying node_modules of local as mentioned in .dockerignore
COPY app/ ./

# stage 2: distroless runtime image
FROM gcr.io/distroless/nodejs:18

WORKDIR /app

# from builder stage copy all files to /app in runtime imag
COPY --from=builder /app/deps /app 

EXPOSE 3000
# npm start will fail because distroless does not include npm or a shell.
CMD ["index.js"]