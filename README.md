## Introduction

Following code has been written to solve code challenge - Brewery.

Develop a solution that shows Baz the current temperature of each container 
and notifies them when the temperatures are out of the correct range.

Beer 1 4 °C - 6°C
Beer 2 5 °C - 6°C
Beer 3 4 °C - 7°C
Beer 4 6 °C - 8°C
Beer 5 3 °C - 5°C

## Purpose of the code

Sends notifications if
* Any container with beer falls out of the specified temperature range
* Else it will show the current temperature of the container

## Requirements

* Using Math.random, I am populating the random temperature of the thermometer of the each container
* Baz who is driving the truck can see the state of each container every second [configurable]

## How to run


change the value of 'test' inside config file to false
```
npm run start:dev
```

## Tests


Change the value of 'test' inside config file to true
```
npm run test
```

```
npm run test:watch
