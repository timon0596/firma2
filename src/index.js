import "./index.pug"
import "./components/components.sass"
import logo from "./img/logo.svg"
import formbgr from "./img/form_bgr_img.png"
import gbdd from "./img/gbdd.png"
import legal from "./img/legal.png"
import taxes from "./img/taxes.png"
import services from "./img/services.png"
import logo1 from "./img/footer-logo1.svg"
import logo2 from "./img/footer-logo2.svg"
import share from "./img/share.svg"
let partners = require.context("./img/partners", true, /\.svg$/)
console.log(partners)
//-----------------MODAL-----------------
//-----------------MODAL-----------------
//-----------------MODAL-----------------
$("header a.button").click(function(){
	$(".modal_wrapper").fadeIn(250)	
})
$(".modal_wrapper").click(function(e){
	console.log($(e.target).attr("class"))
	if(($(e.target).attr("class")=="modal"||$(e.target).attr("class")=="exit button"))
		$(".modal_wrapper").fadeOut(250)			
})
//----------------HELP-MENU-------------------
//----------------HELP-MENU-------------------
//----------------HELP-MENU-------------------
let flag=0
$("header span.button").click(function(){
	if(!flag){
		$(".dropdown").fadeIn(150)
		flag++
		return 0
	}
	if(flag){
		$(".dropdown").fadeOut(150)
		flag--
	}	
})
//------share------
//------share------
//------share------
console.log($(".payment .share").offset())
window.onscroll = function(){
	console.log(window.pageYOffset)
	if(window.pageYOffset>=400){
		$(".payment .share").addClass("shareFixed")
	}
	if(window.pageYOffset<400){
		$(".payment .share").removeClass("shareFixed")
	}
}