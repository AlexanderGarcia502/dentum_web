import { Information } from "@/interfaces/enums/information";

export const Contacts = () => {
  return (
    <>
      <div className="container pt-10 pb-20 lg:!py-28 xl:!py-40 xxl:!py-60 !relative">
        <img
          className="xl:!absolute lg:!absolute max-lg:!static w-full flex-[0_0_auto] max-w-full  xl:-translate-y-2/4 lg:-translate-y-2/4  !mb-3 md:!mb-10 lg:!mb-0 xl:!mb-0"
          src="../../assets/img/dentum/instagram.png"
          srcSet="../../assets/img/dentum/instagram.png 2x"
          alt="image"
          style={{
            top: "50%",
            left: "-13%",
            width: 900,
            zIndex: -1,
          }}
        />
        <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center">
          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-6/12 lg:!ml-[50%] xl:w-6/12 xl:!ml-[50%] flex-[0_0_auto]  xl:!px-[35px] lg:!px-[20px] md:!px-[20px] !px-[15px] w-full max-w-full xl:!mt-[-2.25rem] lg:!mt-[-2.25rem] md:!mt-[-2.25rem] text-center xl:text-left lg:text-left">
            <h1 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-4 md:!px-10 lg:!px-0">
              Todas las especialidades dentales en un solo lugar ¡Escríbenos!
            </h1>
            <p className="lead text-[1.05rem] !leading-[1.6] !mb-7 md:!px-10 lg:!px-0 xl:!px-0 xxl:!pr-20">
              En <strong>Dentum</strong>, ofrecemos atención odontológica
              especializada con tecnología de vanguardia. Agenda tu cita hoy y
              recibe el mejor cuidado para tu salud bucal.
            </p>
            <div className="flex justify-center xl:!justify-start lg:!justify-start">
              <span>
                <a
                  href={Information.WHATSSAP_CH}
                  className="btn btn-green !text-white !bg-[#45c4a0] border-[#45c4a0] hover:text-white hover:bg-[#45c4a0] hover:!border-[#45c4a0]   active:text-white active:bg-[#45c4a0] active:border-[#45c4a0] disabled:text-white disabled:bg-[#45c4a0] disabled:border-[#45c4a0]  btn-icon btn-icon-start rounded"
                >
                  <div className="mr-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      />
                    </svg>
                  </div>
                  Whatssap
                </a>
              </span>
            </div>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
    </>
  );
};
