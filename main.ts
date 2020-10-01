// Created By: Rodas N.
// Created On: Oct 1 2020
// 
// This program tells the sonar to find the distance.
let distance_to_object = 0
basic.pause(500)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distance_to_object)
})
