import ChangeCounter from '../components/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';
const About = () => {
    const { counter } = useCounterContext();
    return (
        <div>
            <h1>About</h1>
            <p>Valor do contador: {counter}</p>
            {/* Alterando contexto */}
            <ChangeCounter />
        </div>
    );
};

export default About;
