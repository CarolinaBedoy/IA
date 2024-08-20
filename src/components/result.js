import Card from 'react-bootstrap/Card';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const resultados = ['baja', 'media', 'alta'] 
const analisis = [
'Puntuar BAJO en este test es una buena señal, significa que no presentas ningún signo de psicopatía y, por tanto, tienes buenas habilidades sociales y personales. Sigue desarrollando tus características personales para fortalecer tu bienestar y el bienestar de los demás.',
'Una puntuación MEDIA indica que no tienes ningún tipo de conducta problemática, sin embargo, existen algunas características que puedes mejorar para evitar desarrollar rasgos de sociopatía. Una puntuación intermedia puede mejorar si trabajas tu inteligencia emocional, el control de impulsos y la gestión de emociones. Es importante comentar que estos rasgos no solamente se comparten con la sociopatía, es posible que hayas puntuado de este modo por muchas razones distintas.',
'Si has obtenido una puntuación ALTA, tal vez presentes criterios para ser diagnosticado de sociopatía: poca capacidad empática, dificultades para comportarse en sociedad, tendencias crueles… Si crees que cumples con lo mencionado, es importante que recibas ayuda psicológica para evitar causarte daño a ti y a los que te rodean.'
]

export const Result = () => {
  return (
    <Card className="text-center" style={{width:'800px', margin:'100px', marginLeft:'400px' }}>
      <Card.Header>Resultados</Card.Header>
      <Card.Body>
        <Card.Title> Puntuación {resultados[id]}</Card.Title>
        <Card.Text>
          {analisis[id]}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"> Los resultados obtenidos en estos tests son orientativos, puesto que el 
      diagnóstico debe ser realizado siempre por un psicólogo profesional. </Card.Footer>
    </Card>
  );
}
