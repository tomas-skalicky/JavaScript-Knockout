function Friend(name) {
    return {
        name: ko.observable(name)
    };
}

// Here's my data model
var ViewModel = function (first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.dependentObservable(function () {
        return this.firstName() + " " + this.lastName();
    }, this);


    this.friends = ko.observableArray();

    // Methods of the ViewModel "class".
    this.addFriend = function (friendName) {
        this.friends.push(new Friend(friendName));
    };
};


var viewModelInstance = new ViewModel("Planet", "Earth");
viewModelInstance.addFriend("Alex");
viewModelInstance.addFriend("Tomas");
viewModelInstance.addFriend("Gerhard");


// This makes Knockout get to work
ko.applyBindings(viewModelInstance);
