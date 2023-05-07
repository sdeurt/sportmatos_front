import { Link, Outlet } from "react-router-dom";


export default function Footer() {
  return (

    <>

      <footer className=" text-center text-info text-truncate" >


        <Link to="contact" className="btn fs-5 fw-semibold text-info "> Contactez-nous </Link>

        <div className="p-2">
          <section className="mb-2">
            <a className="btn-icone btn-floating m-1">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a className="btn-icone btn-floating m-1" >
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a className="btn-icone btn-floating m-1">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </section>

          <section className="mb-4 text-info truncate ">
            <p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,aliquam sequi voluptate quas.

            </p>
          </section>

          <div className="text-center text-info p-3">
            © 2023 Copyright :
            <a className="text-info" href="https://Hex_ECo./"> Hex_Eco.com </a>
          </div>
        </div>
      </footer>
    </>
  );
};
