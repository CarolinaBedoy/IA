import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';


function go(){
  window.location.href='/'
}

const disorders = [
    'La depresión es un trastorno emocional que causa un sentimiento de tristeza constante y una pérdida de interés en realizar diferentes actividades. También denominada «trastorno depresivo mayor» o «depresión clínica», afecta los sentimientos, los pensamientos y el comportamiento de una persona, y puede causar una variedad de problemas físicos y emocionales. Es posible que tengas dificultades para realizar las actividades cotidianas y que, a veces, sientas que no vale la pena vivir.',
    'El trastorno del espectro autista es una afección relacionada con el desarrollo del cerebro que afecta la manera en la que una persona percibe y socializa con otras personas, lo que causa problemas en la interacción social y la comunicación. El trastorno también comprende patrones de conducta restringidos y repetitivos. El término «espectro» en el trastorno del espectro autista se refiere a un amplio abanico de síntomas y gravedad.',
    'La soledad es un estado emocional en el que la persona experimenta una fuerte sensación de vacío y aislamiento.La soledad no consiste necesariamente en estar solo. Es más bien la percepción de estar solo y aislado.',
    'El trastorno bipolar es una enfermedad mental caracterizada por episodios de manía (euforia y energía elevadas) y depresión (tristeza y desesperanza) que afecta el estado de ánimo, el pensamiento y el comportamiento.',
    'La ansiedad es un mecanismo de defensa natural del organismo frente a estímulos externos o internos que son percibidos por el individuo como amenazantes o peligrosos,1​ y se acompaña de un sentimiento desagradable o de síntomas somáticos de tensión. Se trata de una señal de alerta que advierte sobre un peligro inminente y permite a la persona que adopte las medidas necesarias para enfrentarse a una amenaza.',
    'El trastorno de estrés postraumático es una enfermedad de salud mental desencadenada por una situación aterradora, ya sea que la hayas experimentado o presenciado. Los síntomas pueden incluir reviviscencias, pesadillas y angustia grave, así como pensamientos incontrolables sobre la situación.',
    'Los trastornos del sueño son afecciones que provocan cambios en la forma de dormir. Algunos de los signos y síntomas de los trastornos del sueño incluyen somnolencia diurna excesiva, respiración irregular o aumento del movimiento durante el sueño. Otros signos y síntomas incluyen un sueño irregular y un ciclo de vigilia y dificultad para conciliar el sueño.',
    'La depresión psicótica es un subtipo de depresión que ocurre cuando una depresión severa incluye dentro de su cuadro de síntomas alguna forma de psicosis (es decir, alteraciones mentales que generan una percepción o interpretación muy distorsionada de la realidad).',
    'Los trastornos alimentarios son enfermedades graves que afectan tanto la salud física como la mental. Estas afecciones incluyen problemas en la forma de pensar sobre la comida, la alimentación, el peso y la figura, así como en los comportamientos alimentarios.',
    'El trastorno por déficit de atención/hiperactividad (TDAH) se considera una enfermedad del neurodesarrollo. Por lo general implican dificultades con la adquisición, conservación o aplicación de habilidades o conjuntos de información específicos. Los trastornos del desarrollo neurológico pueden implicar disfunción en una o más de las siguientes áreas: la atención, la memoria, la percepción, el lenguaje, la resolución de problemas o la interacción social.',
    'El trastorno depresivo persistente es un tipo de depresión crónica continua. Es posible que te sientas triste y vacío, que pierdas interés en las actividades de la vida diaria y seas improductivo. Puede que tengas baja autoestima, te sientas un fracasado y que no tengas esperanzas. Estos sentimientos duran años y pueden interferir con tus relaciones, la escuela, el trabajo y las actividades de la vida diaria.',
    'El trastorno obsesivo compulsivo (TOC) se caracteriza por un patrón de pensamientos y miedos no deseados (obsesiones) que provocan comportamientos repetitivos (compulsiones). Estas obsesiones y compulsiones interfieren en las actividades diarias y causan un gran sufrimiento emocional. Finalmente, sientes la necesidad de realizar actos compulsivos para tratar de aliviar el estrés.',
]

function NavTabsExample() {
    var [number, setNumber] = useState(0);

  return (
    <>
    <Card style={{marginLeft:'170px', marginTop:'50px', width:'950px'}}>
      <Card.Header >
        <Nav variant="tabs">
          <Nav.Item  onClick={() => setNumber(0)}>
            <Nav.Link style={{color:'darkblue'}} >TRASTORNO DEPRESIVO MAYOR</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(1)}>
            <Nav.Link >TRASTORNO DEL ESPECTRO AUTISTA</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(2)}>
            <Nav.Link style={{color:'darkblue'}} >SOLEDAD CRÓNICA</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(3)}>
            <Nav.Link >BIPOLARIDAD</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(4)}>
            <Nav.Link >ANSIEDAD</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(5)}>
            <Nav.Link style={{color:'darkblue'}} >TRASTORNO POR ESTRÉS POSTRAUMÁTICO</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(6)}>
            <Nav.Link >TRASTORNO DEL SUEÑO</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(7)}>
            <Nav.Link style={{color:'darkblue'}} >DEPRESIÓN PSICÓTICA</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(8)}>
            <Nav.Link style={{color:'darkblue'}} >DESORDEN ALIMENTICIO</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(9)}>
            <Nav.Link  >TDAH</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(10)}>
            <Nav.Link style={{color:'darkblue'}}>TRASTORNO DEPRESIVO PERSISTENTE</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setNumber(11)}>
            <Nav.Link >TRASTORNO OBSESIVO COMPULSIVO</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      </Card><br></br>
      <Card style={{width:'550px', marginLeft:'360px', height:'250px'}}>
      <Card.Body>
        <Card.Text style={{textAlign:'justify'}}>
         {disorders[number]}
        </Card.Text>
      </Card.Body>
    </Card>
    <Button onClick={() => go()} style={{marginTop:'20px', marginLeft:'560px'}} variant="primary">REALIZAR TEST</Button>
     </>);
}

export default NavTabsExample;