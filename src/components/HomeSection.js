import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const HomeSection = () => {
    const visitStore = (id) => {
        console.log(id);
    };

    const stores = [
        {
            id: "01",
            name: "Anantapur Store",
            area: "Anantapur",
        },
        {
            id: "02",
            name: "Anantapur Store",
            area: "Anantapur",
        },
        {
            id: "03",
            name: "Anantapur Store",
            area: "Anantapur",
        },
        {
            id: "04",
            name: "Anantapur Store",
            area: "Anantapur",
        },
        // Add more store objects as needed
    ];

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "10px",
            }}>
            <h2>Our Stores</h2>
            <ListGroup style={{ width: "40%" }} className='mt-3'>
                {stores.map((store) => (
                    <ListGroup.Item
                        key={store.id}
                        className='d-flex justify-content-between align-items-center '>
                        <div>
                            <h4>{store.name}</h4>
                            <p>Store ID: {store.id}</p>
                            <p>Area: {store.area}</p>
                        </div>
                        <Button
                            variant='primary'
                            onClick={() => visitStore(store.id)}>
                            Visit Store
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <p>Check out our offline stores for more details!</p>
        </div>
    );
};

export default HomeSection;
