# What is Frontend?

## Rationale

I'd like to take a moment before we dive into how to build the frontend. I think this is as good a time as any to talk about the frontend community and some of the underlying technology concerns that we face. Also, it'll be key to having conversations about frontend to be able to differentiate it with conversations about backend. The reason here is that there are cultural concerns between the two that should be addressed sooner rather than later.

Frontend web development as a career is one of the newer software engineer focus areas. In recent history websites were built by general software developers. Some of these devs built out the servers, infrastructure, database and everything else needed to network all the pieces together. The public internet in technology years is pretty new when compared to refrigerator sized mainframes. On top of that powerful web browsers are even newer.

Because our professional specialty is so new, often you will find yourself at companies that still aren't sure what frontend developers do and what their concerns are. Most software is written on top of operating systems, either Windows, Linux, or Unix. As frontend devs we have to support a plethora of devices and browsers. It's important to know about these concerns in hopes to help instill the complex nature of our profession. At the same time I hope that this section hints at some of the reason why our field is known as being unstable and Frontend devs feel like they have to constantly be learning new ways to build on these ever changing, updating, and competing platforms.

## Level of Learning

remember

## Learning Objectives

Memorize these concepts so you will better be able to collaborate with folks when building projects that touch technologies outside the field.

## Critical Content

- Explain client-side vs server-side development
- List client-side languages
- Explain some common web browsers
- Explain what a headless web browser is
- Explain what webviews are
- List some "Native" (web native) technologies

## Lessons

- Read Frontend Masters' book [Chapter 1. What is a Front-end Developer?](https://frontendmasters.com/books/front-end-handbook/2019/#2)

