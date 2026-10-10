# SALTO - Salute senza confini 
<p align="center"> 
   <a target="_blank" href="https://salto.di.unito.it/en">
      <img src="https://github.com/jannhs/salto-website/blob/88af7cc1120efabcf60d6a3d070c69f4cf3530f2/public/logo_salto.png" width="200"/>
   </a>
</p>

This repository contains the source code for the [SALTO website](https://salto.di.unito.it/en), built using the [Next.js](https://nextjs.org) framework and Tailwind CSS.
It is designed to be multilingual: in the current version the website supports English, French, Italian, Spanish and Arab translations.


### How to run locally with Docker

1. Install [Docker](https://www.docker.com/) on your machine:

- For Windows and macOS, you can use [Docker Desktop](https://www.docker.com/products/docker-desktop/).
- For Linux, you can follow the [official installation guide](https://docs.docker.com/engine/install/).

2. Download the image for the website:
   - On terminal :
   ```
   docker pull jannhss/salto
   ```
   - Or, if you prefer from the Docker Desktop GUI, search for `jannhss/salto` in the Docker Hub section and click on "Pull".
3. Run the Docker container:
   - On terminal :
   ```
   docker build -t jannhss/salto .
   docker run -p 3000:3000 jannhss/salto
   ```
   - Or from Docker Desktop, you can click on the "Run" button after selecting the `jannhss/salto` image. Make sure to map port 3000 of the container to port 3000 of your host machine.
4. Now you can access the website from the browser at the address: `http://localhost:3000`.
