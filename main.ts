radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
        M4_speed += -10
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, M4_speed)
    } else if (receivedString == "right") {
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
        M4_speed += -10
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, M4_speed)
    } else if (receivedString == "start") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    } else if (receivedString == "slow") {
        M4_speed += -5
        M3_speed += -5
    } else {
    	
    }
})
let M4_speed = 0
radio.setGroup(1)
M4_speed = 255
let M3_speed = 255
basic.forever(function () {
	
})
