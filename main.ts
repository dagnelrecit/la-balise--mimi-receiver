radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(1)
