import Image from "next/image";
import IEEELogo from "@/assets/images/ieee-white.png";

export default function PoweredBy() {
  return (
    <section className="powered-by" id="powered-by">
      <h1 className="powered-by__title"> Powered By</h1>
      <Image src={IEEELogo} alt="IEEE" className="powered-by__logo" />
    </section>
  );
}
