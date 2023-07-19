import styled from 'styled-components';
import { ImpuestoFirst } from '../components/Impuestos/ImpuestosFirst';
import { ImpuestosSwiper } from '../components/Impuestos/ImpuestosSwiper';
import { ImpuestosPersonales } from '../components/Impuestos/ImpuestosPersonales';
export function Impuestos() {
return (
<Container>
<ImpuestoFirst/>
<ImpuestosSwiper/>
<ImpuestosPersonales/>
</Container>
);
 }
const Container = styled.div``;