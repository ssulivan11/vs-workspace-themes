import * as vscode from 'vscode';
import { ConfigurationTarget } from 'vscode';
import { themes, themeCommands } from './themes';

const { commands, workspace } = vscode;

async function updateWorkspaceConfiguration(
  isTheme: boolean,
  themeChange = 'snow'
) {
  if (!workspace.workspaceFolders) {
    console.error('🗂️ No workspace found, please create one first');
    return;
  }

  if (isTheme === true) {
    vscode.window.showInformationMessage(`🗂️ VS Code - Theme: ${themeChange}`);
    console.warn(themeChange);
    console.log(themes(themeChange));

    return await workspace
      .getConfiguration()
      .update(
        'workbench.colorCustomizations',
        themes(themeChange),
        ConfigurationTarget.Workspace
      );
  }

  if (themeChange === 'formatOnSave') {
    const isFormatOnSave = workspace.getConfiguration().editor.formatOnSave;
    vscode.window.showInformationMessage(
      `🗂️ VS Code - formatOnSave: ${isFormatOnSave}`
    );
    return await workspace
      .getConfiguration()
      .update(
        'editor.formatOnSave',
        !isFormatOnSave,
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

  themeCommands.forEach((theme) => {
    commands.registerCommand(
      `vs-workspace-theme.${theme}`,
      async () => await updateWorkspaceConfiguration(true, theme)
    );
  });
}

export function deactivate() {}
