const express = require("express");
const router = express.Router();
const { protectOps } = require("../middlewares/authMiddleware");
const {
  opsLogin,
  registerOps,
  registerRm,
  listClinics,
  listRms,
  clinicDetails,
  manageSubscription,
  deleteClinic,
  deleteRm,
} = require("../controllers/opsController");

router.post("/login", opsLogin);
router.post("/register-ops", protectOps, registerOps);
router.post("/register-rm", protectOps, registerRm);
router.post("/clinics-list", protectOps, listClinics);
router.post("/rms-list", protectOps, listRms);
router.post("/clinic-details", protectOps, clinicDetails);
router.post("/manage-subscription", protectOps, manageSubscription);
router.post("/delete-clinic", protectOps, deleteClinic);
router.post("/delete-rm", protectOps, deleteRm);

module.exports = router;
