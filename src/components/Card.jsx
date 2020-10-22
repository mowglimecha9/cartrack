import React from 'react';
import './Card.css'


class Card extends React.Component {
    constructor(props){
        super(props);
    }
  render() {

    return (
        <div className='card-container'>
            <div className='title-card'>
                <img src='https://picsum.photos/100/100?grayscale'/>
                <h4 className='name'>{this.props.person.name}</h4>
                <p>{this.props.person.phone} </p>
                <p>@{this.props.person.username} / {this.props.person.email} /{this.props.person.website}  </p>
            </div>

            <div className='additional-info'>
                <ul className='sm'>
                    <li><i className="gg-facebook ai"></i></li>
                    <li><i className="gg-twitter ai"></i></li>
                    <li><i className="gg-google ai"></i></li>
                    <li><i className="gg-patreon ai"></i></li>
                </ul>
              <span className='ad'><i className="gg-pin ai"></i> {this.props.person.address.street} {this.props.person.address.suite} {this.props.person.address.city}</span>
               <span className='ad'> {this.props.person.company.name}</span>
            </div>
        </div>

        )
  }
}

export default Card