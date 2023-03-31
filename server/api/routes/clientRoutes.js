const express = require("express");
const router = express.Router();

// get function from client controller
const {
    registerClient,
    authClient,
    getClient,
    updateClient,
   
} = require("../controller/clientController");

const {
    registerWorker,
    getWorkers,
    getWorkerById,
    deleteWorker,
    updateWorker,
} = require("../controller/workerController");



//  Protect all routes


// Client routes
router.route("/login").post(authClient);
router.route("/register").post(registerClient);
router.route("/update/:id").put( updateClient);
router.route("/getClient/:id").get( getClient);

// Worker routes
router.route("/registerWorker").post(registerWorker);
router.route("/getWorkers").get(getWorkers);
router.route("/getWorker/:id").get(getWorkerById);
router.route("/deleteWorker/:id").delete(deleteWorker);
router.route("/updateWorker/:id").put(updateWorker);




// export route file
module.exports = router;
