
import { Route, Routes } from 'react-router-dom';
import GeneralLayout from '../components/GeneralLayout/GeneralLayout';
import Tires from '../components/Tires/Tires';

const RouterCardiotrack = () => {

    return (
        <Routes>
            <Route path='/' element={<GeneralLayout children={<Tires />} />} />
            <Route path='tires' element={<GeneralLayout children={<Tires />} />} />
        </Routes>
    )
}

export default RouterCardiotrack;