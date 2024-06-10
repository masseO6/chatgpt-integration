"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const axios_1 = __importDefault(require("axios"));
function activate(context) {
    console.log('Congratulations, your extension "chatgpt-integration" is now active!');
    let disposable = vscode.commands.registerCommand('chatgpt-integration.askChatGPT', async () => {
        const prompt = await vscode.window.showInputBox({ prompt: 'Ask ChatGPT a question' });
        if (prompt) {
            const response = await getChatGPTResponse(prompt);
            vscode.window.showInformationMessage(response);
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
async function getChatGPTResponse(prompt) {
    const apiKey = 'YOUR_OPENAI_API_KEY';
    const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const response = await axios_1.default.post(endpoint, {
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });
    return response.data.choices[0].text.trim();
}
//# sourceMappingURL=extension.js.map