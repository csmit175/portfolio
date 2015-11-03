app.directive('bgDirective', function () {
    return function (scope, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.bgDirective + ')',
            'background-repeat': 'no-repeat',
        });
    };
});