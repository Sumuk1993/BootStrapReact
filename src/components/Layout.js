import { Component } from "react";
import { Outlet } from "react-router";
import { Row, Col } from "react-bootstrap";
import Header from "./Header";
import Aside from "./Aside";


export default class Layout extends Component {
    //props var

    //constructor

    //method
    render() {
        //every function return something
        return (
            <>
                <Header />
                <main>
                    <Row className="h-100 tbdr">
                        <Col sm={4} className="h-100 tbdr">
                            <Aside />
                        </Col>
                        <Col sm={8} className="h-100 tbdr">
                            <Outlet />
                        </Col>
                    </Row>
                </main>
                <footer>Footer Page</footer>
            </>
        )

    }

}