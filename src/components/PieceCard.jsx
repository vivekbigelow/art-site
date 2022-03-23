import React from 'react';

const PieceCard = ({ number, title, medium, image, year }) => {
  return (
    <>
      <div className='container'>
        <h1>{number}. {title} - {medium}</h1>
        <img className='image' src={image} />
        <div className='footer'>
          <p className='year'>{year}</p>
          <a className='link' href='google.com'>View</a>
        </div>
      </div>

      <style jsx="true">{`
        .container {
          border : 2px black solid;
          padding: 10px 40px
        }

        h1{
          font-size: 50px;
        }

        .image{
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-top: 50px;
          margin-bottom: 50px;
          width: 50%;
          width: 200px;
          height:200px;
        }

        .footer{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .year,.link{
          font-size: 25px;         
        }

      `}</style>
    </>
  )
};

export default PieceCard;
