const {log} = console
function digitalClock(){
    let dateFunction = new Date(),
    day = dateFunction.getDay(),
    hours = dateFunction.getHours(),
    minutes = dateFunction.getMinutes(),
    seconds = dateFunction.getSeconds(),
    timeFormat = 'AM',
    todayDay = document.querySelector(`.weekdays :nth-child(${day})`)
    
    
    timeFormat = hours >= 12 ? 'PM' : 'AM'
    hours = hours  < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
    document.querySelector('.format').innerHTML = timeFormat
    todayDay.classList.add('active')
}

setInterval(digitalClock,1000)