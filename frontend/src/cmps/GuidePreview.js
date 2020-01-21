import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import quoryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';


const cardStyle = {
    marginTop: 0,
    // height: "100%",

    maxWidth :'100%'

}
const cursor = {
    cursor: "pointer"

}
// .eq-card.ui.card {

const imgStyle = {
    cursor: "pointer",
    height: '200px',
    objectFit: 'cover'

    // backgroundSize: "cover"

}

class GuidePreviewCard extends Component {

    onLink = () => {
        const { props } = this

        this.props.history.push(`/guides/?guide_id=${props.guide._id}`)

    }



    render() {
        const { props } = this
        return (

            < Card style={cardStyle} >
                <Image  onClick={this.onLink} style={imgStyle}  src={props.guide.imgUrl}  />
                <Card.Content onClick={this.onLink} style={cursor} >
                    <Card.Header >{props.guide.name}</Card.Header>
                    <Card.Meta>
                        <span>{props.guide.city}</span>
                    </Card.Meta>
                    <Card.Description >
                        {props.guide.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content  extra>
                    <a>
                        <Icon name='star' />

                        22 Like
                        </a>
                </Card.Content>
            </Card >

        )
    }



}

export default withRouter(GuidePreviewCard);




