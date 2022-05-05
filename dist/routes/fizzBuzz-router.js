"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fizzBuzz_service_1 = require("@services/fizzBuzz-service");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const errors_1 = require("@shared/errors");
// Constants
const router = (0, express_1.Router)();
const { OK } = http_status_codes_1.default;
/**
 * Get fizzBuzz.
 */
router.get('/:count', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { count } = req.params;
    const fizBuzzCount = +count;
    if (typeof fizBuzzCount !== 'number') {
        throw new errors_1.BadRequest();
    }
    const fizBuzz = yield (0, fizzBuzz_service_1.getFizzBuzz)(fizBuzzCount);
    return res.status(OK).json({ fizBuzz });
}));
exports.default = router;
