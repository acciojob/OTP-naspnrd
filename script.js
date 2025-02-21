const codes = document.querySelectorAll(".code");
console.log(codes)
codes[0].focus();  

codes.forEach((code, idx) => {
	code.addEventListener("input", (e) => {
		if(e.target.value.length === 1 && idx < codes.length - 1){
			codes[idx + 1].focus();
		}
	}) 

	code.addEventListener("keydown", (e) => {
		if(e.key === "Backspace" && !e.target.value && idx > 0){
			codes[idx - 1].focus();
		}
	}) 
})