(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),s=n(4),l=n(1),u=(n(12),n(0)),m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={today:new Date},e.timeTimerId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timeTimerId=window.setInterval((function(){e.setState({today:new Date});var t=e.state.today;console.info(t.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=e.clockName,n=this.props.clockName;t!==n&&console.debug("Renamed from ".concat(t," to ").concat(n))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeTimerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.today.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var v=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.nameTimerId=0,e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.nameTimerId=window.setInterval((function(){e.setState({clockName:d()})}),3300),document.addEventListener("contextmenu",(function(t){t.preventDefault(),e.setState({hasClock:!1}),document.addEventListener("click",(function(){e.setState({hasClock:!0})}))}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.nameTimerId)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),n&&Object(u.jsx)(m,{clockName:t})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.69b3d06c.chunk.js.map