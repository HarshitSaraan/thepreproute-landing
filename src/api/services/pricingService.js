import Repository from "../Repository";
import { PlnAndPricing, coupon } from "../endPoints";

export const pricingService = {
  // Get all pricing plans
  getPlans(payload = {}) {
    return Repository.post(PlnAndPricing.getPlanandPricingdashboard, payload);
  },

  // Verify coupon code
  verifyCoupon(payload) {
    return Repository.post(coupon.verifyCouponCode, payload);
  },
};

export default pricingService;
