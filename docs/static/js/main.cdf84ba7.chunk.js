(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,i){e.exports={handler:"Handler_handler__3neoW",active:"Handler_active__39WiA",notActive:"Handler_notActive__2X_ec",slideIn:"Handler_slideIn__3ZeuT",slideOut:"Handler_slideOut__21Zli"}},11:function(e,t,i){e.exports={wrapper:"ContentPreview_wrapper__20t5V",header:"ContentPreview_header__17vmp",preview:"ContentPreview_preview__ofdGj",previewsWrapper:"ContentPreview_previewsWrapper__3tSol",previewVideo:"ContentPreview_previewVideo__1YCV3"}},130:function(e,t,i){},131:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(6),h=i.n(n),r=(i(61),i(5)),o=i(7),s=i.n(o),c=i(8),d=i.n(c),l=i(1),p=i(19).details;var g=function(e){var t=Object(a.useState)([]),i=Object(r.a)(t,2),n=i[0],h=i[1];function o(){h([])}return Object(l.jsx)("div",{className:d.a.detailsContainer,style:{transform:"translate("+e.transform+")"},children:Object(l.jsx)("div",{className:d.a.details,children:p.map((function(e,t){var i=e.type,a=e.detail,r=e.url,s=!(n.length>0&&!n[t]);return Object(l.jsxs)("a",{href:r,target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("div",{className:s?"".concat(d.a.icon," ").concat(d.a.iconActive):"".concat(d.a.icon," ").concat(d.a.iconNotActive),onMouseEnter:function(){return function(e){var t=[!1,!1,!1,!1,!1];t[e]=!0,h(t)}(t)},onMouseOut:o,style:{WebkitMaskImage:"url(/icons/"+i+"Icon.png)",maskImage:"url(/icons/"+i+"Icon.png)"}}),s&&n.length>0&&Object(l.jsx)("div",{className:d.a.hoverDetails,children:a})]},i)}))})})},u=i(9),m=i.n(u);var w=function(e){var t=Object(a.useState)(e.show),i=Object(r.a)(t,2),n=i[0],h=i[1];return Object(a.useEffect)((function(){e.show&&h(!0)}),[e.show]),n&&Object(l.jsxs)("div",{className:m.a.wrapper,children:[Object(l.jsx)("div",{className:m.a.overlay,onAnimationEnd:function(){e.show||h(!1)},style:{animation:"".concat(e.show?m.a.fadeIn:m.a.fadeOut," 1s ease")}}),Object(l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:m.a.backgroundVideo,style:{animation:"".concat(e.show?m.a.fadeIn:m.a.fadeOut," 1s ease")},children:Object(l.jsx)("source",{src:"/media/bgVideo.mov",type:"video/mp4"})})]})},f=i(49),v=i.n(f);var j=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:v.a.textWrapper,children:"HERE IS TEXT ABOUT ME"})})},b=i(11),y=i.n(b);var x=function(e){var t=parseFloat(e.width)-2,i=parseFloat(e.height)-9;return Object(l.jsxs)("div",{className:y.a.wrapper,style:{width:e.width+"vw",height:e.height+"vh",top:e.top,left:e.left,transform:"translate("+e.transformX+","+e.transformY+")"},children:[Object(l.jsx)("div",{className:y.a.header,onClick:function(){return e.previewClicked(e.categoryIndex,0)},children:e.title}),Object(l.jsx)("div",{className:y.a.previewsWrapper,style:{width:t+"vw",height:i+"vh",flexDirection:e.flexDirection},children:e.previews.map((function(t){var i=t.width,a=t.height,n=t.bottom,h=t.left,r=t.url,o=t.index;return Object(l.jsx)("div",{className:y.a.preview,style:{width:i,height:a,bottom:n,left:h},onClick:function(){return e.previewClicked(e.categoryIndex,o)},children:Object(l.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,className:y.a.previewVideo,style:{zIndex:2},children:Object(l.jsx)("source",{src:"/media/"+r,type:"video/mp4"})},r)},o)}))})]})},_=i(4),O=i.n(_),I=i(10),k=i.n(I);var P=function(e){var t=Object(a.useState)(e.show),i=Object(r.a)(t,2),n=i[0],h=i[1];Object(a.useEffect)((function(){e.show&&h(!0)}),[e.show]);var o=e.isActive?"".concat(k.a.handler," ").concat(k.a.active):"".concat(k.a.handler," ").concat(k.a.notActive);return n&&Object(l.jsx)("div",{className:o,onClick:function(){e.changeCategory(e.index),e.setItemIndex(0)},onAnimationEnd:function(){e.show||h(!1)},style:{transform:"translate(0, "+e.top+")",animation:"".concat(e.show?k.a.slideIn:k.a.slideOut," 1s")},children:e.title},"hanlder"+e.title)},A=i(19).contentPreview.map((function(e){return e.title}));var N=function(e){return Object(l.jsx)("div",{children:A.map((function(t,i){return Object(l.jsx)(P,{show:e.show,title:t,isActive:i===e.categoryIndex,top:70*-i+"px",changeCategory:e.changeCategory,setItemIndex:e.setItemIndex,index:i})}))})},T=i(51),S=i(22),D=i.n(S),M=i(16),C=i.n(M);var B=function(e){var t=e.isActive?"".concat(C.a.button," ").concat(C.a.active):"".concat(C.a.button," ").concat(C.a.notActive);return Object(l.jsx)("div",{className:t,onClick:function(){return e.setItemIndex(e.index)}})};var H=function(e){return Object(l.jsxs)("div",{className:D.a.wrapper,style:{width:20*(e.count+2)+"px"},children:[Object(l.jsx)("div",{className:D.a.arrowLeft,onClick:function(){return e.setItemIndex((e.activeIndex-1+e.count)%e.count)}}),Object(T.a)(Array(e.count)).map((function(t,i){return Object(l.jsx)(B,{isActive:i===e.activeIndex,setItemIndex:e.setItemIndex,index:i})})),Object(l.jsx)("div",{className:D.a.arrowRight,onClick:function(){return e.setItemIndex((e.activeIndex+1)%e.count)}})]})},E=i(34),G=i(50),W=i(23);i(130);var q=function(e){var t=e.gallery.map((function(t){var i=t.path,a=t.width,n=t.height;return{src:"/media"+e.folder+"/"+i,width:a,height:n}})),i=Object(a.useState)(0),n=Object(r.a)(i,2),h=n[0],o=n[1],s=Object(a.useState)(!1),c=Object(r.a)(s,2),d=c[0],p=c[1],g=Object(a.useCallback)((function(e,t){t.photo;var i=t.index;o(i),p(!0)}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)(G.a,{photos:t,targetRowHeight:140,margin:4,direction:"row",onClick:g}),Object(l.jsx)(W.b,{children:d?Object(l.jsx)(W.a,{onClose:function(){o(0),p(!1)},children:Object(l.jsx)(W.c,{currentIndex:h,views:t.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})}):null})]})},L=i(19).contentPreview;var V=function(e){var t=Object(a.useState)(e.show),i=Object(r.a)(t,2),n=i[0],h=i[1],o=Object(a.useRef)(),s=Object(a.useRef)();Object(a.useEffect)((function(){e.show&&h(!0)}),[e.show]);var c=e.categoryIndex>=0?L[e.categoryIndex].items:L[0].items,d=c[e.itemIndex];return n&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:O.a.wrapper,children:[Object(l.jsxs)("a",{href:d.link,target:"_blank",rel:"noreferrer",ref:s,className:O.a.header,onAnimationEnd:function(){e.show||h(!1)},onMouseEnter:function(){d.link&&(o.current.style.opacity=1,s.current.style.color="rgb(230, 230, 255)",s.current.style.cursor="pointer")},onMouseLeave:function(){o.current.style.opacity=0,s.current.style.color="rgb(255, 255, 255)",s.current.style.cursor="auto"},style:{animation:"".concat(e.show?O.a.fadeIn:O.a.fadeOut," 1s ease")},children:[Object(l.jsx)("div",{children:d.title}),Object(l.jsx)("div",{className:O.a.link,ref:o,style:{maskImage:"url(/icons/linkIcon.png)",webkitMaskImage:"url(/icons/linkIcon.png)"}})]}),"\xc9 de Manh\xe3"===d.title?Object(l.jsx)("div",{className:O.a.header,style:{left:"64%"},children:d.title2}):null,Object(l.jsx)("div",{className:O.a.gallery,style:{animation:"".concat(e.show?O.a.fadeIn:O.a.fadeOut," 1s ease")},children:"\xc9 de Manh\xe3"!==d.title?Object(l.jsx)(q,{gallery:d.gallery,folder:d.folder}):Object(l.jsx)("div",{className:O.a.spotify,style:{animation:"".concat(e.show?O.a.fadeIn:O.a.fadeOut," 1s ease")},children:Object(l.jsx)("iframe",{className:O.a.spotifyVideo,title:d.cover2,src:d.cover2})})}),Object(l.jsx)("div",{className:O.a.description,style:{left:"32%",animation:"".concat(e.show?O.a.fadeIn:O.a.fadeOut," 1s ease")},children:d.leftParagraph}),Object(l.jsx)("div",{className:O.a.description,style:{left:"64%",animation:"".concat(e.show?O.a.fadeIn:O.a.fadeOut," 1s ease")},children:d.rightParagraph}),Object(l.jsx)("div",{className:O.a.demo,style:{animation:"".concat(e.show?O.a.fadeIn:O.a.fadeOut," 1s ease")},children:Object(l.jsx)("iframe",{className:O.a.previewVideo,title:d.cover,src:d.cover})})]}),Object(l.jsx)(N,{show:e.show,categoryIndex:e.categoryIndex,changeCategory:e.setCategoryIndex,setItemIndex:e.setItemIndex}),Object(l.jsx)(H,{count:c.length,activeIndex:e.itemIndex,setItemIndex:e.setItemIndex})]})},F=i(19),R=F.handlers.left,z=F.handlers.right,J=F.contentPreview;var U=function(){var e=Object(a.useState)(z.initial),t=Object(r.a)(e,2),i=t[0],n=t[1],h=Object(a.useState)(R.initial),o=Object(r.a)(h,2),c=o[0],d=o[1],p=Object(a.useState)("0"),u=Object(r.a)(p,2),m=u[0],f=u[1],v=Object(a.useState)("0, 0"),b=Object(r.a)(v,2),y=b[0],_=b[1],O=Object(a.useState)("0, 0"),I=Object(r.a)(O,2),k=I[0],P=I[1],A=Object(a.useState)(!1),N=Object(r.a)(A,2),T=N[0],S=N[1],D=Object(a.useState)(-1),M=Object(r.a)(D,2),C=M[0],B=M[1],H=Object(a.useState)(0),E=Object(r.a)(H,2),G=E[0],W=E[1],q=Object(a.useState)(!1),L=Object(r.a)(q,2),F=L[0],U=L[1],Y=Object(a.useRef)();function X(e,t){U(!1),B(e),W(t),_("40vw, 0"),P("-42vw, 0")}return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:s.a.background,children:[Object(l.jsx)(w,{show:!T}),Object(l.jsx)("div",{className:s.a.header,style:{transform:"translate("+y+")"},children:Object(l.jsx)("div",{onClick:function(){d(R.initial),n(z.initial),f(0),S(!1),_("0, 0"),P("0, 0"),U(!1),B(-1),Y.current.style.transform="translateX(0)"},style:{cursor:"pointer"},children:"Gilad Schreiber"})}),Object(l.jsx)(g,{transform:k})]}),Object(l.jsx)("div",{className:s.a.rightHalf,style:{right:"-60vw"},ref:Y,children:Object(l.jsx)(j,{})}),J.map((function(e,t){var i=e.title,a=e.width,n=e.height,h=e.top,r=e.left,o=e.topBefore,s=e.leftBefore,c=e.previews;return Object(l.jsx)(x,{title:i,width:a,height:n,top:o,left:s,transformY:F?h:0,transformX:F?r:0,previews:c,previewClicked:X,categoryIndex:t},i)})),Object(l.jsx)("div",{className:"".concat(s.a.handle," ").concat(s.a.rightHandle),onMouseEnter:function(){i!==z.clicked&&n(z.hovered)},onMouseOut:function(){i!==z.clicked&&n(z.initial)},onClick:function(){n(z.clicked),Y.current.style.transform="translateX(-60vw)",S(!0),_("-40vw, 0"),P("-42vw, 0")},style:{right:i},children:"WHO I AM"},"rightHandle"),Object(l.jsx)("div",{className:"".concat(s.a.handle," ").concat(s.a.leftHandle),onMouseEnter:function(){c!==R.clicked&&d(R.hovered)},onMouseOut:function(){c!==R.clicked&&d(R.initial)},onClick:function(){_("0, 40vh"),Y.current.style.transform="translateX(0)",d(R.clicked),n(z.clicked),f(R.clicked),S(!0),U(!0),P("0, -42vh")},style:{left:c},children:"WHAT I DO"},"leftHandle"),Object(l.jsx)("div",{className:"".concat(s.a.handle," ").concat(s.a.what),style:{left:m},children:"WHAT"}),Object(l.jsx)(V,{show:C>-1,categoryIndex:C,itemIndex:G,setCategoryIndex:B,setItemIndex:W})]})};var Y=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(U,{})})};h.a.render(Object(l.jsx)(Y,{}),document.getElementById("root"))},16:function(e,t,i){e.exports={button:"NevButton_button__1rvw0",active:"NevButton_active__2wnVx",notActive:"NevButton_notActive__29str"}},19:function(e){e.exports=JSON.parse('{"details":[{"type":"phone","detail":"+972 505 737 493","url":""},{"type":"mail","detail":"giladshr60@gmail.com","url":""},{"type":"instagram","detail":"giladshraiber","url":"https://www.instagram.com/giladschraiber/"},{"type":"linkdin","detail":"gilad-schreiber","url":"https://il.linkedin.com/in/gilad-schreiber-9bab30162"},{"type":"github","detail":"giladschraiber","url":"https://github.com/GiladSchreiber"}],"handlers":{"left":{"initial":"-88px","hovered":"0","clicked":"-180px"},"right":{"initial":"-72px","hovered":"0","clicked":"-180px"}},"contentPreview":[{"title":"INTERACTIVE","width":"69.5","height":"39","left":"0","top":"40vh","leftBefore":"0.5vw","topBefore":"-39.5vh","previews":[{"width":"28vw","height":"30vh","bottom":"0","left":"0","url":"/interactive/0.mov","index":0},{"width":"19vw","height":"30vh","bottom":"0","left":"29vw","url":"/interactive/1.mov","index":1},{"width":"18.5vw","height":"30vh","bottom":"0","left":"49vw","url":"/interactive/2.mov","index":2}],"items":[{"title":"Diary-Travel","folder":"/interactive/diary-travel","gallery":[{"path":"6.jpeg","width":1600,"height":1200},{"path":"5.jpeg","width":1600,"height":1200},{"path":"4.jpg","width":2048,"height":1365},{"path":"2.jpg","width":2048,"height":1365},{"path":"3.jpg","width":2048,"height":1365},{"path":"1.jpg","width":2048,"height":1365},{"path":"0.jpg","width":2048,"height":1365}],"cover":"https://youtube.com/embed/mUTHAPwfVns","link":"http://diary-travel.com","leftParagraph":"This platform suggests a new method of wandering in personal diaries which is not chronological necessarily, but according to different aspects as time, place, sound, emotion and topic. Lose a bit of the romance of writing diaries by hand, and adopt technology to gain a stronger experience.","rightParagraph":"Mentor: Amitai Gilad\\nTechniques: Machine Learning, NLP, data analysis, UI, Web Development\\nPlatforms: Python, React"},{"title":"Modern Rebellion","folder":"/interactive/rabel","gallery":[{"path":"0.jpg","width":2872,"height":1488},{"path":"9.jpg","width":1602,"height":1580},{"path":"4.jpg","width":2052,"height":1590},{"path":"1.jpg","width":2486,"height":1528}],"cover":"https://youtube.com/embed/rJUjVOmN3wE","link":"https://giladschreiber.github.io/modernRebellion/","leftParagraph":"What is considered as a rebellion these days? Choose five desturbing topics, and reveal which kind of rabel you are. Expose refernces and influences of different types relating to each rabel. The rebales have been chosen from a questioneire we\'ve sent to a diveresed audience of eighty people.","rightParagraph":"Guide: Roni Levit\\nArt: Shay Sharafi\\nWeb: Gilad Schreiber\\nTechnique: data visualization, web\\nPlatforms: html, css, js, json"},{"title":"Deform","folder":"/interactive/deform","gallery":[{"path":"1.jpg","width":880,"height":1037},{"path":"3.jpg","width":2618,"height":3385},{"path":"2.jpg","width":998,"height":945},{"path":"7.jpg","width":1390,"height":1080},{"path":"5.jpg","width":4032,"height":3024},{"path":"8.jpg","width":1200,"height":1600}],"cover":"https://youtube.com/embed/yb1FrUftDgM","link":"https://github.com/gal-zemach/HCI-final-project","leftParagraph":"Our project goal is recreating the experience of shaping material with your hands.\\n\\nThe physical agent was printed in FDM, containing eight capacitive sensors on the vase edges made of aluminium foil and resistors. Data from each sensor is analyzed and deforms different sector on the sphare.","rightParagraph":"Guide: Amit Zoran\\nPartner: Gal Zemach\\nTechniques: 3d modeling,\\nparametric design\\nPlatforms: Arduino, Python,\\nGrasshopper, Rhino"}]},{"title":"VIDEO & SOUND","width":"29.0","height":"59","left":"-29.25vw","top":"0","leftBefore":"100vw","topBefore":"0.5vh","previews":[{"width":"27vw","height":"30vh","bottom":"20vh","left":"0","url":"/video/0.mov","index":1},{"width":"13vw","height":"19vh","bottom":"0","left":"0","url":"/video/1.mov","index":3},{"width":"13.25vw","height":"19vh","bottom":"0","left":"13.75vw","url":"/video/2.mov","index":0}],"items":[{"title":"Dream Orchestra","folder":"/video/dream","gallery":[{"path":"1.jpg","width":640,"height":360},{"path":"0.jpg","width":640,"height":360},{"path":"3.jpg","width":640,"height":360},{"path":"2.jpg","width":640,"height":360},{"path":"4.jpg","width":640,"height":360}],"cover":"https://youtube.com/embed/rngNnpwfKsc","link":"https://www.youtube.com/watch?v=rngNnpwfKsc&ab_channel=GiladSchreiber","leftParagraph":"During lockdown days of Covid 19, I\'ve asked various artists to improvize solely to the first notes of Arabesque by Debussy, while they think of the concept DREAM. I\'ve composed them all together into one piece.\\n\\nMentor: Didi Erez","rightParagraph":"Piano: Noam Shochat\\nFlute: Joe Melnicove\\nContra Bass: Maria Tasioula\\nSaxophone: Shani Slowes\\nViolin: Itamar Ben Dahan\\nMix & Sound: Neria Saada\\nDance: Jonathan Brenner, Shay Alharal"},{"title":"Vocal ID","folder":"/video/soundID","gallery":[{"path":"8.jpg","width":3114,"height":2160},{"path":"4.jpg","width":2592,"height":2160},{"path":"7.jpg","width":2955,"height":2160},{"path":"6.jpg","width":3840,"height":2160},{"path":"3.jpg","width":3840,"height":2160},{"path":"0.jpg","width":2160,"height":2160}],"cover":"https://youtube.com/embed/fB6NeeCZIME","link":"https://youtu.be/fB6NeeCZIME","leftParagraph":"The Brazilian beats have serrounded me in my childhood, as I practiced Capoeira since I was ten years old. They\'ve became part of my native sounds and vocal ID.","rightParagraph":"Mentor: Didi Erez\\nPhotographer: Gal Baruch\\nSound: Barbatuques - Bai\xe3o Destemperado"},{"title":"Pasta Guide","folder":"/video/pasta","gallery":[{"path":"8.jpg","width":1920,"height":1080},{"path":"4.jpg","width":1920,"height":1080},{"path":"6.jpg","width":1920,"height":1080},{"path":"2.jpg","width":2268,"height":4032},{"path":"3.jpg","width":1500,"height":1080},{"path":"0.jpg","width":4032,"height":2268}],"cover":"https://youtube.com/embed/mXNwmo6839U","link":"https://www.youtube.com/watch?v=mXNwmo6839U&ab_channel=GiladSchreiber","leftParagraph":"A surrealist video art explaining how to make pasta, based on Tasty viral food videos on social media.","rightParagraph":"Mentor: Ari Amit\\nPartner: Jon Shamir"},{"title":"The Curious Incident of the Dog","folder":"/video/curiousDog","gallery":[{"path":"4.jpg","width":1920,"height":1080},{"path":"2.jpg","width":1920,"height":1080},{"path":"3.jpg","width":1920,"height":1080},{"path":"1.jpg","width":1920,"height":1080},{"path":"0.jpg","width":1920,"height":1080}],"cover":"https://youtube.com/embed/lTML3q_yPog","link":"https://www.youtube.com/watch?v=lTML3q_yPog&ab_channel=GiladSchreiber","leftParagraph":"A title sequance to a fictional series based on the book \'The Curious Incident of the Dog in the Night-Time\', a mystery novel by British writer Mark Haddon (2003).","rightParagraph":"Mentor: Ari Amit\\nPartner: Hadar Dotan\\nSound: Alt J - Pleader"},{"title":"Follow The Devil\'s Drool","folder":"/video/drool","gallery":[{"path":"4.jpg","width":1920,"height":1080},{"path":"5.jpg","width":2534,"height":2916},{"path":"2.jpg","width":1920,"height":1080},{"path":"3.jpg","width":1920,"height":1080},{"path":"1.jpg","width":1920,"height":1080},{"path":"0.jpg","width":5184,"height":3456}],"cover":"https://youtube.com/embed/SrxT_qKEiuk","link":"https://youtu.be/SrxT_qKEiuk","leftParagraph":"A self-interpretation and production for the short story \'The Devil\'s Drool\' by Julio Cort\xe1zar, 1959, which explores the artist\'s relationship to his art and to the reader and examines the narrator\'s role in this relationship.","rightParagraph":"Guide: Michal Heimann\\nProduction Assistant: Yaeli Feldman\\nActors: Noam Shochat, Ofri Fox, Eilon Farber, Gilad Ben Tal\\nSound: The Mole / Hans Zimmer"}]},{"title":"DESIGN & CRAFTS","width":"29","height":"39","left":"-29.25vw","top":"0","leftBefore":"100vw","topBefore":"60.5vh","previews":[{"width":"27vw","height":"30vh","bottom":"0","left":"0","url":"/design/0.mov","index":0}],"items":[{"title":"Drawings","folder":"/design/drawings","gallery":[{"path":"4.jpg","width":3852,"height":1166},{"path":"5.jpg","width":2179,"height":3045},{"path":"7.jpg","width":1360,"height":1928},{"path":"6.jpg","width":4032,"height":1929},{"path":"2.jpg","width":1000,"height":1000},{"path":"3.jpg","width":2958,"height":6523},{"path":"1.jpg","width":4032,"height":3024},{"path":"0.jpg","width":3686,"height":2576}],"link":"","leftParagraph":"During my studies I\'ve experienced different types and techniques of drawing. Most of my works are figurative, trying to tell a story of their own.","rightParagraph":"Techniques: Acril paints, water colors, ink, prints and more."},{"title":"Craft","folder":"/design/craft","gallery":[{"path":"4.jpg","width":3024,"height":4032},{"path":"5.jpg","width":1600,"height":1200},{"path":"2.jpg","width":639,"height":1211},{"path":"3.jpg","width":3024,"height":4032},{"path":"1.jpg","width":1125,"height":792},{"path":"0.jpg","width":915,"height":1145}]},{"title":"Fiction","folder":"/design/fiction","gallery":[{"path":"0.jpg","width":1170,"height":1170},{"path":"4.jpg","width":2138,"height":1710},{"path":"2.jpg","width":2554,"height":1700},{"path":"3.jpg","width":2134,"height":1708},{"path":"1.jpg","width":2552,"height":1700}],"cover":"https://youtube.com/embed/T2j_aBf7lDM","link":"https://giladschreiber.github.io/DouglasAdams/","leftParagraph":"Fiction is a book publisher, which gives the reader an experience beyond reality. The main book genre is scince fiction, fantasy and fictional stories.\\nThe design process includes a whole process of defining the character of the publisher, brending, designing a logo, a series of three books and a website.","rightParagraph":"Mentor: Anat Katsir\\nTechniques: brending, typography, \\ndesign, web developement"},{"title":"From Wikipedia into a booklet","folder":"/design/wiki","gallery":[{"path":"4.jpg","width":1208,"height":1630},{"path":"2.jpg","width":2416,"height":1630},{"path":"3.jpg","width":2418,"height":1632},{"path":"1.jpg","width":1208,"height":1688},{"path":"0.jpg","width":2412,"height":1632}],"leftParagraph":"I\'ve turned the information of the famous English film director Alferd Hitchcock (1899 - 1980), into a booklet which tries to imitate this special character with proper design.","rightParagraph":"The booklet has different windows revealing a glimpse to serrounding pages, increasing the mystery and changing the composition in every turning page.\\n\\nMentor: Meir Sadan"},{"title":"Asaf Avidan","folder":"/design/asaf","gallery":[{"path":"4.jpg","width":600,"height":600},{"path":"2.jpg","width":1920,"height":1080},{"path":"3.jpg","width":1200,"height":1680},{"path":"1.jpg","width":3456,"height":5184},{"path":"0.jpg","width":4116,"height":3221}],"cover":"https://youtube.com/embed/KhT6eOAU03Y","leftParagraph":"Brending to the Israeli artist Asaf Avidan, icluding designing a logo, invitations to concerts and Spotify cover.\\nMy main Idea was playing between the roughness of the typography, to the delicacy of the textures.","rightParagraph":"Mentor: Adi Tako\\nTechniques: lettering, photography, \\nimage making, crafts"}]},{"title":"ANIMATION & 3D","width":"29.0","height":"59","left":"30vw","top":"0","leftBefore":"-29.5vw","topBefore":"40.5vh","previews":[{"width":"11.5vw","height":"19vh","bottom":"31vh","left":"0","url":"/animation/1.mov","index":2},{"width":"27vw","height":"30vh","bottom":"0","left":"0","url":"/animation/2.mov","index":0},{"width":"15vw","height":"19vh","bottom":"31vh","left":"12vw","url":"/animation/0.mov","index":3}],"items":[{"title":"How To Grow A Succulent","folder":"/animation/succulent","gallery":[{"path":"4.jpg","width":1682,"height":2063},{"path":"5.jpg","width":1270,"height":1614},{"path":"6.jpg","width":1825,"height":2160},{"path":"2.jpg","width":1574,"height":2088},{"path":"3.jpg","width":2596,"height":2160},{"path":"0.jpg","width":3840,"height":2160}],"cover":"https://youtube.com/embed/urLyjN5iCs8","link":"https://www.youtube.com/watch?v=urLyjN5iCs8&ab_channel=GiladSchreiber","leftParagraph":"The inspiration came up during one of the many covid lockdowns, when me and my plants started to have a special and commiting relationship. \\nThis guide insructs you how to take care of your succulents, combining 3d model with video.","rightParagraph":"Guide: Eric Lerner\\nTechnique: 3d modeling, video and sound\\nPlatforms: Cinema 4d, Premiere Pro"},{"title":"Welcome to the Wino","folder":"/animation/wino","gallery":[{"path":"4.jpg","width":1440,"height":1080},{"path":"3.jpg","width":1440,"height":1080},{"path":"1.jpg","width":1440,"height":1080},{"path":"0.jpg","width":1440,"height":1080}],"cover":"https://youtube.com/embed/vD6uSxH82lg","link":"https://youtu.be/vD6uSxH82lg","leftParagraph":"The Wino is a local pub in Rehavia, Jerusalem. I\'ve been working in this bar as a bartender and also managed it from 2018 to 2022. As a tribute to this lovely place, I revealed a few minutes from my personal experience there, where I\'ve been spending many nights.","rightParagraph":"Mentor: Amitai Gilad\\nTechniques: 3d modeling, video & sound\\nPlatforms: Cinema 4d, Premiere Pro"},{"title":"\xc9 de Manh\xe3","title2":"Play Time","folder":"/animation/playTime","cover":"https://youtube.com/embed/paDcnYGizlw","folder2":"/animation/spotify","cover2":"https://youtube.com/embed/MAhGYoqowhU","link":"","leftParagraph":"A Spotify cover to the amazing song \'\xc9 de Manh\xe3\' of the Brazilian artist Maria Bethania (1965).","rightParagraph":"What\'s happening when the children go to sleep? Just some toys playing to the beat."}]},{"title":"GAMING","width":"39.75","height":"39","left":"0","top":"-39.5vh","leftBefore":"30.25vw","topBefore":"100vh","previews":[{"width":"18.5vw","height":"30vh","bottom":"0","left":"0","url":"/gaming/0.mov","index":1},{"width":"18.5vw","height":"30vh","bottom":"0","left":"19.5vw","url":"/gaming/1.mov","index":0}],"items":[{"title":"The Last Plast","folder":"/gaming/lastPlast","gallery":[{"path":"0.jpg","width":1214,"height":755},{"path":"8.jpg","width":1238,"height":876},{"path":"9.jpg","width":616,"height":834},{"path":"4.jpg","width":1932,"height":1568},{"path":"5.jpg","width":1182,"height":728},{"path":"7.jpg","width":1476,"height":1512},{"path":"2.jpg","width":1112,"height":646},{"path":"1.jpg","width":908,"height":1068}],"cover":"https://youtube.com/embed/55q3iyMJ6Z8","link":"https://giladschreiber.itch.io/the-last-plast","leftParagraph":"Based on Xonix game made in 1984 by Ilan Raab and Dani Katz, help the blue fallow to capture areas while avoiding jellyfish (or capture them inside if you can),  with some additional powerups and obstacles to upgrade your experience.","rightParagraph":"Guide: Dani Bacon\\nAnimation: Omri Lechnik\\nArt & Code: Gilad Schreiber \\nTechnique: Claymation\\nPlatform: Unity"},{"title":"Teeth Thieves","folder":"/gaming/teethThieves","gallery":[{"path":"0.jpg","width":4032,"height":3024},{"path":"5.jpg","width":1024,"height":768},{"path":"6.jpg","width":1024,"height":768},{"path":"2.jpg","width":1024,"height":768},{"path":"3.jpg","width":1024,"height":768},{"path":"1.jpg","width":1024,"height":768},{"path":"8.jpg","width":563,"height":592},{"path":"9.jpg","width":4000,"height":2500}],"cover":"https://youtube.com/embed/Wy_Sn06jN9c","link":"https://giladschreiber.itch.io/teeththieves","leftParagraph":"When the teeth fairies have lost their popularity, they had no other choice besides stealing children\'s teeth for living. But a tough competition has started between the fairies. Will you be the first one to capture the golden tooth? \\n ","rightParagraph":"Guide: Lior Bruder\\nArt: Tsuri Furman\\nArt: Hamutal Heinemann \\nCode: Gilad Schreiber \\nPlatform: Unity"}]}]}')},22:function(e,t,i){e.exports={wrapper:"NevButtons_wrapper__2gzpW",arrowRight:"NevButtons_arrowRight__377Lq",arrowLeft:"NevButtons_arrowLeft__IHNz2"}},4:function(e,t,i){e.exports={wrapper:"Item_wrapper__3F817",header:"Item_header__bYd1b",description:"Item_description__2lIL5",gallery:"Item_gallery__1I2LM",demo:"Item_demo__30dIF",previewVideo:"Item_previewVideo__iTyqs",spotifyVideo:"Item_spotifyVideo__128J6",link:"Item_link__20Llu",fadeIn:"Item_fadeIn__2WzT2",fadeOut:"Item_fadeOut__3knCY"}},49:function(e,t,i){e.exports={textWrapper:"AboutMe_textWrapper__3ff7X"}},61:function(e,t,i){},7:function(e,t,i){e.exports={background:"Home_background__mFoG6",rightHalf:"Home_rightHalf__PwnhM",handle:"Home_handle__iXdi0",rightHandle:"Home_rightHandle__2wBDG",leftHandle:"Home_leftHandle__1lBYI",what:"Home_what__2s4m0",header:"Home_header__TduQC"}},8:function(e,t,i){e.exports={detailsContainer:"Details_detailsContainer__3pUH2",hoverDetails:"Details_hoverDetails__3vTlh",fadeIn:"Details_fadeIn__3OY5W",details:"Details_details__1enSu",icon:"Details_icon__1aIM_",iconActive:"Details_iconActive__3r5Ja",iconNotActive:"Details_iconNotActive__265YK"}},9:function(e,t,i){e.exports={wrapper:"Background_wrapper__1F-As",overlay:"Background_overlay__WbYaK",backgroundVideo:"Background_backgroundVideo__14dLK",fadeIn:"Background_fadeIn__LqJqF",fadeOut:"Background_fadeOut__2KodD"}}},[[131,1,2]]]);
//# sourceMappingURL=main.cdf84ba7.chunk.js.map