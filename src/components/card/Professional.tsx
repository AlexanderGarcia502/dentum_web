import { IProfessionalCard } from "./interface";

export const ProfessionalCard = ({
  name,
  description,
  img,
}: IProfessionalCard) => {
  return (
    <div className="card">
      <div className="card-body p-[40px]">
        <img
          className="rounded-[50%] !w-[5rem] mb-4"
          src={img}
          srcSet={`${img} 2x`}
          alt="image"
        />
        <h4 className="mb-1">{name}</h4>
        <p className="!mb-2">{description}</p>
        <nav className="nav social !mb-0">
          <a
            className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
            href="#"
          >
            <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] text-[#5daed5]"></i>
          </a>
          <a
            className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
            href="#"
          >
            <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] text-[#4470cf]"></i>
          </a>
          <a
            className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
            href="#"
          >
            <i className="uil uil-dribbble before:content-['\eaa2'] text-[1rem] text-[#e94d88]"></i>
          </a>
        </nav>
        {/* <!-- /.social --> */}
      </div>
      {/* <!--/.card-body --> */}
    </div>
  );
};
