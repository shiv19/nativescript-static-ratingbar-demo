exports.ratingLabelLoaded = function(args) {
    let ratingLabel = args.object;
    var textContent = "";
    setTimeout(() => {
        var numberOfStars = args.object.finalRating;
        const flooredVal = Math.floor(numberOfStars);

        let halfStars = false;
        let totalStars = 5;
        if (Math.ceil(numberOfStars) !== Math.floor(numberOfStars)) {
            if (Math.round(numberOfStars) !== Math.ceil(numberOfStars)) {
                halfStars = true;
                numberOfStars = flooredVal;
            } else {
                numberOfStars = flooredVal + 1;
            }
        }

        for (let i = 0; i < numberOfStars; i++) {
            textContent += "★";
        }
        if (halfStars) {
            numberOfStars = numberOfStars + 1;
            textContent += "✫";
        }
        if (totalStars - numberOfStars > 0) {
            let extra = totalStars - numberOfStars;
            for (let i = 0; i < extra; i++) {
                textContent += "☆";
            }
        }
        ratingLabel.text = textContent;
    }, 50);
};
