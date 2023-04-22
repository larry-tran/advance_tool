"use strict";(self.webpackChunkargon_dashboard_angular=self.webpackChunkargon_dashboard_angular||[]).push([[723],{6723:(y,p,i)=>{i.r(p),i.d(p,{AuthLayoutModule:()=>f});var u=i(646),g=i(6895),r=i(433),e=i(4650),d=i(2057);let c=(()=>{class n{constructor(t){this.activeModal=t}agree(){this.activeModal.close(!0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.Kz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-signup-dialog"]],inputs:{message:"message"},decls:12,vars:2,consts:[[1,"modal-header"],[1,"modal-title"],["type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h3",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return o.activeModal.dismiss(!1)}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",4)(7,"p"),e._uU(8),e.qZA()(),e.TgZ(9,"div",5)(10,"button",6),e.NdJ("click",function(){return o.agree()}),e._uU(11,"Agree"),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(o.message.title),e.xp6(6),e.Oqu(o.message.content))}}),n})();var m=i(1228);function h(n,a){if(1&n&&(e.TgZ(0,"div",27),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.alertMessage,"\n")}}const v=[{path:"login",component:(()=>{class n{constructor(t,o){this.authService=t,this.modalService=o,this.name="",this.password="",this.alertMessage="",this.showAlert=!1,this.ngbModalOptions={backdrop:!1,keyboard:!1,centered:!0}}ngOnInit(){}ngOnDestroy(){}login(){this.authService.login(this.name,this.password).subscribe(t=>{},t=>{console.log(t.error),"User does not exist"==t.error.msg?this.openSignupModal():(this.alertMessage=t.error.msg,this.showAlert=!0,setInterval(()=>this.showAlert=!1,2e3))})}openSignupModal(){const t=this.modalService.open(c,this.ngbModalOptions);t.componentInstance.message={title:"Create account confirmation",content:"Are you agree to create account ?"},t.result.then(o=>{o&&this.authService.signup(this.name,this.password).subscribe(s=>{this.alertMessage=s,this.showAlert=!0,setInterval(()=>this.showAlert=!1,2e3)})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.e),e.Y36(d.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:34,vars:3,consts:[["class","alert alert-primary","role","alert",4,"ngIf"],[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-body","px-lg-5","py-lg-5"],["role","form"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-circle-08"],["placeholder","Name","type","name",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4",3,"click"],["role","alert",1,"alert","alert-primary"]],template:function(t,o){1&t&&(e.YNc(0,h,2,1,"div",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h1",6),e._uU(7,"Welcome!"),e.qZA(),e.TgZ(8,"p",7),e._uU(9,"You will have new experience on this note management."),e.qZA()()()()(),e.TgZ(10,"div",8),e.O4$(),e.TgZ(11,"svg",9),e._UZ(12,"polygon",10),e.qZA()()(),e.kcU(),e.TgZ(13,"div",11)(14,"div",4)(15,"div",12)(16,"div",13)(17,"div",14)(18,"form",15)(19,"div",16)(20,"div",17)(21,"div",18)(22,"span",19),e._UZ(23,"i",20),e.qZA()(),e.TgZ(24,"input",21),e.NdJ("ngModelChange",function(l){return o.name=l}),e.qZA()()(),e.TgZ(25,"div",22)(26,"div",17)(27,"div",18)(28,"span",19),e._UZ(29,"i",23),e.qZA()(),e.TgZ(30,"input",24),e.NdJ("ngModelChange",function(l){return o.password=l}),e.qZA()()(),e.TgZ(31,"div",25)(32,"button",26),e.NdJ("click",function(){return o.login()}),e._uU(33,"Sign in"),e.qZA()()()()()()()()),2&t&&(e.Q6J("ngIf",o.showAlert),e.xp6(24),e.Q6J("ngModel",o.name),e.xp6(6),e.Q6J("ngModel",o.password))},dependencies:[g.O5,r._Y,r.Fj,r.JJ,r.JL,r.On,r.F]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.ez,u.Bz.forChild(v),r.u5]}),n})()}}]);