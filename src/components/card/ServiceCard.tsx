import { IServiceCard } from "./interface";

export const ServiceCard = ({ title, img, list }: IServiceCard) => {
  return (
    <div className="card lift">
      <figure className="card-img-top ">
        <img
          className=" max-w-full h-auto"
          src={img}
          srcSet={`${img} 2x`}
          alt="image"
        />
      </figure>
      <div className="card-body px-6 py-5">
        <h3 className="!mb-1 text-[.85rem]">
          <strong>{title}</strong>
        </h3>
        <p className="!mb-0 text-[.85rem]">
          {list.map((text) => (
            <>
              • {text}
              <br />
            </>
          ))}
        </p>
      </div>
      {/* <!--/.card-body --> */}
    </div>
  );
};
