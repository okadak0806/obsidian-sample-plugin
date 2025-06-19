# Cornell Notes Plugin for Obsidian

ObsidianでCornell Notes形式のノートを簡単に作成・管理するためのプラグインです。

## 機能

- 📝 Cornell Notesテンプレートの自動生成
- 🔑 キーポイント・質問セクション
- 📋 サマリーセクション
- ⚙️ カスタマイズ可能な設定
- 🎨 美しいスタイリング

## インストール方法

### 手動インストール

1. このリポジトリをクローンまたはダウンロード
2. `.obsidian/plugins/cornell-notes/` フォルダを作成
3. 以下のファイルをコピー:
   - `main.js`
   - `styles.css`
   - `manifest.json`
4. Obsidianを再起動
5. 設定 → コミュニティプラグインでCornell Notesを有効化

## 使用方法

### 新しいCornell Notesを作成

1. リボンアイコン（📖）をクリック
2. または、コマンドパレットから「Create Cornell Notes」を実行

### 既存のノートをCornell Notes形式に変換

1. ノートを開く
2. コマンドパレットから「Format as Cornell Notes」を実行

## 設定

設定タブで以下の項目をカスタマイズできます：

- **Template Path**: Cornell Notesテンプレートファイルのパス
- **Auto Format**: 新規ノートの自動フォーマット

## 開発

### 前提条件

- Node.js v16以上
- npm

### セットアップ

```bash
npm install
npm run dev
```

### ビルド

```bash
npm run build
```

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告を歓迎します！
