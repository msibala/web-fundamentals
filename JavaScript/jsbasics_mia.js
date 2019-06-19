// var x = [];
// x.push('coding')
// x.push('dojo')
// x.push('rocks')
// x.pop()
// console.log(x)

// const y = [];
// y.push(88)

// var z = [9, 10, 6, 5, -1, 20, 13, 2]
var MyObjConstructor = function(name) {
  var myPrivateVar = "Hello";
  this.name = name;
  this.method = function() {
    console.log("I am a method");
  };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);

//prototypes
MyObjConstructor.prototype.methodname = function() {

}
function Cat(catName){
	var name = catName;
	this.getName = function() { 
	};
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function() {

};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
//we may change an instance's attributes rather than keeping the value set by the prototype
muffin.numLegs = 3;
// poor mutant cats: muffin__proto__numLegs ++;
//doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs