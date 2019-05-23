import React from 'react';
import Image from "react-graceful-image";

import axios from 'axios';


export default class ProfileImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postImage: []
        }
    }

    componentDidMount() {
        // console.log('rain')
        axios({
            method: 'get',
            url: `https://insta.nextacademy.com/api/v1/images/me`,
            headers: {
                "authorization": `Bearer ${localStorage.getItem('JWT')}`,
                "content-type": 'application/json'
            }
        })
            .then((result) => {
                //console.log(result);
                this.setState({
                    postImage: result.data
                })

            })
            .catch(error => {
                console.log('Errors', error)
            })
    }

    render() {
        const { postImage } = this.state
        return (
            <>
                {/* <Image src={postImage} width='100' heigth='50' /> */}
                {
                    postImage.map(image =>
                        <Image
                            src={image}
                            width="200px"
                        />
                    )}
            </>
        )

    }


}

