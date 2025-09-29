"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrdersEndpoint = exports.getOrderProcessEndpoint = exports.getOrderEndpoint = void 0;
const getOrdersEndpoint = () => 'Order';
exports.getOrdersEndpoint = getOrdersEndpoint;
const getOrderEndpoint = orderId => `Order/${orderId}`;
exports.getOrderEndpoint = getOrderEndpoint;
const getOrderProcessEndpoint = orderId => `Order/${orderId}:process`;
exports.getOrderProcessEndpoint = getOrderProcessEndpoint;