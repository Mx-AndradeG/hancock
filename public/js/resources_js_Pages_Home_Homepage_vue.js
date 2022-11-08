"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_Homepage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Homepage.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Homepage.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/index.mjs");

var toast = (0,vue_toastification__WEBPACK_IMPORTED_MODULE_0__.useToast)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'App',
  components: {},
  data: function data() {
    return {
      alvRoute: route("lead.store"),
      alvMethod: "POST",
      item: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    };
  },
  methods: {
    afterDone: function afterDone() {
      toast.success("Te contactaremos! ", {
        position: "top-right",
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      this.item.name = '';
      this.item.email = '';
      this.item.phone = '';
      this.item.message = '';
    },
    afterError: function afterError() {
      toast.error("A ocurrido un error  ", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
      this.item.name = '';
      this.item.email = '';
      this.item.phone = '';
      this.item.message = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Homepage.vue?vue&type=template&id=28705d65":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Homepage.vue?vue&type=template&id=28705d65 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _resources_img_Hancock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../resources/img/Hancock.png */ "./resources/img/Hancock.png");
/* harmony import */ var _resources_img_portfolio_portafolio1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../resources/img/portfolio/portafolio1.jpg */ "./resources/img/portfolio/portafolio1.jpg");
/* harmony import */ var _resources_img_portfolio_portafolio2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../resources/img/portfolio/portafolio2.jpg */ "./resources/img/portfolio/portafolio2.jpg");
/* harmony import */ var _resources_img_portfolio_portafolio3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../resources/img/portfolio/portafolio3.jpg */ "./resources/img/portfolio/portafolio3.jpg");
/* harmony import */ var _resources_img_portfolio_portafolio4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../resources/img/portfolio/portafolio4.jpg */ "./resources/img/portfolio/portafolio4.jpg");
/* harmony import */ var _resources_img_portfolio_portafolio5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../resources/img/portfolio/portafolio5.jpg */ "./resources/img/portfolio/portafolio5.jpg");
/* harmony import */ var _resources_img_portfolio_portafolio6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/img/portfolio/portafolio6.jpg */ "./resources/img/portfolio/portafolio6.jpg");
/* harmony import */ var _resources_img_about_about1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../resources/img/about/about1.jpg */ "./resources/img/about/about1.jpg");
/* harmony import */ var _resources_img_about_about2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../resources/img/about/about2.jpg */ "./resources/img/about/about2.jpg");
/* harmony import */ var _resources_img_about_about3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../resources/img/about/about3.jpg */ "./resources/img/about/about3.jpg");
/* harmony import */ var _resources_img_about_about4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../resources/img/about/about4.jpg */ "./resources/img/about/about4.jpg");
/* harmony import */ var _resources_img_team_equipo1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../resources/img/team/equipo1.jpg */ "./resources/img/team/equipo1.jpg");
/* harmony import */ var _resources_img_team_equipo2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../resources/img/team/equipo2.jpg */ "./resources/img/team/equipo2.jpg");
/* harmony import */ var _resources_img_team_equipo3_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../resources/img/team/equipo3.jpg */ "./resources/img/team/equipo3.jpg");
/* harmony import */ var _resources_img_logos_microsoft_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../resources/img/logos/microsoft.svg */ "./resources/img/logos/microsoft.svg");
/* harmony import */ var _resources_img_logos_google_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../resources/img/logos/google.svg */ "./resources/img/logos/google.svg");
/* harmony import */ var _resources_img_logos_facebook_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../resources/img/logos/facebook.svg */ "./resources/img/logos/facebook.svg");
/* harmony import */ var _resources_img_logos_ibm_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../resources/img/logos/ibm.svg */ "./resources/img/logos/ibm.svg");
/* harmony import */ var _resources_img_close_icon_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../resources/img/close-icon.svg */ "./resources/img/close-icon.svg");




















