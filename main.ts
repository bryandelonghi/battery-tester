input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
})
/**
 * Extension:
 * 
 * 2 batteries in series vs 2 in parallel
 */
input.onButtonPressed(Button.B, function () {
    millivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * (3000 / 1023))
    basic.showNumber(millivolts)
    if (millivolts < 1200) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let millivolts = 0
basic.showString("Battery ")
