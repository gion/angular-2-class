 # Templates

Write code in `./exercises/app`.

Run `npm start` to:

1. compile your code in `/app` on change
1. open a browser to a live-reloading page
1. if you don't see what you expect, right click and click 'Inspect'. Then open the console tab

## Steps

1. use this ([cheatsheet](https://angular.io/docs/ts/latest/cheatsheet.html)) for reference - there's lots of syntax!
1. displaying data
  1. we want to display some data in our template
  1. define a `title` property for your `Product` component
  1. initialize a string property with a name of your choice
  1. use the interpolation syntax to display it in the template 
  1. also try out the interpolation syntax out with the `title=` attribute of an element. Hover over it to see the browser title popup - does the interpolation work?
1. configuring elements from data
  1. we want to use Angular to change the color of an element, controlled by a property
  1. define a property holding an HTML colour string
  1. use the attribute syntax to bind that to the `color` style attribute of an element in your `Product` template
1. responding to user input
  1. we want to define a purchase button, and count items purchases
  1. define a simple model track quantity the user wishes to buy
    1. define a `purchase` method for `Product`
    1. add a quantity property to `Product`, initialized to 0
    1. make the purchase method increment `quantity`
  1. show the user the quantity
    1. using the interpolation syntax, display the user the quantity they've bought
  1. define some UI to allow user to buy
    1. add a `<button>` to your `Product` template
    1. listen to click events on the button, first the `purchase` event

## Goal

![goal](templates.png)