var _hoisted_1 = {
  id: "page-top"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink\" id=\"mainNav\"><div class=\"container\"><a class=\"navbar-brand\" href=\"#page-top\"><img src=\"" + _resources_img_Hancock_png__WEBPACK_IMPORTED_MODULE_1__["default"] + "\" alt=\"...\" style=\"width:100% !important;height:50px !important;\"></a><button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"> Menu <i class=\"fas fa-bars ms-1\"></i></button><div class=\"collapse navbar-collapse\" id=\"navbarResponsive\"><ul class=\"navbar-nav text-uppercase ms-auto py-4 py-lg-0\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"#services\">Servicios</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#portfolio\">Portfolio</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#about\">Acerca de nosotros</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#contact\">Contactanos</a></li></ul></div></div></nav>", 1);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header class=\"masthead\"><div class=\"container\" style=\"background:linear-gradient(35deg, rgba(0,78,205,1) 0%, rgba(73,75,78,0.6502976190476191) 0%);\"><div class=\"masthead-subheading\" style=\"padding-top:3%;\">Bienvenido a nuestro estudio!</div><div class=\"masthead-heading text-uppercase\">Hancock furniture &amp; kitchen</div><a class=\"btn btn-primary btn-xl text-uppercase\" style=\"margin-bottom:3%;\" href=\"#services\">Conocenos</a></div></header>", 1);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"page-section\" id=\"services\"><div class=\"container\"><div class=\"text-center\"><h2 class=\"section-heading text-uppercase\">Servicios</h2><h3 class=\"section-subheading text-muted\">Expertos en diseño, creación e implementación de espacios de interiores.</h3></div><div class=\"row text-center\"><div class=\"col-md-4\"><span class=\"fa-stack fa-4x\"><i class=\"fas fa-circle fa-stack-2x text-primary\"></i><i class=\"fas fa-cutlery fa-stack-1x fa-inverse\"></i></span><h4 class=\"my-3\">Diseños de cocinas</h4><p class=\"text-muted\">El diseño de la cocina es uno de los aspectos más importantes de nuestra casa, debido a la cantidad de tiempo que pasamos en ella y a las múltiples funciones que este espacio cumple en nuestras vidas. Un buen diseño interior y una distribución inteligente son vitales en todos los espacios</p></div><div class=\"col-md-4\"><span class=\"fa-stack fa-4x\"><i class=\"fas fa-circle fa-stack-2x text-primary\"></i><i class=\"fas fa-bed fa-stack-1x fa-inverse\"></i></span><h4 class=\"my-3\">Diseño de muebles</h4><p class=\"text-muted\">El diseño de mobiliario es una disciplina técnica que requiere muchas habilidades, como el control de los materiales, de los procesos de fabricación, la gestión de los proveedores, cálculos de estabilidad y ergonomía, diseño en 3D, maquetación y producción de un prototipo real</p></div><div class=\"col-md-4\"><span class=\"fa-stack fa-4x\"><i class=\"fas fa-circle fa-stack-2x text-primary\"></i><i class=\"fas fa-home fa-stack-1x fa-inverse\"></i></span><h4 class=\"my-3\">Diseño de interiores</h4><p class=\"text-muted\">El diseño de interiores es el arte que consiste en mejorar el interior de un edificio, por lo tanto, en el pasado se diseñaba el interior de manera instintiva como parte del proceso de producción, siendo su objetivo principal la búsqueda del uso del espacio de manera efectiva y conseguir bienestar.</p></div></div></div></section>", 1);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"page-section bg-light\" id=\"portfolio\"><div class=\"container\"><div class=\"text-center\"><h2 class=\"section-heading text-uppercase\">Portfolio</h2><h3 class=\"section-subheading text-muted\">Algunos de nuestros mejores trabajos.</h3></div><div class=\"row\"><div class=\"col-lg-4 col-sm-6 mb-4\"><!-- Portfolio item 1--><div class=\"portfolio-item\"><a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal1\"><div class=\"portfolio-hover\"><div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div></div><img class=\"img-fluid\" src=\"" + _resources_img_portfolio_portafolio1_jpg__WEBPACK_IMPORTED_MODULE_2__["default"] + "\" alt=\"...\"></a><div class=\"portfolio-caption\"><div class=\"portfolio-caption-heading\">Threads</div><div class=\"portfolio-caption-subheading text-muted\">Illustration</div></div></div></div><div class=\"col-lg-4 col-sm-6 mb-4\"><!-- Portfolio item 2--><div class=\"portfolio-item\"><a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal2\"><div class=\"portfolio-hover\"><div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div></div><img class=\"img-fluid\" src=\"" + _resources_img_portfolio_portafolio2_jpg__WEBPACK_IMPORTED_MODULE_3__["default"] + "\" alt=\"...\"></a><div class=\"portfolio-caption\"><div class=\"portfolio-caption-heading\">Explore</div><div class=\"portfolio-caption-subheading text-muted\">Graphic Design</div></div></div></div><div class=\"col-lg-4 col-sm-6 mb-4\"><!-- Portfolio item 3--><div class=\"portfolio-item\"><a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal3\"><div class=\"portfolio-hover\"><div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div></div><img class=\"img-fluid\" src=\"" + _resources_img_portfolio_portafolio3_jpg__WEBPACK_IMPORTED_MODULE_4__["default"] + "\" alt=\"...\"></a><div class=\"portfolio-caption\"><div class=\"portfolio-caption-heading\">Finish</div><div class=\"portfolio-caption-subheading text-muted\">Identity</div></div></div></div><div class=\"col-lg-4 col-sm-6 mb-4 mb-lg-0\"><!-- Portfolio item 4--><div class=\"portfolio-item\"><a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal4\"><div class=\"portfolio-hover\"><div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div></div><img class=\"img-fluid\" src=\"" + _resources_img_portfolio_portafolio4_jpg__WEBPACK_IMPORTED_MODULE_5__["default"] + "\" alt=\"...\"></a><div class=\"portfolio-caption\"><div class=\"portfolio-caption-heading\">Lines</div><div class=\"portfolio-caption-subheading text-muted\">Branding</div></div></div></div><div class=\"col-lg-4 col-sm-6 mb-4 mb-sm-0\"><!-- Portfolio item 5--><div class=\"portfolio-item\"><a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal5\"><div class=\"portfolio-hover\"><div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div></div><img class=\"img-fluid\" src=\"" + _resources_img_portfolio_portafolio5_jpg__WEBPACK_IMPORTED_MODULE_6__["default"] + "\" alt=\"...\"></a><div class=\"portfolio-caption\"><div class=\"portfolio-caption-heading\">Southwest</div><div class=\"portfolio-caption-subheading text-muted\">Website Design</div></div></div></div><div class=\"col-lg-4 col-sm-6\"><!-- Portfolio item 6--><div class=\"portfolio-item\"><a class=\"portfolio-link\" data-bs-toggle=\"modal\" href=\"#portfolioModal6\"><div class=\"portfolio-hover\"><div class=\"portfolio-hover-content\"><i class=\"fas fa-plus fa-3x\"></i></div></div><img class=\"img-fluid\" src=\"" + _resources_img_portfolio_portafolio6_jpg__WEBPACK_IMPORTED_MODULE_7__["default"] + "\" alt=\"...\"></a><div class=\"portfolio-caption\"><div class=\"portfolio-caption-heading\">Window</div><div class=\"portfolio-caption-subheading text-muted\">Photography</div></div></div></div></div></div></section>", 1);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"page-section\" id=\"about\"><div class=\"container\"><div class=\"text-center\"><h2 class=\"section-heading text-uppercase\">About</h2><h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3></div><ul class=\"timeline\"><li><div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"" + _resources_img_about_about1_jpg__WEBPACK_IMPORTED_MODULE_8__["default"] + "\" alt=\"...\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4>2009-2011</h4><h4 class=\"subheading\">Our Humble Beginnings</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li class=\"timeline-inverted\"><div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"" + _resources_img_about_about2_jpg__WEBPACK_IMPORTED_MODULE_9__["default"] + "\" alt=\"...\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4>March 2011</h4><h4 class=\"subheading\">An Agency is Born</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li><div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"" + _resources_img_about_about3_jpg__WEBPACK_IMPORTED_MODULE_10__["default"] + "\" alt=\"...\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4>December 2015</h4><h4 class=\"subheading\">Transition to Full Service</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li class=\"timeline-inverted\"><div class=\"timeline-image\"><img class=\"rounded-circle img-fluid\" src=\"" + _resources_img_about_about4_jpg__WEBPACK_IMPORTED_MODULE_11__["default"] + "\" alt=\"...\"></div><div class=\"timeline-panel\"><div class=\"timeline-heading\"><h4>July 2020</h4><h4 class=\"subheading\">Phase Two Expansion</h4></div><div class=\"timeline-body\"><p class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div></div></li><li class=\"timeline-inverted\"><div class=\"timeline-image\"><h4> Be Part <br> Of Our <br> Story! </h4></div></li></ul></div></section>", 1);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"page-section bg-light\" id=\"team\"><div class=\"container\"><div class=\"text-center\"><h2 class=\"section-heading text-uppercase\">Our Amazing Team</h2><h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3></div><div class=\"row\"><div class=\"col-lg-4\"><div class=\"team-member\"><img class=\"mx-auto rounded-circle\" src=\"" + _resources_img_team_equipo1_jpg__WEBPACK_IMPORTED_MODULE_12__["default"] + "\" alt=\"...\"><h4>Parveen Anand</h4><p class=\"text-muted\">Lead Designer</p><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Parveen Anand Twitter Profile\"><i class=\"fab fa-twitter\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Parveen Anand Facebook Profile\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Parveen Anand LinkedIn Profile\"><i class=\"fab fa-linkedin-in\"></i></a></div></div><div class=\"col-lg-4\"><div class=\"team-member\"><img class=\"mx-auto rounded-circle\" src=\"" + _resources_img_team_equipo2_jpg__WEBPACK_IMPORTED_MODULE_13__["default"] + "\" alt=\"...\"><h4>Diana Petersen</h4><p class=\"text-muted\">Lead Marketer</p><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Diana Petersen Twitter Profile\"><i class=\"fab fa-twitter\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Diana Petersen Facebook Profile\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Diana Petersen LinkedIn Profile\"><i class=\"fab fa-linkedin-in\"></i></a></div></div><div class=\"col-lg-4\"><div class=\"team-member\"><img class=\"mx-auto rounded-circle\" src=\"" + _resources_img_team_equipo3_jpg__WEBPACK_IMPORTED_MODULE_14__["default"] + "\" alt=\"...\"><h4>Larry Parker</h4><p class=\"text-muted\">Lead Developer</p><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Larry Parker Twitter Profile\"><i class=\"fab fa-twitter\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Larry Parker Facebook Profile\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Larry Parker LinkedIn Profile\"><i class=\"fab fa-linkedin-in\"></i></a></div></div></div><div class=\"row\"><div class=\"col-lg-8 mx-auto text-center\"><p class=\"large text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div></div></div></section>", 1);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"py-5\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-md-3 col-sm-6 my-3\"><a href=\"#!\"><img class=\"img-fluid img-brand d-block mx-auto\" src=\"" + _resources_img_logos_microsoft_svg__WEBPACK_IMPORTED_MODULE_15__["default"] + "\" alt=\"...\" aria-label=\"Microsoft Logo\"></a></div><div class=\"col-md-3 col-sm-6 my-3\"><a href=\"#!\"><img class=\"img-fluid img-brand d-block mx-auto\" src=\"" + _resources_img_logos_google_svg__WEBPACK_IMPORTED_MODULE_16__["default"] + "\" alt=\"...\" aria-label=\"Google Logo\"></a></div><div class=\"col-md-3 col-sm-6 my-3\"><a href=\"#!\"><img class=\"img-fluid img-brand d-block mx-auto\" src=\"" + _resources_img_logos_facebook_svg__WEBPACK_IMPORTED_MODULE_17__["default"] + "\" alt=\"...\" aria-label=\"Facebook Logo\"></a></div><div class=\"col-md-3 col-sm-6 my-3\"><a href=\"#!\"><img class=\"img-fluid img-brand d-block mx-auto\" src=\"" + _resources_img_logos_ibm_svg__WEBPACK_IMPORTED_MODULE_18__["default"] + "\" alt=\"...\" aria-label=\"IBM Logo\"></a></div></div></div></div>", 1);

var _hoisted_9 = {
  "class": "page-section",
  id: "contact"
};
var _hoisted_10 = {
  "class": "container"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "section-heading text-uppercase"
}, "Contactanos"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "section-subheading text-muted"
}, "Llena el siguiente formulario")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "row align-items-stretch mb-5"
};
var _hoisted_13 = {
  "class": "col-md-6"
};
var _hoisted_14 = {
  "class": "form-group"
};
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = {
  "class": "form-group mb-md-0"
};
var _hoisted_17 = {
  "class": "col-md-6"
};
var _hoisted_18 = {
  "class": "form-group form-group-textarea mb-md-0"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-none",
  id: "submitSuccessMessage"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center text-white mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fw-bolder"
}, "Form submission successful!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To activate this form, sign up at "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://startbootstrap.com/solution/contact-forms"
}, "https://startbootstrap.com/solution/contact-forms")])], -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-none",
  id: "submitErrorMessage"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center text-danger mb-3"
}, "Error sending message!")], -1
/* HOISTED */
);

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xl text-uppercase",
  form: "contactForm",
  type: "submit"
}, " Enviar ")], -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<footer class=\"footer py-4\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col-lg-4 text-lg-start\">Copyright © Hancock 2022</div><div class=\"col-lg-4 my-3 my-lg-0\"><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Twitter\"><i class=\"fab fa-twitter\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"Facebook\"><i class=\"fab fa-facebook-f\"></i></a><a class=\"btn btn-dark btn-social mx-2\" href=\"#!\" aria-label=\"LinkedIn\"><i class=\"fab fa-linkedin-in\"></i></a></div><div class=\"col-lg-4 text-lg-end\"><a class=\"link-dark text-decoration-none me-3\" href=\"#!\">Privacy Policy</a><a class=\"link-dark text-decoration-none\" href=\"#!\">Terms of Use</a></div></div></div></footer>", 1);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "portfolio-modal modal fade",
  id: "portfolioModal1",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "close-modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _resources_img_close_icon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  alt: "Close modal"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Project details"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-uppercase"
}, "Project Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "item-intro text-muted"
}, "Lorem ipsum dolor sit amet consectetur."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "img-fluid d-block mx-auto",
  src: _resources_img_portfolio_portafolio1_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: "..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-inline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Client:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Threads ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Category:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Illustration ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xl text-uppercase",
  "data-bs-dismiss": "modal",
  type: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-xmark me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close Project ")])])])])])])])], -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "portfolio-modal modal fade",
  id: "portfolioModal2",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "close-modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _resources_img_close_icon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  alt: "Close modal"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Project details"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-uppercase"
}, "Project Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "item-intro text-muted"
}, "Lorem ipsum dolor sit amet consectetur."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "img-fluid d-block mx-auto",
  src: _resources_img_portfolio_portafolio2_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
  alt: "..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-inline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Client:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Explore ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Category:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Graphic Design ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xl text-uppercase",
  "data-bs-dismiss": "modal",
  type: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-xmark me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close Project ")])])])])])])])], -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "portfolio-modal modal fade",
  id: "portfolioModal3",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "close-modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _resources_img_close_icon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  alt: "Close modal"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Project details"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-uppercase"
}, "Project Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "item-intro text-muted"
}, "Lorem ipsum dolor sit amet consectetur."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "img-fluid d-block mx-auto",
  src: _resources_img_portfolio_portafolio3_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
  alt: "..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-inline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Client:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Finish ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Category:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Identity ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xl text-uppercase",
  "data-bs-dismiss": "modal",
  type: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-xmark me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close Project ")])])])])])])])], -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "portfolio-modal modal fade",
  id: "portfolioModal4",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "close-modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _resources_img_close_icon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  alt: "Close modal"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Project details"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-uppercase"
}, "Project Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "item-intro text-muted"
}, "Lorem ipsum dolor sit amet consectetur."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "img-fluid d-block mx-auto",
  src: _resources_img_portfolio_portafolio4_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
  alt: "..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-inline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Client:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Lines ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Category:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Branding ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xl text-uppercase",
  "data-bs-dismiss": "modal",
  type: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-xmark me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close Project ")])])])])])])])], -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "portfolio-modal modal fade",
  id: "portfolioModal5",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "close-modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _resources_img_close_icon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  alt: "Close modal"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Project details"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-uppercase"
}, "Project Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "item-intro text-muted"
}, "Lorem ipsum dolor sit amet consectetur."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "img-fluid d-block mx-auto",
  src: _resources_img_portfolio_portafolio5_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
  alt: "..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-inline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Client:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Southwest ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Category:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Website Design ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xl text-uppercase",
  "data-bs-dismiss": "modal",
  type: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-xmark me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close Project ")])])])])])])])], -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "portfolio-modal modal fade",
  id: "portfolioModal6",
  tabindex: "-1",
  role: "dialog",
  "aria-hidden": "true"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-dialog"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "close-modal",
  "data-bs-dismiss": "modal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _resources_img_close_icon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
  alt: "Close modal"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "row justify-content-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-lg-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "modal-body"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Project details"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-uppercase"
}, "Project Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "item-intro text-muted"
}, "Lorem ipsum dolor sit amet consectetur."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "img-fluid d-block mx-auto",
  src: _resources_img_portfolio_portafolio6_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
  alt: "..."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "list-inline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Client:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Window ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Category:"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Photography ")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "btn btn-primary btn-xl text-uppercase",
  "data-bs-dismiss": "modal",
  type: "button"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-xmark me-1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Close Project ")])])])])])])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_alv_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("alv-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("body", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Navigation"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Masthead"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Services"), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio Grid"), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" About"), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Team"), _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Clients"), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contact"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_alv_form, {
    id: "contactForm",
    ref: "form",
    action: $data.alvRoute,
    method: $data.alvMethod,
    onAfterDone: $options.afterDone,
    "data-object": $data.item,
    onAfterError: $options.afterError
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        id: "name",
        type: "text",
        placeholder: "Nombre",
        "data-sb-validations": "required",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.item.name = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.item.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        id: "email",
        type: "email",
        placeholder: "Correo",
        "data-sb-validations": "required,email",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.item.email = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.item.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-control",
        id: "phone",
        type: "number",
        placeholder: "Telefono",
        "data-sb-validations": "required",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.item.phone = $event;
        })
      }, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.item.phone]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        id: "message",
        placeholder: "Mensaje",
        "data-sb-validations": "required",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.item.message = $event;
        })
      }, "\r\n                                ", 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.item.message]])])])]), _hoisted_19, _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Submit Button"), _hoisted_21];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["action", "method", "onAfterDone", "data-object", "onAfterError"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Footer"), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio Modals"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio item 1 modal popup"), _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio item 2 modal popup"), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio item 3 modal popup"), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio item 4 modal popup"), _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio item 5 modal popup"), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Portfolio item 6 modal popup"), _hoisted_28]);
}

