# Práctica CI/CD: Despliegue Automático con GitHub Actions y Surge.sh

Este repositorio contiene una página web estática configurada con integración y despliegue continuo (CI/CD) utilizando **GitHub Actions** y **Surge.sh**.

## 🚀 Enlace del Despliegue en Vivo
- **URL en Surge**: [https://isak-practica-surge.surge.sh](https://isak-practica-surge.surge.sh)

---

## 🛠️ Tecnologías Utilizadas
- **HTML5 & CSS3**: Diseño moderno, responsive y accesible con estética glassmórfica y dark mode.
- **JavaScript (Vanilla)**: Interacciones, copiado de enlace y sincronización.
- **Surge.sh**: Plataforma CDN para publicación y hosting estático rápido.
- **GitHub Actions**: Pipeline automatizado que ejecuta el despliegue ante cada `push` a la rama `main`.

---

## ⚙️ Configuración del Pipeline CI/CD

El workflow está definido en [`.github/workflows/main.yml`](.github/workflows/main.yml):

```yaml
name: Deploy to Surge

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Deploy to Surge
        uses: dswistowski/surge-sh-action@v1
        with:
          domain: 'isak-practica-surge.surge.sh'
          project: './'
          login: ${{ secrets.SURGE_LOGIN }}
          token: ${{ secrets.SURGE_TOKEN }}
```

### 🔐 Secretos en GitHub (Repository Secrets)
Para proteger las credenciales de Surge, se configuraron en **Settings > Secrets and variables > Actions**:
- `SURGE_LOGIN`: Correo electrónico asociado a la cuenta de Surge.
- `SURGE_TOKEN`: Token de autenticación obtenido con el comando `surge token`.

---

## 👤 Información del Estudiante
- **Nombre**: Isaac Cabrera Silverio
- **Institución**: Instituto Tecnológico de Las Américas (ITLA)
- **GitHub**: [@Isak1956x](https://github.com/Isak1956x)
