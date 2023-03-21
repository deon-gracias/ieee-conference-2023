import { IconExternalLink } from "@tabler/icons-react";

export default function RegisterButton({ className = "" }) {
  return (
    <button className={`btn-register ${className}`}>
      Register Now
      <IconExternalLink />
    </button>
  );
}
