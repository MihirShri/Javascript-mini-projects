var targetInput = document.getElementById("country"),
    results = document.getElementById("autocomplete-results");
    countryList = ['Albania', 'Colombia', 'Cuba', 'El Salvador', 'India', 'Jordan', 'Kenya',                        'Nepal', 'Romania', 'Sri Lanka', 'Wales'],
    matches = [],
    resultsCursor = 0;

    targetInput.focus();

    targetInput.addEventListener("keydown", function(event) {
        if (event.keyCode == "13") {
            event.preventDefault();
        }
    })

    targetInput.addEventListener("keyup", function(event) {
        /* Key codes:
            Enter - 13
            Arrow up - 38
            Arrow down - 40 */

        results.innerHTML = "";
        toggleResults("hide");

        if (this.value.length > 0) {
            matches = getMatches(this.value);
        }

        if (matches.length > 0) {
            displayMatches(matches);
        }

        if (results.classList.contains("visible")) {
            switch(event.keyCode) {
                case 13: targetInput.value = results.children[resultsCursor].innerHTML;
                toggleResults("hide");
                resultsCursor = 0;
                    break;
                case 38: if (resultsCursor > 0) {
                    resultsCursor--;

                    moveCursor(resultsCursor);
                }
                    break;
                case 40: if (resultsCursor < (matches.length - 1)) {
                    resultsCursor++;

                    moveCursor(resultsCursor);
                }
                    break;

                case 8: if (this.value.length == 0)
                    toggleResults("hide");
                    break;
            }
        }
    });

    function toggleResults(action) {
        if (action == "show") {
            results.classList.add("visible");
        } else {
            results.classList.remove("visible");
        }
    }

    function getMatches(inputText) {
        matches = []

        for (var i = 0; i < countryList.length; i++) {
            if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
                matches.push(countryList[i]);
            }
        }

        return matches;
    }

    function displayMatches(matches) {
        var j = 0;

        while (j < matches.length) {
            results.innerHTML += '<li class="result">' + matches[j] + '</li>';
            j++;
        }

        moveCursor(resultsCursor);

        toggleResults("show");
    }

    function moveCursor(pos) {
    for (var x = 0; x < results.children.length; x++) {
        results.children[x].classList.remove('highlighted');
    }

    results.children[pos].classList.add('highlighted');
}
