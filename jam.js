let cat = {
  name: 'jamjam',
  age: 2,
  weight: 5,
  breed:"bosi",
  isFemale: true,
  isLive: true,

  health: 100,
  food: 100,
  water: 100,

  liveInterval: null,

  bark: function () {
    if (this.isLiving()) {
      VRFieldOfView.displayDogeSay('Miao!Miao!Miao!');
      this.water--;
    }
  },
  sayName: function () {
    if (this)
  },
  play: function () {
    cosnsole.log("jamjam!");
    this.food -= 10;
    this.water -= 10;
  },
  showStatus: function() {
    console.log('health: ' + this.health)
    console.log('food ' + this.food)
    console.log('water ' + this.water)
  },
  showstatus: function {
    return 'health: ' + this.health + '; food: ' + this.food + '; water: ' + this.water;
  }
  isTired: function (){
    if (this.food >= 20 && this.water >= 20){
      return false;
    } else {
      return true;
    }
  },
  live: function (){
    let self = this;
    this.liveInterval = setInterval(function(){
      self.water = self.water - 5;
      self.food = self.food - 3;
      self.checkStatus();
    }, 500);
    this.showStatus();
  },
  checkStatus: function (){
    if (this.water < 0){
      this.water = 0;
      this.bark();
    }
    if (this.food < 0){
      this.food = 0;
      this.bark();
    }
    if (this.water == 0 || this.food == 0){
      this.health -= 5;
    }
    if (this.water > 50 || this.food > 50){
      this.health += 5;
    }
    if (this.health == 0){
      this.dead();
    }
    this.showStatus();
  },
  dead: function(){
    clearInterval(this.liveInterval);
    console.log("I'm dead.'");
  },
  showStatus: function() {
    console.log('health: ' + this.health)
    console.log('food ' + this.food)
    console.log('water ' + this.water)
  },
dead: function () {
  clearInterval(this.liveInterval);
},
feed: function(){
  this.water = 100;
  this.food = 100;
  return "jamjam吃饱了!";
},
isLiving: function() {
  if (this.isLive) {
    return true;
  }
  return false;
},


cat.live();
cat.bark();
console.log('My name is ' + cat.sayName());
cat.showStatus();
cat.checkStatus();