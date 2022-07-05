// import React, { Component } from 'react'
// import { actFetchProductsRequest, AddCart } from '../actions'
// import { connect } from 'react-redux';
// export class Product extends Component {
//   constructor(props) {
//     super(props)

//   }

//   componentDidMount() {
//     this.props.actFetchProductsRequest();
//   }

//   render() {
//     const { _products } = this.props._products;
//     if (_products.length > 0) {

//       return (
//         <div className="row" style={{ marginTop: '10px' }}>
//           <div className="col-md-12">
//             <div className="row">
//               {
//                 _products.map((item, index) => (
//                   <div key={index} className="col-md-2" style={{ marginBottom: '10px' }}>
//                     <img src={item.image} className="img-resposive" style={{ width: '100%', height: '100px' }} />
//                     <h5>{item.name}</h5>
//                     <span className="badge badge-primary" style={{ cursor: 'pointer' }} onClick={() => this.props.AddCart(item)}>Add Cart</span>
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       )
//     }
//     return (
//       <div className="row">
//         <h2>Loading...!</h2>
//       </div>
//     )

//   }
// }

// const mapStateToProps = state => {
//   return {
//     _products: state._todoProduct,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
//     AddCart: item => dispatch(AddCart(item))

//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Product)



import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { AddCart } from '../actions'
import { connect } from 'react-redux';
import DataCart from './DataCart';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  product_title: {
    fontWeight: "600",
    marginTop: "12px",
    fontSize: "14px",
    color: "#686868",
    opacity: "0.8",
  },
  product_brand: {
    fontWeight: "600",
    fontSize: "15px",
    color: "black",
    opacity: "0.8",
  },
  product_price: {
    margin: "0",
    marginTop: "8px",
    fontWeight: "600",
    color: "#000",
  },
});

const Product = (props) => {
  const classes = useStyles();
  const { _products } = props._products;
  const { items } = props.items;
  
  const objectStyle = {
    color: "#fff", backgroundColor: "#86888b", fontSize: '20px'
  };
  const objectStyleValid = {
    color: "#fff", backgroundColor: "red", fontSize: '20px'
  };

  return (
    <div className='mainProducts'>
      {
        _products?.map((item) => (
          <div key={item.id} className="card_cont">
            <Card className={classes.root}>
              <CardActionArea >
                <CardMedia
                  component="img"
                  alt={item.name}
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="h4" className={classes.product_brand}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" className={classes.product_price}>
                    Price: {item.price}
                  </Typography>
                </CardContent>
                {/* <CardContent>
                  <DataCart Uid={item} />
                </CardContent> */}
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => props.AddCart(item)} style={{ color: "#fff", backgroundColor: "blue", fontSize: '20px' }}>
                  +
                </Button>
                <Button size="small" variant="contained" onClick={() => props.AddCart(item - 1)} style={objectStyleValid}>
                  -
                </Button>
              </CardActions>

            </Card>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    _products: state._todoProduct,
    items: state._todoProduct
  };
}
function mapDispatchToProps(dispatch) {
  return {
    AddCart: item => dispatch(AddCart(item))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)