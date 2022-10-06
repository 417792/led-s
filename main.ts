input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (y % 2 != 0) {
                led.plot(4 - x, y)
            } else {
                led.plot(x, y)
            }
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (y % 2 == 0) {
                led.plot(x - 4, y - 4)
                led.plot(4 - x, y)
            } else {
                led.plot(x, y)
            }
            basic.pause(100)
        }
    }
})
