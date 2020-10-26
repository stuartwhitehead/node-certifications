const assert = require('assert');
// TODO:
// implement a way to create a prototype chain
// of leopard -> lynx -> cat
// leopard prototype must have ONLY a hiss method
// lynx prototype must have ONLY a purr method
// cat prototype must have ONLY a meow methodconst felix = null

function inherit(proto) {
  const ChainLink = function() {};
  ChainLink.prototype = proto;
  return new ChainLink;
}

function createBehaviour(behavior) {
  return () => `${this.name} is ${behavior}!`;
}

function Leopard(name) {
  this.name = name;
}

Leopard.prototype.hiss = createBehaviour("hissing!");

function Lynx(name) {
  Leopard.call(this, name);
}

Lynx.prototype = inherit(Leopard.prototype);

Lynx.prototype.purr = createBehaviour("purring!");

function Cat(name) {
  Lynx.call(this, name);
}

Cat.prototype = inherit(Lynx.prototype);

Cat.prototype.meow = createBehaviour("meowing");

const felix = new Cat("Felix");

felix.hiss();
felix.purr();
felix.hiss();

const felixProto = Object.getPrototypeOf(felix);                      //Or Cat.
const felixProtoProto = Object.getPrototypeOf(felixProto);            //Or Lynx.
const felixProtoProtoProto = Object.getPrototypeOf(felixProtoProto);  //Or Leopard.

assert(Object.getOwnPropertyNames(felixProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProto).length, 1);
assert(Object.getOwnPropertyNames(felixProtoProtoProto).length, 1);

assert(typeof felixProto.meow, 'function');
assert(typeof felixProtoProto.purr, 'function');
assert(typeof felixProtoProtoProto.hiss, 'function');
console.log('prototype checks passed!');
