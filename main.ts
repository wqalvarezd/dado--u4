let valor_dado = 0
basic.forever(function () {
    while (input.isGesture(Gesture.Shake)) {
        valor_dado = randint(1, 3)
    }
    basic.showNumber(valor_dado)
    if (valor_dado == 1) {
        music.playMelody("C - - - - - - - ", 120)
    }
    if (valor_dado == 2) {
        music.playMelody("C - - - - - - - ", 120)
        basic.pause(100)
        music.playMelody("C - - - - - - - ", 120)
    }
    if (valor_dado == 3) {
        music.playMelody("C - - - - - - - ", 120)
        basic.pause(100)
        music.playMelody("C - - - - - - - ", 120)
        basic.pause(100)
        music.playMelody("C - - - - - - - ", 120)
    }
})
