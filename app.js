const timeLeft = document.getElementById('time-left')
const timeLeftHp = document.getElementById('time-left-Hp')
const timeLeftHp1 = document.getElementById('time-left-Hp1')

const birthday = new Date('07/20/2022')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 //miliseconds
let timerId



function countDown() {
	const today = new Date()
	const timeSpan = birthday - today

	if(timeSpan<= -day) {
		timeLeftHp.innerHTML = "Hi vọng cậu đã có một ngày sinh nhật đáng nhớ!"
		clearInterval(timerId)
		return
	}
	if (timeSpan <= 0) {
		timeLeftHp1.innerHTML = "Chúc mừng sinh nhật cậu, Nguyễn Khánh Vy!"
		clearInterval(timerId)
		return
	}

const days = Math.floor(timeSpan / day)
const hours = Math.floor((timeSpan % day) / hour)
const minutes = Math.floor((timeSpan % hour) / minute)
const seconds = Math.floor((timeSpan % minute) / second)

timeLeft.innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'min ' + seconds + 'seconds '

}

timerId = setInterval(countDown, second)