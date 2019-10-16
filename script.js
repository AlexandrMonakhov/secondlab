let wrap = document.querySelector('.wrap'),
		inpAdd = document.querySelector('input#add'),
		inpSearch = document.querySelector('input#search'), 
		btn = document.querySelector('button'),
		newUl = document.querySelector('.new'),
		headSpan = document.querySelector('.header');

btn.addEventListener('click', ()=>{
	let li = document.createElement('li');
	li.innerHTML = inpAdd.value || 'имя';
	wrap.appendChild(li);
	matchesAll();
	inpAdd.value = '';
})

inpSearch.addEventListener('input', matchesAll);

function matchesAll() {
	let lis = document.querySelectorAll('.wrap > li'),
			search = new RegExp(inpSearch.value,'i'),
			result = [], 
			count = 0;
	headSpan.innerHTML = 'тут результат';
	newUl.innerHTML = '';
	for(let x = 0;x < lis.length;x++){ 
		if(search.test(lis[x].innerHTML)){
			count++;
			let li = document.createElement('li');
			li.innerHTML = lis[x].innerHTML;
			newUl.appendChild(li);
			result.push(lis[x].innerHTML);
		}
	}
	headSpan.insertAdjacentHTML('beforeEnd' ,`<br><sub>найдено совпадений: ${count}</sub>`)
	if(result.length === 0){
		headSpan.innerHTML = 'ничего не найдено, сэр';
		newUl.innerHTML = result;
	}
	if(inpSearch.value == ''){
		headSpan.innerHTML = 'тут результат';
		newUl.innerHTML = '';
	}
	 
	console.log(result);
}