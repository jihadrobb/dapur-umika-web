import { IImage } from "interfaces/image";
import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import ClickAwayListener from "react-click-away-listener";

interface SliderProps {
  data: Slide[];
}

interface Slide {
  id: string;
  name: string;
  image: IImage;
}

function Slider({ data }: SliderProps) {
  const [indexActive, setIndexActive] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(true);

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
        <ClickAwayListener onClickAway={() => setShowModal(false)}>
          <img
            src={data[indexActive].image.imgUrl}
            className="max-w-[65%] h-[60%] border-black border-[1px] rounded-xl cursor-pointer"
            onClick={() => setShowModal((prev) => !prev)}
          />
        </ClickAwayListener>
        <FaChevronCircleRight
          onClick={onClickRight}
          className="fill-soft-brown mx-1 md:mx-3 cursor-pointer text-md md:text-6xl"
        />
      </div>
      <p className="text-center font-Mollenia text-xl md:text-3xl text-soft-brown font-bold mt-3">
        {data[indexActive].name}
      </p>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 opacity-25 h-screen w-screen flex flex-row items-center justify-center"
          >
            <img
              src={data[indexActive].image.imgUrl}
              className="w-[95%] md:w-auto md:h-[80%] rounded-xl cursor-pointer"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Slider;
