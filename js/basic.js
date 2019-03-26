function Person(name, age, interest, introduction, greet) {
    this.name = name;
    this.age = age;
    this.interest = interest;
    this.introduction = "<textarea>";
    this.greet = "Hello, I'm ";
 };

  var firstPerson = new Person("John", 50, "Software Development, Graphic Designing, and Fullstack Development");
  var secondPerson = new Person("Mary", 20, "Adobe illustrator, Invision, and Adobe after effect");
  var thirdPerson = new Person("Isaac", 40, "Computor Science, Information Technology, and Designing");

    document.getElementById("demo1").innerHTML = firstPerson.greet + firstPerson.name + " and am " + firstPerson.age + " years old. My interests are " + firstPerson.interest + "." + "<br><br>" + "INTRODUCTION:<br>" + firstPerson.introduction;
    document.getElementById("demo2").innerHTML = secondPerson.greet + secondPerson.name + " and am " + secondPerson.age + " years old. My interests are " + secondPerson.interest + "." + "<br><br>" + "INTRODUCTION:<br>" + secondPerson.introduction;
    document.getElementById("demo3").innerHTML = thirdPerson.greet + thirdPerson.name + " and am " + thirdPerson.age + " years old. My interests are " + thirdPerson.interest + "." + "<br><br>" + "INTRODUCTION:<br>" + thirdPerson.introduction;