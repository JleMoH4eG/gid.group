/*mobile menu functional*/

const mobileMenu = document.getElementById('menu');
const burgerMenu = document.getElementById('burger-menu');
const logo = document.getElementById('logo');
const introductionContent = document.getElementById('introductionContent');
const introductionArrow = document.getElementById('introductionArrow');

function toggleActiveClass() {
	mobileMenu.classList.toggle('active');
	burgerMenu.classList.toggle('active');
	logo.classList.toggle('active');
	introductionContent.classList.toggle('active');
	introductionArrow.classList.toggle('active');
	document.body.classList.toggle('lock')
}

document.addEventListener("click", (event) => {
	if(event.target.classList.contains('menu-click') ||
		event.target.classList.contains('burger-menu')) {
		toggleActiveClass();
	}
})

/*arrow disable functional*/

const introductionButtonsRow = document.getElementById('introductionButtonsRow');
let buttonsY = introductionButtonsRow.getBoundingClientRect().top + window.pageYOffset + introductionButtonsRow.offsetHeight;
let arrowY = introductionArrow.getBoundingClientRect().top + window.pageYOffset;

if(buttonsY >= arrowY) {
	introductionArrow.classList.add('disable');
}

/*catalog forms functional*/

const btn = document.getElementById('catalogBtn');
const inputField = document.getElementById('catalogInputField');
const checkBox = document.getElementById('catalogCheckBox');
const inputFieldMessage = document.getElementById('catalogInputFieldMessage');
const checkBoxMessage = document.getElementById('catalogCheckBoxMessage');


var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

function isCorrectEmail(form) {
	var formValue = form.value;

	if(re.test(formValue)) {
		return true;
	}

	return false;
}

function isEmptyEmail(form) {
	var formValue = form.value;

	if(formValue.length == 0) {
		return true;
	}

	return false;
}

document.addEventListener("click", (event) => {
	if(event.target == btn) {
		if(isEmptyEmail(inputField)) {
			event.preventDefault();
			inputFieldMessage.innerText = "Поле пустое!";
		}
		else {
			if(!isCorrectEmail(inputField)) {
				event.preventDefault();
				inputFieldMessage.innerText = "Некорректный E-mail!";
			}
		}

		if(!checkBox.checked) {
			event.preventDefault();
			checkBoxMessage.innerText = "Требуется ваше согласие!"
		}
	}
	else {
		inputFieldMessage.innerText = "";
		checkBoxMessage.innerText = "";
	}
})