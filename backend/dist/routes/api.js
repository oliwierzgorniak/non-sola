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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../index");
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.email) || !((_b = req.body) === null || _b === void 0 ? void 0 : _b.password)) {
        res
            .status(400)
            .json({ result: "error", content: "Email or password missing" });
        return;
    }
    const user = yield index_1.prisma.user.create({
        data: {
            email: req.body.email,
            password: req.body.password,
        },
    });
    // @ts-ignore
    req.session.userId = user.id;
    res.json({
        result: "success",
        content: "Signed up and loged in successfully!",
    });
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.email) || !((_b = req.body) === null || _b === void 0 ? void 0 : _b.password)) {
        res
            .status(400)
            .json({ result: "error", content: "Email or password missing" });
        return;
    }
    const user = yield index_1.prisma.user.findFirst({
        where: {
            email: req.body.email,
            password: req.body.password,
        },
    });
    if (!user) {
        res.status(400).json({
            result: "error",
            content: "Email or password is incorrect",
        });
    }
    else {
        // @ts-ignore
        req.session.userId = user.id;
        res.json({
            result: "success",
            content: "User loged in successfully",
        });
    }
}));
exports.default = router;
