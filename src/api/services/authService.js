import Repository from "../Repository";
import APIName from "../endPoints";

export const authService = {
  // Login with support for Student and Admin accounts
  async login(credentials) {
    const payload = {
      email: credentials.email ? credentials.email.trim() : "",
      password: credentials.password,
    };
    try {
      // 1. Try standard userLogin first (primary for student accounts)
      return await Repository.post(APIName.userLogin, payload);
    } catch (userErr) {
      // 2. If userLogin fails, fallback to AdminLogin (for admin accounts)
      try {
        return await Repository.post(APIName.AdminLogin, payload);
      } catch (adminErr) {
        throw userErr;
      }
    }
  },

  // Direct Admin login
  adminLogin(credentials) {
    return Repository.post(APIName.AdminLogin, {
      email: credentials.email ? credentials.email.trim() : "",
      password: credentials.password,
    });
  },

  // User register (payload matches backend schema: username, email, phone, password, isGoogle, profile)
  register(userData) {
    const username = userData.name || userData.username || "";
    return Repository.post(APIName.register, {
      username: username,
      name: username,
      email: userData.email,
      password: userData.password,
      phone: userData.phone || "",
      isGoogle: false,
      profile: {
        exams: userData.exam ? [userData.exam] : ["IPMAT 2026"],
        stream: userData.stream || "Commerce",
        year: userData.year || "2026",
      },
    });
  },

  // Google login
  googleLogin(payload) {
    return Repository.post(APIName.googlelogin, payload);
  },

  // Verify OTP
  verifyOtp(payload) {
    return Repository.post(APIName.VerifyOtp, payload);
  },

  // Reset Password
  resetPassword(payload) {
    return Repository.post(APIName.resetPassword, payload);
  },
};

export default authService;
