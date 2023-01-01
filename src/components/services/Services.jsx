import React, { useState } from 'react';
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-grid services__icon"></i>
            <h3 className="services__title">HTML <br /> CSS</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>View More
              <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i  onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
            
            <h3 className="services__modal-title">HTML / CSS</h3>
            <p className="services__modal-description">
            Service with me . I provide quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Advanced CSS animations with @keyframes, animation, and transition.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Advanced CSS selectors, pseudo-classes, and pseudo-elements required for modern CSS development.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Using Sass : setting global variables, building for reusability, architecting CSS, and managing media queries.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Flexbox layouts: flex container and flex item-specific properties, advanced positioning techniques .</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">CSS Grid layouts: main concepts, CSS grid vs flexbox, and layout techniques. </p>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title"> JavaScript</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>View More 
              <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
            
            <h3 className="services__modal-title"> JavaScript</h3>
            <p className="services__modal-description">
            Service with me . I provide quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Master the JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, and more.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Modern JavaScript (ES6+) from the beginning: arrow functions, destructuring, spread operator, default arguments, optional chaining, and more.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">prototypal inheritance, constructor functions (ES5), classes (ES6), encapsulation, abstraction, inheritance, and polymorphism.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Asynchronous JavaScript: the event loop, promises, async/await, and error handling .</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> NPM, Parcel (module bundler), Babel, and ES6 modules. </p>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title"> REACT-JS & REDUX</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>View More 
              <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
            
            <h3 className="services__modal-title">REACT-JS & REDUX </h3>
            <p className="services__modal-description">
            Service with me . I provide quality work to clients and companies.
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Working with user events and state to create interactive applications.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Working with built-in Hooks and building custom Hooks.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Styling React apps with "Styled Components" and "CSS Modules".</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Routing with React Router .</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">Class-based components and functional components. </p>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services