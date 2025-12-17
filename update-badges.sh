#!/bin/bash

# Script pour mettre à jour automatiquement les badges dans README.md
echo "🔄 Mise à jour des badges..."

# Demander les informations utilisateur
read -p "Entrez votre nom d'utilisateur GitHub: " GITHUB_USER
read -p "Entrez votre nom d'utilisateur Docker Hub: " DOCKER_USER

# Créer un backup
cp README.md README.md.backup

# Mettre à jour les badges dans README.md
sed -i "s/VOTRE_USERNAME/$GITHUB_USER/g" README.md
sed -i "s/VOTRE_USERNAME_DOCKER/$DOCKER_USER/g" README.md

echo "✅ Badges mis à jour !"
echo "📊 Vérifiez :"
echo "- GitHub: https://github.com/$GITHUB_USER/devops-pipeline-app"
echo "- Docker Hub: https://hub.docker.com/r/$DOCKER_USER/devops-pipeline-app"