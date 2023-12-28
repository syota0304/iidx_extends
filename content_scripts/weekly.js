const tableElement = document.querySelectorAll("div.weekly-rank.scroll > table.pc_table1 > tbody")[0];

if(tableElement){
    new MutationObserver(() => {
        const ratingElement = document.querySelectorAll("div.weekly-rank.scroll > table:not([class]) > tbody > tr:nth-child(2) > td:nth-child(4)")[0];
        const ratingDiffElements = document.querySelectorAll("div.weekly-rank.scroll > table:not([class]) > tbody > tr:nth-child(2) > td:nth-child(5) > span");

        if(!ratingElement){
            return;
        }

        let rating = Number.parseInt(ratingElement.innerText);

        if(ratingDiffElements.length === 2){
            const beforeRating = Number.parseInt((ratingDiffElements[0]?.innerText));
            const afterRating = Number.parseInt((ratingDiffElements[1]?.innerText));

            rating = rating === beforeRating ? rating : afterRating;
        }

        Array.from(document.querySelectorAll("div.weekly-rank.scroll > table.pc_table1 > tbody > tr > td:nth-child(4)"))
            .forEach(e => {
                if(e.childNodes.length !== 1){
                    return;
                }

                const rivalRating = Number.parseInt(e.innerText);

                if(isNaN(rivalRating)){
                    return;
                }

                const diff = rivalRating - rating;
                const color = diff > 0 ? "#64d5ff" : (diff === 0 ? "#" : "#ff6464");
                const diffString = diff > 0 ? `+${diff}` : `${diff}`;

                const node = document.createElement("div");
                node.style.textAlign = "center";
                node.style.color = color;
                node.innerText = diffString;

                e.appendChild(node);
            });
    }).observe(tableElement, {childList: true});
}

