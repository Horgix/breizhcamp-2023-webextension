# reveal-orange-boilerplate

## *TL;DR* 
> To create a new slide deck, start from
  [reveal-orange-boilerplate-standalone.2.1.0.tar.gz](https://gitlab.tech.orange/api/v4/projects/36589/packages/generic/reveal-orange-boilerplate-standalone/2.1.0/reveal-orange-boilerplate-standalone.2.1.0.tar.gz)
  Otherwise, read on.  
  
## Revealjs with Orange Theme 

**Demo**
 - html : https://ethertools.pages.gitlab.tech.orange/reveal-orange-boilerplate/index.html
 - markdown: https://ethertools.pages.gitlab.tech.orange/reveal-orange-boilerplate/markdown.html

## Releases

[2.1.0 - assets (source & dist) ](https://gitlab.tech.orange/ethertools/reveal-orange-boilerplate/-/releases/2.1.0)

* Source : https://gitlab.tech.orange/ethertools/reveal-orange-boilerplate/-/archive/2.1.0/reveal-orange-boilerplate-2.1.0.tar.gz
* Download standalone : https://gitlab.tech.orange/api/v4/projects/36589/packages/generic/reveal-orange-boilerplate-standalone/2.1.0/reveal-orange-boilerplate-standalone.2.1.0.tar.gz


## Installation

### Basic Setup
We make a point of distributing reveal.js in a way that it can be used by as many people as possible. The basic setup is our most broadly accessible way to get started and only requires that you have a web browser. There's no need to go through a build process or install any dependencies.

1. Download the latest `reveal-orange-boilerplate` version https://gitlab.tech.orange/api/v4/projects/36589/packages/generic/reveal-orange-boilerplate-standalone/2.1.0/reveal-orange-boilerplate-standalone.2.1.0.tar.gz
2. Unzip and replace the example contents in index.html with your own
3. Open index.html in a browser to view it

That's it 🚀

> Note: when used locally, you can only run HTML presentation. 'External markdown' runs only from a local web server.

https://revealjs.com/markdown/#external-markdown


### Fork Setup

1. fork project into your namespace https://gitlab.tech.orange/ethertools/reveal-orange-boilerplate/-/forks/new 
2. create a branch to work on your presentation
3. when you push your branch, CI/CD pipeline runs to build and deploy into gitlab pages
4. display your presentation from gitlab pages link : 
   - HTML : `https://<your-namespace>.pages.gitlab.tech.orange/reveal-orange-boilerplate/`
   - MarkDown : `https://<your-namespace>.pages.gitlab.tech.orange/reveal-orange-boilerplate/markdown.html`

> Note: with 'gitlab pages', you can run HTML & MarkDown presentations.


### Docker Setup

Run a local web server to develop your html and external Markdown presentations with live reloading.

An easy way to use with only Docker as a requirement:

1. Install Docker and docker-compose, if not already done
2. Start the docker-compose service:  
   `$ docker-compose up --build`
3. Open http://127.0.0.1:8000 to view your presentation and enjoy live reloading : 
   - `http://localhost:8000` _(index.html by default)_
   - `http://localhost:8000/markdown.html`
4. Edit 'index.html' or 'markdown.html & md', optionnaly reference external Markdon files under 'slides/*'.  
   
_Note: only 'index.html', 'markdown.html & md', 'slides/' and 'images/' will be monitored._


### Full Setup - Recommended
Some reveal.js features, like **external Markdown**, require that presentations **run from a local web server**. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install Node.js (10.0.0 or later)
2. Clone the reveal.js repository  
`$ git clone git@gitlab.tech.orange:ethertools/reveal-orange-boilerplate.git`
3. Move to the reveal.js folder and install dependencies  
`$ cd reveal-orange-boilerplate && npm install`
4. Serve the presentation and monitor source files for changes  
`$ npm start`
5. Open http://localhost:8000 to view your presentation



---


<p align="center">
  <a href="https://revealjs.com">
  <img src="https://hakim-static.s3.amazonaws.com/reveal-js/logo/v1/reveal-black-text-sticker.png" alt="reveal.js" width="500">
  </a>
  <br><br>
  <a href="https://github.com/hakimel/reveal.js/actions"><img src="https://github.com/hakimel/reveal.js/workflows/tests/badge.svg"></a>
  <a href="https://slides.com/"><img src="https://s3.amazonaws.com/static.slid.es/images/slides-github-banner-320x40.png?1" alt="Slides" width="160" height="20"></a>
</p>

reveal.js is an open source HTML presentation framework. It enables anyone with a web browser to create beautiful presentations for free. Check out the live demo at [revealjs.com](https://revealjs.com/).

The framework comes with a powerful feature set including [nested slides](https://revealjs.com/vertical-slides/), [Markdown support](https://revealjs.com/markdown/), [Auto-Animate](https://revealjs.com/auto-animate/), [PDF export](https://revealjs.com/pdf-export/), [speaker notes](https://revealjs.com/speaker-view/), [LaTeX typesetting](https://revealjs.com/math/), [syntax highlighted code](https://revealjs.com/code/) and an [extensive API](https://revealjs.com/api/).

---

### Sponsors
Hakim's open source work is supported by <a href="https://github.com/sponsors/hakimel">GitHub sponsors</a>. Special thanks to:
<div align="center">
  <table>
    <td align="center">
      <a href="https://workos.com/?utm_campaign=github_repo&utm_medium=referral&utm_content=revealjs&utm_source=github">
        <div>
          <img src="https://user-images.githubusercontent.com/629429/151508669-efb4c3b3-8fe3-45eb-8e47-e9510b5f0af1.svg" width="290" alt="WorkOS">
        </div>
        <b>Your app, enterprise-ready.</b>
        <div>
          <sub>Start selling to enterprise customers with just a few lines of code. Add Single Sign-On (and more) in minutes instead of months.</sup>
        </div>
      </a>
    </td>
    <td align="center">
      <a href="https://www.doppler.com/?utm_cam![Uploading workos-logo-white-bg.svg…]()
      paign=github_repo&utm_medium=referral&utm_content=revealjs&utm_source=github">
        <div>
          <img src="https://user-images.githubusercontent.com/629429/151510865-9fd454f1-fd8c-4df4-b227-a54b87313db4.png" width="290" alt="Doppler">
        </div>
        <b>All your environment variables, in one place</b>
        <div>
          <sub>Stop struggling with scattered API keys, hacking together home-brewed tools, and avoiding access controls. Keep your team and servers in sync with Doppler.</sup>
        </div>
      </a>
    </td>
  </table>
</div>

---

### Getting started
- 🚀 [Install reveal.js](https://revealjs.com/installation)
- 👀 [View the demo presentation](https://revealjs.com/demo)
- 📖 [Read the documentation](https://revealjs.com/markup/)
- 🖌 [Try the visual editor for reveal.js at Slides.com](https://slides.com/)
- 🎬 [Watch the reveal.js video course (paid)](https://revealjs.com/course)

---

### Online Editor
Want to create your presentation using a visual editor? Try the official reveal.js presentation platform for free at [Slides.com](https://slides.com). It's made by the same people behind reveal.js.

<br>
<br>

--- 
<div align="center">
  MIT licensed | Copyright © 2011-2022 Hakim El Hattab, https://hakim.se
</div>
