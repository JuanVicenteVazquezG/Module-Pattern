# Module-Pattern
____
Small practice to know how the Design *Pattern Module* works.


##Overview

In this repo we can know how the module pattern work using an *[IIFE] function*

[IIFE]: (https://developer.mozilla.org/en-US/docs/Glossary/IIFE);

```javascript
    const functionName = function (){
       let privateVariable= 1;
       function privateFunction(){
           return privateVariable;
       }
       return {
           const publicFunction: function(){
               publicVariable = privatefunction();
               console.log(publicVariable);
           },
           publicVariable: 0;
       }

    }
```

