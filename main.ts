let Pause = 0
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
// Motor 1 Uses Pins 13, 14, 15 & 16 P13 - Blue P14 - Purple/Pink P15 - Yellow P16 - Orange Driven by a 5volt ULN2003 Darlington Array Motor 2 Uses Pins 6, 7, 9 & 10 P6 - Blue P7 - Purple/Pink P9 - Yellow P10 - Orange Driven by a 5volt ULN2003 Darlington Array
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("L")
        Pause = 10
        for (let index = 0; index < 512; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("R")
        Pause = 10
        for (let index = 0; index < 512; index++) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(Pause)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
