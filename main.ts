input.onButtonPressed(Button.A, function () {
    basic.showString("Laps")
    basic.showNumber(laps)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Steps")
    basic.showNumber(steps)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
radio.onReceivedValue(function (name, value) {
    if (name == "serial" && value == control.deviceSerialNumber()) {
        if (flag == 1) {
            flag = 0
            laps += 1
            radio.setGroup(7)
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            basic.pause(5000)
        }
    }
    if (name == "check" && value == control.deviceSerialNumber()) {
        if (flag == 0) {
            flag = 1
            radio.setGroup(11)
            music.playTone(262, music.beat(BeatFraction.Half))
            basic.pause(5000)
        }
    }
})
let steps = 0
let flag = 0
let laps = 0
radio.setGroup(7)
radio.setTransmitSerialNumber(true)
laps = 0
flag = 0
steps = 0
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    radio.sendNumber(flag)
    basic.pause(10)
})
