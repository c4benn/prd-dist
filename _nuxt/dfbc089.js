(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{358:function(t,e,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("62b33a80",content,!0,{sourceMap:!1})},455:function(t,e,r){"use strict";r(358)},456:function(t,e,r){var n=r(30)(!1);n.push([t.i,".root[data-sifm]{overflow:hidden}.alert[data-sifm]{transition:transform .3s}.alert[data-sifm]:not(.__visible){transform:translate3d(0,-70px,0)}.alert-header[data-sifm]{font-size:1.05rem;font-weight:600;opacity:var(--t-title);margin-bottom:.25rem}.alert-desc[data-sifm]{opacity:var(--t-body)}.form[data-sifm]{margin:2rem auto 0;max-width:612px;position:relative;padding:0 var(--x-padding) 2.5rem;display:grid;transition:transform .3s}.form[data-sifm].alert-visible{margin-bottom:3rem}.form[data-sifm]:not(.alert-visible){transform:translate3d(0,-64px,0)}.forgot-password[data-sifm]{margin:-.75rem 0 1rem!important;padding:2px 8px!important;-webkit-animation-duration:1.5s;animation-duration:1.5s}.sign-up-alt[data-sifm],.submit[data-sifm]{width:calc(100% - 3rem)!important;margin:2.75rem auto;justify-self:center}.submit[data-sifm] .loader{margin-right:1rem}.root[data-sifm] .root[data-tde]{padding:0 .5rem}.root[data-sifm] .content[data-tde]{font-size:1.15rem}",""]),t.exports=n},558:function(t,e,r){"use strict";r.r(e);r(12),r(10),r(11),r(13),r(9),r(14);var n=r(5),o=r(2),main=(r(20),r(0));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"SignInForm",props:{emailValidator:{type:Function,required:!0},passwordValidator:{type:Function,required:!0}},data:function(){return{form:{email:"",password:"",showPassword:!1,remember:!1},signingIn:!1,signInMessage:"",showAlert:!1,alertTimeStamp:null,forgotPasswordAttention:!1}},computed:{supabase:function(){return this.$store.getters.supabase},user:function(){return this.$store.state.user}},watch:{showAlert:function(t){var e=this;if(t){if(this.forgotPasswordAttention=!1,!/invalid\s+email\s+or\s+password/i.test(this.signInMessage))return;requestAnimationFrame(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,main.sleep.call(e,450);case 2:e.forgotPasswordAttention=!0;case 3:case"end":return t.stop()}}),t)}))))}}},created:function(){this.showAlert=this.user.session},render:function(t){var e,r,n,l,d=this,m={"data-sifm":""},div=function(e,r){return t("div",e,r)},p=function(e,r){return t("p",e,r)},input=function(e){return t("ui-input",e)},f=function(e,r){return t("ui-btn",e,r)};return div({attrs:c({},m),staticClass:"root"},[this.$slots.prepend,[this.$slots.socials,(n={props:{background:this.user.session?"warning":"error",icon:this.user.session?"alert":!this.$nuxt.isOnline||/network.+failed/i.test(this.signInMessage)?"wifi-strength-1-alert":/email\s+not\s+confirmed/i.test(this.signInMessage)?"account-alert":"shield-alert",closeIcon:"close"},class:["alert",{__visible:this.showAlert}],attrs:c({},m),on:{"close-alert":function(){d.showAlert=!1}}},l=[div({attrs:c({},m),staticClass:"alert-info"},[p({attrs:c({},m),staticClass:"alert-header"},this.user.session?"Already signed in":this.$nuxt.isOnline?"Can't sign you in":"Network error"),p({attrs:c({},m),staticClass:"alert-desc",domProps:{innerHTML:this.user.session?"<q>".concat((null===(e=this.user)||void 0===e?void 0:e.email)||"Your current account","</q> will be signed out."):this.$nuxt.isOnline?this.signInMessage:"Check your internet connection and try again"}})])],t("ui-alert",n,l)),function(e,r){return t("ui-form",e,r)}({props:{name:"sign-in-form",submitData:{attrs:c({},m),props:{background:"info",flat:!0,disabled:this.signingIn},staticClass:"submit"},submitText:"Sign in"},attrs:c(c({},m),{},{action:".",autocomplete:"on"}),staticClass:"form sign-in fill-before",class:[{"alert-visible":this.showAlert}],on:{"submit-form":(r=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d.signingIn=!0,d.$emit("signing-in"),d.$store.commit("UPDATE_LOCAL_STORAGE",{innerPath:"user",path:"remember",value:d.form.remember}),!d.showAlert){t.next=7;break}return d.showAlert=!1,t.next=7,main.sleep.call(d,400);case 7:try{d.supabase.auth.user()&&d.supabase.auth.signOut(),d.supabase.auth.signIn({email:d.form.email,password:d.form.password}).then((function(t){d.signingIn=!1,t.error?(d.signInMessage=t.error.message,d.$nextTick((function(){d.alertTimeStamp=performance.now(),d.showAlert=!0}))):t.session&&(d.$emit("signed-in"),d.$nextTick((function(){return d.$emit("updateTemplate","signed-in")})))}))}catch(t){t&&console.log(t)}case 8:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})}},[this.signingIn&&div({staticClass:"submit-button-wrapper",slot:"submitText"},[function(e){return t("app-loader",e)}({props:{size:"1.5rem"},staticClass:"loader"}),"Signing in"]),input({props:{label:"Email",autocomplete:"email",id:"delivery-sign-in-email",vmodel:this.form.email,validator:this.emailValidator,pattern:"^\\s*?[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\\s*?$",placeholder:"example@domain",type:"email"},on:{vmodel:function(t){d.form.email=t}}}),input({props:{label:"Password",type:"password",id:"delivery-sign-in-password",vmodel:this.form.password,validator:this.passwordValidator,pattern:".+",showPassword:this.form.showPassword,autocomplete:"current-password",placeholder:"6+ characters"},on:{vmodel:function(t){d.form.password=t},"append-click":function(){d.form.showPassword=!d.form.showPassword}}}),f({props:{size:"sm",color:"secondary",text:!0,tag:"div"},attrs:c(c({},m),{},{title:"forgot password"}),staticClass:"forgot-password",class:[{"bounce-top":this.forgotPasswordAttention}],on:{click:function(){d.$emit("forgot-password")}}},"Forgot password?"),input({props:{label:"Remember me",id:"delivery-save-info",type:"switch",vmodel:this.form.remember,required:!1,validator:function(){return!0},topSlot:!1,hint:this.form.remember?"Your login info will be remembered on this device.":"You will need to login on your next visit."},on:{vmodel:function(t){d.form.remember=t}}}),div({slot:"append",attrs:c({},m),staticClass:"form-append"},[function(e,r){return t("text-divide",e,r)}({staticClass:"divide"},["New user?"]),f({props:{text:!0,color:"primary",block:!0,tag:"div",filledText:!0,actionButton:!0},style:{opacity:this.signingIn?"var(--t-disabled)":void 0},attrs:c(c({},m),{},{title:"click to sign up"}),staticClass:"sign-up-alt",on:{click:function(){d.$emit("updateTemplate","sign-up")}}},"Sign up")])])]])}},m=(r(455),r(7)),component=Object(m.a)(d,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);