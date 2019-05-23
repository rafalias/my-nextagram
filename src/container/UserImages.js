import React from 'react';
import axios from 'axios';

import Image from "react-graceful-image";

//handle routes and props
export default class UserImages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.user_id}`) //this.props.match.params.id  //this.props.user_id
            .then((result) => {
                //handle success
                //console.log('user image ' + result.data);
                this.setState({
                    images: result.data
                })
            })
    }

    render() {
        const { images } = this.state
        return (
            <>
                {
                    images.map(image =>
                        <Image
                            src={image}
                            width="200px"
                            style={randomImg}
                        />
                    )}
            </>
        )
    }
}

const randomImg = {
    height: 200,
    margin: 5
}

