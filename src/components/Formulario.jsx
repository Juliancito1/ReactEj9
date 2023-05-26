import { useEffect, useState } from 'react';
import { Card, Form , Button, Alert } from 'react-bootstrap';
import Cardcita from './Cardcita';
import { validaciones,  } from '../validacion.js';
const Formulario = () => {
    
    const [id, setIdActualizado] = useState(0)
    const [mascota, setMascota] = useState('')
    const [nombre, setNombre] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState('');
    const [mostrarError, setMostrarError] = useState(false);
    let pacientes = JSON.parse(localStorage.getItem('listadoPacientes')) || []
    const [listadoPacientes, setListadoPacientes] = useState(pacientes);

    useEffect(() => {
        localStorage.setItem('listadoPacientes',JSON.stringify(listadoPacientes))
    },[listadoPacientes])

    const handleSubmit = (e)  =>
    {
        e.preventDefault()
        let sumario = validaciones(mascota,nombre,fecha,hora,sintomas)
        if(sumario.length === 0)
        {
            const nuevoId = id + 1;
        setListadoPacientes([...listadoPacientes,{id: nuevoId, nombreMascota: mascota, nombreDuenio: nombre, fecha: fecha, hora: hora, sintomas: sintomas}])
        setMascota('')
        setNombre('')
        setFecha('')
        setHora('')
        setSintomas('')
        setIdActualizado(nuevoId);
        }
        else{
           setError(sumario)
           setMostrarError(true)
           setTimeout(() => {
            setError('');
            setMostrarError(false)
          }, 5000);
        }
    }

    const borrarCardPaciente = (pacienteId) => {
        let arregloFiltrado = listadoPacientes.filter((paciente) => paciente.id !== pacienteId);
        setListadoPacientes(arregloFiltrado);
      }



    return (
        <section className='container my-5'>
            <h1 className='display-4 text-center mb-4 bg-warning fw-bold'>Administrador de Pacientes de Veterinaria</h1>
            <Card className='border border-3 border-dark'>
                <Card.Header className='bg-warning'>
                    <h2>Completar el formulario para crear una cita</h2>
                </Card.Header>
                <Card.Body className='bg-info'>
                    <Form className='row' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 col-md-12" controlId="formNombreMascota">
                    <Form.Label>Nombre de la Mascota</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la mascota. Ej: Juan" onChange={(e) => setMascota(e.target.value)} value={mascota}/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-12" controlId="formNombredueño">
                    <Form.Label>Nombre del dueño</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre del Dueño. Ej: Pedro" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6" controlId="formFecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la fecha. Ej: dd/mm/aaaa" onChange={(e) => setFecha(e.target.value)} value={fecha}/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6" controlId="formHora">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la Hora. Ej: hh:mm" onChange={(e) => setHora(e.target.value)} value={hora}/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-12" controlId="formSintomas">
                    <Form.Label>Sintomas</Form.Label>
                    <Form.Control as="textarea" className='Area' rows={4} placeholder="Describa los sintomas" onChange={(e) => setSintomas(e.target.value)} value={sintomas}/>
                    </Form.Group>
                    <Button variant="success" className='col-md-1 ms-md-3' type="submit">
                    Enviar
                    </Button>
                    {mostrarError && <Card.Footer className='my-3 alert bg-danger'>{error.split('\n').map((line, index) => (
    <h6 key={index}>{line}</h6>
  ))}</Card.Footer>}
                    </Form>
                </Card.Body>
            </Card>
            <Cardcita listadoPacientes={listadoPacientes} borrarCardPaciente={borrarCardPaciente}></Cardcita>
        </section>
    );
};

export default Formulario;