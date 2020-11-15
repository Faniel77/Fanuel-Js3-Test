1. In the project there was a house that did not have a lord. Which house was this? And what did you do to deal with this situation?

2. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
   (_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)

// Answer

I used FetchAPI as it's much easier to write and it gives me more flexibility when combined with "then" from promises. The exercise requires to make 2 fetch API's and it's convenient to make the second Fetch API based on the results of the first one(at least that was my plan);

3. Let's say you were a huge fan of Object Oriented Programming and the api offered the option to get all the data you needed at once. What classes would you make and what functions would they have?
   (_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
   (_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
   (_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

   //Answer

   From my understanding. the concept of classes is to recreate as many objects as we want in a more simpler and short code. In this project, the houses and characters have a sort of parent- child relationship and I think it would have been possible to create the 'characters' from the 'house' class(I haven't done it in my project though).

Example (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    // get the area of the rectangle
  }

  calcArea() {
    // calculate the area of the rectangle
  }
}
```
