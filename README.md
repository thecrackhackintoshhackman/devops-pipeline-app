# 🚀 DevOps Pipeline App - TP CI/CD

## 📊 Badges de Statut

### 🔧 Pipeline CI/CD
[![CI Pipeline](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/ci.yaml/badge.svg)](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/ci.yaml)
[![Docker Build](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/docker-publish.yaml/badge.svg)](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/docker-publish.yaml)
[![GitHub Pages](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/deploy-pages.yaml/badge.svg)](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/deploy-pages.yaml)

### 🐳 Docker
[![Docker Pulls](https://img.shields.io/docker/pulls/hackintoshhackman/devops-pipeline-app?label=Docker%20Pulls&logo=docker)](https://hub.docker.com/r/hackintoshhackman/devops-pipeline-app)
[![Docker Image Size](https://img.shields.io/docker/image-size/hackintoshhackman/devops-pipeline-app/latest?label=Image%20Size&logo=docker)](https://hub.docker.com/r/hackintoshhackman/devops-pipeline-app)
[![Docker Version](https://img.shields.io/docker/v/hackintoshhackman/devops-pipeline-app?label=Version&logo=docker)](https://hub.docker.com/r/hackintoshhackmanR/devops-pipeline-app/tags)

### 🌐 Déploiement
[![Website](https://img.shields.io/website?url=https%3A%2F%2FVOTRE_USERNAME.github.io%2Fdevops-pipeline-app%2F&label=GitHub%20Pages&logo=github)](https://thecrackhackintoshhackman.github.io/devops-pipeline-app/)
[![Uptime](https://img.shields.io/uptimerobot/status/m791955526-df6ee08ceff9d47cc5e3c96b?label=Site%20Status)](https://thecrackhackintoshhackman.github.io/devops-pipeline-app/)

### 📝 Métriques
[![Last Commit](https://img.shields.io/github/last-commit/thecrackhackintoshhackman/devops-pipeline-app/main?label=Dernier%20Commit&logo=github)](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/commits/main)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](package.json)

## 📋 Tableau de Bord du Pipeline

| Étape | Status | Badge | Détails |
|-------|--------|-------|---------|
| **Tests** | ![Tests](https://img.shields.io/badge/tests-passing-success) | [![Tests](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/ci.yaml) | Tests unitaires automatisés |
| **Build Docker** | ![Docker Build](https://img.shields.io/badge/build-passing-success) | [![Docker Build](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/docker-publish.yaml/badge.svg)](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/docker-publish.yaml) | Construction d'image Docker |
| **Publication** | ![Docker Publish](https://img.shields.io/badge/published-success) | [![Docker Image](https://img.shields.io/docker/v/hackintoshhackman/devops-pipeline-app?label=Version)](https://hub.docker.com/r/hackintoshhackman/devops-pipeline-app) | Sur Docker Hub |
| **Déploiement** | ![Deployment](https://img.shields.io/badge/deployed-success) | [![GitHub Pages](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/deploy-pages.yaml/badge.svg)](https://github.com/thecrackhackintoshhackman/devops-pipeline-app/actions/workflows/deploy-pages.yaml) | Sur GitHub Pages |

## 🎯 Démo en Ligne

### 🌐 Site Web Statique
**URL :** https://thecrackhackintoshhackman.github.io/devops-pipeline-app/

[![Site Preview](https://img.shields.io/badge/🔗_Voir_le_site-Click_ici-brightgreen)](https://thecrackhackintoshhackman.github.io/devops-pipeline-app/)

### 🐳 Image Docker
```bash
# Télécharger l'image
docker pull hackintoshhackman/devops-pipeline-app:latest

# Lancer un conteneur
docker run -d -p 8080:80 hackintoshhackman/devops-pipeline-app:latest