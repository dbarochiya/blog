---
title: "How to create your portfolio website using React.js"
description: "This article will describe you the path to create your portfolio website into React.js from HTML templates."
date: "2019-03-29T12:45:23.309Z"
categories: 
  - Tech
  - React
  - JavaScript
  - Web Development
  - Portfolio

published: true
canonical_link: https://medium.com/free-code-camp/portfolio-app-using-react-618814e35843
redirect_from:
  - /portfolio-app-using-react-618814e35843
---

![](./asset-1.jpeg)

After my friends canceled our weekend plans 😒, I was looking for something to kill time and finally ended up with a plan to create a portfolio website after going through my long pending list of **‘**Wish-To-Do**’** things.

Many hours of searching for technologies and templates later, I ended up creating [this](https://dhruv34788.github.io/me/) website using React.js and deploying it using Github pages. You can find the code for the website [here](https://github.com/Dhruv34788/me) (It’s called a ‘**web-app**’ technically, but for this article, I will be referring to it as a ‘website’ … I hope that’s ok 😜).

### What you will learn

-   Some basic concepts of React.js
-   Create React-app from HTML website
-   Deploy your portfolio website using ‘Github pages’

### Some concepts you need to know before we start ..

> _Note — feel free to skip this part if you are already familiar with basic concepts of React.js and React Components._

> _Note — these points will provide a very basic idea of the React world. I highly recommend you to study more about React from the_ [_documentation_](https://reactjs.org/docs/getting-started.html) _and get hands-on with the help of_ [_freeCodeCamp_](https://www.freecodecamp.org/)_._

### What is React.js >

For now, it is enough to know that React.js is the JavaScript library used for building UI components. It was created by the engineers of Facebook and nowadays, it is rocking the JavaScript world..

#### What is a React Component >

React lets you define components as a class or a function. You can provide optional inputs to the components called ‘**props**’.

Components let you split up the UI into **independent** sections like header, footer, and body. Each component will work independently so any individual component can be rendered independently into the [ReactDOM](https://reactjs.org/docs/react-dom.html)without affecting the whole page.

It also comes with **‘lifecycle methods**’ which let you define pieces of code you want to execute according to the state of the component like mounting, rendering, updating and un-mounting.

React components come with their own trade-offs. For example, we can reuse a component by exporting it to other components, but sometimes it gets confusing to handle multiple components talking and triggering renders for each other.

this is how a component would look like!

react component structure

#### What is [GitHub Pages](https://pages.github.com/) >

With GitHub Pages, you can easily deploy your site using GitHub for free and without the need to set up any infrastructure. They have provided modules so that you don’t have to worry about many things. If you stick around till the end you’ll see that it works like MAGIC!

### Before you go ahead make sure to:

#### Decide what content you want to put up on your website

Go through your latest resume once (if you don’t have one then [create one now](https://resumegenius.com/resume-templates) and postpone this project until next weekend 😛). It will help you to have a clear idea about what kind of information you want to put on your portfolio website.

#### Find inspiration

Browse through the hundreds of free portfolio website templates on the web, see how and what you can use from them — take out a pen and paper and sketch out a rough diagram to get an idea of what your website will look like. I will be using [this](https://colorlib.com/preview/#jackson) template to demonstrate.

#### Gather some amazing pictures of yourself

It’s obvious that you don’t want to look bad on your own portfolio website. So dig into your archives of photos to find the perfect photos for your website.

#### Tune into your favourite playlist

Legend has it that **good things come only with good music…** _and_ you surely don’t want to miss out any great things.

[![a glimpse of my portfolio website](https://dbarochiya.github.io/me/)[](./asset-2.png)](https://dbarochiya.github.io/me/)

### Let’s jump into the building part

In the following sections, I will describe steps to building the portfolio app but you don’t have to follow the same code I use. Focus on learning the concept and show some creativity! Further reading has been divided into three sections.

1.  Setting up the React-app
2.  Breaking down the HTML page into React components
3.  Deploying your app onto Github pages

#### Setting up React-app

We will be using `[create-react-ap](https://facebook.github.io/create-react-app/docs/getting-started)p` — a module provided by Facebook — which helps us to create React.js apps with ease and without worrying about build tools.

-   Go to the console and run `npm install create-react-app` to install this module via npm (make sure that you have installed `npm` before using it — follow [this](https://www.rosehosting.com/blog/install-npm-on-ubuntu-16-04/) link for more info).
-   Now run `npm create-react-app ${project-name}` which will fetch build scripts and create a file-structure which will look like this.

file structure generated by ‘create-react-app’

Create a `components` folder under the `src` directory. This is where we will store our components in the future.

-   Copy all the images, fonts, HTML and CSS files from the HTML `template` you decided to work with into the `public` folder.

Now your project directory should look like this.

![file-structure](./asset-3.png)

-   Run the `npm install` command which will install dependent modules under `node_module` directory.
-   If you’ve got it right up until now, then running the `npm start` command will start the React app on the `localhost`. Go to `[https://localhost:3000](https://localhost:3000)`and you should be able to see the starter page of the React-app.

#### Breaking-down the HTML page into React components..

Remember the `component` folder which we created under `src` directory in the previous step, now we will break down the HTML template page into components and combine these components to make our React-app.

-   First, you need to identify which components you can create from the monolithic HTML file — like header, footer and contact me. You need to be a little creative here!!
-   Look for tags like _section/div_ which aren’t nested into some other _section/div_. These should contain code about that particular section of the page which is independent of other sections. Try looking into my [_GitHub Repo_](https://github.com/Dhruv34788/me) to get a better idea about this one.  
    _Hint: Use the ‘_**_inspect element_**_’ tool to play around with the code and take notice of the effect of changes within the browser._
-   These pieces of HTML code will be used in the `render()` method of the component. The `render()` method will return this code whenever a component gets rendered into the ReactDOM. Take a look at the code blocks given below for reference.

‘home’ section of the HTML fileReact component created from the ‘home’ HTML section

Hint: If things are getting confusing on the react side — try focusing on the concept of ‘how to identify wanna be components from the HTML codebase’. After getting comfortable with React, implementation will be a piece of cake.

Did you notice that there are some changes in the HTML code? `class` became `className`. These changes are required because React doesn’t support HTML 😅 — they have come up with their own HTML-like JS syntax which is called [JSX](https://reactjs.org/docs/introducing-jsx.html) . So, we need to change some parts of the HTML code to make it JSX.

I bumped into this [HTML to JSX converter](https://magic.reactjs.net/htmltojsx.htm) during this project, which converts HTML code into JSX for you 😯. I highly recommend using this rather than changing your code manually.

After some time, you should come up with some different components. Now the `EndGame` is near!! Combine these different components under one `App.js` component (YES!! You can render one component from another component!) and your portfolio app will be ready.

combined all components under app.js

Notice in the above code that we need to first `import` the components in order to use them in the `render()` section. And we can use the components just by adding `<component-name></component-name>` or just `<component-name/>` tag in the render method.

-   Run `npm start` from your terminal and you should be able to see the changes reflected in the website. You don’t need to run this command again if you have made more changes in the code, it will be reflected automatically when you save those changes. You can do some lightning fast development thanks to the `[hot reload](https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading)` [feature](https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading).
-   Play around with the HTML and CSS to change the content according to your resume and make your portfolio even cooler by changing the content, trying out different fonts, changing the colours and adding photos of your choice.

#### Deploy React-app to Github pages

Okay, so you survived until this point… take a moment to appreciate your hard work. But you still need to complete your deployment so that you can share your cool work with your friends who ditched those weekend plans.

-   First, you need to install the npm library of Github pages. To install, run this command `_npm install gh-pages_` on your terminal.

Now, you need to make the following changes in your `_manifest.json_` file:

-   Add the `_homepage_` field — value will be in the following format — `[https://{github_id}.github.io/{github_repo}](https://%7Bgithub_id%7D.github.io/%7Bgithub_repo%7D)`
-   Add `_predeploy_` and `_deploy_` fields under `_scripts_`

Now your manifest.json should look like this:

manifest.json after adding gh-pages link

Now go to the terminal, run `npm run deploy` and wait for the magic!! Your app will be deployed after the deployment scripts execute successfully. Verify whether your app has deployed or not by visiting the link you provided in the `homepage` field.

**_Caution:_** Please be careful when deploying anything onto the web. Perform safety checks like removing internal links, passwords, or anything that you don’t want to be there in the hands of smart people out there.

### Homework for you

Congratulations! You have finally created and deployed your portfolio app. If you are interested, then you can add these features to your website

-   **Blog feature:** create your own blog using Node.js and a NoSQL database like MongoDB and merge it into this portfolio website.
-   **Gallery:** add a section to the page where you can show the screenplay of the recent photos from your social media websites.
-   **Twitter Feed:** add a section showing recent tweets by you.
-   **Random Quote:** add a section showing some random motivational quotes.

If you implement any of these features, share your work with me. I would be more than happy to help 😃 ( if I can 🐵)

---

### Have your project? — Share it

I am trying to build a community of developers where people can share their ideas, knowledge, work with others and find other people with similar ideology to build things together.

-   Gitter channel: [https://gitter.im/weekend-devs/community](https://gitter.im/weekend-devs/community)
-   Github Organization: [https://github.com/weekend-developers](https://github.com/weekend-developers)

---

### Wrapping up

I would like to take a moment to acknowledge the work of the people who gave me the inspiration and knowledge to complete this article.

-   [**_Quincy_**](https://medium.com/@quincylarson) **_Larson,_** [**_Sahat Yalkabov_**](https://medium.com/@evnowandforever) **_& community:_** For creating **_freeCodeCamp — _**the platform where you can learn and gain knowledge about almost everything related to web technologies; using hands-on tutorials _and_ all without paying fees. 😍
-   **_Colorlib:_** for providing state of the art templates which were a huge inspiration for my portfolio website. 😸
-   [**_Daniel Lo Nigro_**](https://medium.com/@Daniel15) **_& community:_** for creating [**_HTML to JSX_**](https://magic.reactjs.net/htmltojsx.htm) **_Compiler,_** which turned out to be handy while converting HTML blocks into JSX code. 😋
-   **_My dearest friends:_** who helped me in correcting my mistakes.
-   **YOU:** for sticking around, I hope you had a productive time. Keep exploring and building amazing things!

![Photo by [Ruediger Theiselmann](https://unsplash.com/@docrowdee?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](./asset-4)
