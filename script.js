let initialTemp
let convertedTemp
let resultParagraph
const string1 = ' °F'
const string2 = ' °C'

document.getElementById('btConvert').addEventListener('click',  function measurementConversion(e) {

    initialTemp = document.getElementById('tempInput').value

        if (!initialTemp) {
            return 
        }

        if (document.getElementById('Celsius').checked) {
            convertedTemp = Math.round(((initialTemp * 9) / 5) + 32)
            resultParagraph = document.getElementById("cTemp")
            resultParagraph.textContent = convertedTemp + string1
        }

        else if (document.getElementById('Fahrenheit').checked) {
            convertedTemp = Math.round(((initialTemp - 32) * 5) / 9)
            resultParagraph = document.getElementById("cTemp")
            resultParagraph.textContent = convertedTemp + string2
        }

    }
)


