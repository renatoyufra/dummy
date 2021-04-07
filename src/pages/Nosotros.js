import React from 'react';

import '../styles/pages/Nosotros.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam maxime veniam optio inventore maiores
                temporibus, perspiciatis atque aperiam adipisci sequi, molestiae debitis earum a suscipit non commodi
                aut repudiandae asperiores.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptates velit assumenda suscipit
                pariatur veritatis impedit deleniti culpa sit. Atque aspernatur voluptates nostrum sapiente iusto nam
                veritatis ipsam maxime? Vel!</p>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="images/nosotros/nosotros1.jpg" width="75" alt="" />
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem odio impedit provident tempora,
                    labore quam architecto. Eius similique minima facilis quam, veniam dolore repudiandae, iure
                    praesentium nihil eum vel.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros2.jpg" width="75" alt="" />
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem odio impedit provident tempora,
                    labore quam
                    architecto. Eius similique minima facilis quam, veniam dolore repudiandae, iure praesentium nihil
                    eum vel.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros3.jpg" width="75" alt="" />
                    <h5>Roberto Zavala</h5>
                    <h6>Gerente Marketing</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem odio impedit provident tempora,
                    labore quam
                    architecto. Eius similique minima facilis quam, veniam dolore repudiandae, iure praesentium nihil
                    eum vel.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros4.jpg" width="75" alt="" />
                    <h5>Sandra Mastero</h5>
                    <h6>Gerente Sistemas</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem odio impedit provident tempora,
                    labore quam
                    architecto. Eius similique minima facilis quam, veniam dolore repudiandae, iure praesentium nihil
                    eum vel.</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros5.jpg" width="75" alt="" />
                    <h5>Luciano Figuero</h5>
                    <h6>Gerente Logisticas</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem odio impedit provident tempora,
                    labore quam
                    architecto. Eius similique minima facilis quam, veniam dolore repudiandae, iure praesentium nihil
                    eum vel.</p>
                </div>
            </div>
        </main>

    )
}


export default NosotrosPage;