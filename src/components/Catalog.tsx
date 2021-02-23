import { useSelector } from "react-redux"

const components: React.FC = () => {

    const catalog = useSelector(state => state);

    return (
        <div>
            <h1>Redux</h1>
        </div>
    )
}

export default components;