/***/ }),

/***/ "./resources/img/Hancock.png":
/*!***********************************!*\
  !*** ./resources/img/Hancock.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Hancock.png?8d9f13d0aee4aaeaa00a331d6f476f67");

/***/ }),

/***/ "./resources/img/about/about1.jpg":
/*!****************************************!*\
  !*** ./resources/img/about/about1.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/about1.jpg?e737e0936528752f831d255c88c26f79");

/***/ }),

/***/ "./resources/img/about/about2.jpg":
/*!****************************************!*\
  !*** ./resources/img/about/about2.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/about2.jpg?e81bb5241e374738213c209fddee336d");

/***/ }),

/***/ "./resources/img/about/about3.jpg":
/*!****************************************!*\
  !*** ./resources/img/about/about3.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/about3.jpg?2cbe0483a572d3439d1076f60905b583");

/***/ }),

/***/ "./resources/img/about/about4.jpg":
/*!****************************************!*\
  !*** ./resources/img/about/about4.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/about4.jpg?35152726673752965f581a825adcf6ad");

/***/ }),

/***/ "./resources/img/close-icon.svg":
/*!**************************************!*\
  !*** ./resources/img/close-icon.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/close-icon.svg?9beab5aff8c5b76c45d268b7c45c43f5");

/***/ }),