This book is a great place to come for a huge range of Front End topics. It can help to guide you on most of this journey. When you feel lost on what you believe your next steps or what skills you need. This is a great reference. Another good reference is [roadmap.sh](https://roadmap.sh/), I'd recommend book marking both the Frontend Masters book as well as roadmap.sh. We loosely follow the Frontend roadmap in this course. So when you are introduced to a new technology you should go to those resources to see how they fit in the grand scheme of your journey as a frontend dev.

### Study guide

- Client-side: A browser that is loaded from your computer
- Different web browsers: Google Chrome, Mozilla Firefox, Brave
- Different types of browsers: Headless, web, Webview
- Headless browser: A way to control web pages without a GUI (Graphical User Interface)
- Webviews: way to display websites on mobile (native) apps
- Native technologies: Flutter, React Native, NativeScript
- Server-side: Code that runs in a server somewhere else that sends data over the internet to your browser
- Client-side scripts: Run in the browser
- Client-side languages: HTML, CSS, Javascript

### References

- [roadmap.sh](https://roadmap.sh/)
- [Frontendmasters handbook](https://frontendmasters.com/books/front-end-handbook/2019/)

# Pass a take home CSS interview

## Rationale

As a developer who builds User Interfaces (UIs) it will be your job to style different components that display like buttons, tables, and text. UIs can get pretty complex. You'll end up layering elements on top of each other thus hiding some elements. It's very common then to later try and figure out which element is at which layer and trying to figure out when you apply a style to an element it breaks another one.

Welcome to the world of CSS. Complex UIs are tricky. So this module we want to give you some tools to be able to debug your CSS. Usually the workflow for CSS is use a browser's `elements` tab to change the style of some element until you like it. Then copy that style into your code. Then save it, run it, and check the browser to see if it did what you think it did. In this module we want you to get comfortable with the browser's elements tab because that is the source of truth for writing CSS.

## Level of Learning

Apply

## Learning Objectives

We want you to be able to solve CSS problems using your browser's `elements` tab. Specifically you should be able to highlight and select elements, read through their CSS, toggle and update the styles and use the box model tool to help troubleshoot spacing issues.

## Critical Content

- Inspect CSS properties of particular elements
- Edit CSS properties in the browser's inspector
- Show box model properties in the browser's inspector
- Troubleshoot CSS specificity issues

## Lessons

### Chrome Elements tab

- See something with CSS Grid on the page
- Update styles for an element
- See/Update styles as they apply to the box model

### Study Guide

- Recorded a short [CSS Debugging demo](https://www.loom.com/share/190f302764c04293a49d97e323a3ed78)

### References

- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS

# Build clean CSS

## Rationale

CSS isn't just about building clean looking websites. It is also about writing clean, maintainable code. CSS can get pretty tough to read pretty quickly. Also, usually you won't be writing CSS alone, you'll be on a team. Other folks will need to be able to read and follow your code.

Building layouts with multiple columns gets challenging because at different screen sizes those columns stretch and contract. Sometimes your layout will consist of 3 columns on desktop, 2 columns on an Ipad and a single column on mobile devices. CSS Grid can help you write CSS layouts that make sense when you read them. You define your layout in one spot as opposed to setting up multiple media queries or using a flexbox in a limited way.

In this course we recommend you pick up a CSS naming scheme. You will be typing more and in the beginning you'll wonder why you have to use a naming scheme. Trust us, once it is muscle memory it will help you navigate your CSS files so much easier.

Lastly, because we live in a great world now where we have CSS variables we should use them. CSS variables are relatively new, but we recommend you use them because it'll make writing consistent css easier. It's nice to be able to define something once and use it in multiple places (especially colors).

## Level of Learning

Apply

## Learning Objectives

You should be able to use CSS Grid, variables, and SMACSS to help you write more readable CSS. It should also help you troubleshoot your styles more readily.

## Critical Content

- Use CSS Grid for layout
- Use CSS variables
- Use the SMACSS style guide to write clean CSS

## Lessons

- Make a web page with a single column layout `max-width: 900px` and then for screen sizes that are larger make the layout look like the below image. (hint: CSS Grid can help)
  - Add some CSS variables (colors are usually a good introduction)
  - Use SMACSS to name your CSS classes
    ![](https://css-tricks.com/wp-content/uploads/2018/11/dddgrid-template-areas.svg)

### Study Guide

- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- [SMACSS](http://smacss.com/)
- [The Net Ninja CSS-Grid](https://www.youtube.com/watch?v=x7tLPhnA06w&list=PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY)

# Design intro

## Rationale

Now that you have the ability to make some pretty great designs with CSS it doesn't necessarily mean that it looks good. This module covers some ideas to keep in mind when building out designs. As UIs build up complexity it becomes more challenging to decipher what the intended goal of a page should be.

We've all had the experience on a website not knowing where to find a certain button or questioning the intention of a page. This is known as a poor User Experience (UX). UX is the study of helping the user to find the information they are looking for as efficiently as possible. To build a good UI that provides a good UX devs and designers should take time and think about their users' goals before starting to put pen to paper.

Design isn't an arbitrary practice. There should be thought around the reason elements are placed, spaced, and colored the way they are. Knowing some UX laws will help you make more informed design decisions when building your applications. On top of those decisions following a design system will give you specific advice around how to build a certain aesthetic.

Lastly, it is always important to design with accessibility in mind. There are folks out there who may come to your UI that have a hard time with small fonts, low color contrast, are color blind, are blind or many of the other ways that folks could ingest your content. Please don't forget about them when building and designing.

## Level of Learning

Apply

## Learning Objectives

At this point you should be able to create a well designed web page using a design workflow. First you'd write your content. You then would build a wireframe showing the path and buttons you'd want the user to click and look at. Then you'd build a design using the colors and layout that would actually get coded. You'd do all this with UX laws of design theory and some design system tactics to help. Lastly, keep in mind the folks you are building for may not experience your UI the same as you do so keep them in mind.

## Critical Content

- Explain some reasons why wireframes are helpful
- Build a wireframe of a web page

- Design a web page from a wireframe using a design tool

- Describe Hick's Law
- Describe Jakob's Law
- Describe Law of Common Region

- Have an idea about using shadow
- Build responsive layouts
- Use a grid to space elements
- Use a color picking tool to design a theme

- Explain about the A11y project and how it relates to WCAG
- Explain about some assistive technologies
- Explain some examples of inaccessible technology
- Explain how to find WCAG standards
- Explain how to audit a web page using Google Lighthouse

## Lessons

- Use Figma to design a web page using the layout from the last lesson.
  - Take into account color contrast accessibility standards
  - Use a design system like Material to separate and group your elements
  - Use UX Laws to explain your design to others

### Study Guide

#### Resources

- [Great Wireframing tool](https://www.draw.io/)

- [Great design tool](https://www.figma.com/)

- [Laws of UX](https://lawsofux.com/)

- [Material design shadows](https://material.io/design/environment/light-shadows.html#shadows)
- [Material design layout](https://material.io/design/layout/responsive-layout-grid.html#shadows)
- [Material design spacing](https://material.io/design/layout/spacing-methods.html#spacing)
- [Material design color](https://material.io/resources/color/#!/?view.left=0&view.right=0)

- [a11y project](https://www.a11yproject.com/)
- [intro to accessibility](https://mawconsultingllc.com/webinars/webinar-intro-to-accessibility/)
- [Accessibility standards](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

# Building with Javascript

## Rationale

Javascript is the primary programming language used to build web applications. The Javascript community has built a lot of tooling to help make writing quality and performant Javascript easier. This module we cover how to build with some community tooling to make more performant Javascript all the meanwhile unlocking the ability to use new Javascript features.

The first technology you're going to need to be able to use is Node Package Manager (NPM). NPM is the repository that the JS community uses to publish code to use in your project. Load a JS bundler like Parcel to add loads of packages all at once and then to minimize your code making it more performant in production. When you load a bundler like Parcel you can add the Babel transpiler which will allow you to write JS code with new features while still supporting older browsers.

## Level of Learning

Apply

## Learning Objectives

Use a bundler like Parcel to load JS dependencies and transpile JS code by running a build/start command like `npm run start`.

## Critical Content

- Install npm dependencies
- Use a JS bundler like Parcel
- Use new JS features (like async/await, `let`/`const`, Arrow functions, and rest/spread operators )

## Lessons

# Javascript Testing and Data

## Rationale

Any programming application you build ends up getting more complex. At a certain scale you'll try to make changes to one part of your code, which ends up breaking another part of your code that you forgot about. At that point there are tools to help you become confident in your code. This is where a Javascript testing framework can really help out. In this section we introduce Javascript testing and data.

"Why data?" you may ask. Well there are three reasons here. Reason one, data adds complexity to your application, which makes it a great candidate for testing. The second reason is that in your career without a doubt you will end up using an API that you'd then fetch data from. The last reason is that data fetching is an asynchronous process. It is very important to be able to understand how to build asynchronous Javascript.

## Level of Learning

Apply

## Learning Objectives

Build tested Javascript code that uses data fetching.

## Critical Content

- Use fetch api
- Parse and stringify JSON
- Use Jest

## Lessons

# Build React Apps

## Rationale

Now that you grasp Javascript and can build some features. It's important to build with industry standard javascript frameworks. The first JS framework we're going to cover is ReactJS. ReactJS is a library, which we end up using as a framework. It's a great framework that helps you manage your JS in a very predictable pattern giving you the ability to build enterprise scale applications.

## Level of Learning

Apply

## Learning Objectives

Use `create-react-app` to bootstrap a ReactJS project where you can then build a larger JS application. Build React apps using standard patterns.

## Critical Content

- Install and run `create-react-app`
- Render Hooks
- Pass data via props
- Render lists
- Conditionally render components
- Setup event listeners
- Use React hooks (`useState`, `useEffect`, `useContext`)

## Lessons
