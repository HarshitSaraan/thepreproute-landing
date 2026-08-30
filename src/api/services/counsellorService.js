import Repository from "../Repository";
import { counsellorRequest } from "../endPoints";

export const counsellorService = {
  /**
   * Submit counsellor / IIM mentor consultation request
   * @param {Object} payload
   * @param {string} payload.fullName
   * @param {string} payload.phone
   * @param {string} payload.email
   * @param {"Student" | "Parent"} payload.role
   * @param {string} payload.year
   * @param {string} payload.stream
   */
  createRequest(payload) {
    return Repository.post(counsellorRequest.create, payload);
  },

  getRequests() {
    return Repository.post(counsellorRequest.get);
  },
};

export default counsellorService;
