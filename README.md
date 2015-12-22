# React-O-Meter

A simple Meter component built with React.

![alt text](https://github.com/jalba/react-o-meter/raw/master/images/meter.png "React-O-Meter")

## Usage

For the component, just pull this repon from github and import it.

## Implementation

In order to check it in action, go to the implementation folder and run: 

```
npm install
``` 
and then:

```
npm start
```

it should start a webpack dev server in http://localhost:3000.
The implementation will call a Geckoboard dummy api that generates random data and feed it
as props to the React-O-Meter component.


## Props

`min [number, required]` this is the minimum value to display.

`max [number, required]` the maximum value to display in the meter.

`value [number, required]` the value you are trying to display in the meter.

`unit [string, optional]` this string will be rendered next to the other values. It can be a
currency symbol, a symbol for degrees or any other unit of measurement you are trying to render.

## Tests
very simple test suite with mocha and React shallow rendering. Just run npm test to check it out.

## TODOS

With more time it would be great to do the following:

* I used [React inline styles](https://facebook.github.io/react/tips/inline-styles.html), which are great
for rapid prototyping, but you loose some of the niceties of traditional css. In this case, the styles 
are responsive, but just for landscape screen, in portrait mode it will look weird. It would be great to
extract the styles to css and be able to use media queries.
* Test, more tests: the component is now tested using [React shallow rendering](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering).
Again, as with inline styles, is a great tool for rapid prototyping, but for more serious tests, I would
use jsdom to fake a DOM, and actually render the component to it via TestUtils.

## Credits

The implementation is built on top of the excellent [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate), by Dan Abramov. 
