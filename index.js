const temperatureInCelsius = parseInt(
  prompt('Введите температуру в градусах Цельсия')
)

if (temperatureInCelsius === 0) {
  alert('0 градусов по Цельсию - это температура замерзания воды')

  console.debug(temperatureInCelsius)
} else if (temperatureInCelsius > 0) {
  alert(
    'Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже'
  )
}
debugger
const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
Фаренгейту.`)
