exports.ratingLabelLoaded = function(args) {
    let ratingLabel = args.object;
    let textContent = "";
    setTimeout(() => {
        let numberOfStars = args.object.finalRating;
        numberOfStars = Math.round(numberOfStars * 2) / 2;
        const flooredVal = Math.floor(numberOfStars);

        let halfStars = false;
        const totalStars = 5;
        if (Math.ceil(numberOfStars) !== Math.floor(numberOfStars)) {
            halfStars = true;
            numberOfStars = flooredVal;
        }

        for (let i = 0; i < numberOfStars; i++) {
            textContent += "O";
        }
        if (halfStars) {
            numberOfStars = numberOfStars + 1;
            textContent += "o";
        }
        if (totalStars - numberOfStars > 0) {
            const extra = totalStars - numberOfStars;
            for (let i = 0; i < extra; i++) {
                textContent += "0";
            }
        }
        ratingLabel.text = textContent;
    }, 50);
};
