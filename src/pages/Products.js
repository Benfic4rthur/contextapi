import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
const Products = () => {
    const { counter } = useCounterContext();
    return <div>
        <h1>Products</h1>
        <p>Valor do contador: {counter}</p>
        {/* Alterando contexto */}
        <ChangeCounter/>
    </div>;
};

export default Products;
