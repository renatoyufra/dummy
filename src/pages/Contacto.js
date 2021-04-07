import React, { useState } from 'react';

import axios from 'axios';



import '../styles/pages/Contacto.css';

const ContactoPage = (props) => {

    const initialForm ={
        nombre: '',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, SetMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const {name,value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]:value //forma dinamica
        }));
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        SetMsg('');
        setSending(true)
        const response = await axios.post('/api/contacto', formData);
        setSending(false);
        SetMsg(response.data.message);
        if(response.data.error ===false){
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="columna left">
                <h2>Complete el siguiente formulario</h2>
                <form action="/contacto" method="post" className="contacto" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}  />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}  />
                    </p>
                    <p>
                        <label >Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}  />
                    </p>
                    <p>
                        <label >Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                    </p>
                    {sending ? <p>Enviando...</p>:null}
                    {msg ? <p>{msg}</p>:null}
                    <p className="centrar"><input type="submit" value="Enviar" /></p>

                </form>
            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios:</p>
                <ul>
                    <li>Teléfono:123456789</li>
                    <li>Email: </li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Skype</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
    )
}


export default ContactoPage;