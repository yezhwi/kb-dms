webpackJsonp([8],{usuo:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("IcnI");e.default={name:"login_index",data:function(){return{model:{account:null,login_pwd:null},remember_me:!0}},methods:{remember_user:function(){this.$q.localStorage.set("login_form",this.model)}},render:function(t){var e=this;return t("div",{staticClass:"pp-login-bg",style:{marginTop:"-60px"},on:{keyup:function(t){return"Enter"===t.key&&i.a.dispatch("user/login",e.model)}}},[t("div",{staticClass:"pp-login-wrap animated flipInY shadow-3 pp-radius-3"},[t("div",{staticClass:"cursor-pointer",style:{position:"absolute",top:"0px",right:"0px",width:"60px",height:"60px",border:"solid",borderWidth:"0px 60px 60px 0px",borderColor:"transparent #027be3 transparent transparent"},on:{click:function(){return e.$router.push({path:"/register"})}}},[t("q-icon",{style:{marginTop:"8px",marginLeft:"26px"},props:{name:"person_add",size:"30px",color:"white"}},[t("q-tooltip",{staticClass:"font-md q-pa-sm",props:{self:"bottom left",anchor:"top right",offset:[0,0]}},["注册"])])]),t("div",{staticClass:"text-tertiary text-center",style:{fontSize:"24px",fontWeight:"700",margin:"20px 0 80px"}},["DMS · 数据库管理平台"]),t("q-input",{staticClass:"bg-white pp-radius-3 font-13 q-pl-xs q-pr-sm pp shadow-1 q-mb-md login-input",style:{height:"33px",fontWeight:"400",border:"1px solid white"},props:{color:"dark",type:"text",hideUnderline:!0,value:this.model.account,placeholder:"请输入账号",before:[{icon:"person"}]},on:{input:function(t){return e.model.account=t}}}),t("q-input",{staticClass:"bg-white pp-radius-3 font-13 q-pl-xs q-pr-sm pp shadow-1 login-input",style:{height:"33px",fontWeight:"400"},props:{color:"dark",type:"password",hideUnderline:!0,value:this.model.login_pwd,placeholder:"请输入密码",clearable:!0,before:[{icon:"lock"}]},on:{input:function(t){return e.model.login_pwd=t}}}),t("div",{staticClass:"flex items-center font-12 text-dark",style:{marginTop:"20px"}},[t("q-checkbox",{class:"no-ripple",props:{color:"tertiary",value:this.remember_me},on:{input:function(t){return e.remember_me=t}}},[t("span",{staticClass:"q-ml-sm"},"记住我")])]),t("q-btn",{staticClass:"login-btn font-13 full-width shadow-1 pp-radius-2",style:{marginTop:"10px",height:"33px",minHeight:"33px",fontWeight:"400"},props:{color:"primary",disable:!(null!=this.model.account&&this.model.account.length>0&&null!=this.model.login_pwd&&this.model.login_pwd.length>0)},on:{click:function(){e.remember_me&&e.remember_user(),i.a.dispatch("user/login",e.model)}}},"登 录")])])}}}});
//# sourceMappingURL=8.3a774218aaed1aec2b73.js.map