import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('chatgpt-integration.askChatGPT', async () => {
        const prompt = await vscode.window.showInputBox({ prompt: 'Ask ChatGPT a question' });

        if (prompt) {
            const response = await getChatGPTResponse(prompt);
            vscode.window.showInformationMessage(response);
        }
    });

    context.subscriptions.push(disposable);
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
