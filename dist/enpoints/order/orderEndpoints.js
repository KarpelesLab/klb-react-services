'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getOrdersEndpoint = exports.getOrdersEndpoint = function getOrdersEndpoint() {
  return 'Order';
};
var getOrderEndpoint = exports.getOrderEndpoint = function getOrderEndpoint(orderId) {
  return 'Order/' + orderId;
};