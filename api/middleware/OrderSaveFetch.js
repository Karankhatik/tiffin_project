const { Order } = require("../modals/OrderSchema");
const {
  getCustomerOrders,
  getSellerOrders,
} = require("../databaseUtility/QueryMongoDB");
const Razorpay = require("razorpay");

module.exports = (app) => {
  app.post("/api/get-seller-orders", (req, res) => {
    const { body } = req;
    const { data } = body;
    const { sellerId } = data;
    console.log(data);

    if (!sellerId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }

    getSellerOrders(sellerId, function (result, success) {
      if (success) {
        return res.send({
          success: true,
          data: result,
        });
      } else {
        return res.send({
          success: false,
          message: "Error: Internal Server Error",
        });
      }
    });
  });
  app.post("/api/get-customer-orders", (req, res) => {
    const { body } = req;
    const { data } = body;
    const { userId } = data;

    if (!userId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }

    getCustomerOrders(userId, function (result, success) {
      if (success) {
        return res.send({
          success: true,
          data: result,
        });
      } else {
        return res.send({
          success: false,
          message: "Error: Internal Server error while searching orders",
        });
      }
    });
  });
  app.post("/api/pay", (req, res) => {
    var instance = new Razorpay({
      key_id: "rzp_test_3eMWORUD65IeZa",
      key_secret: "Xmx8035EXbb6pOnpdnOxMGhZ",
    });

    let data = req.body.data;

    var options = {
      amount: data.amount * 100, // amount in the smallest currency unit
      currency: "INR",
      receipt: data.receipt,
    };
    instance.orders.create(options, function (err, order) {
      if (err) {
        res.send({ success: false, message: err.description });
      } else {
        res.send({ success: true, orderId: order.id });
      }
    });
  });

  app.post("/api/save-payment", (req, res) => {
    const key_secret = "Xmx8035EXbb6pOnpdnOxMGhZ";

    let data = req.body.data;

    let body = data.orderId + "|" + data.paymentId;

    var crypto = require("crypto");
    var expectedSignature = crypto
      .createHmac("sha256", key_secret)
      .update(body.toString())
      .digest("hex");

    // console.log("sig received ", data.signature);
    // console.log("sig generated ", expectedSignature);

    if (expectedSignature !== data.signature) {
      res.send({ success: false, message: "Payment Not verified" });
    }

    const { sellerId, userId, tiffinId } = data;

    if (!userId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }
    if (!tiffinId && !sellerId) {
      return res.send({
        success: false,
        message: "Error: Wrong Information",
      });
    }
    // Save the new order
    const newOrder = new Order();
    newOrder.sellerId = sellerId;
    newOrder.userId = userId;
    newOrder.tiffinId = tiffinId;
    newOrder.paymentId = data.paymentId;

    newOrder.save((err) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: "Internal Server Error",
        });
      }

      return res.send({
        success: true,
        message: "Congratulations! Order Saved!",
      });
    });
  });
};
