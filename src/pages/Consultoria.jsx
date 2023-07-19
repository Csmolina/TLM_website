import styled from 'styled-components';
import { ConsultoriaFirst } from '../components/Consultoria/ConsultoriaFirst';
import { ConsultoriaExplained } from '../components/Consultoria/ConsultoriaExplained';
export function Consultoria() {
return (
<Container>
<ConsultoriaFirst/>
<ConsultoriaExplained/>
</Container>
);
 }
const Container = styled.div``;