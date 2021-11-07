(this["webpackJsonpcarebox-test"]=this["webpackJsonpcarebox-test"]||[]).push([[0],{39:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),s=c(32),r=c.n(s),o=(c(39),c(12)),i=c(10),l=c(34),j=c(33);c(19);var b=c(2),d=function(){var e=Object(j.useState)({}),t=Object(i.a)(e,2),c=t[0],a=t[1],n=function(e){var t=Object(o.a)({},c);t[e.target.name]=e.target.value,a(t),console.log(c)},s=Object(l.a)(),r=s.register,d=s.handleSubmit,p=s.formState.errors;return Object(b.jsx)("section",{className:"mt-5 d-flex justify-content-center",children:Object(b.jsxs)("div",{style:{boxShadow:"3px 3px 5px gray"},className:"card w-75 px-4 pt-5",children:[Object(b.jsx)("h2",{className:"text-center",children:"Care-Box Form"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{className:"p-4",onSubmit:d((function(e){console.log(e);var t=new FormData;t.append("Title",c.Title),t.append("Author_Name",c.Author_Name),t.append("Phone",c.Phone),t.append("Email",c.Email),t.append("Description",c.Description),console.log("formData",t),fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/",{method:"POST",body:t}).then((function(e){e.json().then((function(t){console.log(t,e)}))}))})),children:[Object(b.jsxs)("div",{class:"form-group mb-3",children:[Object(b.jsx)("input",Object(o.a)(Object(o.a)({type:"text",placeholder:"Title",className:"form-control"},r("Title",{required:!0})),{},{onBlur:n})),p.Title&&Object(b.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(b.jsxs)("div",{class:"form-group mb-3",children:[Object(b.jsx)("input",Object(o.a)(Object(o.a)({type:"text",placeholder:"Author_Name",className:"form-control"},r("Author_Name",{required:!0})),{},{onBlur:n})),p.Author_Name&&Object(b.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(b.jsxs)("div",{class:"form-group mb-3",children:[Object(b.jsx)("input",Object(o.a)(Object(o.a)({type:"text",placeholder:"Phone",className:"form-control"},r("Phone",{required:!0})),{},{onBlur:n})),p.Phone&&Object(b.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(b.jsxs)("div",{class:"form-group mb-3",children:[Object(b.jsx)("input",Object(o.a)(Object(o.a)({type:"email",placeholder:"Email",className:"form-control"},r("Email",{required:!0})),{},{onBlur:n})),p.Email&&Object(b.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(b.jsxs)("div",{class:"form-group",children:[Object(b.jsx)("textarea",Object(o.a)(Object(o.a)({type:"text",className:"form-control mb-3",placeholder:"Description",rows:"3"},r("Description",{required:!0})),{},{onBlur:n})),p.Description&&Object(b.jsx)("span",{className:"text-danger",children:"This field is required"})]}),Object(b.jsx)("div",{className:"form-group text-center",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-dark",children:"Send"})})]})})]})})},p=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)(""),d=Object(i.a)(j,2),p=d[0],u=d[1],x=Object(a.useState)(""),h=Object(i.a)(x,2),m=h[0],O=h[1],f=Object(a.useState)(""),g=Object(i.a)(f,2),N=g[0],v=g[1],y=Object(a.useState)(""),D=Object(i.a)(y,2),T=D[0],A=D[1],P=Object(a.useState)(""),S=Object(i.a)(P,2),_=S[0],k=S[1],C=Object(a.useState)(null),E=Object(i.a)(C,2),F=E[0],q=E[1];Object(a.useEffect)((function(){B()}),[]);var B=function(){fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/").then((function(e){return e.json()})).then((function(e){console.log(e),n(e),l(e[0].Title),u(e[0].Author_Name),O(e[0].Phone),v(e[0].Email),A(e[0].Description),k(e[0].Posted_At),q(e[0].id)}))};return Object(b.jsxs)("section",{children:[Object(b.jsx)("div",{className:"mt-4",style:{backgroundColor:"#F4FDFB"},children:Object(b.jsxs)("table",{className:"table color-brand2 text-dark text-lowercase",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"ID"}),Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Title"}),Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Author_Name"}),Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Phone"}),Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Email"}),Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Description"}),Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Posted_At"}),Object(b.jsx)("th",{className:"text-center text-uppercase",scope:"col",children:"Action"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{className:"text-center",children:e.id}),Object(b.jsx)("td",{className:"text-center",children:e.Title}),Object(b.jsx)("td",{className:"text-center",children:e.Author_Name}),Object(b.jsx)("td",{className:"text-center",children:e.Phone}),Object(b.jsx)("td",{className:"text-center",children:e.Email}),Object(b.jsx)("td",{className:"text-center",children:e.Description}),Object(b.jsx)("td",{className:"text-center",children:e.Posted_At}),Object(b.jsx)("td",{children:Object(b.jsx)("button",{className:"btn btn-dark text-uppercase",onClick:function(){return function(e){var t=c.filter((function(t){return t.id===e}))[0];console.log(t),l(t.Title),u(t.Author_Name),O(t.Phone),v(t.Email),A(t.Description),k(t.Posted_At),q(t.id)}(e.id)},children:"update"})})]})}))})]})}),Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",value:o,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",value:p,onChange:function(e){return u(e.target.value)}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",value:m,onChange:function(e){return O(e.target.value)}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"Email",value:N,onChange:function(e){return v(e.target.value)}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",value:T,onChange:function(e){return A(e.target.value)}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"datetime-local",value:_,onChange:function(e){return k(e.target.value)}})," ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-dark",onClick:function(){var e={Title:o,Author_Name:p,Phone:m,Email:N,Description:T,date:_,updateId:F};console.log(e);var t=new FormData;t.append("Title",o),t.append("Author_Name",p),t.append("Phone",m),t.append("Email",N),t.append("Description",T),console.log("formData",t),fetch("https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/".concat(F,"/"),{method:"PUT",headers:{"Custom-User-Agent":"gsdf#g3243F466$"},body:t}).then((function(e){e.json().then((function(t){console.log(e,t),B()}))}))},children:"Update Information"})]})})]})},u={apiKey:"AIzaSyDDkfP-6iUsTuddyV5yRzIuzC3rWi7eZU8",authDomain:"carebox-test-41ec8.firebaseapp.com",projectId:"carebox-test-41ec8",storageBucket:"carebox-test-41ec8.appspot.com",messagingSenderId:"625119256595",appId:"1:625119256595:web:cf739ddb389d554ff15fe6"},x=c(23);x.a.apps.length||x.a.initializeApp(u);var h=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsx)(p,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),m()}},[[63,1,2]]]);
//# sourceMappingURL=main.c6adfdf7.chunk.js.map