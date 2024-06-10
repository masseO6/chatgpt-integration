import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {}

async function getChatGPTResponse(prompt: string): Promise<string> {
    const apiKey = 'YOUR_OPENAI_API_KEY';
    const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const response = await axios.post(endpoint, {
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
