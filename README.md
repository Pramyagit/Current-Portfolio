# React + Vite
# my react portfolio:
https://pramyagit.github.io/Current-Portfolio/

# steps:
Use CI/CD pipelines (yml):


name: Deploy React + Vite to Github Pages
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      # Checkout the repository
      - name: Checkout code
        uses: actions/checkout@v3

      # Setup Nodejs
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22

      # Install Dependencies
      - name: Install Dependencies
        run: npm install

      # Build the project
      - name: Build project
        run: npm run build

      # Deploy to github pages
      - name: Deploy to github pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: dist


     If suppose use new version- check the checkout  and gh-pages,setup-node version .   



          
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
