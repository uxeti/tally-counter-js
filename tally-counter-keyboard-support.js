function CountUpAllCountersStartWith(lowercaseLetter) {
    let counterNames = document.getElementsByClassName("tally-counter-name")

    for (var i = 0; i < counterNames.length; i++) {
        let counterName = counterNames[i]
        let counterNameLowerCase = counterName.value.toLowerCase()
        if (counterNameLowerCase[0] == lowercaseLetter[0]) {
            let counter = GetTallyCounterElement(counterName)
            ChangeCount(counter, 1)
        }
    }
}

function OnKeyDown(event) {
    if (event.target.tagName != "INPUT") {
        let lowercaseLetter = event.key.toLowerCase()
        if (lowercaseLetter.length == 1) {
            CountUpAllCountersStartWith(lowercaseLetter)
        }
    }
}

document.addEventListener('keydown', OnKeyDown)
