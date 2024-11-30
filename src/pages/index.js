import Script from "next/script";
import Link from 'next/link';
import "../../public/assets/fonts/unicons/unicons.css";
import "../../public/assets/css/plugins.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";

export default function Home() {
  return (
    <div>
      <div className="grow shrink-0">
        <header className="relative wrapper !bg-[#ffffff] ">
          <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-light">
            <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
              <div className="navbar-brand w-full">
                <a href="./index.html">
                  <img
                    src="/assets/img/logo-dark.png"
                    srcSet="/assets/img/logo-dark@2x.png 2x"
                    alt="image"
                  />
                </a>
              </div>
              <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                  <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                    Sandbox
                  </h3>
                  <button
                    type="button"
                    className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown dropdown-mega">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/about"
                      >
                        Sobre nosotros
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/services"
                      >
                        Servicios
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/testimonials"
                      >
                        Testimonios
                      </Link>
                    </li>
                    <li className="nav-item dropdown dropdown-mega">
                      <Link
                        className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#605dba] after:!text-[#605dba]"
                        href="/contact"
                      >
                        Contáctanos
                      </Link>
                      {/* <!--/.dropdown-menu --> */}
                    </li>
                  </ul>
                  {/* <!-- /.navbar-nav --> */}
                  <div className="offcanvas-footer xl:hidden lg:hidden">
                    <div>
                      <a
                        href="mailto:first.last@email.com"
                        className="link-inverse"
                      >
                        info@email.commmm
                      </a>
                      <br /> 00 (123) 456 78 90 <br />
                      <nav className="nav social social-white mt-4">
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                        </a>
                        <a
                          className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                          href="#"
                        >
                          <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
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
          {/* <!-- /.offcanvas --> */}
        </header>
        {/* <!-- /header --> */}
        {/**  Cover init  */}

        <section
          className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-[rgba(246,247,249,1)] bg-[center_center] bg-no-repeat bg-scroll relative z-0 xsm:!bg-none md:min-h-[25rem] sm:min-h-[20rem] xsm:min-h-[20rem]"
          data-image-src="/assets/img/photos/bg37.jpg"
        >
          <div className="container pt-28 pb-20 sm:!py-28 xxl:!py-40">
            <div className="flex flex-wrap mx-[-15px] justify-center">
              <div
                className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xsm:!text-center text-center"
                data-cues="slideInDown"
                data-group="page-title"
                data-interval="-200"
                data-delay="500"
              >
                <p className="lead text-[1.15rem] !leading-[1.5] font-medium mb-0 lg:pr-5 xl:pr-5 xxl:pr-0">
                  Tu sonrisa es nuestra prioridad
                </p>
                <h2 className="xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] tracking-[-0.035em] mb-4 xl:pr-5 xxl:pr-0">
                  Centro de Atención Dental de Confianza
                </h2>
                <div>
                  <a
                    href="#"
                    className="btn btn-lg btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
              {/* <!--/column --> */}
            </div>
            {/*<!-- /.row -->*/}
          </div>
          {/* <!-- /.container --> */}
        </section>

        {/** Cover end */}

        {/** Services init */}

        <section className="wrapper !bg-[#ffffff]">
          <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
            <div className="flex flex-wrap mx-[-15px] !text-center">
              <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-7 xl:!px-12">
                  Nuestros Servicios
                </h3>
                <p className="text-[1rem] tracking-[-0.03em]">
                  Ofrecemos una amplia gama de servicios dentales para cuidar tu
                  salud bucal y mejorar tu sonrisa. Cada tratamiento es
                  realizado con el más alto nivel de profesionalismo
                </p>
              </div>
              {/*<!-- /column -->*/}
            </div>
            {/*<!-- /.row -->*/}
            <div
              className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-7"
              style={{ width: "100%", justifyContent: "center" }}
            >
              {/** HERE */}

              <div
                className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] mt-[-40px] xl:mt-0 lg:mt-0"
                style={{ width: "100%", justifyContent: "space-around" }}
              >
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
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
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
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
                <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
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
              </div>
              <div className="mt-12">
                <a
                  href="#"
                  className="btn btn-lg btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                >
                  Ver más servicios
                </a>
              </div>

              {/* HERE   */}
            </div>
            {/* <!--/.row --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>

        {/** Services end */}

        {/** About init */}

        <section className="wrapper">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center mb-0">
              <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full !mx-auto mt-[50px]">
                <img
                  className="w-full max-w-full !h-auto"
                  src="/assets/img/photos/co1.png"
                  srcSet="/assets/img/photos/co1@2x.png 2x"
                  alt="image"
                />
              </div>
              {/* <!--/column --> */}
              <div
                className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 className="text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.25] xl:text-[2.2rem] !mb-3">
                  Dr. Esdras
                </h2>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus
                  ac cursus commodo, tortor mauris condimentum nibh ut fermentum
                  massa justo sit amet risus.
                </p>
                <p>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Aenean lacinia bibendum nulla sed
                  consectetur.
                </p>
                <p>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus
                  ac cursus commodo, tortor mauris condimentum nibh ut fermentum
                  massa justo sit amet risus.
                </p>
                <p>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Aenean lacinia bibendum nulla sed
                  consectetur.
                </p>
                <p>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Aenean lacinia bibendum nulla sed
                  consectetur.
                </p>
                <div className="w-full">
                  <a
                    href="#"
                    className="btn btn-lg btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                  >
                    Leer más
                    <i className="uil uil-arrow-up-right ml-[.3rem] before:content-['\e950']"></i>
                  </a>
                </div>
              </div>

              {/* <!--/column --> */}
            </div>
            {/* <!-- /.row --> */}
            {/* <!-- /.row --> */}
          </div>
        </section>

        {/** About finish */}

        {/** Testimonials init */}

        <section className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
              Clientes Satisfechos
            </h2>
            <p className="lead text-[0.9rem] font-medium leading-[1.65] !text-center !mb-6 md:!px-24 lg:!px-0">
              La satisfacción del cliente es nuestro principal objetivo. Vea lo
              que nuestros clientes dicen sobre nosotros.
            </p>
            <div className="!relative">
              {/** Adornos inicio */}
              {/*<div
                className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]"
                data-rellax-speed="1"
                style={{
                  bottom: "0.5rem",
                  right: "-1.7rem",
                }}
              ></div>
              <div
                className="shape bg-dot primary rellax !w-[6rem] !h-[6rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
                data-rellax-speed="1"
                style={{
                  top: "-1rem",
                  left: "-1.7rem",
                }}
              ></div> */}
              {/** Adornos fin */}
              <div
                className="swiper-container dots-closer !mb-6 relative z-10"
                data-margin="0"
                data-dots="true"
                data-items-xl="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="/assets/img/avatars/te1.jpg"
                                  srcset="/assets/img/avatars/te1@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Coriss Ambady
                                  </h5>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="/assets/img/avatars/te2.jpg"
                                  srcset="/assets/img/avatars/te2@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Cory Zamora
                                  </h5>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="/assets/img/avatars/te3.jpg"
                                  srcset="/assets/img/avatars/te3@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Nikolas Brooten
                                  </h5>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="/assets/img/avatars/te4.jpg"
                                  srcset="/assets/img/avatars/te4@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Coriss Ambady
                                  </h5>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                    <div className="swiper-slide">
                      <div className="item-inner">
                        <div className="card">
                          <div className="card-body flex-[1_1_auto] p-[40px]">
                            <blockquote className="text-[0.85rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                              <p>
                                “Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Vestibulum id ligula
                                porta felis euismod semper. Cras justo odio
                                dapibus facilisis sociis natoque penatibus.”
                              </p>
                              <div className="flex items-center text-left">
                                <img
                                  className="!rounded-[50%] !w-[3.5rem]"
                                  src="/assets/img/avatars/te5.jpg"
                                  srcset="/assets/img/avatars/te5@2x.jpg 2x"
                                  alt="image"
                                />
                                <div className="info pl-4">
                                  <h5 className="!mb-1 text-[.95rem] !leading-[1.5]">
                                    Jackie Sanders
                                  </h5>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                          {/* <!-- /.card-body --> */}
                        </div>
                        {/* <!-- /.card --> */}
                      </div>
                      {/* <!-- /.item-inner --> */}
                    </div>
                    {/* <!--/.swiper-slide --> */}
                  </div>
                  {/* <!--/.swiper-wrapper --> */}
                </div>
                {/* <!-- /.swiper --> */}
              </div>
              {/* <!-- /.swiper-container --> */}
            </div>
            {/* <!-- /.relative --> */}
          </div>
        </section>

        {/** Testimonials finish */}

        {/** Contact init */}
        <div class="container pb-12">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
              <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
                Contactanos
              </h2>
              <p className="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-10"></p>
              <form
                className="contact-form needs-validation"
                method="post"
                action="./assets/php/contact.php"
                novalidate
              >
                <div className="messages"></div>
                <div className="flex flex-wrap mx-[-10px]">
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className="form-floating relative !mb-4">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                        placeholder="Jane"
                        required
                      />
                      <label
                        htmlFor="form_name"
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      >
                        First Name *
                      </label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        Please enter your first name.
                      </div>
                    </div>
                  </div>
                  {/* <!-- /column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className="form-floating relative !mb-4">
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                        placeholder="Doe"
                        required
                      />
                      <label
                        htmlFor="form_lastname"
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      >
                        Last Name *
                      </label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        Please enter your last name.{" "}
                      </div>
                    </div>
                  </div>
                  {/* <!-- /column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className="form-floating relative !mb-4">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                        placeholder="jane.doe@example.com"
                        required
                      />
                      <label
                        htmlFor="form_email"
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      >
                        Email *
                      </label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        Please provide a valid email address.{" "}
                      </div>
                    </div>
                  </div>
                  {/* <!-- /column --> */}
                  <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className="form-floating relative !mb-4">
                      <input
                        id="form_phone"
                        type="tel"
                        name="phone"
                        className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                        placeholder="85489723"
                        required
                        pattern="[0-9]{8}"
                        maxLength="13"
                      />
                      <label
                        htmlFor="form_phone"
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      >
                        Telefono *
                      </label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        Please provide a valid phone number.
                      </div>
                    </div>
                  </div>

                  {/* <!-- /column --> */}
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                    <div className="form-floating relative !mb-4">
                      <textarea
                        id="form_message"
                        name="message"
                        className=" form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]"
                        placeholder="Your message"
                        style={{
                          height: "150px",
                        }}
                        required
                      ></textarea>
                      <label
                        htmlFor="form_message"
                        className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                      >
                        Message *
                      </label>
                      <div className="valid-feedback"> Looks good! </div>
                      <div className="invalid-feedback">
                        {" "}
                        Please enter your messsage.{" "}
                      </div>
                    </div>
                  </div>
                  {/* <!-- /column --> */}
                  <div className="w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                    <p className="text-[#aab0bc]">
                      <strong>*</strong> These fields are required.
                    </p>
                    <div>
                      <a
                        href="#"
                        className="btn btn-lg btn-navy text-white !bg-[#343f52] border-[#343f52] hover:text-white hover:bg-[#343f52] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                      >
                        Enviar
                      </a>
                    </div>
                  </div>
                  {/* <!-- /column --> */}
                </div>
                {/* <!-- /.row --> */}
              </form>
              {/* <!-- /form --> */}
            </div>
            {/* <!-- /column --> */}
          </div>
        </div>

        {/* <!-- /section --> */}

        {/** Contact finish */}

        {/** Our location init */}

        <section className="wrapper !bg-[#ffffff] ">
          <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
                  Nuestras Ubicaciones
                </h2>
                <p className="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-10"></p>
                <ul class="nav nav-tabs nav-tabs-basic">
                  <li class="nav-item">
                    {" "}
                    <a
                      class="nav-link active"
                      data-bs-toggle="tab"
                      href="#tab3-1"
                    >
                      Chimaltenango
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" data-bs-toggle="tab" href="#tab3-2">
                      Sacatepequez
                    </a>{" "}
                  </li>
                </ul>
                {/* <!-- /.nav-tabs --> */}
                <div class="tab-content mt-0">
                  <div class="tab-pane fade show active" id="tab3-1">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                        <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.918531471518!2d-90.81692506310931!3d14.660962492596031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85896dfc21477c29%3A0xf1c5cbf4aa638ab!2sCl%C3%ADnica%20Dental%20DENTUM%20-%20Chimaltenango!5e1!3m2!1ses-419!2sgt!4v1729148019856!5m2!1ses-419!2sgt"
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "0",
                            }}
                            allowfullscreen
                          ></iframe>
                        </div>
                        {/* <!-- /.map --> */}
                      </div>
                      {/* <!--/column --> */}
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                        <div className="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                              </div>
                            </div>
                            <div className="!self-start !justify-start">
                              <h5 className="!mb-1">Address</h5>
                              <address className=" not-italic leading-[inherit] mb-4">
                                Moonshine St. 14/05 Light City,{" "}
                                <br className="hidden xl:block lg:block md:block" />
                                London, United Kingdom
                              </address>
                            </div>
                          </div>
                          {/* <!--/div --> */}
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil uil-phone-volume before:content-['\ec50']"></i>
                              </div>
                            </div>
                            <div>
                              <h5 className="!mb-1">Phone</h5>
                              <p>
                                00 (123) 456 78 90 <br />
                                00 (987) 654 32 10
                              </p>
                            </div>
                          </div>
                          {/* <!--/div --> */}
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil uil-envelope before:content-['\eac8']"></i>
                              </div>
                            </div>
                            <div>
                              <h5 className="!mb-1">E-mail</h5>
                              <p className="!mb-0">
                                <a
                                  href="mailto:sandbox@email.com"
                                  className="text-[#60697b]"
                                >
                                  sandbox@email.com
                                </a>
                              </p>
                              <p className="!mb-0">
                                <a
                                  href="mailto:help@sandbox.com"
                                  className="text-[#60697b]"
                                >
                                  help@sandbox.com
                                </a>
                              </p>
                            </div>
                          </div>
                          {/* <!--/div --> */}
                        </div>
                        {/* <!--/div --> */}
                      </div>
                      {/* <!--/column --> */}
                    </div>
                  </div>
                  {/* <!--/.tab-pane --> */}
                  <div class="tab-pane fade" id="tab3-2">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                        <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4750.634598368484!2d-90.66647915773585!3d14.608576128184152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890b9d1c7d9c59%3A0xf91e4a1f8d0a41f6!2sCentro%20Dental%20San%20Lucas!5e1!3m2!1ses-419!2sgt!4v1729149727408!5m2!1ses-419!2sgt"
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "0",
                            }}
                            allowfullscreen
                          ></iframe>
                        </div>
                        {/* <!-- /.map --> */}
                      </div>
                      {/* <!--/column --> */}
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                        <div className="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                              </div>
                            </div>
                            <div className="!self-start !justify-start">
                              <h5 className="!mb-1">Address</h5>
                              <address className=" not-italic leading-[inherit] mb-4">
                                Moonshine St. 14/05 Light City,{" "}
                                <br className="hidden xl:block lg:block md:block" />
                                London, United Kingdom
                              </address>
                            </div>
                          </div>
                          {/* <!--/div --> */}
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil uil-phone-volume before:content-['\ec50']"></i>
                              </div>
                            </div>
                            <div>
                              <h5 className="!mb-1">Phone</h5>
                              <p>
                                00 (123) 456 78 90 <br />
                                00 (987) 654 32 10
                              </p>
                            </div>
                          </div>
                          {/* <!--/div --> */}
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil uil-envelope before:content-['\eac8']"></i>
                              </div>
                            </div>
                            <div>
                              <h5 className="!mb-1">E-mail</h5>
                              <p className="!mb-0">
                                <a
                                  href="mailto:sandbox@email.com"
                                  className="text-[#60697b]"
                                >
                                  sandbox@email.com
                                </a>
                              </p>
                              <p className="!mb-0">
                                <a
                                  href="mailto:help@sandbox.com"
                                  className="text-[#60697b]"
                                >
                                  help@sandbox.com
                                </a>
                              </p>
                            </div>
                          </div>
                          {/* <!--/div --> */}
                        </div>
                        {/* <!--/div --> */}
                      </div>
                      {/* <!--/column --> */}
                    </div>
                  </div>
                  {/* <!--/.tab-pane --> */}
                </div>
                {/* <!-- /.tab-content --> */}

                {/* <!--/.row --> */}
                {/* <!-- /.card --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
        </section>
        {/* <!-- /section --> */}

        {/** Our location finish */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Foother />
      {/* <!-- progress wrapper --> */}
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#605dba] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#605dba] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
      {/* <script src="./assets/js/plugins.js"></script> */}
      {/* <script src="./assets/js/theme.js"></script> */}
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
    </div>
  );
}
