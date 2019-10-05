import "./index.pug"
import "./components/components.sass"
import logo from "./img/logo.svg"
import formbgr from "./img/form_bgr_img.png"
import gbdd from "./img/gbdd.png"
import legal from "./img/legal.png"
import taxes from "./img/taxes.png"
import services from "./img/services.png"
let partners = require.context("./img/partners", true, /\.svg$/)
console.log(partners)