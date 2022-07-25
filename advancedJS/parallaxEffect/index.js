const el = document.getElementById("firstSquare");
const el2 = document.getElementById("secondSquare");
console.log(el, el.clientHeight)

document.querySelector(".squaresBlock").addEventListener("scroll", (e) => {
	console.log("offsetHeight: " + e.target.offsetHeight);
	console.log("scrollHeight: " + e.target.scrollHeight);
	console.log("scrollTop: " + e.target.scrollTop);
	const maxScrollTopValue = e.target.scrollHeight - e.target.offsetHeight;
	const maxElTopValue = e.target.offsetHeight - el.clientHeight

	el.style.top = `${e.target.scrollTop / (maxScrollTopValue / maxElTopValue)}px`;
	el2.style.top = `${e.target.scrollTop / (maxScrollTopValue / maxElTopValue) * (e.target.scrollTop / maxScrollTopValue)}px`;
})