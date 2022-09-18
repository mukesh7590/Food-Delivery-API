"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorRoute = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var multer_1 = __importDefault(require("multer"));
var middlewares_1 = require("../middlewares");
var router = express_1.default.Router();
exports.VendorRoute = router;
var imageStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + "_" + file.originalname);
    },
});
var images = (0, multer_1.default)({ storage: imageStorage }).array("images", 10);
router.post("/login", controllers_1.VendorLogin);
router.use(middlewares_1.Authenticate); // this always execute before the 3 lines given below
router.get("/profile", controllers_1.GetVendorProfile);
router.patch("/profile", controllers_1.UpdateVendorProfile);
router.patch("/coverimage", images, controllers_1.UpdateVendorCoverImage);
router.patch("/service", controllers_1.UpdateVendorService);
router.post("/food", images, controllers_1.AddFood);
router.get("/foods", controllers_1.GetFoods);
//# sourceMappingURL=VendorRoute.js.map