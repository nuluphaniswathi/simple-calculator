let num1=8
let num2=2
document.getElementById("ele1").textContent=num1
document.getElementById("ele2").textContent=num2
let res=document.getElementById("sum-ele")
function add(){
	let r=num1+num2
	res.textContent="sum:"+r
}
function subtract(){
	let k=num1-num2
	res.textContent="subtract:"+k
}
function multiply(){
	let m=num1*num2
	res.textContent="multiply:"+m
}
function divide(){
	let d=num1/num2
	res.textContent="divide:"+d
}