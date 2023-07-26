import styled from 'styled-components';
export function ConsultoriaExplained() {
return (
    <Back><Container className='container'>
    <Title>Nuestros Servicios <hr /></Title>
    <ConstContainer>
    
        <Card style={{backgroundColor:"#33004B"}}>
            <Subtitle  >Due Diligence <hr /></Subtitle>
       <Text>Llevamos a cabo procesos de revisión detallados acordados con nuestros clientes para reducir los riesgos de la compra y venta. También asesoramos sobre riesgos específicos para el mercado ecuatoriano.</Text>
        </Card>
        <Card style={{backgroundColor:"#f5982d"}}>
            <Subtitle style={{color:"black"}}>Avalúos <hr /></Subtitle>
       <Text style={{color:"black"}}>Realizamos valoraciones de las empresas utilizando métodos adecuados a la situación, el negocio y la posición de su empresa en el mercado.</Text>
        </Card>
        <Card style={{backgroundColor:"#007e90"}}>
            <Subtitle>Procedimientos acordados <hr /></Subtitle>
       <Text>Con base en sus requisitos y resultados deseados, preparamos programas y procedimientos de trabajo a medida. Esto puede incluir revisiones forenses, investigaciones de fraude, revisiones analíticas, entre otros.</Text>
        </Card>
         <Card style={{backgroundColor:"#a50057"}}>
            <Subtitle>Controles <hr /></Subtitle>
       <Text>Revisamos el entorno de control, analizándolo contra los estándares de la industria y los riesgos asociados específicos. Las recomendaciones y observaciones son clave para mejorar los controles y mitigar los riesgos correspondientes.</Text>
        </Card>
    </ConstContainer>
    </Container></Back>

);
 }
 const Back =styled.div`
 background-color: #232323;
 `;
const Container = styled.div`
padding: 5rem 0 5rem 0;

`;
const Title=styled.h1`
font-weight: 700;
text-align: center;
margin:10rem 0 10rem 0;
color: white;
@media (max-width: 560px) {
font-size: 2rem;
margin: 0rem 0 5rem 0;
  }
`;
const ConstContainer=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
@media (max-width: 560px) {
   display: flex;
   flex-direction: column;
   gap: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  }
gap: 10rem;
`;
const Card=styled.div`

border-radius: 10px;
padding: 5rem;
box-shadow: 6px 6px 22px #0d0b0b, -6px -6px 22px #232323;
  &:hover {
    transform: scale(1.2);
    z-index: 1000;
    box-shadow: none;
    transition: all 0.2s ease;
  }
  transform: scale(1);
  transition: all 0.2s ease;
  @media (max-width: 560px) {
    box-shadow: none;
    transform: none;
  transition: none;
   padding : 5rem 2rem 5rem 2rem;
   &:hover {
     transform: scale(1);
     z-index: 1000;
     box-shadow: none;
     transition: none;
   }
 
   }
 
`;
const Subtitle=styled.h2`
color: white;
font-weight: 600;
`;
const Text=styled.p`
color: #ffffff;
`;