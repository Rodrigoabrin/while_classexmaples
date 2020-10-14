let counter = 0
let index = 0
input.onPinPressed(TouchPin.P0, function () {
    counter = 0
    while (counter <= 5) {
        basic.showNumber(counter)
        counter += 1
        music.playTone(147, music.beat(BeatFraction.Whole))
        if (counter == 5) {
            music.playTone(587, music.beat(BeatFraction.Whole))
        }
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    index = 4
    while (index >= 0) {
        led.plot(index, index)
        basic.pause(100)
        index += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(415, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
})
input.onPinPressed(TouchPin.P1, function () {
    for (let counter = 0; counter <= 5; counter++) {
        basic.showNumber(counter)
        music.playTone(147, music.beat(BeatFraction.Whole))
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Silly)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
