(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),u=n(3),r=n.n(u),o=n(4),s=n(5),i=n(7),d=n(6),l=(n(13),n(14),n(1)),m=n.n(l),b=(m.a.number.isRequired,m.a.func.isRequired,m.a.func.isRequired,m.a.func.isRequired,function(e){var t=e.count,n=e.addOne,a=e.add100,u=e.increase;return c.a.createElement("div",{className:"counter"},c.a.createElement("h1",{className:"counter__header"},"Count: ".concat(t)),c.a.createElement("div",{className:"counter__buttons"},c.a.createElement("button",{type:"button",onClick:n,className:"counter__button"},"Add 1"),c.a.createElement("button",{type:"button",onClick:a,className:"counter__button"},"Add 100"),c.a.createElement("button",{type:"button",onClick:u,className:"counter__button"},"Increase")))}),f=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(e=t.call.apply(t,[this].concat(c))).state={count:0},e.addOne=function(){e.setState((function(e){return{count:e.count+1}}))},e.add100=function(){e.setState((function(e){return{count:e.count+100}}))},e.increase=function(){e.state.count%5===0&&e.add100(),e.addOne()},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.count;return c.a.createElement("div",{className:"app"},c.a.createElement(b,{count:e,addOne:this.addOne,add100:this.add100,increase:this.increase}))}}]),n}(c.a.Component);r.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.1f8d085f.chunk.js.map