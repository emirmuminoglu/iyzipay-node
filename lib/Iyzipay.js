'use strict';

const ApiTest = require('./resources/ApiTest.js');
const Apm = require('./resources/Apm.js');
const Approval = require('./resources/Approval.js');
const BasicBkm = require('./resources/BasicBkm.js');
const BasicBkmInitialize = require('./resources/BasicBkmInitialize.js');
const BasicPayment = require('./resources/BasicPayment.js');
const BasicPaymentPostAuth = require('./resources/BasicPaymentPostAuth.js');
const BasicPaymentPreAuth = require('./resources/BasicPaymentPreAuth.js');
const BasicThreedsInitialize = require('./resources/BasicThreedsInitialize.js');
const BasicThreedsInitializePreAuth = require('./resources/BasicThreedsInitializePreAuth.js');
const BasicThreedsPayment = require('./resources/BasicThreedsPayment.js');
const BinNumber = require('./resources/BinNumber.js');
const Bkm = require('./resources/Bkm.js');
const BkmInitialize = require('./resources/BkmInitialize.js');
const BouncedBankTransferList = require('./resources/BouncedBankTransferList.js');
const Cancel = require('./resources/Cancel.js');
const Card = require('./resources/Card.js');
const CardList = require('./resources/CardList.js');
const CheckoutForm = require('./resources/CheckoutForm.js');
const CheckoutFormInitialize = require('./resources/CheckoutFormInitialize.js');
const CheckoutFormInitializePreAuth = require('./resources/CheckoutFormInitializePreAuth.js');
const CrossBookingFromSubMerchant = require('./resources/CrossBookingFromSubMerchant.js');
const CrossBookingToSubMerchant = require('./resources/CrossBookingToSubMerchant.js');
const Disapproval = require('./resources/Disapproval.js');
const InstallmentHtml = require('./resources/InstallmentHtml.js');
const InstallmentInfo = require('./resources/InstallmentInfo.js');
const Payment = require('./resources/Payment.js');
const PaymentItem = require('./resources/PaymentItem.js');
const PaymentPostAuth = require('./resources/PaymentPostAuth.js');
const PaymentPreAuth = require('./resources/PaymentPreAuth.js');
const PayoutCompletedTransactionList = require('./resources/PayoutCompletedTransactionList.js');
const PeccoInitialize = require('./resources/PeccoInitialize.js');
const PeccoPayment = require('./resources/PeccoPayment.js');
const Refund = require('./resources/Refund.js');
const RefundChargedFromMerchant = require('./resources/RefundChargedFromMerchant.js');
const RefundToBalance = require('./resources/RefundToBalance.js');
const SettlementToBalance = require('./resources/SettlementToBalance.js');
const SubMerchant = require('./resources/SubMerchant.js');
const Subscription = require('./resources/Subscription.js');
const SubscriptionCard = require('./resources/SubscriptionCard.js');
const SubscriptionCheckoutForm = require('./resources/SubscriptionCheckoutForm.js');
const SubscriptionCustomer = require('./resources/SubscriptionCustomer.js');
const SubscriptionExistingCustomer = require('./resources/SubscriptionExistingCustomer.js');
const SubscriptionPayment = require('./resources/SubscriptionPayment.js');
const SubscriptionPricingPlan = require('./resources/SubscriptionPricingPlan.js');
const SubscriptionProduct = require('./resources/SubscriptionProduct.js');
const ThreedsInitialize = require('./resources/ThreedsInitialize.js');
const ThreedsInitializePreAuth = require('./resources/ThreedsInitializePreAuth.js');
const ThreedsPayment = require('./resources/ThreedsPayment.js');
const UniversalCardStorageInitialize = require('./resources/UniversalCardStorageInitialize.js');

function Iyzipay(config) {
    if (!(this instanceof Iyzipay)) {
        return new Iyzipay(config);
    }

    if (typeof config === 'undefined') {
        config = {
            uri: null,
            apiKey: null,
            secretKey: null
        }
    }
    this._config = {
        uri: config.uri || process.env.IYZIPAY_URI,
        apiKey: config.apiKey || process.env.IYZIPAY_API_KEY,
        secretKey: config.secretKey || process.env.IYZIPAY_SECRET_KEY
    };

    this._validateIyzipayOptions(this._config);

    this._initResources();
}

