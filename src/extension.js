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
    let askChatGPTDisposable = vscode.commands.registerCommand('chatgpt-integration.askChatGPT', async () => {
        const prompt = await vscode.window.showInputBox({ prompt: 'Fai una domanda a ChatGPT' });
        if (prompt) {
            const response = await getChatGPTResponse(prompt);
            vscode.window.showInformationMessage(response);
        }
    });
    let modifyTextDisposable = vscode.commands.registerCommand('chatgpt-integration.modifyText', async () => {
        const prompt = await vscode.window.showInputBox({ prompt: 'Che modifica vuoi fare?' });
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('Nessun editor attivo.');
            return;
        }
        const document = editor.document;
        const selection = editor.selection;
        const selectedText = document.getText(selection);
        if (prompt) {
            const response = await getChatGPTResponse(prompt);
            vscode.window.showInformationMessage(response);
            const modifiedText = response;
            if (modifiedText !== undefined) {
                editor.edit(editBuilder => {
                    editBuilder.replace(selection, modifiedText);
                });
            }
        }
    });
    context.subscriptions.push(askChatGPTDisposable, modifyTextDisposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
async function getChatGPTResponse(prompt) {
    const apiKey = '';
    const endpoint = 'https://api.openai.com/v1/completions';
    const response = await axios_1.default.post(endpoint, {
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
        model: "gpt-3.5-turbo",
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    });
    return response.data.choices[0].text.trim();
}
//# sourceMappingURL=extension.js.map