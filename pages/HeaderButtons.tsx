import { SiInstagram, SiGooglemaps } from "react-icons/si";

export default function HeaderButtons() {
  return (
    <>
      <a className="styledAnchor" target="_blank" href='https://www.instagram.com/kushy_products/'>
        <SiInstagram />
      </a>
      <a className="styledAnchor" target="_blank" href="https://www.google.com/maps/place/Birkenhead+Market/@53.3903961,-3.0235807,15z/data=!4m2!3m1!1s0x0:0x5036668d90df0411?sa=X&ved=2ahUKEwiOhOz638z0AhWJa8AKHbIqDO4Q_BJ6BAhhEAU">
        <SiGooglemaps />
      </a>
    </>
  );
}
