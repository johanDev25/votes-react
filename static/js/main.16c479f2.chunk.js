(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){e.exports=a(23)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(13),o=a.n(n),i=(a(21),a(14)),c=a(5),l=a(6),p=a(8),u=a(7),d=a(9),m=(a(10),a(27)),v=[{id:1,title:"Manejo de dependencias en Ruby con Bundler",description:"Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.",url:"http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/",votes:30,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg"},{id:2,title:"Descubre si Make it Real es para ti",description:"En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisi\xe9ramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten r\xe1pidamente a nuevas tecnolog\xedas y escenarios. En este post vamos a discutir algunas caracter\xedsticas de nuestro programa para que descubras si Make it Real es para ti.",url:"http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/",votes:10,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg"},{id:3,title:"\xbfQu\xe9 es c\xf3digo?",description:"Sem\xe1foros, autom\xf3viles, aviones, aeropuertos, sat\xe9lites, el sistema financiero, gran parte de nuestras vidas depende del c\xf3digo que varias generaciones de programadores han escrito. Pero \xbfqu\xe9 es c\xf3digo? \xbfqui\xe9n lo ejecuta y c\xf3mo? En este post vamos a hacer un recorrido hist\xf3rico para entender c\xf3mo es que la electricidad se convierte en c\xf3digo y c\xf3mo surgieron los lenguajes de programaci\xf3n.",url:"http://blog.makeitreal.camp/que-es-codigo/",votes:60,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/code.jpg"},{id:4,title:"Aprende Desarrollo Web gratis",description:"\xbfQuieres iniciar en el mundo del desarrollo Web y no sabes por d\xf3nde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprender\xe1s a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.",url:"http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/",votes:12,writer_avatar_url:"//a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405",post_image_url:"http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png"}],g=a(24),b=a(25),h=a(26),f=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(g.a,{className:"section"},s.a.createElement(b.a,{md:{span:2,offset:2}},s.a.createElement(h.a,{src:this.props.post_image_url,fluid:!0})),s.a.createElement(b.a,{md:1},s.a.createElement("i",{className:"fas fa-angle-up",onClick:this.props.upVote(this,this.props.id,!0)}),s.a.createElement("div",{className:"vote"},this.props.votes),s.a.createElement("i",{className:"fas fa-angle-down",onClick:this.props.downVote(this,this.props.id,!1)})),s.a.createElement(b.a,{md:5},s.a.createElement("h5",null,s.a.createElement("a",{href:this.props.url},this.props.title)),s.a.createElement("p",null,this.props.description),s.a.createElement("p",null,s.a.createElement("span",{className:"text-muted"},"Escrito por: "),s.a.createElement(h.a,{width:40,height:40,src:this.props.post_image_url,roundedCircle:!0}))),s.a.createElement(b.a,null))}}]),t}(r.Component),y=a(28),j=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(g.a,{className:"order"},s.a.createElement(b.a,{md:{span:2,offset:3}},s.a.createElement("h2",null,"Oder :")),s.a.createElement(b.a,{md:2},s.a.createElement(y.a,{variant:"outline-info",onClick:this.props.asc},"Ascendente")),s.a.createElement(b.a,{md:2},s.a.createElement(y.a,{variant:"info",onClick:this.props.desc},"Desendente")))}}]),t}(r.Component);a(22);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).sortByVotesAsc=function(){var e=a.state._posts;e.sort((function(e,t){return e.votes-t.votes})),a.setState({_posts:e,type:"asc"})},a.sortByVotesDesc=function(){var e=a.state._posts;e.sort((function(e,t){return e.votes-t.votes})).reverse(),a.setState({_posts:e,type:"desc"})},a.state={_posts:[],type:"desc"},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=v.sort((function(e,t){return e.votes-t.votes})).reverse();this.setState({_posts:e})}},{key:"vote",value:function(e,t){var a=this.state._posts,r=1===t?1:-1,s=this.state._posts.map((function(t){return t.id===e?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t,{votes:t.votes+=r}):t}));s="desc"===this.state.type?a.sort((function(e,t){return e.votes-t.votes})).reverse():a.sort((function(e,t){return e.votes-t.votes})),this.setState({_posts:s})}},{key:"render",value:function(){var e=this,t=this.state._posts;return s.a.createElement("div",{className:"App"},s.a.createElement(m.a,null,s.a.createElement("h1",null,"Blog post Populares"),s.a.createElement("hr",null),s.a.createElement(j,{asc:this.sortByVotesAsc,desc:this.sortByVotesDesc}),t.map((function(t){return s.a.createElement(f,{key:t.id,id:t.id,post_image_url:t.post_image_url,votes:t.votes,url:t.url,title:t.title,description:t.description,writer_avatar_url:t.writer_avatar_url,upVote:function(){return e.vote.bind(e,t.id,1)},downVote:function(){return e.vote.bind(e,t.id,-1)}})})),s.a.createElement("hr",null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.16c479f2.chunk.js.map