K-watt Electric — React multi-page site (Create React App style)

IMPORTANT: Replace <YOUR_GITHUB_USERNAME> in package.json "homepage" with your GitHub username before deploying.

To run locally:
1. npm install
2. npm start

To build:
1. npm run build

To deploy to GitHub Pages:
1. npm install --save-dev gh-pages
2. Set "homepage" in package.json to "https://<YOUR_GITHUB_USERNAME>.github.io/k-watt-electric"
3. git init
4. git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/k-watt-electric.git
5. npm run deploy

Files included:
- public/index.html
- src/index.js, App.js, App.css
- src/components/Header.js, Footer.js
- src/pages/Home.js, Products.js, Contact.js, About.js
