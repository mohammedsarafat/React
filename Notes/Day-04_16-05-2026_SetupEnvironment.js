1. Setup Environment for React
2. Create a new Web Application and setup
development environment

Enable React in a web page:

1. Add a new web page into project “index.html”

2. Add <noscript> element into index.html

<body>
<noscript> Please enable Javascript on your

browser </noscript>
</body>

edge://settings => search for

Javascript => allow / block

chrome://settings

3. React creates a virtual DOM and adds into
index.html. Hence index.html must
have a container to handle virtual DOM.

4. Add a non-semantic element into index to hold
entire virtual DOM.

<body>
<noscript> Please enable JS </noscript>
<div id=“root”> </div>
</body>

5. To use React in any Web Page you need 3 basic
libraries

a) react
b) react-dom
c) babel

- “react” is core library of React JS that provides
all services required for React.
- “react-dom” is virtual DOM library, which is used
to create & update virtual DOM.
- “babel” is a Javascript compiler.
- You can add the libraries using 2 techniques

a) CDN
b) Install using package manager

CDN Links [React]
1. Visit the website “https://legacy.reactjs.org/“
2. Go to “docs” category
3. Select “CDN Links”
4. Copy the production links and paste into your
page <head> section.

[for development environment use

development links]

CDN Links [Babel]
1. Visit the website “https://babeljs.io/“

2. Go to “docs”

3. Go to “Integration Packages” category

4. Select “@babel/standalone”

5. Copy the CDN and paste into your page head
section below react library.

6. Add a <script> element into page with MIME as
“text/babel”

<script type=“text/babel”>

</script>

7. Create Virtual DOM and add to actual DOM

React upto 17x version

ReactDOM.render(“Welcome to React”
,

document.getElementById(“root”));

React 18 & 19x version

const root =

ReactDOM.createRoot(document.getElementById(“root

root.render(“Welcome to React”);

Ex: CDN Links
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Index</title>
<!-- React Libraries -->
<script crossorigin
src="https://unpkg.com/react@18/umd/react.development.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-
dom.development.js"></script>

<!-- Babel Library -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js">
</script>
<!-- Virtual DOM -->
<script type="text/babel">
const root =
ReactDOM.createRoot(document.getElementById("root"));
root.render("Welcome to React 18x & 19x");
</script>
</head>
<body>
<noscript>Please enable Javascript on your browser.</noscript>
<div id="root"></div>
</body>
</html>

Download Libraries using package manager

1. Open terminal in your project location

2. Run the commands

> npm install react@18 react-dom@18

--save

> npm install @babel/standalone --save

3. All downloaded library files a copied into
“node_modules” folder

4. Link the following files to your web page

<script
src=“./node_modules/react/umd/react.development.js”>
</script>

<script src=“./node_modules/react-
dom/umd/react-dom.development.js”> </script>

<script
src=“./node_modules/@babel/standalone/babel.js”>
</script>

Ex:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Index</title>
<!-- React Libraries -->
<script src="./node_modules/react/umd/react.development.js"></script>

<script src="./node_modules/react-dom/umd/react-
dom.development.js"></script>

<!-- Babel Library -->
<script src="./node_modules/@babel/standalone/babel.js"></script>
<!-- Virtual DOM -->
<script type="text/babel">
const root =
ReactDOM.createRoot(document.getElementById("root"));
root.render("Welcome to React 18x & 19x");
</script>
</head>
<body>
<noscript>Please enable Javascript on your browser.</noscript>
<div id="root"></div>
</body>
</html>
