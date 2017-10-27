const observableModule = require("data/observable");
const ObservableArray = require("data/observable-array").ObservableArray;

exports.loaded = function (args) {
    const component = args.object;
    let numberOfStars = component.value;
    const totalStars = component.max || 5;
    const color = component.color || 'black';
    const flooredVal = Math.floor(numberOfStars);
    const ratingsBar = component.getViewById("ratingsBar");

    let halfStars = false;

    if (Math.ceil(numberOfStars) !== Math.floor(numberOfStars)) {
        if (Math.round(numberOfStars) !== Math.ceil(numberOfStars)) {
            halfStars = true;
            numberOfStars = flooredVal;
        } else {
            numberOfStars = flooredVal + 1;
        }
    }

    const viewModel = observableModule.fromObject({
        items: new ObservableArray([]),
        color: color
    });

    for (let i = 0; i < numberOfStars; i++) {
        viewModel.items.push({
            "type": "full", // currently useless, you can use it if you wish
            "icon": "★" // set fontAwesome icons here
        })
    }
    if (halfStars) {
        viewModel.items.push({
            "type": "half", // currently useless, you can use it if you wish
            "icon": "✫" // set fontAwesome icons here
        })
        numberOfStars = numberOfStars + 1;
    }
    if ((totalStars - numberOfStars) > 0 ) {
        let extra = totalStars - numberOfStars;
        for (let i = 0; i < extra; i++) {
            viewModel.items.push({
                "type": "extra", // currently useless, you can use it if you wish
                "icon": "☆" // set fontAwesome icons here
            })
        }
    }

    ratingsBar.bindingContext = viewModel;
}