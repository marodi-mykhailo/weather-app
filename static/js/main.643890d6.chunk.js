(this["webpackJsonpideo-whether-app"]=this["webpackJsonpideo-whether-app"]||[]).push([[0],{15:function(e,t,n){e.exports={wrapper:"CityCard_wrapper__1ubgp",img:"CityCard_img__16CXf",border25:"CityCard_border25__7QzXD",addBody:"CityCard_addBody__2-OHc",shakeAnimation:"CityCard_shakeAnimation__WdWuT",shake:"CityCard_shake__BwrWQ",active:"CityCard_active__5WdEC"}},210:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n(30),r=n.n(i),s=(n(89),n(90),n(91),n(92),n(6)),o=n(2),l=n(5),d=n(33),u=n.n(d),m=n.p+"static/media/login-img.8cc1ab77.svg",j=n(3),b=n(49),h=function(e){return new Promise((function(t,n){e.email!==b.email&&n("User not found"),e.password!==b.password&&n("Password incorrect"),t({email:e.email,message:"User was Logged"})}))},O=n(50),p=n.n(O),f=p.a.create(Object(o.a)({baseURL:"//api.openweathermap.org/data/2.5/"},{params:{units:"metric",appid:"fc8cbe9de90214186f37dcbd5bef4182"}})),x=function(e){return f.get("weather?q=".concat(e))},g=function(e){return f.get("weather?id=".concat(e))},v=function(e,t,n){return f.get("/group?id=".concat(e,",").concat(t,",").concat(n))},y=function(e,t){return f.get("onecall?lat=".concat(t,"&lon=").concat(e,"&exclude=hourly,minutely"))},A=function(e,t){return f.get("onecall?lat=".concat(t,"&lon=").concat(e,"&exclude=current,daily,alerts,minutely"))},w=[{id:756135,name:"Warsaw",country:"PL"},{id:5128581,name:"New York",country:"US"},{id:3094802,name:"Krakow",country:"PL"}],C="SET_USER",S={email:"",isLogged:!1},E=function(e){return{type:C,userData:e}},N={isAppLoading:"idle"},J=function(e){return{type:"SET_APP_STATUS",status:e}},V=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.user.isLogged}));Object(c.useEffect)((function(){var n=localStorage.getItem("user");n&&e(E({email:n})),t&&e((function(e){e(J("loading")),setTimeout((function(){e(J("idle"))}),5e3)}))}),[e,t]);var n=Object(c.useState)({email:"",password:"",isRemember:!0}),i=Object(l.a)(n,2),r=i[0],d=i[1];return t?Object(a.jsx)(s.a,{to:"/main"}):Object(a.jsxs)("div",{style:{height:"90vh"},className:"row d-flex align-items-center",children:[Object(a.jsx)("div",{className:"col ".concat(u.a.left),children:Object(a.jsx)("img",{className:u.a.imgWrapper,src:m,alt:"weather"})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("form",{className:"".concat(u.a.form,"  mt-5"),onSubmit:function(t){var n;t.preventDefault(),e((n=r,function(e){h(n).then((function(t){n.isRemember&&localStorage.setItem("user",t.email);var a=t.email;e(E({email:a}))})).catch((function(e){console.log(e)}))}))},children:[Object(a.jsx)("h3",{children:"Log in"}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("input",{className:"form-control",type:"email",value:r.email,onChange:function(e){d(Object(o.a)(Object(o.a)({},r),{},{email:e.currentTarget.value}))},placeholder:"Enter email"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Password"}),Object(a.jsx)("input",{type:"password",className:"form-control",value:r.password,onChange:function(e){d(Object(o.a)(Object(o.a)({},r),{},{password:e.currentTarget.value}))},placeholder:"Enter password"})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(a.jsx)("input",{type:"checkbox",id:"customCheck1",className:"custom-control-input",onChange:function(e){d(Object(o.a)(Object(o.a)({},r),{},{isRemember:e.currentTarget.checked}))},checked:r.isRemember}),Object(a.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-dark btn-lg btn-block",children:"Sign in"}),Object(a.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(a.jsx)("a",{href:"/reset-password",children:"password?"})]})]})})]})},k=n(15),z=n.n(k),T=n.p+"static/media/city.ef42a2df.jpg",M=n(23),Z=n.n(M),P=n(79),D=n(80),L=n.n(D),R=function(e){return Object(a.jsx)("div",{className:L.a.div,children:Object(a.jsx)("h3",{className:"text-uppercase text-center",children:e.text})})},W=function(){return Object(a.jsx)("div",{style:{height:"300px"},className:"d-flex align-items-center justify-content-center m-auto",children:Object(a.jsx)("div",{style:{width:"4rem",height:"4rem"},className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})},F=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(),o=Object(l.a)(s,2),d=o[0],u=o[1],m=Object(c.useState)(setTimeout((function(){}))),j=Object(l.a)(m,2),b=j[0],h=j[1],O=Object(c.useState)(!1),p=Object(l.a)(O,2),f=p[0],g=p[1],v=function(t){e.getNewFavoriteCity(t),e.onClose()};return e.isOpen?Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:Z.a.modal,children:[Object(a.jsx)("div",{className:"input-group mt-2 mb-4",children:Object(a.jsx)("div",{className:"form-outline col-4 mr-2",children:Object(a.jsx)("input",{value:i,onChange:function(e){g(!1),r(e.currentTarget.value);var t=e.currentTarget.value;u(void 0),clearTimeout(b);var n=window.setTimeout((function(){x(t).then((function(e){u({id:e.data.id,name:e.data.name,country:e.data.sys.country}),g(!1)})).catch((function(e){g(!0)}))}),1e3);h(n)},type:"search",id:"form1",placeholder:"Search",className:"form-control"})})}),Object(a.jsx)("div",{className:"row pr-4 pl-4 mt-2",children:i?f?Object(a.jsx)(R,{text:"Not Found"}):d?Object(a.jsx)("div",{onClick:function(){return v(d)},className:" col-12 col-sm-6 col-md-3 col-lg-2 ".concat(Z.a.cardWrapp),children:Object(a.jsx)(I,{city:d,onClick:e.onClick})}):Object(a.jsx)(W,{}):P.map((function(t,n){return Object(a.jsx)("div",{onClick:function(){return v(t)},className:"col-12 col-sm-6 col-md-3 \n                                                               col-lg-2 ".concat(Z.a.cardWrapp),children:Object(a.jsx)(I,{city:t,onClick:e.onClick})},n)}))})]}),Object(a.jsx)("div",{onClick:e.onClose,className:Z.a.modalOverlay})]}):null},I=function(e){return Object(a.jsxs)("div",{className:"col-10 col-md-3 m-auto m-md-0 ".concat(z.a.wrapper," ").concat(e.isCityChangeMode&&z.a.shakeAnimation," \n        ").concat(e.isActive&&z.a.active),onClick:function(){return e.onClick(e.city.id)},children:[Object(a.jsx)("div",{style:{borderRadius:"25px"},className:"card",children:Object(a.jsx)("img",{className:"".concat(z.a.img," ").concat(z.a.border25),src:T,alt:"City"})}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("p",{style:{color:e.isActive?"#000":"#6C767D"},className:"card-title text-center font-weight-bold",children:[e.city.name,", ",e.city.country]})})]})},H=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),i=n[0],r=n[1];return Object(a.jsxs)("div",{className:"",style:{marginLeft:"20px"},children:[Object(a.jsx)("div",{className:"m-0 ".concat(z.a.wrapper),children:Object(a.jsx)("div",{style:{height:"150px",minWidth:"130px"},className:"card ".concat(z.a.border25),onClick:function(){return r(!0)},children:Object(a.jsxs)("div",{className:"card-body ".concat(z.a.addBody),children:[Object(a.jsx)("h2",{className:"text-center text-muted",children:"+"}),Object(a.jsx)("p",{className:"card-title text-muted text-center font-weight-bold",children:"Add city"})]})})}),Object(a.jsx)(F,{getNewFavoriteCity:e.getNewFavoriteCity,isOpen:i,onClose:function(){r(!1)},onClick:e.onClick})]})},K=n(53),X=n.n(K),B=n(81),U={dt:1612036343,sunrise:1611984942,sunset:1612017996,temp:-3.28,feels_like:-7.91,pressure:993,humidity:93,dew_point:-4.14,uvi:0,clouds:90,visibility:5e3,wind_speed:3,wind_deg:250,weather:[{id:601,main:"Snow",description:"snow",icon:"13n"}]},Y=function(e){return{type:"SET_WEATHER_BY_DAY",weatherData:e}},G="SET_CITY",_={coord:{lon:37.6156,lat:55.7522},weather:[{id:601,main:"Snow",description:"snow",icon:"13n"}],base:"stations",main:{temp:273.35,feels_like:268.59,temp_min:273.15,temp_max:273.71,pressure:999,humidity:100},visibility:1600,wind:{speed:4,deg:120},snow:{"1h":1.6},clouds:{all:90},dt:1611872203,sys:{type:1,id:9027,country:"RU",sunrise:1611898133,sunset:1611928576},timezone:10800,id:524901,name:"Moscow",cod:200},Q=function(e){return{type:G,cityData:e}},q=function(e){return{type:"SET_DAILY_WEATHER",dailyData:e}},$=function(e){return{type:"SET_HOURLY_WEATHER",hourlyData:e}},ee=function(e){return function(t){g(e).then((function(e){200===e.status&&(t(Q(e.data)),y(e.data.coord.lon,e.data.coord.lat).then((function(n){t(q(n.data.daily)),t(Y(n.data.current)),A(e.data.coord.lon,e.data.coord.lat).then((function(e){t($(e.data.hourly))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})))})).catch((function(e){console.log(e)}))}},te=function(){var e=Object(j.c)((function(e){return e.favoriteCities})),t=Object(j.c)((function(e){return e.cityWeather})),n=Object(c.useState)(!1),i=Object(l.a)(n,2),r=i[0],s=i[1],o=Object(c.useState)({name:"",country:"",id:0}),d=Object(l.a)(o,2),u=d[0],m=d[1],b=Object(j.b)(),h=function(t){if(r)if(e.some((function(e){return e.id===u.id})))s(!1);else{b({type:"CHANGE_FAVORITE_CITY",cityId:t,newCityData:u});var n=JSON.parse(localStorage.getItem("favoriteCities"));localStorage.setItem("favoriteCities",JSON.stringify(n.map((function(e){return e===t?u.id:e})))),s(!1)}else b(ee(t))};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{className:"mb-4",children:[Object(a.jsx)("span",{className:"font-weight-light text-muted",children:"Weather"}),"\xa0",Object(a.jsx)("strong",{children:"Forecast"})]}),Object(a.jsxs)("div",{className:"d-flex flex-md-row flex-column flex-sm-column align-items-center align-items-md-start",children:[e.map((function(e,n){return Object(a.jsx)(I,{city:e,onClick:h,isCityChangeMode:r,isActive:(c=e.id,c===t.id)},n);var c})),Object(a.jsx)(H,{getNewFavoriteCity:function(e){m(e),s(!0)},onClick:h})]})]})},ne=n(7),ae=n.n(ne),ce=n.p+"static/media/drop.c383f958.png",ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var n=(new Date).toLocaleString("default",{weekday:"long"}),a=new Date(1e3*e).toLocaleString("default",{weekday:"long"});return n===a?"Today":a}return new Date(1e3*e).toLocaleString("default",{weekday:"long"})},re=function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{onClick:function(){return e.changeDay(e.day)},style:{cursor:"pointer",fontWeight:e.dt===ie(e.day.dt)?"bold":"normal"},scope:"row",children:ie(e.day.dt)}),Object(a.jsxs)("td",{className:"d-flex align-items-center text-muted",children:[Object(a.jsx)("img",{style:{height:"30px",width:"20px"},src:ce,alt:"drop"}),Object(a.jsxs)("span",{children:[e.day.humidity," %"]})]}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:"".concat("http://openweathermap.org/img/wn/").concat(e.day.weather[0].icon,".png"),alt:"icon"})}),Object(a.jsxs)("td",{className:"text-muted",children:[Math.floor(e.day.feels_like.day),"\xb0C"]}),Object(a.jsxs)("td",{className:"d-flex align-items-center text-muted ",children:[Object(a.jsx)("img",{style:{height:"30px",width:"20px",marginRight:"5px"},src:"data:image/png;base64,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",alt:"wind"}),Object(a.jsxs)("span",{children:[e.day.wind_speed.toFixed(1)," m/s"]})]}),Object(a.jsxs)("td",{className:"font-weight-bold",children:[Math.floor(e.day.temp.day),"\xb0C"]})]})},se=n(32),oe=function(){var e,t,n=Object(j.c)((function(e){return e.cityWeather})),c={labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{type:"line",label:"Day temperature",data:null===(e=n.daily)||void 0===e?void 0:e.map((function(e){return e.temp.day})),backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)",fill:!1,borderWidth:4},{type:"bar",label:"Humidity",data:null===(t=n.daily)||void 0===t?void 0:t.map((function(e){return e.humidity})),backgroundColor:"rgba(28,213,231,0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1,barPercentage:.7}]};return Object(a.jsx)("div",{className:"mt-5 mb-5",children:Object(a.jsx)(se.Bar,{data:c,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})})},le=function(e){var t=Object(c.useState)({first:!0,second:!1,third:!1,fourth:!1}),n=Object(l.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(!1),d=Object(l.a)(s,2),u=d[0],m=d[1],j=function(e){var t=Object(o.a)({},i);for(var n in i)t[n]=n===e;"first"!==e&&m(!1),r(t)};return Object(a.jsxs)("div",{style:{overflow:"scroll",height:"630px"},children:[Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"nav ".concat(ae.a.nav," col-12"),children:[Object(a.jsx)("li",{className:"nav-item ".concat(ae.a.navItem," col-2"),children:Object(a.jsx)("a",{onClick:function(){return j("first")},className:"nav-link ".concat(ae.a.navLink," ").concat(i.first&&ae.a.active),children:"Week"})}),Object(a.jsx)("li",{className:"nav-item ".concat(ae.a.navItem," col-2"),children:Object(a.jsx)("a",{onClick:function(){return j("second")},className:"nav-link ".concat(ae.a.navLink," ").concat(i.second&&ae.a.active),children:"Month"})}),Object(a.jsx)("li",{className:"nav-item ".concat(ae.a.navItem," col-3"),children:Object(a.jsx)("a",{onClick:function(){return j("third")},className:"nav-link ".concat(ae.a.navLink," ").concat(i.third&&ae.a.active),children:"3 Month"})}),Object(a.jsx)("li",{className:"nav-item ".concat(ae.a.navItem," col-3"),children:Object(a.jsx)("a",{onClick:function(){return j("fourth")},className:"nav-link ".concat(ae.a.navLink," ").concat(i.fourth&&ae.a.active),children:"6 Month"})}),Object(a.jsxs)("div",{className:"custom-control text-muted custom-switch col-2 d-flex align-items-center justify-content-center",children:[Object(a.jsx)("input",{onChange:function(){m(!u)},disabled:!i.first,checked:u,type:"checkbox",className:"custom-control-input",id:"customSwitch1"}),Object(a.jsx)("label",{className:"custom-control-label ".concat(ae.a.customInput," \n                        ").concat(u&&"font-weight-bold text-dark"),htmlFor:"customSwitch1",children:"Chart"})]})]})}),u&&Object(a.jsx)(oe,{}),i.first&&Object(a.jsx)("div",{className:"mt-4",children:Object(a.jsxs)("table",{className:"table table-borderless",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col"}),Object(a.jsx)("th",{scope:"col"}),Object(a.jsx)("th",{scope:"col"}),Object(a.jsx)("th",{scope:"col"}),Object(a.jsx)("th",{scope:"col"}),Object(a.jsx)("th",{scope:"col"})]})}),Object(a.jsx)("tbody",{children:e.city.daily&&e.city.daily.map((function(t,n){return n<7?Object(a.jsx)(re,{dt:e.dt,changeDay:e.changeDay,day:t},n):null}))})]})}),i.second&&Object(a.jsx)(R,{text:"No Data"}),i.third&&Object(a.jsx)(R,{text:"No Data"}),i.fourth&&Object(a.jsx)(R,{text:"No Data"})]})},de=function(){var e=Object(j.c)((function(e){return e.cityWeather})),t=Object(j.c)((function(e){return e.dayWeather})),n=Object(j.b)();return Object(a.jsx)(le,{dt:ie(t.dt),changeDay:function(e){n(Y(Object(o.a)(Object(o.a)({},e),{},{temp:e.temp.day,feels_like:e.feels_like.day})))},city:e})},ue=n(82),me=n.n(ue),je=n(34),be=n.n(je),he=function(){var e,t=Object(j.c)((function(e){return e.cityWeather})),n=function(e){return new Date(Date.now()+60*e*60*1e3).toLocaleTimeString("en-US",{hour:"numeric",hour12:!0})},c={labels:["".concat(n(0)),"".concat(n(2)),"".concat(n(4)),"".concat(n(6)),"".concat(n(8)),"".concat(n(10))],datasets:[{type:"bar",label:"Humidity",data:null===(e=t.hourly)||void 0===e?void 0:e.filter((function(e,t){return t%2===0})).map((function(e){return e.humidity})),backgroundColor:["rgb(248,197,0)","rgba(255,255,255,0.5)","rgba(255,255,255,0.5)","rgba(255,255,255,0.5)","rgba(255,255,255,0.5)","rgba(255,255,255,0.5)"],borderColor:"rgba(255, 255, 255, 1)",borderWidth:1,barPercentage:.3,fontColor:"#fff"}]};return Object(a.jsx)("div",{children:Object(a.jsx)(se.Bar,{data:c,options:{responsive:!0,legend:{labels:{fontColor:"#fff"}},scales:{yAxes:[{ticks:{fontColor:"#fff",beginAtZero:!0}}],xAxes:[{ticks:{fontColor:"#fff"}}]},title:{display:!0,position:"top",fontColor:"#fff",fontSize:18,text:"Chance of raine"},tooltips:{callbacks:{label:function(e,t){return t.labels[e.index]+": "+t.datasets[0].data[e.index]+"%"}}}}})})},Oe=function(e){var t,n;return Object(a.jsxs)("div",{style:{paddingTop:"100px"},className:"d-flex flex-column h-100 justify-content-start",children:[Object(a.jsxs)("div",{className:"d-flex align-items-center ".concat(be.a.header),children:[Object(a.jsx)("img",{src:"".concat("http://openweathermap.org/img/wn/").concat(e.weather.weather[0].icon,"@2x.png"),alt:"icon"}),Object(a.jsxs)("div",{className:"d-flex flex-column text-center justify-content-center",children:[Object(a.jsx)("span",{className:"h3",children:ie(e.weather.dt,!0)}),Object(a.jsx)("span",{className:"text-muted",children:(n=e.weather.dt,new Date(1e3*n).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"}))})]})]}),Object(a.jsxs)("div",{style:{fontSize:"20px"},className:"d-flex flex-column align-items-center",children:[Object(a.jsxs)("h1",{style:{fontSize:"150px",position:"relative"},className:"text-center text-white font-weight-light",children:[Math.floor(e.weather.temp),Object(a.jsx)("span",{className:be.a.deg,children:"\xb0C"})]}),Object(a.jsx)("span",{className:"text-center text-white text-capitalize mb-1",children:e.weather.weather[0].description}),Object(a.jsxs)("span",{className:"text-white m-2",children:[e.cityName,", ",e.countryName]}),Object(a.jsxs)("div",{className:"text-white d-flex",children:[Object(a.jsxs)("span",{className:"d-flex align-items-center ".concat(be.a.dot),children:["Feels like ",Math.floor(e.weather.feels_like)]}),Object(a.jsxs)("span",{className:"",children:["Sunset ",function(e){return e?new Date(1e3*e).toLocaleTimeString([],{hour:"numeric",minute:"numeric"}):"Woops"}(null===(t=e.weather)||void 0===t?void 0:t.sunset)]})]})]}),"Today"===ie(e.weather.dt,!0)&&Object(a.jsx)("div",{style:{width:"95%",borderRadius:"15px",marginTop:"100px",backgroundColor:"rgba(0, 0, 0, 0.6)"},className:" ml-auto mr-auto mb-3 mb-lg-0 ",children:Object(a.jsx)(he,{})})]})},pe={thunderstorm:n.p+"static/media/thundershtorm.f24fe220.jpg",rain:n.p+"static/media/rain.854bed6f.jpg",drizzle:n.p+"static/media/drizzle.a3bb97a2.jpg",snow:n.p+"static/media/snow.43f476a0.jpg",clouds:n.p+"static/media/clouds.c8966f04.jpg",clear:n.p+"static/media/clear.b49668ed.jpg",mist:n.p+"static/media/mist.c288a0a4.jpg",smoke:n.p+"static/media/smoke.59bb6a13.jpg",haze:n.p+"static/media/haze.8b46da2e.jpg",dust:n.p+"static/media/dust.d73f44c1.jpg",fog:n.p+"static/media/fog.61d2bc68.jpg",sand:n.p+"static/media/sand.04d5cb54.jpg",ash:n.p+"static/media/ash.25b841a2.jpg",squall:n.p+"static/media/squal.ad36403e.jpg",tornado:n.p+"static/media/tornado.119dd84b.jpg"},fe=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.cityWeather})),n=Object(j.c)((function(e){return e.dayWeather}));Object(c.useEffect)((function(){d()}),[n]);var i=Object(c.useState)(),r=Object(l.a)(i,2),s=r[0],o=r[1],d=function(){var e=n.weather[0].main.toLowerCase();o(pe[e])},u={backgroundImage:"url(".concat(s,")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover",height:"100%",width:"100%",transition:"all .4s ease",position:"relative",zIndex:100};return Object(a.jsxs)("div",{style:u,className:"w-100 ".concat(me.a.darkenBg),children:[Object(a.jsx)("button",{onClick:function(){e((function(e){localStorage.clear(),e({type:"SET_DEFAULTS_CITIES"}),e({type:"LOG_OUT"})}))},style:{position:"absolute",margin:"20px",right:0},className:"btn btn-outline-danger",children:"Sign Out"}),Object(a.jsx)(Oe,{weather:n,countryName:t.sys.country,cityName:t.name,timezone:t.timezone})]})},xe=function(){var e=Object(j.b)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(setTimeout((function(){}))),o=Object(l.a)(s,2),d=o[0],u=o[1],m=Object(c.useState)(""),b=Object(l.a)(m,2),h=b[0],O=b[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),g=f[0],v=f[1];return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"input-group mt-2 mb-4 row",children:[Object(a.jsx)("div",{className:"form-outline col-6 mr-2 mr-2",children:Object(a.jsx)("input",{value:i,onChange:function(t){r(t.currentTarget.value),O(""),v("");var n=t.currentTarget.value;clearTimeout(d);var a=window.setTimeout((function(){x(n).then((function(t){var n;v(t.data.name),e((n=t.data.name,function(){var e=Object(B.a)(X.a.mark((function e(t){var a,c,i;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(n);case 3:if(200!==(a=e.sent).status){e.next=16;break}return t(Q(a.data)),e.next=8,y(a.data.coord.lon,a.data.coord.lat);case 8:if(200!==(c=e.sent).status){e.next=16;break}return t(q(c.data.daily)),t(Y(c.data.current)),e.next=14,A(a.data.coord.lon,a.data.coord.lat);case 14:200===(i=e.sent).status&&t($(i.data.hourly));case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(0),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}()))})).catch((function(e){O("City not found")}))}),1e3);u(a)},onBlur:function(){r(""),O("")},type:"search",id:"form1",placeholder:"Search",className:"form-control"})}),i&&!g&&!h&&Object(a.jsx)("div",{className:"d-flex align-items-center justify-content-center ml-4",children:Object(a.jsx)("div",{style:{width:"2rem",height:"2rem"},className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})}),i&&g&&Object(a.jsx)("span",{style:{fontSize:"16px"},className:"d-flex align-items-center ml-4 text-success font-weight-bold",children:g}),i&&h&&Object(a.jsx)("span",{style:{fontSize:"16px"},className:"d-flex align-items-center ml-4 text-danger font-weight-bold",children:h})]})})},ge=function(){return Object(j.c)((function(e){return e.user.isLogged}))?Object(a.jsxs)("div",{className:"row flex-sm-column-reverse flex-column-reverse flex-lg-row",children:[Object(a.jsxs)("div",{className:"col-lg-7 p-4",children:[Object(a.jsx)(xe,{}),Object(a.jsx)(te,{}),Object(a.jsx)(de,{})]}),Object(a.jsx)("div",{className:"col-lg-5 pr-0 pl-0 pl-lg-2 ",children:Object(a.jsx)(fe,{})})]}):Object(a.jsx)(s.a,{to:"/login"})},ve=n(35),ye=n.n(ve),Ae=n(16),we=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"text-center p-5",children:"404 Page not found"}),Object(a.jsxs)("div",{className:ye.a.wrapp,children:[Object(a.jsx)("button",{className:"btn btn-outline-success ".concat(ye.a.btn),children:Object(a.jsx)(Ae.b,{to:"/login",children:"Go to Login Page"})}),Object(a.jsx)("button",{className:"btn btn-outline-dark ".concat(ye.a.btn),children:Object(a.jsx)(Ae.b,{to:"/main",children:"Go to Main Page"})})]})]})};var Ce=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.favoriteCities})),n=Object(j.c)((function(e){return e.app}));return Object(c.useEffect)((function(){var n,a,c,i=JSON.parse(localStorage.getItem("favoriteCities"));i?(e((n=i[0],a=i[1],c=i[2],function(e){v(n,a,c).then((function(t){e({type:"SET_FAVORITE_CITIES",citiesData:t.data.list})}))})),e(ee(i[0]))):(localStorage.setItem("favoriteCities",JSON.stringify(t.map((function(e){return e.id})))),e(ee(t[0].id)))}),[e]),Object(a.jsx)("div",{style:{backgroundColor:"#7CB2ED",minHeight:"100vh"},className:"pt-0 pb-0 pt-sm-5 pb-sm-5",children:Object(a.jsx)("div",{style:{backgroundColor:"#F2FBFF",borderRadius:"25px"},className:"container",children:Object(a.jsxs)(s.d,{children:["loading"===n.isAppLoading?Object(a.jsx)(W,{}):Object(a.jsx)(s.b,{exact:!0,path:["/","/main"],render:function(){return Object(a.jsx)(ge,{})}}),Object(a.jsx)(s.b,{path:"/login",render:function(){return Object(a.jsx)(V,{})}}),Object(a.jsx)(s.b,{path:"/404",render:function(){return Object(a.jsx)(we,{})}}),Object(a.jsx)(s.a,{from:"*",to:"/404"})]})})})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},Ee=n(19),Ne=n(83),Je=Object(Ee.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(o.a)(Object(o.a)({},t.userData),{},{isLogged:!0});case"LOG_OUT":return{email:"",isLogged:!1};default:return e}},cityWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(o.a)({},t.cityData);case"SET_DAILY_WEATHER":return Object(o.a)(Object(o.a)({},e),{},{daily:t.dailyData});case"SET_HOURLY_WEATHER":return Object(o.a)(Object(o.a)({},e),{},{hourly:t.hourlyData});default:return e}},favoriteCities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVORITE_CITIES":return t.citiesData.map((function(e){return{id:e.id,name:e.name,country:e.sys.country}}));case"CHANGE_FAVORITE_CITY":return e.map((function(e){return e.id===t.cityId?Object(o.a)({},t.newCityData):e}));case"SET_DEFAULTS_CITIES":return w;default:return e}},dayWeather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER_BY_DAY":return Object(o.a)({},t.weatherData);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_APP_STATUS":return Object(o.a)(Object(o.a)({},e),{},{isAppLoading:t.status});default:return e}}}),Ve=Object(Ee.d)(Je,Object(Ee.a)(Ne.a));window.store=Ve,r.a.render(Object(a.jsx)(j.a,{store:Ve,children:Object(a.jsx)(Ae.a,{children:Object(a.jsx)(Ce,{})})}),document.getElementById("root")),Se()},23:function(e,t,n){e.exports={modal:"AddModal_modal__tabHL",modalOverlay:"AddModal_modalOverlay__19ASH",cardWrapp:"AddModal_cardWrapp__15BxM"}},33:function(e,t,n){e.exports={imgWrapper:"Login_imgWrapper__uQ7LI",left:"Login_left__3p_gp"}},34:function(e,t,n){e.exports={header:"MainWeatherInfo_header__2jhW8",deg:"MainWeatherInfo_deg__22YnB",dot:"MainWeatherInfo_dot__sTX9Q"}},35:function(e,t,n){e.exports={wrapp:"NotFound_wrapp__cI35M",btn:"NotFound_btn__2BiIe"}},49:function(e){e.exports=JSON.parse('{"email":"admin@admin.com","password":"123456"}')},7:function(e,t,n){e.exports={navItem:"WeatherStatisticTable_navItem__12-YE",navLink:"WeatherStatisticTable_navLink__1fB7J",active:"WeatherStatisticTable_active__1s0BL",customInput:"WeatherStatisticTable_customInput__DMBPi"}},79:function(e){e.exports=JSON.parse('[{"id":703448,"name":"Kyiv","country":"UA"},{"id":6942553,"name":"Paris","country":"CA"},{"id":1850147,"name":"Tokyo","country":"JP"},{"id":756135,"name":"Warsaw","country":"PL"},{"id":5128638,"name":"New York","country":"US"},{"id":2935022,"name":"Dresden","country":"DE"},{"id":3067696,"name":"Prague","country":"CZ"},{"id":3088171,"name":"Pozna\u0144","country":"PL"},{"id":3054638,"name":"Budapest","country":"HU"},{"id":2950158,"name":"Berlin","country":"DE"},{"id":2643743,"name":"London","country":"GB"},{"id":2759794,"name":"Amsterdam","country":"NL"},{"id":2072525,"name":"Dublin","country":"AU"},{"id":524894,"name":"Moscow","country":"RU"}]')},80:function(e,t,n){e.exports={div:"NoDataComponent_div__25Ebh"}},82:function(e,t,n){e.exports={darkenBg:"WeatherDetails_darkenBg__2n38W"}},89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[210,1,2]]]);
//# sourceMappingURL=main.643890d6.chunk.js.map