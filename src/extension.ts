import * as vscode from 'vscode';
import { ConfigurationTarget } from 'vscode';
import themes from './themes';

const { commands, workspace } = vscode;

async function updateWorkspaceConfiguration(
  isTheme: boolean,
  themeChange = 'sand'
) {
  if (!workspace.workspaceFolders) {
    console.error('🗂️ No workspace found, please create one first');
    return;
  }

  vscode.window.showInformationMessage(`🗂️ VS Code Workspace: ${themeChange}`);

  if (isTheme === true) {
    return await workspace
      .getConfiguration()
      .update(
        'workbench.colorCustomizations',
        themes[themeChange],
        ConfigurationTarget.Workspace
      );
  }

  if (themeChange === 'formatOnSave') {
    return await workspace
      .getConfiguration()
      .update(
        'editor.formatOnSave',
        !workspace.getConfiguration().editor.formatOnSave,
        ConfigurationTarget.Workspace
      );
  }

  console.error('🗂️ No invalid entry, please try again');
  return;
}

export function activate() {
  commands.registerCommand(
    `vs-workspace-theme.formatOnSave`,
    async () => await updateWorkspaceConfiguration(false, 'formatOnSave')
  );

  for (let [theme] of Object.entries(themes)) {
    commands.registerCommand(
      `vs-workspace-theme.${theme}`,
      async () => await updateWorkspaceConfiguration(true, theme)
    );
  }
}

export function deactivate() {}
