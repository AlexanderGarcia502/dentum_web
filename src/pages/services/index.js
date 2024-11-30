import Script from "next/script";
import Link from "next/link";
import "../../../public/assets/fonts/unicons/unicons.css";
import "../../../public/assets/css/plugins.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";

export default function Services() {
  return (
    <>
      <div className="grow shrink-0">
        <header class="relative wrapper bg-soft-primary !bg-[#edf2fc]">
          <nav class="navbar navbar-expand-lg center-nav transparent !absolute navbar-dark xl:pt-[.3rem] lg:pt-[.3rem]">
            <div class="container xl:flex-row lg:flex-row !flex-nowrap items-center">
              <div class="navbar-brand w-full">
                <a href="./index.html">
                  <img
                    class="logo-dark"
                    src="./assets/img/logo.png"
                    srcset="./assets/img/logo@2x.png 2x"
                    alt="image"
                  />
                  <img
                    class="logo-light"
                    src="./assets/img/logo-light.png"
                    srcset="./assets/img/logo-light@2x.png 2x"
                    alt="image"
                  />
                </a>
              </div>
              <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div class="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                  <h3 class="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                    Sandbox
                  </h3>
                  <button
                    type="button"
                    class="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link" href="/">
                        Inicio
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/about">
                        Sobre nosotros
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/services">
                        Servicios
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/testimonials">
                        Testimonios
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/contact">
                        Contáctanos
                      </Link>
                    </li>
                  </ul>
                  <div class="offcanvas-footer xl:hidden lg:hidden">
                    <div>
                      <a
                        href="mailto:first.last@email.com"
                        class="link-inverse"
                      >
                        info@email.com
                      </a>
                      <br /> 00 (123) 456 78 90 <br />
                      <nav class="nav social social-white mt-4">
                        <a
                          class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i class="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i class="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i class="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i class="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i class="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
                        </a>
                      </nav>
                      {/* <!-- /.social --> */}
                    </div>
                  </div>
                  {/* <!-- /.offcanvas-footer --> */}
                </div>
                {/* <!-- /.offcanvas-body --> */}
              </div>
              {/* <!-- /.navbar-collapse --> */}
              <div className="navbar-other lg:!ml-4 xl:!ml-4">
                <ul className="navbar-nav !flex-row !items-center !ml-auto">
                  <li className="nav-item xl:hidden lg:hidden">
                    <button className="hamburger offcanvas-nav-btn">
                      <span></span>
                    </button>
                  </li>
                </ul>
                {/* <!-- /.navbar-nav --> */}
              </div>
              {/* <!-- /.navbar-other --> */}
            </div>
            {/* <!-- /.container --> */}
          </nav>
          {/* <!-- /.navbar --> */}
        </header>
        {/* <!-- /header --> */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]"
          data-image-src="./assets/img/photos/bg1.jpg"
        >
          <div className="container pt-36 xl:pt-[12.5rem] lg:pt-[12.5rem] md:pt-[12.5rem] pb-32 xl:pb-40 lg:pb-40 md:pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] text-white !mb-3">
                  Nuestros servicios
                </h1>
                <p className="lead text-[1.05rem] leading-[1.6] font-medium md:!px-3 lg:!px-7 xl:!px-9 xxl:!px-10">
                  <br />
                </p>
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[5rem] xl:!py-[4rem] lg:!py-[4rem] md:!py-[4rem]">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-7 xl:!px-12">
                Nuestros Servicios Dentales
                </h3>
                <p className="text-[1rem] tracking-[-0.03em]">
                  En DENTUM, brindamos atención dental de calidad y construimos
                  relaciones duraderas con nuestros pacientes.
                </p>
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div
              className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-2.5"
              style={{ justifyContent: "center" }}
            >
              {/** HERE */}

              <div
                className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] mt-[40px] xl:mt-0 lg:mt-0"
                style={{ paddingLeft: "1.2rem", paddingRight: "1.2rem" }}
              >
                <div
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  style={{ marginTop: 40 }}
                >
                  <div className="!relative">
                    <div className="card">
                      <figure className="card-img-top">
                        <img
                          className="max-w-full h-auto"
                          src="../../assets/img/avatars/t1.jpg"
                          srcSet="../../assets/img/avatars/t1@2x.jpg 2x"
                          alt="image"
                        />
                      </figure>
                      <div className="card-body px-6 py-5">
                        <h4 className="!mb-1">Odontología Preventiva</h4>
                        <p className="!mb-0 text-[.85rem]">
                          • Limpiezas dentales profesionales <br />
                          • Exámenes y diagnóstico <br />
                          • Aplicación de flúor y selladores <br />• Educación
                          en higiene bucal
                        </p>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /div --> */}
                </div>
                {/* <!--/column --> */}
                <div
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  style={{ marginTop: 40 }}
                >
                  <div className="!relative">
                    <div className="card">
                      <figure className="card-img-top">
                        <img
                          className="max-w-full h-auto"
                          src="../../assets/img/avatars/t2.jpg"
                          srcSet="../../assets/img/avatars/t2@2x.jpg 2x"
                          alt="image"
                        />
                      </figure>
                      <div className="card-body px-6 py-5">
                        <h4 className="!mb-1">Estética Dental</h4>
                        <p className="!mb-0 text-[.85rem]">
                          • Blanqueamiento dental <br />
                          • Carillas dentales <br />
                          • Diseño de sonrisa <br />
                          • Reconstrucción estética <br />
                        </p>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /div --> */}
                </div>
                {/* <!--/column --> */}
                <div
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  style={{ marginTop: 40 }}
                >
                  <div className="!relative">
                    <div className="card">
                      <figure className="card-img-top">
                        <img
                          className="max-w-full h-auto"
                          src="../../assets/img/avatars/t3.jpg"
                          srcSet="../../assets/img/avatars/t3@2x.jpg 2x"
                          alt="image"
                        />
                      </figure>
                      <div className="card-body px-6 py-5">
                        <h4 className="!mb-1">Ortodoncia</h4>
                        <p className="!mb-0 text-[.85rem]">
                          • Brackets tradicionales <br />
                          • Ortodoncia invisible (Invisalign) <br />
                          • Corrección de mordida <br />
                        </p>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /div --> */}
                </div>
                {/* <!--/column --> */}
                <div
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  style={{ marginTop: 40 }}
                >
                  <div className="!relative">
                    <div className="card">
                      <figure className="card-img-top">
                        <img
                          className="max-w-full h-auto"
                          src="../../assets/img/avatars/t1.jpg"
                          srcSet="../../assets/img/avatars/t1@2x.jpg 2x"
                          alt="image"
                        />
                      </figure>
                      <div className="card-body px-6 py-5">
                        <h4 className="!mb-1">Odontología Preventiva</h4>
                        <p className="!mb-0 text-[.85rem]">
                          • Limpiezas dentales profesionales <br />
                          • Exámenes y diagnóstico <br />
                          • Aplicación de flúor y selladores <br />• Educación
                          en higiene bucal
                        </p>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /div --> */}
                </div>
                {/* <!--/column --> */}
                <div
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  style={{ marginTop: 40 }}
                >
                  <div className="!relative">
                    <div className="card">
                      <figure className="card-img-top">
                        <img
                          className="max-w-full h-auto"
                          src="../../assets/img/avatars/t1.jpg"
                          srcSet="../../assets/img/avatars/t1@2x.jpg 2x"
                          alt="image"
                        />
                      </figure>
                      <div className="card-body px-6 py-5">
                        <h4 className="!mb-1">Odontología Preventiva</h4>
                        <p className="!mb-0 text-[.85rem]">
                          • Limpiezas dentales profesionales <br />
                          • Exámenes y diagnóstico <br />
                          • Aplicación de flúor y selladores <br />• Educación
                          en higiene bucal
                        </p>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /div --> */}
                </div>
                {/* <!--/column --> */}
                <div
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  style={{ marginTop: 40 }}
                >
                  <div className="!relative">
                    <div className="card">
                      <figure className="card-img-top">
                        <img
                          className="max-w-full h-auto"
                          src="../../assets/img/avatars/t1.jpg"
                          srcSet="../../assets/img/avatars/t1@2x.jpg 2x"
                          alt="image"
                        />
                      </figure>
                      <div className="card-body px-6 py-5">
                        <h4 className="!mb-1">Odontología Preventiva</h4>
                        <p className="!mb-0 text-[.85rem]">
                          • Limpiezas dentales profesionales <br />
                          • Exámenes y diagnóstico <br />
                          • Aplicación de flúor y selladores <br />• Educación
                          en higiene bucal
                        </p>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /div --> */}
                </div>
                {/* <!--/column --> */}
                <div
                  className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  style={{ marginTop: 40 }}
                >
                  <div className="!relative">
                    <div className="card">
                      <figure className="card-img-top">
                        <img
                          className="max-w-full h-auto"
                          src="../../assets/img/avatars/t1.jpg"
                          srcSet="../../assets/img/avatars/t1@2x.jpg 2x"
                          alt="image"
                        />
                      </figure>
                      <div className="card-body px-6 py-5">
                        <h4 className="!mb-1">Odontología Preventiva</h4>
                        <p className="!mb-0 text-[.85rem]">
                          • Limpiezas dentales profesionales <br />
                          • Exámenes y diagnóstico <br />
                          • Aplicación de flúor y selladores <br />• Educación
                          en higiene bucal
                        </p>
                      </div>
                      {/* <!--/.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                  </div>
                  {/* <!-- /div --> */}
                </div>
              </div>
              {/* HERE   */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
        <section className="wrapper !bg-[#ffffff]">
          <div className="container">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] !mb-[4.5rem] xl:!mb-24 lg:!mb-24 md:!mb-24 items-center">
              {/* <!--/column --> */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6 xxl:pr-6">
                  ¿Por Qué Elegirnos?
                </h3>
                <p className="text-[1rem] tracking-[-0.03em]">
                  <strong> Comprometidos con tu sonrisa </strong>
                </p>
                <p className="text-[1rem] tracking-[-0.03em]">
                  En DENTUM, combinamos años de experiencia en odontología con
                  un enfoque personalizado y centrado en el paciente. Nuestro
                  equipo de expertos utiliza tecnología avanzada, como
                  diagnósticos digitales y tratamientos innovadores, para
                  garantizar resultados precisos y eficaces. Nos enorgullece ser
                  la elección preferida, dedicados a crear sonrisas saludables y
                  duraderas,mientras priorizamos la comodidad y el bienestar de
                  nuestros pacientes.
                </p>
                {/* <!-- /.progress-list --> */}
              </div>
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <figure className="m-0 p-0">
                  <img
                    className="w-auto"
                    src="./assets/img/illustrations/i8.png"
                    srcset="./assets/img/illustrations/i8@2x.png 2x"
                    alt="image"
                  />
                </figure>
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        <section className="wrapper !bg-[#ffffff]">
          <div className="container">
          
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
              <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <figure className="m-0 p-0">
                  <img
                    className="w-auto"
                    src="./assets/img/illustrations/i7.png"
                    srcset="./assets/img/illustrations/i7@2x.png 2x"
                    alt="image"
                  />
                </figure>
              </div>
              {/* <!--/column --> */}
              <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-5">
                  Nuestra Experiencia
                </h3>
                <p className="text-[1rem] tracking-[-0.03em]">
                  En DENTUM contamos con una sólida trayectoria en el cuidado
                  dental, respaldada por años de experiencia y formación
                  continua. Nuestro equipo de profesionales ha tratado con éxito
                  una amplia variedad de casos, siempre comprometido con ofrecer
                  soluciones de calidad que se adapten a las necesidades
                  individuales de cada paciente. A lo largo de los años, hemos
                  perfeccionado nuestras técnicas y adoptado las mejores
                  prácticas para garantizar resultados duraderos y sonrisas
                  saludables.
                </p>
                {/* <!--/.row --> */}
              </div>
              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Foother />
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#3f78e0] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#3f78e0] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
      <Script
        src="/assets/js/plugins.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("El script plugins.js se ha cargado.");
        }}
      />
      <Script
        src="/assets/js/theme.js" // Ruta al archivo JavaScript
        strategy="afterInteractive" // Cargar el script después de que el componente se haya montado
        onLoad={() => {
          console.log("El script plugins.js se ha cargado.");
        }}
      />
    </>
  );
}
