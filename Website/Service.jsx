import React from 'react';
import Sdata from './Sdata';
import Card from './Card';
const Service = () => {
    const styleService = {
        fontSize: "40px",
        textShadow: "3px 1px 2px rgba(0,0,0,0.8)"
    }
    return (
        <>
            <div className="my-5">
                <h1 className='text-center' style={styleService}>
                    Our Services
                </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, index) => {
                                    return <Card
                                        key={index}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;
