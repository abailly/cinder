function h(w){throw w;}var n=void 0,p=null;function J(w){return function(K){this[w]=K}}
var Ha=new function(){function w(d,a){return new g(function(){var c=a,b=e(d);if(b instanceof q){var f=b.c,b=b.d;return e(e(x)(f))(w(b,c))}c=a;if(e(d)===p)return c;h(["unhandled case in conc",[d,a]])})}function K(d,a){return new g(function(){if(e(a)===p)return p;var c=e(a);if(c instanceof q){var b=c.c,c=c.d;return e(e(x)(d))(e(e(x)(b))(K(d,c)))}h(["unhandled case in prependToAll",[d,a]])})}function Ia(d,a){return new g(function(){if(e(a)===p)return p;var c=e(a);if(c instanceof q){var b=c.c,c=c.d;return e(e(x)(b))(K(d,
c))}h(["unhandled case in intersperse",[d,a]])})}function Ja(d,a,c){return new g(function(){return new s(m(["user","Node",[]],l(["user","Node",[]],c).setAttributeNS(p,y(d),y(a))&&p||l(["user","Node",[]],c)))})}function Ka(d,a){return new g(function(){return new s(m(["user","Node",[]],document.createElementNS(y(d),y(a))))})}function La(d){return new g(function(){return new s(m(["user","Node",[]],l(["user","Node",[]],d).parentNode))})}function Ma(d){return new g(function(){return new s(m(["user","Node",
[]],document.createTextNode(y(d))))})}function X(d,a,c){return new g(function(){if(e(c)===p){var b=a;return new s(b)}var f=e(c);if(f instanceof q){var b=f.c,g=f.d;return H(e(e(d)(a))(b),function(a){return X(d,a,g)})}h(["unhandled case in foldM",[d,a,c]])})}function Na(d){return new g(function(){return L(l(["automatic"],d).instance+" ")})}function Y(d){return new g(function(){return e(Z(e(z(Q))(d)))(p)})}function Oa(d,a){return new g(function(){return L(l(["automatic"],a)["slot"+e(d)]!=p&&l(["automatic"],
a)["slot"+e(d)]+" "||"")})}function Pa(d){return new g(function(){return function(){var a=new g(function(){return R($,0,d)});return e(Qa(a))?S(aa(a,M),d):ba(k("Markup has more close elements than open"))}()})}function ca(d){return new g(function(){return new v(d)})}function R(d,a,c){return new g(function(){if(e(c)===p){var b=a;return b}b=e(c);if(b instanceof q){var f=b.c,g=b.d,b=a;return e(e(d)(f))(R(d,b,g))}h(["unhandled case in foldr",[d,a,c]])})}function ba(d){return new g(function(){h(y(d))})}
function Ra(d){return new g(function(){return L(JSON.stringify(l(["automatic"],d)))})}function da(d){return new g(function(){var a=e(d);if(a instanceof q)return S(da(a.d),k([a.c]));if(e(d)===p)return p;h(["unhandled case in reverse",[d]])})}function aa(d,a){return new g(function(){return 0===e(d)?p:e(Sa(d))?ba(k("replicate: negative length")):e(e(x)(a))(aa(T(d),a))})}function S(d,a){return new g(function(){return w(d,a)})}function Ta(d,a){return new g(function(){return new s(m(["unknown"],window.addEventListener(y(d),
l(["action",[["unknown"]]],a),e(!1))))})}function Ua(d,a){return new g(function(){if(e(a)instanceof t){var c=d;return Pa(c)}c=d;return e(e(u)(e(e(u)(c))(M)))(a)})}function ea(d,a){return new g(function(){return new U(d,a)})}function A(d,a,c,b){return new g(function(){return new V(d,a,c,b)})}function W(d,a){var c=e(a),b=d[2];if(c instanceof E){var f={instance:"Nullable"},b=l(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],c.a);n!==b&&(f.slot1=b);return f}return c instanceof C?f={instance:"Null"}:
c instanceof F?(f={instance:"Defined"},b=l(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],c.a),n!==b&&(f.slot1=b),f):c instanceof D?f={instance:"Undefined"}:c instanceof fa?(f={instance:"Just"},b=l(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],c.a),n!==b&&(f.slot1=b),f):c instanceof ga?f={instance:"Nothing"}:c instanceof ha?(f={instance:"Left"},b=l(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],c.a),n!==b&&(f.slot1=b),f):c instanceof ia?(f={instance:"Right"},b=l(b&&
b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],c.a),n!==b&&(f.slot1=b),f):c instanceof ja?(f={instance:"Ratio"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),f):c instanceof ka?f={instance:"GT"}:c instanceof la?f={instance:"LT"}:c instanceof ma?f={instance:"EQ"}:c instanceof E?(f={instance:"Nullable"},b=l(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],c.a),n!==b&&(f.slot1=b),f):c instanceof C?f={instance:"Null"}:c instanceof F?(f={instance:"Defined"},b=l(b&&b[0]?b[0]:
"automatic"===d[0]?["automatic"]:["unknown"],c.a),n!==b&&(f.slot1=b),f):c instanceof D?f={instance:"Undefined"}:c instanceof G?(f={instance:"Content"},b=l(["user","DString",[]],c.a),n!==b&&(f.slot1=b),f):c instanceof v?(f={instance:"Element"},b=l(["user","DString",[]],c.a),n!==b&&(f.slot1=b),f):c instanceof B?(f={instance:"Attribute"},b=l(["user","DString",[]],c.a),n!==b&&(f.slot1=b),b=l(["user","DString",[]],c.b),n!==b&&(f.slot2=b),f):c instanceof t?f={instance:"Complete"}:c instanceof U?(f={instance:"M"},
b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),f):c instanceof na?(f={instance:"L"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),f):c instanceof oa?(f={instance:"H"},b=e(c.a),n!==b&&(f.slot1=b),f):c instanceof pa?(f={instance:"V"},b=e(c.a),n!==b&&(f.slot1=b),f):c instanceof qa?(f={instance:"A"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),b=e(c.e),n!==b&&(f.slot3=b),b=e(c.f),n!==b&&(f.slot4=b),b=e(c.g),n!==b&&(f.slot5=b),b=e(c.h),n!==b&&(f.slot6=b),c=e(c.m),n!==c&&(f.slot7=
c),f):c instanceof ra?(f={instance:"C"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),b=e(c.e),n!==b&&(f.slot3=b),b=e(c.f),n!==b&&(f.slot4=b),b=e(c.g),n!==b&&(f.slot5=b),b=e(c.h),n!==b&&(f.slot6=b),f):c instanceof sa?(f={instance:"S"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),b=e(c.e),n!==b&&(f.slot3=b),b=e(c.f),n!==b&&(f.slot4=b),f):c instanceof V?(f={instance:"Q"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),b=e(c.e),n!==b&&(f.slot3=b),b=e(c.f),n!==b&&(f.slot4=
b),f):c instanceof ta?(f={instance:"T"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),f):c instanceof ua?f={instance:"Z"}:c instanceof va?(f={instance:"Translate"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),f):c instanceof wa?(f={instance:"Rotate"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),n!==b&&(f.slot2=b),b=e(c.e),n!==b&&(f.slot3=b),f):c instanceof xa?(f={instance:"Scale"},b=e(c.a),n!==b&&(f.slot1=b),f):c instanceof ya?(f={instance:"Scale2d"},b=e(c.a),n!==b&&(f.slot1=b),b=e(c.b),
n!==b&&(f.slot2=b),f):c instanceof G?(f={instance:"Content"},b=l(["user","DString",[]],c.a),n!==b&&(f.slot1=b),f):c instanceof v?(f={instance:"Element"},b=l(["user","DString",[]],c.a),n!==b&&(f.slot1=b),f):c instanceof B?(f={instance:"Attribute"},b=l(["user","DString",[]],c.a),n!==b&&(f.slot1=b),b=l(["user","DString",[]],c.b),n!==b&&(f.slot2=b),f):c instanceof t?f={instance:"Complete"}:a}function ya(d,a){this.a=d;this.b=a}function xa(d){this.a=d}function wa(d,a,c){this.a=d;this.b=a;this.e=c}function va(d,
a){this.a=d;this.b=a}function ua(){}function ta(d,a){this.a=d;this.b=a}function V(d,a,c,b){this.a=d;this.b=a;this.e=c;this.f=b}function sa(d,a,c,b){this.a=d;this.b=a;this.e=c;this.f=b}function ra(d,a,c,b,e,g){this.a=d;this.b=a;this.e=c;this.f=b;this.g=e;this.h=g}function qa(d,a,c,b,e,g,l){this.a=d;this.b=a;this.e=c;this.f=b;this.g=e;this.h=g;this.m=l}function pa(d){this.a=d}function oa(d){this.a=d}function na(d,a){this.a=d;this.b=a}function U(d,a){this.a=d;this.b=a}function t(){}function B(d,a){this.a=
d;this.b=a}function v(d){this.a=d}function G(d){this.a=d}function ma(){}function la(){}function ka(){}function ja(d,a){this.a=d;this.b=a}function ia(d){this.a=d}function ha(d){this.a=d}function ga(){}function fa(d){this.a=d}function D(){}function F(d){this.a=d}function C(){}function E(d){this.a=d}function Va(d){return new g(function(){return S(Na(d),e(Y(function(a){return Oa(a,d)}))(k([1,2,3,4,5,6,7,8])))})}function Wa(d){return function(a){return function(c){return new g(function(){return function(){return e(e(u)(e(e(u)(e(e(u)(I))(e(za)(d))))(e(Xa)(a))))(e(Aa)(e(function(a){return new g(function(){return e(Ya(a))?
Ra(a):k("indefinite")})})(c)))}()})}}}function Za(d){return function(a){return function(c){return new g(function(){return function(){return X(function(a){return function(c){return new g(function(){if(e(c)instanceof B){var g=e(c).a,l=e(c).b,k=a;return Ja(g,l,k)}if(e(c)instanceof v)return g=e(c).a,k=a,H(Ka(d,g),Ba(k));if(e(c)instanceof t)return k=a,La(k);if(e(c)instanceof G)return l=e(c).a,k=a,Ca(H(Ma(l),Ba(k)),new s(k));h(["unhandled case in go",[a,c]])})}},c,da(a))}()})}}}function Ba(d){return function(a){return new g(function(){return new s(m(["user",
"Node",[]],l(["user","Node",[]],d).appendChild(l(["user","Node",[]],a))&&p||l(["user","Node",[]],a)))})}}function $(d){return function(a){return new g(function(){var c=a;if(e(d)instanceof v)return Da(c);c=a;return e(d)instanceof t?T(c):c=a})}}function r(d){return function(a){return new g(function(){return new B(d,a)})}}function $a(d){return function(a){return new g(function(){return e(ab)(Ia(d,a))})}}function Q(d){return function(a){return new g(function(){return w(d,a)})}}function Z(d){return function(a){return function(c){return new g(function(){if(e(c)===
p){var b=a;return b}b=e(c);if(b instanceof q){var f=b.c,g=b.d,b=a;return e(e(d)(f))(R(d,b,g))}h(["unhandled case in foldr",[d,a,c]])})}}}function bb(d){return function(a){return new g(function(){var c=a,b=e(d);if(b instanceof q){var f=b.c,b=b.d;return e(e(x)(f))(w(b,c))}c=a;if(e(d)===p)return c;h(["unhandled case in conc",[d,a]])})}}function N(d){return function(a){return function(c){return new g(function(){return e(e(d)(c))(a)})}}}function z(d){return function(a){return function(c){return new g(function(){return e(d)(e(a)(c))})}}}
function cb(d){return new g(function(){return L(JSON.stringify(l(["automatic"],d)))})}function e(d,a){for(;d instanceof g;)d=d.l(a);return d}function g(d){this.i=!1;this.value=d}function s(d){this.value=d}function Ca(d,a){return H(d,function(){return a})}function H(d,a){return new g(function(){var c=e(d,!0);return e(a)(c.value)})}function l(d,a){var c=d[0],b=d[1],f;if("action"==c)f=function(){return l(b[0],e(a,!0).value)};else if("function"==c)f=function(){var c=a,d=b[b.length-1],f=b.length;if(1<
f){for(var c=e(c,!0),g=0;g<f-1&&c instanceof Function;g++)c=e(c(m(b[g],arguments[g])),!0);f=d[1];return"action"==d[0]?l(f[0],c.value):l(d,c)}h(Error("Nullary function?"))};else if("string"==c)f=y(a);else if("list"==c){c=[];for(a=e(a);a instanceof q;)c.push(l(b[0],a.c)),a=e(a.d);f=c}else if("tuple"==c){c=[];a=e(a);for(f=0;a instanceof q;)c.push(l(b[f++],a.c)),a=e(a.d);f=c}else if("defined"==c)a=e(a),f=a instanceof D?n:W(b[0],a.slot1);else if("nullable"==c)a=e(a),f=a instanceof C?p:W(b[0],a.slot1);
else if("double"==c||"int"==c||"bool"==c)f=e(a);else{if("ptr"==c||"unknown"==c)return a;"automatic"==c||"user"==c?(a instanceof g&&(a=e(a)),f=W(d,a)):h(Error("Unhandled Fay->JS translation type: "+c))}return f}function y(d){var a="";for(d=e(d);d instanceof q;)a+=d.c,d=e(d.d);return a}function L(d){return k(d)}function m(d,a){var c=d[0],b=d[1],e;if("action"==c)e=new s(m(b[0],a));else if("string"==c)e=k(a);else if("list"==c){var g=[],c=0;for(e=a.length;c<e;c++)g.push(m(b[0],a[c]));e=k(g)}else if("tuple"==
c){g=[];c=0;for(e=a.length;c<e;c++)g.push(m(b[c],a[c]));e=k(g)}else if("defined"==c)e=a===n?new D:new F(m(b[0],a));else if("nullable"==c)e=a===p?new C:new E(m(b[0],a));else if("int"==c)e=Math.round(a),e!==a&&h("Argument "+a+" is not an integer!");else{if("double"==c||"bool"==c||"ptr"==c||"unknown"==c)return a;"automatic"==c||"user"==c?(a&&a.instance?(b=d[2],b="Nullable"===a.instance?new E(m(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],a.slot1)):"Null"===a.instance?new C:"Defined"===a.instance?
new F(m(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],a.slot1)):"Undefined"===a.instance?new D:"Just"===a.instance?new fa(m(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],a.slot1)):"Nothing"===a.instance?new ga:"Left"===a.instance?new ha(m(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],a.slot1)):"Right"===a.instance?new ia(m(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],a.slot1)):"Ratio"===a.instance?new ja(a.slot1,a.slot2):"GT"===a.instance?new ka:"LT"===
a.instance?new la:"EQ"===a.instance?new ma:"Nullable"===a.instance?new E(m(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],a.slot1)):"Null"===a.instance?new C:"Defined"===a.instance?new F(m(b&&b[0]?b[0]:"automatic"===d[0]?["automatic"]:["unknown"],a.slot1)):"Undefined"===a.instance?new D:"Content"===a.instance?new G(m(["user","DString",[]],a.slot1)):"Element"===a.instance?new v(m(["user","DString",[]],a.slot1)):"Attribute"===a.instance?new B(m(["user","DString",[]],a.slot1),m(["user","DString",
[]],a.slot2)):"Complete"===a.instance?new t:"M"===a.instance?new U(a.slot1,a.slot2):"L"===a.instance?new na(a.slot1,a.slot2):"H"===a.instance?new oa(a.slot1):"V"===a.instance?new pa(a.slot1):"A"===a.instance?new qa(a.slot1,a.slot2,a.slot3,a.slot4,a.slot5,a.slot6,a.slot7):"C"===a.instance?new ra(a.slot1,a.slot2,a.slot3,a.slot4,a.slot5,a.slot6):"S"===a.instance?new sa(a.slot1,a.slot2,a.slot3,a.slot4):"Q"===a.instance?new V(a.slot1,a.slot2,a.slot3,a.slot4):"T"===a.instance?new ta(a.slot1,a.slot2):"Z"===
a.instance?new ua:"Translate"===a.instance?new va(a.slot1,a.slot2):"Rotate"===a.instance?new wa(a.slot1,a.slot2,a.slot3):"Scale"===a.instance?new xa(a.slot1):"Scale2d"===a.instance?new ya(a.slot1,a.slot2):"Content"===a.instance?new G(m(["user","DString",[]],a.slot1)):"Element"===a.instance?new v(m(["user","DString",[]],a.slot1)):"Attribute"===a.instance?new B(m(["user","DString",[]],a.slot1),m(["user","DString",[]],a.slot2)):"Complete"===a.instance?new t:a):b=a,e=b):h(Error("Unhandled JS->Fay translation type: "+
c))}return e}function q(d,a){this.c=d;this.d=a}function k(d){for(var a=p,c=d.length-1;0<=c;c--)a=new q(d[c],a);return a}function x(d){return function(a){return new q(d,a)}}function Da(d){return new g(function(){return e(d)+e(1)})}function T(d){return new g(function(){return e(d)-e(1)})}function Ya(d){return new g(function(){return e(d)>e(0)})}function Sa(d){return new g(function(){return e(d)<e(0)})}function Qa(d){return new g(function(){return e(d)>=e(0)})}g.prototype.l=function(d){return d?this.value():
this.i?this.value:(this.value=this.value(),this.i=!0,this.value)};var ab=new g(function(){return e(Z(bb))(p)}),M=new g(function(){return new t}),I=new g(function(){return p}),u=new g(function(){return N(x)}),O=new g(function(){return N(Q)}),db=new g(function(){return new s(m(["user","Node",[]],document.documentElement))}),za=new g(function(){return r(k("attributeName"))}),Ea=new g(function(){return r(k("d"))}),Fa=new g(function(){return r(k("fill"))}),Aa=new g(function(){return r(k("repeatCount"))}),
Ga=new g(function(){return r(k("values"))}),eb=new g(function(){return ca(k("animate"))}),fb=new g(function(){return ca(k("path"))}),gb=new g(function(){return k("http://www.w3.org/2000/svg")}),P=new g(function(){return Y(Va)}),hb=new g(function(){return e(z(Ea))(P)}),ib=new g(function(){return e(z(function(d){return e(e(u)(e(e(u)(I))(fb)))(d)}))(hb)}),jb=new g(function(){return e(z(function(d){return e(z(function(a){return e(z(function(a){return e(e(O)(e(e(u)(I))(eb)))(a)}))(a)}))(d)}))(Wa)}),lb=
new g(function(){return e(z(Ga))(kb)}),kb=new g(function(){return $a(k(";"))}),mb=new g(function(){return Za(gb)}),Xa=new g(function(){return e(z(r(k("dur"))))(cb)}),r=function(d){return function(a){return new g(function(){return new B(d,a)})}},M=new g(function(){return new t}),I=new g(function(){return p}),u=new g(function(){return N(x)}),O=new g(function(){return N(Q)}),$=function(d){return function(a){return new g(function(){var c=a;if(e(d)instanceof v)return Da(c);c=a;return e(d)instanceof t?
T(c):c=a})}},za=new g(function(){return r(k("attributeName"))}),Ea=new g(function(){return r(k("d"))}),Fa=new g(function(){return r(k("fill"))}),Aa=new g(function(){return r(k("repeatCount"))}),Ga=new g(function(){return r(k("values"))}),ob=new g(function(){return Ta(k("load"),nb)}),nb=new g(function(){var d=new g(function(){return Ua(e(e(u)(e(e(O)(e(e(u)(e(e(O)(I))(e(ib)(a))))(e(Fa)(k("cyan")))))(e(e(e(jb)(k("d")))(5.5))(9))))(e(lb)(k([e(P)(a),e(P)(c),e(P)(a)]))),M)}),a=new g(function(){return k([ea(200,
200),A(510,10,320,200),A(510,510,320,320),A(10,510,200,320),A(10,10,200,200)])}),c=new g(function(){return k([ea(10,10),A(125,75,190,10),A(125,125,190,190),A(75,125,10,190),A(75,75,10,10)])});return Ca(H(db,e(mb)(d)),new s(p))}),E=J("a"),C=function(){},F=J("a"),D=function(){},G=J("a"),v=J("a"),B=function(d,a){this.a=d;this.b=a},t=function(){};this.j=ob;this.k=e};Ha.k(Ha.j);
