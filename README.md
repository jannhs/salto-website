# SALTO Website
<p align="center">
<img src="https://github.com/jannhs/salto-website/blob/88af7cc1120efabcf60d6a3d070c69f4cf3530f2/public/logo_salto.png" width="200"/>
</p>

## English Version

This repository contains the source code for the SALTO website, built using the [Next.js](https://nextjs.org) framework. It is designed to be multilingual, with internationalization (i18n) support provided by the [next-intl](https://next-intl.dev/).
In the current version, the website supports Italian and English languages.

For UI components, it uses [Tailwind CSS](https://tailwindcss.com/) together with elements from the [Mantine](https://mantine.dev/) library.

To ease the writing of content in a structured and reusable way, the project uses [MDX](https://mdxjs.com/) files, which allow to render Markdown with React components.

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

## Italian Version

Questo repository contiene il codice sorgente del sito web **SALTO**, sviluppato utilizzando il framework [Next.js](https://nextjs.org).  
Il sito è progettato per essere multilingue, con supporto all’internazionalizzazione (i18n) fornito dalla libreria [next-intl](https://next-intl.dev/).
Nella versione attuale, supporta le lingue **italiano** e **inglese**.

Per le componenti grafiche dell'interfaccia utente, si è utilizzato [Tailwind CSS](https://tailwindcss.com/) assieme alla libreria [Mantine](https://mantine.dev/).

Per quanto riguarda i contenuti statici, il progetto utilizza file [MDX](https://mdxjs.com/), che permettono di combinare Markdown e componenti React.

### Come eseguire il sito in locale

1. Installare [Docker](https://www.docker.com/) sul proprio computer:

   - Su Windows e macOS, puoi usare [Docker Desktop](https://www.docker.com/products/docker-desktop/).
   - Su Linux, puoi seguire la [guida ufficiale all’installazione](https://docs.docker.com/engine/install/).

2. Scaricare l’immagine Docker del sito SALTO:

   - Da terminale:

   ```
   docker pull jannhss/salto
   ```

   - Oppure, da Docker Desktop, cercare `jannhss/salto` nella sezione Docker Hub e cliccare su `Pull`.

3. Aprire un terminale::

   ```
   docker build -t jannhss/salto .
   docker run -p 3000:3000 jannhss/salto
   ```

4. Ora si può accedere al sito dal browser all’indirizzo: `http://localhost:3000`.
