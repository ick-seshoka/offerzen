# Project structure

This project is created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)

### Folders are structure in the following way

- **🌎 public**
  - public folder with `index.html` file
- **🎯 src**
  - The magic folder 🧙🏾‍♂️ : logic of the application
  - **src folder structure**
    - **🚀 api**
      - axios configuration object passed to axios instance to make the call to get candidate interviews hosted on this [public project](https://github.com/ick-seshoka/offerzen-data)
    - **📂 assest**
      - project resources like images and icons
    - **📦 components**
      - `dumb` components
    - **📕 containers**
      - `smart` components
    - **🚦 enums**
      - helper enums
    - **🤺 helpers**
      - ninjas of the project: helper functions, formatters
    - **📄 pages**
      - project pages : containers that group components that make up a 'page' in a SPA 🤭🤣
    - **🏬 store**
      - redux store configuration
    - **🎨 styles**
      - project theme, passed to styled components `<ThemeProvider>` component

# How to install source code

Download/clone the source code from this [github repository](https://github.com/ick-seshoka/offerzen/tree/master)

run the following command in to install and run the project locally:

```
  npm install
  npm start
```

The browser should launch the appication on this urls `localhost:300`

provided you are inside the project home director (cd `/offerzen` after downloading)

### You need to have [Node.js](https://nodejs.dev/) installed on your machine with npm ℹ️

You can also voew the project live on [here](https://ick-seshoka.github.io/offerzen/#/) 😁, i created a gh-page of the final solution
