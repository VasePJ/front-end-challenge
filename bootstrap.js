var data = {
    cardTitle:"Lorem Ipsum",
    cardText: "Etiam suscipit massa eget nulla tincidunt, malesuada vestibulum nibh placerat. Nam at vehicula ipsum. Vestibulum vestibulum diam auctor odio suscipit auctor. Proin condimentum hendrerit nibh, nec sollicitudin ipsum fringilla in. Proin varius pretium metus, eu luctus quam finibus et. Fusce ac sollicitudin nibh. Quisque nisl ligula, tristique et sollicitudin quis, ornare quis mauris. Aliquam erat volutpat. Ut consequat gravida molestie.",
    firstImageSource: "https://lorempixel.com/g/150/150/",
    secondImageSource: "https://lorempixel.com/150/150/city/",
    thirdImageSource: "https://lorempixel.com/150/150/people/",
    firstHeading: "Fugiat nulla pariatur",
    secondHeading: "Cupidatat non proident",
    thirdHeading: "Anim id laborum",
    firstBodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa quam, ultricies vitae dolor vehicula, ultricies mollis sem.",
    secondBodyText: "Curabitur dignissim elit non ante congue, ut congue nulla interdum. Suspendisse aliquam aliquam sodales. Aenean at odio leo. Proin et libero tellus.",
    thirdBodyText: "In malesuada justo vel enim pulvinar, at finibus diam sodales. Curabitur nulla ligula, pellentesque consequat rutrum nec, pretium vitae nisi."
}

window.onload = function () {
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var compailedHtml = template(data);
    var content = document.getElementById("content");
    content.innerHTML = compailedHtml;
};