/***/ "./resources/img/logos/facebook.svg":
/*!******************************************!*\
  !*** ./resources/img/logos/facebook.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/facebook.svg?c66e034f2c7f8586a225862a9a5280f9");

/***/ }),

/***/ "./resources/img/logos/google.svg":
/*!****************************************!*\
  !*** ./resources/img/logos/google.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/google.svg?e946e4791d1fc6561314e0b36061fccf");

/***/ }),

/***/ "./resources/img/logos/ibm.svg":
/*!*************************************!*\
  !*** ./resources/img/logos/ibm.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/ibm.svg?2f2f8ea8e31760b1dcf7f5d3a66bf191");

/***/ }),

/***/ "./resources/img/logos/microsoft.svg":
/*!*******************************************!*\
  !*** ./resources/img/logos/microsoft.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/microsoft.svg?d36d0304850e2bfa1b97e476505504b0");

/***/ }),

/***/ "./resources/img/portfolio/portafolio1.jpg":
/*!*************************************************!*\
  !*** ./resources/img/portfolio/portafolio1.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/portafolio1.jpg?2fb14c857750c2a3bf5f3ecf5fe66948");

/***/ }),

/***/ "./resources/img/portfolio/portafolio2.jpg":
/*!*************************************************!*\
  !*** ./resources/img/portfolio/portafolio2.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/portafolio2.jpg?96177e9474346bfa04d02fec1881e8ac");

/***/ }),

