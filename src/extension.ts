import * as vscode from 'vscode';
import { ConfigurationTarget } from 'vscode';
import themes from './themes';

const { commands, workspace } = vscode;

async function updateWorkspaceConfiguration(theme = 'sand') {
  if (!workspace.workspaceFolders) {
    console.error('🗂️ No workspace found, please create one first!');
    return;
  }

  vscode.window.showInformationMessage(`🗂️ VS Code Workspace Theme: ${theme}`);

  return await workspace
    .getConfiguration()
    .update(
      'workbench.colorCustomizations',
      themes[theme],
      ConfigurationTarget.Workspace
    );
}

export function activate() {
  for (let [key] of Object.entries(themes)) {
    commands.registerCommand(
      `vs-workspace-theme.${key}`,
      async () => await updateWorkspaceConfiguration(key)
    );
  }
}

export function deactivate() {}
