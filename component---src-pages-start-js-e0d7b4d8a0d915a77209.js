/*! For license information please see component---src-pages-start-js-e0d7b4d8a0d915a77209.js.LICENSE.txt */
(self.webpackChunkmaking_connections_visible=self.webpackChunkmaking_connections_visible||[]).push([[497,545],{1133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(2932),i=n(5444);function o(e){var t=e.links,n=e.what,a=e.cta;return r.createElement("div",{className:"container-fluid",style:{height:"90vh"}},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-10"},r.createElement("div",{className:"row"},r.createElement("p",{className:"bigText display-2"},"BECAUSE STORING THIS DATA COMPANIES KNOW:"),r.createElement("p",{className:"display-4"},n))),r.createElement("div",{className:"col-12"},r.createElement("div",{className:"row row-cols-3"},t.map((function(e,t){var n=e.href,a=e.text;return r.createElement("div",null,r.createElement("div",{style:{border:"1px solid black"}},r.createElement("a",{href:n,target:"blank",key:t+a},r.createElement("img",{src:a,className:"img-fluid",alt:"Responsive image"}))))}))),r.createElement(i.rU,{to:"/useSafely"},r.createElement("div",{className:"row pt-5"},r.createElement("p",{className:"bigText display-3",style:{borderTop:"1px solid black"}},a))),r.createElement(i.rU,{to:"/menu"},r.createElement("div",{className:"row "},r.createElement("p",{className:"bigText display-3",style:{borderTop:"1px solid black"}},"explore more"))))))}function s(e){var t=e.end,n=Object.assign({what:"how much you use your spaces in the house (map + dirtiness) how untidy you are",links:[{href:"http://ww.....",text:"A"},{href:"http://ww.....",text:"A"},{href:"http://ww.....",text:"A"}],cta:"can i use roomba more safely?"},t);return r.createElement("section",{className:"bg-primary"},r.createElement(o,n))}n(2884).p8.registerPlugin(a.i)},5567:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Re}});var r=n(7294),a=n(2884),i=n(2932),o=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,s=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,l=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,c=/(^[#\.][a-z]|[a-y][a-z])/i,h=Math.PI/180,u=180/Math.PI,f=Math.sin,p=Math.cos,g=Math.abs,d=Math.sqrt,m=Math.atan2,v=1e8,y=function(e){return"string"==typeof e},x=function(e){return"number"==typeof e},w={},b={},N=1e5,E=function(e){return Math.round((e+v)%1*N)/N||(e<0?0:1)},P=function(e){return Math.round(e*N)/N||0},L=function(e){return Math.round(1e10*e)/1e10||0},M=function(e,t,n,r){var a=e[t],i=1===r?6:V(a,n,r);if(i&&i+n+2<a.length)return e.splice(t,0,a.slice(0,n+i+2)),a.splice(0,n+i),1},C=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},T=function(e,t){var n=e.length,r=e[n-1]||[],a=r.length;n&&t[0]===r[a-2]&&t[1]===r[a-1]&&(t=r.concat(t.slice(2)),n--),e[n]=t};function A(e){var t,n=(e=y(e)&&c.test(e)&&document.querySelector(e)||e).getAttribute?e:0;return n&&(e=e.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(t=n._gsPath[e])&&!t._dirty?t:n._gsPath[e]=G(e)):e?y(e)?G(e):x(e[0])?[e]:e:console.warn("Expecting a <path> element or an SVG path data string")}function S(e){var t,n=0;for(e.reverse();n<e.length;n+=2)t=e[n],e[n]=e[n+1],e[n+1]=t;e.reversed=!e.reversed}var _={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function k(e,t){var n,r,a,i,o,l,c,h,u,f,p,g,d,m,v,y,x,w,b,N,E,P,L=e.tagName.toLowerCase(),M=.552284749831;return"path"!==L&&e.getBBox?(l=function(e,t){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(e.attributes),i=a.length;for(t=","+t+",";--i>-1;)n=a[i].nodeName.toLowerCase(),t.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[i].nodeValue);return r}(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),P=function(e,t){for(var n=t?t.split(","):[],r={},a=n.length;--a>-1;)r[n[a]]=+e.getAttribute(n[a])||0;return r}(e,_[L]),"rect"===L?(i=P.rx,o=P.ry||i,r=P.x,a=P.y,f=P.width-2*i,p=P.height-2*o,n=i||o?"M"+(y=(m=(d=r+i)+f)+i)+","+(w=a+o)+" V"+(b=w+p)+" C"+[y,N=b+o*M,v=m+i*M,E=b+o,m,E,m-(m-d)/3,E,d+(m-d)/3,E,d,E,g=r+i*(1-M),E,r,N,r,b,r,b-(b-w)/3,r,w+(b-w)/3,r,w,r,x=a+o*(1-M),g,a,d,a,d+(m-d)/3,a,m-(m-d)/3,a,m,a,v,a,y,x,y,w].join(",")+"z":"M"+(r+f)+","+a+" v"+p+" h"+-f+" v"+-p+" h"+f+"z"):"circle"===L||"ellipse"===L?("circle"===L?h=(i=o=P.r)*M:(i=P.rx,h=(o=P.ry)*M),n="M"+((r=P.cx)+i)+","+(a=P.cy)+" C"+[r+i,a+h,r+(c=i*M),a+o,r,a+o,r-c,a+o,r-i,a+h,r-i,a,r-i,a-h,r-c,a-o,r,a-o,r+c,a-o,r+i,a-h,r+i,a].join(",")+"z"):"line"===L?n="M"+P.x1+","+P.y1+" L"+P.x2+","+P.y2:"polyline"!==L&&"polygon"!==L||(n="M"+(r=(u=(e.getAttribute("points")+"").match(s)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===L&&(n+=","+r+","+a+"z")),l.setAttribute("d",q(l._gsRawPath=G(n))),t&&e.parentNode&&(e.parentNode.insertBefore(l,e),e.parentNode.removeChild(e)),l):e}function O(e,t,n){var r,a=e[t],i=e[t+2],o=e[t+4];return a+=(i-a)*n,a+=((i+=(o-i)*n)-a)*n,r=i+(o+(e[t+6]-o)*n-i)*n-a,a=e[t+1],a+=((i=e[t+3])-a)*n,a+=((i+=((o=e[t+5])-i)*n)-a)*n,P(m(i+(o+(e[t+7]-o)*n-i)*n-a,r)*u)}function R(e,t,n){n=void 0===n?1:L(n)||0,t=L(t)||0;var r=Math.max(0,~~(g(n-t)-1e-8)),a=function(e){for(var t=[],n=0;n<e.length;n++)t[n]=C(e[n],e[n].slice(0));return C(e,t)}(e);if(t>n&&(t=1-t,n=1-n,function(e,t){var n=e.length;for(t||e.reverse();n--;)e[n].reversed||S(e[n])}(a),a.totalLength=0),t<0||n<0){var i=Math.abs(~~Math.min(t,n))+1;t+=i,n+=i}a.totalLength||I(a);var o,s,l,c,h,u,f,p,d=n>1,m=Y(a,t,w,!0),v=Y(a,n,b),y=v.segment,x=m.segment,N=v.segIndex,E=m.segIndex,P=v.i,A=m.i,_=E===N,k=P===A&&_;if(d||r){for(o=N<E||_&&P<A||k&&v.t<m.t,M(a,E,A,m.t)&&(E++,o||(N++,k?(v.t=(v.t-m.t)/(1-m.t),P=0):_&&(P-=A))),1-(n-t)<1e-5?N=E-1:!v.t&&N?N--:M(a,N,P,v.t)&&o&&E++,1===m.t&&(E=(E+1)%a.length),h=[],f=1+(u=a.length)*r,p=E,f+=(u-E+N)%u,c=0;c<f;c++)T(h,a[p++%u]);a=h}else if(l=1===v.t?6:V(y,P,v.t),t!==n)for(s=V(x,A,k?m.t/v.t:m.t),_&&(l+=s),y.splice(P+l+2),(s||A)&&x.splice(0,A+s),c=a.length;c--;)(c<E||c>N)&&a.splice(c,1);else y.angle=O(y,P+l,0),m=y[P+=l],v=y[P+1],y.length=y.totalLength=0,y.totalPoints=a.totalPoints=8,y.push(m,v,m,v,m,v,m,v);return a.totalLength=0,a}function B(e,t,n){t=t||0,e.samples||(e.samples=[],e.lookup=[]);var r,a,i,o,s,l,c,h,u,f,p,m,y,x,w,b,N,E=~~e.resolution||12,P=1/E,L=n?t+6*n+1:e.length,M=e[t],C=e[t+1],T=t?t/6*E:0,A=e.samples,S=e.lookup,_=(t?e.minLength:v)||v,k=A[T+n*E-1],O=t?A[T-1]:0;for(A.length=S.length=0,a=t+2;a<L;a+=6){if(i=e[a+4]-M,o=e[a+2]-M,s=e[a]-M,h=e[a+5]-C,u=e[a+3]-C,f=e[a+1]-C,l=c=p=m=0,g(i)<1e-5&&g(h)<1e-5&&g(s)+g(f)<1e-5)e.length>8&&(e.splice(a,6),a-=6,L-=6);else for(r=1;r<=E;r++)l=c-(c=((x=P*r)*x*i+3*(y=1-x)*(x*o+y*s))*x),p=m-(m=(x*x*h+3*y*(x*u+y*f))*x),(b=d(p*p+l*l))<_&&(_=b),O+=b,A[T++]=O;M+=i,C+=h}if(k)for(k-=O;T<A.length;T++)A[T]+=k;if(A.length&&_)for(e.totalLength=N=A[A.length-1]||0,e.minLength=_,b=w=0,r=0;r<N;r+=_)S[b++]=A[w]<r?++w:w;else e.totalLength=A[0]=0;return t?O-A[t/2-1]:O}function I(e,t){var n,r,a;for(a=n=r=0;a<e.length;a++)e[a].resolution=~~t||12,r+=e[a].length,n+=B(e[a]);return e.totalPoints=r,e.totalLength=n,e}function V(e,t,n){if(n<=0||n>=1)return 0;var r=e[t],a=e[t+1],i=e[t+2],o=e[t+3],s=e[t+4],l=e[t+5],c=r+(i-r)*n,h=i+(s-i)*n,u=a+(o-a)*n,f=o+(l-o)*n,p=c+(h-c)*n,g=u+(f-u)*n,d=s+(e[t+6]-s)*n,m=l+(e[t+7]-l)*n;return h+=(d-h)*n,f+=(m-f)*n,e.splice(t+2,4,P(c),P(u),P(p),P(g),P(p+(h-p)*n),P(g+(f-g)*n),P(h),P(f),P(d),P(m)),e.samples&&e.samples.splice(t/6*e.resolution|0,0,0,0,0,0,0,0),6}function Y(e,t,n,r){n=n||{},e.totalLength||I(e),(t<0||t>1)&&(t=E(t));var a,i,o,s,l,c,h,u=0,f=e[0];if(t)if(1===t)h=1,c=(f=e[u=e.length-1]).length-8;else{if(e.length>1){for(o=e.totalLength*t,l=c=0;(l+=e[c++].totalLength)<o;)u=c;t=(o-(s=l-(f=e[u]).totalLength))/(l-s)||0}a=f.samples,i=f.resolution,o=f.totalLength*t,s=(c=f.lookup[~~(o/f.minLength)]||0)?a[c-1]:0,(l=a[c])<o&&(s=l,l=a[++c]),h=1/i*((o-s)/(l-s)+c%i),c=6*~~(c/i),r&&1===h&&(c+6<f.length?(c+=6,h=0):u+1<e.length&&(c=h=0,f=e[++u]))}else h=c=u=0,f=e[0];return n.t=h,n.i=c,n.path=e,n.segment=f,n.segIndex=u,n}function z(e,t,n,r){var a,i,o,s,l,c,h,u,f,p=e[0],g=r||{};if((t<0||t>1)&&(t=E(t)),e.length>1){for(o=e.totalLength*t,l=c=0;(l+=e[c++].totalLength)<o;)p=e[c];t=(o-(s=l-p.totalLength))/(l-s)||0}return a=p.samples,i=p.resolution,o=p.totalLength*t,s=(c=p.lookup[t<1?~~(o/p.minLength):p.lookup.length-1]||0)?a[c-1]:0,(l=a[c])<o&&(s=l,l=a[++c]),f=1-(h=1/i*((o-s)/(l-s)+c%i)||0),u=p[c=6*~~(c/i)],g.x=P((h*h*(p[c+6]-u)+3*f*(h*(p[c+4]-u)+f*(p[c+2]-u)))*h+u),g.y=P((h*h*(p[c+7]-(u=p[c+1]))+3*f*(h*(p[c+5]-u)+f*(p[c+3]-u)))*h+u),n&&(g.angle=p.totalLength?O(p,c,h>=1?1-1e-9:h||1e-9):p.angle||0),g}function X(e,t,n,r,a,i,o){for(var s,l,c,h,u,f=e.length;--f>-1;)for(l=(s=e[f]).length,c=0;c<l;c+=2)h=s[c],u=s[c+1],s[c]=h*t+u*r+i,s[c+1]=h*n+u*a+o;return e._dirty=1,e}function j(e,t,n,r,a,i,o,s,l){if(e!==s||t!==l){n=g(n),r=g(r);var c=a%360*h,u=p(c),m=f(c),v=Math.PI,y=2*v,x=(e-s)/2,w=(t-l)/2,b=u*x+m*w,N=-m*x+u*w,E=b*b,P=N*N,L=E/(n*n)+P/(r*r);L>1&&(n=d(L)*n,r=d(L)*r);var M=n*n,C=r*r,T=(M*C-M*P-C*E)/(M*P+C*E);T<0&&(T=0);var A=(i===o?-1:1)*d(T),S=A*(n*N/r),_=A*(-r*b/n),k=(e+s)/2+(u*S-m*_),O=(t+l)/2+(m*S+u*_),R=(b-S)/n,B=(N-_)/r,I=(-b-S)/n,V=(-N-_)/r,Y=R*R+B*B,z=(B<0?-1:1)*Math.acos(R/d(Y)),X=(R*V-B*I<0?-1:1)*Math.acos((R*I+B*V)/d(Y*(I*I+V*V)));isNaN(X)&&(X=v),!o&&X>0?X-=y:o&&X<0&&(X+=y),z%=y,X%=y;var j,G=Math.ceil(g(X)/(y/4)),U=[],D=X/G,q=4/3*f(D/2)/(1+p(D/2)),W=u*n,Z=m*n,F=m*-r,H=u*r;for(j=0;j<G;j++)b=p(a=z+j*D),N=f(a),R=p(a+=D),B=f(a),U.push(b-q*N,N+q*b,R+q*B,B-q*R,R,B);for(j=0;j<U.length;j+=2)b=U[j],N=U[j+1],U[j]=b*W+N*F+k,U[j+1]=b*Z+N*H+O;return U[j-2]=s,U[j-1]=l,U}}function G(e){var t,n,r,a,i,s,c,h,u,f,p,d,m,v,y,x=(e+"").replace(l,(function(e){var t=+e;return t<1e-4&&t>-1e-4?0:t})).match(o)||[],w=[],b=0,N=0,E=2/3,P=x.length,L=0,M="ERROR: malformed path: "+e,C=function(e,t,n,r){f=(n-e)/3,p=(r-t)/3,c.push(e+f,t+p,n-f,r-p,n,r)};if(!e||!isNaN(x[0])||isNaN(x[1]))return console.log(M),w;for(t=0;t<P;t++)if(m=i,isNaN(x[t])?s=(i=x[t].toUpperCase())!==x[t]:t--,r=+x[t+1],a=+x[t+2],s&&(r+=b,a+=N),t||(h=r,u=a),"M"===i)c&&(c.length<8?w.length-=1:L+=c.length),b=h=r,N=u=a,c=[r,a],w.push(c),t+=2,i="L";else if("C"===i)c||(c=[0,0]),s||(b=N=0),c.push(r,a,b+1*x[t+3],N+1*x[t+4],b+=1*x[t+5],N+=1*x[t+6]),t+=6;else if("S"===i)f=b,p=N,"C"!==m&&"S"!==m||(f+=b-c[c.length-4],p+=N-c[c.length-3]),s||(b=N=0),c.push(f,p,r,a,b+=1*x[t+3],N+=1*x[t+4]),t+=4;else if("Q"===i)f=b+(r-b)*E,p=N+(a-N)*E,s||(b=N=0),b+=1*x[t+3],N+=1*x[t+4],c.push(f,p,b+(r-b)*E,N+(a-N)*E,b,N),t+=4;else if("T"===i)f=b-c[c.length-4],p=N-c[c.length-3],c.push(b+f,N+p,r+(b+1.5*f-r)*E,a+(N+1.5*p-a)*E,b=r,N=a),t+=2;else if("H"===i)C(b,N,b=r,N),t+=1;else if("V"===i)C(b,N,b,N=r+(s?N-b:0)),t+=1;else if("L"===i||"Z"===i)"Z"===i&&(r=h,a=u,c.closed=!0),("L"===i||g(b-r)>.5||g(N-a)>.5)&&(C(b,N,r,a),"L"===i&&(t+=2)),b=r,N=a;else if("A"===i){if(v=x[t+4],y=x[t+5],f=x[t+6],p=x[t+7],n=7,v.length>1&&(v.length<3?(p=f,f=y,n--):(p=y,f=v.substr(2),n-=2),y=v.charAt(1),v=v.charAt(0)),d=j(b,N,+x[t+1],+x[t+2],+x[t+3],+v,+y,(s?b:0)+1*f,(s?N:0)+1*p),t+=n,d)for(n=0;n<d.length;n++)c.push(d[n]);b=c[c.length-2],N=c[c.length-1]}else console.log(M);return(t=c.length)<6?(w.pop(),t=0):c[0]===c[t-2]&&c[1]===c[t-1]&&(c.closed=!0),w.totalPoints=L+t,w}function U(e,t){void 0===t&&(t=1);for(var n=e[0],r=0,a=[n,r],i=2;i<e.length;i+=2)a.push(n,r,e[i],r=(e[i]-n)*t/2,n=e[i],-r);return a}function D(e,t,n){g(e[0]-e[2])<1e-4&&g(e[1]-e[3])<1e-4&&(e=e.slice(2));var r,a,i,o,s,l,c,h,u,v,y,x,w,b,N=e.length-2,E=+e[0],L=+e[1],M=+e[2],C=+e[3],T=[E,L,E,L],A=M-E,S=C-L,_=Math.abs(e[N]-E)<.001&&Math.abs(e[N+1]-L)<.001;for(isNaN(n)&&(n=Math.PI/10),_&&(e.push(M,C),M=E,C=L,E=e[N-2],L=e[N-1],e.unshift(E,L),N+=4),t=t||0===t?+t:1,s=2;s<N;s+=2)r=E,a=L,E=M,L=C,M=+e[s+2],C=+e[s+3],E===M&&L===C||(x=(l=A)*l+(h=S)*h,w=(A=M-E)*A+(S=C-L)*S,b=(c=M-r)*c+(u=C-a)*u,y=(i=Math.acos((x+w-b)/d(4*x*w)))/Math.PI*t,v=d(x)*y,y*=d(w),E===r&&L===a||(i>n?(o=m(u,c),T.push(P(E-p(o)*v),P(L-f(o)*v),P(E),P(L),P(E+p(o)*y),P(L+f(o)*y))):(o=m(h,l),T.push(P(E-p(o)*v),P(L-f(o)*v)),o=m(S,A),T.push(P(E),P(L),P(E+p(o)*y),P(L+f(o)*y)))));return E!==M||L!==C||T.length<4?T.push(P(M),P(C),P(M),P(C)):T.length-=2,_&&(T.splice(0,6),T.length=T.length-6),T}function q(e){x(e[0])&&(e=[e]);var t,n,r,a,i="",o=e.length;for(n=0;n<o;n++){for(a=e[n],i+="M"+P(a[0])+","+P(a[1])+" C",t=a.length,r=2;r<t;r++)i+=P(a[r++])+","+P(a[r++])+" "+P(a[r++])+","+P(a[r++])+" "+P(a[r++])+","+P(a[r])+" ";a.closed&&(i+="z")}return i}var W,Z,F,H,K,Q,J,$,ee="transform",te=ee+"Origin",ne=function(e){var t=e.ownerDocument||e;!(ee in e.style)&&"msTransform"in e.style&&(te=(ee="msTransform")+"Origin");for(;t.parentNode&&(t=t.parentNode););if(Z=window,J=new he,t){W=t,F=t.documentElement,H=t.body;var n=t.createElement("div"),r=t.createElement("div");H.appendChild(n),n.appendChild(r),n.style.position="static",n.style[ee]="translate3d(0,0,1px)",$=r.offsetParent!==n,H.removeChild(n)}return t},re=[],ae=[],ie=function(e){return e.ownerSVGElement||("svg"===(e.tagName+"").toLowerCase()?e:null)},oe=function e(t){return"fixed"===Z.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?e(t):void 0)},se=function e(t,n){if(t.parentNode&&(W||ne(t))){var r=ie(t),a=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i=r?n?"rect":"g":"div",o=2!==n?0:100,s=3===n?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=W.createElementNS?W.createElementNS(a.replace(/^https/,"http"),i):W.createElement(i);return n&&(r?(Q||(Q=e(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+s+")"),Q.appendChild(c)):(K||((K=e(t)).style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+s+"px;left:"+o+"px",K.appendChild(c))),c}throw"Need document and parent."},le=function(e,t){var n,r,a,i,o,s,l=ie(e),c=e===l,h=l?re:ae,u=e.parentNode;if(e===Z)return e;if(h.length||h.push(se(e,1),se(e,2),se(e,3)),n=l?Q:K,l)a=c?{x:0,y:0}:e.getBBox(),(r=e.transform?e.transform.baseVal:{}).numberOfItems?(i=(r=r.numberOfItems>1?function(e){for(var t=new he,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t}(r):r.getItem(0).matrix).a*a.x+r.c*a.y,o=r.b*a.x+r.d*a.y):(r=J,i=a.x,o=a.y),t&&"g"===e.tagName.toLowerCase()&&(i=o=0),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+i)+","+(r.f+o)+")"),(c?l:u).appendChild(n);else{if(i=o=0,$)for(r=e.offsetParent,a=e;a&&(a=a.parentNode)&&a!==r&&a.parentNode;)(Z.getComputedStyle(a)[ee]+"").length>4&&(i=a.offsetLeft,o=a.offsetTop,a=0);if("absolute"!==(s=Z.getComputedStyle(e)).position)for(r=e.offsetParent;u!==r;)i+=u.scrollLeft||0,o+=u.scrollTop||0,u=u.parentNode;(a=n.style).top=e.offsetTop-o+"px",a.left=e.offsetLeft-i+"px",a[ee]=s[ee],a[te]=s[te],a.position="fixed"===s.position?"fixed":"absolute",e.parentNode.appendChild(n)}return n},ce=function(e,t,n,r,a,i,o){return e.a=t,e.b=n,e.c=r,e.d=a,e.e=i,e.f=o,e},he=function(){function e(e,t,n,r,a,i){void 0===e&&(e=1),void 0===t&&(t=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===i&&(i=0),ce(this,e,t,n,r,a,i)}var t=e.prototype;return t.inverse=function(){var e=this.a,t=this.b,n=this.c,r=this.d,a=this.e,i=this.f,o=e*r-t*n||1e-10;return ce(this,r/o,-t/o,-n/o,e/o,(n*i-r*a)/o,-(e*i-t*a)/o)},t.multiply=function(e){var t=this.a,n=this.b,r=this.c,a=this.d,i=this.e,o=this.f,s=e.a,l=e.c,c=e.b,h=e.d,u=e.e,f=e.f;return ce(this,s*t+c*r,s*n+c*a,l*t+h*r,l*n+h*a,i+u*t+f*r,o+u*n+f*a)},t.clone=function(){return new e(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(e){var t=this.a,n=this.b,r=this.c,a=this.d,i=this.e,o=this.f;return t===e.a&&n===e.b&&r===e.c&&a===e.d&&i===e.e&&o===e.f},t.apply=function(e,t){void 0===t&&(t={});var n=e.x,r=e.y,a=this.a,i=this.b,o=this.c,s=this.d,l=this.e,c=this.f;return t.x=n*a+r*o+l||0,t.y=n*i+r*s+c||0,t},e}();function ue(e,t,n,r){if(!e||!e.parentNode||(W||ne(e)).documentElement===e)return new he;var a=function(e){for(var t,n;e&&e!==H;)(n=e._gsap)&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t}(e),i=ie(e)?re:ae,o=le(e,n),s=i[0].getBoundingClientRect(),l=i[1].getBoundingClientRect(),c=i[2].getBoundingClientRect(),h=o.parentNode,u=!r&&oe(e),f=new he((l.left-s.left)/100,(l.top-s.top)/100,(c.left-s.left)/100,(c.top-s.top)/100,s.left+(u?0:Z.pageXOffset||W.scrollLeft||F.scrollLeft||H.scrollLeft||0),s.top+(u?0:Z.pageYOffset||W.scrollTop||F.scrollTop||H.scrollTop||0));if(h.removeChild(o),a)for(s=a.length;s--;)(l=a[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return t?f.inverse():f}var fe,pe,ge,de,me="x,translateX,left,marginLeft,xPercent".split(","),ve="y,translateY,top,marginTop,yPercent".split(","),ye=Math.PI/180,xe=function(e,t,n,r){for(var a=t.length,i=2===r?0:r,o=0;o<a;o++)e[i]=parseFloat(t[o][n]),2===r&&(e[i+1]=0),i+=2;return e},we=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},be=function(e){var t,n=e[0],r=e[1];for(t=2;t<e.length;t+=2)n=e[t]+=n,r=e[t+1]+=r},Ne=function(e,t,n,r,a,i,o,s,l){"cubic"===o.type?t=[t]:(t.unshift(we(n,r,s),a?we(n,a,l):0),o.relative&&be(t),t=[(a?D:U)(t,o.curviness)]);return t=i(Ce(t,n,o)),Te(e,n,r,t,"x",s),a&&Te(e,n,a,t,"y",l),I(t,o.resolution||(0===o.curviness?20:12))},Ee=function(e){return e},Pe=/[-+\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,Le=function(e,t,n){var r,a,i,o=ue(e);return"svg"===(e.tagName+"").toLowerCase()?(a=(r=e.viewBox.baseVal).x,i=r.y,r.width||(r={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):(r=t&&e.getBBox&&e.getBBox(),a=i=0),t&&"auto"!==t&&(a+=t.push?t[0]*(r?r.width:e.offsetWidth||0):t.x,i+=t.push?t[1]*(r?r.height:e.offsetHeight||0):t.y),n.apply(a||i?o.apply({x:a,y:i}):{x:o.e,y:o.f})},Me=function(e,t,n,r){var a,i=ue(e.parentNode,!0,!0),o=i.clone().multiply(ue(t)),s=Le(e,n,i),l=Le(t,r,i),c=l.x,h=l.y;return o.e=o.f=0,"auto"===r&&t.getTotalLength&&"path"===t.tagName.toLowerCase()&&(a=t.getAttribute("d").match(Pe)||[],c+=(a=o.apply({x:+a[0],y:+a[1]})).x,h+=a.y),(a||t.getBBox&&e.getBBox&&t.ownerSVGElement===e.ownerSVGElement)&&(c-=(a=o.apply(t.getBBox())).x,h-=a.y),o.e=c-s.x,o.f=h-s.y,o},Ce=function(e,t,n){var r,a,i,o=n.align,s=n.matrix,l=n.offsetX,c=n.offsetY,h=n.alignOrigin,u=e[0][0],f=e[0][1],p=we(t,"x"),g=we(t,"y");return e&&e.length?(o&&("self"===o||(r=de(o)[0]||t)===t?X(e,1,0,0,1,p-u,g-f):(h&&!1!==h[2]?fe.set(t,{transformOrigin:100*h[0]+"% "+100*h[1]+"%"}):h=[we(t,"xPercent")/-100,we(t,"yPercent")/-100],i=(a=Me(t,r,h,"auto")).apply({x:u,y:f}),X(e,a.a,a.b,a.c,a.d,p+a.e-(i.x-a.e),g+a.f-(i.y-a.f)))),s?X(e,s.a,s.b,s.c,s.d,s.e,s.f):(l||c)&&X(e,1,0,0,1,l||0,c||0),e):A("M0,0L0,0")},Te=function(e,t,n,r,a,i){var o=t._gsap,s=o.harness,l=s&&s.aliases&&s.aliases[n],c=l&&l.indexOf(",")<0?l:n,h=e._pt=new pe(e._pt,t,c,0,0,Ee,0,o.set(t,c,e));h.u=ge(o.get(t,c,i))||0,h.path=r,h.pp=a,e._props.push(c)},Ae={version:"3.6.0",name:"motionPath",register:function(e,t,n){ge=(fe=e).utils.getUnit,de=fe.utils.toArray,pe=n},init:function(e,t){if(!fe)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof t&&!t.style&&t.path||(t={path:t});var n,r,a,i,o=[],s=t,l=s.path,c=s.autoRotate,h=s.unitX,u=s.unitY,f=s.x,p=s.y,g=l[0],d=(a=t.start,i="end"in t?t.end:1,function(e){return a||1!==i?R(e,a,i):e});if(this.rawPaths=o,this.target=e,(this.rotate=c||0===c)&&(this.rOffset=parseFloat(c)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=ge(e._gsap.get(e,this.rProp))||0),Array.isArray(l)&&!("closed"in l)&&"number"!=typeof g){for(r in g)!f&&~me.indexOf(r)?f=r:!p&&~ve.indexOf(r)&&(p=r);for(r in f&&p?o.push(Ne(this,xe(xe([],l,f,0),l,p,1),e,f,p,d,t,h||ge(l[0][f]),u||ge(l[0][p]))):f=p=0,g)r!==f&&r!==p&&o.push(Ne(this,xe([],l,r,2),e,r,0,d,t,ge(l[0][r])))}else I(n=d(Ce(A(t.path),e,t)),t.resolution),o.push(n),Te(this,e,t.x||"x",n,"x",t.unitX||"px"),Te(this,e,t.y||"y",n,"y",t.unitY||"px")},render:function(e,t){var n=t.rawPaths,r=n.length,a=t._pt;for(e>1?e=1:e<0&&(e=0);r--;)z(n[r],e,!r&&t.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,e),a=a._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?ye:1)+t.rOffset+t.ru,t,e)},getLength:function(e){return I(A(e)).totalLength},sliceRawPath:R,getRawPath:A,pointsToSegment:D,stringToRawPath:G,rawPathToString:q,transformRawPath:X,getGlobalMatrix:ue,getPositionOnPath:z,cacheRawPathMeasurements:I,convertToPath:function(e,t){return de(e).map((function(e){return k(e,!1!==t)}))},convertCoordinates:function(e,t,n){var r=ue(t,!0,!0).multiply(ue(e));return n?r.apply(n):r},getAlignMatrix:Me,getRelativePosition:function(e,t,n,r){var a=Me(e,t,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function(e,t){var n=xe(xe([],e,(t=t||{}).x||"x",0),e,t.y||"y",1);return t.relative&&be(n),["cubic"===t.type?n:D(n,t.curviness)]}};(fe||"undefined"!=typeof window&&(fe=window.gsap)&&fe.registerPlugin&&fe)&&fe.registerPlugin(Ae);var Se=n(5072),_e=n(1133),ke=n(4487);function Oe(e){var t=e.Svg,n=e.collectedData,i=e.prefix,o=e.end,s=i||"test_svg",l=[{top:"15%",left:"12%"},{top:"34%",left:"23%"},{top:"44%",left:"13%"},{top:"64%",left:"33%"}],c=(0,r.useRef)();return(0,r.useLayoutEffect)((function(){var e=a.p8.timeline({scrollTrigger:{trigger:"#panels-container",start:"top top",pin:!0,scrub:0,invalidateOnRefresh:!0,end:function(){return"+="+(c.current.offsetWidth-innerWidth)}}});e.to("#path-of-data",{xPercent:-66,ease:"none"},0),e.to("#"+s+"__simuove",{motionPath:{path:"#"+s+"__path",align:"#"+s+"__path",alignOrigin:[.5,.9]}},0),e.to(".box",{transform:"translateY(0)",opacity:2,duration:.05})}),[t]),r.createElement("div",null,r.createElement("section",{id:"panels",className:"bg-primary bigText"},r.createElement("div",{id:"panels-container",style:{width:"300%"},ref:c},r.createElement("div",{className:"panel"},r.createElement(t,{className:"position-relative",id:"path-of-data"}),r.createElement("div",null,n.map((function(e,t){var n=e.label,a=e.description,i=e.style;return r.createElement("div",{className:"box",key:n+t,style:Object.assign({},l[t],i)},r.createElement("div",{style:{padding:"15px"}},r.createElement("p",null,n,":"),r.createElement("p",{className:"fontText"},a)))})))))),r.createElement("section",null,r.createElement(_e.default,{end:o})))}function Re(){var e=(0,r.useState)(),t=e[0],n=e[1],a=0;if("undefined"!=typeof window){var i=new URLSearchParams(window.location.search);a=void 0!==i.get("selected")?i.get("selected"):0}var o=ke.Z[a],s=o.options,l=o.Icon,c=o.end;return r.createElement("div",null,r.createElement(Se.Z,{className:"sticky-top"}),r.createElement("main",{id:"content",className:"site-content",role:"main"},r.createElement("section",{id:"intro",className:"full-screen  "},r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"row justify-content-center align-items-center",style:{height:"90vh"}},r.createElement("div",{className:"col-6"},r.createElement(l,{style:{height:"40vh"},className:"mx-auto w-100"})),r.createElement("div",{className:"col-6"},r.createElement("p",{className:"bigText display-4"},"Choose one option to",r.createElement("br",null),"interact with the device"),s.map((function(e,t){var a=e.label,i=e.Svg,o=e.collectedData,s=e.prefix;return r.createElement("div",{className:"row pb-3",key:t},r.createElement("div",{className:"col-5"},r.createElement("a",{className:"btn btn-lg btn-outline-info",href:"#discover-data",onClick:function(){return n({label:a,Svg:i,collectedData:o,prefix:s,end:c})}},r.createElement("span",{className:" display-7"},a))))})))))),r.createElement("div",{className:"w-100",id:"discover-data"}),t&&r.createElement(Oe,t)))}a.p8.registerPlugin(i.i),a.p8.registerPlugin(Ae)}}]);
//# sourceMappingURL=component---src-pages-start-js-e0d7b4d8a0d915a77209.js.map