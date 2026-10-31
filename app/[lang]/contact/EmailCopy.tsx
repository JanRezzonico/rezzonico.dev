"use client";

import { showToast, Toast } from "@/components/Toast";
import { Dictionary } from "@/libs/i18n/dictionaries";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export const EmailCopy = ({ dict }: { dict: Dictionary }) => {
  const emailRef = useRef<HTMLSpanElement>(null);
  const [copied, setCopied] = useState(false);
  const emailAddress = "jan@rezzonico.dev";

  const selectText = () => {
    if (emailRef.current) {
      const range = document.createRange();
      range.selectNodeContents(emailRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }
  };

  const clear = () => {
    window.getSelection()?.removeAllRanges();
    setTimeout(() => {
      setCopied(false);
    }, 200); //Avoid graphical glitch of text changing before tooltip disappears
  };

  const copy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    showToast(toastRef, {
      mode: "info",
      title: dict.contact.email.copied,
      text: dict.contact.email.thanks,
      emoji: "👋",
      duration: 5000,
    });
  };

  const onHover = () => {
    selectText();
  };

  const onHoverExit = () => {
    clear();
  };

  const toastRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Toast ref={toastRef} />
      <div className="tooltip tooltip-primary mt-8">
        <div className="tooltip-content text-primary-content">
          <div className="flex justify-center items-center p-2">
            <FontAwesomeIcon
              icon={copied ? faCheck : faCopy}
              className="w-4 mr-2"
            />
            {copied ? dict.contact.email.copied : dict.contact.email.copy}
          </div>
        </div>
        <span
          ref={emailRef}
          className="text-4xl underline select-text text-primary"
          onMouseEnter={onHover}
          onMouseLeave={onHoverExit}
          onClick={copy}
        >
          {emailAddress}
        </span>
      </div>
    </>
  );
};
