## Follow the below steps to develop the project

- open terminal and type `npm create vite@latest`
- type the project name and select the template
    - here we are using `react` template
- for variant select `JavaScript`
- `cd to the project name`
- then do `npm install`
- `npm install axios react-icons`
    - axios is used to make the api calls
        - axios is  different from fetch api
            - the  main difference is that axios is a third-party package and fetch is a built-in browser api
            - axios is a promise-based library, fetch is not
            - axios is widely used in the industry, fetch is not
            - axios is supported in all browsers, fetch is not
            - axios has a lot of features, fetch has not
            - to learn more about axios, visit [axios](https://axios-http.com/docs/intro)
    - react-icons is used to get the icons

- do `npm run dev` to run our server
- you need to install `ES7 React/Redux/GraphQL/React-Native` snippets extension in your vs code to get the snippets


## now lets write our server
- create a folder  `server` and  `cd server`
- open terminal and type `npm init -y`
    - this means we are creating a package.json file with default values
- in terminal type `npm install express mongoose cors nodemon`
- open `package.json` and add the below code in scripts
    `"start":"nodemon index.js"`
- create a file `index.js` 
- in the terminal type `npm start`

