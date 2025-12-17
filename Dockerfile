# Étape 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers de l'application
COPY package*.json ./
COPY index.html ./
COPY style.css ./
COPY app.js ./
COPY tests/ ./tests/

# Installer les dépendances
RUN npm ci --only=production

# Étape 2: Production
FROM nginx:alpine

# Copier les fichiers de l'application
COPY --from=builder /app/index.html /usr/share/nginx/html/
COPY --from=builder /app/style.css /usr/share/nginx/html/
COPY --from=builder /app/app.js /usr/share/nginx/html/

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]