import "../../../public/assets/fonts/unicons/unicons.css";
import "../../../public/assets/css/plugins.css";
import "../../../public/assets/css/style.css";
import "../../../public/assets/css/colors/navy.css";
import Foother from "@/components/foother/Foother";
import { ScriptComponent } from "@/utils/Scripts";
import { Header } from "@/components/header";
import { testimonies } from "@/utils/testimonies";
import { TestimonyCard } from "@/components/card/Testimony";

export default function About() {
  return (
    <>
      <div className="grow shrink-0">
        <Header />
        {/* <!-- /header --> */}
        <section
          className="wrapper image-wrapper bg-image text-white bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed pb-14 min-h-screen"
          data-image-src="/assets/img/dentum/testimonials_cover.png"
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
                Sonrisas felices, pacientes satisfechos
              </h1>
            </div>
          </div>
        </section>

        {/* <!-- /section --> */}
        <section
          id="snippet-18"
          className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
        >
          <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-[12.5rem] xl:pb-[17.5rem] lg:pb-[17.5rem] md:pb-[17.5rem]">
            <section className="section-frame xxl:!mx-12">
              <div
                className="wrapper image-wrapper bg-image bg-cover bg-overlay bg-overlay-light-500 section-frame-wrapper bg-[center_center] bg-no-repeat bg-scroll relative z-0 before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(255,255,255,.5)]"
                data-image-src="../../assets/img/photos/bg23.png"
              >
                <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="md:w-10/12 lg:w-9/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                      <h3 className="text-[calc(1.345rem_+_1.14vw)] font-semibold !leading-[1.25] xl:text-[2.2rem] mb-10 xxl:!px-10">
                        Nuestros pacientes hablan por nosotros. Descubre sus
                        opiniones.
                      </h3>
                    </div>
                    {/* <!-- /column --> */}
                  </div>
                  {/* <!-- /.row --> */}
                  <div className="flex flex-wrap mx-[-15px]">
                    <div className="itemgrid xl:w-11/12 lg:w-11/12 md:w-11/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto xl:!mb-[-17.5rem] lg:!mb-[-17.5rem]">
                      <div className="flex flex-wrap mx-[-15px] isotope mt-[-30px]">
                        {testimonies.map(({ content, name }, index) => (
                          <div
                            className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"
                            key={`testimony-${index}`}
                          >
                            <TestimonyCard content={content} name={name} />
                            {/* <!-- /.card --> */}
                          </div>
                        ))}
                      </div>
                      {/* <!-- /.row --> */}
                    </div>
                    {/* <!-- /.grid-view --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.container --> */}
              </div>
              {/* <!-- /.wrapper --> */}
            </section>
            {/* <!-- /section --> */}
          </div>
          {/* <!-- /.container --> */}
        </section>
        {/* <!-- /section --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <Foother />
      {/* <!-- /section --> */}
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
