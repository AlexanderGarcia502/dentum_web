import "../../public/assets/fonts/unicons/unicons.css";
import "../../public/assets/css/plugins.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";
import Image from "next/image";
import { ScriptComponent } from "@/utils/Scripts";
import { Information } from "@/interfaces/enums/information";
import { Header } from "@/components/header";
import { testimonies } from "@/utils/testimonies";
import { TestimonyCard } from "@/components/card/Testimony";
import { Button } from "@/components/Button";
import { services } from "@/utils/services";
import { ServiceCard } from "@/components/card/ServiceCard";

export default function Home() {
  return (
    <div>
      <div className="grow shrink-0">
        {/* <!-- /header --> */}
        {/**  Cover init  */}
        <Header />
        <section
          className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-[rgba(246,247,249,1)] bg-[center_center] bg-no-repeat bg-scroll relative z-0 xsm:!bg-none md:min-h-[25rem] sm:min-h-[20rem] xsm:min-h-[20rem]"
          data-image-src="/assets/img/cover5.jpg"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255,255,255,.5)",
              position: "absolute",
              marginBottom: "0px",
              marginTop: "0px",
              marginLeft: "0px",
              marginRight: "0px",
            }}
          ></div>
          <div className="container pt-28 pb-20 sm:!py-28 xxl:!py-40">
            <div className="flex flex-wrap mx-[-15px] justify-center">
              <div
                className="xl:w-9/12 lg:w-9/12 md:w-9/12 sm:w-6/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full xsm:!text-center text-center"
                data-cues="slideInDown"
                data-group="page-title"
                data-interval="-200"
                data-delay="500"
              >
                <p className="lead text-[1.15rem] !leading-[1.5] font-medium mb-0 lg:pr-5 xl:pr-5 xxl:pr-0">
                  Amamos cuidar tu sonrisa
                </p>
                <h2 className="xl:text-[2.8rem] text-[calc(1.405rem_+_1.86vw)] font-bold !leading-[1.2] tracking-[-0.035em] mb-4 xl:pr-5 xxl:pr-0">
                  Todas las especialidades dentales en un mismo lugar
                </h2>
                <div>
                  <a
                    href="#"
                    className="btn btn-lg btn-navy text-white  border-[#000] hover:text-white hover:bg-[#000] hover:border-[#343f52] focus:shadow-[rgba(82,92,108,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                    style={{
                      background: "#000",
                    }}
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
                {services.map((props, index) => (
                  <div
                    key={`service-${index}`}
                    className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]"
                  >
                    <div className="!relative">
                      <ServiceCard {...props} />
                      {/* <!-- /.card --> */}
                    </div>
                    {/* <!-- /div --> */}
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a
                  href="#"
                  className="btn btn-lg btn-navy text-white !bg-[#000] border-[#000] hover:text-white  hover:border-[#000] focus:shadow-[rgba(0,0,0,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                  style={{
                    background: "#000",
                  }}
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
                  src="/assets/img/dentum/doctors4.png"
                  srcSet="/assets/img/dentum/doctors4@2x.png 2x"
                  alt="Dr Esdras y Dra Cecy"
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
                  Nuestros Especialistas
                </h2>
                <p>
                  En Dentum, contamos con un equipo de expertos dedicados a
                  brindarte la mejor atención para el cuidado de tu sonrisa.
                </p>
                <p>
                  👨‍⚕️ Dr. Esdras – Cirujano Dentista y Ortodoncista Con más de 10
                  años de experiencia en odontología, el Dr. Esdras es
                  especialista en ortodoncia, con formación en Colombia. Su
                  enfoque en la estética y funcionalidad dental permite a los
                  pacientes lograr una sonrisa armónica y saludable.
                </p>
                <p>
                  👩‍⚕️ Dra. Cesia Hoajaca – Odontopediatra Especialista en la
                  salud bucal infantil, la Dra. Cesia Hoajaca se enfoca en
                  brindar una experiencia amigable y segura para los más
                  pequeños. Su dedicación y paciencia garantizan una atención de
                  calidad para la sonrisa de tus hijos.
                </p>

                <div className="w-full">
                  <a
                    href="#"
                    className="btn btn-lg btn-navy text-white !bg-[#000] border-[#000] hover:text-white  hover:border-[#000] focus:shadow-[rgba(0,0,0,1)] active:text-white active:bg-[#343f52] active:border-[#343f52] disabled:text-white disabled:bg-[#343f52] disabled:border-[#343f52]"
                    style={{
                      background: "#000",
                    }}
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
              {/* <div
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
                className="swiper-container dots-closer blog grid-view !mb-6"
                data-margin="0"
                data-dots="true"
                data-items-xl="3"
                data-items-md="2"
                data-items-xs="1"
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    {testimonies.map(({ content, name }, index) => (
                      <div
                        className="swiper-slide"
                        key={`testimony-${name}-${index}`}
                      >
                        <div className="item-inner">
                          <TestimonyCard content={content} name={name} />
                          {/* <!-- /.card --> */}
                        </div>
                        {/* <!-- /.item-inner --> */}
                      </div>
                    ))}

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
        <div className="container pb-12">
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
                noValidate
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
                        maxLength={8}
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
                      <Button title="Enviar" />
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
                  ¿En Donde Puedes Encontrarnos?
                </h2>
                <p className="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-10"></p>
                <ul className="nav nav-tabs nav-tabs-basic">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#tab3-1"
                    >
                      Chimaltenango
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a className="nav-link" data-bs-toggle="tab" href="#tab3-2">
                      Sacatepequez
                    </a>{" "}
                  </li>
                </ul>
                {/* <!-- /.nav-tabs --> */}
                <div className="tab-content mt-0">
                  <div className="tab-pane fade show active" id="tab3-1">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                        <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d685.918531471518!2d-90.81692506310931!3d14.660962492596031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85896dfc21477c29%3A0xf1c5cbf4aa638ab!2sCl%C3%ADnica%20Dental%20DENTUM%20-%20Chimaltenango!5e0!3m2!1ses!2sgt!4v1729148019856!5m2!1ses!2sgt"
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "0",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
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
                                <i className="uil0 uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                              </div>
                            </div>
                            <div className="!self-start !justify-start">
                              <h5 className="!mb-1">Dirección</h5>
                              <address className=" not-italic leading-[inherit] mb-4">
                                3 Avenida 3-03, Chimaltenango 04001,{" "}
                                <br className="hidden xl:block lg:block md:block" />
                                Chimalenango, Guatemala
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
                              <h5 className="!mb-1">Teléfono</h5>
                              <p>
                                (502) 5565 - 7921 <br />
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
                                  {Information.EMAIL}
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil0 uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                              </div>
                            </div>
                            <div className="!self-start !justify-start">
                              <h5 className="!mb-1">Waze</h5>
                              <a href={Information.WAZE}>Abrir Waze</a>
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
                  <div className="tab-pane fade" id="tab3-2">
                    <div className="flex flex-wrap mx-0">
                      <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                        <div className="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4750.634598368484!2d-90.66647915773585!3d14.608576128184152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890b9d1c7d9c59%3A0xf91e4a1f8d0a41f6!2sCentro%20Dental%20San%20Lucas!5e0!3m2!1ses!2sgt!4v1729149727408!5m2!1ses!2sgt"
                            style={{
                              width: "100%",
                              height: "100%",
                              border: "0",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
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
                              <h5 className="!mb-1">Dirección</h5>
                              <address className=" not-italic leading-[inherit] mb-4">
                                Km 29.9 Carretera Interamericana San Lucas
                                Sacatepequez,{" "}
                                <br className="hidden xl:block lg:block md:block" />
                                Sacatepequez, Guatemala
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
                              <h5 className="!mb-1">Teléfono</h5>
                              <p>
                                {Information.PHONE_SAC}
                                <br />
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
                                  Dentum.gt@gmail.com
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row">
                            <div>
                              <div className="icon text-[#3f78e0] xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mr-4 mt-[-0.25rem]">
                                <i className="uil0 uil-location-pin-alt before:content-['\ebd8']"></i>{" "}
                              </div>
                            </div>
                            <div className="!self-start !justify-start">
                              <h5 className="!mb-1">Waze</h5>
                              <a href={Information.WAZE_SAC}>Abrir Waze</a>
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
      <ScriptComponent />
    </div>
  );
}
