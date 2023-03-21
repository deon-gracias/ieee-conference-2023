import React from "react";
import { IconExternalLink } from "@tabler/icons-react";

export default function RegisterButton({
  className = "",
  dataAos = "fade-up",
}) {
  return (
    <div data-aos="fade-up">
      <button className={`btn-register ${className}`}>
        Register Now
        <IconExternalLink />
      </button>
    </div>
  );
}
