function l(Q){throw Q;}var m=void 0,s=null;function ba(Q){return function(ca){this[Q]=ca}}
var Bb=new function(){function Q(e){return new f(function(){if(a(e)===s)return L(s);var b=a(e);if(b instanceof q)return H(b.d,Q(b.c));l(["unhandled case in sequence_",[e]])})}function ca(e,b){return new f(function(){return a(a(v)(e))(ca(t(e,b),b))})}function da(e,b){return new f(function(){var d=b,c=a(e);if(c instanceof q){var g=c.d,c=c.c;return a(a(v)(g))(da(c,d))}d=b;if(a(e)===s)return d;l(["unhandled case in conc",[e,b]])})}function Ka(e,b){return new f(function(){if(a(b)===s)return s;var d=a(b);
if(d instanceof q){var c=d.d,d=d.c;return a(a(v)(e))(a(a(v)(c))(Ka(e,d)))}l(["unhandled case in prependToAll",[e,b]])})}function Cb(e,b){return new f(function(){if(a(b)===s)return s;var d=a(b);if(d instanceof q){var c=d.d,d=d.c;return a(a(v)(c))(Ka(e,d))}l(["unhandled case in intersperse",[e,b]])})}function Db(e,b){var d=0;return new f(function(){for(;;){if(a(b)===s){var c=d;return c}c=a(b);if(c instanceof q){var g=c.d,f=c.c,c=d,h=e;e=h;d=a(a(h)(c))(g);b=f}else l(["unhandled case in foldl",[e,d,b]])}})}
function Eb(e){var b=0;return new f(function(){for(;;){var d=a(e);if(d instanceof q){var d=d.c,c=b;b=t(c,1);e=d}else return c=b}})}function Fb(a,b,d){return new f(function(){return new w(n(["user","Node",[]],k(["user","Node",[]],d).setAttributeNS(s,x(a),x(b))&&s||k(["user","Node",[]],d)))})}function Gb(a,b){return new f(function(){return new w(n(["user","Node",[]],document.createElementNS(x(a),x(b))))})}function Hb(a){return new f(function(){return new w(n(["user","Node",[]],k(["user","Node",[]],
a).parentNode))})}function Ib(a,b,d){return new f(function(){return new w(n(["user","Node",[]],(k(["user","Node",[]],d)[x(a)]=x(b))&&s||k(["user","Node",[]],d)))})}function Jb(a){return new f(function(){return new w(n(["user","Node",[]],document.createTextNode(x(a))))})}function La(e,b,d){return new f(function(){if(a(d)===s){var c=b;return L(c)}var g=a(d);if(g instanceof q){var c=g.d,f=g.c;return z(a(a(e)(b))(c),function(a){return La(e,a,f)})}l(["unhandled case in foldM",[e,b,d]])})}function Kb(e){return new f(function(){if(a(e)instanceof
Y)return h("translate");if(a(e)instanceof ea)return h("rotate");if(a(e)instanceof fa||a(e)instanceof ga)return h("scale");l(["unhandled case in transformType",[e]])})}function Lb(e){return new f(function(){if(a(e)instanceof Y){var b=a(e).a,d=a(e).b;return y(D(b),y(h(","),D(d)))}if(a(e)instanceof ea){var b=a(e).a,d=a(e).b,c=a(e).e;return y(D(b),y(h(","),y(D(d),y(h(","),D(c)))))}if(a(e)instanceof fa)return b=a(e).a,D(b);if(a(e)instanceof ga)return b=a(e).a,d=a(e).b,y(D(b),y(h(","),D(d)));l(["unhandled case in transformVals",
[e]])})}function Mb(a){return new f(function(){return Z(k(["automatic"],a).instance+" ")})}function Ma(e){return new f(function(){return a(Na(a(u(pa))(e)))(s)})}function Nb(e,b){return new f(function(){return Z(k(["automatic"],b)["slot"+a(e)]!=s&&k(["automatic"],b)["slot"+a(e)]+" "||"")})}function Ob(e){return new f(function(){return function(){var b=new f(function(){return ha(Oa,0,e)});return a(Pb(b))?y(qa(b,J),e):ia(h("Markup has more close elements than open"))}()})}function ha(e,b,d){return new f(function(){if(a(d)===
s){var c=b;return c}c=a(d);if(c instanceof q){var g=c.d,f=c.c,c=b;return a(a(e)(g))(ha(e,c,f))}l(["unhandled case in foldr",[e,b,d]])})}function ia(a){return new f(function(){l(x(a))})}function D(a){return new f(function(){return Z(JSON.stringify(k(["automatic"],a)))})}function Pa(e){return new f(function(){var b=a(e);if(b instanceof q)return y(Pa(b.c),h([b.d]));if(a(e)===s)return s;l(["unhandled case in reverse",[e]])})}function qa(e,b){return new f(function(){return 0===a(e)?s:a(Qa(e))?ia(h("replicate: negative length")):
a(a(v)(b))(qa(R(e,1),b))})}function y(a,b){return new f(function(){return da(a,b)})}function Qb(e,b){return new f(function(){if(a(b)instanceof B){var d=e;return Ob(d)}d=e;return a(a(p)(a(a(p)(d))(J)))(b)})}function ra(e,b){return new f(function(){return a(a(A)(a(a(p)(e))(J)))(b)})}function Ra(e,b){return new f(function(){return a(a(p)(a(a(p)(E))(a(Rb)(e))))(a(Sb)(b))})}function $(a){return new f(function(){return new sa(a)})}function S(a){return new f(function(){return new ta(a)})}function ua(a){return new f(function(){return new F(a)})}
function Tb(a,b){return new f(function(){return new Y(a,b)})}function Ub(e){return new f(function(){return-a(e)})}function Vb(e){return new f(function(){var b=Math.floor(a(e)*Math.random());return new w(b)})}function Wb(e){return new f(function(){return Math.round(a(e))})}function Xb(e){return new f(function(){return function(){function b(a){return new f(function(){return t(M(a,g),C)})}function d(a){return new f(function(){return R(I,a)})}var c=new f(function(){return Sa(Yb,Ta(e))}),g=new f(function(){return a(a(ja)(G))(t(M(c,
2),1))}),I=new f(function(){return t(C,G)}),k=new f(function(){return a(a(ja)(G))(2)});return ka(function(c){return function(e){return new f(function(){return h([aa(a(b)(e),I),N(a(b)(e),a(d)(c)),N(t(g,a(b)(e)),a(d)(c)),va(k,k,0,0,t(g,a(b)(e)),a(d)(c)),N(t(g,a(b)(e)),I),la])})}},e,Zb())}()})}function $b(e){return new f(function(){return function(){function b(a){return new f(function(){return t(M(k,ac(a)),I)})}function d(a){return new f(function(){return t(M(k,bc(a)),I)})}var c=new f(function(){return cc(e)}),
g=new f(function(){return wa(function(b){return M(M(a(a(ja)(b))(c),dc),2)},e)}),I=new f(function(){return t(C,k)}),k=new f(function(){return a(a(ja)(G))(2)});return ka(function(e){return function(c){return new f(function(){return h([aa(I,I),N(a(d)(e),a(b)(e)),N(a(d)(e),a(b)(e)),va(k,k,0,0,a(d)(t(e,c)),a(b)(t(e,c))),N(a(d)(t(e,c)),a(b)(t(e,c))),la])})}},new f(function(){return Ua(Va,0,g)}),g)}()})}function Wa(e,b,d,c){return new f(function(){var g=a(c);if(g instanceof q){var f=g.d,h=g.c,g=a(d);if(g instanceof
q){var k=g.d,n=g.c,g=a(b);if(g instanceof q){var p=g.d,g=g.c;return a(a(v)(a(a(a(e)(p))(k))(f)))(Wa(e,g,n,h))}}}return s})}function Xa(a){return new f(function(){return new w(n(["user","Node",[]],document.getElementById(x(a))))})}function cc(e){return new f(function(){return a(e)===s?ia(h("sum: empty list")):Db(Va,e)})}function wa(e,b){return new f(function(){if(a(b)===s)return s;var d=a(b);if(d instanceof q){var c=d.d,d=d.c;return a(a(v)(a(e)(c)))(wa(e,d))}l(["unhandled case in map",[e,b]])})}function Ua(e,
b,d){return new f(function(){var c=a(a(v)(b)),g;if(a(d)===s)g=s;else{var f=a(d);f instanceof q?(g=f.d,f=f.c,g=Ua(e,a(a(e)(b))(g),f)):l(["unhandled case",d])}return c(g)})}function bc(e){return new f(function(){return Math.sin(a(e))})}function ac(e){return new f(function(){return Math.cos(a(e))})}function aa(a,b){return new f(function(){return new xa(a,b)})}function va(a,b,d,c,g,h){return new f(function(){return new ya(a,b,d,c,0,g,h)})}function N(a,b){return new f(function(){return new za(a,b)})}function Sa(e,
b){return new f(function(){return a(e)(b)})}function Ta(a){return new f(function(){return Eb(a)})}function ka(e,b,d){return new f(function(){var c=a(d);if(c instanceof q){var g=c.d,f=c.c,c=a(b);if(c instanceof q){var h=c.d,c=c.c;return a(a(v)(a(a(e)(h))(g)))(ka(e,c,f))}}return s})}function Zb(){return new f(function(){return ca(1,R(3,1))})}function Aa(e,b){return new f(function(){var d=a(b);if(d instanceof q){var c=d.d,d=d.c;return H(a(e)(c),Aa(e,d))}if(a(b)===s)return L(s);l(["unhandled case in mapM_",
[e,b]])})}function Ya(e){return new f(function(){return z(z(Za,ec(e)),function(b){return z(a(a(fc)(gc))(b),function(e){return H(Aa(hc,b),H(a(a(a(ic)(Ba))(e))(b),Aa(jc,b)))})})})}function kc(e,b){return new f(function(){return new w(n(["unknown"],window.addEventListener(x(e),k(["action",[["unknown"]]],b),a(!1))))})}function Ca(e,b){var d=a(b),c=e[2];if(d instanceof T){var g={instance:"Nullable"},c=k(c&&c[0]?c[0]:"automatic"===e[0]?["automatic"]:["unknown"],d.a);m!==c&&(g.slot1=c);return g}return d instanceof
O?g={instance:"Null"}:d instanceof U?(g={instance:"Defined"},c=k(c&&c[0]?c[0]:"automatic"===e[0]?["automatic"]:["unknown"],d.a),m!==c&&(g.slot1=c),g):d instanceof P?g={instance:"Undefined"}:d instanceof $a?(g={instance:"Just"},c=k(c&&c[0]?c[0]:"automatic"===e[0]?["automatic"]:["unknown"],d.a),m!==c&&(g.slot1=c),g):d instanceof ab?g={instance:"Nothing"}:d instanceof bb?(g={instance:"Left"},c=k(c&&c[0]?c[0]:"automatic"===e[0]?["automatic"]:["unknown"],d.a),m!==c&&(g.slot1=c),g):d instanceof cb?(g={instance:"Right"},
c=k(c&&c[0]?c[0]:"automatic"===e[0]?["automatic"]:["unknown"],d.a),m!==c&&(g.slot1=c),g):d instanceof db?(g={instance:"Ratio"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),g):d instanceof eb?g={instance:"GT"}:d instanceof fb?g={instance:"LT"}:d instanceof gb?g={instance:"EQ"}:d instanceof T?(g={instance:"Nullable"},c=k(c&&c[0]?c[0]:"automatic"===e[0]?["automatic"]:["unknown"],d.a),m!==c&&(g.slot1=c),g):d instanceof O?g={instance:"Null"}:d instanceof U?(g={instance:"Defined"},c=k(c&&c[0]?
c[0]:"automatic"===e[0]?["automatic"]:["unknown"],d.a),m!==c&&(g.slot1=c),g):d instanceof P?g={instance:"Undefined"}:d instanceof V?(g={instance:"Content"},c=k(["user","DString",[]],d.a),m!==c&&(g.slot1=c),g):d instanceof F?(g={instance:"Element"},c=k(["user","DString",[]],d.a),m!==c&&(g.slot1=c),g):d instanceof K?(g={instance:"Attribute"},c=k(["user","DString",[]],d.a),m!==c&&(g.slot1=c),c=k(["user","DString",[]],d.b),m!==c&&(g.slot2=c),g):d instanceof W?(g={instance:"Property"},c=k(["user","DString",
[]],d.a),m!==c&&(g.slot1=c),c=k(["user","DString",[]],d.b),m!==c&&(g.slot2=c),g):d instanceof B?g={instance:"Complete"}:d instanceof xa?(g={instance:"M"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),g):d instanceof za?(g={instance:"L"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),g):d instanceof ta?(g={instance:"H"},c=a(d.a),m!==c&&(g.slot1=c),g):d instanceof sa?(g={instance:"V"},c=a(d.a),m!==c&&(g.slot1=c),g):d instanceof ya?(g={instance:"A"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),
m!==c&&(g.slot2=c),c=a(d.e),m!==c&&(g.slot3=c),c=a(d.f),m!==c&&(g.slot4=c),c=a(d.g),m!==c&&(g.slot5=c),c=a(d.h),m!==c&&(g.slot6=c),d=a(d.m),m!==d&&(g.slot7=d),g):d instanceof hb?(g={instance:"C"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),c=a(d.e),m!==c&&(g.slot3=c),c=a(d.f),m!==c&&(g.slot4=c),c=a(d.g),m!==c&&(g.slot5=c),c=a(d.h),m!==c&&(g.slot6=c),g):d instanceof ib?(g={instance:"S"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),c=a(d.e),m!==c&&(g.slot3=c),c=a(d.f),m!==c&&
(g.slot4=c),g):d instanceof jb?(g={instance:"Q"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),c=a(d.e),m!==c&&(g.slot3=c),c=a(d.f),m!==c&&(g.slot4=c),g):d instanceof kb?(g={instance:"T"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),g):d instanceof Da?g={instance:"Z"}:d instanceof Y?(g={instance:"Translate"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),g):d instanceof ea?(g={instance:"Rotate"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),c=a(d.e),m!==c&&
(g.slot3=c),g):d instanceof fa?(g={instance:"Scale"},c=a(d.a),m!==c&&(g.slot1=c),g):d instanceof ga?(g={instance:"Scale2d"},c=a(d.a),m!==c&&(g.slot1=c),c=a(d.b),m!==c&&(g.slot2=c),g):d instanceof V?(g={instance:"Content"},c=k(["user","DString",[]],d.a),m!==c&&(g.slot1=c),g):d instanceof F?(g={instance:"Element"},c=k(["user","DString",[]],d.a),m!==c&&(g.slot1=c),g):d instanceof K?(g={instance:"Attribute"},c=k(["user","DString",[]],d.a),m!==c&&(g.slot1=c),c=k(["user","DString",[]],d.b),m!==c&&(g.slot2=
c),g):d instanceof W?(g={instance:"Property"},c=k(["user","DString",[]],d.a),m!==c&&(g.slot1=c),c=k(["user","DString",[]],d.b),m!==c&&(g.slot2=c),g):d instanceof B?g={instance:"Complete"}:b}function ga(a,b){this.a=a;this.b=b}function fa(a){this.a=a}function ea(a,b,d){this.a=a;this.b=b;this.e=d}function Y(a,b){this.a=a;this.b=b}function Da(){}function kb(a,b){this.a=a;this.b=b}function jb(a,b,d,c){this.a=a;this.b=b;this.e=d;this.f=c}function ib(a,b,d,c){this.a=a;this.b=b;this.e=d;this.f=c}function hb(a,
b,d,c,g,f){this.a=a;this.b=b;this.e=d;this.f=c;this.g=g;this.h=f}function ya(a,b,d,c,g,f,h){this.a=a;this.b=b;this.e=d;this.f=c;this.g=g;this.h=f;this.m=h}function sa(a){this.a=a}function ta(a){this.a=a}function za(a,b){this.a=a;this.b=b}function xa(a,b){this.a=a;this.b=b}function B(){}function W(a,b){this.a=a;this.b=b}function K(a,b){this.a=a;this.b=b}function F(a){this.a=a}function V(a){this.a=a}function gb(){}function fb(){}function eb(){}function db(a,b){this.a=a;this.b=b}function cb(a){this.a=
a}function bb(a){this.a=a}function ab(){}function $a(a){this.a=a}function P(){}function U(a){this.a=a}function O(){}function T(a){this.a=a}function lb(a){return function(b){return function(d){return new f(function(){return new w(n(["unknown"],k(["user","Node",[]],d).addEventListener(x(a),k(["function",[["user","Event",[]],["action",[["unknown"]]]]],b),s)))})}}}function lc(){return new f(function(){return Ya(h("B"))})}function mc(){return new f(function(){return Ya(h("P"))})}function nc(e){return new f(function(){return y(Mb(e),
a(Ma(function(a){return Nb(a,e)}))(h([1,2,3,4,5,6,7,8])))})}function jc(a){return new f(function(){return new w(n(["user","Node",[]],k(["user","Node",[]],a).beginElement()||k(["user","Node",[]],a)))})}function oc(e){return function(b){return function(d){return new f(function(){return function(){return a(a(p)(a(a(p)(a(a(p)(E))(a(mb)(e))))(a(pc)(b))))(a(nb)(a(function(b){return new f(function(){return a(qc(b))?D(b):h("indefinite")})})(d)))}()})}}}function rc(e){return function(b){return function(d){return new f(function(){return function(){return La(function(b){return function(d){return new f(function(){if(a(d)instanceof
K){var f=a(d).a,h=a(d).b,k=b;return Fb(f,h,k)}if(a(d)instanceof F)return f=a(d).a,k=b,z(Gb(e,f),Ba(k));if(a(d)instanceof B)return k=b,Hb(k);if(a(d)instanceof W)return f=a(d).a,h=a(d).b,k=b,Ib(f,h,k);if(a(d)instanceof V)return h=a(d).a,k=b,H(z(Jb(h),Ba(k)),L(k));l(["unhandled case in go",[b,d]])})}},d,Pa(b))}()})}}}function sc(a){return new f(function(){return Z(String(x(a)).toLowerCase())})}function gc(a){return new f(function(){return new w(n(["user","Node",[]],k(["user","Node",[]],a).parentNode))})}
function ec(a){return function(b){return new f(function(){return new w(n(["list",[["user","Node",[]]]],k(["user","Node",[]],b).getElementsByClassName(x(a))))})}}function hc(a){return new f(function(){return new w(n(["unknown"],k(["user","Node",[]],a).parentNode.removeChild(k(["user","Node",[]],a))))})}function Ba(a){return function(b){return new f(function(){return new w(n(["user","Node",[]],k(["user","Node",[]],a).appendChild(k(["user","Node",[]],b))&&s||k(["user","Node",[]],b)))})}}function Oa(e){return function(b){return new f(function(){var d=
b;if(a(e)instanceof F)return t(d,1);d=b;return a(e)instanceof B?R(d,1):d=b})}}function r(a){return function(b){return new f(function(){return new K(a,b)})}}function ob(e){return function(b){return new f(function(){return a(pb)(Cb(e,b))})}}function tc(e){return function(b){return function(d){return new f(function(){var c=a(d);if(c instanceof q){var f=c.d,h=c.c,c=a(b);if(c instanceof q){var k=c.d,c=c.c;return a(a(v)(a(a(e)(k))(f)))(ka(e,c,h))}}return s})}}}function uc(e){return function(b){return new f(function(){return 0===
a(e)?s:a(Qa(e))?ia(h("replicate: negative length")):a(a(v)(b))(qa(R(e,1),b))})}}function pa(a){return function(b){return new f(function(){return da(a,b)})}}function Na(e){return function(b){return function(d){return new f(function(){if(a(d)===s){var c=b;return c}c=a(d);if(c instanceof q){var f=c.d,h=c.c,c=b;return a(a(e)(f))(ha(e,c,h))}l(["unhandled case in foldr",[e,b,d]])})}}}function vc(e){return function(b){return new f(function(){var d=b,c=a(e);if(c instanceof q){var f=c.d,c=c.c;return a(a(v)(f))(da(c,
d))}d=b;if(a(e)===s)return d;l(["unhandled case in conc",[e,b]])})}}function qb(e){return function(b){return new f(function(){if(a(b)===s)return s;var d=a(b);if(d instanceof q){var c=d.d,d=d.c;return a(a(v)(a(e)(c)))(wa(e,d))}l(["unhandled case in map",[e,b]])})}}function ma(e){return function(b){return function(d){return new f(function(){return a(a(e)(d))(b)})}}}function u(e){return function(b){return function(d){return new f(function(){return a(e)(a(b)(d))})}}}function na(a){return new f(function(){return Z(JSON.stringify(k(["automatic"],
a)))})}function Yb(e){return new f(function(){return a(e)})}function wc(e){return new f(function(){if(a(e)===s)return L(s);var b=a(e);if(b instanceof q)return H(b.d,Q(b.c));l(["unhandled case in sequence_",[e]])})}function rb(e){return new f(function(){return function(){return ha(function(b){return function(d){return new f(function(){return z(b,function(b){return z(d,function(d){return L(a(a(v)(b))(d))})})})}},L(s),e)}()})}function a(a,b){for(;a instanceof f;)a=a.l(b);return a}function f(a){this.i=
!1;this.value=a}function w(a){this.value=a}function H(a,b){return z(a,function(){return b})}function z(e,b){return new f(function(){var d=a(e,!0);return a(b)(d.value)})}function L(a){return new w(a)}function k(e,b){var d=e[0],c=e[1],g;if("action"==d)g=function(){return k(c[0],a(b,!0).value)};else if("function"==d)g=function(){var d=b,e=c[c.length-1],f=c.length;if(1<f){for(var d=a(d,!0),g=0;g<f-1&&d instanceof Function;g++)d=a(d(n(c[g],arguments[g])),!0);f=e[1];return"action"==e[0]?k(f[0],d.value):
k(e,d)}l(Error("Nullary function?"))};else if("string"==d)g=x(b);else if("list"==d){d=[];for(b=a(b);b instanceof q;)d.push(k(c[0],b.d)),b=a(b.c);g=d}else if("tuple"==d){d=[];b=a(b);for(g=0;b instanceof q;)d.push(k(c[g++],b.d)),b=a(b.c);g=d}else if("defined"==d)b=a(b),g=b instanceof P?m:Ca(c[0],b.slot1);else if("nullable"==d)b=a(b),g=b instanceof O?s:Ca(c[0],b.slot1);else if("double"==d||"int"==d||"bool"==d)g=a(b);else{if("ptr"==d||"unknown"==d)return b;"automatic"==d||"user"==d?(b instanceof f&&(b=
a(b)),g=Ca(e,b)):l(Error("Unhandled Fay->JS translation type: "+d))}return g}function x(e){var b="";for(e=a(e);e instanceof q;)b+=e.d,e=a(e.c);return b}function Z(a){return h(a)}function n(a,b){var d=a[0],c=a[1],f;if("action"==d)f=new w(n(c[0],b));else if("string"==d)f=h(b);else if("list"==d){var k=[],d=0;for(f=b.length;d<f;d++)k.push(n(c[0],b[d]));f=h(k)}else if("tuple"==d){k=[];d=0;for(f=b.length;d<f;d++)k.push(n(c[d],b[d]));f=h(k)}else if("defined"==d)f=b===m?new P:new U(n(c[0],b));else if("nullable"==
d)f=b===s?new O:new T(n(c[0],b));else if("int"==d)f=Math.round(b),f!==b&&l("Argument "+b+" is not an integer!");else{if("double"==d||"bool"==d||"ptr"==d||"unknown"==d)return b;"automatic"==d||"user"==d?(b&&b.instance?(c=a[2],c="Nullable"===b.instance?new T(n(c&&c[0]?c[0]:"automatic"===a[0]?["automatic"]:["unknown"],b.slot1)):"Null"===b.instance?new O:"Defined"===b.instance?new U(n(c&&c[0]?c[0]:"automatic"===a[0]?["automatic"]:["unknown"],b.slot1)):"Undefined"===b.instance?new P:"Just"===b.instance?
new $a(n(c&&c[0]?c[0]:"automatic"===a[0]?["automatic"]:["unknown"],b.slot1)):"Nothing"===b.instance?new ab:"Left"===b.instance?new bb(n(c&&c[0]?c[0]:"automatic"===a[0]?["automatic"]:["unknown"],b.slot1)):"Right"===b.instance?new cb(n(c&&c[0]?c[0]:"automatic"===a[0]?["automatic"]:["unknown"],b.slot1)):"Ratio"===b.instance?new db(b.slot1,b.slot2):"GT"===b.instance?new eb:"LT"===b.instance?new fb:"EQ"===b.instance?new gb:"Nullable"===b.instance?new T(n(c&&c[0]?c[0]:"automatic"===a[0]?["automatic"]:["unknown"],
b.slot1)):"Null"===b.instance?new O:"Defined"===b.instance?new U(n(c&&c[0]?c[0]:"automatic"===a[0]?["automatic"]:["unknown"],b.slot1)):"Undefined"===b.instance?new P:"Content"===b.instance?new V(n(["user","DString",[]],b.slot1)):"Element"===b.instance?new F(n(["user","DString",[]],b.slot1)):"Attribute"===b.instance?new K(n(["user","DString",[]],b.slot1),n(["user","DString",[]],b.slot2)):"Property"===b.instance?new W(n(["user","DString",[]],b.slot1),n(["user","DString",[]],b.slot2)):"Complete"===b.instance?
new B:"M"===b.instance?new xa(b.slot1,b.slot2):"L"===b.instance?new za(b.slot1,b.slot2):"H"===b.instance?new ta(b.slot1):"V"===b.instance?new sa(b.slot1):"A"===b.instance?new ya(b.slot1,b.slot2,b.slot3,b.slot4,b.slot5,b.slot6,b.slot7):"C"===b.instance?new hb(b.slot1,b.slot2,b.slot3,b.slot4,b.slot5,b.slot6):"S"===b.instance?new ib(b.slot1,b.slot2,b.slot3,b.slot4):"Q"===b.instance?new jb(b.slot1,b.slot2,b.slot3,b.slot4):"T"===b.instance?new kb(b.slot1,b.slot2):"Z"===b.instance?new Da:"Translate"===
b.instance?new Y(b.slot1,b.slot2):"Rotate"===b.instance?new ea(b.slot1,b.slot2,b.slot3):"Scale"===b.instance?new fa(b.slot1):"Scale2d"===b.instance?new ga(b.slot1,b.slot2):"Content"===b.instance?new V(n(["user","DString",[]],b.slot1)):"Element"===b.instance?new F(n(["user","DString",[]],b.slot1)):"Attribute"===b.instance?new K(n(["user","DString",[]],b.slot1),n(["user","DString",[]],b.slot2)):"Property"===b.instance?new W(n(["user","DString",[]],b.slot1),n(["user","DString",[]],b.slot2)):"Complete"===
b.instance?new B:b):c=b,f=c):l(Error("Unhandled JS->Fay translation type: "+d))}return f}function q(a,b){this.d=a;this.c=b}function h(a){for(var b=s,d=a.length-1;0<=d;d--)b=new q(a[d],b);return b}function v(a){return function(b){return new q(a,b)}}function M(e,b){return new f(function(){return a(e)*a(b)})}function Va(e){return function(b){return new f(function(){return a(e)+a(b)})}}function t(e,b){return new f(function(){return a(e)+a(b)})}function R(e,b){return new f(function(){return a(e)-a(b)})}
function ja(e){return function(b){return new f(function(){return a(e)/a(b)})}}function qc(e){return new f(function(){return a(e)>a(0)})}function Qa(e){return new f(function(){return a(e)<a(0)})}function Pb(e){return new f(function(){return a(e)>=a(0)})}f.prototype.l=function(a){return a?this.value():this.i?this.value:(this.value=this.value(),this.i=!0,this.value)};var dc=new f(function(){return Math.PI}),pb=new f(function(){return a(Na(vc))(s)}),fc=new f(function(){return a(u(function(e){return a(u(rb))(e)}))(qb)}),
ic=new f(function(){return a(u(function(e){return a(u(function(b){return a(u(wc))(b)}))(e)}))(tc)}),xc=new f(function(){return a(u(function(e){return a(u(rb))(e)}))(uc)}),J=new f(function(){return new B}),E=new f(function(){return s}),p=new f(function(){return ma(v)}),A=new f(function(){return ma(pa)}),Za=new f(function(){return new w(n(["user","Node",[]],document.documentElement))}),mb=new f(function(){return r(h("attributeName"))}),sb=new f(function(){return r(h("begin"))}),Ea=new f(function(){return r(h("d"))}),
tb=new f(function(){return r(h("end"))}),X=new f(function(){return r(h("fill"))}),Fa=new f(function(){return r(h("id"))}),nb=new f(function(){return r(h("repeatCount"))}),ub=new f(function(){return r(h("stroke"))}),vb=new f(function(){return r(h("stroke-width"))}),wb=new f(function(){return r(h("transform"))}),xb=new f(function(){return r(h("values"))}),yc=new f(function(){return ua(h("animate"))}),yb=new f(function(){return ua(h("path"))}),zc=new f(function(){return h("http://www.w3.org/2000/svg")}),
la=new f(function(){return new Da}),oa=new f(function(){return Ma(nc)}),Ac=new f(function(){return a(u(sc))(oa)}),Bc=new f(function(){return a(u(Ea))(oa)}),Cc=new f(function(){return a(u(Ea))(Ac)}),Dc=new f(function(){return a(u(function(e){return a(a(p)(a(a(p)(E))(yb)))(e)}))(Bc)}),Ga=new f(function(){return a(u(function(e){return a(a(p)(a(a(p)(E))(yb)))(e)}))(Cc)}),Ec=new f(function(){return a(u(wb))(a(u(ob(h(","))))(qb(function(a){return new f(function(){return y(Kb(a),y(h("("),y(Lb(a),h(")"))))})})))}),
Ha=new f(function(){return a(u(function(e){return a(u(function(b){return a(u(function(b){return a(a(A)(a(a(p)(E))(yc)))(b)}))(b)}))(e)}))(oc)}),Fc=new f(function(){return a(a(p)(a(a(p)(E))(a(sb)(h("indefinite")))))(a(tb)(h("indefinite")))}),Hc=new f(function(){return a(u(xb))(Gc)}),Gc=new f(function(){return ob(h(";"))}),Ic=new f(function(){return rc(zc)}),Ia=new f(function(){return r(h("class"))}),pc=new f(function(){return a(u(r(h("dur"))))(na)}),Rb=new f(function(){return a(u(r(h("from"))))(na)}),
Jc=new f(function(){return a(u(r(h("opacity"))))(na)}),Sb=new f(function(){return a(u(r(h("to"))))(na)}),r=function(a){return function(b){return new f(function(){return new K(a,b)})}},J=new f(function(){return new B}),E=new f(function(){return s}),p=new f(function(){return ma(v)}),A=new f(function(){return ma(pa)}),Oa=function(e){return function(b){return new f(function(){var d=b;if(a(e)instanceof F)return t(d,1);d=b;return a(e)instanceof B?R(d,1):d=b})}},mb=new f(function(){return r(h("attributeName"))}),
sb=new f(function(){return r(h("begin"))}),Ea=new f(function(){return r(h("d"))}),tb=new f(function(){return r(h("end"))}),X=new f(function(){return r(h("fill"))}),Fa=new f(function(){return r(h("id"))}),nb=new f(function(){return r(h("repeatCount"))}),ub=new f(function(){return r(h("stroke"))}),vb=new f(function(){return r(h("stroke-width"))}),wb=new f(function(){return r(h("transform"))}),xb=new f(function(){return r(h("values"))}),Kc=new f(function(){function e(b){return function(c){return function(d){return new f(function(){return a(a(A)(a(a(p)(a(a(p)(a(a(p)(a(a(a(Ha)(h("d")))(k))(1)))(Ja)))(a(Ia)(b))))(a(Hc)(h([a(oa)(c),
a(oa)(d)])))))(Fc)})}}}function b(b){return function(c){return function(d){return new f(function(){return Qb(ra(a(a(A)(a(a(p)(a(Dc)(b)))(a(X)(d))))(a(a(a(e)(h("B")))(b))(c)),a(a(a(e)(h("P")))(c))(b)),J)})}}}var d=new f(function(){return a(a(p)(a(a(p)(a(a(p)(ra(a(a(p)(a(a(A)(a(a(p)(ra(a(a(p)(a(a(A)(a(a(p)(a(a(p)(a(a(A)(a(a(p)(a(a(A)(a(a(p)(a(a(p)(a(a(A)(a(a(p)(a(a(p)(a(Ga)(h([aa(C,C),$(G),S(G)]))))(a(X)(h("none")))))(a(Jc)(0))))(a(a(a(Ha)(h("opacity")))(k))(1))))(a(Ia)(h("B")))))(Ja)))(Ra(0,0.6))))(J)))(a(a(a(Ha)(h("opacity")))(k))(1))))(a(Ia)(h("P")))))(Ja)))(Ra(0.6,
0))))(J),a(Ga)(h([aa(t(t(C,G),20),t(C,40)),N(0,-20),va(20,20,1,1,20,20),la])))))(a(X)(h("plum")))))(zb)))(a(Fa)(h("pBtn"))),a(Ga)(h([aa(t(t(C,G),0),t(C,80)),S(10),$(20),S(10),$(-10),S(10),$(10),S(10),$(20),S(-40),la])))))(a(X)(h("tan")))))(a(Fa)(h("bBtn")))))(J)}),c=new f(function(){return a(a(A)(a(a(p)(a(a(p)(E))(ua(h("g")))))(a(Ec)(h([Tb(g,g)])))))(zb)}),g=new f(function(){return M(Ub(C),1.25)}),k=2.5;return z(a(a(xc)(Ta(Ab)))(Vb(Wb(G))),function(e){return function(){var g=new f(function(){return Xb(e)});
return function(){var k=new f(function(){return $b(e)});return function(){var e=new f(function(){return Sa(pb,Wa(b,k,g,Ab))});return H(z(Za,a(Ic)(a(a(A)(a(a(A)(c))(e)))(d))),H(z(Xa(h("pBtn")),a(lb(h("click")))(mc)),z(Xa(h("bBtn")),a(lb(h("click")))(lc))))}()}()}()})}),C=new f(function(){return-200}),G=400,Ab=new f(function(){return h([h("lightpink"),h("lightblue"),h("lightsalmon"),h("lightgreen"),h("khaki"),h("cyan")])}),zb=new f(function(){return a(a(p)(a(a(p)(E))(a(ub)(h("white")))))(a(vb)(h("4")))}),
Ja=new f(function(){return a(X)(h("freeze"))}),Lc=new f(function(){return kc(h("load"),Kc)}),T=ba("a"),O=function(){},U=ba("a"),P=function(){},V=ba("a"),F=ba("a"),K=function(a,b){this.a=a;this.b=b},W=function(a,b){this.a=a;this.b=b},B=function(){};this.j=Lc;this.k=a};Bb.k(Bb.j);
