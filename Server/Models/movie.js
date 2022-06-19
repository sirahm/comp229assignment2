"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const BusinessSchema = new Schema({
    Name: String,
    ContactNumber: String,
    EmailAddress: String,
  
}, {
    collection: "business"
});
const Model = mongoose_1.default.model("Business", BusinessSchema);
exports.default = Model;
//# sourceMappingURL=movie.js.map