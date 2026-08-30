export const counsellorRequest = {
  create: "request/create",
  get: "request/get",
};

export const UserAuth = {
  userLogin: "Auth/userlogin",
  AdminLogin: "Auth/adminLogin",
  googlelogin: "Auth/googlelogin",
  register: "Auth/signUp",
  checkUser: "Auth/checUser",
  VerifyOtp: "Auth/VerifyOtp",
  resetPassword: "Auth/resetPassword",
};

export const PlnAndPricing = {
  create: "PlanPricing/create",
  get: "PlanPricing/get",
  getPlanandPricingCUETEXAM: "PlanPricing/cuetExam",
  update: "PlanPricing/update",
  getPlanandPricingdashboard: "PlanPricing/getDashboardPlanPrising",
};

export const coupon = {
  verifyCouponCode: "coupon/verifyCouponCode",
};

const APIName = {
  ...UserAuth,
  counsellorRequest,
  PlnAndPricing,
};

export default APIName;