Iyzipay.prototype._initResources = function () {
    var _self = this;

    _self.apiTest = new ApiTest(_self._config);
    _self.apm = new Apm(_self._config);
    _self.approval = new Approval(_self._config);
    _self.basicBkm = new BasicBkm(_self._config);
    _self.basicBkmInitialize = new BasicBkmInitialize(_self._config);
    _self.basicPayment = new BasicPayment(_self._config);
    _self.basicPaymentPostAuth = new BasicPaymentPostAuth(_self._config);
    _self.basicPaymentPreAuth = new BasicPaymentPreAuth(_self._config);
    _self.basicThreedsInitialize = new BasicThreedsInitialize(_self._config);
    _self.basicThreedsInitializePreAuth = new BasicThreedsInitializePreAuth(_self._config);
    _self.basicThreedsPayment = new BasicThreedsPayment(_self._config);
    _self.binNumber = new BinNumber(_self._config);
    _self.bkm = new Bkm(_self._config);
    _self.bkmInitialize = new BkmInitialize(_self._config);
    _self.bouncedBankTransferList = new BouncedBankTransferList(_self._config);
    _self.cancel = new Cancel(_self._config);
    _self.card = new Card(_self._config);
    _self.cardList = new CardList(_self._config);
    _self.checkoutForm = new CheckoutForm(_self._config);
    _self.checkoutFormInitialize = new CheckoutFormInitialize(_self._config);
    _self.checkoutFormInitializePreAuth = new CheckoutFormInitializePreAuth(_self._config);
    _self.crossBookingFromSubMerchant = new CrossBookingFromSubMerchant(_self._config);
    _self.crossBookingToSubMerchant = new CrossBookingToSubMerchant(_self._config);
    _self.disapproval = new Disapproval(_self._config);
    _self.installmentHtml = new InstallmentHtml(_self._config);
    _self.installmentInfo = new InstallmentInfo(_self._config);
    _self.payment = new Payment(_self._config);
    _self.paymentItem = new PaymentItem(_self._config);
    _self.paymentPostAuth = new PaymentPostAuth(_self._config);
    _self.paymentPreAuth = new PaymentPreAuth(_self._config);
    _self.payoutCompletedTransactionList = new PayoutCompletedTransactionList(_self._config);
    _self.peccoInitialize = new PeccoInitialize(_self._config);
    _self.peccoPayment = new PeccoPayment(_self._config);
    _self.refund = new Refund(_self._config);
    _self.refundChargedFromMerchant = new RefundChargedFromMerchant(_self._config);
    _self.refundToBalance = new RefundToBalance(_self._config);
    _self.settlementToBalance = new SettlementToBalance(_self._config);
    _self.subMerchant = new SubMerchant(_self._config);
    _self.subscription = new Subscription(_self._config);
    _self.subscriptionCard = new SubscriptionCard(_self._config);
    _self.subscriptionCheckoutForm = new SubscriptionCheckoutForm(_self._config);
    _self.subscriptionCustomer = new SubscriptionCustomer(_self._config);
    _self.subscriptionExistingCustomer = new SubscriptionExistingCustomer(_self._config);
    _self.subscriptionPayment = new SubscriptionPayment(_self._config);
    _self.subscriptionPricingPlan = new SubscriptionPricingPlan(_self._config);
    _self.subscriptionProduct = new SubscriptionProduct(_self._config);
    _self.threedsInitialize = new ThreedsInitialize(_self._config);
    _self.threedsInitializePreAuth = new ThreedsInitializePreAuth(_self._config);
    _self.threedsPayment = new ThreedsPayment(_self._config);
    _self.universalCardStorageInitialize = new UniversalCardStorageInitialize(_self._config);
};

Iyzipay.prototype._validateIyzipayOptions = function (config) {
    if (typeof config['uri'] === 'undefined' || config['uri'] === '') throw new TypeError('uri cannot be empty');
    if (typeof config['apiKey'] === 'undefined' || config['apiKey'] === '') throw new TypeError('apiKey cannot be empty');
    if (typeof config['secretKey'] === 'undefined' || config['secretKey'] === '') throw new TypeError('secretKey cannot be empty');
};

Iyzipay.LOCALE = {
    TR: 'tr',
    EN: 'en'
};

Iyzipay.PAYMENT_GROUP = {
    PRODUCT: 'PRODUCT',
    LISTING: 'LISTING',
    SUBSCRIPTION: 'SUBSCRIPTION'
};

Iyzipay.BASKET_ITEM_TYPE = {
    PHYSICAL: 'PHYSICAL',
    VIRTUAL: 'VIRTUAL'
};

Iyzipay.PAYMENT_CHANNEL = {
    MOBILE: 'MOBILE',
    WEB: 'WEB',
    MOBILE_WEB: 'MOBILE_WEB',
    MOBILE_IOS: 'MOBILE_IOS',
    MOBILE_ANDROID: 'MOBILE_ANDROID',
    MOBILE_WINDOWS: 'MOBILE_WINDOWS',
    MOBILE_TABLET: 'MOBILE_TABLET',
    MOBILE_PHONE: 'MOBILE_PHONE'
};

Iyzipay.SUB_MERCHANT_TYPE = {
    PERSONAL: 'PERSONAL',
    PRIVATE_COMPANY: 'PRIVATE_COMPANY',
    LIMITED_OR_JOINT_STOCK_COMPANY: 'LIMITED_OR_JOINT_STOCK_COMPANY'
};

Iyzipay.CURRENCY = {
    TRY: 'TRY',
    EUR: 'EUR',
    USD: 'USD',
    IRR: 'IRR',
    GBP: 'GBP',
    NOK: 'NOK',
    RUB: 'RUB',
    CHF: 'CHF'
};

Iyzipay.APM_TYPE = {
    SOFORT: 'SOFORT',
    IDEAL: 'IDEAL',
    QIWI: 'QIWI',
    GIROPAY: 'GIROPAY'
};

Iyzipay.REFUND_REASON = {
    DOUBLE_PAYMENT: 'double_payment',
    BUYER_REQUEST: 'buyer_request',
    FRAUD: 'fraud',
    OTHER: 'other'
};

Iyzipay.PLAN_PAYMENT_TYPE = {
    RECURRING: "RECURRING"
};

Iyzipay.SUBSCRIPTION_PRICING_PLAN_INTERVAL = {
    DAILY: 'DAILY',
    WEEKLY: 'WEEKLY',
    MONTHLY: 'MONTHLY',
    YEARLY: 'YEARLY'
};

Iyzipay.SUBSCRIPTION_UPGRADE_PERIOD = {
    NOW: 'NOW'
};

Iyzipay.SUBSCRIPTION_STATUS = {
    EXPIRED: 'EXPIRED',
    UNPAID: 'UNPAID',
    CANCELED: 'CANCELED',
    ACTIVE: 'ACTIVE',
    PENDING: 'PENDING',
    UPGRADED: 'UPGRADED'
};

Iyzipay.SUBSCRIPTION_INITIAL_STATUS = {
    ACTIVE: 'ACTIVE',
    PENDING: 'PENDING'
};

module.exports = Iyzipay;
