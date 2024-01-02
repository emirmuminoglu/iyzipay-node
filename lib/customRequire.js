// import every file in the requests and resources directories
const modules = {
    'requests/BaseRequest.js': require("./requests/BaseRequest.js"),
    'requests/CreateApmInitializeRequest.js': require("./requests/CreateApmInitializeRequest.js"),
    'requests/CreateApprovalRequest.js': require("./requests/CreateApprovalRequest.js"),
    'requests/CreateBasicBkmInitializeRequest.js': require("./requests/CreateBasicBkmInitializeRequest.js"),
    'requests/CreateBasicPaymentRequest.js': require("./requests/CreateBasicPaymentRequest.js"),
    'requests/CreateBkmInitializeRequest.js': require("./requests/CreateBkmInitializeRequest.js"),
    'requests/CreateCancelRequest.js': require("./requests/CreateCancelRequest.js"),
    'requests/CreateCardRequest.js': require("./requests/CreateCardRequest.js"),
    'requests/CreateCheckoutFormInitializeRequest.js': require("./requests/CreateCheckoutFormInitializeRequest.js"),
    'requests/CreateCrossBookingRequest.js': require("./requests/CreateCrossBookingRequest.js"),
    'requests/CreatePaymentPostAuthRequest.js': require("./requests/CreatePaymentPostAuthRequest.js"),
    'requests/CreatePaymentRequest.js': require("./requests/CreatePaymentRequest.js"),
    'requests/CreatePeccoInitializeRequest.js': require("./requests/CreatePeccoInitializeRequest.js"),
    'requests/CreatePeccoPaymentRequest.js': require("./requests/CreatePeccoPaymentRequest.js"),
    'requests/CreateRefundRequest.js': require("./requests/CreateRefundRequest.js"),
    'requests/CreateRefundToBalanceInitRequest.js': require("./requests/CreateRefundToBalanceInitRequest.js"),
    'requests/CreateSettlementToBalanceInitRequest.js': require("./requests/CreateSettlementToBalanceInitRequest.js"),
    'requests/CreateSubMerchantRequest.js': require("./requests/CreateSubMerchantRequest.js"),
    'requests/CreateSubscriptionCheckoutFormInitRequest.js': require("./requests/CreateSubscriptionCheckoutFormInitRequest.js"),
    'requests/CreateSubscriptionCustomerRequest.js': require("./requests/CreateSubscriptionCustomerRequest.js"),
    'requests/CreateSubscriptionInitExistingCustomerRequest.js': require("./requests/CreateSubscriptionInitExistingCustomerRequest.js"),
    'requests/CreateSubscriptionInitRequest.js': require("./requests/CreateSubscriptionInitRequest.js"),
    'requests/CreateSubscriptionPaymentRetryRequest.js': require("./requests/CreateSubscriptionPaymentRetryRequest.js"),
    'requests/CreateSubscriptionPricingPlanPathRequest.js': require("./requests/CreateSubscriptionPricingPlanPathRequest.js"),
    'requests/CreateSubscriptionPricingPlanRequest.js': require("./requests/CreateSubscriptionPricingPlanRequest.js"),
    'requests/CreateSubscriptionProductRequest.js': require("./requests/CreateSubscriptionProductRequest.js"),
    'requests/CreateThreedsPaymentRequest.js': require("./requests/CreateThreedsPaymentRequest.js"),
    'requests/CreateUniversalCardStorageInitializeRequest.js': require("./requests/CreateUniversalCardStorageInitializeRequest.js"),
    'requests/DeleteCardRequest.js': require("./requests/DeleteCardRequest.js"),
    'requests/DeleteSubscriptionPricingPlanPathRequest.js': require("./requests/DeleteSubscriptionPricingPlanPathRequest.js"),
    'requests/RetrieveApmRequest.js': require("./requests/RetrieveApmRequest.js"),
    'requests/RetrieveBinNumberRequest.js': require("./requests/RetrieveBinNumberRequest.js"),
    'requests/RetrieveBkmRequest.js': require("./requests/RetrieveBkmRequest.js"),
    'requests/RetrieveCardListRequest.js': require("./requests/RetrieveCardListRequest.js"),
    'requests/RetrieveCheckoutFormRequest.js': require("./requests/RetrieveCheckoutFormRequest.js"),
    'requests/RetrieveInstallmentInfoRequest.js': require("./requests/RetrieveInstallmentInfoRequest.js"),
    'requests/RetrievePaymentRequest.js': require("./requests/RetrievePaymentRequest.js"),
    'requests/RetrieveSubMerchantRequest.js': require("./requests/RetrieveSubMerchantRequest.js"),
    'requests/RetrieveSubscriptionCheckoutFormPathRequest.js': require("./requests/RetrieveSubscriptionCheckoutFormPathRequest.js"),
    'requests/RetrieveSubscriptionCustomerListRequest.js': require("./requests/RetrieveSubscriptionCustomerListRequest.js"),
    'requests/RetrieveSubscriptionPricingPlanListPathRequest.js': require("./requests/RetrieveSubscriptionPricingPlanListPathRequest.js"),
    'requests/RetrieveSubscriptionPricingPlanListRequest.js': require("./requests/RetrieveSubscriptionPricingPlanListRequest.js"),
    'requests/RetrieveSubscriptionPricingPlanPathRequest.js': require("./requests/RetrieveSubscriptionPricingPlanPathRequest.js"),
    'requests/RetrieveSubscriptionProductListRequest.js': require("./requests/RetrieveSubscriptionProductListRequest.js"),
    'requests/RetrieveTransactionsRequest.js': require("./requests/RetrieveTransactionsRequest.js"),
    'requests/SearchSubscriptionRequest.js': require("./requests/SearchSubscriptionRequest.js"),
    'requests/SubscriptionCustomerPathRequest.js': require("./requests/SubscriptionCustomerPathRequest.js"),
    'requests/SubscriptionPathRequest.js': require("./requests/SubscriptionPathRequest.js"),
    'requests/SubscriptionProductPathRequest.js': require("./requests/SubscriptionProductPathRequest.js"),
    'requests/UpdateSubMerchantPaymentItemRequest.js': require("./requests/UpdateSubMerchantPaymentItemRequest.js"),
    'requests/UpdateSubMerchantRequest.js': require("./requests/UpdateSubMerchantRequest.js"),
    'requests/UpdateSubscriptionCardRequest.js': require("./requests/UpdateSubscriptionCardRequest.js"),
    'requests/UpdateSubscriptionCardWithSubscriptionReferenceCodeRequest.js': require("./requests/UpdateSubscriptionCardWithSubscriptionReferenceCodeRequest.js"),
    'requests/UpdateSubscriptionCustomerRequest.js': require("./requests/UpdateSubscriptionCustomerRequest.js"),
    'requests/UpdateSubscriptionPricingPlanPathRequest.js': require("./requests/UpdateSubscriptionPricingPlanPathRequest.js"),
    'requests/UpdateSubscriptionPricingPlanRequest.js': require("./requests/UpdateSubscriptionPricingPlanRequest.js"),
    'requests/UpdateSubscriptionProductRequest.js': require("./requests/UpdateSubscriptionProductRequest.js"),
    'requests/UpgradeSubscriptionRequest.js': require("./requests/UpgradeSubscriptionRequest.js"),
    'requests/model/Address.js': require("./requests/model/Address.js"),
    'requests/model/Apm.js': require("./requests/model/Apm.js"),
    'requests/model/BasicPayment.js': require("./requests/model/BasicPayment.js"),
    'requests/model/BasketItem.js': require("./requests/model/BasketItem.js"),
    'requests/model/BkmInstallment.js': require("./requests/model/BkmInstallment.js"),
    'requests/model/BkmInstallmentPrice.js': require("./requests/model/BkmInstallmentPrice.js"),
    'requests/model/Buyer.js': require("./requests/model/Buyer.js"),
    'requests/model/CardInformation.js': require("./requests/model/CardInformation.js"),
    'requests/model/Pagination.js': require("./requests/model/Pagination.js"),
    'requests/model/Payment.js': require("./requests/model/Payment.js"),
    'requests/model/PaymentCard.js': require("./requests/model/PaymentCard.js"),
    'requests/model/PaymentItem.js': require("./requests/model/PaymentItem.js"),
    'requests/model/SubscriptionAddress.js': require("./requests/model/SubscriptionAddress.js"),
    'requests/model/SubscriptionCard.js': require("./requests/model/SubscriptionCard.js"),
    'requests/model/SubscriptionCustomer.js': require("./requests/model/SubscriptionCustomer.js"),
    'requests/model/SubscriptionPricingPlan.js': require("./requests/model/SubscriptionPricingPlan.js"),
    'requests/model/SubscriptionProduct.js': require("./requests/model/SubscriptionProduct.js"),
    'resources/ApiTest.js': require("./resources/ApiTest.js"),
    'resources/Apm.js': require("./resources/Apm.js"),
    'resources/Approval.js': require("./resources/Approval.js"),
    'resources/BasicBkm.js': require("./resources/BasicBkm.js"),
    'resources/BasicBkmInitialize.js': require("./resources/BasicBkmInitialize.js"),
    'resources/BasicPayment.js': require("./resources/BasicPayment.js"),
    'resources/BasicPaymentPostAuth.js': require("./resources/BasicPaymentPostAuth.js"),
    'resources/BasicPaymentPreAuth.js': require("./resources/BasicPaymentPreAuth.js"),
    'resources/BasicThreedsInitialize.js': require("./resources/BasicThreedsInitialize.js"),
    'resources/BasicThreedsInitializePreAuth.js': require("./resources/BasicThreedsInitializePreAuth.js"),
    'resources/BasicThreedsPayment.js': require("./resources/BasicThreedsPayment.js"),
    'resources/BinNumber.js': require("./resources/BinNumber.js"),
    'resources/Bkm.js': require("./resources/Bkm.js"),
    'resources/BkmInitialize.js': require("./resources/BkmInitialize.js"),
    'resources/BouncedBankTransferList.js': require("./resources/BouncedBankTransferList.js"),
    'resources/Cancel.js': require("./resources/Cancel.js"),
    'resources/Card.js': require("./resources/Card.js"),
    'resources/CardList.js': require("./resources/CardList.js"),
    'resources/CheckoutForm.js': require("./resources/CheckoutForm.js"),
    'resources/CheckoutFormInitialize.js': require("./resources/CheckoutFormInitialize.js"),
    'resources/CheckoutFormInitializePreAuth.js': require("./resources/CheckoutFormInitializePreAuth.js"),
    'resources/CrossBookingFromSubMerchant.js': require("./resources/CrossBookingFromSubMerchant.js"),
    'resources/CrossBookingToSubMerchant.js': require("./resources/CrossBookingToSubMerchant.js"),
    'resources/Disapproval.js': require("./resources/Disapproval.js"),
    'resources/InstallmentHtml.js': require("./resources/InstallmentHtml.js"),
    'resources/InstallmentInfo.js': require("./resources/InstallmentInfo.js"),
    'resources/Payment.js': require("./resources/Payment.js"),
    'resources/PaymentItem.js': require("./resources/PaymentItem.js"),
    'resources/PaymentPostAuth.js': require("./resources/PaymentPostAuth.js"),
    'resources/PaymentPreAuth.js': require("./resources/PaymentPreAuth.js"),
    'resources/PayoutCompletedTransactionList.js': require("./resources/PayoutCompletedTransactionList.js"),
    'resources/PeccoInitialize.js': require("./resources/PeccoInitialize.js"),
    'resources/PeccoPayment.js': require("./resources/PeccoPayment.js"),
    'resources/Refund.js': require("./resources/Refund.js"),
    'resources/RefundChargedFromMerchant.js': require("./resources/RefundChargedFromMerchant.js"),
    'resources/RefundToBalance.js': require("./resources/RefundToBalance.js"),
    'resources/SettlementToBalance.js': require("./resources/SettlementToBalance.js"),
    'resources/SubMerchant.js': require("./resources/SubMerchant.js"),
    'resources/Subscription.js': require("./resources/Subscription.js"),
    'resources/SubscriptionCard.js': require("./resources/SubscriptionCard.js"),
    'resources/SubscriptionCheckoutForm.js': require("./resources/SubscriptionCheckoutForm.js"),
    'resources/SubscriptionCustomer.js': require("./resources/SubscriptionCustomer.js"),
    'resources/SubscriptionExistingCustomer.js': require("./resources/SubscriptionExistingCustomer.js"),
    'resources/SubscriptionPayment.js': require("./resources/SubscriptionPayment.js"),
    'resources/SubscriptionPricingPlan.js': require("./resources/SubscriptionPricingPlan.js"),
    'resources/SubscriptionProduct.js': require("./resources/SubscriptionProduct.js"),
    'resources/ThreedsInitialize.js': require("./resources/ThreedsInitialize.js"),
    'resources/ThreedsInitializePreAuth.js': require("./resources/ThreedsInitializePreAuth.js"),
    'resources/ThreedsPayment.js': require("./resources/ThreedsPayment.js"),
    'resources/UniversalCardStorageInitialize.js': require("./resources/UniversalCardStorageInitialize.js"),
}

function customRequire(path) {
    return modules[path]
}

module.exports = customRequire;