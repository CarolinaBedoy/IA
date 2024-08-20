import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ArrowRightCircle, ArrowLeftCircle} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';

var score = "";
var scoreToEvaluate =""
export const Question  = ()  =>{
  const [radioValue, setRadioValue] = useState("1");
    
  const radios = [
    { name: 'Sí', value: '1' },
    { name: 'No', value: '0' },
  ];

 const disorderscount = ([
  {name: 'tca', array:'1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0'},
  {name: 'tdah', array:'1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1'},
  {name: 'ansiedad', array:'1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0'},
  {name: 'autismo', array:'1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1'},
  {name: 'bipolaridad', array:'1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1'},
  {name: 'soledad', array:'1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0'},
  {name: 'depresión', array:'1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0'},
  {name: 'toc', array:'1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0'},
  {name: 'depresivopersistente', array:'1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0'},
  {name: 'depresivopsicótico', array:'1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0'},
  {name: 'estréspostraumático', array:'1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0'},
  {name: 'trastornodelsueño', array:'0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0'}
 ])

const questions = [
'Edad:', 
'A menudo me siento nervioso',
'Constantemente siento pánico',
'Mi respiración se agita con frecuencia', 
'Mi cuerpo transpira a menudo',
'Tengo problemas de concentración',  
'Tengo problemas para dormir', 
'Tengo problemas para realizar actividades laborales', 
'Me desespero muy rápido', 
'Me enojo con facilidad',
'He observado o me han mencionado que en ocasiones reacciono de manera exagerada ante cualquier situación',
'Mi alimentación sufre cambios con frecuencia',
'Tengo pensamientos suicidas',
'Me siento cansado la mayoría del tiempo',
'Tengo pocos amigos', 
'Me considero adicto a las redes sociales',
'Con frecuencia aumento de peso',
'Soy una persona introvertida',
'Me siento estresada la mayor parte del tiempo',
'A menudo tengo pesadillas',
'En muchas ocasiones evado a personas o actividades',
'Tengo una postura negativa ante la vida',
'Me culpo a mí mismo con regularidad',
'Tengo o he tenido alucinaciones fuera de lo normal',
'Tengo comportamientos repetitivos',
'Mi energía aumenta repentinamente'
];


var [number, setNumber] = useState(0);
var [result, setResult] = useState("");


function next () { 
  setNumber((number => number+1)) 
    if(radioValue=='1'){
      score+=(',1').toString();
    }
    else if(radioValue=='0'){
      score+=(',0').toString();
      }
    
    }

function age () { 
      setNumber((number => number+1))
      score+=(document.getElementById('age').value).toString();
      console.log(score)
}


 const calculate = async () => {
  var result = "No se encontró trastorno alguno"
  for (let i=3; i<score.length; i++) {
    scoreToEvaluate+=(score[i].toString())
    }
  
  for (let i=0; i<disorderscount.length; i++) {
    if (scoreToEvaluate == disorderscount[i].array) {
     result=disorderscount[i].name
    }
  }
  alert(result)
  alert(score)
  }
  
 

  if(number==0){
    return[(
      <ProgressBar style={{backgroundColor:'#1C2331', width:'18rem', marginTop:'8%', marginLeft:'40%'}} now = {100/questions.length*(number+1)} label={`${number+1}/${questions.length}`} />),
      (<Card style={{textAlign:'center', borderColor:'blue', padding:'10px', width: '18rem', marginTop:'1%', marginLeft:'40%'}}>
        <Card.Body>
          <Card.Text>
            {questions[number]}
          </Card.Text>
          <div>
          <Form.Control
        type="number"
        id="age"
      />
        </div>
        <br></br>
          <Button onClick={age} variant="light"> <ArrowRightCircle variant='small'/>  </Button><br/><br/>
          <Button onClick={calculate}  variant="success" disabled={number!=questions.length}> Calcular resultado </Button>
        </Card.Body>
      </Card>)]
        }else{
    return[(
      <ProgressBar style={{backgroundColor:'#1C2331', width:'18rem', marginTop:'8%', marginLeft:'40%'}} now = {100/questions.length*(number+1)} label={`${number+1}/${questions.length}`} />),
      (<Card style={{textAlign:'center', borderColor:'blue', padding:'10px', width: '18rem', marginTop:'1%', marginLeft:'40%'}}>
        <Card.Body>
          <Card.Text>
            {questions[number]}
          </Card.Text>
          <div>
        <ButtonGroup >
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={'outline-secondary'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        </div>
        <br></br>
          <Button onClick={next} variant="light"><ArrowRightCircle variant='small'/> </Button> <br/><br/>
          <Button onClick={calculate}  variant="success" disabled={number!=questions.length}> Calcular resultado </Button>
        </Card.Body>
      </Card>)]
  }
}