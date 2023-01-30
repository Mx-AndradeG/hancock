<template>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><img src="../../../../resources/img/Hancock.png" alt="..."  style="width: 100% !important; height: 50px !important; " /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Servicios</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">Acerca de nosotros</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contactanos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container" style="background: rgb(0,78,205); background: linear-gradient(35deg, rgba(0,78,205,1) 0%, rgba(73,75,78,0.6502976190476191) 0%);">
                <div class="masthead-subheading" style="padding-top: 3%;">Bienvenido a nuestro estudio!</div>
                <div class="masthead-heading text-uppercase">Hancock furniture & kitchen</div>
                <a class="btn btn-primary btn-xl text-uppercase" style="margin-bottom: 3%;" href="#services">Conocenos</a>
            </div>
        </header>
        <!-- Services-->
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Servicios</h2>
                    <h3 class="section-subheading text-muted">Expertos en diseño, creación e implementación de espacios de interiores.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-cutlery fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Diseños de cocinas</h4>
                        <p class="text-muted">El diseño de la cocina es uno de los aspectos más importantes de nuestra casa, debido a la cantidad de tiempo que pasamos en ella y a las múltiples funciones que este espacio cumple en nuestras vidas. Un buen diseño interior y una distribución inteligente son vitales en todos los espacios</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-bed fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Diseño de muebles</h4>
                        <p class="text-muted">El diseño de mobiliario es una disciplina técnica que requiere muchas
                                                habilidades, como el control de los materiales, de los procesos de
                                                fabricación, la gestión de los proveedores, cálculos de estabilidad y
                                                ergonomía, diseño en 3D, maquetación y producción de un prototipo real</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-home fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Diseño de interiores</h4>
                        <p class="text-muted">El diseño de interiores es el arte que consiste en mejorar el interior de un edificio, 
                            por lo tanto, en el pasado se diseñaba el interior de manera instintiva como parte del proceso de producción, 
                            siendo su objetivo principal la búsqueda del uso del espacio de manera efectiva y conseguir bienestar.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Portfolio Grid-->
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portafolio</h2>
                    <h3 class="section-subheading text-muted">Algunos de nuestros mejores trabajos.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 1-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="/images/IMG_1156.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Cocinas modernas</div>
                                <div class="portfolio-caption-subheading text-muted">Diseños para cocinas</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="/images/IMG_0529.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Espacios de entretenimiento</div>
                                <div class="portfolio-caption-subheading text-muted">Diseño de areas recreativas</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 3-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="/images/cama.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Recamaras</div>
                                <div class="portfolio-caption-subheading text-muted">Diseño de interiores</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <!-- Portfolio item 4-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="/images/IMG_1200.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Tejados</div>
                                <div class="portfolio-caption-subheading text-muted">Al aire libre</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <!-- Portfolio item 5-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="/images/IMG_1452.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Cocinas con islas</div>
                                <div class="portfolio-caption-subheading text-muted">Diseño para cocinas</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <!-- Portfolio item 6-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img class="img-fluid" src="../../../../resources/img/portfolio/IMG_2261.jpg" alt="..." />
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Dormitorios compartidos</div>
                                <div class="portfolio-caption-subheading text-muted">Diseño de interiores</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About-->
        <section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="../../../../resources/img/about/about1.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 class="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="../../../../resources/img/about/about2.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 class="subheading">An Agency is Born</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="../../../../resources/img/about/about3.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 class="subheading">Transition to Full Service</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src="../../../../resources/img/about/about4.jpg" alt="..." /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>July 2020</h4>
                                <h4 class="subheading">Phase Two Expansion</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <!-- Team-->
        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../../../../resources/img/team/equipo1.jpg" alt="..." />
                            <h4>Parveen Anand</h4>
                            <p class="text-muted">Lead Designer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../../../../resources/img/team/equipo2.jpg" alt="..." />
                            <h4>Diana Petersen</h4>
                            <p class="text-muted">Lead Marketer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="team-member">
                            <img class="mx-auto rounded-circle" src="../../../../resources/img/team/equipo3.jpg" alt="..." />
                            <h4>Larry Parker</h4>
                            <p class="text-muted">Lead Developer</p>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        <!-- Clients-->
        <div class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../../resources/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../../resources/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../../resources/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../../resources/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact-->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contactanos</h2>
                    <h3 class="section-subheading text-muted">Llena el siguiente formulario</h3>
                </div>
                <alv-form
                    id="contactForm"
                    ref="form"
                    :action="alvRoute"
                    :method="alvMethod"
                    @after-done="afterDone"
                    :data-object="item"
                    @after-error="afterError"
                >
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input 
                                    class="form-control" 
                                    id="name" 
                                    type="text" 
                                    placeholder="Nombre" 
                                    data-sb-validations="required"
                                    v-model="item.name"
                                    />
                            </div>
                            <div class="form-group">
                                <input  class="form-control" 
                                        id="email" 
                                        type="email" 
                                        placeholder="Correo" 
                                        data-sb-validations="required,email" 
                                        v-model="item.email"
                                    />
                            </div>
                            <div class="form-group mb-md-0">
                                <input class="form-control" 
                                        id="phone" 
                                        type="number"
                                        placeholder="Telefono" 
                                        data-sb-validations="required"
                                        v-model="item.phone"
                                        />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                <textarea   class="form-control" 
                                            id="message" 
                                            placeholder="Mensaje" 
                                            data-sb-validations="required"
                                            v-model="item.message"
                                            >
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    <!-- Submit Button-->
                    <div class="text-center">
                        <button 
                            class="btn btn-primary btn-xl text-uppercase" 
                            form="contactForm"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </alv-form>
            </div>
        </section>
        <!-- Footer-->
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">Copyright &copy; Hancock 2022</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Portfolio Modals-->
        <!-- Portfolio item 1 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="../../../../resources/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Cocinas modernas</h2>
                                    <p class="item-intro text-muted">Diseño y construccion de Cocinas modernas.</p>
                                    <img class="img-fluid d-block mx-auto" src="/images/IMG_1156.jpg" alt="..." />
                                    <p>La clave de una cocina moderna es su diseño, con líneas simples y composiciones regulares.
                                         De esta forma, se gana amplitud y se evita el recargo de elementos, a veces, innecesarios. 
                                         Así, puedes conseguir una cocina más minimalista y con una mayor sensación de armonía</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Caterogia:</strong>
                                            Cocinas
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio item 2 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="../../../../resources/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Espacios de entretenimiento</h2>
                                    <p class="item-intro text-muted">Diseño y construccion de areas recreativas.</p>
                                    <img class="img-fluid d-block mx-auto" src="/images/IMG_0529.jpg" alt="..." />
                                    <p>La función principal de este tipo de muebles es alojar una televisión, el mueble puede tener una misión que no sólo se enfoque en eso. 
                                        Por ello, es indispensable determinar cuál será su uso; de eso dependerá su forma, tamaño e incluso ubicación.Hay materiales más adecuados para darle estructura a un mueble para TV pero francamente, 
                                        existe una amplia variedad impresionante de materia prima, y es que del material se desprende mucho del estilo que se pretende tenga el interior del hogar.</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Categoria:</strong>
                                            Diseño de areas recreativas
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio item 3 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="../../../../resources/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Recamaras</h2>
                                    <p class="item-intro text-muted">Diseño de interiores.</p>
                                    <img class="img-fluid d-block mx-auto" src="/images/cama.jpg" alt="..." />
                                    <p>Entre las zonas privadas de la casa, los dormitorios son los protagonistas. 
                                        Estos espacios son los que destinamos a descansar y donde reflejamos de alguna forma nuestra personalidad, 
                                        por lo que su decoración, sin importar el estilo o tendencia, queda siempre supeditada a los gustos de su usuario final. 
                                        Es importante tener en cuenta que por tratarse de un espacio destinado al descanso y a la relajación, 
                                        se deben cumplir ciertas normas, como la habitabilidad, que consiste en mantener los espacios debidamente iluminados 
                                        y ventilados hacia el exterior o a través de patios. </p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Categoria:</strong>
                                            Diseño de interiores.
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio item 4 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="../../../../resources/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Tejados</h2>
                                    <p class="item-intro text-muted">Al Aire libre.</p>
                                    <img class="img-fluid d-block mx-auto" src="/images/IMG_1200.jpg" alt="..." />
                                    <p>Tener una propiedad con espacio al aire libre es un privilegio que muchos desearían, 
                                        hacer un uso adecuado de estos espacios y decorarlos de manera que se vuelvan funcionales y agreguen valor a la propiedad 
                                        y al estilo de vida de los habitantes de la casa no debe ser un aspecto a descuidar.
                                        Potenciar las posibilidades de estos espacios puede hacer una gran diferencia en la forma en que y 
                                        frecuencia con que se disfrutan, si el lugar invita a estar cómodo y es funcional, todos querrán estar afuera, 
                                        para hacer esto posible la decoración es fundamental. </p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Category:</strong>
                                            Al Aire libre
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio item 5 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="../../../../resources/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Cocinas con islas</h2>
                                    <p class="item-intro text-muted">Diseño para cocinas.</p>
                                    <img class="img-fluid d-block mx-auto" src="/images/IMG_1452.jpg" alt="..." />
                                    <p>¿Qué son las islas de cocina? Son módulos aislados, 
                                        con cuatro costados libres, que permiten una configuración muy versátil y práctica. 
                                        Nos pueden servir como espacio extra para cocinar y almacenar, 
                                        e incluso para comer y hablar con familiares y amigos.</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Categoria:</strong>
                                            Diseño para cocinas
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio item 6 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="../../../../resources/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Dormitorios compartidos</h2>
                                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img class="img-fluid d-block mx-auto" src="../../../../resources/img/portfolio/IMG_2261.jpg" alt="..." />
                                    <p> Decorar habitaciones compartidas no es una tarea sencilla y 
                                        hay diferentes elementos que tienes que tener en cuenta como los armarios,
                                        las camas, la decoración de las paredes…
                                        Lo más importante es intentar que la habitación tenga un estilo en el que ambos 
                                        niños se sientan identificados, al final, 
                                        es un espacio en el que pasarán muchas horas ya sea jugando o haciendo sus deberes.</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Categoria:</strong>
                                            Diseño de interiores          
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast()

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      alvRoute: route("lead.store"),
      alvMethod: "POST",
      item: {
        name: '',
        email: '',
        phone: '',
        message: '',
      }
    };
  },
  methods:{
    afterDone(){
        toast.success("Te contactaremos! ",{
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
        this.item.name = ''
        this.item.email = ''
        this.item.phone = ''
        this.item.message = ''
    },
    afterError(){
        toast.error("A ocurrido un error  ",{
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
        this.item.name = ''
        this.item.email = ''
        this.item.phone = ''
        this.item.message = ''
    }

  }
}
</script>