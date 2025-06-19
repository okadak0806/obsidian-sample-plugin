import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, TFile } from 'obsidian';

// Remember to rename these classes and interfaces!

interface CornellNotesSettings {
	templatePath: string;
	enableAutoFormat: boolean;
}

const DEFAULT_SETTINGS: CornellNotesSettings = {
	templatePath: 'templates/cornell-notes',
	enableAutoFormat: true
}

export default class CornellNotesPlugin extends Plugin {
	settings: CornellNotesSettings;

	async onload() {
		await this.loadSettings();

		// リボンアイコンを追加
		const ribbonIconEl = this.addRibbonIcon('book-open', 'Create Cornell Notes', (evt: MouseEvent) => {
			this.createCornellNote();
		});
		ribbonIconEl.addClass('cornell-notes-ribbon-class');

		// ステータスバーアイテムを追加
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Cornell Notes Ready');

		// コマンドを追加
		this.addCommand({
			id: 'create-cornell-note',
			name: 'Create Cornell Notes',
			callback: () => {
				this.createCornellNote();
			}
		});

		this.addCommand({
			id: 'format-cornell-note',
			name: 'Format as Cornell Notes',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				this.formatAsCornellNotes(editor);
			}
		});

		// 設定タブを追加
		this.addSettingTab(new CornellNotesSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {
		// クリーンアップ処理
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async createCornellNote() {
		const template = this.getCornellNotesTemplate();
		const fileName = `Cornell Notes ${new Date().toISOString().split('T')[0]}`;
		
		try {
			const file = await this.app.vault.create(`${fileName}.md`, template);
			await this.app.workspace.getLeaf().openFile(file);
			new Notice('Cornell Notes created successfully!');
		} catch (error) {
			new Notice('Failed to create Cornell Notes');
			console.error(error);
		}
	}

	formatAsCornellNotes(editor: Editor) {
		const content = editor.getValue();
		const formattedContent = this.getCornellNotesTemplate();
		editor.setValue(formattedContent);
		new Notice('Content formatted as Cornell Notes');
	}

	getCornellNotesTemplate(): string {
		return `# Cornell Notes

## 📝 Main Notes
<!-- メインのノート内容をここに記入 -->

## 🔑 Key Points & Questions
<!-- 左側: キーポイントや質問をここに記入 -->

## 📋 Summary
<!-- 下部: サマリーをここに記入 -->

---
*Created with Cornell Notes Plugin*
`;
	}
}

class CornellNotesSettingTab extends PluginSettingTab {
	plugin: CornellNotesPlugin;

	constructor(app: App, plugin: CornellNotesPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Cornell Notes Settings'});

		new Setting(containerEl)
			.setName('Template Path')
			.setDesc('Path to Cornell Notes template file')
			.addText(text => text
				.setPlaceholder('templates/cornell-notes')
				.setValue(this.plugin.settings.templatePath)
				.onChange(async (value) => {
					this.plugin.settings.templatePath = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Auto Format')
			.setDesc('Automatically format new notes as Cornell Notes')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.enableAutoFormat)
				.onChange(async (value) => {
					this.plugin.settings.enableAutoFormat = value;
					await this.plugin.saveSettings();
				}));
	}
}
