<script>
let valueTime = 30000;
let inputValueTime = document.querySelector('.input-value-time').value;
let datetime;
let vars = document.querySelector('.timer-time');
let btnNext = document.querySelector('#btn-next');
let btnStop = document.querySelector('#btn-stop');
let btnSubmit = document.querySelector('.btn-submit');
	
/*** Установка времени перезапуска ***/
	btnSubmit.addEventListener("click", function(){console.log(valueTime);		
	valueTime = Number(inputValueTime) * 60000;
		console.log(valueTime);
	}); 

/*** Запуск аудио ***/	
	function play_single_sound(){
	document.getElementById('audiotag1').play();
	}

/**** Функция для добавления ноля ****/
	function getZero(num){
		if (num >= 0 && num < 10){
			return `0${num}`;
		}else{
			return num;
			}
	}

/**** Запрет ввода текста ****/
const input = document.getElementById('only_num');

/**** Запрет ввода текста ****/
const input = document.getElementById('only_num');

input.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
		
/***** Формируем ссылку для открытия и потом обновления *****/
function Main(selector){
	let currentdate = new Date();
	datetime = 'Последнее Время обновления страницы заявок ' + '<b class="date-time">' + getZero(currentdate.getHours()) + ":" + getZero(currentdate.getMinutes()) + ":" +  getZero(currentdate.getSeconds()) + '</b>';
	
	console.log(datetime);
	
	vars.innerHTML = '<p>' + datetime + '</p>';}btnNext.addEventListener("click", function(e){e.preventDefault();
	let win1 = window.open("https://arergard.bitrix24.ru/marketplace/app/38/"); 
	play_single_sound();

//Пишем функцию
	let timer1 = setInterval(function(){win1.location.href="https://arergard.bitrix24.ru/marketplace/app/38/";
	Main();
	play_single_sound();},valueTime);});

	btnStop.addEventListener("click", function(e){e.preventDefault();
	window.location.reload();});
</script>
