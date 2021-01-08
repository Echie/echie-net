(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,7,8],{142:function(e,a,t){"use strict";t.r(a);t(152);var A=t(0),n=t.n(A),c=t(155),r=t.n(c);t(159);a.default=function(e){var a=e.name,t=e.logo,A=e.text;return n.a.createElement("div",{className:"Flipper"},n.a.createElement("div",{className:"Flipper-Inner"},n.a.createElement("div",{className:"Flipper-Front"},n.a.createElement(r.a,{fluid:t,alt:a})),n.a.createElement("div",{className:"Flipper-Back"},n.a.createElement("p",null,A))))}},143:function(e,a,t){"use strict";t.r(a);var A=t(0),n=t.n(A),c=t(157),r=t.n(c);t(161);a.default=function(){return n.a.createElement("div",{className:"About"},n.a.createElement("img",{className:"About-Profile",src:r.a,alt:"Profile"}),n.a.createElement("div",{className:"About-First"},n.a.createElement("h3",null,"About"),n.a.createElement("ul",null,n.a.createElement("li",null,"Software Developer at ",n.a.createElement("a",{href:"https://swappie.com/fi/"},"Swappie")),n.a.createElement("li",null,"Motivated by producing value for end users"),n.a.createElement("li",null,"Also interested in DevOps & CI"),n.a.createElement("li",null,"Master of Science (Tech.) from Aalto University"))),n.a.createElement("div",{className:"About-Second"},n.a.createElement("h3",null,"Technologies"),n.a.createElement("ul",null,n.a.createElement("li",null,"Python, Django"),n.a.createElement("li",null,"React, Node"),n.a.createElement("li",null,"C, C++, C#"),n.a.createElement("li",null,"PostgreSQL, MySQL, MongoDB, Redis"),n.a.createElement("li",null,"Google Cloud, AWS, Heroku"),n.a.createElement("li",null,"Docker, Vagrant, Travis, Jenkins"))))}},144:function(e,a,t){"use strict";t.r(a),t.d(a,"logoImage",function(){return s});t(34),t(152);var A=t(158),n=t(0),c=t.n(n),r=t(153),i=t(142),l=(t(162),[{name:"swappie",text:"My responsibilities at Swappie extend from the development of the e-commerce site\n      to various back-end management systems, such as inventory management and order fulfillment."},{name:"dagmar",text:"At Dagmar, I was responsible for the software side of a data analytics team.\n      I improved their cloud hosting setup, developed existing applications and created prototypes\n      for new ones. I also wrote my thesis at Dagmar on an agile piloting project."},{name:"futurice",text:"I started at Futurice as a summer worker, and continued part-time after summer\n      while simultaneously finishing up my university courses.\n      During this time, I completed an integrations project for a customer as the main developer."}]),d=function(e){var a=e.data;return c.a.createElement("div",{className:"Career"},c.a.createElement("h2",null,"CAREER"),l.map(function(e){return c.a.createElement(i.default,{key:e.name,name:e.name,logo:a[e.name].childImageSharp.fluid,text:e.text})}))},s="2224330668";a.default=function(e){return c.a.createElement(r.a,{query:"1093861928",render:function(a){return c.a.createElement(d,Object.assign({data:a},e))},data:A})}},145:function(e,a,t){"use strict";t.r(a);var A=t(0),n=t.n(A);t(163);a.default=function(){return n.a.createElement("div",{className:"HeroBlock"},n.a.createElement("div",{className:"HeroBlock-Image"}),n.a.createElement("h1",{className:"HeroBlock-Title"},"TEEMU HUOVINEN"),n.a.createElement("div",{className:"HeroBlock-Separator"}),n.a.createElement("p",{className:"HeroBlock-Skills"},"Full-Stack Web Developer | Tech enthusiast | Nerd "))}},146:function(e,a,t){"use strict";t.r(a);var A=t(160),n=t(0),c=t.n(n),r=t(153),i=t(164),l=t.n(i);t(165);a.default=function(){return c.a.createElement(r.a,{query:"3053472917",render:function(e){return c.a.createElement(l.a,{className:"HeroImage",fluid:e.hero.childImageSharp.fluid})},data:A})}},149:function(e,a,t){"use strict";t.r(a);var A=t(0),n=t.n(A),c=t(172),r=t.n(c),i=t(145),l=t(146),d=t(143),s=t(144),o=(t(178),t(179),function(){return n.a.createElement("div",{className:"Footer"},n.a.createElement("div",{className:"Footer-Text"},n.a.createElement("p",{className:"small"},"© Teemu Huovinen ",(new Date).getFullYear())),n.a.createElement("div",{className:"Footer-SocialMedia"},n.a.createElement("a",{href:"http://www.github.com/Echie"},n.a.createElement("i",{className:"fa fa-2x fa-github","aria-hidden":"true"})),n.a.createElement("a",{href:"http://www.linkedin.com/in/teemuhuovinen"},n.a.createElement("i",{className:"fa fa-2x fa-linkedin","aria-hidden":"true"}))))});a.default=function(){return n.a.createElement("div",null,n.a.createElement(r.a,{title:"Teemu Huovinen",meta:[{name:"description",content:"Homepage of Teemu Huovinen"}]}),n.a.createElement(l.default,null),n.a.createElement(i.default,null),n.a.createElement(d.default,null),n.a.createElement(s.default,null),n.a.createElement(o,null))}},151:function(e,a,t){var A;e.exports=(A=t(154))&&A.default||A},153:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var A=t(0),n=t.n(A),c=t(4),r=t.n(c),i=(t(33),t(151),n.a.createContext({})),l=function(e){return n.a.createElement(i.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},154:function(e,a,t){"use strict";t.r(a);t(34);var A=t(0),n=t.n(A),c=t(4),r=t.n(c),i=t(55),l=t(2),d=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return t?n.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=d},157:function(e,a,t){e.exports=t.p+"static/profile-dfd4d7b454433c17e59cd2e7354cf32b.jpg"},158:function(e){e.exports={data:{futurice:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQY02MwnOuwynCOQzoDEgDyS/Qm2QgwYAEGM+11gPKFDLgA0MB7QJwKVBRtMNveEkgHA/lbgLgZyA4BitkA6UjD2fauQLEZQHYsEEcZzLI3gTomGMg2BLKnANl5IAO3AAW0gPQCwzn2fkDBqUD2HL2pNgJAdj8QhwP5E4F0KxCXAtUaA+lpQDzfcLaDv8EMO0Wg/AYgXgLEx0EGLlOvNmEF0lOhNiYAcR8Qp4HxXIfVUMOygAaEGUy3U4by80EWA8UCgOwysIFzHKoBA0Jh+7WJ7m0AAAAASUVORK5CYII=",aspectRatio:4.7,src:"/static/468e5e8799d6cd4cbd917663add0edc0/f5496/futurice.png",srcSet:"/static/468e5e8799d6cd4cbd917663add0edc0/e22c9/futurice.png 75w,\n/static/468e5e8799d6cd4cbd917663add0edc0/d3809/futurice.png 150w,\n/static/468e5e8799d6cd4cbd917663add0edc0/f5496/futurice.png 282w",sizes:"(max-width: 282px) 100vw, 282px"}}},dagmar:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAxklEQVQY0zXPP6uBYRzG8XtiNxi9hjMYdFbJpMNAWUVKPRShzGLxt8MoDP6WE2VRGCjTmbwFb8T3fro89amnftd93b/bGGN+EIMXUUT0n9TMjxTiSMCDsLI+pBFU5g7zxBZDzLHAGHt8o6X5CSu0McMGv9jhgAxytnCNLI4ooKLD7pBvgLyK7XwJB3X8oaTiL+Xd2x0Fz7jq9ioamKCIPmra3uYeepV95gWBT+ELN3S0RU9b/WvTkQp72n6KJrp6XVmZkC17A+l3MD50kkWfAAAAAElFTkSuQmCC",aspectRatio:4.0081632653061225,src:"/static/0c949054df0fa58b4bdeb6ef631b070e/fdbb0/dagmar.png",srcSet:"/static/0c949054df0fa58b4bdeb6ef631b070e/e22c9/dagmar.png 75w,\n/static/0c949054df0fa58b4bdeb6ef631b070e/d3809/dagmar.png 150w,\n/static/0c949054df0fa58b4bdeb6ef631b070e/fdbb0/dagmar.png 300w,\n/static/0c949054df0fa58b4bdeb6ef631b070e/b5207/dagmar.png 450w,\n/static/0c949054df0fa58b4bdeb6ef631b070e/59139/dagmar.png 600w,\n/static/0c949054df0fa58b4bdeb6ef631b070e/cb30f/dagmar.png 900w,\n/static/0c949054df0fa58b4bdeb6ef631b070e/16cef/dagmar.png 2946w",sizes:"(max-width: 300px) 100vw, 300px"}}},swappie:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuUlEQVQY043QywpBURTG8VPH6ETqSNrHQHkEM3KZSpKpzLyADFxCKCmSS24Tb+EJ/Vd9ZGjVr312Z+9vtbYXRdEcPXQ9ivUji5j3R3Eu8d0459oWhhXKOjDCAvGfBkmk4CNnzZBGBiWEdt4CO6iyabJWFFjHQE122GKIIx7o44A1ZjjjbixwqcsNFBVY04U9NjhhggtemuCq8ClueNpUFpjHmE3LQhVo5fTtaw3EmhU0qj1XoP/2POEbPBwxxHsN9JMAAAAASUVORK5CYII=",aspectRatio:3.9612903225806453,src:"/static/77c95d4acb2b42ceabd09ee30c5ccb60/fdbb0/swappie.png",srcSet:"/static/77c95d4acb2b42ceabd09ee30c5ccb60/e22c9/swappie.png 75w,\n/static/77c95d4acb2b42ceabd09ee30c5ccb60/d3809/swappie.png 150w,\n/static/77c95d4acb2b42ceabd09ee30c5ccb60/fdbb0/swappie.png 300w,\n/static/77c95d4acb2b42ceabd09ee30c5ccb60/b5207/swappie.png 450w,\n/static/77c95d4acb2b42ceabd09ee30c5ccb60/59139/swappie.png 600w,\n/static/77c95d4acb2b42ceabd09ee30c5ccb60/cb30f/swappie.png 900w,\n/static/77c95d4acb2b42ceabd09ee30c5ccb60/3c4f9/swappie.png 1842w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},160:function(e){e.exports={data:{hero:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABOnnbcoh0f//EABsQAAICAwEAAAAAAAAAAAAAAAECABIDEzEU/9oACAEBAAEFAlcqd7z0ZBLWg4e//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAECERAhYXH/2gAIAQEABj8CtNx8LUjUjmf/xAAcEAEAAQQDAAAAAAAAAAAAAAABABEhMWEQQVH/2gAIAQEAAT8hqFjluhpvSzWdxVBgYJdU+cX/2gAMAwEAAgADAAAAEHPv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qqv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQADAAEFAAAAAAAAAAAAAAEAESExUWFxkaH/2gAIAQEAAT8QSP8AdlnvfMY3UGirxOGyt1b9l94aHglQAdodEl3Vep//2Q==",aspectRatio:1.5,src:"/static/21aa40658d9ac40c95ef9010fdfd09a7/99a88/hero.jpg",srcSet:"/static/21aa40658d9ac40c95ef9010fdfd09a7/ac6ef/hero.jpg 1040w,\n/static/21aa40658d9ac40c95ef9010fdfd09a7/99a88/hero.jpg 1125w",srcWebp:"/static/21aa40658d9ac40c95ef9010fdfd09a7/7f70d/hero.webp",srcSetWebp:"/static/21aa40658d9ac40c95ef9010fdfd09a7/17cca/hero.webp 1040w,\n/static/21aa40658d9ac40c95ef9010fdfd09a7/7f70d/hero.webp 1125w",sizes:"(max-width: 1125px) 100vw, 1125px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-3b73cb3aa0b06eab05c7.js.map