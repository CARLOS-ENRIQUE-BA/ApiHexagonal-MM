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
exports.connectToMySQL = exports.connectToMongo = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const promise_1 = require("mysql2/promise");
dotenv_1.default.config();
// MongoDB connection configuration
const connectToMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Mongo URI:', 'mongodb://52.201.183.208:27017/tareita');
        yield mongoose_1.default.connect('mongodb://52.201.183.208:27017/tareita');
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
});
exports.connectToMongo = connectToMongo;
// MySQL connection configuration
const connectToMySQL = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield (0, promise_1.createConnection)({
            host: 'database-1.co7a9umymazi.us-east-1.rds.amazonaws.com',
            user: 'admin',
            password: 'KDF-12345',
            database: 'tareita'
        });
        console.log('Connected to MySQL');
        return connection;
    }
    catch (error) {
        console.error('Error connecting to MySQL', error);
        process.exit(1);
    }
});
exports.connectToMySQL = connectToMySQL;
