フォルダの内容を確認して、ObsidianのCornellNotesプラグインのインストール手順を調べます。

Read file: README.md
Read file: manifest.json
Read file: package.json
現在のフォルダはObsidianのサンプルプラグインのテンプレートですね。CornellNotesプラグインをインストールするためのToDoリストを作成します：

# CornellNotesプラグイン インストール ToDoリスト

## 📋 前提条件の確認
- [ ] Node.js v16以上がインストールされているか確認 (`node --version`)
- [ ] Obsidianがインストールされているか確認
- [ ] 開発用のObsidian vaultが準備されているか確認

## �� 開発環境のセットアップ
- [ ] このサンプルプラグインをCornellNotes用にコピー
- [ ] 新しいプラグインフォルダを作成: `.obsidian/plugins/cornell-notes/`
- [ ] 必要なファイルをコピー:
  - [ ] `main.ts` → `cornell-notes.ts`
  - [ ] `manifest.json` → CornellNotes用に編集
  - [ ] `package.json` → CornellNotes用に編集
  - [ ] `styles.css` → CornellNotes用に編集
  - [ ] `tsconfig.json`
  - [ ] `esbuild.config.mjs`

## ⚙️ プラグイン設定の変更
- [ ] `manifest.json`の編集:
  - [ ] `id`: "cornell-notes"
  - [ ] `name`: "Cornell Notes"
  - [ ] `description`: "Cornell Notes形式でノートを取るためのプラグイン"
  - [ ] `author`: 自分の名前
- [ ] `package.json`の編集:
  - [ ] `name`: "obsidian-cornell-notes"
  - [ ] `description`: Cornell Notes用の説明

## 🏗️ 開発とビルド
- [ ] プラグインフォルダで `npm install` を実行
- [ ] `npm run dev` で開発モードを開始
- [ ] CornellNotes機能の実装:
  - [ ] コーネルノートテンプレートの作成
  - [ ] 左側: キーポイント・質問
  - [ ] 右側: メインのノート
  - [ ] 下部: サマリー
- [ ] TypeScriptコードの実装 (`main.ts`)
- [ ] CSSスタイルの調整 (`styles.css`)

## 🧪 テストとデバッグ
- [ ] Obsidianを再読み込み
- [ ] プラグインを有効化（設定 → コミュニティプラグイン）
- [ ] CornellNotes機能の動作確認
- [ ] バグの修正と改善

## 📦 リリース準備
- [ ] `npm run build` で本番用ビルド
- [ ] `manifest.json`のバージョン番号を更新
- [ ] `versions.json`に新しいバージョンを追加
- [ ] GitHubリリースの作成
- [ ] 必要なファイルをアップロード:
  - [ ] `main.js`
  - [ ] `styles.css`
  - [ ] `manifest.json`

## 🚀 インストール方法（エンドユーザー向け）
- [ ] 手動インストール手順の作成:
  1. プラグインファイルをダウンロード
  2. `.obsidian/plugins/cornell-notes/` フォルダを作成
  3. `main.js`, `styles.css`, `manifest.json` をコピー
  4. Obsidianでプラグインを有効化

## 📚 ドキュメント
- [ ] README.mdの更新（CornellNotes用）
- [ ] 使用方法の説明
- [ ] インストール手順
- [ ] トラブルシューティング

## 🔄 メンテナンス
- [ ] 定期的なアップデート
- [ ] ユーザーフィードバックの収集
- [ ] 新機能の追加検討