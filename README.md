Meteor Body Events
===================

Template.body.events working

Motivation
----------

* Meteor's body events do not support template rendered by Blaze.render.
* gwendall:body-events was able to hande events on Blaze rendered templates
* gwendall:body-events has an [issue](https://github.com/gwendall/meteor-body-events/issues/6) passing the template, brucejo:body-events fixes that bug.

This repository will be deleted if gwendall:body-events chooses to accept the [PR](https://github.com/gwendall/meteor-body-events/pull/7).


Installation
------------

``` sh
meteor add brucejo:body-events
```

Methods
-------


``` javascript
Template.body.events({
  "click .btn": function(e, data, tpl) {
    // e -> jquery event
    // data -> Blaze data context of the DOM element triggering the event handler
    // tpl -> the parent template instance for the target element
  }
})
```
