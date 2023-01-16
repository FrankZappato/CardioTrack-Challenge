import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllTires } from '../../store/tires/reducer';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function GeneralLayout({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTires());
    }, [dispatch]);

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default GeneralLayout