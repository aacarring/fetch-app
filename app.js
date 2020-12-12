const button = document.getElementById('button');
const result = document.getElementById('result');

function getCatPic() {
    fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

button.addEventListener('click', getCatPic);