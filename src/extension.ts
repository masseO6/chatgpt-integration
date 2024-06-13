import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {

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

export function deactivate() {}

async function getChatGPTResponse(prompt: string): Promise<string> {
    const apiKey = '';
    const endpoint = 'https://api.openai.com/v1/completions';
    const response = await axios.post(endpoint, {
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
