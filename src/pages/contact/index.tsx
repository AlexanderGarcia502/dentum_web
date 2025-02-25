import "../../../public/assets/fonts/unicons/unicons.css";
import "../../../public/assets/css/plugins.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";
import { Header } from "@/components/header";
import { ScriptComponent } from "@/utils/Scripts";
import { Location } from "@/components/Location";
import { Button } from "@/components/Button";
import { Contacts } from "@/components/Contacts";

export default function Contact() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />
        {/* <!-- /header --> */}
        <section
          className="wrapper image-wrapper bg-image text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed pb-14 min-h-screen"
          data-image-src="/assets/img/dentum/sucursal.png"
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              background: "rgba(255,255,255,0.5)",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          ></div>

          <div className="py-14">
            <div className="relative z-10 pt-14 w-full text-center flex items-center justify-center">
              <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-4 ">
                Tu sonrisa es nuestra prioridad. ¡Contáctanos hoy!
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div>
            <Contacts />
          </div>
        </section>

        {/* <!-- /section --> */}
        <section className="wrapper !bg-[#ffffff]  angled upper-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0 after:content-[''] after:block after:absolute after:z-0 after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
          <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
            <Location />
            <div className="flex flex-wrap mx-[-15px] mt-[-50px] xl:mx-[-35px] lg:mx-[-20px] mb-24 items-center">
              {/* <!--/column --> */}

              {/* <!--/column --> */}
            </div>
            {/* <!--/.row --> */}
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
                  Envíanos un mensaje
                </h2>

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
                          form="form_name"
                          className="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope"
                        >
                          First Name *
                        </label>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback">
                          {" "}
                          Please enter your first name.{" "}
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
                          form="form_lastname"
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
                      <div className="form-select-wrapper mb-4">
                        <select
                          className="form-select"
                          id="form-select"
                          name="department"
                          required
                        >
                          <option selected disabled value="">
                            Select a department
                          </option>
                          <option value="Sales">Sales</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Customer Support">
                            Customer Support
                          </option>
                        </select>
                        <div className="valid-feedback"> Looks good! </div>
                        <div className="invalid-feedback">
                          {" "}
                          Please select a department.{" "}
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
                          style={{ height: "150px" }}
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
                      <Button title="Enviar"></Button>
                      <p className="text-[#aab0bc]">
                        <strong>*</strong> These fields are required.
                      </p>
                    </div>
                    {/* <!-- /column --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </form>
                {/* <!-- /form --> */}
              </div>
              {/* <!-- /column --> */}
            </div>
            {/* <!-- /.row --> */}
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
      <ScriptComponent />
    </>
  );
}