/***/ "./resources/img/portfolio/portafolio3.jpg":
/*!*************************************************!*\
  !*** ./resources/img/portfolio/portafolio3.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/portafolio3.jpg?b0ffea2abdf2687d38d8eaf1d754f622");

/***/ }),

/***/ "./resources/img/portfolio/portafolio4.jpg":
/*!*************************************************!*\
  !*** ./resources/img/portfolio/portafolio4.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/portafolio4.jpg?220d1cbad84ddbb70d269d484db77ce5");

/***/ }),

/***/ "./resources/img/portfolio/portafolio5.jpg":
/*!*************************************************!*\
  !*** ./resources/img/portfolio/portafolio5.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/portafolio5.jpg?cb53053784f4a5e2434da71b88ecd33e");

/***/ }),

/***/ "./resources/img/portfolio/portafolio6.jpg":
/*!*************************************************!*\
  !*** ./resources/img/portfolio/portafolio6.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/portafolio6.jpg?998ef74039a69a6143acd54ed1dcd742");

/***/ }),

/***/ "./resources/img/team/equipo1.jpg":
/*!****************************************!*\
  !*** ./resources/img/team/equipo1.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/equipo1.jpg?5b9e1fc3dcc584f3e969940e1fc8fe03");

/***/ }),

/***/ "./resources/img/team/equipo2.jpg":
/*!****************************************!*\
  !*** ./resources/img/team/equipo2.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/equipo2.jpg?eb238316604fbcd80bd201a369d835e6");

/***/ }),

