"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

type Props = {
  image: StaticImageData;
  alt: string;
  className?: string;
};

export const ModalLightbox = ({ image, alt, className }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="w-full cursor-zoom-in"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Open ${alt} image`}
      >
        <Image src={image} alt={alt} className={className} />
      </button>
      <dialog
        ref={dialogRef}
        className="modal transition-none bg-base-300/80 backdrop-blur-sm"
      >
        <div className="modal-box flex w-11/12 max-w-5xl flex-col gap-2 border border-base-content/10 bg-base-300/90 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
          <form method="dialog" className="flex justify-end">
            <button
              type="submit"
              className="btn btn-circle btn-ghost btn-sm bg-base-300/80 shadow-sm backdrop-blur-sm"
              aria-label="Close image modal"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </form>
          <Image
            src={image}
            alt={alt}
            className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="submit">close</button>
        </form>
      </dialog>
    </>
  );
};
