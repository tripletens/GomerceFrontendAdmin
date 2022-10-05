import "./styles.css";
import "./index.scss";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RepeatIcon from "@mui/icons-material/Repeat";
import RedeemIcon from "@mui/icons-material/Redeem";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HailIcon from "@mui/icons-material/Hail";
import { OrderDetailCard } from "./OrderDtailCard";

const products = [
  {
    id: "1",
    name: "Baby Pink Shoes",
    description: "A very smooth and comfortable shoes for baby.",
    img: "https://loopinfosol.in/themeforest/ekka-html-v32/ekka-admin/assets/img/products/p1.jpg",
    price: 15,
    quantity: 75,
  },
  {
    id: "2",
    name: "Tee-Shirt For Men",
    description: "Classy and full sleeve tee-shirt for boys or men.",
    img: "https://loopinfosol.in/themeforest/ekka-html-v32/ekka-admin/assets/img/products/p2.jpg",
    price: 15,
    quantity: 75,
  },
  {
    id: "3",
    name: "Round Cap",
    description: "Comfortable round cut unisex cap.",
    img: "https://loopinfosol.in/themeforest/ekka-html-v32/ekka-admin/assets/img/products/p4.jpg",
    price: 2,
    quantity: 75,
  },
];

export const OrderDetails = () => {
  // const [subtotals, setSubTotals] = useState([]);
  let subtotals = [];

  // const updateSubTotals = (subtotal) => {
  //   let totalArray = [];
  //   totalArray.push(subtotal);
  //   setSubTotals(totalArray);
  // };

  return (
    <>
      <Box className="ec-content-wrapper">
        <div className="content">
          {/* <div className="breadcrumb-wrapper breadcrumb-wrapper-2">
            <h1>Order Detail</h1>
            <p className="breadcrumbs">
              <span>
                <a href="index.html">Home</a>
              </span>
              <span>
                <i className="mdi mdi-chevron-right"></i>
              </span>
              Orders
            </p>
          </div> */}
          <div className="row">
            <div className="col-12">
              <div className="ec-odr-dtl card card-default">
                <div className="card-header card-header-border-bottom d-flex justify-content-between">
                  <h2 className="ec-odr">
                    Order Detail
                    {/* <br /> */}
                    <span className="small">Order ID: #1082</span>
                  </h2>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6">
                      <OrderDetailCard title="Customer:">
                        Twitter, Inc.
                        <br />
                        795 Folsom Ave, Suite 600
                        <br />
                        San Francisco, CA 94107
                        <br />
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                      </OrderDetailCard>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <OrderDetailCard title="Shipped To:">
                        Elaine Hernandez
                        <br />
                        P. Sherman 42,
                        <br />
                        Wallaby Way, Sidney
                        <br />
                        <abbr title="Phone">P:</abbr> (123) 345-6789
                      </OrderDetailCard>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <OrderDetailCard title="Payment Method:">
                        Visa ending **** 1234
                        <br />
                        h.elaine@gmail.com
                        <br />
                      </OrderDetailCard>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <OrderDetailCard title="Order Date:">
                        4:34PM,
                        <br />
                        Wed, Aug 13, 2020
                      </OrderDetailCard>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="tbl-title">PRODUCT SUMMARY</h3>
                      <div className="table-responsive">
                        <Table className="table table-striped o-tbl">
                          <TableHead>
                            <TableRow className="line">
                              <TableCell>
                                <strong>#</strong>
                              </TableCell>
                              <TableCell className="text-left">
                                <strong>IMAGE</strong>
                              </TableCell>
                              <TableCell className="text-left">
                                <strong>PRODUCT</strong>
                              </TableCell>
                              <TableCell className="text-left">
                                <strong>PRICE/UNIT</strong>
                              </TableCell>
                              <TableCell className="text-left">
                                <strong>QUANTITY</strong>
                              </TableCell>
                              <TableCell className="text-left">
                                <strong>SUBTOTAL</strong>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {products.map((product) => {
                              // updateSubTotals(product.price * product.quantity);
                              subtotals.push(product.price * product.quantity);
                              return (
                                <TableRow key={product.id}>
                                  <TableCell>{product.id}</TableCell>
                                  <TableCell>
                                    <img
                                      className="product-img"
                                      src={product.img}
                                      alt=""
                                    />
                                  </TableCell>
                                  <TableCell>
                                    <strong>{product.name}</strong>
                                    <br />
                                    {product.description}
                                  </TableCell>
                                  <TableCell>
                                    ${product.price.toFixed(2)}
                                  </TableCell>
                                  <TableCell>{product.quantity}</TableCell>
                                  <TableCell>
                                    $
                                    {(product.price * product.quantity).toFixed(
                                      2
                                    )}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                            <TableRow>
                              <TableCell colSpan="4"></TableCell>
                              <TableCell className="text-right">
                                <strong>Taxes</strong>
                              </TableCell>
                              <TableCell className="text-right">
                                <strong>N/A</strong>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell colSpan="4"></TableCell>
                              <TableCell className="text-right">
                                <strong>Total</strong>
                              </TableCell>
                              <TableCell className="text-right">
                                <strong>
                                  $
                                  {subtotals.reduce((a, b) => a + b).toFixed(2)}
                                </strong>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell colSpan="4"></TableCell>
                              <TableCell className="text-right">
                                <strong>Payment Status</strong>
                              </TableCell>
                              <TableCell className="text-right">
                                <strong>PAID</strong>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4 trk-order">
                <div className="p-4 text-center text-white text-lg bg-dark rounded-top">
                  <span className="text-uppercase">Tracking Order No - </span>
                  <span className="text-medium">34VB5540K83</span>
                </div>
                <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
                  <div className="w-100 text-center py-1 px-2">
                    <span className="text-medium">Shipped Via:</span> UPS Ground
                  </div>
                  <div className="w-100 text-center py-1 px-2">
                    <span className="text-medium">Status:</span> Checking
                    Quality
                  </div>
                  <div className="w-100 text-center py-1 px-2">
                    <span className="text-medium">Expected Date:</span> DEC 09,
                    2021
                  </div>
                </div>
                <div className="card-body">
                  <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
                    <div className="step completed">
                      <div className="step-icon-wrap">
                        <div className="step-icon">
                          <ShoppingCartIcon />
                        </div>
                      </div>
                      <h4 className="step-title">Confirmed Order</h4>
                    </div>
                    <div className="step completed">
                      <div className="step-icon-wrap">
                        <div className="step-icon">
                          <RepeatIcon />
                        </div>
                      </div>
                      <h4 className="step-title">Processing Order</h4>
                    </div>
                    <div className="step completed">
                      <div className="step-icon-wrap">
                        <div className="step-icon">
                          <RedeemIcon />
                        </div>
                      </div>
                      <h4 className="step-title">Product Dispatched</h4>
                    </div>
                    <div className="step">
                      <div className="step-icon-wrap">
                        <div className="step-icon">
                          <LocalShippingIcon />
                        </div>
                      </div>
                      <h4 className="step-title">On Delivery</h4>
                    </div>
                    <div className="step">
                      <div className="step-icon-wrap">
                        <div className="step-icon">
                          <HailIcon />
                        </div>
                      </div>
                      <h4 className="step-title">Product Delivered</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
