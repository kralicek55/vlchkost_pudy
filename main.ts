let vlhkost = 0
basic.showLeds(`
    . # . # .
    . # # # .
    . . # . .
    . # # . .
    . . # . .
    `)
basic.forever(function () {
    vlhkost = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    vlhkost,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(vlhkost)
    }
})
