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

The browser should launch the appication on this urls `localhost:3000`

provided you are inside the project home director (cd `/offerzen` after downloading)

### You need to have [Node.js](https://nodejs.dev/) installed on your machine with npm ℹ️

You can also view the project live on [here](https://ick-seshoka.github.io/offerzen/#/) 😁, I created a gh-page of the final solution

# Solutions structure

The repository has task-a, task-b, and task c and the final solution in develop and maaster brnach

### Packages used in the project

- [axios](https://www.npmjs.com/package/axios)
- [moment](https://www.npmjs.com/package/moment)
- [normalize](thttps://www.npmjs.com/package/normalize.css)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [redux](https://www.npmjs.com/package/redux)
- [redux-immutable-state-invarient](https://www.npmjs.com/package/redux-immutable-state-invarient)
- [redux-thunk](tehttps://www.npmjs.com/package/redux-thunk)
- [reselect](https://www.npmjs.com/package/reselect)
- [styled-components](https://www.npmjs.com/package/styled-components)

# 💬 My comments about the assessment

- It took longer than 4hours for me to complete this prject. i spent most of the time filling out the branks on the uncovred sstate screens in the designs, like what to show when searching a user that does not exisist.

- I would've liked to get the actual design file and save time on generating the icon svgs
