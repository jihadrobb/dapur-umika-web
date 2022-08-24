import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

interface SliderProps {
  data: Slide[];
}

interface Slide {
  id: string;
  name: string;
  imgUrl: string;
}

function Slider({ data }: SliderProps) {
  const [indexActive, setIndexActive] = useState(0);

  const onClickLeft = () => {
    if (indexActive === 0) {
      setIndexActive(data.length - 1);
    } else {
      setIndexActive((prev) => prev - 1);
    }
  };

  const onClickRight = () => {
    if (indexActive === data.length - 1) {
      setIndexActive(0);
    } else {
      setIndexActive((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center mt-2">
        <FaChevronCircleLeft
          onClick={onClickLeft}
          className="fill-soft-brown mx-1 md:mx-3 cursor-pointer text-md md:text-6xl"
        />
        <img
          src={data[indexActive].imgUrl}
          className="max-w-[75%] h-[60%] border-black border-[1px] rounded-xl"
        />
        <FaChevronCircleRight
          onClick={onClickRight}
          className="fill-soft-brown mx-1 md:mx-3 cursor-pointer text-md md:text-6xl"
        />
      </div>
      <p className="text-center font-Mollenia text-xl md:text-3xl text-soft-brown font-bold mt-3">
        {data[indexActive].name}
      </p>
    </>
  );
}

export default Slider;
