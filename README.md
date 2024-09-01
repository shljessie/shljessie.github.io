# Portfolio Website

This is [Seonghee's personal portfolio website](https://shljessie.github.io/) showcasing projects, research, and other professional achievements.

Feel free to clone and use!

## Table of Contents

1. [Installation](#installation)
2. [Deployment](#deployment)
3. [Running Locally](#running-locally)
4. [Project Structure](#project-structure)

## Installation

First, clone the repository and navigate to the project directory:

```bash
git clone <your-repo-url>
cd <your-repo-directory>
```

## Deployment

To deploy the website using GitHub Pages, follow these steps:

1. **Install `gh-pages` as a development dependency:**

    ```bash
    npm install gh-pages --save-dev
    ```

2. **Add the changes to your repository and commit them:**

    ```bash
    git add .
    git commit -m "Deploying website"
    ```

3. **Push the changes to your repository:**

    ```bash
    git push
    ```

4. **Deploy the website:**

    ```bash
    npm run deploy
    ```

   This will build your application and push the `build` folder to the `gh-pages` branch of your repository. 

The website will be accessible via your GitHub Pages URL, typically formatted as:


## Citations

The animated cursor used in this project is based on the work by **Stephen Scaff**. You can find more of his work on [GitHub](https://github.com/stephenscaff).
