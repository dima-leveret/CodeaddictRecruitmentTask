(this["webpackJsonpcrt-app"]=this["webpackJsonpcrt-app"]||[]).push([[0],{30:function(e,s,t){},31:function(e,s,t){},37:function(e,s,t){},43:function(e,s,t){},44:function(e,s,t){},45:function(e,s,t){},46:function(e,s,t){},47:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){},50:function(e,s,t){},51:function(e,s,t){},52:function(e,s,t){},53:function(e,s,t){},54:function(e,s,t){},55:function(e,s,t){},56:function(e,s,t){"use strict";t.r(s);var a=t(1),r=t.n(a),c=t(19),n=t.n(c),i=(t(30),t(3)),o=(t(31),t(5)),l=t(6),u=t(9),d=t(8),j=t(13),p=t(7),h=(t(37),t.p+"static/media/openBurger.b7fa771c.svg"),b=t.p+"static/media/closeBurger.70f517ea.svg",m=t(0),O=function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).state={burger:h,bugregMenuClass:"closed-burger-nav"},e.handleOnBurgerClick=function(){e.state.burger===h&&e.setState({burger:b,bugregMenuClass:"opened-burger-nav"}),e.state.burger===b&&e.setState({burger:h,bugregMenuClass:"closed-burger-nav"})},e.handleOnLogoClick=function(){e.state.burger===b&&e.setState({burger:h,bugregMenuClass:"closed-burger-nav"})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("header",{className:this.props.headerColor,children:[Object(m.jsxs)("div",{className:"header-container",children:[Object(m.jsx)(j.b,{to:"/CodeaddictRecruitmentTask",children:Object(m.jsx)("img",{className:"teamify-img",src:this.props.teamifyLogo,alt:"Teamify-logo",onClick:this.handleOnLogoClick})}),Object(m.jsx)("nav",{className:"nav",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)(j.b,{to:"/listOfUsers",style:{textDecoration:"none"},children:Object(m.jsx)("li",{onClick:this.changeHeaderColorToGray,className:"nav-link ".concat(this.props.navLinkColor),children:"Freelancers"})}),Object(m.jsx)("li",{className:"nav-link ".concat(this.props.navLinkColor),children:"About Us"}),Object(m.jsx)("li",{className:"nav-link ".concat(this.props.navLinkColor),children:"Case-Study"}),Object(m.jsx)("li",{className:"nav-link ".concat(this.props.navLinkColor),children:"Reviews"}),Object(m.jsx)("li",{className:"nav-link ".concat(this.props.navLinkColor),children:"Newsletter"})]})}),Object(m.jsxs)("div",{className:"burger-menu",children:[Object(m.jsx)("img",{src:this.state.burger,alt:"burger-menu",className:"burger",onClick:function(){return e.handleOnBurgerClick()}}),Object(m.jsx)("nav",{className:"".concat(this.state.bugregMenuClass," ").concat(this.props.headerColor),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)(j.b,{to:"/listOfUsers",style:{textDecoration:"none"},children:Object(m.jsx)("li",{onClick:function(){return e.handleOnBurgerClick()},className:"nav-link ".concat(this.props.navLinkColor),children:"Freelancers"})}),Object(m.jsx)("li",{onClick:function(){return e.handleOnBurgerClick()},className:"nav-link ".concat(this.props.navLinkColor),children:"About Us"}),Object(m.jsx)("li",{onClick:function(){return e.handleOnBurgerClick()},className:"nav-link ".concat(this.props.navLinkColor),children:"Case-Study"}),Object(m.jsx)("li",{onClick:function(){return e.handleOnBurgerClick()},className:"nav-link ".concat(this.props.navLinkColor),children:"Reviews"}),Object(m.jsx)("li",{onClick:function(){return e.handleOnBurgerClick()},className:"nav-link ".concat(this.props.navLinkColor),children:"Newsletter"})]})})]})]}),Object(m.jsx)("hr",{className:"hr ".concat(this.props.hrColor)})]})}}]),t}(r.a.Component),f=Object(p.b)((function(e){return{teamifyLogo:e.navColor.teamifyLogo,headerColor:e.navColor.headerColor,navLinkColor:e.navColor.navLinksColor,hrColor:e.navColor.hrColor}}),{})(O),v=(t(43),t(16)),g=(t(44),function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).state={inputValue:""},e.handleOnInputChange=function(s){e.setState(Object(v.a)({},s.target.name,s.target.value))},e.handleOnSubmitClick=function(){e.setState({inputValue:""}),console.log(e.state.inputValue)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"subscribe-container",children:[Object(m.jsx)("h2",{children:"Subscribe to get instant alerts"}),Object(m.jsx)("p",{children:"Don\u2019t wanna miss something? Subscribe right now and get special deals and monthly newsletter"}),Object(m.jsxs)("form",{className:"subscribe-input-container",children:[Object(m.jsx)("input",{autoComplete:"off",value:this.state.inputValue,type:"email",placeholder:"Enter your email address",id:"email",name:"inputValue",onChange:this.handleOnInputChange}),Object(m.jsx)("label",{onClick:function(){return e.handleOnSubmitClick()},htmlFor:"email",children:"Submit"})]})]})}}]),t}(r.a.Component)),x=(t(45),t.p+"static/media/twitter.73efc100.svg");var N=function(){return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"footer-container",children:[Object(m.jsx)("p",{className:"teamify-cr",children:"\xa9 Teamify"}),Object(m.jsx)("p",{className:"copyrights",children:"Copyrights @ Teamify, All rights reserved"}),Object(m.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{className:"twitter-logo",src:x,alt:"twitter-logo"})})]})})};var C=function(){return Object(m.jsxs)("div",{className:"subscribe-footer",children:[Object(m.jsx)(g,{}),Object(m.jsx)(N,{})]})},k=t.p+"static/media/teamify.94b42751.svg",w=t.p+"static/media/teamify-white.3ea6506c.svg",y={teamifyLogo:null,headerColor:"",navLinksColor:"",hrColor:""},A="SET_GREEN_COLOR",L="SET_GRAY_COLOR",S="SET_DARK_BLUE_COLOR",D=(t(46),t.p+"static/media/header-striped-circle.da990702.svg"),E=t.p+"static/media/dark-circle.19789d93.svg",V=function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.setGreenColor()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"LP-up",children:[Object(m.jsxs)("div",{className:"LP-up-container",children:[Object(m.jsx)("h2",{children:"Build a team in minutes!"}),Object(m.jsx)("p",{children:"Find a dirrect link to some of the best developers and designers out there!"}),Object(m.jsxs)("form",{className:"explore-input-container",children:[Object(m.jsx)("input",{autoComplete:"off",type:"text",placeholder:"View user profiles and select your provider.",id:"explore",name:"inputValue"}),Object(m.jsx)("label",{htmlFor:"explore",children:"Explore Now"})]})]}),Object(m.jsxs)("div",{className:"circles",children:[Object(m.jsx)("img",{src:D,alt:"striped-circle",className:"striped-circle"}),Object(m.jsx)("img",{src:E,alt:"dark-dircle",className:"dark-circle"})]})]})}}]),t}(r.a.Component),B={setGreenColor:function(){return{type:A}}},F=Object(p.b)((function(e){return{}}),B)(V),P=(t(47),t.p+"static/media/about-us-image.ec2dde68.png"),U=t.p+"static/media/amazon.c8a1d8ca.png",T=t.p+"static/media/airbnb.7a06f09d.png",M=t.p+"static/media/google.8b473dc1.png";var R=function(){return Object(m.jsx)("div",{className:"LP-content",children:Object(m.jsxs)("div",{className:"LP-content-conatiner",children:[Object(m.jsxs)("div",{className:"about-us",children:[Object(m.jsxs)("div",{className:"about-us-text",children:[Object(m.jsx)("p",{className:"about-us-text-1",children:"O1. About Us"}),Object(m.jsx)("h3",{children:"All you need to know about us."}),Object(m.jsx)("p",{className:"about-us-text-short-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus. "})]}),Object(m.jsxs)("div",{className:"about-us-image-and-graf",children:[Object(m.jsx)("div",{className:"about-us-graf",children:Object(m.jsxs)("div",{className:"about-us-graf-info",children:[Object(m.jsxs)("div",{className:"about-us-graf-info-users",children:[Object(m.jsx)("h3",{children:"1200+"}),Object(m.jsx)("p",{children:"Our users are all over the world"})]}),Object(m.jsxs)("div",{className:"about-us-graf-info-companies",children:[Object(m.jsx)("h3",{children:"600+"}),Object(m.jsx)("p",{children:"Companies corporate with us"})]})]})}),Object(m.jsx)("div",{className:"about-us-image-container",children:Object(m.jsx)("img",{src:P,alt:"aboutUsImage",className:"about-us-image"})})]})]}),Object(m.jsxs)("div",{className:"clients",children:[Object(m.jsxs)("div",{className:"clients-images",children:[Object(m.jsx)("div",{className:"amazone-image-container",children:Object(m.jsx)("img",{src:U,alt:"amazoneImage",className:"amazone-image"})}),Object(m.jsxs)("div",{className:"airbnb-and-goole-images",children:[Object(m.jsx)("img",{src:T,alt:"airbnbImage",className:"airbnb-image"}),Object(m.jsx)("img",{src:M,alt:"googleImage",className:"google-image"})]})]}),Object(m.jsxs)("div",{className:"clients-text",children:[Object(m.jsx)("p",{className:"clients-text-2",children:"O2. Clients"}),Object(m.jsx)("h3",{children:"How did Teamify change their world."}),Object(m.jsx)("p",{className:"clients-text-short-description",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus. "})]})]}),Object(m.jsxs)("div",{className:"reviews",children:[Object(m.jsxs)("div",{className:"reviews-text",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"reviews-text-1",children:"O3. Reviews"}),Object(m.jsx)("h3",{children:"What they say about us."})]}),Object(m.jsx)("p",{className:"reviews-text-2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "})]}),Object(m.jsxs)("div",{className:"reviews-cards",children:[Object(m.jsxs)("div",{className:"review-card",children:[Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}),Object(m.jsxs)("div",{className:"avatar-name-position",children:[Object(m.jsx)("div",{className:"avatar-container",children:Object(m.jsx)("div",{className:"avatar"})}),Object(m.jsxs)("div",{className:"name-position",children:[Object(m.jsx)("p",{className:"name",children:"James Moor"}),Object(m.jsx)("p",{className:"position",children:"CEO @ TheCompany"})]})]})]}),Object(m.jsxs)("div",{className:"review-card",children:[Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}),Object(m.jsxs)("div",{className:"avatar-name-position",children:[Object(m.jsx)("div",{className:"avatar-container",children:Object(m.jsx)("div",{className:"avatar"})}),Object(m.jsxs)("div",{className:"name-position",children:[Object(m.jsx)("p",{className:"name",children:"James Moor"}),Object(m.jsx)("p",{className:"position",children:"CEO @ TheCompany"})]})]})]}),Object(m.jsxs)("div",{className:"review-card",children:[Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet orci, sit sagittis sed vel dictum lacus purus.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}),Object(m.jsxs)("div",{className:"avatar-name-position",children:[Object(m.jsx)("div",{className:"avatar-container",children:Object(m.jsx)("div",{className:"avatar"})}),Object(m.jsxs)("div",{className:"name-position",children:[Object(m.jsx)("p",{className:"name",children:"James Moor"}),Object(m.jsx)("p",{className:"position",children:"CEO @ TheCompany"})]})]})]})]})]})]})})};t(48);var q=function(){return Object(m.jsxs)("div",{className:"landing-page",children:[Object(m.jsx)(F,{}),Object(m.jsx)(R,{})]})},G=(t(49),t(4)),I={data:[],isLoading:!1,searchInput:"",user:null},K="SET_USERS",H="SET_LOADING",z="SET_INPUT_VALUE",W="CLEAN_INPUT_VALUE",Y="GET_USER",Q="CLEAN_USER",_=function(e){return{type:Y,payload:e}},X=function(){return{type:Q}},J=function(){return function(e){e({type:H}),fetch("".concat("https://api.github.com","/users")).then((function(e){return e.json()})).then((function(s){var t=Object.keys(s).map((function(e){return Object(G.a)({id:e},s[e])}));e({type:K,payload:t})}))}},Z=(t(50),function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).state={inputValue:""},e.handleOnInputChange=function(s){e.setState(Object(v.a)({},s.target.name,s.target.value))},e.cleanSearchValue=function(){e.props.cleanInputValue(),e.setState({inputValue:""})},e.onSearchedUserClick=function(s){e.setState({inputValue:s})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.setGrayColor()}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"search-container",children:Object(m.jsxs)("div",{className:"user-search",children:[Object(m.jsx)("h3",{children:"Meet your future team!"}),Object(m.jsxs)("form",{className:"search-input-container",children:[Object(m.jsxs)("div",{className:"cross-search",children:[Object(m.jsx)("input",{className:"search-input",autoComplete:"off",type:"text",placeholder:"Search by Nickname",id:"search",name:"inputValue",value:this.state.inputValue,onChange:this.handleOnInputChange}),""!==this.state.inputValue&&Object(m.jsx)("span",{onClick:function(){return e.cleanSearchValue()},className:"cross-container",children:Object(m.jsx)("img",{className:"cross",src:b,alt:"cross"})})]}),Object(m.jsx)("label",{className:"serach-btn",onClick:function(){return e.props.setInputValue(e.state.inputValue)},htmlFor:"search",children:"Search"})]}),Object(m.jsx)("div",{className:"user-searcher-container",children:""!==this.state.inputValue&&this.props.users.filter((function(s){return s.login.replaceAll("[^A-Za-z0-9]","").toLowerCase().includes(e.state.inputValue.toLowerCase())})).map((function(s){return Object(m.jsxs)("div",{onClick:function(){return e.onSearchedUserClick(s.login)},className:"searched-users",children:[Object(m.jsx)("img",{className:"mini-avatar",src:s.avatar_url,alt:"mini-avatar"}),Object(m.jsxs)("p",{className:"searched-user-login",children:[" ",s.login," "]})]},s.id)}))})]})})}}]),t}(r.a.Component)),$={setInputValue:function(e){return{type:z,payload:e}},cleanInputValue:function(){return{type:W}},setGrayColor:function(){return{type:L}}},ee=Object(p.b)((function(e){return{searchInput:e.users.searchInput,users:e.users.data}}),$)(Z),se="data:image/png;base64,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",te=(t(51),function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{onClick:function(){return e.props.getUser(e.props.oneUser)},className:"user-card",children:Object(m.jsxs)("div",{className:"user-card-container",children:[Object(m.jsx)("div",{className:"user-avatar-container",children:this.props.avatar?Object(m.jsx)("img",{className:"user-avatar",src:this.props.avatar,alt:"user.avatar_url"}):Object(m.jsx)("img",{className:"user-avatar",src:se,alt:"user.avatar_url"})}),Object(m.jsx)("p",{className:"user-name",children:"James Beard"}),this.props.nickname?Object(m.jsxs)("p",{className:"user-nickname",children:[" ",this.props.nickname," "]}):Object(m.jsx)("p",{className:"user-nickname",children:" nickname "})]})})}}]),t}(r.a.Component)),ae={getUser:_},re=Object(p.b)((function(e){return{user:e.users.user}}),ae)(te),ce=(t(52),t.p+"static/media/disabled-arrow.9eae8f3d.svg"),ne=t.p+"static/media/active-arrow.f441c91e.svg",ie=function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).state={currentPage:1,usersPerPage:12,pageNumber:[]},e.nextPage=function(){e.setState({currentPage:e.state.currentPage+1})},e.prevPage=function(){e.setState({currentPage:e.state.currentPage-1})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){for(var e=this,s=this.state.currentPage*this.state.usersPerPage,t=s-this.state.usersPerPage,a=this.props.users.slice(t,s),r=Math.ceil(this.props.users.length/this.state.usersPerPage),c=null,n=1;n<=r;n++)this.state.pageNumber.push(n);return Object(m.jsxs)("div",{className:"users",children:[Object(m.jsx)("div",{className:"users-list",children:""!==this.props.searchInput?c=this.props.users.filter((function(s){return s.login===e.props.searchInput})).map((function(e){return Object(m.jsx)(j.b,{to:"/profilePage/".concat(e.login),style:{textDecoration:"none"},children:Object(m.jsx)(re,{avatar:e.avatar_url,nickname:e.login,oneUser:e},e.id)},e.id)})):a.map((function(e){return Object(m.jsx)(j.b,{to:"/profilePage/".concat(e.login),style:{textDecoration:"none"},children:Object(m.jsx)(re,{avatar:e.avatar_url,nickname:e.login,oneUser:e},e.id)},e.id)}))}),Object(m.jsxs)("div",{className:"showing",children:[""!==this.props.searchInput?Object(m.jsxs)("p",{className:"showing-number",children:["Showing: ",c.length,"/",this.props.users.length," "]}):Object(m.jsxs)("p",{className:"showing-number",children:["Showing: ",a.length,"/",this.props.users.length," "]}),Object(m.jsxs)("div",{className:"showing-buttons",children:[1===this.state.currentPage?Object(m.jsx)("button",{className:"btn btn-disabled",disabled:!0,children:Object(m.jsx)("img",{src:ce,alt:"arrowLeft"})}):Object(m.jsx)("button",{className:"btn btn-active",onClick:function(){return e.prevPage()},children:Object(m.jsx)("img",{className:"active-left-arrow",src:ne,alt:"arrowLeft"})}),a.includes(this.props.users[this.props.users.length-1])?Object(m.jsx)("button",{className:"btn btn-disabled",disabled:!0,children:Object(m.jsx)("img",{className:"disabled-right-arrow",src:ce,alt:"arrowRight"})}):Object(m.jsx)("button",{className:"btn btn-active",onClick:function(){return e.nextPage()},children:Object(m.jsx)("img",{src:ne,alt:"arrowRight"})})]})]})]})}}]),t}(r.a.Component),oe={fetchUsers:J},le=Object(p.b)((function(e){return{users:e.users.data,searchInput:e.users.searchInput}}),oe)(ie);var ue=function(){return Object(m.jsxs)("div",{className:"list-of-users-and-search",children:[Object(m.jsx)(ee,{}),Object(m.jsx)(le,{})]})},de=t.p+"static/media/profile-avatar-placeholder.4623d106.png",je=t.p+"static/media/following-icon.80d66106.svg",pe=t.p+"static/media/followers-icon.2666a284.svg",he=(t(53),function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).state={subscriptions:[],followers:[]},e.fetchSunscriptions=function(){e.props.user?fetch("https://api.github.com/users/".concat(e.props.user.login,"/subscriptions")).then((function(e){return e.json()})).then((function(s){var t=Object.keys(s).map((function(e){return Object(G.a)({id:e},s[e])}));e.setState({subscriptions:t}),console.log("subscriptions:",e.state.subscriptions)})):console.log("There is no user subscriptions")},e.fetchFollowers=function(){e.props.user?fetch("https://api.github.com/users/".concat(e.props.user.login,"/followers")).then((function(e){return e.json()})).then((function(s){var t=Object.keys(s).map((function(e){return Object(G.a)({id:e},s[e])}));e.setState({followers:t}),console.log("followers:",e.state.followers)})):console.log("There is no user followers")},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchSunscriptions(),this.fetchFollowers(),this.props.setDarkBlueColor()}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&(this.fetchSunscriptions(),this.fetchFollowers())}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"profile-page-header",children:this.props.user?Object(m.jsxs)("div",{className:"profile-page-heiader-container",children:[Object(m.jsx)("div",{className:"profile-avatar-container",children:Object(m.jsx)("img",{className:"profile-avatar",src:this.props.user.avatar_url,alt:"profile-avatar-placeholder"})}),Object(m.jsxs)("div",{className:"profile-info-container",children:[Object(m.jsxs)("div",{className:"profile-info",children:[Object(m.jsx)("p",{className:"profile-name",children:"James Beard"}),Object(m.jsxs)("p",{className:"profile-nickname",children:[" ",this.props.user.login," "]}),Object(m.jsxs)("div",{className:"profile-follow",children:[Object(m.jsxs)("div",{className:"profile-following-ers",children:[Object(m.jsx)("img",{src:je,alt:"profile-following-icon"}),Object(m.jsxs)("p",{children:[" Following (",this.state.subscriptions.length,") "]})]}),Object(m.jsxs)("div",{className:"profile-following-ers",children:[Object(m.jsx)("img",{src:pe,alt:"profile-followers-icon"}),Object(m.jsxs)("p",{children:[" Followers (",this.state.followers.length,") "]})]})]})]}),Object(m.jsx)("a",{className:"btn-to-github",href:this.props.user.html_url,target:"_blank",rel:"no noreferrer",children:Object(m.jsx)("p",{children:"View on GitHub"})})]})]}):Object(m.jsxs)("div",{className:"profile-page-heiader-container",children:[Object(m.jsx)("div",{className:"profile-avatar-container",children:Object(m.jsx)("img",{className:"profile-avatar",src:de,alt:"profile-avatar-placeholder"})}),Object(m.jsxs)("div",{className:"profile-info-container",children:[Object(m.jsxs)("div",{className:"profile-info",children:[Object(m.jsx)("p",{className:"profile-name",children:"James Beard"}),Object(m.jsx)("p",{className:"profile-nickname",children:"Nickname"}),Object(m.jsxs)("div",{className:"profile-follow",children:[Object(m.jsxs)("div",{className:"profile-following-ers",children:[Object(m.jsx)("img",{src:je,alt:"profile-following-icon"}),Object(m.jsx)("p",{children:" Following (0) "})]}),Object(m.jsxs)("div",{className:"profile-following-ers",children:[Object(m.jsx)("img",{src:pe,alt:"profile-followers-icon"}),Object(m.jsx)("p",{children:" Followers (0) "})]})]})]}),Object(m.jsx)("a",{className:"btn-to-github",href:"#",children:Object(m.jsx)("p",{children:"No GitHub link"})})]})]})})}}]),t}(r.a.Component)),be={setDarkBlueColor:function(){return{type:S}}},me=Object(p.b)((function(e){return{user:e.users.user}}),be)(he),Oe=(t(54),function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=s.call.apply(s,[this].concat(r))).state={reposBackground:"active-tab",followersBackground:"",reposDisplay:"profile-repos-active",followersDisplay:"profile-followers-not-active",followers:[],repos:[]},e.onReposClick=function(){e.setState({reposBackground:"active-tab",followersBackground:"",reposDisplay:"profile-repos-active",followersDisplay:"profile-followers-not-active"})},e.onFollowersClick=function(){e.setState({reposBackground:"",followersBackground:"active-tab",reposDisplay:"profile-repos-not-active",followersDisplay:"profile-followers-active"})},e.fetchFollowers=function(){e.props.user?fetch("https://api.github.com/users/".concat(e.props.user.login,"/followers")).then((function(e){return e.json()})).then((function(s){var t=Object.keys(s).map((function(e){return Object(G.a)({id:e},s[e])}));e.setState({followers:t}),console.log("followers:",e.state.followers)})):console.log("There is no user followers")},e.fetchRepos=function(){e.props.user?fetch("https://api.github.com/users/".concat(e.props.user.login,"/repos")).then((function(e){return e.json()})).then((function(s){var t=Object.keys(s).map((function(e){return Object(G.a)({id:e},s[e])}));e.setState({repos:t}),console.log("repos:",e.state.repos)})):console.log("There is no user repos")},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchFollowers(),this.fetchRepos()}},{key:"componentDidUpdate",value:function(e){e.user!==this.props.user&&(this.fetchFollowers(),this.fetchRepos())}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"profile-page-repos",children:this.props.user?Object(m.jsxs)("div",{className:"profile-page-repos-container",children:[Object(m.jsxs)("div",{className:"profile-tabs",children:[Object(m.jsxs)("div",{onClick:this.onReposClick,className:"tab ".concat(this.state.reposBackground),children:["Repositories (",this.state.repos.length,")"]}),Object(m.jsxs)("div",{onClick:this.onFollowersClick,className:"tab ".concat(this.state.followersBackground),children:["Followers (",this.state.followers.length,")"]})]}),Object(m.jsxs)("div",{className:"profile-repos-followers",children:[Object(m.jsx)("div",{onClick:this.onReposClick,className:"profile-repos ".concat(this.state.reposDisplay),children:this.state.repos.map((function(e){return Object(m.jsx)("a",{target:"_blanck",href:e.html_url,style:{textDecoration:"none"},children:Object(m.jsx)("div",{className:"repo",children:Object(m.jsxs)("div",{className:"repo-container",children:[Object(m.jsx)("div",{className:"repo-owner-avatar-container",children:Object(m.jsx)("img",{className:"repo-owner-avatar",src:e.owner.avatar_url,alt:"repo-owner-avatar"})}),Object(m.jsxs)("div",{className:"repo-info",children:[Object(m.jsx)("p",{className:"repo-name",children:e.name}),Object(m.jsxs)("p",{className:"repo-forks",children:["Forked from ",e.full_name," "]}),Object(m.jsxs)("p",{className:"repo-desription",children:[" ",e.description," "]})]})]})})},e.id)}))}),Object(m.jsx)("div",{onClick:this.onFollowersClick,className:"profile-followers ".concat(this.state.followersDisplay),children:this.state.followers.map((function(s){return Object(m.jsx)(j.b,{onClick:function(){return e.props.getUser(s)},to:"/profilePage/".concat(s.login),style:{textDecoration:"none"},children:Object(m.jsx)("div",{className:"follower-card",children:Object(m.jsxs)("div",{className:"follower-card-container",children:[Object(m.jsx)("div",{className:"follower-avatar-container",children:Object(m.jsx)("img",{className:"follower-avatar",src:s.avatar_url,alt:"follower-avatar_url"})}),Object(m.jsx)("p",{className:"follower-name",children:"James Beard"}),Object(m.jsxs)("p",{className:"follower-nickname",children:[" ",s.login," "]})]})})},s.id)}))})]})]}):Object(m.jsxs)("div",{className:"profile-page-repos-container",children:[Object(m.jsxs)("div",{className:"profile-tabs",children:[Object(m.jsx)("div",{onClick:this.onReposClick,className:"tab ".concat(this.state.reposBackground),children:"Repositories (0)"}),Object(m.jsx)("div",{onClick:this.onFollowersClick,className:"tab ".concat(this.state.followersBackground),children:"Followers (0)"})]}),Object(m.jsxs)("div",{className:"profile-repos-followers",children:[Object(m.jsx)("div",{onClick:this.onReposClick,className:"profile-repos ".concat(this.state.reposDisplay),children:Object(m.jsx)("div",{className:"repo",children:Object(m.jsxs)("div",{className:"repo-container",children:[Object(m.jsx)("div",{className:"repo-owner-avatar-container",children:Object(m.jsx)("img",{className:"repo-owner-avatar",src:se,alt:"repo-owner-avatar"})}),Object(m.jsxs)("div",{className:"repo-info",children:[Object(m.jsx)("p",{className:"repo-name",children:"bookstore-advanced"}),Object(m.jsx)("p",{className:"repo-forks",children:"Forked from octodemo-containers/bookstore-advanced"}),Object(m.jsx)("p",{className:"repo-desription",children:"GitHub Advanced Bookstore Demo Repository. Automation via GitHub Actions and Deployments to Cloud environments."})]})]})})}),Object(m.jsx)("div",{onClick:this.onFollowersClick,className:"profile-followers ".concat(this.state.followersDisplay),children:Object(m.jsx)("div",{className:"follower-card",children:Object(m.jsxs)("div",{className:"follower-card-container",children:[Object(m.jsx)("div",{className:"follower-avatar-container",children:Object(m.jsx)("img",{className:"follower-avatar",src:de,alt:"follower-avatar_url"})}),Object(m.jsx)("p",{className:"follower-name",children:"James Beard"}),Object(m.jsx)("p",{className:"follower-nickname",children:" nickname "})]})})})]})]})})}}]),t}(r.a.Component)),fe={getUser:_,cleanUser:X,fetchUsers:J},ve=Object(p.b)((function(e){return{user:e.users.user}}),fe)(Oe),ge=(t(55),function(e){Object(u.a)(t,e);var s=Object(d.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.props.cleanUser()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"profile-page",children:[Object(m.jsx)(me,{}),Object(m.jsx)(ve,{})]})}}]),t}(r.a.Component)),xe={cleanUser:X},Ne=Object(p.b)((function(e){return{user:e.users.user}}),xe)(ge);var Ce=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(f,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/CodeaddictRecruitmentTask",children:Object(m.jsx)(q,{})}),Object(m.jsx)(i.a,{path:"/listOfUsers",children:Object(m.jsx)(ue,{})}),Object(m.jsx)(i.a,{path:"/profilePage",children:Object(m.jsx)(Ne,{})})]}),Object(m.jsx)(C,{})]})},ke=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(s){var t=s.getCLS,a=s.getFID,r=s.getFCP,c=s.getLCP,n=s.getTTFB;t(e),a(e),r(e),c(e),n(e)}))},we=t(18),ye=t(25),Ae=Object(we.a)(ye.a,(function(e){return function(s){return function(t){console.group(t.type),console.log("prev state",e.getState()),console.log("dispatching",t);var a=s(t);return console.log("next state",e.getState()),console.groupEnd(),a}}})),Le=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.c)(Ae),Se=Object(we.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case K:return{data:s.payload,isLoading:!1,searchInput:"",user:null};case H:return Object(G.a)(Object(G.a)({},e),{},{isLoading:!0});case z:return Object(G.a)(Object(G.a)({},e),{},{searchInput:s.payload});case W:return Object(G.a)(Object(G.a)({},e),{},{searchInput:""});case Y:return Object(G.a)(Object(G.a)({},e),{},{user:s.payload});case Q:return Object(G.a)(Object(G.a)({},e),{},{user:null});default:return e}},navColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case A:return{teamifyLogo:k,headerColor:"nav-green-color",navLinksColor:"nav-link-dark-color",hrColor:"hr-dark-border"};case L:return{teamifyLogo:k,headerColor:"nav-gray-color",navLinksColor:"nav-link-dark-color",hrColor:"hr-dark-border"};case S:return{teamifyLogo:w,headerColor:"nav-darkBlue-color",hrColor:"hr-white-border",navLinksColor:"nav-link-white-color"};default:return e}}}),De=Object(we.d)(Se,Le);n.a.render(Object(m.jsx)(p.a,{store:De,children:Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(j.a,{children:Object(m.jsx)(Ce,{})})})}),document.getElementById("root")),ke()}},[[56,1,2]]]);
//# sourceMappingURL=main.bf95faff.chunk.js.map