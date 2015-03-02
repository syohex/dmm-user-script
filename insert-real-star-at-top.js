(function() {
    var averageNode = document.querySelector("p.d-review__average strong");
    if (averageNode === null) {
        return;
    }

    var average = averageNode.innerHTML;

    var reviewsNode = document.querySelector("p.d-review__evaluates strong");
    if (reviewsNode === null) {
        return;
    }

    var reviews = reviewsNode.innerHTML;
    console.log(average + "(" + reviews + " reviews)");

    var reviewNode = document.querySelector('a[href="#review"]');
    if (reviewNode === null) {
        return;
    }

    var newNode = document.createElement("div");
    newNode.innerHTML += average + "(" + reviews + " reviews)";

    reviewNode.parentNode.appendChild(newNode);
}());