/***/ "./resources/img/team/equipo3.jpg":
/*!****************************************!*\
  !*** ./resources/img/team/equipo3.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/equipo3.jpg?f24e496e0e312e3d2db5b19a4fb4c354");

/***/ }),

/***/ "./resources/js/Pages/Home/Homepage.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Home/Homepage.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Homepage_vue_vue_type_template_id_28705d65__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Homepage.vue?vue&type=template&id=28705d65 */ "./resources/js/Pages/Home/Homepage.vue?vue&type=template&id=28705d65");
/* harmony import */ var _Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Homepage.vue?vue&type=script&lang=js */ "./resources/js/Pages/Home/Homepage.vue?vue&type=script&lang=js");
/* harmony import */ var D_Proyectos_de_desarollo_hancock_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Proyectos_de_desarollo_hancock_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Homepage_vue_vue_type_template_id_28705d65__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home/Homepage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home/Homepage.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Home/Homepage.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Homepage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Homepage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home/Homepage.vue?vue&type=template&id=28705d65":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Home/Homepage.vue?vue&type=template&id=28705d65 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_template_id_28705d65__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Homepage_vue_vue_type_template_id_28705d65__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Homepage.vue?vue&type=template&id=28705d65 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home/Homepage.vue?vue&type=template&id=28705d65");


/***/ })

}]);