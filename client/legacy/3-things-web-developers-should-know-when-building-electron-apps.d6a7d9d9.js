import{S as e,i as t,s as o,r as a,z as s,A as r,B as n,w as i,V as l,C as h,D as p,E as c,e as u,t as d,f,g as w,h as g,j as y,k as m,l as v,m as b,n as k,o as E}from"./client.0bb690d3.js";import"./Nav.c2d7cbee.js";import{B as S}from"./BlogLayout.fa6d9b2a.js";function A(e){let t,o,a,s,r,n,i,l,h,p,c,S,A,I,j,P,q,N,O,M,x,T,W,Q,B,L,C,D,$,H,R,Y,G,z,V,F,K,U,Z,J,X,_,ee,te,oe,ae,se,re,ne,ie,le,he,pe,ce,ue,de,fe,we,ge,ye,me,ve,be,ke,Ee,Se,Ae,Ie,je,Pe,qe,Ne,Oe,Me,xe,Te,We,Qe,Be,Le,Ce,De,$e,He,Re,Ye,Ge,ze,Ve,Fe,Ke,Ue,Ze,Je,Xe,_e,et,tt,ot,at,st,rt,nt,it,lt,ht,pt,ct,ut,dt,ft,wt,gt,yt,mt,vt,bt,kt,Et,St,At,It,jt,Pt,qt,Nt,Ot,Mt,xt,Tt,Wt,Qt,Bt,Lt,Ct,Dt,$t,Ht,Rt,Yt,Gt,zt,Vt,Ft,Kt,Ut,Zt,Jt,Xt,_t,eo,to,oo,ao,so,ro,no,io,lo,ho,po,co,uo,fo,wo,go,yo,mo,vo,bo,ko,Eo,So,Ao,Io,jo,Po,qo,No,Oo,Mo,xo,To,Wo,Qo,Bo,Lo,Co,Do,$o,Ho,Ro,Yo,Go,zo,Vo;return{c(){t=u("p"),o=d("Before I started working on "),a=u("a"),s=d("Codespace"),r=d(", I had never really built anything in Electron. The only thing I knew was that apps like Slack and Notion were using it to create cross-platform desktop apps, and that everyone on Hacker News hated it because it consumes a lot of RAM. 🤷‍♀️"),n=f(),i=u("p"),l=d("Even though I’ve built apps on the web for 10 years, it was quite a journey discovering all the quirks of Electron. Here are 3 small things I learned that can hopefully help out someone who’s just getting started:"),h=f(),p=u("h2"),c=d("1. Quitting logic is not trivial"),S=f(),A=u("p"),I=d("Quitting an app is easy right? Surely there’s just some built-in behaviour that handles all of that for us? Wrong. Although you might not think about it as a user, when you start developing native apps, you realise that there’s often no “one-size-fits-all” for how and when apps should quit – it all depends on their use case."),j=f(),P=u("p"),q=d("For starters, the "),N=u("em"),O=d("default behaviour"),M=d(" is different based on what OS you’re using. On Windows and Linux, users have been taught that “closing the window also quits the app”. On macOS however, that is not the case: clicking the red traffic light button merely closes the window, but the app itself usually stays in the dock and keeps running in the background until you actively choose to quit it."),x=f(),T=u("p"),W=d("The difference is also not just based on the user’s OS, it also varies across apps themselves. Most apps are happy with the default OS behaviour, but some applications like 1Password will quit as soon as you close the window for security reasons. More commonly, there are cases where you want to make it "),Q=u("em"),B=d("appear"),L=d(" as if the app has been quit, but in reality you’re simply "),C=u("em"),D=d("hiding the dock icon"),$=d(" while the app keeps running in the background. This is typically the case for apps that appear in your menu bar as soon as you turn on your computer."),H=f(),R=u("p"),Y=u("img"),z=f(),V=u("em"),F=d("Some apps like Google Chrome go even further and ask you to hold down cmd + Q to quit."),K=f(),U=u("p"),Z=d("So to sum it up – think about how and when your app should quit. To help you out, here are some snippets of logic that you can use in your own app:"),J=f(),X=u("pre"),_=u("code"),ee=u("span"),te=d("// Hide window instead of quitting when closing it:"),oe=d("\n\nwin = "),ae=u("span"),se=d("new"),re=d(" BrowserWindow({ "),ne=u("span"),ie=d("width"),le=d(": "),he=u("span"),pe=d("500"),ce=d(", "),ue=u("span"),de=d("height"),fe=d(": "),we=u("span"),ge=d("500"),ye=d(" })\n\nwin.on("),me=u("span"),ve=d("'close'"),be=d(", e => {\n  e.preventDefault() "),ke=u("span"),Ee=d("// Prevents quit"),Se=d("\n  win.hide()\n})"),Ae=f(),Ie=u("pre"),je=u("code"),Pe=u("span"),qe=d("// Quit app on macOS ONLY if using command + Q or some other force quit option:"),Ne=d("\n\nwin = "),Oe=u("span"),Me=d("new"),xe=d(" BrowserWindow({ "),Te=u("span"),We=d("width"),Qe=d(": "),Be=u("span"),Le=d("500"),Ce=d(", "),De=u("span"),$e=d("height"),He=d(": "),Re=u("span"),Ye=d("500"),Ge=d(" })\n\n"),ze=u("span"),Ve=d("let"),Fe=d(" forceQuit = "),Ke=u("span"),Ue=d("false"),Ze=d("\n\n"),Je=u("span"),Xe=d("// Triggered before close event, i.e. when pressing command + Q"),_e=d("\napp.on("),et=u("span"),tt=d("'before-quit'"),ot=d(", () => {\n  forceQuit = "),at=u("span"),st=d("true"),rt=d("\n})\n\nwin.on("),nt=u("span"),it=d("'close'"),lt=d(", e => {\n  "),ht=u("span"),pt=d("if"),ct=d(" (!forceQuit && process.platform === "),ut=u("span"),dt=d("'darwin'"),ft=d(") { "),wt=u("span"),gt=d('// "darwin" is macOS'),yt=d("\n    e.preventDefault() "),mt=u("span"),vt=d("// Prevents quit"),bt=d("\n    win.hide()\n  }\n\n  "),kt=u("span"),Et=d("// Let the app quit normally..."),St=d("\n})"),At=f(),It=u("h2"),jt=d("2. Write "),Pt=u("em"),qt=d("thrice"),Nt=d(", run everywhere"),Ot=f(),Mt=u("p"),xt=d("One of the expectations developers might initially have when building apps with Electron is that you can happily hack around on your Mac, make sure it runs there, and then ship the code assuming that it will work just as well on Windows and Linux."),Tt=f(),Wt=u("p"),Qt=d("Woah, not so fast, cowboy! Again, there are some core differences in how the OS works, and you definitely need to test your app extensively on all three platforms if you’re going to market it as a cross-platform app. We’ve already talked about quitting logic, but here are some other examples of often overlooked quirks that you need to think about:"),Bt=f(),Lt=u("ul"),Ct=u("li"),Dt=d("Short commands are different. Mac users are used to “⌘ + "),$t=u("em"),Ht=d("key"),Rt=d("” to trigger an action within an app, whereas Linux and Windows users use “CTRL + "),Yt=u("em"),Gt=d("key"),zt=d("”."),Vt=f(),Ft=u("li"),Kt=d("Scrollbar visibility. If you’re a web designer, you probably already know the pain of shipping a website that looks great on your Mac, only to find that, when you open it on Windows, there are these horrible-looking scrollbars everywhere. Electron apps are no different, so you will probably want to "),Ut=u("a"),Zt=d("style your scrollbars"),Jt=d("."),Xt=f(),_t=u("li"),eo=d("Differences in layouts and menus. Most well-designed apps will use so-called “frameless” styling, to avoid having an ugly grey bar on top of their app’s window. This is trivial to achieve in Electron, using "),to=u("code"),oo=d("BrowserWindow({ frame: false })"),ao=d(", however, you’ll most likely want to tweak your layout slightly for each platform after setting it. Below is an example of how I had to add some top padding – but "),so=u("em"),ro=d("only"),no=d(" to the macOS version of Codespace – in order to take into account the area occupied by the traffic lights:"),io=f(),lo=u("p"),ho=u("img"),co=f(),uo=u("p"),fo=d("This is of course not everything, there are also differences when it comes to installation, auto-updates, emoji support… etc. In short, you "),wo=u("em"),go=d("need"),yo=d(" to test your app on all three platforms. I personally found that paying for something like "),mo=u("a"),vo=d("Parallels Desktop"),bo=d(" was probably the best investment I ever made while building my app. There are also free alternatives like "),ko=u("a"),Eo=d("VirtualBox"),So=d(", but from what I understand, there’s a considerable difference in performance, which could affect your developer happiness."),Ao=f(),Io=u("h2"),jo=d("3. You don’t need the App Store"),Po=f(),qo=u("p"),No=d("As web developers, we’re used to deploying our sites to a server and have them live instantly, but as we know, native apps work a bit differently. One of the dilemmas I faced when Codespace was getting close to launching was whether to use the Mac App Store or not. After all, it’s an extra distribution channel that might bring in some more customers, but I was also nervous about unwarranted app rejections and the "),Oo=u("a"),Mo=d("various stories of Electron apps being booted from the store"),xo=d(". On top of that, 30% is a pretty hefty fee for what Apple is providing if you ask me."),To=f(),Wo=u("p"),Qo=d("In the end, I decided to distribute the app myself, and I haven’t regretted it one bit. Sure, it’s a little bit of extra work setting up your own payment and licensing system, but if you’re going cross-platform, you will have to do that anyway. It also pushed me to take 100% control of the marketing of the app, and I discovered that spending some extra time creating a nice-looking landing page is more likely to yield great results than just uploading some screenshots to the store."),Bo=f(),Lo=u("p"),Co=d("In short, if your app is cross-platform, I don’t see any great benefit to using the App Store as your main distribution channel. Skipping it also frees you from going through a potentially long review process every time you push an update to your app. You will however still need to pay for an Apple Developer Account in order to sign and notarise your app, otherwise it won’t run on anyone else’s Mac (more on this in a later blog post)."),Do=f(),$o=u("hr"),Ho=f(),Ro=u("p"),Yo=d("I hope you enjoyed reading and learned something new! I will most likely keep posting tutorials on how to build things with Electron, so make sure you "),Go=u("a"),zo=d("follow me on Twitter"),Vo=d(" so that you don’t miss anything!"),this.h()},l(e){t=w(e,"P",{});var u=g(t);o=y(u,"Before I started working on "),a=w(u,"A",{href:!0});var d=g(a);s=y(d,"Codespace"),d.forEach(m),r=y(u,", I had never really built anything in Electron. The only thing I knew was that apps like Slack and Notion were using it to create cross-platform desktop apps, and that everyone on Hacker News hated it because it consumes a lot of RAM. 🤷‍♀️"),u.forEach(m),n=v(e),i=w(e,"P",{});var f=g(i);l=y(f,"Even though I’ve built apps on the web for 10 years, it was quite a journey discovering all the quirks of Electron. Here are 3 small things I learned that can hopefully help out someone who’s just getting started:"),f.forEach(m),h=v(e),p=w(e,"H2",{});var b=g(p);c=y(b,"1. Quitting logic is not trivial"),b.forEach(m),S=v(e),A=w(e,"P",{});var k=g(A);I=y(k,"Quitting an app is easy right? Surely there’s just some built-in behaviour that handles all of that for us? Wrong. Although you might not think about it as a user, when you start developing native apps, you realise that there’s often no “one-size-fits-all” for how and when apps should quit – it all depends on their use case."),k.forEach(m),j=v(e),P=w(e,"P",{});var E=g(P);q=y(E,"For starters, the "),N=w(E,"EM",{});var G=g(N);O=y(G,"default behaviour"),G.forEach(m),M=y(E," is different based on what OS you’re using. On Windows and Linux, users have been taught that “closing the window also quits the app”. On macOS however, that is not the case: clicking the red traffic light button merely closes the window, but the app itself usually stays in the dock and keeps running in the background until you actively choose to quit it."),E.forEach(m),x=v(e),T=w(e,"P",{});var po=g(T);W=y(po,"The difference is also not just based on the user’s OS, it also varies across apps themselves. Most apps are happy with the default OS behaviour, but some applications like 1Password will quit as soon as you close the window for security reasons. More commonly, there are cases where you want to make it "),Q=w(po,"EM",{});var Fo=g(Q);B=y(Fo,"appear"),Fo.forEach(m),L=y(po," as if the app has been quit, but in reality you’re simply "),C=w(po,"EM",{});var Ko=g(C);D=y(Ko,"hiding the dock icon"),Ko.forEach(m),$=y(po," while the app keeps running in the background. This is typically the case for apps that appear in your menu bar as soon as you turn on your computer."),po.forEach(m),H=v(e),R=w(e,"P",{});var Uo=g(R);Y=w(Uo,"IMG",{src:!0,alt:!0}),z=v(Uo),V=w(Uo,"EM",{});var Zo=g(V);F=y(Zo,"Some apps like Google Chrome go even further and ask you to hold down cmd + Q to quit."),Zo.forEach(m),Uo.forEach(m),K=v(e),U=w(e,"P",{});var Jo=g(U);Z=y(Jo,"So to sum it up – think about how and when your app should quit. To help you out, here are some snippets of logic that you can use in your own app:"),Jo.forEach(m),J=v(e),X=w(e,"PRE",{});var Xo=g(X);_=w(Xo,"CODE",{class:!0});var _o=g(_);ee=w(_o,"SPAN",{class:!0});var ea=g(ee);te=y(ea,"// Hide window instead of quitting when closing it:"),ea.forEach(m),oe=y(_o,"\n\nwin = "),ae=w(_o,"SPAN",{class:!0});var ta=g(ae);se=y(ta,"new"),ta.forEach(m),re=y(_o," BrowserWindow({ "),ne=w(_o,"SPAN",{class:!0});var oa=g(ne);ie=y(oa,"width"),oa.forEach(m),le=y(_o,": "),he=w(_o,"SPAN",{class:!0});var aa=g(he);pe=y(aa,"500"),aa.forEach(m),ce=y(_o,", "),ue=w(_o,"SPAN",{class:!0});var sa=g(ue);de=y(sa,"height"),sa.forEach(m),fe=y(_o,": "),we=w(_o,"SPAN",{class:!0});var ra=g(we);ge=y(ra,"500"),ra.forEach(m),ye=y(_o," })\n\nwin.on("),me=w(_o,"SPAN",{class:!0});var na=g(me);ve=y(na,"'close'"),na.forEach(m),be=y(_o,", e => {\n  e.preventDefault() "),ke=w(_o,"SPAN",{class:!0});var ia=g(ke);Ee=y(ia,"// Prevents quit"),ia.forEach(m),Se=y(_o,"\n  win.hide()\n})"),_o.forEach(m),Xo.forEach(m),Ae=v(e),Ie=w(e,"PRE",{});var la=g(Ie);je=w(la,"CODE",{class:!0});var ha=g(je);Pe=w(ha,"SPAN",{class:!0});var pa=g(Pe);qe=y(pa,"// Quit app on macOS ONLY if using command + Q or some other force quit option:"),pa.forEach(m),Ne=y(ha,"\n\nwin = "),Oe=w(ha,"SPAN",{class:!0});var ca=g(Oe);Me=y(ca,"new"),ca.forEach(m),xe=y(ha," BrowserWindow({ "),Te=w(ha,"SPAN",{class:!0});var ua=g(Te);We=y(ua,"width"),ua.forEach(m),Qe=y(ha,": "),Be=w(ha,"SPAN",{class:!0});var da=g(Be);Le=y(da,"500"),da.forEach(m),Ce=y(ha,", "),De=w(ha,"SPAN",{class:!0});var fa=g(De);$e=y(fa,"height"),fa.forEach(m),He=y(ha,": "),Re=w(ha,"SPAN",{class:!0});var wa=g(Re);Ye=y(wa,"500"),wa.forEach(m),Ge=y(ha," })\n\n"),ze=w(ha,"SPAN",{class:!0});var ga=g(ze);Ve=y(ga,"let"),ga.forEach(m),Fe=y(ha," forceQuit = "),Ke=w(ha,"SPAN",{class:!0});var ya=g(Ke);Ue=y(ya,"false"),ya.forEach(m),Ze=y(ha,"\n\n"),Je=w(ha,"SPAN",{class:!0});var ma=g(Je);Xe=y(ma,"// Triggered before close event, i.e. when pressing command + Q"),ma.forEach(m),_e=y(ha,"\napp.on("),et=w(ha,"SPAN",{class:!0});var va=g(et);tt=y(va,"'before-quit'"),va.forEach(m),ot=y(ha,", () => {\n  forceQuit = "),at=w(ha,"SPAN",{class:!0});var ba=g(at);st=y(ba,"true"),ba.forEach(m),rt=y(ha,"\n})\n\nwin.on("),nt=w(ha,"SPAN",{class:!0});var ka=g(nt);it=y(ka,"'close'"),ka.forEach(m),lt=y(ha,", e => {\n  "),ht=w(ha,"SPAN",{class:!0});var Ea=g(ht);pt=y(Ea,"if"),Ea.forEach(m),ct=y(ha," (!forceQuit && process.platform === "),ut=w(ha,"SPAN",{class:!0});var Sa=g(ut);dt=y(Sa,"'darwin'"),Sa.forEach(m),ft=y(ha,") { "),wt=w(ha,"SPAN",{class:!0});var Aa=g(wt);gt=y(Aa,'// "darwin" is macOS'),Aa.forEach(m),yt=y(ha,"\n    e.preventDefault() "),mt=w(ha,"SPAN",{class:!0});var Ia=g(mt);vt=y(Ia,"// Prevents quit"),Ia.forEach(m),bt=y(ha,"\n    win.hide()\n  }\n\n  "),kt=w(ha,"SPAN",{class:!0});var ja=g(kt);Et=y(ja,"// Let the app quit normally..."),ja.forEach(m),St=y(ha,"\n})"),ha.forEach(m),la.forEach(m),At=v(e),It=w(e,"H2",{});var Pa=g(It);jt=y(Pa,"2. Write "),Pt=w(Pa,"EM",{});var qa=g(Pt);qt=y(qa,"thrice"),qa.forEach(m),Nt=y(Pa,", run everywhere"),Pa.forEach(m),Ot=v(e),Mt=w(e,"P",{});var Na=g(Mt);xt=y(Na,"One of the expectations developers might initially have when building apps with Electron is that you can happily hack around on your Mac, make sure it runs there, and then ship the code assuming that it will work just as well on Windows and Linux."),Na.forEach(m),Tt=v(e),Wt=w(e,"P",{});var Oa=g(Wt);Qt=y(Oa,"Woah, not so fast, cowboy! Again, there are some core differences in how the OS works, and you definitely need to test your app extensively on all three platforms if you’re going to market it as a cross-platform app. We’ve already talked about quitting logic, but here are some other examples of often overlooked quirks that you need to think about:"),Oa.forEach(m),Bt=v(e),Lt=w(e,"UL",{});var Ma=g(Lt);Ct=w(Ma,"LI",{});var xa=g(Ct);Dt=y(xa,"Short commands are different. Mac users are used to “⌘ + "),$t=w(xa,"EM",{});var Ta=g($t);Ht=y(Ta,"key"),Ta.forEach(m),Rt=y(xa,"” to trigger an action within an app, whereas Linux and Windows users use “CTRL + "),Yt=w(xa,"EM",{});var Wa=g(Yt);Gt=y(Wa,"key"),Wa.forEach(m),zt=y(xa,"”."),xa.forEach(m),Vt=v(Ma),Ft=w(Ma,"LI",{});var Qa=g(Ft);Kt=y(Qa,"Scrollbar visibility. If you’re a web designer, you probably already know the pain of shipping a website that looks great on your Mac, only to find that, when you open it on Windows, there are these horrible-looking scrollbars everywhere. Electron apps are no different, so you will probably want to "),Ut=w(Qa,"A",{href:!0});var Ba=g(Ut);Zt=y(Ba,"style your scrollbars"),Ba.forEach(m),Jt=y(Qa,"."),Qa.forEach(m),Xt=v(Ma),_t=w(Ma,"LI",{});var La=g(_t);eo=y(La,"Differences in layouts and menus. Most well-designed apps will use so-called “frameless” styling, to avoid having an ugly grey bar on top of their app’s window. This is trivial to achieve in Electron, using "),to=w(La,"CODE",{});var Ca=g(to);oo=y(Ca,"BrowserWindow({ frame: false })"),Ca.forEach(m),ao=y(La,", however, you’ll most likely want to tweak your layout slightly for each platform after setting it. Below is an example of how I had to add some top padding – but "),so=w(La,"EM",{});var Da=g(so);ro=y(Da,"only"),Da.forEach(m),no=y(La," to the macOS version of Codespace – in order to take into account the area occupied by the traffic lights:"),La.forEach(m),Ma.forEach(m),io=v(e),lo=w(e,"P",{});var $a=g(lo);ho=w($a,"IMG",{src:!0,alt:!0}),$a.forEach(m),co=v(e),uo=w(e,"P",{});var Ha=g(uo);fo=y(Ha,"This is of course not everything, there are also differences when it comes to installation, auto-updates, emoji support… etc. In short, you "),wo=w(Ha,"EM",{});var Ra=g(wo);go=y(Ra,"need"),Ra.forEach(m),yo=y(Ha," to test your app on all three platforms. I personally found that paying for something like "),mo=w(Ha,"A",{href:!0});var Ya=g(mo);vo=y(Ya,"Parallels Desktop"),Ya.forEach(m),bo=y(Ha," was probably the best investment I ever made while building my app. There are also free alternatives like "),ko=w(Ha,"A",{href:!0});var Ga=g(ko);Eo=y(Ga,"VirtualBox"),Ga.forEach(m),So=y(Ha,", but from what I understand, there’s a considerable difference in performance, which could affect your developer happiness."),Ha.forEach(m),Ao=v(e),Io=w(e,"H2",{});var za=g(Io);jo=y(za,"3. You don’t need the App Store"),za.forEach(m),Po=v(e),qo=w(e,"P",{});var Va=g(qo);No=y(Va,"As web developers, we’re used to deploying our sites to a server and have them live instantly, but as we know, native apps work a bit differently. One of the dilemmas I faced when Codespace was getting close to launching was whether to use the Mac App Store or not. After all, it’s an extra distribution channel that might bring in some more customers, but I was also nervous about unwarranted app rejections and the "),Oo=w(Va,"A",{href:!0});var Fa=g(Oo);Mo=y(Fa,"various stories of Electron apps being booted from the store"),Fa.forEach(m),xo=y(Va,". On top of that, 30% is a pretty hefty fee for what Apple is providing if you ask me."),Va.forEach(m),To=v(e),Wo=w(e,"P",{});var Ka=g(Wo);Qo=y(Ka,"In the end, I decided to distribute the app myself, and I haven’t regretted it one bit. Sure, it’s a little bit of extra work setting up your own payment and licensing system, but if you’re going cross-platform, you will have to do that anyway. It also pushed me to take 100% control of the marketing of the app, and I discovered that spending some extra time creating a nice-looking landing page is more likely to yield great results than just uploading some screenshots to the store."),Ka.forEach(m),Bo=v(e),Lo=w(e,"P",{});var Ua=g(Lo);Co=y(Ua,"In short, if your app is cross-platform, I don’t see any great benefit to using the App Store as your main distribution channel. Skipping it also frees you from going through a potentially long review process every time you push an update to your app. You will however still need to pay for an Apple Developer Account in order to sign and notarise your app, otherwise it won’t run on anyone else’s Mac (more on this in a later blog post)."),Ua.forEach(m),Do=v(e),$o=w(e,"HR",{}),Ho=v(e),Ro=w(e,"P",{});var Za=g(Ro);Yo=y(Za,"I hope you enjoyed reading and learned something new! I will most likely keep posting tutorials on how to build things with Electron, so make sure you "),Go=w(Za,"A",{href:!0});var Ja=g(Go);zo=y(Ja,"follow me on Twitter"),Ja.forEach(m),Vo=y(Za," so that you don’t miss anything!"),Za.forEach(m),this.h()},h(){b(a,"href","https://codespace.app"),Y.src!==(G="/images/blog/electron/chrome-quit.png")&&b(Y,"src","/images/blog/electron/chrome-quit.png"),b(Y,"alt","Quitting in Chrome"),b(ee,"class","hljs-comment"),b(ae,"class","hljs-keyword"),b(ne,"class","hljs-attr"),b(he,"class","hljs-number"),b(ue,"class","hljs-attr"),b(we,"class","hljs-number"),b(me,"class","hljs-string"),b(ke,"class","hljs-comment"),b(_,"class","language-javascript"),b(Pe,"class","hljs-comment"),b(Oe,"class","hljs-keyword"),b(Te,"class","hljs-attr"),b(Be,"class","hljs-number"),b(De,"class","hljs-attr"),b(Re,"class","hljs-number"),b(ze,"class","hljs-keyword"),b(Ke,"class","hljs-literal"),b(Je,"class","hljs-comment"),b(et,"class","hljs-string"),b(at,"class","hljs-literal"),b(nt,"class","hljs-string"),b(ht,"class","hljs-keyword"),b(ut,"class","hljs-string"),b(wt,"class","hljs-comment"),b(mt,"class","hljs-comment"),b(kt,"class","hljs-comment"),b(je,"class","language-javascript"),b(Ut,"href","https://css-tricks.com/the-current-state-of-styling-scrollbars/"),ho.src!==(po="/images/blog/electron/top-padding.png")&&b(ho,"src","/images/blog/electron/top-padding.png"),b(ho,"alt","Top padding on macOS"),b(mo,"href","https://www.parallels.com/products/desktop/"),b(ko,"href","https://www.virtualbox.org/"),b(Oo,"href","https://9to5mac.com/2019/11/04/electron-app-rejections/"),b(Go,"href","https://twitter.com/t4t5")},m(e,u){k(e,t,u),E(t,o),E(t,a),E(a,s),E(t,r),k(e,n,u),k(e,i,u),E(i,l),k(e,h,u),k(e,p,u),E(p,c),k(e,S,u),k(e,A,u),E(A,I),k(e,j,u),k(e,P,u),E(P,q),E(P,N),E(N,O),E(P,M),k(e,x,u),k(e,T,u),E(T,W),E(T,Q),E(Q,B),E(T,L),E(T,C),E(C,D),E(T,$),k(e,H,u),k(e,R,u),E(R,Y),E(R,z),E(R,V),E(V,F),k(e,K,u),k(e,U,u),E(U,Z),k(e,J,u),k(e,X,u),E(X,_),E(_,ee),E(ee,te),E(_,oe),E(_,ae),E(ae,se),E(_,re),E(_,ne),E(ne,ie),E(_,le),E(_,he),E(he,pe),E(_,ce),E(_,ue),E(ue,de),E(_,fe),E(_,we),E(we,ge),E(_,ye),E(_,me),E(me,ve),E(_,be),E(_,ke),E(ke,Ee),E(_,Se),k(e,Ae,u),k(e,Ie,u),E(Ie,je),E(je,Pe),E(Pe,qe),E(je,Ne),E(je,Oe),E(Oe,Me),E(je,xe),E(je,Te),E(Te,We),E(je,Qe),E(je,Be),E(Be,Le),E(je,Ce),E(je,De),E(De,$e),E(je,He),E(je,Re),E(Re,Ye),E(je,Ge),E(je,ze),E(ze,Ve),E(je,Fe),E(je,Ke),E(Ke,Ue),E(je,Ze),E(je,Je),E(Je,Xe),E(je,_e),E(je,et),E(et,tt),E(je,ot),E(je,at),E(at,st),E(je,rt),E(je,nt),E(nt,it),E(je,lt),E(je,ht),E(ht,pt),E(je,ct),E(je,ut),E(ut,dt),E(je,ft),E(je,wt),E(wt,gt),E(je,yt),E(je,mt),E(mt,vt),E(je,bt),E(je,kt),E(kt,Et),E(je,St),k(e,At,u),k(e,It,u),E(It,jt),E(It,Pt),E(Pt,qt),E(It,Nt),k(e,Ot,u),k(e,Mt,u),E(Mt,xt),k(e,Tt,u),k(e,Wt,u),E(Wt,Qt),k(e,Bt,u),k(e,Lt,u),E(Lt,Ct),E(Ct,Dt),E(Ct,$t),E($t,Ht),E(Ct,Rt),E(Ct,Yt),E(Yt,Gt),E(Ct,zt),E(Lt,Vt),E(Lt,Ft),E(Ft,Kt),E(Ft,Ut),E(Ut,Zt),E(Ft,Jt),E(Lt,Xt),E(Lt,_t),E(_t,eo),E(_t,to),E(to,oo),E(_t,ao),E(_t,so),E(so,ro),E(_t,no),k(e,io,u),k(e,lo,u),E(lo,ho),k(e,co,u),k(e,uo,u),E(uo,fo),E(uo,wo),E(wo,go),E(uo,yo),E(uo,mo),E(mo,vo),E(uo,bo),E(uo,ko),E(ko,Eo),E(uo,So),k(e,Ao,u),k(e,Io,u),E(Io,jo),k(e,Po,u),k(e,qo,u),E(qo,No),E(qo,Oo),E(Oo,Mo),E(qo,xo),k(e,To,u),k(e,Wo,u),E(Wo,Qo),k(e,Bo,u),k(e,Lo,u),E(Lo,Co),k(e,Do,u),k(e,$o,u),k(e,Ho,u),k(e,Ro,u),E(Ro,Yo),E(Ro,Go),E(Go,zo),E(Ro,Vo)},d(e){e&&m(t),e&&m(n),e&&m(i),e&&m(h),e&&m(p),e&&m(S),e&&m(A),e&&m(j),e&&m(P),e&&m(x),e&&m(T),e&&m(H),e&&m(R),e&&m(K),e&&m(U),e&&m(J),e&&m(X),e&&m(Ae),e&&m(Ie),e&&m(At),e&&m(It),e&&m(Ot),e&&m(Mt),e&&m(Tt),e&&m(Wt),e&&m(Bt),e&&m(Lt),e&&m(io),e&&m(lo),e&&m(co),e&&m(uo),e&&m(Ao),e&&m(Io),e&&m(Po),e&&m(qo),e&&m(To),e&&m(Wo),e&&m(Bo),e&&m(Lo),e&&m(Do),e&&m($o),e&&m(Ho),e&&m(Ro)}}}function I(e){let t;const o=[j];let u={$$slots:{default:[A]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)u=a(u,o[e]);const d=new S({props:u});return{c(){s(d.$$.fragment)},l(e){r(d.$$.fragment,e)},m(e,o){n(d,e,o),t=!0},p(e,[t]){const a=0&t?i(o,[l(j)]):{};1&t&&(a.$$scope={dirty:t,ctx:e}),d.$set(a)},i(e){t||(h(d.$$.fragment,e),t=!0)},o(e){p(d.$$.fragment,e),t=!1},d(e){c(d,e)}}}const j={title:"3 Things Web Developers Should Know When Building Electron Apps",url:"3-things-web-developers-should-know-when-building-electron-apps",cover:"/images/blog/electron/cover.jpg",date:"2020-05-20T00:00:00.000Z",desc:"Before I started working on Codespace, I had never really built anything in Electron. The only thing I knew was that apps like Slack and Notion were using it to create cross-platform desktop apps, and that everyone on Hacker News hated it because it consumes a lot of RAM. 🤷‍♀️"};export default class extends e{constructor(e){super(),t(this,e,null,I,o,{})}}export{j as _metadata};
