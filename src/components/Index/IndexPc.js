import React from 'react';
import HeaderPc from '../Header/HeaderPc';
import FooterPc from '../Footer/FooterPc';
import NewsContainer from '../NewsContainer/NewsContainerPc';

class IndexPc extends React.Component {
    render() {
        return (
            <div>
                <HeaderPc/>
                <NewsContainer></NewsContainer>
                <FooterPc/>
            </div>
        )
    }
};



export default IndexPc;