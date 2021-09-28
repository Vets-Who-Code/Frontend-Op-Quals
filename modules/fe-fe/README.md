# What is Frontend?

## Rationale

I'd like to take a moment before we dive into how to build the frontend. I think this is as good a time as any to talk about the frontend community and some of the underlying technology concerns that we face. Also, it'll be key to having conversations about frontend to be able to differentiate it with conversations about backend. The reason here is that there are cultural concerns between the two that should be addressed sooner rather than later.

Frontend web development as a career is one of the newer software engineer focus areas. In recent history websites were built by general software developers. Some of these devs built out the servers, infrastructure, database and everything else needed to network all the pieces together. The public internet in technology years is pretty new when compared to refrigerator sized mainframes. On top of that powerful web browsers are even newer.

Because our professional specialty is so new, often you will find yourself at companies that still aren't sure what frontend developers do and what their concerns are. Most software is written on top of operating systems, either Windows, Linux, or Unix. As frontend devs we have to support a plethora of devices and browsers. It's important to know about these concerns in hopes to help instill the complex nature of our profession. At the same time I hope that this section hints at some of the reason why our field is known as being unstable and Frontend devs feel like they have to constantly be learning new ways to build on these ever changing, updating, and competing platforms.

## Level of Learning

This module is a high level overview of underlying frontend technology. Students should be able to chat about this topic but not needed to have in depth conversations about the history, differences between browser implementations.

## Learning Objectives

At a high level explain different types of browsers, how those render data, how mobile fits into frontend, and how frontend is different than backend.

## Critical Content

- Explain client-side vs server-side development
- List client-side languages
- Explain cross-browser vs cross-platform vs cross-device
- Explain some common web browsers
- Explain what a headless web browser is
- Explain what webviews are
- List some "Native" (web native) technologies

## Lesson

- Read: https://frontendmasters.com/books/front-end-handbook/2019/#2


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

## Lesson
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

## Lesson

- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- [SMACSS](http://smacss.com/)

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

## Lesson

- https://en.wikipedia.org/wiki/Website_wireframe
- https://www.draw.io/

- https://www.figma.com/

- https://lawsofux.com/

- https://material.io/design/environment/light-shadows.html#shadows
- https://material.io/design/layout/responsive-layout-grid.html#shadows
- https://material.io/design/layout/spacing-methods.html#spacing
- https://material.io/resources/color/#!/?view.left=0&view.right=0

- https://www.a11yproject.com/
- https://mawconsultingllc.com/webinars/webinar-intro-to-accessibility/
- https://www.w3.org/WAI/standards-guidelines/wcag/
- https://developers.google.com/web/tools/lighthouse
