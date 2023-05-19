import ChangeCounter from '../components/ChangeCounter';
//import { CounterContext } from "../context/CounterContext";
//import { useContext } from "react";
import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
    //const {counter} = useContext(CounterContext);
    const { counter } = useCounterContext();
    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {counter}</p>
            {/* Alterando contexto */}
            <ChangeCounter />
        </div>
    );
};

export default Home;
