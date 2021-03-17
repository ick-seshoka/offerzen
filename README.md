# Project structure

This project is created using [create-react-app]

### Folders are structure in the following way

- **🌎 public**
  - public folder with `index.html` file
- **🎯 src**
  - The magic folder 🧙🏾‍♂️ : logic of the application
  - **src folder structure**
    - **🚀 api**
      - axios configuration object passed to axios instance to make the call to get candidate interviews hosted on this public project
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
