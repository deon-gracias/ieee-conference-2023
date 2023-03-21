import React from "react";
import { IconExternalLink } from "@tabler/icons-react";

export default function RegisterButton({
  className = "",
  dataAos = "fade-up",
}) {
  return (
    <React.Fragment data-aos="fade-up">
      <button className={`btn-register ${className}`}>
        Register Now
        <IconExternalLink />
      </button>
    </React.Fragment>
  );
}
